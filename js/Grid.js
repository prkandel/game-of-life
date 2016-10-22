var Grid = function(rows, columns){
	var cells = [];
	var that = this;

	this.getCells = function(){
		return cells;
	}

	this.setCells = function(grids){
		cells = grids;
	}

	this.init = function(){
		initializeCells(rows, columns);
	}
	var initializeCells = function(rows, columns){
		var cells = [];
		for(var i=0; i<rows; i++){
			var gridRow = [];
			for(var j=0; j<columns; j++){
				gridRow.push("dead");
			}
			cells.push(gridRow);
		}
		that.setCells(cells);
	}
}