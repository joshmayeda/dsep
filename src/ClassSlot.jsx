import {useRef, useState} from 'react';
import Popup from 'reactjs-popup';
import "./App.css"

export function ClassSlot({position, id, selectedClass, handleClassState, setShowModal}){

  const ref = useRef(null);
  const closeModal = () => ref.current.close();
  const [slotColor, setSlotColor] = useState("");
  const styles = {
      "backgroundColor": slotColor,
      "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
  }

  function handleClassChange(id){
    handleClassState(id);
    closeModal();
  }

  return (
    <>
      <Popup ref={ref} trigger={
        <div className="class" id="warrior" onClick={() => handleClassChange(id)}>
          <img className="class-image" src={selectedClass.ImageURL}/>
          <div className="class-name">{selectedClass.Name}</div>
        </div>
      } on="hover" arrow={false} position={position}>
        <div className="class-description">
          <div className="class-header">Soul Level</div>
          <div className="class-header">Vitality</div>
          <div className="class-header">Attunement</div>
          <div className="class-header">Endurance</div>
          <div className="class-header">Strength</div>
          <div className="class-level">{selectedClass.Level}</div>
          <div className="class-vitality">{selectedClass.Vitality}</div>
          <div className="class-attunement">{selectedClass.Attunement}</div>
          <div className="class-endurance">{selectedClass.Endurance}</div>
          <div className="class-strength">{selectedClass.Strength}</div>
          <div className="class-header">Dexterity</div>
          <div className="class-header">Resistance</div>
          <div className="class-header">Intelligence</div>
          <div className="class-header">Faith</div>
          <div className="spacer"></div>
          <div className="class-dexterity">{selectedClass.Dexterity}</div>
          <div className="class-resistance">{selectedClass.Resistance}</div>
          <div className="class-intelligence">{selectedClass.Intelligence}</div>
          <div className="class-faith">{selectedClass.Faith}</div>
        </div>
      </Popup>
      </>
  )
}