var rows = 20;
var columns = 20;
var grid = new Grid(rows, columns);
grid.init();

$(document).ready(function(){
	var container = $('#container');
	createGrid(container, grid);
	setInterval(function(){
		updateGrid(grid);
		updateGridView(container, grid);
	}, 3000);
});
