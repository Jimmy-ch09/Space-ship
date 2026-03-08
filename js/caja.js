export const box = {
    x: 400,
    y: 400,
    width: 400,
    height: 400,
    angle: 0,
    draw: function(ctx){
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 4;
        ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height);
    }
    };