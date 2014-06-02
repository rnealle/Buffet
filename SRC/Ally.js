function Ally(data, x, y){
	
	this.name = data.name;
	this.x = x;
	this.y = y;
	this.gold = data.gold;
	this.range = data.range;
	this.attack = data.attack;
	this.health = data.health;
	this.aspeed = data.aspeed;
	this.currentAction = 0;
	this.listSprites = new Array();
	this.listSprites.push(new Sprite(data.listStand));
	this.listStandX = data.listStandX;
	this.listStandY = data.listStandY;
	this.listStandXDiff = data.listStandXDiff;
	this.listStandYDiff = data.listStandYDiff;
	this.listSprites.push(new Sprite(data.listAttack));
	this.listAttackX = data.listAttackX;
	this.listAttackY = data.listAttackY;
	this.listAttackXDiff = data.listAttackXDiff;
	this.listAttackYDiff = data.listAttackYDiff;
	this.listSprites.push(new Sprite(data.listDefeat));
	this.listDefeatX = data.listDefeatX;
	this.listDefeatY = data.listDefeatY;
	this.listDefeatXDiff = data.listDefeatXDiff;
	this.listDefeatYDiff = data.listDefeatYDiff;
	this.currentSprite = 0;
	
	this.switchAction = function(action){
		this.currentAction = action;
		this.currentSprite = action;
	}
	
}