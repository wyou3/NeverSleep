var robot = require("robotjs");
var schedule = require("node-schedule");

var moveLeft = true;

schedule.scheduleJob('*/1 * * * * *', function(){
	var mouse = robot.getMousePos();
	
	if(moveLeft){
		robot.moveMouse(mouse.x-1, mouse.y);	
		moveLeft = !moveLeft;
	}else{
		robot.moveMouse(mouse.x+1, mouse.y);
		moveLeft = !moveLeft;
	}
})