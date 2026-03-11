import {audioBattle,battleSong,audioBone,audioDamage,spazioBack,soulImage,boneImage,background,audioSoulmode,audioBlaster,audioHeal} from "./assets.js";
import {Bullet, whiteBone,bone} from "./bone.js";
import {box} from "./caja.js";
import {soul} from "./soul.js";
import { jumpAttack } from "./jumpattack.js";
import { setInputs } from "./commands.js";
import { blasterAttack } from "./blasterattack.js";

battleSong.play();
setInputs(soul, audioBone, Bullet, whiteBone,audioSoulmode,audioBlaster,audioHeal);
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
let angle=0;
let bones=[];
let lastAttack = 0;

function updateboneAttacks() {
    let now = Date.now();

    if (now - lastAttack > 1000) {
        jumpAttack(bones);
        lastAttack = now;
    }

}

let blasters=[];
function updateblasterAttacks() {
    let now = Date.now();

    if (now - lastAttack > 1000) {
        blasterAttack(blasters);
        lastAttack = now;
    }

}




function draw() {
    if (battleSong.currentTime<10.6){
        //intro
        console.log(battleSong.currentTime);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.save();//modo o sistema di salvataggio della box e soul per poterli muovere in seguito
        ctx.translate(box.x, box.y);//muove il centro del canvas cio dove le x e y = 0
        ctx.rotate(angle); // angolo 0 pero lo cambiaro en seguito
        angle += 0.03;
        box.draw(ctx);
        //let now=Date.now();
        //if (now-timegiro>1000){
        //    box.angle+=1;
        //    timegiro=now;                    
        //} ;
        ctx.restore();//cosi ritornano allo stato iniziale
        soul.x=500;
        soul.y=600;
        soul.draw(ctx)
        drawHitbox(ctx,soul)
        requestAnimationFrame(draw);

    };
    if (battleSong.currentTime>10.6){
        //intro 2
        if(box.width<700)box.width+=20;
        if(soul.mode==="red"){
            soul.x=0;
            soul.y=0;
            soul.mode="blue"
            audioSoulmode.play();

        }
        console.log(battleSong.currentTime);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.save();//modo o sistema di salvataggio della box e soul per poterli muovere in seguito
        ctx.translate(box.x, box.y);//muove il centro del canvas cio dove le x e y = 0
        ctx.rotate(box.angle); // angolo 0 pero lo cambiaro en seguito
        box.draw(ctx);
        bone.draw(ctx);
        soul.draw(ctx);
        updateboneAttacks();
        updateblasterAttacks()
        bones.forEach(b => {
            b.move();
            b.draw(ctx);
        });
        //let now=Date.now();
        //if (now-timegiro>1000){
        //    box.angle+=1;
        //    timegiro=now;                    
        //} ;
        ctx.restore();//cosi ritornano allo stato iniziale
        soul.move(ctx);
        requestAnimationFrame(draw);
    };
}
window.requestAnimationFrame(draw);