var createGrid = function(container, grid){
	var rows = grid.getCells().length;
	var columns = grid.getCells()[0].length;
	for(var i=0; i<rows; i++){
		for(var j=0; j<columns; j++){
			var divid = "row"+i+"column"+j;
			var $cell = $( "<div class='cell'></div>" ).attr("id", divid).attr("data-row",i).attr("data-column",j);
			$cell.css( { left: j*$(".cell").width(), top: i*$(".cell").height() } );
			$cell.click(updateCell(grid, i, j));
			container.append($cell);
		}
	}
}

function updateCell(grid,row, column){
	return function(){
		var divid = "#row"+row+"column"+column;
		if(grid.getCells()[row][column] == "dead"){
			grid.getCells()[row][column] = "alive";
			$(divid).addClass("alive");
		}else{
			grid.getCells()[row][column] = "dead";
			$(divid).removeClass("alive");
		}
	}
}
