import { soul } from "./soul.js";
import { collision } from "./colisiones.js";

export class Blaster {

    constructor(x, y, angle) {
        this.x=x; this.y=y;
        this.angle=angle;
        this.timer=0;
        this.w=120; this.h=120;
        this.blastW=40; this.blastH=300; 

        this.state="charging"; // estado de carga y/o  disparo
    }

    update() {
        this.timer++;
        if (this.timer>40){
            this.state="firing";
        }
        if (this.timer>80){
            this.dead=true; //
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // blaster
        ctx.fillStyle = "white";
        ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h);

        //láser
        if (this.state==="firing"){
            ctx.fillStyle="cyan";
            ctx.fillRect(-this.blastW/2,0, this.blastW, this.blastH);//da cambiare co un sprite/gif
            if (collision(this,soul)) {
                        let now=Date.now();
                        if (now-soul.timerHit>25){
                            soul.hp-=1;
                            soul.timerHit=now;
                            console.log(soul.hp,soul.timerHit);
                            let sound = audioDamage.cloneNode();
                            sound.play();
                            if (soul.hp==0) alert("Game over");
                        };                  
                    } ;
        }
        ctx.restore();
        }

}
