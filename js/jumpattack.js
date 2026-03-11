import { blueBone, whiteBone } from "./bone.js";
import { box } from "./caja.js";

export function jumpAttack(bones) {

    let y = box.height/2 + 60;

    // hueso izquierda
    bones.push(new whiteBone(-box.width/4, y, 8, 0));

    // hueso derecha
    bones.push(new whiteBone(box.width/4, y, -8, 0));

}

export function jumpAttackblue(bones) {

    let y = box.height/2 + 60;

    // hueso izquierda
    bones.push(new blueBone(-box.width/4, y, 8, 0));

    // hueso derecha
    bones.push(new blueBone(box.width/4, y, -8, 0));

}