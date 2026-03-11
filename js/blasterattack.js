import { Blaster } from "./blaster.js";
import { box } from "./caja.js";

export function blasterAttack(blasters) {

    let y = box.height/2 + 60;

    // hueso izquierda
    blasters.push(new Blaster(-box.width/4, y, 0));

    // hueso derecha
    blasters.push(new Blaster(box.width/4, y, 0));

}