import { blueBone, whiteBone } from "./bone.js";
import { box } from "./caja.js";
import { audioBone } from "./assets.js";

export function jumpAttack(bones) {

    let y = box.height/2 + 60;
    audioBone.play();

    // hueso izquierda
    bones.push(new whiteBone(-box.width/2, y, 10, 0,30,120));

    // hueso derecha
    bones.push(new whiteBone(box.width/2, y, -10, 0,30,120));

}

export function jumpAttackblue(bones) {
    audioBone.play();
    let y = box.height/2 + 60;

    // hueso izquierda
    bones.push(new blueBone(-box.width/4, y, 8, 0));

    // hueso derecha
    bones.push(new blueBone(box.width/4, y, -8, 0));

}

export function hightbluebone(bones){
    audioBone.play();
    let y = box.height/2 + 60;
    bones.push(new blueBone(-box.width/2, y, 20, 0, 180));

    // hueso derecha
    bones.push(new blueBone(box.width/2, y, -20, 0, 180));

}

export function boneWall(bones){
    audioBone.play();
    let y = box.height/2 + 60;

    for(let i=-3;i<=3;i++){
        bones.push(new whiteBone(i*box.width/2, y, -2,0));
    }

}

export function hightblueboneleft(bones){
    audioBone.play();
    let y = box.height/2;
    bones.push(new blueBone(-box.width/2, y, 20, 0, 180));


}