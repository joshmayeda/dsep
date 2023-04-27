const dbConnection = require("../config/db.js");

const allWeapons = async (req, res) => {
	console.log("hands allWeapons called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from axes
        union select * from bows
        union select * from crossbows
        union select * from curved_greatswords
        union select * from curved_swords
        union select * from daggers
        union select * from fists
        union select * from great_hammers
        union select * from greataxes
        union select * from greatbows
        union select * from greatswords
        union select * from halberds
        union select * from hammers
        union select * from katanas
        union select * from piercing_swords
        union select * from spears
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
					console.log("Connection error in HandController::allWeapons", error);
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

const allShields = async (req, res) => {
	console.log("hands allShields called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from small_shields
		union select * from standard_shields
		union select * from greatshields;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allShields", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allShields.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allFoci = async (req, res) => {
	console.log("hands allFoci called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from catalysts
		union select * from talismans
		union select * from flames;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allFoci", error);
					return reject(error);
				}
				req.body = tuples;
				req.status = 200;
				return resolve();
			}
		);
        //console.log(req.body);
	}).catch((err) => {
		console.log("Database connection error in allFoci.", err);
		// The UI side will have to look for the value of status and
		// if it is not 200, act appropriately.
		req.body = [];
		req.status = 500;
	});
};

const allAxes = async (req, res) => {
	console.log("hands allAxes called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from axes;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allAxes", error);
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
	console.log("hands allBows called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from bows;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allBows", error);
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
	console.log("hands allCatalysts called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from catalysts;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allCatalysts", error);
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
	console.log("hands allCrossbows called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from crossbows;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allCrossbows", error);
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
	console.log("hands allCurvedGreatswords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from curved_greatswords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allCurvedGreatswords", error);
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
	console.log("hands allSwords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from curved_swords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allCurvedSwords", error);
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
	console.log("hands allDaggers called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from daggers;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allCurvedDaggers", error);
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
	console.log("hands allFists called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from fists;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allCurvedFists", error);
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
	console.log("hands allFlames called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from flames;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allFlames", error);
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
	console.log("hands allGreatHammers called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from great_hammers;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allGreatHammers", error);
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
	console.log("hands allGreataxes called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from greataxes;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allGreataxes", error);
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
	console.log("hands allGreatswords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from greatswords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allGreatswords", error);
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
	console.log("hands allHalberds called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from halberds;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allHalberds", error);
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
	console.log("hands allHammers called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from hammers;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allHammers", error);
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
	console.log("hands allKatanas called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from katanas;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allKatanas", error);
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
	console.log("hands allPiercingSwords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from piercing_swords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allPiercingSwords", error);
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
	console.log("hands allSpears called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from spears;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allSpears", error);
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
	console.log("hands allStraightSwords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from straight_swords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allStraightSwords", error);
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
	console.log("hands allTalismans called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from talismans;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allTalismans", error);
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
	console.log("hands allUltraGreatswords called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from ultra_greatswords;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allUltraGreatswords", error);
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
	console.log("hands allWhips called.");
	return new Promise((resolve, reject) => {
		const query = `
        select * from whips;`;
		dbConnection.query(
			{
				sql: query,
			},
			(error, tuples) => {
				if (error) {
					console.log("Connection error in HandController::allWhips", error);
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
	allShields,
	allFoci,
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