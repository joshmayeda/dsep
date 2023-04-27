import { Searchbar } from '../Searchbar';
import Popup from 'reactjs-popup';
import { useRef } from 'react';
import '../../modal.css';

export function ArrowModal({ allArrowsArray, handleArrowState, currentArrow, handleArrowClicked, handleArrowChange }) {

  const ref = useRef(null);

  function handleOnClick(newArrow){
    // console.log('handleOnClick: ' + JSON.stringify(ring));
    // console.log('ringSlotNum: ' + ringSlotNum);
    currentArrow.Name = newArrow.Name;
    currentArrow.ImageURL = newArrow.ImageURL;
    //console.log('currentArrow: ' + JSON.stringify(currentArrow));
    handleArrowChange(newArrow);
    handleArrowState(currentArrow);
    handleArrowClicked();
  }

  return (
    <div className="modal">
      <Searchbar arrows={allArrowsArray} />
        <div className="arrow-modal">
          {allArrowsArray?.map((arrow) => (
            <Popup ref={ref} trigger={
            <div key={arrow.Name} className="arrow-modal-item" onClick={() => handleOnClick(arrow)}>
              <img className="arrow-modal-item-image"
              src={arrow.ImageURL}></img>
              <div className="arrow-modal-item-name">
                {arrow.Name}
              </div>
            </div>} position = "right bottom" on="hover" arrow={false}>
              <div className="arrow-modal-item-description">
                <div className="header">
                  Phys. Damage
                </div>
                <div className="header">
                  Magic Damage
                </div>
                <div className="header">
                  Fire Damage
                </div>
                <div className="header">
                  Lightning Damage
                </div>
                <div className="header">
                  Crit. Damage
                </div>
                <div className="header">
                  Merchant
                </div>
                <div className="arrow-effects">
                  {arrow.AttackPower}
                </div>
                <div className="arrow-effects">
                  {arrow.MagicAttackPower}
                </div>
                <div className="arrow-effects">
                  {arrow.FireAttackPower}
                </div>
                <div className="arrow-effects">
                  {arrow.LightningAttackPower}
                </div>
                <div className="arrow-effects">
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