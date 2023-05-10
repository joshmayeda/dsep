import { Searchbar } from '../Searchbar';
import Popup from 'reactjs-popup';
import { useRef } from 'react';
import '../../modal.css';

export function HandModal({
    allHandsArray,
    allWeaponsArray,
    allShieldsArray,
    allFociArray,
    setCurrentHandSlot,
    currentHandSlot,
    handleHandClicked,
    handleHandChange,
    position
}) {

  function handleOnClick(hand){
    // console.log('handleOnClick: ' + JSON.stringify(ring));
    // console.log('ringSlotNum: ' + ringSlotNum);
    currentHandSlot = hand;
    //console.log('currentHandSlots: ' + JSON.stringify(currentHandSlot));
    handleHandChange(hand);
    setCurrentHandSlot(currentHandSlot);
    handleHandClicked();
  }

  return (
    <div className="modal">
        <div className="hand-modal">
            {allHandsArray?.map((hand) => (
            <Popup trigger={
            <div key={hand.Name} className="hand-modal-item" onClick={() => handleOnClick(hand)}>
                <img className="hand-modal-item-image"
                src={hand.ImageURL}></img>
                <div className="hand-modal-item-name">
                {hand.Name}
                </div>
            </div>} position = {position} on="hover" arrow={false}>
                <div className="hand-modal-item-description">
                    <div className="header">
                        Phys. Dmg.
                    </div>
                    <div className="header">
                        Phys. Def. (%)
                    </div>
                    <div className="header">
                        Magic Dmg.
                    </div>
                    <div className="header">
                        Magic Def. (%)
                    </div>
                    <div className="header">
                        Fire Dmg.
                    </div>
                    <div className="header">
                        Fire Def. (%)
                    </div>
                    <div className="header">
                        Lightning Dmg.
                    </div>
                    <div className="header">
                        Lightning Def. (%)
                    </div>
                    <div className="header">
                        Crit. Dmg.
                    </div>
                    <div className="header">
                        Stability
                    </div>
                    <div className="hand-phys-dmg">
                        {hand.AttackPower}
                    </div>
                    <div className="hand-phys-def">
                        {hand.PhysicalDamageReductionPercent}
                    </div>
                    <div className="hand--magic-dmg">
                        {hand.MagicAttackPower}
                    </div>
                    <div className="hand-magic-def">
                        {hand.MagicDamageReductionPercent}
                    </div>
                    <div className="hand-fire-dmg">
                        {hand.FireAttackPower}
                    </div>
                    <div className="hand-fire-def">
                        {hand.FireDamageReductionPercent}
                    </div>
                    <div className="hand-lightning-dmg">
                        {hand.LightningAttackPower}
                    </div>
                    <div className="hand-lightning-def">
                        {hand.LightningDamageReductionPercent}
                    </div>
                    <div className="hand-crit-dmg">
                        {hand.CriticalAttackPower}
                    </div>
                    <div className="hand-stability">
                        {hand.CriticalDamageReductionPercent}
                    </div>
                    <div className="header">
                        Bleed Dmg.
                    </div>
                    <div className="header">
                        Poison Dmg.
                    </div>
                    <div className="header">
                        Divine Dmg.
                    </div>
                    <div className="header">
                        Occult Dmg.
                    </div>
                    <div className="header">
                        Req. Str.
                    </div>
                    <div className="header">
                        Base Str. Scaling
                    </div>
                    <div className="header">
                        Max Str. Scaling
                    </div>
                    <div className="header">
                        Req. Dex.
                    </div>
                    <div className="header">
                        Base Dex. Scaling
                    </div>
                    <div className="header">
                        Max Dex. Scaling
                    </div>
                    <div className="hand-bleed-dmg">
                        {hand.BleedDamage}
                    </div>
                    <div className="hand-poison-dmg">
                        {hand.PoisonDamage}
                    </div>
                    <div className="hand-divine-dmg">
                        {hand.DivineDamage}
                    </div>
                    <div className="hand-occult-dmg">
                        {hand.OccultDamage}
                    </div>
                    <div className="hand-req-str">
                        {hand.RequiredStrength}
                    </div>
                    <div className="hand-base-str">
                        {hand.BaseStrengthScaling}
                    </div>
                    <div className="hand-max-str">
                        {hand.MaxStrengthScaling}
                    </div>
                    <div className="hand-req-dex">
                        {hand.RequiredDexterity}
                    </div>
                    <div className="hand-base-dex">
                        {hand.BaseDexterityScaling}
                    </div>
                    <div className="hand-max-dex">
                        {hand.MaxDexterityScaling}
                    </div>
                    <div className="header">
                        Req. Int.
                    </div>
                    <div className="header">
                        Base Int. Scaling
                    </div>
                    <div className="header">
                        Max Int. Scaling
                    </div>
                    <div className="header">
                        Req. Faith
                    </div>
                    <div className="header">
                        Base Faith Scaling
                    </div>
                    <div className="header">
                        Max Faith Scaling
                    </div>
                    <div className="header">
                        Durability
                    </div>
                    <div className="header">
                        Weight
                    </div>
                    <div className="header">
                        Attack Type(s)
                    </div>
                    <div className="header">
                        Acquired From
                    </div>

                    <div className="hand-req-int">
                        {hand.RequiredIntelligence}
                    </div>
                    <div className="hand-base-int">
                        {hand.BaseIntelligenceScaling}
                    </div>
                    <div className="hand-max-int">
                        {hand.MaxIntelligenceScaling}
                    </div>
                    <div className="hand-req-faith">
                        {hand.RequiredFaith}
                    </div>
                    <div className="hand-base-faith">
                        {hand.BaseFaithScaling}
                    </div>
                    <div className="hand-max-faith">
                        {hand.MaxFaithScaling}
                    </div>
                    <div className="hand-durability">
                        {hand.Durability}
                    </div>
                    <div className="hand-weight">
                        {hand.Weight}
                    </div>
                    <div className="hand-attack-type">
                        {hand.AttackTypes}
                    </div>
                    <div className="hand-acquired-from">
                        {hand.AcquiredFrom}
                    </div>
                </div>
            </Popup>
            ))}
        </div>
    </div>
  )
}