
export function Attribute(props) {

    return (
        <>
        <li className="attribute">
            {props.title}
        </li>
        <input type="number" min="8" max="99" id={`${props.id}-input`} />
        </>
    )
}