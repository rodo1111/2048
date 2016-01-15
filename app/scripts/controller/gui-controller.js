/**
 * GUI Controller class.
 */
Game2024.Controller.GUIController = function(pBoardEl) {
	var gameController = new Game2024.Controller.GameController();
	var boardEl = pBoardEl;

	/**
	 * Initialize the game.
	 */ 
	var initGame = function() {
		gameController.init();
	}

	/**
	 * Paint the board according to the given object
	 */
	var paintBoard = function(board) {
		var tokens = board.getTokens();
		var actualTokenEl;

		for (var indexRow = 0; indexRow < tokens.length; indexRow++) {
			for (var indexColumn = 0; indexColumn < tokens[indexRow].length; indexColumn++) {
				actualTokenEl = $('.space-' + indexRow + '-' + indexColumn, boardEl)
					.attr('data-color', tokens[indexRow][indexColumn].getColor());

				// Check if the number is different than zero to paint it
				if (tokens[indexRow][indexColumn].getNumber() != 0) {
					actualTokenEl.text(tokens[indexRow][indexColumn].getNumber());
				}
			}
		}
	}

	this.init = function() {
		initGame();
		paintBoard(gameController.getBoard());
	}
	
}