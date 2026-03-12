import {audioBattle,audioBone,audioDamage,spazioBack,soulImage,boneImage, blueboneImage,background} from "./assets.js";
import { collision } from "./colisiones.js";
import { box } from "./caja.js";
import { soul } from "./soul.js";
export class Bullet {
    x; y; vy; vx; w; h;
    constructor(x, y, vx, vy) {
        this.w=4; this.h=15;
        this.x=x; this.y=y;
        this.vx=vx; this.vy=vy;
    }
    draw(ctx) {
        ctx.fillStyle = 'rgb(150, 207, 216)';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    move() {
        this.x += this.vx;
        this.y += this.vy;
    }
}
//da separare
export class whiteBone {
    x; y; vy; vx; w; h; hmax;
    constructor(x, y, vx, vy, h,hmax) {
        this.w=20; this.h=h;
        this.x=x; this.y=y;
        this.vx=vx; this.vy=vy;
        this.hmax=hmax;
    }
    draw(ctx) {
        if (this.h<this.hmax)this.h+=2;
        ctx.drawImage(boneImage, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
    }
    move() {
        this.x += this.vx;
        this.y += this.vy;
        let left   = -box.width/2 + this.w/2;
        let right  = box.width/2 - this.w/2;
        let top    = -box.height/2 + this.h/2;
        let bottom = box.height/2 - this.h/2;

        //if (this.x< left) this.x=left;
        //if (this.x> right) this.x=right;
        if (this.y< top) this.y=top;
        if (this.y> bottom) this.y=bottom;
        if (collision(this,soul)) {
            let now=Date.now();
            if (now-soul.timerHit>50){
                soul.hp-=1;
                soul.timerHit=now;
                console.log(soul.hp,soul.timerHit);
                let sound = audioDamage.cloneNode();
                sound.play();
                if (soul.hp==0) alert("Game over");
            };                  

        } ;
        
        //collisione per sparire ora per sparire
    }
}

export class blueBone {
    x; y; vy; vx; w; h;hmax;
    constructor(x, y, vx, vy,h,hmax) {
        this.w=20; this.h=h;
        this.x=x; this.y=y;
        this.vx=vx; this.vy=vy;
        this.hmax=hmax
    }
    draw(ctx) {
        if (this.h<this.hmax)this.h+=2;
        ctx.drawImage(blueboneImage, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
    }
    move() {
        this.x += this.vx;
        this.y += this.vy;
        let left   = -box.width/2 + this.w/2;
        let right  = box.width/2 - this.w/2;
        let top    = -box.height/2 + this.h/2;
        let bottom = box.height/2 - this.h/2;

        //if (this.x< left) this.x=left;
        //if (this.x> right) this.x=right;
        if (this.y< top) this.y=top;
        if (this.y> bottom) this.y=bottom;
        if (collision(this,soul)) {
            let now=Date.now();
            if (now-soul.timerHit>10 && soul.state==true){
                soul.hp-=1;
                soul.timerHit=now;
                console.log(soul.hp,soul.timerHit);
                let sound = audioDamage.cloneNode();
                sound.play();
                if (soul.hp==0) alert("Game over");
            };                  

        } ;
        
        //collisione per sparire ora per sparire
    }
}
