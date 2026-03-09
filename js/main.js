import {audioBattle,audioBone,audioDamage,spazioBack,soulImage,boneImage,background,audioSoulmode} from "./assets.js";
import {Bullet, whiteBone,bone} from "./bone.js";
import {box} from "./caja.js";
import {soul} from "./soul.js";
import { setInputs } from "./commands.js";
setInputs(soul, audioBone, Bullet, whiteBone,audioSoulmode);
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