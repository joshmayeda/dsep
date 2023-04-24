require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');
const cors = require('cors');
const app = express();
const port = 8080;

var mysql = require("mysql");

app.use(
    cors({
        origin: "*"
    }
));

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
});

const router = require("koa-router")({
    prefix: "/api"
});


router.get('/', (req, res) => {
    console.log('hello world');
})

//Weapons Controllers
const weaponsRouter = require("koa-router")({
	prefix: "/weapons"
})
const WeaponsController = require('../controllers/WeaponsController.js');

weaponsRouter.get("/", WeaponsController.allWeapons, (err) => console.log(`Error in allWeapons: ${err}`));
weaponsRouter.get("/axes", WeaponsController.allAxes, (err) => console.log(`Error in allAxes: ${err}`));
weaponsRouter.get("/bows", WeaponsController.allBows, (err) => console.log(`Error in allBows: ${err}`));
weaponsRouter.get("/catalysts", WeaponsController.allCatalysts, (err) => console.log(`Error in allCatalysts: ${err}`));
weaponsRouter.get("/crossbows", WeaponsController.allCrossbows, (err) => console.log(`Error in allCrossbows: ${err}`));
weaponsRouter.get("/curved_greatswords", WeaponsController.allCurvedGreatswords, (err) => console.log(`Error in allCurvedGreatswords: ${err}`));
weaponsRouter.get("/curved_swords", WeaponsController.allCurvedSwords, (err) => console.log(`Error in allCurvedSwords: ${err}`));
weaponsRouter.get("/daggers", WeaponsController.allDaggers, (err) => console.log(`Error in allDaggers: ${err}`));
weaponsRouter.get("/fists", WeaponsController.allFists, (err) => console.log(`Error in allFists: ${err}`));
weaponsRouter.get("/flames", WeaponsController.allFlames, (err) => console.log(`Error in allFlames: ${err}`));
weaponsRouter.get("/great_hammers", WeaponsController.allGreatHammers, (err) => console.log(`Error in allGreatHammers: ${err}`));
weaponsRouter.get("/greataxes", WeaponsController.allGreataxes, (err) => console.log(`Error in allGreataxes: ${err}`));
weaponsRouter.get("/greatswords", WeaponsController.allGreatswords, (err) => console.log(`Error in allGreatSwords: ${err}`));
weaponsRouter.get("/halberds", WeaponsController.allHalberds, (err) => console.log(`Error in allHalberds: ${err}`));
weaponsRouter.get("/hammers", WeaponsController.allHammers, (err) => console.log(`Error in allHammers: ${err}`));
weaponsRouter.get("/katanas", WeaponsController.allKatanas, (err) => console.log(`Error in allKatanas: ${err}`));
weaponsRouter.get("/piercing_swords", WeaponsController.allPiercingSwords, (err) => console.log(`Error in allPiercingSwords: ${err}`));
weaponsRouter.get("/spears", WeaponsController.allSpears, (err) => console.log(`Error in allSpears: ${err}`));
weaponsRouter.get("/straight_swords", WeaponsController.allStraightSwords, (err) => console.log(`Error in allStraightSwords: ${err}`));
weaponsRouter.get("/talismans", WeaponsController.allTalismans, (err) => console.log(`Error in allTalismans: ${err}`));
weaponsRouter.get("/ultra_greatswords", WeaponsController.allUltraGreatswords, (err) => console.log(`Error in allUltraGreatswords: ${err}`));
weaponsRouter.get("/whips", WeaponsController.allWhips, (err) => console.log(`Error in allWhips: ${err}`));

//Armor Controllers
const armorRouter = require("koa-router")({
    prefix: "/armor"
})
const ArmorController = require('../controllers/ArmorController.js');
armorRouter.get("/", ArmorController.allArmor, (err) => console.log(`Error in allArmor: ${err}`));
armorRouter.get("/helms", ArmorController.allHelms, (err) => console.log(`Error in allHelms: ${err}`));
armorRouter.get("/chest_armor", ArmorController.allChestArmor, (err) => console.log(`Error in allChestArmor: ${err}`));
armorRouter.get("/gauntlets", ArmorController.allGauntlets, (err) => console.log(`Error in allGauntlets: ${err}`));
armorRouter.get("/leg_armor", ArmorController.allLegArmor, (err) => console.log(`Error in allLegArmor: ${err}`));

//Rings Controllers
const ringsRouter = require("koa-router")({
    prefix: "/rings"
})
const RingsController = require('../controllers/RingsController.js');

ringsRouter.get("/", RingsController.allRings, (err) => console.log(`Error in allRings: ${err}`));

//Magic Controllers
const magicRouter = require("koa-router")({
    prefix: "/magic"
})
const MagicController = require('../controllers/MagicController.js');
magicRouter.get("/miracles", MagicController.allMiracles, (err) => console.log(`Error in allMiracles: ${err}`));
magicRouter.get("/pyromancies", MagicController.allPyromancies, (err) => console.log(`Error in allPyromancies: ${err}`));
magicRouter.get("/sorceries", MagicController.allSorceries, (err) => console.log(`Error in allSorceries: ${err}`));



// app.post('/:name', (req, res) => {

//     return new Promise((resolve, reject) => {
// 		const query = `INSERT INTO test (name) VALUES (?);`;
// 		connection.query(
// 			{
// 				sql: query,
// 				values: [req.params.name],
// 			},
// 			(error, tuples) => {
// 				if (error) {
// 					console.log("Connection error in post name", error);
// 					req.body = [];
// 					req.status = 200;
// 					return reject(error);
// 				}
// 				req.body = tuples;
// 				req.status = 200;
// 				return resolve();
// 			}
// 		);
//         res.send("Success");
// 		//console.log(req.params);
// 	}).catch((err) => {
// 		console.log("Database connection error in addFollower.", err);
// 		// The UI side will have to look for the value of status and
// 		// if it is not 200, act appropriately.
// 		req.body = [];
// 		req.status = 500;
// 	});
// })

router.use(
    "",
    weaponsRouter.routes(),
    armorRouter.routes(),
    ringsRouter.routes(),
    magicRouter.routes()
);

module.exports = function(app) {
    app.use(router.routes());
    app.use(router.allowedMethods());
}