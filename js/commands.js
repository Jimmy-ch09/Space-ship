export function setInputs(soul, audioBone, Bullet, whiteBone){
    const SPEED = 6;
    let typeBullet = Bullet;
    let Smovimento = false;

    window.addEventListener("keydown", function(e) {
        switch (e.key) {
            case 'a':
            case 'ArrowLeft':
                soul.vx=-SPEED;
                Smovimento=true;
                break;
            case 'd':
            case 'ArrowRight':
                soul.vx=SPEED;
                Smovimento=true;
                break;
            case 'w':
            case 'ArrowUp':
                soul.vy=-SPEED;
                Smovimento=true;
                break;
            case 's':
            case 'ArrowDown':
                soul.vy=SPEED;
                Smovimento=true;
                break;
            case ' ':
                audioBone.play();
                soul.fire();
                break;
            case 'q':
                typeBullet=Bullet;
                break;
            case 'e':
                typeBullet=whiteBone;
                break;
        }
    });

    window.addEventListener("keyup", function(e) {
        switch (e.key) {
            case 'a':
            case 'ArrowLeft':
                if (soul.vx < 0) soul.vx = 0;
                Smovimento=false;
                break;
            case 'd':
            case 'ArrowRight':
                if (soul.vx > 0) soul.vx = 0;
                Smovimento=false;
                break;
            case 'w':
            case 'ArrowUp':
                if (soul.vy < 0) soul.vy = 0;
                Smovimento=false;
                break;
            case 's':
            case 'ArrowDown':
                if (soul.vy > 0) soul.vy = 0;
                Smovimento=false;
                break;
        }
    });
}



