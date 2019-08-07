int x=0;
int y=950;

function setup(){
	createCanvas(1880, 950);
	background(0);
}

function draw(){
	fill(x);
	ellipse(700,700,y,y):
	x++;
	y--;
	if(x==255)	x=0;
	if(y==0)	y=950;
}