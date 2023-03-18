// Acceleration Vector
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/T84AWnntxZA
// https://thecodingtrain.com/learning/nature-of-code/1.6-acceleration-vector.html
// https://editor.p5js.org/codingtrain/sketches/OjCfrdWX

const accleration = (sketch) => {
  // create var for instance
  let mover;

  sketch.setup = () => {
    sketch.createCanvas(600, 400);

    mover = new Mover(sketch, 200, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    mover.update();
    mover.show();
  };
};

// ------------------------------------------------------

class Mover {
  constructor(_sketch, x, y) {
    this.sketch = _sketch;
    // 1 create ellipse position-vector from origin
    this.pos = this.sketch.createVector(x, y);
    // 2 generate radom velocity-vector
    this.vel = p5.Vector.random2D();
    // 3 scale velocity-vector randomly
    this.vel.mult(this.sketch.random(3));
  }

  update() {
    // 4 get mouse position-vector from origin
    let mouse = this.sketch.createVector(
      this.sketch.mouseX,
      this.sketch.mouseY
    );
    // 5 calculate distance-vector b/w mouse and object (naming:accleration)
    this.acc = p5.Vector.sub(mouse, this.pos);
    // 6 perform normzlization and scale it
    this.acc.setMag(1);
    // 7 adding accleration-vector to velocity-vector
    this.vel.add(this.acc);
    // 8 limit velocity-vector to 5
    this.vel.limit(5);
    // 9 adding velocity-vector to position-vector
    this.pos.add(this.vel);
  }

  show() {
    this.sketch.stroke(255);
    this.sketch.strokeWeight(2);
    this.sketch.fill(255, 100);
    this.sketch.ellipse(this.pos.x, this.pos.y, 32);
  }
}

new p5(accleration, "container3");
