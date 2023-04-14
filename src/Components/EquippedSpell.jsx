import { useState } from "react";

export function EquippedSpell(props) {
    const [slotColor, setSlotColor] = useState("");
    const styles = {
        "backgroundColor": slotColor,
        "boxShadow": "0 0 .5rem .5rem #1f1d1d inset",
    }

    return (
        <div
        className="equipped-spell"
        id={`equipped-spell${props.position}`}
        style={styles}
        onMouseEnter={() => setSlotColor("#676949")}
        onMouseLeave={() => setSlotColor("")}
        >
            <p>{props.position}</p>
        </div>
    )
}