import React, { useEffect, useState, useRef } from 'react'
import { Attribute } from './Components/Attribute'
import { LevelCounter } from './Components/LevelCounter'
import { AttunementSlots } from './Components/Spells/AttunementSlots'
import { Stat } from './Components/Stat'
import { Resistance } from './Components/Resistance'
import { EquippedSpellSlot } from './Components/Spells/EquippedSpellSlot'
import { HandSlot } from './Components/Hands/HandSlot'
import { RingSlot } from './Components/Rings/RingSlot'
import { ArrowSlot } from './Components/Arrows/ArrowSlot'
import { BoltSlot } from './Components/Arrows/BoltSlot'
import { HelmSlot } from './Components/Armor/HelmSlot'
import { ChestSlot } from './Components/Armor/ChestSlot'
import { GauntletSlot } from './Components/Armor/GauntletSlot'
import { LegSlot } from './Components/Armor/LegSlot'
import { ClassSlot } from './ClassSlot'
import allClassesArray from "./classes.json"
import './App.css'
import axios from 'axios';


export default function App() {

  const ringSlotsArray = [
    {
    "Name": "Ring 1",
    "ImageURL": "/images/transparent.png"
    },
    {
    "Name": "Ring 2",
    "ImageURL": "/images/transparent.png"
    }
  ]

  const equippedSpellsArray = [
    {
      "Name": "Spell 1",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 2",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 3",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 4",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 5",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 6",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 7",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 8",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 9",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 10",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 11",
      "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "Spell 12",
      "ImageURL": "/images/transparent.png"
    }
  ]

  const handSlotsArray = [
    {
    "Name": "R. Hand 1",
    "ImageURL": "/images/transparent.png"
    },
    {
    "Name": "R. Hand 2",
    "ImageURL": "/images/transparent.png"
    },
    {
      "Name": "L. Hand 1",
      "ImageURL": "/images/transparent.png"
      },
      {
      "Name": "L. Hand 2",
      "ImageURL": "/images/transparent.png"
      }
  ]

  const currentArrowInfo = {
    "Name": "Arrow",
    "ImageURL": "/images/transparent.png"
  }

  const currentBoltInfo = {
    "Name": "Bolt",
    "ImageURL": "/images/transparent.png"
  }

  const currentHelmInfo = {
    "Name": "Helm",
    "ImageURL": "/images/transparent.png"
  }
  const currentChestInfo = {
    "Name": "Chest",
    "ImageURL": "/images/transparent.png"
  }
  const currentGauntletInfo = {
    "Name": "Gauntlet",
    "ImageURL": "/images/transparent.png"
  }
  const currentLegInfo = {
    "Name": "Leg",
    "ImageURL": "/images/transparent.png"
  }

  //Classes State
  const [currentClass, setCurrentClass] = useState("");
  const [showModal, setShowModal] = useState("grid");

  const classModalStyle = {
    "display" : showModal
  }

  //Hands State
  const [allWeaponsArray, setAllWeaponsArray] = useState([]);
  const [allShieldsArray, setAllShieldsArray] = useState([]);
  const [allFociArray, setAllFociArray] = useState([]);
  const [currentHandSlots, setCurrentHandSlots] = useState(handSlotsArray);

  //Rings State
  const [allRingsArray, setAllRingsArray] = useState([]);
  const [currentRingSlots, setCurrentRingSlots] = useState(ringSlotsArray);

  //Arrow and Bolt State
  const [allArrowsArray, setAllArrowsArray] = useState([]);
  const [currentArrow, setCurrentArrow] = useState(currentArrowInfo);
  const [allBoltsArray, setAllBoltsArray] = useState([]);
  const [currentBolt, setCurrentBolt] = useState(currentBoltInfo);

  //Armor State
  const [allHelmsArray, setAllHelmsArray] = useState([]);
  const [currentHelm, setCurrentHelm] = useState(currentHelmInfo);
  const [allChestsArray, setAllChestsArray] = useState([]);
  const [currentChest, setCurrentChest] = useState(currentChestInfo);
  const [allGauntletsArray, setAllGauntletsArray] = useState([]);
  const [currentGauntlet, setCurrentGauntlet] = useState(currentGauntletInfo);
  const [allLegsArray, setAllLegsArray] = useState([]);
  const [currentLeg, setCurrentLeg] = useState(currentLegInfo);

  //Equipped Spells State
  const [allSpellsArray, setAllSpellsArray] = useState([]);
  const [currentEquippedSpells, setCurrentEquippedSpells] = useState(equippedSpellsArray);

  useEffect(() => {
    async function getAllRings() {
        await axios.get("http://localhost:8080/api/rings").then((response) => {
          //console.log('response: ' + JSON.stringify(response.data));
          setAllRingsArray(JSON.parse(JSON.stringify(response.data)));
        });
    }
    async function getAllArrows(){
      await axios.get("http://localhost:8080/api/arrows").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            setAllArrowsArray(JSON.parse(JSON.stringify(response.data)));
      });
    }
    async function getAllBolts(){
      await axios.get("http://localhost:8080/api/bolts").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            setAllBoltsArray(JSON.parse(JSON.stringify(response.data)));
      });
    }
    async function getAllWeapons(){
      await axios.get("http://localhost:8080/api/hands/weapons").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            setAllWeaponsArray(JSON.parse(JSON.stringify(response.data)));
      });
    }
    async function getAllShields(){
      await axios.get("http://localhost:8080/api/hands/shields").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            setAllShieldsArray(JSON.parse(JSON.stringify(response.data)));
      });
    }
    async function getAllFoci(){
      await axios.get("http://localhost:8080/api/hands/foci").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            setAllFociArray(JSON.parse(JSON.stringify(response.data)));
      });
    }
    async function getAllHelms(){
      await axios.get("http://localhost:8080/api/armor/helms").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            setAllHelmsArray(JSON.parse(JSON.stringify(response.data)));
      });
    }
    async function getAllChests(){
      await axios.get("http://localhost:8080/api/armor/chest_armor").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            setAllChestsArray(JSON.parse(JSON.stringify(response.data)));
      });
    }
    async function getAllGauntlets(){
      await axios.get("http://localhost:8080/api/armor/gauntlets").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            setAllGauntletsArray(JSON.parse(JSON.stringify(response.data)));
      });
    }
    async function getAllLegs(){
      await axios.get("http://localhost:8080/api/armor/leg_armor").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            setAllLegsArray(JSON.parse(JSON.stringify(response.data)));
      });
    }
    async function getAllSpells(){
      var sorceries = [];
      var miracles = [];
      var pyromancies = [];
      await axios.get("http://localhost:8080/api/spells/sorceries").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            sorceries = JSON.parse(JSON.stringify(response.data));
      });
      await axios.get("http://localhost:8080/api/spells/miracles").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            miracles = JSON.parse(JSON.stringify(response.data));
      });
      await axios.get("http://localhost:8080/api/spells/pyromancies").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            pyromancies = JSON.parse(JSON.stringify(response.data));
      });
      var tempArray = [...sorceries, ...miracles, ...pyromancies];
      //console.log('tempArray: ' + JSON.stringify(tempArray));

      setAllSpellsArray(tempArray);
    }
    getAllRings();
    getAllArrows();
    getAllBolts();
    getAllWeapons();
    getAllShields();
    getAllFoci();
    getAllHelms();
    getAllChests();
    getAllGauntlets();
    getAllLegs();
    getAllSpells();
  }, []);

  //State Handlers

  function handleHandState (newHandArray) {
    console.log('handleHandState: ' + JSON.stringify(newHandArray))
    setCurrentHandSlots(newHandArray)
  }

  function handleRingState (newRingArray) {
    console.log('handleRingState: ' + JSON.stringify(newRingArray))
    setCurrentRingSlots(newRingArray)
  }

  function handleArrowState (newArrow){
    console.log('handleArrowState: ' + JSON.stringify(newArrow))
    setCurrentArrow(newArrow)
  }

  function handleBoltState (newBolt){
    console.log('handleBoltState: ' + JSON.stringify(newBolt))
    setCurrentBolt(newBolt)
  }

  function handleHelmState (newHelm){
    console.log('handleHelmState: ' + JSON.stringify(newHelm))
    setCurrentHelm(newHelm)
  }

  function handleChestState (newChest){
    console.log('handleChestState: ' + JSON.stringify(newChest))
    setCurrentChest(newChest)
  }

  function handleGauntletState (newGauntlet){
    console.log('handleGaunletState: ' + JSON.stringify(newGauntlet))
    setCurrentGauntlet(newGauntlet)
  }

  function handleLegState (newLeg){
    console.log('handleLegState: ' + JSON.stringify(newLeg))
    setCurrentLeg(newLeg)
  }

  function handleSpellState (newSpellArray) {
    console.log('handleSpellState: ' + JSON.stringify(newSpellArray))
    setCurrentEquippedSpells(newSpellArray)
  }

  function handleClassState (newClass){
    console.log('handleClassState: ' + JSON.stringify(newClass))
    setCurrentClass(newClass);
    setShowModal("none");
    console.log('currentClass: ' + JSON.stringify(currentClass));

  }

  return (
    <>
    <div className="modal" id="modal" style={classModalStyle}>
      <div className="modal-content">
        <div className="modal-header">
          Starting Class
        </div>
        <div className="modal-body">
          <ClassSlot
            className="class"
            id="warrior"
            selectedClass={allClassesArray[0]}
            position="right center"
            handleClassState={handleClassState}
          />
          <ClassSlot
            className="class"
            id="knight"
            selectedClass={allClassesArray[1]}
            position="right center"
            handleClassState={handleClassState}
          />
          <ClassSlot
            className="class"
            id="wanderer"
            selectedClass={allClassesArray[2]}
            position="right center"
            handleClassState={handleClassState}
          />
          <ClassSlot
            className="class"
            id="thief"
            selectedClass={allClassesArray[3]}
            position="left center"
            handleClassState={handleClassState}
          />
          <ClassSlot
            className="class"
            id="bandit"
            selectedClass={allClassesArray[4]}
            position="left center"
            handleClassState={handleClassState}
          />
          <ClassSlot
            className="class"
            id="hunter"
            selectedClass={allClassesArray[5]}
            position="right center"
            handleClassState={handleClassState}
          />
          <ClassSlot
            className="class"
            id="sorcerer"
            selectedClass={allClassesArray[6]}
            position="right center"
            handleClassState={handleClassState}
          />
          <ClassSlot
            className="class"
            id="pyromancer"
            selectedClass={allClassesArray[7]}
            position="right center"
            handleClassState={handleClassState}
          />
          <ClassSlot
            className="class"
            id="cleric"
            selectedClass={allClassesArray[8]}
            position="left center"
            handleClassState={handleClassState}
          />
          <ClassSlot
            className="class"
            id="deprived"
            selectedClass={allClassesArray[9]}
            position="left center"
            handleClassState={handleClassState}
          />
        </div>
      </div>
    </div>
    <header className="App-header">
    Dark Souls Equipment Planner
    </header>
    <div className="grid-container">

      <div className="grid-item" id="equips">
        <div id="title">Equipment</div>
        <div className="grid-item-equipment">
          Hands
          <div className="grid-item-container" id="hands">
            <HandSlot id="rwep1" title="Right Hand 1"
              handSlotsArray={handSlotsArray}
              handSlotNum="0"
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentSlots={currentHandSlots}
            />
            <HandSlot id="rwep2" title="Right Hand 2"
              handSlotsArray={handSlotsArray}
              handSlotNum="1"
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentSlots={currentHandSlots}
            />
            <HandSlot id="lwep1" title="Left Hand 1"
              handSlotsArray={handSlotsArray}
              handSlotNum="2"
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentSlots={currentHandSlots}
            />
            <HandSlot id="lwep2" title="Left Hand 2"
              handSlotsArray={handSlotsArray}
              handSlotNum="3"
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentSlots={currentHandSlots}
            />
          </div>
        </div>
        <div className="grid-item-equipment">
          Rings & Arrows
          <div className="grid-item-container" id="rings-and-arrows">
            <RingSlot id="ring1" title="Ring 1"
              ringSlotsArray={ringSlotsArray}
              ringSlotNum="0"
              allRingsArray={allRingsArray}
              handleRingState={handleRingState}
              currentSlots={currentRingSlots}
            />
            <RingSlot id="ring2" title="Ring 2"
              ringSlotsArray={ringSlotsArray}
              ringSlotNum="1"
              allRingsArray={allRingsArray}
              handleRingState={handleRingState}
              currentSlots={currentRingSlots}
            />
            <ArrowSlot id="arrow" title="Arrow"
              currentArrowInfo={currentArrowInfo}
              allArrowsArray={allArrowsArray}
              handleArrowState={handleArrowState}
            />
            <BoltSlot id="bolt" title="Bolt"
              currentBoltInfo={currentBoltInfo}
              allBoltsArray={allBoltsArray}
              handleBoltState={handleBoltState}
            />
          </div>
        </div>
        <div className="grid-item-equipment">
          Armor
          <div className="grid-item-container" id="armor">
            <HelmSlot id="helm" title="Helm"
              currentHelmInfo={currentHelmInfo}
              allHelmsArray={allHelmsArray}
              handleHelmState={handleHelmState}
            />
            <ChestSlot id="chest" title="Chest"
              currentChestInfo={currentChestInfo}
              allChestsArray={allChestsArray}
              handleChestState={handleChestState}
            />
            <GauntletSlot id="gauntlet" title="Gauntlet"
              currentGauntletInfo={currentGauntletInfo}
              allGauntletsArray={allGauntletsArray}
              handleGauntletState={handleGauntletState}
            />
            <LegSlot id="gauntlet" title="Leg"
              currentLegInfo={currentLegInfo}
              allLegsArray={allLegsArray}
              handleLegState={handleLegState}
            />
          </div>
        </div>
      </div>

      <div className="grid-item" id="stats">
        <div id="title">Stats</div>
          <div className="grid-item-stats">
            <ul className="grid-item-container" id="attributes">

              <LevelCounter />
              <Attribute title="Vitality" id="vitality"/>
              <Attribute title="Attunement" id="attunement"/>
              <Attribute title="Endurance" id="endurance"/>
              <Attribute title="Strength" id="strength"/>
              <Attribute title="Dexterity" id="dexterity"/>
              <Attribute title="Resistance" id="resistance"/>
              <Attribute title="Intelligence" id="intelligence"/>
              <Attribute title="Faith" id="faith"/>
              <Attribute title="Humanity" id="humanity"/>

            </ul>

            <ul className="grid-item-container" id="stats">
              <Stat title = "hp" id="hp" value="0" />
              <Stat title = "Stamina" id="stamina" value="0" />
              <Stat title = "Equip Load" id="equip-load" value="0" />
              <Stat title = "R Weapon 1" id="rwep1" value="0" />
              <Stat title = "R Weapon 2" id="rwep2" value="0" />
              <Stat title = "L Weapon 1" id="lwep1" value="0" />
              <Stat title = "L Weapon 2" id="lwep2" value="0" />
              <Stat title = "Physical Def." id="phys-def" value="0" />
              <Stat title = "VS Strike" id="strike-def" value="0" />
              <Stat title = "VS Slash" id="slash-def" value="0" />
              <Stat title = "VS Thrust" id="thrust-def" value="0" />
              <Stat title = "Magic Def." id="magic-def" value="0" />
              <Stat title = "Flame Def." id="flame-def" value="0" />
              <Stat title = "Lightning Def." id="lightning-def" value="0" />
            </ul>

            <div className="grid-item-container" id="resistances">

              <ul className="resistances">

                <Resistance title="Poise" id="poise" value="0" />
                <Resistance title="Bleed Resist" id="bleed-resist" value="0" />
                <Resistance title="Poison Resist" id="poison-resist" value="0" />
                <Resistance title="Curse Resist" id="curse-resist" value="0" />
                <Resistance title="Item Discovery" id="item-discovery" value="410" />

              </ul>

              <div className="spells">

                <AttunementSlots slotsLeft="12" maxSlots="12" />

                <div className="equipped-spells">

                  <EquippedSpellSlot id="spell1" title="Spell 1"
                    equippedSpellsArray={equippedSpellsArray}
                    position="0"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell2" title="Spell 2"
                    equippedSpellsArray={equippedSpellsArray}
                    position="1"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell3" title="Spell 3"
                    equippedSpellsArray={equippedSpellsArray}
                    position="2"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell4" title="Spell 4"
                    equippedSpellsArray={equippedSpellsArray}
                    position="3"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell5" title="Spell 5"
                    equippedSpellsArray={equippedSpellsArray}
                    position="4"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell6" title="Spell 6"
                    equippedSpellsArray={equippedSpellsArray}
                    position="5"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell7" title="Spell 7"
                    equippedSpellsArray={equippedSpellsArray}
                    position="6"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell8" title="Spell 8"
                    equippedSpellsArray={equippedSpellsArray}
                    position="7"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell9" title="Spell 9"
                    equippedSpellsArray={equippedSpellsArray}
                    position="8"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell10" title="Spell 10"
                    equippedSpellsArray={equippedSpellsArray}
                    position="9"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell11" title="Spell 11"
                    equippedSpellsArray={equippedSpellsArray}
                    position="10"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />
                  <EquippedSpellSlot id="spell12" title="Spell 12"
                    equippedSpellsArray={equippedSpellsArray}
                    position="11"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                  />

                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="grid-item" id="current-class">
        Current Starting Class: {currentClass}
      </div>

    </div>
    </>
  )
}

