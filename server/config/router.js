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

//Hands Controllers
const handsRouter = require("koa-router")({
	prefix: "/hands"
})
const HandsController = require('../controllers/HandsController.js');

handsRouter.get("/weapons", HandsController.allWeapons, (err) => console.log(`Error in allWeapons: ${err}`));
handsRouter.get("/shields", HandsController.allShields, (err) => console.log(`Error in allShields: ${err}`));
handsRouter.get("/foci", HandsController.allFoci, (err) => console.log(`Error in allFoci: ${err}`));
// handsRouter.get("/axes", HandsController.allAxes, (err) => console.log(`Error in allAxes: ${err}`));
// handsRouter.get("/bows", HandsController.allBows, (err) => console.log(`Error in allBows: ${err}`));
// handsRouter.get("/catalysts", HandsController.allCatalysts, (err) => console.log(`Error in allCatalysts: ${err}`));
// handsRouter.get("/crossbows", HandsController.allCrossbows, (err) => console.log(`Error in allCrossbows: ${err}`));
// handsRouter.get("/curved_greatswords", HandsController.allCurvedGreatswords, (err) => console.log(`Error in allCurvedGreatswords: ${err}`));
// handsRouter.get("/curved_swords", HandsController.allCurvedSwords, (err) => console.log(`Error in allCurvedSwords: ${err}`));
// handsRouter.get("/daggers", HandsController.allDaggers, (err) => console.log(`Error in allDaggers: ${err}`));
// handsRouter.get("/fists", HandsController.allFists, (err) => console.log(`Error in allFists: ${err}`));
// handsRouter.get("/flames", HandsController.allFlames, (err) => console.log(`Error in allFlames: ${err}`));
// handsRouter.get("/great_hammers", HandsController.allGreatHammers, (err) => console.log(`Error in allGreatHammers: ${err}`));
// handsRouter.get("/greataxes", HandsController.allGreataxes, (err) => console.log(`Error in allGreataxes: ${err}`));
// handsRouter.get("/greatswords", HandsController.allGreatswords, (err) => console.log(`Error in allGreatSwords: ${err}`));
// handsRouter.get("/halberds", HandsController.allHalberds, (err) => console.log(`Error in allHalberds: ${err}`));
// handsRouter.get("/hammers", HandsController.allHammers, (err) => console.log(`Error in allHammers: ${err}`));
// handsRouter.get("/katanas", HandsController.allKatanas, (err) => console.log(`Error in allKatanas: ${err}`));
// handsRouter.get("/piercing_swords", HandsController.allPiercingSwords, (err) => console.log(`Error in allPiercingSwords: ${err}`));
// handsRouter.get("/spears", HandsController.allSpears, (err) => console.log(`Error in allSpears: ${err}`));
// handsRouter.get("/straight_swords", HandsController.allStraightSwords, (err) => console.log(`Error in allStraightSwords: ${err}`));
// handsRouter.get("/talismans", HandsController.allTalismans, (err) => console.log(`Error in allTalismans: ${err}`));
// handsRouter.get("/ultra_greatswords", HandsController.allUltraGreatswords, (err) => console.log(`Error in allUltraGreatswords: ${err}`));
// handsRouter.get("/whips", HandsController.allWhips, (err) => console.log(`Error in allWhips: ${err}`));

//Armor Routers
const armorRouter = require("koa-router")({
    prefix: "/armor"
})
const ArmorController = require('../controllers/ArmorController.js');
armorRouter.get("/", ArmorController.allArmor, (err) => console.log(`Error in allArmor: ${err}`));
armorRouter.get("/helms", ArmorController.allHelms, (err) => console.log(`Error in allHelms: ${err}`));
armorRouter.get("/chest_armor", ArmorController.allChestArmor, (err) => console.log(`Error in allChestArmor: ${err}`));
armorRouter.get("/gauntlets", ArmorController.allGauntlets, (err) => console.log(`Error in allGauntlets: ${err}`));
armorRouter.get("/leg_armor", ArmorController.allLegArmor, (err) => console.log(`Error in allLegArmor: ${err}`));

//Rings Routers
const ringsRouter = require("koa-router")({
    prefix: "/rings"
})
const RingsController = require('../controllers/RingsController.js');
ringsRouter.get("/", RingsController.allRings, (err) => console.log(`Error in allRings: ${err}`));

//Spells Routers
const spellsRouter = require("koa-router")({
    prefix: "/spells"
})
const SpellsController = require('../controllers/SpellsController.js');
//spellsRouter.get("/", SpellsController.allSpells, (err) => console.log(`Error in allSpells: ${err}`));
spellsRouter.get("/miracles", SpellsController.allMiracles, (err) => console.log(`Error in allMiracles: ${err}`));
spellsRouter.get("/pyromancies", SpellsController.allPyromancies, (err) => console.log(`Error in allPyromancies: ${err}`));
spellsRouter.get("/sorceries", SpellsController.allSorceries, (err) => console.log(`Error in allSorceries: ${err}`));

//Arrows Routers
const arrowsRouter = require("koa-router")({
    prefix: "/arrows"
})
const ArrowsController = require('../controllers/ArrowsController.js');
arrowsRouter.get("/", ArrowsController.allArrows, (err) => console.log(`Error in allArrows: ${err}`));

//Bolts Routers
const boltsRouter = require("koa-router")({
    prefix: "/bolts"
})
const BoltsController = require('../controllers/BoltsController.js');
boltsRouter.get("/", BoltsController.allBolts, (err) => console.log(`Error in allBolts: ${err}`));

//Classes Routers
const classesRouter = require("koa-router")({
    prefix: "/classes"
})
const ClassesController = require('../controllers/ClassesController.js');
classesRouter.get("/", ClassesController.allClasses, (err) => console.log(`Error in allClasses: ${err}`));

router.use(
    "",
    handsRouter.routes(),
    armorRouter.routes(),
    ringsRouter.routes(),
    spellsRouter.routes(),
    arrowsRouter.routes(),
    boltsRouter.routes(),
    classesRouter.routes()
);

module.exports = function(app) {
    app.use(router.routes());
    app.use(router.allowedMethods());
}