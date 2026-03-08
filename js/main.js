import {audioBattle,audioBone,audioDamage,spazioBack,soulImage,boneImage,background} from "./assets.js";
import {Bullet, whiteBone,bone} from "./bone.js";
import {box} from "./caja.js";
import {soul} from "./soul.js";
import { setInputs } from "./commands.js";
setInputs(soul, audioBone, Bullet, whiteBone);
//nemici
class Enemy{
    
    
}
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//stato nel gioco/soul
const hp=92;
const typeSoul=["images/soul.png","images/bsoul.png"];

function randomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}  
//Presa dei movimenti (aggiustato)


//Soul (rinominato da ship)

function attackA() {
    bullets=[];
    let x = randomInt(-box.width/2, box.width/2);
    let y = -box.height/2;
    bullets.push(new typeBullet(x, y, 0, 3));



}
let bones = [];
function spawnHorizontalLine() {
    for (let i = -box.width/2; i <= box.width/2; i += 40) {
        bones.push(new whiteBone(i, -box.height/2, 0, 2));
    }
}

//let b=new Bullet(ship.x+ship.w/2,ship.y,0,-3);

//Grafica del gioco

//Bgdata= stella cadente
const bgData = {
    frames: {
        "FallingStar_Sprites0.png": { frame: { x: 0,   y: 0,   w: 128, h: 128 } },
        "FallingStar_Sprites1.png": { frame: { x: 128, y: 0,   w: 128, h: 128 } },
        "FallingStar_Sprites2.png": { frame: { x: 256, y: 0,   w: 128, h: 128 } },
        "FallingStar_Sprites3.png": { frame: { x: 0,   y: 128, w: 128, h: 128 } },
        "FallingStar_Sprites4.png": { frame: { x: 128, y: 128, w: 128, h: 128 } },
        "FallingStar_Sprites5.png": { frame: { x: 256, y: 128, w: 128, h: 128 } },
        "FallingStar_Sprites6.png": { frame: { x: 0,   y: 256, w: 128, h: 128 } },
        "FallingStar_Sprites7.png": { frame: { x: 128, y: 256, w: 128, h: 128 } },
        "FallingStar_Sprites8.png": { frame: { x: 256, y: 256, w: 128, h: 128 } }
    }
};

let bgFrames = Object.keys(bgData.frames)
    .sort()
    .map(key => bgData.frames[key]);

let bgFrameIndex = 2;
let bgCounter = 2;
let bgSpeed = 2;

function drawBackground() {

    const frame = bgFrames[bgFrameIndex].frame;

    ctx.drawImage(
        background,
        frame.x, frame.y, frame.w, frame.h,
        randomInt(0,canvas.height), randomInt(0,canvas.width), 128, 128
    );

    bgCounter++;
    if (bgCounter >= bgSpeed) {
        bgFrameIndex++;
        bgCounter = 0;
    }

    if (bgFrameIndex >= bgFrames.length) {
        bgFrameIndex = 0;
    }
}
//debug

function drawHitbox(ctx, obj) {
    ctx.strokeStyle = "red";
    ctx.strokeRect(
        obj.x - obj.w/2,
        obj.y - obj.h/2,
        obj.w,
        obj.h
    );
}

//let timegiro=0;
function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawBackground();

    ctx.save();//modo o sistema di salvataggio della box e soul per poterli muovere in seguito
    ctx.translate(box.x, box.y);//muove il centro del canvas cio dove le x e y = 0
    ctx.rotate(box.angle); // angolo 0 pero lo cambiaro en seguito
    box.draw(ctx);
    bone.draw(ctx);
    soul.draw(ctx)
    drawHitbox(ctx,bone)
    drawHitbox(ctx,soul)
    //let now=Date.now();
    //if (now-timegiro>1000){
    //    box.angle+=1;
    //    timegiro=now;                    
    //} ;
    ctx.restore();//cosi ritornano allo stato iniziale
    soul.move(ctx);
    requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);