import { Blaster } from "./blaster.js";
import { box } from "./caja.js";

export function blasterAttack(blasters) {
    // formula matematica 
    // dx=x2-x1;
    // dy=y2-y1;
    // angolo=atan2(dy,dx);


    let y = box.height/2 + 60;

    // blaste izquierdo            x      , y, angolo rad
    blasters.push(new Blaster(-box.width/4, y, 0));

    // blaster derecho
    blasters.push(new Blaster(box.width/4, y, 0));

}