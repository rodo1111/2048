/**
 * GameController class.
 */
Game2024.Controller.GameController = function() {
	var board;

	/**
	 * Function to initialize the board.
	 */ 
	var initializeBoard = function() {
		var tokens = generateBoardTokens();

		board = new Game2024.Model.Board(tokens);
	}

	/**
	 * Generate the tokens of the board.
	 */
	var generateBoardTokens = function() {
		var tokens = [[], [], [], []];
		var randomInitialTokenPosition;

		for (var indexRow = 0; indexRow < tokens.length; indexRow++) {
			for (var indexColumn = 0; indexColumn < 4; indexColumn++) {
				tokens[indexRow][indexColumn] = new Game2024.Model.Token(0, Game2024.Model.COLORS.GRAY);
			}
		}

		// Generate the random position of the first token
		randomInitialTokenPosition = generateRandomInitialTokenPosition(tokens);
		tokens[randomInitialTokenPosition[0]][randomInitialTokenPosition[1]].setNumber(2);

		return tokens;
	}

	/**
	 * Generate the random initial token position.
	 */
	var generateRandomInitialTokenPosition = function(tokens) {
		var randomRow = Math.floor((Math.random() * tokens.length));
		var randomColumn = Math.floor((Math.random() * tokens.length));

		return [randomRow, randomColumn];
	}

	/**
	 * Print the board.
	 */
	var printBoard = function() {
		var tokens = board.getTokens();

		for (var indexRow = 0; indexRow < tokens.length; indexRow++) {
			var strRow = '';

			for (var indexColumn = 0; indexColumn < tokens[indexRow].length; indexColumn++) {
				strRow += tokens[indexRow][indexColumn].getNumber() + ', ';
			}

			console.log(strRow);
		}
	}

	this.init = function() {
		initializeBoard();
		printBoard();
	}
}

var gameController = new Game2024.Controller.GameController();
gameController.init();