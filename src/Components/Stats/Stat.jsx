import HP_Table from "./Tables/HP_Table.json"
import Stamina_Table from "./Tables/Stamina_Table.json"
import EquipLoad_Table from "./Tables/EquipLoad_Table.json"

export function Stat({ id, title, defaultValue, currentAttributes, currentHelm, currentChest }){

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
            case "strike-def":
                var count = 0;

                if(currentHelm === undefined || currentHelm.Name === "Helm"){
                    break;
                }else{
                    //console.log('currentHelm: ', currentHelm);

                    count += currentHelm.StrikeProtection;
                }
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
            {defaultValue}
        </li>
        </>
    )
}