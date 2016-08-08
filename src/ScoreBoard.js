
export default class ScoreBoard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.score = 0;
    }

    render(ctx) {
        ctx.fillStyle = 'white';
        ctx.font = "25px sans-serif";
        ctx.fillText(this.score, this.x, this.y);
    }

}
