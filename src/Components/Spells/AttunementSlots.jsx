import AttunementSlots_Table from '../Stats/Tables/AttunementSlots.json'

export function AttunementSlots({slotsUsed, maxSlots, setMaxSlots, currentAttunement}) {



    return (
        <>
        <div className="attunement-slots">
            <div>
                Attunement Slots
            </div>
            <div className="attunement-slot-number" id="attunement-slot-number">
                {maxSlots - slotsUsed}/{maxSlots}
            </div>
        </div>
        </>
    )
}