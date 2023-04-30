export function LevelCounter({currentLevel}) {
    return (
        <>
        <li className="attribute">
            Level
        </li>
        <li className="level-number">
            {currentLevel}
        </li>
        </>
    )
}