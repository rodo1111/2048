/**
 * GUI Controller class.
 */
Game2024.Controller.GUIController = function(pBoardEl) {
	var boardEl = pBoardEl;

	/**
	 * Paint the board according to the given object
	 */
	this.paintBoard = function(board) {
		var tokens = board.getTokens();

		for (var indexRow = 0; indexRow < tokens.length; indexRow++) {
			for (var indexColumn = 0; indexColumn < tokens[indexRow].length; indexColumn++) {
				$('.space-' + indexRow + '-' + indexColumn, boardEl)
					.attr('data-color', tokens[indexRow][indexColumn].getColor())
					.text(tokens[indexRow][indexColumn].getNumber());
			}
		}
	}
}