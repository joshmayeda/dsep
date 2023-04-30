export function Stat(props) {
    return (
        <>
        <li className="stats" id={props.id}>
            {props.title}
        </li>
        <li className="stat-number" id={`${props.id}-number`}>
            {props.value}
        </li>
        </>
    )
}