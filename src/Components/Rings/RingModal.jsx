import { Searchbar } from '../Searchbar';
import Popup from 'reactjs-popup';
import { useRef } from 'react';
import '../../modal.css';

export function RingModal({ ringSlotNum, allRingsArray, handleRingState, currentSlots, handleRingClicked, handleRingChange }) {

  const ref = useRef(null);
  const closeModal = () => ref.current.close();

  function handleOnClick(ring){
    // console.log('handleOnClick: ' + JSON.stringify(ring));
    // console.log('ringSlotNum: ' + ringSlotNum);
    currentSlots[ringSlotNum].Name = ring.Name;
    currentSlots[ringSlotNum].ImageURL = ring.ImageURL;
    console.log('currentSlots: ' + JSON.stringify(currentSlots));
    handleRingChange(ring);
    handleRingState(currentSlots);
    handleRingClicked();
  }

  return (
    <div className="modal">
      <Searchbar rings={allRingsArray} />
        <div className="ring-modal">
          {allRingsArray?.map((ring) => (
            <Popup ref={ref} trigger={
            <div key={ring.Name} className="ring-modal-item" onClick={() => handleOnClick(ring)}>
              <img className="ring-modal-item-image"
              src={ring.ImageURL}></img>
              <div className="ring-modal-item-name">
                {ring.Name}
              </div>
            </div>} position = "right bottom" on="hover" arrow={false}>
              <div className="ring-modal-item-description">
                <div className="header">
                  Effects
                </div>
                <div className="header">
                  Acquired From
                </div>
                <div className="ring-effects">
                  {ring.Effects}
                </div>
                <div className="ring-acquired-from">
                  {ring.AcquiredFrom}
                </div>
              </div>
            </Popup>
          ))}
        </div>
    </div>
  )
}