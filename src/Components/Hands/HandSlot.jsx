import {useState, useRef} from 'react';
import Popup from 'reactjs-popup';
import { HandModal } from './HandModal';

export function HandSlot({
    allWeaponsArray,
    allShieldsArray,
    allFociArray,
    handleHandState,
    currentHandSlot,
    setCurrentHandSlot,
    position
  }) {

    const allHandsArray = [...allWeaponsArray, ...allShieldsArray, ...allFociArray];
    const ref = useRef(null);
    const closeModal = () => ref.current.close();
    const [slotColor, setSlotColor] = useState("");
    const styles = {
        "backgroundColor": slotColor,
        "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
    }

    function handleHandClicked(){
      closeModal();
    }

    function handleHandChange(hand){
      setCurrentHandSlot(hand);
    }

    return (
      <>
      <Popup ref={ref} trigger={<button className="grid-item-slot"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentHandSlot.ImageURL}></img>
                        <div className="slot-name">{currentHandSlot.Name}</div>
                      </button>} position="right top" closeOnDocumentClick={true}>
          <HandModal
            allHandsArray={allHandsArray}
            allWeaponsArray={allWeaponsArray}
            allShieldsArray={allShieldsArray}
            allFociArray={allFociArray}
            handleHandState={handleHandState}
            currentHandSlot={currentHandSlot}
            handleHandClicked={handleHandClicked}
            handleHandChange={handleHandChange}
            position={position}
          />
      </Popup>
      </>
    );
}