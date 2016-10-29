var rows = 28;
var columns = 50;
var grid = new Grid(rows, columns);
grid.init();

$(document).ready(function(){
	var container = $('#container');
	createGrid(container, grid);
	$(".start-button").click(startEvent);
});

var startEvent = function(event){
	setInterval(function(){
		updateGrid(grid);
		updateGridView(container, grid);
	}, 500);
}
