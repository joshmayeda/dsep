import { useState, useRef } from "react";
import Popup from "reactjs-popup";
import { ArrowModal } from "./ArrowModal";

export function ArrowSlot( {currentArrow, handleArrowState, allArrowsArray}) {

    const ref = useRef(null);
    const closeModal = () => ref.current.close();
    const [slotColor, setSlotColor] = useState("");
    const [currentArrowSlot, setCurrentArrowSlot] = useState(currentArrow);
    console.log('currentArrow in ItemSlot: ' + JSON.stringify(currentArrow));
    console.log('currentArrowSlot in ItemSlot: ' + JSON.stringify(currentArrowSlot));

    //console.log('currentArrow.ImageURL: ' + JSON.stringify(currentArrow.ImageURL));


    const styles = {
        "backgroundColor": slotColor,
        "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
    }

    function handleArrowClicked(){
      closeModal();
    }

    function handleArrowChange(arrow){
      setCurrentArrowSlot(arrow);
    }

    return (
      <>
      <Popup ref={ref} trigger={<button className="grid-item-slot"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                        <img className="slot-image" src={currentArrowSlot.ImageURL}></img>
                        <div className="slot-name">{currentArrowSlot.Name}</div>
                      </button>} position="right bottom" closeOnDocumentClick={true}>
          <ArrowModal
            allArrowsArray={allArrowsArray}
            handleArrowState={handleArrowState}
            currentArrow={currentArrow}
            handleArrowClicked={handleArrowClicked}
            handleArrowChange={handleArrowChange}
          />
      </Popup>
      </>
    );
}