
export function Attribute({title, id, currentStatValue, setCurrentAttribute}) {

    function handleOnClick(value) {
        console.log(title + ' ' + value + ' ' + 'clicked');
        setCurrentAttribute(value);
    }

    return (
        <>
        <li className="attribute">
            {title}
        </li>
        {/* <input type="number" onClick={() => handleOnClick(value)} placeholder={currentStatValue} min={currentStatValue} max="99" id={`${id}-input`} /> */}
        <li className="attribute-number" id={`${id}-number`}>
            <div id="input">
                <input className="current-attribute-number" value={currentStatValue}></input>
            </div>
            <div>
                <button className="attribute-increment" onClick={() => handleOnClick(currentStatValue + 1)}>🠭</button>
                <button className="attribute-increment" onClick={() => handleOnClick(currentStatValue - 1)}>🠯</button>
            </div>
        </li>
        </>
    )
}