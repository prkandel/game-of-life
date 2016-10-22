var createGrid = function(container, grid){
	var rows = grid.getCells().length;
	var columns = grid.getCells()[0].length;
	for(var i=0; i<rows; i++){
		for(var j=0; j<columns; j++){
			var $cell = $( "<div class='cell'></div>" ).attr("id", "row"+i+"column"+j).attr("data-row",i).attr("data-column",j);
			$cell.css( { left: j*$(".cell").width(), top: i*$(".cell").height() } );
			container.append($cell);
		}
	}
}