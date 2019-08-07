
function setup(){
	createCanvas(1880, 950);
	int x=0;
	int y=0;
}

function draw(){

	fill(color(x));
	ellipse(width/2,height/2,y,y):
	x++;
	y++;
	if(x==255)	x=0;
	if(y==height)	y=0;
}