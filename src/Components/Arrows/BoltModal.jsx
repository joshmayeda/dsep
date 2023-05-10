import { Searchbar } from "../Searchbar";
import Popup from "reactjs-popup";


export function BoltModal({currentBolt, allBoltsArray, handleBoltChange, handleBoltClicked}){

    function handleOnClick(newBolt){
        currentBolt = newBolt;
        console.log('currentBolt: ' + JSON.stringify(currentBolt));
        handleBoltChange(currentBolt);
        handleBoltClicked();
      }

    return (
        <div className="modal">
        <div className="bolt-modal">
          {allBoltsArray?.map((bolt) => (
            <Popup trigger={
            <div key={bolt.Name} className="bolt-modal-item" onClick={() => handleOnClick(bolt)}>
              <img className="bolt-modal-item-image"
              src={bolt.ImageURL}></img>
              <div className="bolt-modal-item-name">
                {bolt.Name}
              </div>
            </div>} position = "left bottom" on="hover" bolt={false}>
              <div className="bolt-modal-item-description">
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
                <div className="bolt-effects">
                  {bolt.AttackPower}
                </div>
                <div className="bolt-acquired-from">
                  {bolt.MagicAttackPower}
                </div>
                <div className="bolt-acquired-from">
                  {bolt.FireAttackPower}
                </div>
                <div className="bolt-acquired-from">
                  {bolt.LightningAttackPower}
                </div>
                <div className="bolt-acquired-from">
                  {bolt.CriticalAttackPower}
                </div>
                <div className="bolt-acquired-from">
                  {bolt.Merchant}
                </div>
              </div>
            </Popup>
          ))}
        </div>
    </div>
    )
}
