export function introdrawHP(ctx,soul){
    const barWidth=300;
    const barHeight=40;
    const x=500;
    const y=850;

    ctx.fillStyle="red";
    ctx.fillRect(x-barWidth/2, y-barHeight/2, barWidth, barHeight);
    const hpPercent = soul.hp / soul.maxHp;

    ctx.fillStyle="yellow";
    ctx.fillRect(x-barWidth/2, y-barHeight/2, barWidth * hpPercent, barHeight);

    // texto
    ctx.fillStyle="red";
    ctx.font="32px monospace";
    ctx.fillText(`KR ${soul.hp}/${soul.maxHp}`, x+barWidth/2, y+barHeight/4);
}
export function drawHP(ctx,soul){
    const barWidth=300;
    const barHeight=40;
    const x=0;
    const y=250;

    ctx.fillStyle="red";
    ctx.fillRect(x-barWidth/2, y-barHeight/2, barWidth, barHeight);
    const hpPercent = soul.hp / soul.maxHp;

    ctx.fillStyle="yellow";
    ctx.fillRect(x-barWidth/2, y-barHeight/2, barWidth * hpPercent, barHeight);

    // texto
    ctx.fillStyle="red";
    ctx.font="32px monospace";
    ctx.fillText(`KR ${soul.hp}/${soul.maxHp}`, x+barWidth/2, y+barHeight/4);
}
