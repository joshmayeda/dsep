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
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


export function App({ signOut }) {

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
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    },
    {
      "ImageURL": "/images/transparent.png",
      "Name": "Spell",
      "Uses": 0,
      "Slots": 0,
      "RequiredFaith": 0
    }
  ]

  const rightHand1Info =
  {
    "ImageURL": "/images/transparent.png",
    "Name": "R. Hand 1",
    "AttackPower": 0,
    "PhysicalDamageReductionPercent": 0,
    "MagicAttackPower": 0,
    "MagicDamageReductionPercent": 0,
    "FireAttackPower": 0,
    "FireDamageReductionPercent": 0,
    "LightningAttackPower": 0,
    "LightningDamageReductionPercent": 0,
    "CriticalAttackPower": 0,
    "CriticalDamageReductionPercent": 0,
    "BleedDamage": 0,
    "PoisonDamage": 0,
    "DivineDamage": 0,
    "OccultDamage": 0,
    "RequiredStrength": 0,
    "BaseStrengthScaling": null,
    "MaxStrengthScaling": null,
    "RequiredDexterity": 0,
    "BaseDexterityScaling": null,
    "MaxDexterityScaling": null,
    "RequiredIntelligence": 0,
    "BaseIntelligenceScaling": null,
    "MaxIntelligenceScaling": null,
    "RequiredFaith": 0,
    "BaseFaithScaling": null,
    "MaxFaithScaling": null,
    "Durability": 0,
    "Weight": 0
  }

  const rightHand2Info =
  {
    "ImageURL": "/images/transparent.png",
    "Name": "R. Hand 2",
    "AttackPower": 0,
    "PhysicalDamageReductionPercent": 0,
    "MagicAttackPower": 0,
    "MagicDamageReductionPercent": 0,
    "FireAttackPower": 0,
    "FireDamageReductionPercent": 0,
    "LightningAttackPower": 0,
    "LightningDamageReductionPercent": 0,
    "CriticalAttackPower": 0,
    "CriticalDamageReductionPercent": 0,
    "BleedDamage": 0,
    "PoisonDamage": 0,
    "DivineDamage": 0,
    "OccultDamage": 0,
    "RequiredStrength": 0,
    "BaseStrengthScaling": null,
    "MaxStrengthScaling": null,
    "RequiredDexterity": 0,
    "BaseDexterityScaling": null,
    "MaxDexterityScaling": null,
    "RequiredIntelligence": 0,
    "BaseIntelligenceScaling": null,
    "MaxIntelligenceScaling": null,
    "RequiredFaith": 0,
    "BaseFaithScaling": null,
    "MaxFaithScaling": null,
    "Durability": 0,
    "Weight": 0
  }

  const leftHand1Info =
  {
    "ImageURL": "/images/transparent.png",
    "Name": "L. Hand 1",
    "AttackPower": 0,
    "PhysicalDamageReductionPercent": 0,
    "MagicAttackPower": 0,
    "MagicDamageReductionPercent": 0,
    "FireAttackPower": 0,
    "FireDamageReductionPercent": 0,
    "LightningAttackPower": 0,
    "LightningDamageReductionPercent": 0,
    "CriticalAttackPower": 0,
    "CriticalDamageReductionPercent": 0,
    "BleedDamage": 0,
    "PoisonDamage": 0,
    "DivineDamage": 0,
    "OccultDamage": 0,
    "RequiredStrength": 0,
    "BaseStrengthScaling": null,
    "MaxStrengthScaling": null,
    "RequiredDexterity": 0,
    "BaseDexterityScaling": null,
    "MaxDexterityScaling": null,
    "RequiredIntelligence": 0,
    "BaseIntelligenceScaling": null,
    "MaxIntelligenceScaling": null,
    "RequiredFaith": 0,
    "BaseFaithScaling": null,
    "MaxFaithScaling": null,
    "Durability": 0,
    "Weight": 0
  }

  const leftHand2Info =
  {
    "ImageURL": "/images/transparent.png",
    "Name": "L. Hand 2",
    "AttackPower": 0,
    "PhysicalDamageReductionPercent": 0,
    "MagicAttackPower": 0,
    "MagicDamageReductionPercent": 0,
    "FireAttackPower": 0,
    "FireDamageReductionPercent": 0,
    "LightningAttackPower": 0,
    "LightningDamageReductionPercent": 0,
    "CriticalAttackPower": 0,
    "CriticalDamageReductionPercent": 0,
    "BleedDamage": 0,
    "PoisonDamage": 0,
    "DivineDamage": 0,
    "OccultDamage": 0,
    "RequiredStrength": 0,
    "BaseStrengthScaling": null,
    "MaxStrengthScaling": null,
    "RequiredDexterity": 0,
    "BaseDexterityScaling": null,
    "MaxDexterityScaling": null,
    "RequiredIntelligence": 0,
    "BaseIntelligenceScaling": null,
    "MaxIntelligenceScaling": null,
    "RequiredFaith": 0,
    "BaseFaithScaling": null,
    "MaxFaithScaling": null,
    "Durability": 0,
    "Weight": 0
  }

  const currentArrowInfo = {
    "ImageURL": "/images/transparent.png",
    "Name": "Arrow",
    "AttackPower": 0,
    "MagicAttackPower": 0,
    "FireAttackPower": 0,
    "LightningAttackPower": 0,
    "CriticalAttackPower": 0
  }

  const currentBoltInfo = {
    "ImageURL": "/images/transparent.png",
    "Name": "Bolt",
    "AttackPower": 0,
    "MagicAttackPower": 0,
    "FireAttackPower": 0,
    "LightningAttackPower": 0,
    "CriticalAttackPower": 0
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
  const [currentRightHand1, setCurrentRightHand1] = useState(rightHand1Info);
  const [currentRightHand2, setCurrentRightHand2] = useState(rightHand2Info);
  const [currentLeftHand1, setCurrentLeftHand1] = useState(leftHand1Info);
  const [currentLeftHand2, setCurrentLeftHand2] = useState(leftHand2Info);
  // const [currentHandSlots, setCurrentHandSlots] = useState(handSlotsArray);

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
  const [currentSlot1, setCurrentSlot1] = useState(equippedSpellsArray[0]);
  const [currentSlot2, setCurrentSlot2] = useState(equippedSpellsArray[1]);
  const [currentSlot3, setCurrentSlot3] = useState(equippedSpellsArray[2]);
  const [currentSlot4, setCurrentSlot4] = useState(equippedSpellsArray[3]);
  const [currentSlot5, setCurrentSlot5] = useState(equippedSpellsArray[4]);
  const [currentSlot6, setCurrentSlot6] = useState(equippedSpellsArray[5]);
  const [currentSlot7, setCurrentSlot7] = useState(equippedSpellsArray[6]);
  const [currentSlot8, setCurrentSlot8] = useState(equippedSpellsArray[7]);
  const [currentSlot9, setCurrentSlot9] = useState(equippedSpellsArray[8]);
  const [currentSlot10, setCurrentSlot10] = useState(equippedSpellsArray[9]);
  const [currentSlot11, setCurrentSlot11] = useState(equippedSpellsArray[10]);
  const [currentSlot12, setCurrentSlot12] = useState(equippedSpellsArray[11]);

  //Stats State
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentMaxAttunementSlots, setCurrentMaxAttunementSlots] = useState(0);
  const [currentAttunementSlotsUsed, setCurrentAttunementSlotsUsed] = useState(0);

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

  function handleSpellState (newSpellArray, slotNumber) {
    console.log('handleSpellState: ' + JSON.stringify(newSpellArray))
    switch(slotNumber) {
      case 1:
        setCurrentSlot1(newSpellArray);
        break;
      case 2:
        setCurrentSlot2(newSpellArray);
        break;
      case 3:
        setCurrentSlot3(newSpellArray);
        break;
      case 4:
        setCurrentSlot4(newSpellArray);
        break;
      case 5:
        setCurrentSlot5(newSpellArray);
        break;
      case 6:
        setCurrentSlot6(newSpellArray);
        break;
      case 7:
        setCurrentSlot7(newSpellArray);
        break;
      case 8:
        setCurrentSlot8(newSpellArray);
        break;
      case 9:
        setCurrentSlot9(newSpellArray);
        break;
      case 10:
        setCurrentSlot10(newSpellArray);
        break;
      case 11:
        setCurrentSlot11(newSpellArray);
        break;
      case 12:
        setCurrentSlot12(newSpellArray);
        break;
    }
  }

  // useEffect(() => {
  //   console.log('currentEquippedSpells: ' + JSON.stringify(currentEquippedSpells));
  //   // console.log('currentRightHand2: ' + JSON.stringify(currentRightHand2));
  //   // console.log('currentLeftHand1: ' + JSON.stringify(currentLeftHand1));
  //   // console.log('currentLeftHand2: ' + JSON.stringify(currentLeftHand2));
  // }, [currentSlot1]);

  return (
    <>
    <View className="App">
      <Card>
        <Image src='./images/ds_slot.png' className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
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
      setCurrentRightHand1={setCurrentRightHand1}
      setCurrentRightHand2={setCurrentRightHand2}
      setCurrentLeftHand1={setCurrentLeftHand1}
      setCurrentLeftHand2={setCurrentLeftHand2}
      setCurrentSlot1={setCurrentSlot1}
      setCurrentArrow={setCurrentArrow}
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
      loading={loading}
      setLoading={setLoading}
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
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentHandSlot={currentRightHand1}
              setCurrentHandSlot={setCurrentRightHand1}
              position="bottom left"
            />
            <HandSlot id="rwep2" title="Right Hand 2"
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentHandSlot={currentRightHand2}
              setCurrentHandSlot={setCurrentRightHand2}
              position="bottom left"
            />
            <HandSlot id="lwep1" title="Left Hand 1"
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentHandSlot={currentLeftHand1}
              setCurrentHandSlot={setCurrentLeftHand1}
              position="bottom right"
            />
            <HandSlot id="lwep2" title="Left Hand 2"
              allWeaponsArray={allWeaponsArray}
              allShieldsArray={allShieldsArray}
              allFociArray={allFociArray}
              handleHandState={handleHandState}
              currentHandSlot={currentLeftHand2}
              setCurrentHandSlot={setCurrentLeftHand2}
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
              currentArrow={currentArrow}
              setCurrentArrow={setCurrentArrow}
              allArrowsArray={allArrowsArray}
            />
            <BoltSlot id="bolt" title="Bolt"
              currentBoltInfo={currentBoltInfo}
              allBoltsArray={allBoltsArray}
            />
          </div>
        </div>
        <div className="grid-item-equipment">
          Armor
          <div className="grid-item-container" id="armor">
            <HelmSlot id="helm" title="Helm"
              currentHelm={currentHelm}
              setCurrentHelm={setCurrentHelm}
              allHelmsArray={allHelmsArray}
              handleHelmState={handleHelmState}
              position="right bottom"
            />
            <ChestSlot id="chest" title="Chest"
              currentChest={currentChest}
              setCurrentChest={setCurrentChest}
              allChestsArray={allChestsArray}
              handleChestState={handleChestState}
              position="right bottom"
            />
            <GauntletSlot id="gauntlet" title="Gauntlet"
              currentGauntlet={currentGauntlet}
              setCurrentGauntlet={setCurrentGauntlet}
              allGauntletsArray={allGauntletsArray}
              handleGauntletState={handleGauntletState}
              position="left bottom"
            />
            <LegSlot id="gauntlet" title="Leg"
              currentLeg={currentLeg}
              setCurrentLeg={setCurrentLeg}
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
              <Stat title = "R Weapon 1" id="rwep1"
                defaultValue={0}
                currentRightHand1={currentRightHand1}
              />
              <Stat title = "R Weapon 2" id="rwep2"
                defaultValue={0}
                currentRightHand2={currentRightHand2}
              />
              <Stat title = "L Weapon 1" id="lwep1"
                defaultValue={0}
                currentLeftHand1={currentLeftHand1}
              />
              <Stat title = "L Weapon 2" id="lwep2"
                defaultValue={0}
                currentLeftHand2={currentLeftHand2}
              />
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
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot1}
                    setCurrentSlot={setCurrentSlot1}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={1}
                  />
                  <EquippedSpellSlot id="spell2" title="Spell 2"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot2}
                    setCurrentSlot={setCurrentSlot2}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={2}
                  />
                  <EquippedSpellSlot id="spell3" title="Spell 3"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot3}
                    setCurrentSlot1={setCurrentSlot3}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={3}
                  />
                  <EquippedSpellSlot id="spell4" title="Spell 4"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot4}
                    setCurrentSlot1={setCurrentSlot4}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={4}
                  />
                  <EquippedSpellSlot id="spell5" title="Spell 5"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot5}
                    setCurrentSlot1={setCurrentSlot5}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={5}
                  />
                  <EquippedSpellSlot id="spell6" title="Spell 6"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot6}
                    setCurrentSlot1={setCurrentSlot6}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={6}
                  />
                  <EquippedSpellSlot id="spell7" title="Spell 7"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot7}
                    setCurrentSlot1={setCurrentSlot7}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={7}
                  />
                  <EquippedSpellSlot id="spell8" title="Spell 8"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot8}
                    setCurrentSlot1={setCurrentSlot8}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={8}
                  />
                  <EquippedSpellSlot id="spell9" title="Spell 9"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot9}
                    setCurrentSlot1={setCurrentSlot9}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={9}
                  />
                  <EquippedSpellSlot id="spell10" title="Spell 10"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot10}
                    setCurrentSlot1={setCurrentSlot10}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={10}
                  />
                  <EquippedSpellSlot id="spell11" title="Spell 11"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot11}
                    setCurrentSlot1={setCurrentSlot11}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={11}
                  />
                  <EquippedSpellSlot id="spell12" title="Spell 12"
                    allSpellsArray={allSpellsArray}
                    handleSpellState={handleSpellState}
                    currentSlot={currentSlot12}
                    setCurrentSlot1={setCurrentSlot12}
                    setCurrentAttunementSlotsUsed={setCurrentAttunementSlotsUsed}
                    currentAttunement={currentAttunement}
                    position={12}
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

export default withAuthenticator(App);
