const dbConnection = require("../config/db.js");

const allBolts = async (req, res) => {
	console.log("rings allBolts called.");
	return new Promise((resolve, reject) => {
		const query = `select * from bolts;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in BoltsController::allBolts", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allBolts.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

module.exports = {
    allBolts
}