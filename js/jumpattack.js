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
export function leftcenterjumpattack(bones,x,vx,h,hmax) {
    if (x==null)x=-box.width/2;
    if (vx==null)vx=10;
    let y = box.height/2 + 60;
    audioBone.play();

    // hueso izquierda
    simpleTallBone(bones,x,vx,h,hmax);

    simpleShortBone(bones,x,vx,h,hmax);

}
export function centerjumpattack(bones,x,vx,h,hmax){
    if (x==null)x=-box.width/2;
    if (vx==null)vx=10;
    leftcenterjumpattack(bones,x,vx)
    leftcenterjumpattack(bones,-x,-vx)
}

-box.width/2

//basic bone
export function simpleShortBone(bones,x,vx,h,hmax){
    if (h==null)h=40;
    if (hmax==null)hmax=40;
    let y = box.height/2 + 60;
    bones.push(new whiteBone(x, y, vx, 0,h,hmax));

}

export function simpleTallBone(bones,x,vx){
    audioBone.play();
    if(vx==null)vx=10;
    if(x==null)x=-box.width/2;
    let y = box.height/2 + 60;
    bones.push(new whiteBone(x, y-box.height/2-box.height/2,vx, 0,box.height/2,box.height/2));
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
        bones.push(new whiteBone(box.width/2+40, y, -2,0));
    }

}

export function hightblueboneleft(bones){
    audioBone.play();
    let y = box.height/2;
    bones.push(new whiteBone(-box.width/2, y-box.height/2-box.height/4, 20, 0,box.height/2+box.height/4 ,box.height/2+box.height/4));

}

