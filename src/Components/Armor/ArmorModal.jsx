import Popup from "reactjs-popup";
import '../../modal.css';


export function ArmorModal({currentArmor, allArmorsArray, handleArmorState, handleArmorClicked, handleArmorChange, position}){

    function handleOnClick(newArmor){
        // console.log('handleOnClick: ' + JSON.stringify(ring));
        // console.log('ringSlotNum: ' + ringSlotNum);
        currentArmor.Name = newArmor.Name;
        currentArmor.ImageURL = newArmor.ImageURL;
        console.log('currentArmor: ' + JSON.stringify(currentArmor));
        handleArmorChange(newArmor);
        handleArmorState(currentArmor);
        handleArmorClicked();
      }

    return (
        <div className="modal">
        <div className="armor-modal">
          {allArmorsArray?.map((armor) => (
            <Popup trigger={
            <div key={armor.Name} className="armor-modal-item" onClick={() => handleOnClick(armor)}>
              <img className="armor-modal-item-image"
              src={armor.ImageURL}></img>
              <div className="armor-modal-item-name">
                {armor.Name}
              </div>
            </div>} position = {position} on="hover" armor={false}>
              <div className="armor-modal-item-description">
                <div className="header">
                  Phys. Def.
                </div>
                <div className="header">
                  Strike Def.
                </div>
                <div className="header">
                  Slash Def.
                </div>
                <div className="header">
                  Thrust Def.
                </div>
                <div className="header">
                  Magic Def.
                </div>
                <div className="header">
                  Fire Def.
                </div>
                <div className="header">
                  Lightning Def.
                </div>
                <div className="armor-phys-def">
                  {armor.PhysicalProtection}
                </div>
                <div className="armor-strike-def">
                  {armor.StrikeProtection}
                </div>
                <div className="armor-slash-def">
                  {armor.SlashProtection}
                </div>
                <div className="armor-thrust-def">
                  {armor.ThrustProtection}
                </div>
                <div className="armor-magic-def">
                  {armor.MagicProtection}
                </div>
                <div className="armor-fire-def">
                  {armor.FireProtection}
                </div>
                <div className="armor-lightning-def">
                  {armor.LightningProtection}
                </div>
                <div className="header">
                  Bleed Resist
                </div>
                <div className="header">
                  Poison Resist
                </div>
                <div className="header">
                  Curse Resist
                </div>
                <div className="header">
                  Stability
                </div>
                <div className="header">
                  Durability
                </div>
                <div className="header">
                  Weight
                </div>
                <div className="spacer">
                </div>
                <div className="armor-bleed-resist">
                  {armor.BleedResistance}
                </div>
                <div className="armor-poison-resist">
                  {armor.PoisonResistance}
                </div>
                <div className="armor-curse-resist">
                  {armor.CurseResistance}
                </div>
                <div className="armor-stability">
                  {armor.Stability}
                </div>
                <div className="armor-durability">
                  {armor.Durability}
                </div>
                <div className="armor-weight">
                  {armor.Weight}
                </div>
              </div>
            </Popup>
          ))}
        </div>
    </div>
    )
}
