import {useRef, useState} from 'react';
import Popup from 'reactjs-popup';
import {ArmorModal} from './ArmorModal';

export function GauntletSlot({currentGauntletInfo, allGauntletsArray, handleGauntletState}){

  const ref = useRef(null);
  const closeModal = () => ref.current.close();
  const [currentGauntlet, setCurrentGauntlet] = useState(currentGauntletInfo);
  const [slotColor, setSlotColor] = useState("");
  const styles = {
      "backgroundColor": slotColor,
      "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
  }

  function handleGauntletClicked(){
    closeModal();
  }

  function handleGauntletChange(gauntlet){
    setCurrentGauntlet(gauntlet);
  }

  return (
    <>
      <Popup ref={ref} trigger={<button className="grid-item-slot"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentGauntlet.ImageURL}></img>
                        <div className="slot-name">{currentGauntlet.Name}</div>
                      </button>} position="right bottom" closeOnDocumentClick={true}>
          <ArmorModal
            currentArmor={currentGauntlet}
            allArmorsArray={allGauntletsArray}
            handleArmorState={handleGauntletState}
            handleArmorClicked={handleGauntletClicked}
            handleArmorChange={handleGauntletChange}
          />
      </Popup>
      </>
  )
}