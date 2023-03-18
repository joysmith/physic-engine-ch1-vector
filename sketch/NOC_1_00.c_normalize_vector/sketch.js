// Unit Vector (Normalize)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/ttz05d8DSOs
// https://thecodingtrain.com/learning/nature-of-code/1.2-vector-math.html
// https://editor.p5js.org/codingtrain/sketches/U4ezFLIZ

const normalizeVector = (sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(600, 400);
  };

  sketch.draw = () => {
    // set bg layer to black
    sketch.background(0);
    //1 create position vector from origin
    let pos = sketch.createVector(200, 200);
    //2 create mouse vector from origin
    let mouse = sketch.createVector(sketch.mouseX, sketch.mouseY);
    //3 perform subtraction and get distance vector
    let v = p5.Vector.sub(mouse, pos);
    //4 normalization
    v.normalize();
    //5 scaling
    v.mult(50);
    //6 move coordinate space to center
    sketch.translate(sketch.width / 2, sketch.height / 2);

    sketch.strokeWeight(4);
    sketch.stroke(255);
    sketch.line(0, 0, v.x, v.y);
  };
};

new p5(normalizeVector, "container2");
