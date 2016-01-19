/**
 * AvailableTokenPosition class.
 */
Game2024.Model.AvailableTokenPosition = function(pRow, pColumn) {
	var row = pRow;
	var column = pColumn;

	this.getRow = function() {
		return row;
	};

	this.getColumn = function() {
		return column;
	};
};
