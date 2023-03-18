// Random Vector
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html

// Random Vector: https://editor.p5js.org/codingtrain/sketches/qHKMdpRR
// Walker: https://editor.p5js.org/codingtrain/sketches/_HHLfcGx

const randomVector = (sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(600, 400);
    sketch.background(0);
  };

  sketch.draw = () => {
    // translate coordinte space to center of canvas
    sketch.translate(sketch.width / 2, sketch.height / 2);

    // generate position-unit-vector using p5.Vector for any direction use random2D static function
    v = p5.Vector.random2D();

    // vector multiplication on position-vector
    v.mult(sketch.random(50, 100));

    sketch.strokeWeight(4);
    sketch.stroke(255, 50);

    // center to outward
    sketch.line(0, 0, v.x, v.y);
  };
};

new p5(randomVector, "container1");
