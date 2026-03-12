export const box = {
    x: 500,
    y: 600,
    width: 300,
    height: 300,
    angle: 0,
    draw: function(ctx){
        ctx.strokeStyle = "white";
        ctx.lineWidth = 10;
        ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height);
    }
    };