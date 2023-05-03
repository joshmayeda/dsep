import {useRef, useState} from 'react';
import Popup from 'reactjs-popup';
import {ArmorModal} from './ArmorModal';

export function LegSlot({currentLegArmor, allLegsArray, handleLegState, position}){

  const ref = useRef(null);
  const closeModal = () => ref.current.close();
  const [currentLeg, setCurrentLeg] = useState(currentLegArmor);
  const [slotColor, setSlotColor] = useState("");
  const styles = {
      "backgroundColor": slotColor,
      "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
  }

  function handleLegClicked(){
    closeModal();
  }

  function handleLegChange(leg){
    setCurrentLeg(leg);
  }

  return (
    <>
      <Popup ref={ref} trigger={<button className="grid-item-slot"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentLegArmor.ImageURL}></img>
                        <div className="slot-name">{currentLegArmor.Name}</div>
                      </button>} position="right bottom" closeOnDocumentClick={true}>
          <ArmorModal
            currentArmor={currentLeg}
            allArmorsArray={allLegsArray}
            handleArmorState={handleLegState}
            handleArmorClicked={handleLegClicked}
            handleArmorChange={handleLegChange}
            position={position}
          />
      </Popup>
      </>
  )
}