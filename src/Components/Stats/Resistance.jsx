import BleedResist_Table from "./Tables/BleedResist_Table.json"
import PoisonResist_Table from "./Tables/PoisonResist_Table.json"
import CurseResist_Table from "./Tables/CurseResist_Table.json"
import ItemDiscovery from "./Tables/ItemDiscovery.json"

export function Resistance({ id, title, defaultValue, currentAttributes}) {


        switch(id){
            case "bleed-resist":
                defaultValue = JSON.stringify(BleedResist_Table[currentAttributes]["Bleed Resistance"]);
                break;
            case "poison-resist":
                defaultValue = JSON.stringify(PoisonResist_Table[currentAttributes]["Poison Resistance"]);
                break;
            case "curse-resist":
                defaultValue = JSON.stringify(CurseResist_Table[currentAttributes]["Curse Resist"]);
                break;
            case "item-discovery":
                defaultValue = JSON.stringify(ItemDiscovery[currentAttributes].ItemDiscoveryRate);
            default:
                break;
        }

    return (
        <>
        <li className="resistance" id={id}>
            {title}
        </li>
        <li className="resistance-number" id={`${id}-number`}>
            {defaultValue}
        </li>
        </>
    )
}