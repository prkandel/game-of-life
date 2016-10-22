var parentWidth = 400;
var parentHeight = 400;
var childWidth = 20;

$(document).ready(function(){
	var parentDiv = $('#container');
	parentDiv.width(parentWidth + 'px');
	parentDiv.height(parentHeight + 'px');
	createGrid(parentDiv, childWidth);
	
});


function createGrid(parentDiv, childWidth){
	var rows = parentDiv.width()/childWidth;
	var columns = parentDiv.height()/childWidth;
	for(var i=0;i<parentDiv.width();i+=childWidth){
		for(var j=0;j<parentDiv.height();j+=childWidth){
			var $singleGrid = $( "<div class='grid'></div>" );
			$singleGrid.width(childWidth+'px');
			$singleGrid.height(childWidth+'px');
			$singleGrid.css( { left: j, top: i } );
			parentDiv.append($singleGrid);
		}
	}
}