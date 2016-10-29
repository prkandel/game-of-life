function findNumberOfAliveAndDeadNeighbour(cells, rowIndex, columnIndex){
	var aliveCount = 0;
	var deadCount = 0;
	for(var i = rowIndex-1; i<=rowIndex+1; i++){
		for(var j = columnIndex-1; j <= columnIndex+1; j++ ){
			if(i>=0 && i<cells.length && j>=0 && j<cells[rowIndex].length && !(i==rowIndex && j==columnIndex)){
				if(cells[i][j] == "alive")
					aliveCount ++;
				else
					deadCount++;
			}
		}
	}
	return {
		"aliveCount" : aliveCount,
		"deadCount" : deadCount
	}
}

function findAliveOrDeadInNextGeneration(cells, rowIndex, columnIndex){
	var currentElement = cells[rowIndex][columnIndex];
	var neighbourCount = findNumberOfAliveAndDeadNeighbour(cells, rowIndex, columnIndex);
	if(currentElement == "alive"){
		if(neighbourCount.aliveCount < 2){
			currentElement = "dead";
		}else if(neighbourCount.aliveCount == 2 || neighbourCount.aliveCount == 3){
			currentElement = "alive";
		}else{
			currentElement = "dead";
		}
	}else{
		if(neighbourCount.aliveCount == 3){
			currentElement = "alive"
		}
	}
	return currentElement;
}

function updateGrid(grid){
	var temp = [];
	for(var i = 0 ; i< grid.getCells().length; i++){
		var tempRow = [];
		for(var j = 0; j< grid.getCells()[i].length; j++){
			tempRow.push(findAliveOrDeadInNextGeneration(grid.getCells(), i, j));
		}
		temp.push(tempRow);
	}
	grid.setCells(temp);
}