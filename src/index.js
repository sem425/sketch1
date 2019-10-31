// Рай

function setup(p5) {
    p5.createCanvas(600, 600);
}

let angle = 1.0;
let r = 1.0;

function draw(p5) {
//    p5.background(0);
    p5.fill(255, 0, 0);
    p5.stroke(0, 255, 0);

    let x = 150 + r*p5.cos(2*angle);
    let y = 150 + r*p5.sin(3*angle);
    angle = angle + 0.1;
    r = r * 1.01;
    
    p5.ellipse(x, y, 20, 20);
}

// Оставь надежду всяк сюда входящий
// Ад

import p5 from "p5";

const sketch = p5 => {
    p5.setup = () => {
	setup(p5);
    };
    
    p5.draw = () => {
	draw(p5);
    };
};

const P5 = new p5(sketch);
