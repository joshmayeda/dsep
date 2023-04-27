const dbConnection = require("../config/db.js");

const allMiracles = async (req, res) => {
	console.log("magic allMiracles called.");
	return new Promise((resolve, reject) => {
		const query = `select * from miracles;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in MagicController::allMiracles", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allMiracles.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allPyromancies = async (req, res) => {
	console.log("magic allPyromancies called.");
	return new Promise((resolve, reject) => {
		const query = `select * from pyromancies;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in MagicController::allPyromancies", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allPyromancies.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allSorceries = async (req, res) => {
	console.log("magic allSorceries called.");
	return new Promise((resolve, reject) => {
		const query = `select * from sorceries;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in MagicController::allSorceries", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allSorceries.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

module.exports = {
    allMiracles,
    allPyromancies,
    allSorceries
}