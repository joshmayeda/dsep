import {useState, useRef} from 'react';
import Popup from 'reactjs-popup';
import { SpellModal } from './SpellModal';

export function EquippedSpellSlot({
    allSpellsArray,
    handleSpellState,
    currentSlot,
    setCurrentSlot,
    setCurrentAttunementSlotsUsed,
    position
}) {

    const ref = useRef(null);
    const closeModal = () => ref.current.close();

    const [slotColor, setSlotColor] = useState("transparent");
    const styles = {
        "backgroundColor": slotColor,
        "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
    }

    function handleSpellClicked(){
      closeModal();
    }

    function handleSpellChange(spell, oldSpellSlots){
      setCurrentSlot(spell);
      setCurrentAttunementSlotsUsed(currentAttunementSlotsUsed => currentAttunementSlotsUsed + spell.Slots - oldSpellSlots);
    }

    return (
      <>
      <Popup ref={ref} trigger={<button className="equipped-spell"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentSlot.ImageURL}></img>
                        <div>{currentSlot.position}</div>
                      </button>} position="left" closeOnDocumentClick={true} arrow={false}>
          <SpellModal
            allSpellsArray={allSpellsArray}
            handleSpellState={handleSpellState}
            currentSlot={currentSlot}
            setCurrentSlot={setCurrentSlot}
            handleSpellClicked={handleSpellClicked}
            handleSpellChange={handleSpellChange}
            position={position}
          />
      </Popup>
      </>
    );
}