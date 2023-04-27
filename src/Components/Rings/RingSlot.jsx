import {useState, useRef, useEffect} from 'react';
import Popup from 'reactjs-popup';
import { RingModal } from './RingModal';
import APIInterface from '../../API_Interface/API_Interface';

export function RingSlot({ ringSlotsArray, ringSlotNum, allRingsArray, handleRingState, currentSlots }) {

    const ref = useRef(null);
    const closeModal = () => ref.current.close();
    const [currentRingSlot, setCurrentRingSlot] = useState(currentSlots[ringSlotNum]);

    const [slotColor, setSlotColor] = useState("");
    const styles = {
        "backgroundColor": slotColor,
        "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
    }



    const api = new APIInterface();

    function handleRingClicked(){
      closeModal();
    }

    function handleRingChange(ring){
      setCurrentRingSlot(ring);
    }

    return (
      <>
      <Popup ref={ref} trigger={<button className="grid-item-slot"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentRingSlot.ImageURL}></img>
                        <div className="slot-name">{currentRingSlot.Name}</div>
                      </button>} position="right bottom" closeOnDocumentClick={true}>
          <RingModal
            ringSlotsArray={ringSlotsArray}
            ringSlotNum={ringSlotNum}
            allRingsArray={allRingsArray}
            handleRingState={handleRingState}
            currentSlots={currentSlots}
            handleRingClicked={handleRingClicked}
            handleRingChange={handleRingChange}
          />
      </Popup>
      </>
    );
}