import {useState, useRef} from 'react';
import Popup from 'reactjs-popup';
import { SpellModal } from './SpellModal';

export function EquippedSpellSlot({ equippedSpellsArray, position, allSpellsArray, handleSpellState, currentSlots }) {

    const ref = useRef(null);
    const closeModal = () => ref.current.close();
    const [currentSpellSlot, setCurrentSpellSlot] = useState(currentSlots[position]);

    const [slotColor, setSlotColor] = useState("transparent");
    const styles = {
        "backgroundColor": slotColor,
        "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
    }

    function handleSpellClicked(){
      closeModal();
    }

    function handleSpellChange(spell){
      setCurrentSpellSlot(spell);
    }

    return (
      <>
      <Popup ref={ref} trigger={<button className="equipped-spell"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentSpellSlot.ImageURL}></img>
                        <div>{currentSpellSlot.position}</div>
                      </button>} position="left bottom" closeOnDocumentClick={true}>
          <SpellModal
            equippedSpellsArray={equippedSpellsArray}
            position={position}
            allSpellsArray={allSpellsArray}
            handleSpellState={handleSpellState}
            currentSlots={currentSlots}
            handleSpellClicked={handleSpellClicked}
            handleSpellChange={handleSpellChange}
          />
      </Popup>
      </>
    );
}