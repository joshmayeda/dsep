import { Searchbar } from "../Searchbar";
import Popup from "reactjs-popup";
import '../../modal.css';


export function ArrowModal({currentArrow, allArrowsArray, handleArrowState, handleArrowClicked, handleArrowChange}){

    function handleOnClick(newArrow){
        // console.log('handleOnClick: ' + JSON.stringify(ring));
        // console.log('ringSlotNum: ' + ringSlotNum);
        currentArrow.Name = newArrow.Name;
        currentArrow.ImageURL = newArrow.ImageURL;
        console.log('currentArrow: ' + JSON.stringify(currentArrow));
        handleArrowChange(newArrow);
        handleArrowState(currentArrow);
        handleArrowClicked();
      }

    return (
        <div className="modal">
        <div className="arrow-modal">
          {allArrowsArray?.map((arrow) => (
            <Popup trigger={
            <div key={arrow.Name} className="arrow-modal-item" onClick={() => handleOnClick(arrow)}>
              <img className="arrow-modal-item-image"
              src={arrow.ImageURL}></img>
              <div className="arrow-modal-item-name">
                {arrow.Name}
              </div>
            </div>} position = "left bottom" on="hover" arrow={false}>
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
                  {arrow.AttackPower}
                </div>
                <div className="arrow-acquired-from">
                  {arrow.MagicAttackPower}
                </div>
                <div className="arrow-acquired-from">
                  {arrow.FireAttackPower}
                </div>
                <div className="arrow-acquired-from">
                  {arrow.LightningAttackPower}
                </div>
                <div className="arrow-acquired-from">
                  {arrow.CriticalAttackPower}
                </div>
                <div className="arrow-acquired-from">
                  {arrow.Merchant}
                </div>
              </div>
            </Popup>
          ))}
        </div>
    </div>
    )
}
