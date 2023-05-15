import Popup from 'reactjs-popup';
import { useRef } from 'react';
import '../../modal.css';

export function SpellModal({
  allSpellsArray,
  currentSlot,
  handleSpellClicked,
  handleSpellChange,
  position
}) {

  const ref = useRef(null);
  const closeModal = () => ref.current.close();

  function handleOnClick(spell){
    // console.log('handleOnClick: ' + JSON.stringify(ring));
    // console.log('ringSlotNum: ' + ringSlotNum);
    var oldSpellSlots = 0;
    if(currentSlot.ImageURL !== "/images/transparent.png"){
      console.log('currentSlot: ' + JSON.stringify(currentSlot));
      oldSpellSlots = currentSlot.Slots;
      console.log('oldSpellSlots after: ' + oldSpellSlots);
    }
    currentSlot = spell;
    //console.log('currentSlots: ' + JSON.stringify(currentSlots));
    handleSpellChange(spell, oldSpellSlots);
    handleSpellClicked();
  }

  return (
    <div className="modal">
      <div className="spell-modal">
        {allSpellsArray?.map((spell) => (
          <Popup ref={ref} trigger={
          <div key={spell.Name} className="spell-modal-item" onClick={() => handleOnClick(spell)}>
            <img className="spell-modal-item-image"
            src={spell.ImageURL}></img>
            <div className="spell-modal-item-name">
              {spell.Name}
            </div>
          </div>} position = "left bottom" on="hover" arrow={false}>
            <div className="spell-modal-item-description">
              <div className="header">
                Uses
              </div>
              <div className="header">
                Slots
              </div>
              <div className="header">
                Type
              </div>
              <div className="header">
                Acquired From
              </div>
              <div className="spell-effects">
                {spell.Uses}
              </div>
              <div className="spell-acquired-from">
                {spell.Slots}
              </div>
              <div className="spell-acquired-from">
                {spell.Type}
              </div>
              <div className="spell-acquired-from">
                {spell.AcquiredFrom}
              </div>
            </div>
          </Popup>
        ))}
      </div>
    </div>
  )
}