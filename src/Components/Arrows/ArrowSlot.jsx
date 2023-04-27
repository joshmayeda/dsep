import {useRef, useState} from 'react';
import Popup from 'reactjs-popup';
import {ArrowModal} from './ArrowModal';

export function ArrowSlot({currentArrowInfo, allArrowsArray, handleArrowState}){

  const ref = useRef(null);
  const closeModal = () => ref.current.close();
  const [currentArrow, setCurrentArrow] = useState(currentArrowInfo);
  const [slotColor, setSlotColor] = useState("");
  const styles = {
      "backgroundColor": slotColor,
      "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
  }

  function handleArrowClicked(){
    closeModal();
  }

  function handleArrowChange(arrow){
    setCurrentArrow(arrow);
  }

  return (
    <>
      <Popup ref={ref} trigger={<button className="grid-item-slot"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentArrow.ImageURL}></img>
                        <div className="slot-name">{currentArrow.Name}</div>
                      </button>} position="right bottom" closeOnDocumentClick={true}>
          <ArrowModal
            currentArrow={currentArrow}
            allArrowsArray={allArrowsArray}
            handleArrowState={handleArrowState}
            handleArrowClicked={handleArrowClicked}
            handleArrowChange={handleArrowChange}
          />
      </Popup>
      </>
  )
}