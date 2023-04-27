import { Searchbar } from "../Searchbar";
import Popup from "reactjs-popup";


export function BoltModal({currentBolt, allBoltsArray, handleBoltState, handleBoltClicked, handleBoltChange}){

    function handleOnClick(newBolt){
        // console.log('handleOnClick: ' + JSON.stringify(ring));
        // console.log('ringSlotNum: ' + ringSlotNum);
        currentBolt.Name = newBolt.Name;
        currentBolt.ImageURL = newBolt.ImageURL;
        console.log('currentBolt: ' + JSON.stringify(currentBolt));
        handleBoltChange(newBolt);
        handleBoltState(currentBolt);
        handleBoltClicked();
      }

    return (
        <div className="modal">
        <div className="arrow-modal">
          {allBoltsArray?.map((bolt) => (
            <Popup trigger={
            <div key={bolt.Name} className="arrow-modal-item" onClick={() => handleOnClick(bolt)}>
              <img className="arrow-modal-item-image"
              src={bolt.ImageURL}></img>
              <div className="arrow-modal-item-name">
                {bolt.Name}
              </div>
            </div>} position = "right bottom" on="hover" bolt={false}>
              <div className="arrow-modal-item-description">
                <div className="header">
                  Physical Dmg.
                </div>
                <div className="header">
                  Magic Dmg.
                </div>
                <div className="header">
                  Fire Dmg.
                </div>
                <div className="header">
                  Lightning Dmg.
                </div>
                <div className="header">
                  Crit. Dmg.
                </div>
                <div className="header">
                  Merchant
                </div>
                <div className="arrow-effects">
                  {bolt.AttackPower}
                </div>
                <div className="arrow-acquired-from">
                  {bolt.MagicAttackPower}
                </div>
                <div className="arrow-acquired-from">
                  {bolt.FireAttackPower}
                </div>
                <div className="arrow-acquired-from">
                  {bolt.LightningAttackPower}
                </div>
                <div className="arrow-acquired-from">
                  {bolt.CriticalAttackPower}
                </div>
                <div className="arrow-acquired-from">
                  {bolt.Merchant}
                </div>
              </div>
            </Popup>
          ))}
        </div>
    </div>
    )
}
