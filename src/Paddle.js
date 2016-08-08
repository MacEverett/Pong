export default class Paddle {
 constructor(height, x, controls) {
      this.width = 5;
      this.height = 30;
      this.x = x;
      this.y = (height / 2) - (this.height / 2);
      this.speed = 5;
      this.maxHeight = height;


      document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case controls.up:
        this.y = Math.max (
       0,
       this.y - this.speed);
  break;

    case controls.down:
    this.y = Math.min (
      this.maxHeight - this.height,
      this.y +  this.speed
    );
    break;
}
});

}
  render(ctx) { // What is ctx? Where does it come from?
      ctx.fillRect(
         this.x, this.y,
         this.width, this.height
      );
   }
};
