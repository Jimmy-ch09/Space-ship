import {audioBattle,audioBone,audioDamage,soulImage,bsoulImage,boneImage,background} from "./assets.js";
import {box} from "./caja.js";
import {Bullet, whiteBone } from "./bone.js";
import { collision } from "./colisiones.js";
export const soul = {
    x:0, y:0, w:35, h:35, 
    vx:0, vy:0,hp:92,maxHp:92, timerHit:0, heal:3,state:false,
    //modo azul
    mode:"red", gravity:0.35, jumpPower:-6, jumpHoldForce:-0.3, jumpHoldTime:0, jumpHoldMax:18, jumping:false, onGround:false,

    bullets:[],//forse ancora utile
    draw: function(ctx) {
        let img;
        if (this.mode==="red")img = soulImage;
        if (this.mode==="blue")img = bsoulImage;
        ctx.drawImage(img, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
        this.bullets.forEach( (y)=>{
            y.draw(ctx);
        } );
    },
    
    move: function(ctx) {
        let left   = -box.width/2 + this.w/2;
        let right  = box.width/2 - this.w/2;
        let top    = -box.height/2 + this.h/2;
        let bottom = box.height/2 - this.h/2;

        //control de gravedad
        if (this.mode==="blue"){
            this.vy += this.gravity;
        };
        //cuando esta saltando cuanto mas aprete mas salta hasta cierto punto
        if (this.mode==="blue" && this.jumping && this.jumpHoldTime < this.jumpHoldMax) {

            this.vy += this.jumpHoldForce;
            this.jumpHoldTime++;
        }
        //se aplica despues de la gravedad para que no siga volando
        this.x += this.vx;
        this.y += this.vy;

        if (this.x< left) this.x=left;
        if (this.x> right) this.x=right;
        if (this.y< top) this.y=top;
        if (this.y> bottom) {
            this.y=bottom;
            this.vy = 0;
            this.onGround = true;
            this.jumping = false;
            this.jumpHoldTime = 0;
        } else {
            this.onGround = false;
        }
        this.bullets.forEach( (y)=>{
            y.move(ctx);
            
        } );

        
    },
    fire: function() {

        let b=new whiteBone(this.x, this.y, 1, -3); //(x,x,vx,vy);
        this.bullets.push(b);
    }
}
