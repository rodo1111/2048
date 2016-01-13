/**
 * GameController class.
 */
Game2024.Controller.GameController = function(boardEl) {
	var guiController = new Game2024.Controller.GUIController(boardEl);
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
		var actualToken;

		for (var indexRow = 0; indexRow < tokens.length; indexRow++) {
			for (var indexColumn = 0; indexColumn < 4; indexColumn++) {
				tokens[indexRow][indexColumn] = new Game2024.Model.Token(0, Game2024.Model.COLORS['0']);
			}
		}

		// Generate the random position of the first token
		randomInitialTokenPosition = generateRandomInitialTokenPosition(tokens);
		actualToken = tokens[randomInitialTokenPosition[0]][randomInitialTokenPosition[1]];

		// Set the token information
		actualToken.setNumber(2);
		actualToken.setColor(Game2024.Model.COLORS['2']);

		return tokens;
	}

	/**
	 * Generate the random initial token position.
	 * 
	 * @param tokens List of tokens of the board
	 */
	var generateRandomInitialTokenPosition = function(tokens) {
		var randomRow = Math.floor((Math.random() * tokens.length));
		var randomColumn = Math.floor((Math.random() * tokens.length));

		return [randomRow, randomColumn];
	}

	/**
	 * Process the addition fo the tokens according to the given direction.
	 *
	 * @param direction Direction given by the user interaction
	 */ 
	var processBoardInteraction = function(direction) {

	}

	/**
	 * Print the board.
	 */
	var printBoard = function() {
		guiController.paintBoard(board);
	}

	this.init = function() {
		initializeBoard();
		printBoard();
	}
}
