import HP_Table from "./Tables/HP_Table.json"
import Stamina_Table from "./Tables/Stamina_Table.json"
import EquipLoad_Table from "./Tables/EquipLoad_Table.json"

export function Stat({
    id,
    title,
    defaultValue,
    currentAttributes,
    currentHelm,
    currentChest,
    currentGauntlet,
    currentLeg,
    currentRightHand1,
    currentRightHand2,
    currentLeftHand1,
    currentLeftHand2
}){


    switch(id){
        case "hp":
            defaultValue = JSON.stringify(HP_Table[currentAttributes].HP);
            break;
        case "stamina":
            defaultValue = JSON.stringify(Stamina_Table[currentAttributes].Stamina);
            break;
        case "equip-load":
            defaultValue = JSON.stringify(EquipLoad_Table[currentAttributes].EquipBurden);
            break;
        case "rwep1":
            defaultValue = currentRightHand1.AttackPower;
            break;
        case "rwep2":
            defaultValue = currentRightHand2.AttackPower;
            break;
        case "lwep1":
            defaultValue = currentLeftHand1.AttackPower;
            break;
        case "lwep2":
            defaultValue = currentLeftHand2.AttackPower;
            break;
        case "strike-def":
            var count = 0;
            count += currentHelm.StrikeProtection;
            count += currentChest.StrikeProtection;
            count += currentGauntlet.StrikeProtection;
            count += currentLeg.StrikeProtection;
            defaultValue = count;
            break;
        case "slash-def":
            var count = 0;
            count += currentHelm.SlashProtection;
            count += currentChest.SlashProtection;
            count += currentGauntlet.SlashProtection;
            count += currentLeg.SlashProtection;
            defaultValue = count;
            break;
        case "thrust-def":
            var count = 0;
            count += currentHelm.ThrustProtection;
            count += currentChest.ThrustProtection;
            count += currentGauntlet.ThrustProtection;
            count += currentLeg.ThrustProtection;
            defaultValue = count;
            break;
        case "magic-def":
            var count = 0;
            count += currentHelm.MagicProtection;
            count += currentChest.MagicProtection;
            count += currentGauntlet.MagicProtection;
            count += currentLeg.MagicProtection;
            defaultValue = count;
            break;
        case "flame-def":
            var count = 0;
            count += currentHelm.FireProtection;
            count += currentChest.FireProtection;
            count += currentGauntlet.FireProtection;
            count += currentLeg.FireProtection;
            defaultValue = count;
            break;
        case "lightning-def":
            var count = 0;
            count += currentHelm.LightningProtection;
            count += currentChest.LightningProtection;
            count += currentGauntlet.LightningProtection;
            count += currentLeg.LightningProtection;
            defaultValue = count;
            break;
        default:
            break;
    }

    return (
        <>
        <li className="stats" id={id}>
            {title}
        </li>
        <li className="stat-number" id={`${id}-number`}>
            {Math.trunc(defaultValue)}
        </li>
        </>
    )
}