import {useRef, useState} from 'react';
import Popup from 'reactjs-popup';
import {BoltModal} from './BoltModal';

export function BoltSlot({currentBolt, allBoltsArray, setCurrentBolt}){

  const ref = useRef(null);
  const closeModal = () => ref.current.close();
  const [slotColor, setSlotColor] = useState("");
  const styles = {
      "backgroundColor": slotColor,
      "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
  }

  function handleBoltClicked(){
    closeModal();
  }

  function handleBoltChange(bolt){
    setCurrentBolt(bolt);
  }

  return (
    <>
      <Popup ref={ref} trigger={<button className="grid-item-slot"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentBolt.ImageURL}></img>
                        <div className="slot-name">{currentBolt.Name}</div>
                      </button>} position="right bottom" closeOnDocumentClick={true}>
          <BoltModal
            currentBolt={currentBolt}
            allBoltsArray={allBoltsArray}
            handleBoltClicked={handleBoltClicked}
            handleBoltChange={handleBoltChange}
          />
      </Popup>
      </>
  )
}