import AttunementSlots_Table from './Tables/AttunementSlots.json'

export function Attribute({title, id, currentStatValue, setCurrentAttribute, setMaxSlots, setCurrentSlotsUsed, setCurrentLevel, currentLevel}) {

    function handleOnClick(value, increment) {
        if(id !== "attunement"){
            //console.log(title + ' ' + value + ' ' + 'clicked');
            setCurrentAttribute(value);
        }else{
            //console.log(title + ' ' + value + ' ' + 'clicked');
            setCurrentAttribute(value);
            //console.log('attunementSlots: ' + AttunementSlots_Table[value].Slots);
            setMaxSlots(AttunementSlots_Table[value].Slots);
        }

        if(increment === "up"){
            setCurrentLevel(currentLevel + 1);
        }else if(increment === "down"){
            setCurrentLevel(currentLevel - 1);
        }
    }

    return (
        <>
        <li className="attribute">
            {title}
        </li>
        <li className="attribute-number" id={`${id}-number`}>
            <div id="input">
                <div className="current-attribute-number" value={currentStatValue}>{currentStatValue}</div>
            </div>
            <div>
                <button className="attribute-increment" onClick={() => handleOnClick(currentStatValue + 1, "up")}>🠭</button>
                <button className="attribute-increment" onClick={() => handleOnClick(currentStatValue - 1, "down")}>🠯</button>
            </div>
        </li>
        </>
    )
}