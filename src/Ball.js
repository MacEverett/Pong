const wallSound = new Audio('../sounds/pong-01.wav');
const paddleSound = new Audio('../sounds/pong-03.wav');
const size = 5;
export default class Ball {
   constructor(width,height) {
      this.x = width/2; // random x
      this.y = height/2; // random y
      this.vy = Math.floor(Math.random() * 12 - 6);
      this.vx = (7 - Math.abs(this.vy));
      this.size = size;
      this.speed = 1000;
      this.maxHeight = height;
      this.direction = 55;
      this.width = width;
      this.height = height;
  }

  wallBounce(ctx){
    const hitRight = this.x >= this.width;
    const hitLeft = this.x + this.size <= 0;
    const hitTop = this.y + this.size <= 0;
    const hitBottom = this.y >= this.height;

    if (hitLeft || hitRight) {
        this.vx = -this.vx;
        wallSound.play();
 }  else if (hitBottom || hitTop) {
       this.vy = -this.vy;
       wallSound.play();}


}
   //if(this.y = this.maxHeight){
      //console.log('ouch');
      //this.vy >= -Math.floor(Math.random() * 12 - 6);
  //  }
  //  else if (this.y <= 0) {
    //  console.log('top ouch');
      //  this.vx >= -Math.floor(Math.random() * 12 - 6);
    //}

    paddleCollision(player1, player2) {
          if (this.vx > 0) {
          const inRightEnd = player2.x <= this.x + this.size &&
          player2.x > this.x - this.vx + this.size;
          if (inRightEnd) {
             const collisionDiff = this.x + this.size - player2.x;
             const k = collisionDiff / this.vx;
             const y = this.vy * k + (this.y - this.vy);
             const hitRightPaddle = y >= player2.y && y + this.size <=
             player2.y + player2.height;
          if (hitRightPaddle) {
                paddleSound.play();
                this.x = player2.x - this.size;
                this.y = Math.floor(this.y - this.vy + this.vy * k);
                this.vx = -this.vx;
             }
          }
       } else {
      const inLeftEnd = player1.x + player1.width >= this.x;
      if (inLeftEnd) {
         const collisionDiff = player1.x + player1.width - this.x;
         const k = collisionDiff / -this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitLeftPaddle = y >= player1.y && y + this.size <=
         player1.y + player1.height;
         if (hitLeftPaddle) {
            paddleSound.play();
            this.x = player1.x + player1.width;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
         }
      }
   }
}
    goal(ctx) {
      if (this.x >= this.width) {
        console.log('goallllll!')
        this.ballReset();
      } else if (this.x <= 0) {
        console.log ('goalllllll')
        this.ballReset()
      }
}
    ballReset(ctx) {
      this.x = this.width/2; // random x
      this.y = this.height/2; // random y
      this.vy = Math.floor(Math.random() * 12 - 6);
      this.vx = (7 - Math.abs(this.vy));
  }

    draw(ctx) {
		ctx.beginPath();
	  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.fill();
		ctx.closePath();
	}
    render(ctx, player1, player2) {
    this.draw(ctx);
    this.wallBounce(ctx);
    this.x += this.vx;
    this.y += this.vy;
    this.paddleCollision(player1, player2);
    this.goal(ctx);

} ;
}
