const dbConnection = require("../config/db.js");

const allArmor = async (req, res) => {
	console.log("armor allArmor called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from helms
        union select * from chest_armor
        union select * from gauntlets
        union select * from leg_armor
        ;
                        `;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in ArmorController::allArmor", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allArmor.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allHelms = async (req, res) => {
	console.log("armor allHelms called.");
	return new Promise((resolve, reject) => {
		const query = `select * from helms;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in ArmorController::allHelms", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allHelms.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allChestArmor = async (req, res) => {
	console.log("armor allChestArmor called.");
	return new Promise((resolve, reject) => {
		const query = `select * from chest_armor;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in ArmorController::allChestArmor", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allChestArmor.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allGauntlets = async (req, res) => {
	console.log("armor allGauntlets called.");
	return new Promise((resolve, reject) => {
		const query = `select * from gauntlets;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in ArmorController::allGauntlets", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allGauntlets.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allLegArmor = async (req, res) => {
	console.log("armor allLegArmor called.");
	return new Promise((resolve, reject) => {
		const query = `select * from leg_armor;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in ArmorController::allLegArmor", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allLegArmor.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

module.exports = {
    allArmor,
    allHelms,
    allChestArmor,
    allGauntlets,
    allLegArmor
}