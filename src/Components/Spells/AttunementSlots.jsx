export function AttunementSlots({slotsLeft, maxSlots}) {
    return (
        <>
        <div className="attunement-slots">
            <div>
                Attunement Slots
            </div>
            <div className="attunement-slot-number" id="attunement-slot-number">
                {slotsLeft}/{maxSlots}
            </div>
        </div>
        </>
    )
}