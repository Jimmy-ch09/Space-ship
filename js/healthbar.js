
export function introdrawHP(ctx,soul,currentTime,fight, act, item, mercy){
    const barWidth=300;
    const barHeight=40;
    const x=500;
    const y=850;

    ctx.fillStyle="red";
    ctx.fillRect(x-barWidth/2, y-barHeight/2, barWidth, barHeight);
    const hpPercent = soul.hp / soul.maxHp;

    ctx.fillStyle="yellow";
    ctx.fillRect(x-barWidth/2, y-barHeight/2, barWidth * hpPercent, barHeight);

    if (currentTime>5.8){
        ctx.fillStyle="white";
        ctx.font="40px monospace";
        ctx.fillText("CHARA", x-500, y+barHeight/4);

        ctx.fillStyle="white";
        ctx.fillText("LV 19", x-355, y+barHeight/4);
        if (currentTime>6.3){
            ctx.fillStyle="white";
            ctx.font="40px monospace";
            ctx.fillText(` ${soul.hp}/${soul.maxHp}`, x+barWidth/2+35, y+barHeight/4);

        }
        if (currentTime>7.8){
            ctx.drawImage(fight, 0, y+50, 200, 80);
            ctx.drawImage(act,   240, y+50, 200, 74);
            ctx.drawImage(item,  470, y+50, 200, 76);
            ctx.drawImage(mercy, 690, y+50, 200, 74);
        }
    }

    ctx.fillStyle="white";
    ctx.font="35px monospace";
    ctx.fillText("HP", x-200, y+barHeight/4);

    ctx.fillStyle="white";
    ctx.font="35px monospace";
    ctx.fillText("KR", x+barWidth/2, y+barHeight/4);

    // texto
}
export function drawHP(ctx,soul,fight, act, item, mercy){
    const barWidth=300;
    const barHeight=40;
    const x=0;
    const y=250;
    // texto

    ctx.fillStyle="red";
    ctx.fillRect(x-barWidth/2, y-barHeight/2, barWidth, barHeight);
    const hpPercent = soul.hp / soul.maxHp;

    ctx.fillStyle="yellow";
    ctx.fillRect(x-barWidth/2, y-barHeight/2, barWidth * hpPercent, barHeight);

    ctx.fillStyle="white";
    ctx.font="40px monospace";
    ctx.fillText("CHARA", x-500, y+barHeight/4);

    ctx.fillStyle="white";
    ctx.fillText("LV 19", x-355, y+barHeight/4);

    ctx.fillStyle="white";
    ctx.font="35px monospace";
    ctx.fillText("HP", x-200, y+barHeight/4);

    ctx.fillStyle="white";
    ctx.font="35px monospace";
    ctx.fillText("KR", x+barWidth/2, y+barHeight/4);

    // texto
    ctx.fillStyle="white";
    ctx.font="40px monospace";
    ctx.fillText(` ${soul.hp}/${soul.maxHp}`, x+barWidth/2+35, y+barHeight/4);

    ctx.drawImage(fight, -500, y+50, 200, 80);
    ctx.drawImage(act,   -260, y+50, 200, 74);
    ctx.drawImage(item,  -30, y+50, 200, 76);
    ctx.drawImage(mercy, 190, y+50, 200, 74);

}
