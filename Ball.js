class Ball{
	constructor(x, y, d){
		this.x = x;
		this.y = y;
		this.d = d;
		this.speed = 10;
		this.dirX = this.direction();
		this.dirY = this.direction();
		this.array;
		this.index;
	}

	draw(){
		push();
		noStroke();
		fill("blue");
		ellipse(this.x, this.y, this.d);
		this.ballMove();
	}

	direction(){
		return(floor(random(2)) * 2 - 1);
	}

	ballColision(){
		for(let i=0; i<this.array.length; i++)
		{
			if(i!=this.indice)
			{
				var dX = this.x - this.array[i].x;
                var dY = this.y - this.array[i].y;
                var distance = Math.sqrt(dX * dX + dY * dY);

                if (distance < floor(this.d/2) + floor(this.d/2)) {
                    
                	this.array[i].dirX=-this.array[i].dirX;
                    this.array[i].dirY=-this.array[i].dirY;

                    this.dirX=-this.dirX;
                    this.dirY=-this.dirY;
                }
			}
		}
	}

	ballMove(){
		 if(this.x+floor(this.d/2)+this.dirX+this.speed>=width || this.x-floor(this.d/2)+this.dirX-this.speed<=0){
		 	this.dirX=-this.dirX;
		 } 
        if(this.y+floor(this.d/2)+this.dirY+this.speed>=height || this.y-floor(this.d/2)+this.dirY-this.speed<=0){
        	this.dirY=-this.dirY;
        }
        if(this.dirX==-1)
        {
            this.x+=this.dirX-this.speed;
        }
        else{
            this.x+= this.speed +this.dirX;
        }
        if(this.dirY==-1){
            this.y+=this.dirY-this.speed;
        }else       
            this.y+=this.speed+this.dirY;
	}
}