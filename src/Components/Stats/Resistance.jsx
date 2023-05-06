import BleedResist_Table from "./Tables/BleedResist_Table.json"
import PoisonResist_Table from "./Tables/PoisonResist_Table.json"
import CurseResist_Table from "./Tables/CurseResist_Table.json"
import ItemDiscovery from "./Tables/ItemDiscovery.json"

export function Resistance({ id, title, defaultValue, currentAttributes, currentHelm, currentChest, currentGauntlet, currentLeg }) {


        switch(id){
            case "poise":
                var count = 0;
                count += currentHelm.Stability;
                count += currentChest.Stability;
                count += currentGauntlet.Stability;
                count += currentLeg.Stability;
                defaultValue = count;
                break;
            case "bleed-resist":
                var count = 0;
                count += BleedResist_Table[currentAttributes]["Bleed Resistance"];
                count += currentHelm.BleedResistance;
                count += currentChest.BleedResistance;
                count += currentGauntlet.BleedResistance;
                count += currentLeg.BleedResistance;
                defaultValue = count;
                break;
            case "poison-resist":
                var count = 0;
                count += PoisonResist_Table[currentAttributes]["Poison Resistance"];
                count += currentHelm.PoisonResistance;
                count += currentChest.PoisonResistance;
                count += currentGauntlet.PoisonResistance;
                count += currentLeg.PoisonResistance;
                defaultValue = count;
                break;
            case "curse-resist":
                var count = 0;
                count += CurseResist_Table[currentAttributes]["Curse Resist"];
                defaultValue = count;
                break;
            case "item-discovery":
                var count = 0;
                count += ItemDiscovery[currentAttributes].ItemDiscoveryRate;
                defaultValue = count;
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