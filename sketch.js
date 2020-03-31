let ball;
let arrayBalls = new Array();

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	clear();
	if(arrayBalls!=null)
	{
		for(let i=0;i<arrayBalls.length;i++)
		{
			arrayBalls[i].draw();
			arrayBalls[i].ballColision();
		}
	}
}

function mouseClicked() {
	ball = new Ball(mouseX, mouseY, 60); //Pinta la bola
	arrayBalls.push(ball);
	for (let i = 0; i < arrayBalls.length; i++) {
		arrayBalls[i].index=i;
		arrayBalls[i].array=arrayBalls;
	}
}

function Ballmove(){

}