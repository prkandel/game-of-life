var rows = 38;
var columns = 60;
var grid = new Grid(rows, columns);
grid.init();

$(document).ready(function(){
	var container = $('#container');
	createGrid(container, grid);
	$(".start-button").click(startEvent);
});

var intervalId;
var isStarted = false;
var startEvent = function(event){
	if(!isStarted){
		$(".start-button").html("Stop");
		isStarted = true;
		intervalId = updateGame();
	}else{
		$(".start-button").html("Start");
		isStarted = false;
		clearInterval(intervalId);
	}
		
}

function updateGame(){
	return setInterval(function(){
		updateGrid(grid);
		updateGridView(container, grid);
	}, 50);
}
