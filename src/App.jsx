import React, { useEffect, useState, useRef, useMemo } from 'react'
import { Attribute } from './Components/Stats/Attribute'
import { LevelCounter } from './Components/Stats/LevelCounter'
import { AttunementSlots } from './Components/Spells/AttunementSlots'
import { Stat } from './Components/Stats/Stat'
import { Resistance } from './Components/Stats/Resistance'
import { EquippedSpellSlot } from './Components/Spells/EquippedSpellSlot'
import { HandSlot } from './Components/Hands/HandSlot'
import { RingSlot } from './Components/Rings/RingSlot'
import { ArrowSlot } from './Components/Arrows/ArrowSlot'
import { BoltSlot } from './Components/Arrows/BoltSlot'
import { HelmSlot } from './Components/Armor/HelmSlot'
import { ChestSlot } from './Components/Armor/ChestSlot'
import { GauntletSlot } from './Components/Armor/GauntletSlot'
import { LegSlot } from './Components/Armor/LegSlot'
import { Modal } from './Modal'
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

  var currentHelmInfo = {
    "ImageURL": "/images/transparent.png",
    "Name": "Helm",
    "Durability": 0,
    "Weight": 0,
    "PhysicalProtection": 0,
    "StrikeProtection": 0,
    "SlashProtection": 0,
    "ThrustProtection": 0,
    "MagicProtection": 0,
    "FireProtection": 0,
    "LightningProtection": 0,
    "BleedResistance": 0,
    "PoisonResistance": 0,
    "CurseResistance": 0,
    "Stability": 0
  }
  var currentChestInfo = {
    "ImageURL": "/images/transparent.png",
    "Name": "Chest",
    "Durability": 0,
    "Weight": 0,
    "PhysicalProtection": 0,
    "StrikeProtection": 0,
    "SlashProtection": 0,
    "ThrustProtection": 0,
    "MagicProtection": 0,
    "FireProtection": 0,
    "LightningProtection": 0,
    "BleedResistance": 0,
    "PoisonResistance": 0,
    "CurseResistance": 0,
    "Stability": 0
  }
  var currentGauntletInfo = {
    "ImageURL": "/images/transparent.png",
    "Name": "Gauntlet",
    "Durability": 0,
    "Weight": 0,
    "PhysicalProtection": 0,
    "StrikeProtection": 0,
    "SlashProtection": 0,
    "ThrustProtection": 0,
    "MagicProtection": 0,
    "FireProtection": 0,
    "LightningProtection": 0,
    "BleedResistance": 0,
    "PoisonResistance": 0,
    "CurseResistance": 0,
    "Stability": 0
  }
  var currentLegInfo = {
    "ImageURL": "/images/transparent.png",
    "Name": "Leg",
    "Durability": 0,
    "Weight": 0,
    "PhysicalProtection": 0,
    "StrikeProtection": 0,
    "SlashProtection": 0,
    "ThrustProtection": 0,
    "MagicProtection": 0,
    "FireProtection": 0,
    "LightningProtection": 0,
    "BleedResistance": 0,
    "PoisonResistance": 0,
    "CurseResistance": 0,
    "Stability": 0
  }

  const [loading, setLoading] = useState(true);

  //Classes State
  const [currentClass, setCurrentClass] = useState({});
  const [classEquips, setClassEquips] = useState([]);
  const [showModal, setShowModal] = useState("grid");

  const classModalStyle = {
    "display" : showModal
  }

  //Attributes State
  const [currentVitality, setCurrentVitality] = useState(0);
  const [currentAttunement, setCurrentAttunement] = useState(0);
  const [currentEndurance, setCurrentEndurance] = useState(0);
  const [currentStrength, setCurrentStrength] = useState(0);
  const [currentDexterity, setCurrentDexterity] = useState(0);
  const [currentResistance, setCurrentResistance] = useState(0);
  const [currentIntelligence, setCurrentIntelligence] = useState(0);
  const [currentFaith, setCurrentFaith] = useState(0);
  const [currentHumanity, setCurrentHumanity] = useState(0);

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

  //Stats State
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentMaxAttunementSlots, setCurrentMaxAttunementSlots] = useState(0);
  const [currentAttunementSlotsUsed, setCurrentAttunementSlotsUsed] = useState(0);


    // useEffect(() => {
    //   console.log('currentHelm: ' + JSON.stringify(currentHelm));
    //   console.log('currentChest: ' + JSON.stringify(currentChest));
    //   console.log('currentGauntlet: ' + JSON.stringify(currentGauntlet));
    //   console.log('currentLeg: ' + JSON.stringify(currentLeg));
    // }, [currentHelm, currentChest]);

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
    currentHelmInfo = newHelm;
    console.log('currentHelmInfo: ' + JSON.stringify(currentHelmInfo));

    setCurrentHelm(newHelm)
  }

  function handleChestState (newChest){
    console.log('handleChestState: ' + JSON.stringify(newChest))
    currentChestInfo = newChest;
    console.log('currentChestInfo: ' + JSON.stringify(currentChestInfo));
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

  // const setter = async () => {
  //   const rings = await axios.get("http://localhost:8080/api/rings");
  //   const arrows = await axios.get("http://localhost:8080/api/arrows");
  //   const bolts = await axios.get("http://localhost:8080/api/bolts");

  //   Promise.all([rings, arrows, bolts]).then((response) => {
  //     setAllRingsArray(JSON.parse(JSON.stringify(response[0].data)));
  //     setAllArrowsArray(JSON.parse(JSON.stringify(response[1].data)));
  //     setAllBoltsArray(JSON.parse(JSON.stringify(response[2].data)));
  //     setLoading(false);
  //   });
  // }

  // useMemo(() => {
  //   setter();
  // }, []);

  return (
    <>
    <Modal
      setCurrentClass={setCurrentClass}
      setCurrentLevel = {setCurrentLevel}
      setCurrentVitality = {setCurrentVitality}
      setCurrentAttunement = {setCurrentAttunement}
      setCurrentEndurance = {setCurrentEndurance}
      setCurrentStrength = {setCurrentStrength}
      setCurrentDexterity = {setCurrentDexterity}
      setCurrentResistance = {setCurrentResistance}
      setCurrentIntelligence = {setCurrentIntelligence}
      setCurrentFaith = {setCurrentFaith}
      setCurrentMaxAttunementSlots = {setCurrentMaxAttunementSlots}
      setCurrentAttunementSlotsUsed = {setCurrentAttunementSlotsUsed}
      setCurrentHelm={setCurrentHelm}
      setCurrentChest={setCurrentChest}
      setCurrentGauntlet={setCurrentGauntlet}
      setCurrentLeg={setCurrentLeg}
      setCurrentHandSlots={setCurrentHandSlots}
      setCurrentEquippedSpells={setCurrentEquippedSpells}
      setAllRingsArray={setAllRingsArray}
      setAllArrowsArray={setAllArrowsArray}
      setAllBoltsArray={setAllBoltsArray}
      setAllWeaponsArray={setAllWeaponsArray}
      setAllShieldsArray={setAllShieldsArray}
      setAllFociArray={setAllFociArray}
      setAllHelmsArray={setAllHelmsArray}
      setAllChestsArray={setAllChestsArray}
      setAllGauntletsArray={setAllGauntletsArray}
      setAllLegsArray={setAllLegsArray}
      setAllSpellsArray={setAllSpellsArray}
    />
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
              position="bottom left"
            />
            <HandSlot id="rwep2" title="Right Hand 2"
              handSlotsArray={handSlotsArray}
              handSlotNum="1"
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentSlots={currentHandSlots}
              position="bottom left"
            />
            <HandSlot id="lwep1" title="Left Hand 1"
              handSlotsArray={handSlotsArray}
              handSlotNum="2"
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentSlots={currentHandSlots}
              position="bottom right"
            />
            <HandSlot id="lwep2" title="Left Hand 2"
              handSlotsArray={handSlotsArray}
              handSlotNum="3"
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentSlots={currentHandSlots}
              position="bottom right"
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
              currentHelmet={currentHelm}
              allHelmsArray={allHelmsArray}
              handleHelmState={handleHelmState}
              position="right bottom"
            />
            <ChestSlot id="chest" title="Chest"
              currentChestArmor={currentChest}
              allChestsArray={allChestsArray}
              handleChestState={handleChestState}
              position="right bottom"
            />
            <GauntletSlot id="gauntlet" title="Gauntlet"
              currentGauntletArmor={currentGauntlet}
              allGauntletsArray={allGauntletsArray}
              handleGauntletState={handleGauntletState}
              position="left bottom"
            />
            <LegSlot id="gauntlet" title="Leg"
              currentLegArmor={currentLeg}
              allLegsArray={allLegsArray}
              handleLegState={handleLegState}
              position="left bottom"
            />
          </div>
        </div>
      </div>

      <div className="grid-item" id="stats">
        <div id="title">Stats</div>
          <div className="grid-item-stats">
            <ul className="grid-item-container" id="attributes">

              <LevelCounter currentLevel={currentLevel} />
              <Attribute title="Vitality" id="vitality"
                currentStatValue={currentVitality}
                setCurrentAttribute={setCurrentVitality}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}
              />
              <Attribute title="Attunement" id="attunement"
                currentStatValue={currentAttunement}
                setCurrentAttribute={setCurrentAttunement}
                setMaxSlots={setCurrentMaxAttunementSlots}
                setCurrentSlotsUsed={setCurrentAttunementSlotsUsed}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}
              />
              <Attribute title="Endurance" id="endurance"
                currentStatValue={currentEndurance}
                setCurrentAttribute={setCurrentEndurance}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}
              />
              <Attribute title="Strength" id="strength"
                currentStatValue={currentStrength}
                setCurrentAttribute={setCurrentStrength}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}
              />
              <Attribute title="Dexterity" id="dexterity"
                currentStatValue={currentDexterity}
                setCurrentAttribute={setCurrentDexterity}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}
              />
              <Attribute title="Resistance" id="resistance"
                currentStatValue={currentResistance}
                setCurrentAttribute={setCurrentResistance}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}
              />
              <Attribute title="Intelligence" id="intelligence"
                currentStatValue={currentIntelligence}
                setCurrentAttribute={setCurrentIntelligence}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}
              />
              <Attribute title="Faith" id="faith"
                currentStatValue={currentFaith}
                setCurrentAttribute={setCurrentFaith}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}
              />
              <Attribute title="Humanity" id="humanity"
                currentStatValue={currentHumanity}
                setCurrentAttribute={setCurrentHumanity}
              />

            </ul>

            <ul className="grid-item-container" id="stats">
              <Stat title = "HP" id="hp" defaultValue="0" currentAttributes={currentVitality} />
              <Stat title = "Stamina" id="stamina" defaultValue="0" currentAttributes={currentEndurance} />
              <Stat title = "Equip Load" id="equip-load" defaultValue="0" currentAttributes={currentEndurance} />
              <Stat title = "R Weapon 1" id="rwep1" defaultValue="0" />
              <Stat title = "R Weapon 2" id="rwep2" defaultValue="0" />
              <Stat title = "L Weapon 1" id="lwep1" defaultValue="0" />
              <Stat title = "L Weapon 2" id="lwep2" defaultValue="0" />
              <Stat title = "Physical Def." id="phys-def"
                defaultValue={0}
                currentHelm={currentHelm}
                currentChest={currentChest}
                currentGauntlet={currentGauntlet}
                currentLeg={currentLeg}
              />
              <Stat title = "VS Strike" id="strike-def"
                defaultValue={0}
                currentHelm={currentHelm}
                currentChest={currentChest}
                currentGauntlet={currentGauntlet}
                currentLeg={currentLeg}
              />
              <Stat title = "VS Slash" id="slash-def"
                defaultValue={0}
                currentHelm={currentHelm}
                currentChest={currentChest}
                currentGauntlet={currentGauntlet}
                currentLeg={currentLeg}
              />
              <Stat title = "VS Thrust" id="thrust-def"
                defaultValue={0}
                currentHelm={currentHelm}
                currentChest={currentChest}
                currentGauntlet={currentGauntlet}
                currentLeg={currentLeg}
              />
              <Stat title = "Magic Def." id="magic-def"
                defaultValue={0}
                currentHelm={currentHelm}
                currentChest={currentChest}
                currentGauntlet={currentGauntlet}
                currentLeg={currentLeg}
              />
              <Stat title = "Flame Def." id="flame-def"
                defaultValue={0}
                currentHelm={currentHelm}
                currentChest={currentChest}
                currentGauntlet={currentGauntlet}
                currentLeg={currentLeg}
              />
              <Stat title = "Lightning Def." id="lightning-def"
                defaultValue={0}
                currentHelm={currentHelm}
                currentChest={currentChest}
                currentGauntlet={currentGauntlet}
                currentLeg={currentLeg}
              />
            </ul>

            <div className="grid-item-container" id="resistances">

              <ul className="resistances">

                <Resistance title="Poise" id="poise"
                  defaultValue={0}
                  currentHelm={currentHelm}
                  currentChest={currentChest}
                  currentGauntlet={currentGauntlet}
                  currentLeg={currentLeg}
                />
                <Resistance title="Bleed Resist" id="bleed-resist"
                  defaultValue={0}
                  currentHelm={currentHelm}
                  currentChest={currentChest}
                  currentGauntlet={currentGauntlet}
                  currentLeg={currentLeg}
                  currentAttributes={currentEndurance}
                />
                <Resistance title="Poison Resist" id="poison-resist"
                  defaultValue={0}
                  currentHelm={currentHelm}
                  currentChest={currentChest}
                  currentGauntlet={currentGauntlet}
                  currentLeg={currentLeg}
                  currentAttributes={currentResistance}
                />
                <Resistance title="Curse Resist" id="curse-resist"
                  defaultValue={0}
                  currentAttributes={currentHumanity}
                />
                <Resistance title="Item Discovery" id="item-discovery"
                  defaultValue={0}
                  currentAttributes={currentHumanity}
                />
              </ul>

              <div className="spells">

                <AttunementSlots slotsUsed={currentAttunementSlotsUsed} maxSlots={currentMaxAttunementSlots} setMaxSlots={setCurrentMaxAttunementSlots} currentAttunement={currentAttunement} />

                <div className="equipped-spells">

                  <EquippedSpellSlot id="spell1" title="Spell 1"
                    equippedSpellsArray={equippedSpellsArray}
                    position="0"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell2" title="Spell 2"
                    equippedSpellsArray={equippedSpellsArray}
                    position="1"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell3" title="Spell 3"
                    equippedSpellsArray={equippedSpellsArray}
                    position="2"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell4" title="Spell 4"
                    equippedSpellsArray={equippedSpellsArray}
                    position="3"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell5" title="Spell 5"
                    equippedSpellsArray={equippedSpellsArray}
                    position="4"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell6" title="Spell 6"
                    equippedSpellsArray={equippedSpellsArray}
                    position="5"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell7" title="Spell 7"
                    equippedSpellsArray={equippedSpellsArray}
                    position="6"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell8" title="Spell 8"
                    equippedSpellsArray={equippedSpellsArray}
                    position="7"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell9" title="Spell 9"
                    equippedSpellsArray={equippedSpellsArray}
                    position="8"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell10" title="Spell 10"
                    equippedSpellsArray={equippedSpellsArray}
                    position="9"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell11" title="Spell 11"
                    equippedSpellsArray={equippedSpellsArray}
                    position="10"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />
                  <EquippedSpellSlot id="spell12" title="Spell 12"
                    equippedSpellsArray={equippedSpellsArray}
                    position="11"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlots={currentEquippedSpells}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                  />

                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="grid-item" id="current-class">
        Current Starting Class: {currentClass.Name}
      </div>

    </div>
    </>
  )
}

