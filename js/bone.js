import {audioBattle,audioBone,audioDamage,spazioBack,soulImage,boneImage,background} from "./assets.js";
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
    x; y; vy; vx; w; h;
    constructor(x, y, vx, vy) {
        this.w=16; this.h=50;
        this.x=x; this.y=y;
        this.vx=vx; this.vy=vy;
    }
    draw(ctx) {
        ctx.drawImage(boneImage, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
    }
    move() {
        this.x += this.vx;
        this.y += this.vy;
        let left   = -canvas.width/2 + this.w/2;
        let right  = canvas.width/2 - this.w/2;
        let top    = -canvas.height/2 + this.h/2;
        let bottom = canvas.height/2 - this.h/2;

        if (this.x< left) this.x=left;
        if (this.x> right) this.x=right;
        if (this.y< top) this.y=top;
        if (this.y> bottom) this.y=bottom;
        
        //collisione per sparire ora per sparire
    }
}

export const bone={
    x:0, y:0, w:30, h:100, 
    vx:0, vy:0,
    draw: function(ctx) {
        ctx.drawImage(boneImage, this.x - this.w/2, this.y - this.h/2, this.w, this.h)


    },


}