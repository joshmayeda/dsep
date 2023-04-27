const dbConnection = require("../config/db.js");

const allArrows = async (req, res) => {
	console.log("arrows allArrows called.");
	return new Promise((resolve, reject) => {
		const query = `select * from arrows;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in ArrowssController::allArrows", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allArrows.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

module.exports = {
    allArrows
}