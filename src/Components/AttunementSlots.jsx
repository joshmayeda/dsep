export function AttunementSlots(props) {
    return (
        <>
        <div className="attunement-slots">
            <div>
                Attunement Slots
            </div>
            <div className="attunement-slot-number" id="attunement-slot-number">
                {props.value}
            </div>
        </div>
        </>
    )
}