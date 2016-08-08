import './game.css';
import Game from './game.js';
import Paddle from './Paddle.js'


var game = new Game();
const fps = 30;
function gameLoop() {
	setTimeout(gameLoop, fps);
	 game.render();
}
gameLoop();
