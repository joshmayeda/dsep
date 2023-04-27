import React, { useEffect, useState } from 'react'
import { ItemSlot } from './Components/ItemSlot'
import { Attribute } from './Components/Attribute'
import { LevelCounter } from './Components/LevelCounter'
import { AttunementSlots } from './Components/AttunementSlots'
import { Stat } from './Components/Stat'
import { Resistance } from './Components/Resistance'
import { EquippedSpell } from './Components/Spells/EquippedSpell'
import { HandSlot } from './Components/Hands/HandSlot'
import { RingSlot } from './Components/Rings/RingSlot'
import { ArrowSlot } from './Components/Arrows/ArrowSlot'
import { BoltSlot } from './Components/Arrows/BoltSlot'
// import { ArmorSlot } from './Components/ArmorSlot'
//import bg from './images/ds_inventory.png'
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

  //Hands State
  const [allHandsArray, setAllHandsArray] = useState([]);
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
    getAllRings();
    getAllArrows();
    getAllBolts();
    getAllWeapons();
    getAllShields();
    getAllFoci();
  }, []);



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

  function handleHandState (newHandArray) {
    console.log('handleHandState: ' + JSON.stringify(newHandArray))
    setCurrentHandSlots(newHandArray)
  }

  return (
    <>
    <header>
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
            <ItemSlot id="helm" title="Helm"/>
            <ItemSlot id="body" title="Body"/>
            <ItemSlot id="legs" title="Legs"/>
            <ItemSlot id="arms" title="Arms"/>
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

                <AttunementSlots value="12"/>

                <div className="equipped-spells">

                  <EquippedSpell position="1" />
                  <EquippedSpell position="2" />
                  <EquippedSpell position="3" />
                  <EquippedSpell position="4" />
                  <EquippedSpell position="5" />
                  <EquippedSpell position="6" />
                  <EquippedSpell position="7" />
                  <EquippedSpell position="8" />
                  <EquippedSpell position="9" />
                  <EquippedSpell position="10" />
                  <EquippedSpell position="11" />
                  <EquippedSpell position="12" />

                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
