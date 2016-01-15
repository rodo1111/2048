/**
 * GameController class.
 */
Game2024.Controller.GameController = function(boardEl) {
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
				tokens[indexRow][indexColumn] = Game2024.Handler.TokenHandler.generateNewEmptyToken();
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
	 * @param board Actual board to make the interaction
	 */ 
	this.processBoardInteraction = function(direction, board) {
		var tokens = board.getTokens();
		var actualTokenNumber;
		var nextTokenNumber;
		var actualAddToken;
		var nextEmtpyTokenPosition = -1;

		switch (direction) {
			case Game2024.Model.INTERACTION_DIRECTIONS.TO_RIGHT:
				// Go throught all the rows
				for (var indexRow = 0; indexRow < tokens.length; indexRow++) {
					nextEmtpyTokenPosition = -1;
					actualAddToken = null;

					// Go through all the columns to add token if needed
					for (var indexColumn = tokens[indexRow].length - 1; indexColumn >= 0; indexColumn--) {
						// Check if the token is valid
						if (tokens[indexRow][indexColumn]) {
							actualTokenNumber = tokens[indexRow][indexColumn].getNumber();

							// Check if the token is not empty
							if (actualTokenNumber !== 0) {
								// Check if no add token is stored
								if (actualAddToken) {
									// Check if the numbers are the same to add them
									if (actualTokenNumber === actualAddToken.getNumber()) {
										actualAddToken.setNumber(actualTokenNumber + actualAddToken.getNumber());
										actualAddToken = null;
										tokens[indexRow][indexColumn].setNumber(0);
									} else {
										actualAddToken = tokens[indexRow][indexColumn];
									}
								} else {
									actualAddToken = tokens[indexRow][indexColumn];
								}
							}
						}
					}

					// Go through all the columns to move them to the proper position
					for (var indexColumn = tokens[indexRow].length - 1; indexColumn >= 0; indexColumn--) {
						// Check if the column is empty
						if (tokens[indexRow][indexColumn].getNumber() === 0) {
							// Check if there's already an available position
							if (nextEmtpyTokenPosition === -1) {
								nextEmtpyTokenPosition = indexColumn;
							}
						} else {
							// Check if the token is not the last available position
							if (nextEmtpyTokenPosition !== -1) {
								// Move the non-empty token to the next available space
								tokens[indexRow][nextEmtpyTokenPosition].setNumber(tokens[indexRow][indexColumn].getNumber());

								// Reset the moved token
								tokens[indexRow][indexColumn] = 
									Game2024.Handler.TokenHandler.resetToken(tokens[indexRow][indexColumn]);

								nextEmtpyTokenPosition = indexColumn;
							}
						}
					}
				}

				break;
			case Game2024.Model.INTERACTION_DIRECTIONS.TO_DOWN:
				// Go throught all the columns
				for (var indexColumn = 0; indexColumn < tokens[0].length; indexColumn++) {
					nextEmtpyTokenPosition = -1;
					actualAddToken = null;

					// Go through all the rows to add token if needed
					for (var indexRow = tokens.length - 1; indexRow >= 0; indexRow--) {
						// Check if the token is valid
						if (tokens[indexRow][indexColumn]) {
							actualTokenNumber = tokens[indexRow][indexColumn].getNumber();

							// Check if the token is not empty
							if (actualTokenNumber !== 0) {
								// Check if no add token is stored
								if (actualAddToken) {
									// Check if the numbers are the same to add them
									if (actualTokenNumber === actualAddToken.getNumber()) {
										actualAddToken.setNumber(actualTokenNumber + actualAddToken.getNumber());
										actualAddToken = null;
										tokens[indexRow][indexColumn].setNumber(0);
									} else {
										actualAddToken = tokens[indexRow][indexColumn];
									}
								} else {
									actualAddToken = tokens[indexRow][indexColumn];
								}
							}
						}
					}

					// Go through all the columns to move them to the proper position
					for (var indexRow = tokens.length - 1; indexRow >= 0; indexRow--) {
						// Check if the column is empty
						if (tokens[indexRow][indexColumn].getNumber() === 0) {
							// Check if there's already an available position
							if (nextEmtpyTokenPosition === -1) {
								nextEmtpyTokenPosition = indexRow;
							}
						} else {
							// Check if the token is not the last available position
							if (nextEmtpyTokenPosition !== -1) {
								// Move the non-empty token to the next available space
								tokens[nextEmtpyTokenPosition][indexColumn].setNumber(tokens[indexRow][indexColumn].getNumber());

								// Reset the moved token
								tokens[indexRow][indexColumn] = 
									Game2024.Handler.TokenHandler.resetToken(tokens[indexRow][indexColumn]);

								nextEmtpyTokenPosition = indexRow;
							}
						}
					}
				}

				break;
			case Game2024.Model.INTERACTION_DIRECTIONS.TO_LEFT:
				// Go throught all the rows
				for (var indexRow = 0; indexRow < tokens.length; indexRow++) {
					nextEmtpyTokenPosition = -1;
					actualAddToken = null;

					// Go through all the columns to add token if needed
					for (var indexColumn = 0; indexColumn < tokens[indexRow].length; indexColumn++) {
						// Check if the token is valid
						if (tokens[indexRow][indexColumn]) {
							actualTokenNumber = tokens[indexRow][indexColumn].getNumber();

							// Check if the token is not empty
							if (actualTokenNumber !== 0) {
								// Check if no add token is stored
								if (actualAddToken) {
									// Check if the numbers are the same to add them
									if (actualTokenNumber === actualAddToken.getNumber()) {
										actualAddToken.setNumber(actualTokenNumber + actualAddToken.getNumber());
										actualAddToken = null;
										tokens[indexRow][indexColumn].setNumber(0);
									} else {
										actualAddToken = tokens[indexRow][indexColumn];
									}
								} else {
									actualAddToken = tokens[indexRow][indexColumn];
								}
							}
						}
					}

					// Go through all the columns to move them to the proper position
					for (var indexColumn = 0; indexColumn < tokens[indexRow].length; indexColumn++) {
						// Check if the column is empty
						if (tokens[indexRow][indexColumn].getNumber() === 0) {
							// Check if there's already an available position
							if (nextEmtpyTokenPosition === -1) {
								nextEmtpyTokenPosition = indexColumn;
							}
						} else {
							// Check if the token is not the last available position
							if (nextEmtpyTokenPosition !== -1) {
								// Move the non-empty token to the next available space
								tokens[indexRow][nextEmtpyTokenPosition].setNumber(tokens[indexRow][indexColumn].getNumber());

								// Reset the moved token
								tokens[indexRow][indexColumn] = 
									Game2024.Handler.TokenHandler.resetToken(tokens[indexRow][indexColumn]);

								nextEmtpyTokenPosition = indexColumn;
							}
						}
					}
				}

				break;
			case Game2024.Model.INTERACTION_DIRECTIONS.TO_UP:
				// Go throught all the columns
				for (var indexColumn = 0; indexColumn < tokens[0].length; indexColumn++) {
					nextEmtpyTokenPosition = -1;
					actualAddToken = null;

					// Go through all the rows to add token if needed
					for (var indexRow = 0; indexRow < tokens.length; indexRow++) {
						// Check if the token is valid
						if (tokens[indexRow][indexColumn]) {
							actualTokenNumber = tokens[indexRow][indexColumn].getNumber();

							// Check if the token is not empty
							if (actualTokenNumber !== 0) {
								// Check if no add token is stored
								if (actualAddToken) {
									// Check if the numbers are the same to add them
									if (actualTokenNumber === actualAddToken.getNumber()) {
										actualAddToken.setNumber(actualTokenNumber + actualAddToken.getNumber());
										actualAddToken = null;
										tokens[indexRow][indexColumn].setNumber(0);
									} else {
										actualAddToken = tokens[indexRow][indexColumn];
									}
								} else {
									actualAddToken = tokens[indexRow][indexColumn];
								}
							}
						}
					}

					// Go through all the columns to move them to the proper position
					for (var indexRow = 0; indexRow < tokens.length; indexRow++) {
						// Check if the column is empty
						if (tokens[indexRow][indexColumn].getNumber() === 0) {
							// Check if there's already an available position
							if (nextEmtpyTokenPosition === -1) {
								nextEmtpyTokenPosition = indexRow;
							}
						} else {
							// Check if the token is not the last available position
							if (nextEmtpyTokenPosition !== -1) {
								// Move the non-empty token to the next available space
								tokens[nextEmtpyTokenPosition][indexColumn].setNumber(tokens[indexRow][indexColumn].getNumber());

								// Reset the moved token
								tokens[indexRow][indexColumn] = 
									Game2024.Handler.TokenHandler.resetToken(tokens[indexRow][indexColumn]);

								nextEmtpyTokenPosition = indexRow;
							}
						}
					}
				}

				break;
		}
	}

	/**
	 * Print the board.
	 */
	var printBoard = function() {
		// guiController.paintBoard(board);
	}

	this.init = function() {
		initializeBoard();
		printBoard();
	}
}
