
var x;
var y;
function setup(){
	createCanvas(1880, 950);
	x=int(0);
	y=int(950);
	
}

function draw(){
	fill(x);
	ellipse(width/2,height/2,y,y);
	x++;
	y--;
	if(x==255)	x=int(0);
	//if(y==0)	y=int(950);
}


