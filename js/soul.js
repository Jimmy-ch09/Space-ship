import {audioBattle,audioBone,audioDamage,spazioBack,soulImage,boneImage,background} from "./assets.js";
import {box} from "./caja.js";
import { bone,Bullet, whiteBone } from "./bone.js";
import { collision } from "./colisiones.js";
export const soul = {
    x:0, y:0, w:40, h:40, 
    vx:0, vy:0,hp:92,timerHit:0, 
    mode:"red", gravity:0.4, jumping:false, onGround:false,

    bullets:[],//forse ancora utile
    draw: function(ctx) {
        ctx.drawImage(soulImage, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
        this.bullets.forEach( (y)=>{
            y.draw(ctx);
        } );
    },
    
    move: function(ctx) {
        //if (this.x>box.width && this.x>=box.width || this.y>=box.height){
        this.x += this.vx;
        this.y += this.vy;
        let left   = -box.width/2 + this.w/2;
        let right  = box.width/2 - this.w/2;
        let top    = -box.height/2 + this.h/2;
        let bottom = box.height/2 - this.h/2;

        //control de gravedad
        if (mode=="blue"){};

        if (this.x< left) this.x=left;
        if (this.x> right) this.x=right;
        if (this.y< top) this.y=top;
        if (this.y> bottom) this.y=bottom;

        if (collision(this,bone)) {
            let now=Date.now();
            if (now-this.timerHit>100){
                this.hp-=1;
                this.timerHit=now;
                console.log(this.hp,this.timerHit);
                let sound = audioDamage.cloneNode();
                sound.play();
                if (this.hp==0) console.log("Game over");
            };                  

        } ;
        this.bullets.forEach( (y)=>{
            y.move(ctx);
        } );

        
    },
    fire: function() {
        let b=new whiteBone(this.x, this.y, 0, -3);
        this.bullets.push(b);
    }
}