import React, { useState, useMemo, useEffect } from 'react'
import { ClassSlot } from './ClassSlot'
import allClassesArray from "./classes.json"
import classesStartingEquipment from "./classesStartingEquipment.json"
import attunementSlotsArray from "./Components/Stats/Tables/AttunementSlots.json"
import './modal.css'
import axios from 'axios';

export function Modal ( {
  setCurrentClass,
  setCurrentLevel,
  setCurrentVitality,
  setCurrentAttunement,
  setCurrentEndurance,
  setCurrentStrength,
  setCurrentDexterity,
  setCurrentResistance,
  setCurrentIntelligence,
  setCurrentFaith,
  setCurrentMaxAttunementSlots,
  setCurrentAttunementSlotsUsed,
  setCurrentHelm,
  setCurrentChest,
  setCurrentGauntlet,
  setCurrentLeg,
  setCurrentRightHand1,
  setCurrentRightHand2,
  setCurrentLeftHand1,
  setCurrentLeftHand2,
  setCurrentSlot1,
  setCurrentArrow,
  setAllRingsArray,
  setAllArrowsArray,
  setAllBoltsArray,
  setAllWeaponsArray,
  setAllShieldsArray,
  setAllFociArray,
  setAllHelmsArray,
  setAllChestsArray,
  setAllGauntletsArray,
  setAllLegsArray,
  setAllSpellsArray,
  loading,
  setLoading
}) {

    //Classes State
  const [showModal, setShowModal] = useState("grid");

  const classModalStyle = {
    "display" : showModal
  }

  const setter = async () => {

    const rings = await axios.get("http://localhost:8080/api/rings");
    const arrows = await axios.get("http://localhost:8080/api/arrows");
    const bolts = await axios.get("http://localhost:8080/api/bolts");
    const weapons = await axios.get("http://localhost:8080/api/hands/weapons");
    const shields = await axios.get("http://localhost:8080/api/hands/shields");
    const foci = await axios.get("http://localhost:8080/api/hands/foci");
    const helms = await axios.get("http://localhost:8080/api/armor/helms");
    const chests = await axios.get("http://localhost:8080/api/armor/chest_armor");
    const gauntlets = await axios.get("http://localhost:8080/api/armor/gauntlets");
    const legs = await axios.get("http://localhost:8080/api/armor/leg_armor");
    const sorceries = await axios.get("http://localhost:8080/api/spells/sorceries");
    const miracles = await axios.get("http://localhost:8080/api/spells/miracles");
    const pyromancies = await axios.get("http://localhost:8080/api/spells/pyromancies");
    const spells = [...sorceries.data, ...miracles.data, ...pyromancies.data];

    Promise.all([rings, arrows, bolts, weapons, shields, foci, helms, chests, gauntlets, legs, spells]).then((response) => {
      setAllRingsArray(JSON.parse(JSON.stringify(response[0].data)));
      setAllArrowsArray(JSON.parse(JSON.stringify(response[1].data)));
      setAllBoltsArray(JSON.parse(JSON.stringify(response[2].data)));
      setAllWeaponsArray(JSON.parse(JSON.stringify(response[3].data)));
      setAllShieldsArray(JSON.parse(JSON.stringify(response[4].data)));
      setAllFociArray(JSON.parse(JSON.stringify(response[5].data)));
      setAllHelmsArray(JSON.parse(JSON.stringify(response[6].data)));
      setAllChestsArray(JSON.parse(JSON.stringify(response[7].data)));
      setAllGauntletsArray(JSON.parse(JSON.stringify(response[8].data)));
      setAllLegsArray(JSON.parse(JSON.stringify(response[9].data)));
      setAllSpellsArray(spells);

      setLoading(false);
    });
  }
  useMemo(() => {
    setter();
  }, []);

  function handleClassState (newClass){
    setLoading(true);
    const classObject = allClassesArray.find(obj => obj.Name === newClass);
    //console.log('classObject: ', classObject);

    setCurrentClass(classObject);
    setCurrentLevel(classObject.Level);
    setCurrentVitality(classObject.Vitality);
    setCurrentAttunement(classObject.Attunement);
    setCurrentEndurance(classObject.Endurance);
    setCurrentStrength(classObject.Strength);
    setCurrentDexterity(classObject.Dexterity);
    setCurrentResistance(classObject.Resistance);
    setCurrentIntelligence(classObject.Intelligence);
    setCurrentFaith(classObject.Faith);
    setCurrentMaxAttunementSlots(JSON.stringify(attunementSlotsArray[classObject.Attunement]["Slots"]));
    //setClassEquips([...classEquips, classObject.helm, classObject.chest, classObject.gauntlets, classObject.legs, classObject.rhand1, classObject.rhand2, classObject.lhand1, classObject.lhand2, classObject.spell]);

    if(classObject.helm === null){
      classObject.helm = {
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
    }
    if(classObject.chest === null){
      classObject.chest = {
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
    }
    if(classObject.gauntlets === null){
      classObject.gauntlets = {
        "ImageURL": "/images/transparent.png",
        "Name": "Gauntlets",
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
    }
    if(classObject.legs === null){
      classObject.legs = {
        "ImageURL": "/images/transparent.png",
        "Name": "Leggings",
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
    }

    setCurrentHelm(classObject.helm);
    setCurrentChest(classObject.chest);
    setCurrentGauntlet(classObject.gauntlets);
    setCurrentLeg(classObject.legs);

    if(classObject.rhand1 === null){
      classObject.rhand1 = {
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
      };
    }
    if(classObject.rhand2 === null){
      classObject.rhand2 = {
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
      };
    }
    if(classObject.lhand1 === null){
      classObject.lhand1 = {
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
      };
    }
    if(classObject.lhand2 === null){
      classObject.lhand2 = {
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
      };
    }
    setCurrentRightHand1(classObject.rhand1);
    setCurrentRightHand2(classObject.rhand2);
    setCurrentLeftHand1(classObject.lhand1);
    setCurrentLeftHand2(classObject.lhand2);
    setCurrentArrow(classObject.arrow);
    if(classObject.spell === null){
      classObject.spell = {
        "ImageURL": "/images/transparent.png",
        "Name": "Spell",
        "Uses": 0,
        "Slots": 0,
        "RequiredFaith": 0
      }
    }
    setCurrentSlot1(classObject.spell);
    setCurrentAttunementSlotsUsed(classObject.spell.Slots);
    setShowModal("none");
    setLoading(false);
  }

  return (
    <>
      {loading === true &&
        <div className="loading-screen">LOADING...</div>
      }
      {loading === false &&
        <div className="class-modal" id="class-modal" style={classModalStyle}>
              <div className="modal-content">
                  <div className="modal-header">
                  Starting Class
                  </div>
              <div className="modal-body">
                <ClassSlot
                  className="class"
                  id="Warrior"
                  selectedClass={allClassesArray[0]}
                  position="right center"
                  handleClassState={handleClassState}
                />
                <ClassSlot
                  className="class"
                  id="Knight"
                  selectedClass={allClassesArray[1]}
                  position="right center"
                  handleClassState={handleClassState}
                />
                <ClassSlot
                  className="class"
                  id="Wanderer"
                  selectedClass={allClassesArray[2]}
                  position="right center"
                  handleClassState={handleClassState}
                />
                <ClassSlot
                  className="class"
                  id="Thief"
                  selectedClass={allClassesArray[3]}
                  position="left center"
                  handleClassState={handleClassState}
                />
                <ClassSlot
                  className="class"
                  id="Bandit"
                  selectedClass={allClassesArray[4]}
                  position="left center"
                  handleClassState={handleClassState}
                />
                <ClassSlot
                  className="class"
                  id="Hunter"
                  selectedClass={allClassesArray[5]}
                  position="right center"
                  handleClassState={handleClassState}
                />
                <ClassSlot
                  className="class"
                  id="Sorcerer"
                  selectedClass={allClassesArray[6]}
                  position="right center"
                  handleClassState={handleClassState}
                />
                <ClassSlot
                  className="class"
                  id="Pyromancer"
                  selectedClass={allClassesArray[7]}
                  position="right center"
                  handleClassState={handleClassState}
                />
                <ClassSlot
                  className="class"
                  id="Cleric"
                  selectedClass={allClassesArray[8]}
                  position="left center"
                  handleClassState={handleClassState}
                />
                <ClassSlot
                  className="class"
                  id="Deprived"
                  selectedClass={allClassesArray[9]}
                  position="left center"
                  handleClassState={handleClassState}
                />
              </div>
              </div>
        </div>
      }
    </>
  )
}