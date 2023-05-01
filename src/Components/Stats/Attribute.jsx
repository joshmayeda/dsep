import AttunementSlots_Table from './Tables/AttunementSlots.json'

export function Attribute({title, id, currentStatValue, setCurrentAttribute, setMaxSlots, setCurrentSlotsUsed}) {

    function handleOnClick(value) {
        if(id !== "attunement"){
            //console.log(title + ' ' + value + ' ' + 'clicked');
            setCurrentAttribute(value);
        }else{
            //console.log(title + ' ' + value + ' ' + 'clicked');
            setCurrentAttribute(value);
            //console.log('attunementSlots: ' + AttunementSlots_Table[value].Slots);
            setMaxSlots(AttunementSlots_Table[value].Slots);
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
                <button className="attribute-increment" onClick={() => handleOnClick(currentStatValue + 1)}>🠭</button>
                <button className="attribute-increment" onClick={() => handleOnClick(currentStatValue - 1)}>🠯</button>
            </div>
        </li>
        </>
    )
}