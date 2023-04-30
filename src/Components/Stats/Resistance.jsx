export function Resistance(props) {
    return (
        <>
            <li className="resistance" id={props.id}>
                {props.title}
            </li>
            <li className="resistance-number" id={`${props.id}-number`}>
                {props.value}
            </li>
        </>
    )
}