function setup() {
	// define artboard size
	createCanvas(500,550);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(89, 13, 14);

  //Shadow

	fill(0);
	ellipse(250, 515, 150, 40);

	//Bottom
	noStroke();
	fill(36, 155, 143);
	ellipse(230, 380, 196, 200);

	fill(167, 219, 214)
	ellipse(238, 385, 168, 176);


	//Body
	fill(89, 13, 14);
	ellipse(238, 292, 114, 94);

	fill(36, 155, 143);
	ellipse(240, 272, 116, 122);

	fill(167, 219, 214);
	ellipse(247, 273, 90, 102);

	fill(167, 219, 214);
	ellipse(187, 250, 9);

	fill(167, 219, 214);
	ellipse(194, 237, 9);

	fill(167, 219, 214);
	ellipse(203, 226, 9);

	//Head
	fill(89, 13, 14);
	ellipse(250, 198, 80, 70);

	fill(36, 155, 143);
	ellipse(250, 180, 84, 96);

	fill(167, 219, 214);
	ellipse(255, 185, 62, 76);

	fill(89, 13, 14);
	ellipse(238, 190, 18, 8);

	fill(89, 13, 14);
	ellipse(276, 190, 18, 8);

	fill(89, 13, 14);
	arc(256, 200, 30, 30, TWO_PI, PI);

	fill(164, 35, 42);
	arc(258, 204, 17, 17, TWO_PI, PI);

  fill(167, 219, 214);
	//rect(230, 106, 6, 40, 15);
	if(mouseY < 106){
    quad(230, mouseY, 236, mouseY, 236, 146, 230, 146);
  } else {
    quad(230, 106, 236, 106, 236, 146, 230, 146);
  }
	//quad(230, 146-mouseY, 236, 146-mouseY, 236, 146, 230, 146);

	fill(167, 219, 214);
	//rect(242, 114, 6, 25, 15);
	if(mouseY < 114){
    quad(242, mouseY+8, 248, mouseY+8, 248, 139, 242, 139);
  } else {
    quad(242, 114, 248, 114, 248, 139, 242, 139);
  }
	//quad(242, 139-mouseY, 248, 139-mouseY, 248, 139, 242, 139);

	fill(0);
  triangle(257, 154, 242, 180, 272, 180);

	fill(36, 155, 143);
  triangle(259, 163, 251, 178, 267, 178);

	//Umbrella
	strokeWeight(4);
	stroke(0, 0, 0);
	line(220, 160, 147, 57);

	noStroke();
	fill(255, 99);
  arc(190, 120, 150, 150, TWO_PI/2.5, PI+TWO_PI/2.5);

	fill(36, 155, 143);
	ellipse(147, 57, 12);
}
