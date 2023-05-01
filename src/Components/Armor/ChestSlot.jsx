import {useRef, useState} from 'react';
import Popup from 'reactjs-popup';
import {ArmorModal} from './ArmorModal';

export function ChestSlot({currentChestInfo, allChestsArray, handleChestState, position}){

  const ref = useRef(null);
  const closeModal = () => ref.current.close();
  const [currentChest, setCurrentChest] = useState(currentChestInfo);
  const [slotColor, setSlotColor] = useState("");
  const styles = {
      "backgroundColor": slotColor,
      "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
  }

  function handleChestClicked(){
    closeModal();
  }

  function handleChestChange(chest){
    setCurrentChest(chest);
  }

  return (
    <>
      <Popup ref={ref} trigger={<button className="grid-item-slot"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentChest.ImageURL}></img>
                        <div className="slot-name">{currentChest.Name}</div>
                      </button>} position="right bottom" closeOnDocumentClick={true}>
          <ArmorModal
            currentArmor={currentChest}
            allArmorsArray={allChestsArray}
            handleArmorState={handleChestState}
            handleArmorClicked={handleChestClicked}
            handleArmorChange={handleChestChange}
            position={position}
          />
      </Popup>
      </>
  )
}