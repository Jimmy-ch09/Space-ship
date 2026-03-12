
export function setInputs(soul, audioBone, Bullet, whiteBone,audioSoulmode,audioBlaster,audioHeal){
    const SPEED = 6;
    let typeBullet = Bullet;
    let Smovimento = false;

    window.addEventListener("keydown", function(e) {
        switch (e.key) {
            case 'a':
            case 'ArrowLeft':
                soul.vx=-SPEED;
                soul.state=true;
                break;
            case 'd':
            case 'ArrowRight':
                soul.vx=SPEED;
                soul.state=true;
                break;
            case 'w':
            case 'ArrowUp':
                if (soul.mode==="red")soul.vy=-SPEED;
                Smovimento=true;
                if (soul.mode === "blue" && soul.onGround){
                    soul.vy = soul.jumpPower;
                    soul.jumping = true;
                    soul.jumpHoldTime = 0;
                }
                break;
            case 's':
            case 'ArrowDown':
                soul.vy=SPEED;
                soul.state=true;
                break;
            case ' ':
                audioBone.play();
                audioBlaster.play();
                soul.fire();
                break;
            case 'q':
                //blue mode
                audioSoulmode.play();
                soul.mode="blue"
                typeBullet=Bullet;
                break;
            case 'e':
                //red mode
                audioSoulmode.play();
                soul.mode="red"
                soul.vy = 0;
                soul.onGround = true;
                soul.jumping = false;
                soul.jumpHoldTime = 0;

                typeBullet=whiteBone;
                break;
            case 'c':
                //blue mode
                if (soul.heal!=0){
                    audioHeal.play()
                    soul.hp+=92;
                    soul.heal-=1;
                    if(soul.hp>92)soul.hp=92;
                };
                break;
        }
    });

    window.addEventListener("keyup", function(e) {
        switch (e.key) {
            case 'a':
            case 'ArrowLeft':
                if (soul.vx < 0) soul.vx = 0;
                soul.state=false;
                break;
            case 'd':
            case 'ArrowRight':
                if (soul.vx > 0) soul.vx = 0;
                soul.state=false;
                break;
            case 'w':
            case 'ArrowUp':
                if (soul.vy < 0) soul.vy = 0;
                soul.state=false;
                soul.jumping = false;
                break;
            case 's':
            case 'ArrowDown':
                if (soul.vy > 0) soul.vy = 0;
                soul.state=false;
                break;
        }
    });
}



