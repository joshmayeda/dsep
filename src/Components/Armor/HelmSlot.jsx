import {useRef, useState} from 'react';
import Popup from 'reactjs-popup';
import {ArmorModal} from './ArmorModal';

export function HelmSlot({currentHelmInfo, allHelmsArray, handleHelmState}){

  const ref = useRef(null);
  const closeModal = () => ref.current.close();
  const [currentHelm, setCurrentHelm] = useState(currentHelmInfo);
  const [slotColor, setSlotColor] = useState("");
  const styles = {
      "backgroundColor": slotColor,
      "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
  }

  function handleHelmClicked(){
    closeModal();
  }

  function handleHelmChange(helm){
    setCurrentHelm(helm);
  }

  return (
    <>
      <Popup ref={ref} trigger={<button className="grid-item-slot"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentHelm.ImageURL}></img>
                        <div className="slot-name">{currentHelm.Name}</div>
                      </button>} position="right bottom" closeOnDocumentClick={true}>
          <ArmorModal
            currentArmor={currentHelm}
            allArmorsArray={allHelmsArray}
            handleArmorState={handleHelmState}
            handleArmorClicked={handleHelmClicked}
            handleArmorChange={handleHelmChange}
          />
      </Popup>
      </>
  )
}