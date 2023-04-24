const dbConnection = require("../config/db.js");

const allWeapons = async (req, res) => {
	console.log("weapons allWeapons called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from axes
        union select * from bows
        union select * from catalysts
        union select * from crossbows
        union select * from curved_greatswords
        union select * from curved_swords
        union select * from daggers
        union select * from fists
        union select * from flames
        union select * from great_hammers
        union select * from greataxes
        union select * from greatbows
        union select * from greatswords
        union select * from halberds
        union select * from hammers
        union select * from katanas
        union select * from piercing_swords
        union select * from spears
        union select * from talismans
        union select * from ultra_greatswords
        union select * from whips
        ;
                        `;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allWeapons", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allWeapons.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allAxes = async (req, res) => {
	console.log("weapons allAxes called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from axes;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allAxes", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allAxes.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allBows = async (req, res) => {
	console.log("weapons allBows called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from bows;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allBows", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allBows.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allCatalysts = async (req, res) => {
	console.log("weapons allCatalysts called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from catalysts;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allCatalysts", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allCatalysts.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allCrossbows = async (req, res) => {
	console.log("weapons allCrossbows called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from crossbows;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allCrossbows", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allCrossbows.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allCurvedGreatswords = async (req, res) => {
	console.log("weapons allCurvedGreatswords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from curved_greatswords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allCurvedGreatswords", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allCurvedGreatswords.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allCurvedSwords = async (req, res) => {
	console.log("weapons allSwords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from curved_swords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allCurvedSwords", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allCurvedSwords.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allDaggers = async (req, res) => {
	console.log("weapons allDaggers called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from daggers;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allCurvedDaggers", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allCurvedDaggers.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allFists = async (req, res) => {
	console.log("weapons allFists called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from fists;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allCurvedFists", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allCurvedFists.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allFlames = async (req, res) => {
	console.log("weapons allFlames called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from flames;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allFlames", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allFlames.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allGreatHammers = async (req, res) => {
	console.log("weapons allGreatHammers called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from great_hammers;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allGreatHammers", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allGreatHammers.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allGreataxes = async (req, res) => {
	console.log("weapons allGreataxes called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from greataxes;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allGreataxes", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allGreataxes.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allGreatswords = async (req, res) => {
	console.log("weapons allGreatswords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from greatswords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allGreatswords", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allGreatswords.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allHalberds = async (req, res) => {
	console.log("weapons allHalberds called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from halberds;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allHalberds", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allHalberds.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allHammers = async (req, res) => {
	console.log("weapons allHammers called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from hammers;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allHammers", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allHammers.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allKatanas = async (req, res) => {
	console.log("weapons allKatanas called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from katanas;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allKatanas", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allKatanas.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allPiercingSwords = async (req, res) => {
	console.log("weapons allPiercingSwords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from piercing_swords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allPiercingSwords", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allPiercingSwords.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allSpears = async (req, res) => {
	console.log("weapons allSpears called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from spears;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allSpears", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allSpears.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allStraightSwords = async (req, res) => {
	console.log("weapons allStraightSwords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from straight_swords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allStraightSwords", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allStraightSwords.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allTalismans = async (req, res) => {
	console.log("weapons allTalismans called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from talismans;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allTalismans", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allTalismans.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allUltraGreatswords = async (req, res) => {
	console.log("weapons allUltraGreatswords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from ultra_greatswords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allUltraGreatswords", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in alUltallUltraGreatswords.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allWhips = async (req, res) => {
	console.log("weapons allWhips called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from whips;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in WeaponController::allWhips", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allWhips.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

module.exports = {
    allWeapons,
    allAxes,
    allBows,
    allCatalysts,
    allCrossbows,
    allCurvedGreatswords,
    allCurvedSwords,
    allDaggers,
    allFists,
    allFlames,
    allGreatHammers,
    allGreataxes,
    allGreatswords,
    allHalberds,
    allHammers,
    allKatanas,
    allPiercingSwords,
    allSpears,
    allStraightSwords,
    allTalismans,
    allUltraGreatswords,
    allWhips
}