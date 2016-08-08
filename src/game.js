import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import settings from './settings';
import ScoreBoard from './ScoreBoard';
const gap = settings.gap;
var p1Keys = settings.p1Keys;
var p2Keys = settings.p2Keys;
var p1Score = settings.p1Score;
var p2Score = settings.p2Score;

export default class Game {
	constructor() {
		const canvas = document.getElementById('game');
		 this.width = canvas.width;
		 this.height = canvas.height;
		 this.context = canvas.getContext('2d');
		 this.context.fillStyle = 'white';
		 this.board = new Board(this.width, this.height);
		 this.score1 = new ScoreBoard(...settings.p1Score);
		 this.score2 = new ScoreBoard(...settings.p2Score);
		 this.player1 = new Paddle(this.height, settings.gap, settings.p1Keys, this.score1);
		 this.player2 = new Paddle(this.height, this.width - 4 - settings.gap, settings.p2Keys, this.score2);
		 this.ball = new Ball(this.width, this.height);
		 // this.ball1 = new Ball ();

		 console.log(this.player1, this.player2)
	 }
	 draw()  {
		   this.ball.draw(this.context);

	 }
	 render() {
			this.board.render(this.context);
			this.player1.render(this.context);
      this.player2.render(this.context);
			this.score1.render(this.context);
			this.score2.render(this.context);
			this.ball.render(this.context,this.player1,this.player2);
   }

}
