function Projectile(projectiletype,x,y){

	this.name = projectiletype.name;
	this.spriteList = new Array();
	this.attack = projectiletype.attack;
	this.spriteList.push(new Sprite(projectiletype.listImage));
	this.spriteList.push(new Sprite(effectList[this.name]));
	this.x = x;
	this.y = y;
	this.listX = projectiletype.listX;
	this.listY = projectiletype.listY;
	this.speed = projectiletype.speed;
	this.current = 0;
	
	this.move = function(){
		this.x-=this.speed;
	}
	
	this.switchAction = function(action){
		this.current = action;
	}
	
}