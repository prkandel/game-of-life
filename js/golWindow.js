var createGrid = function(container, grid){
	var rows = grid.getCells().length;
	var columns = grid.getCells()[0].length;
	for(var i=0; i<rows; i++){
		for(var j=0; j<columns; j++){
			var divid = "row"+i+"column"+j;
			var $cell = $( "<div class='cell'></div>" ).attr("id", divid).attr("data-row",i).attr("data-column",j);
			$cell.css( { left: j*$(".cell").width(), top: i*$(".cell").height() } );
			if(grid.getCells()[i][j] == "alive"){
				$cell.addClass("alive");
			}
			$cell.click(toggleCellView(grid, i, j));
			container.append($cell);
		}
	}
	
	var $startButton = $( "<div class = 'btn'><button class = 'start-button'>Start</button></div>" );
	$startButton.insertAfter(".container");
}

function toggleCellView(grid,row, column){
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

function updateGridView(container, grid){
	for(var i = 0; i< grid.getCells().length; i++){
		for(var j=0; j< grid.getCells()[i].length; j++){
			var divId = "row"+i+"column"+j;
			var $cell = $("#"+divId);
			if(grid.getCells()[i][j] == "alive"){
				$cell.addClass("alive");
			}else{
				$cell.removeClass("alive");
			}
		}
	}
}