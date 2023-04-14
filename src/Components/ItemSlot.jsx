import {useState} from 'react';

export function ItemSlot(props) {
    const [slotColor, setSlotColor] = useState("");
    const styles = {
        "backgroundColor": slotColor,
        "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
    }

  return (
    <div className="grid-item-slot"
        style={styles}
        onMouseEnter={() => setSlotColor("#676949")}
        onMouseLeave={() => setSlotColor("")}
    >
      <p>{props.title}</p>
    </div>
  );
}