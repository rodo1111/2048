/**
 * GUI Controller class.
 */
Game2024.Controller.GUIController = function(pDocument, pBoardEl) {
	var gameController = new Game2024.Controller.GameController();
	var document = pDocument;
	var boardEl = pBoardEl;

	/**
	 * Bind the interaction events to manage the user interactions.
	 */
	var bindInteractionEvents = function() {
		var preventKeysInteractions = function(e) {
			var keyCode = e.keyCode;
			
			// Check if the key code is valid
			if (keyCode == 0) {
				keyCode = e.charCode;
			}

			// Check if an arrow key was pressed
			if ($.inArray(keyCode, [37, 38, 39, 40]) !== -1) {
				e.preventDefault();
				return false;
			}
		};

		var handleInteractionEvent = function(e) {
			var handleGameMessage = function(messageType) {
				var modal = $('#game-result');
				var gameTypeMessage = 'lost';

				// Check the message type
				if (messageType === Game2024.Model.GAME_RESULTS.GAME_WIN) {
					gameTypeMessage = 'win';
				}

				// Show the win messages
				$('.modal-header .modal-title', modal)
					.addClass('hidden')
					.filter('h4[data-message="' + gameTypeMessage + '"]')
					.removeClass('hidden');

				$('.modal-body p', modal)
					.addClass('hidden')
					.filter('p[data-message="' + gameTypeMessage + '"]')
					.removeClass('hidden');

				modal.modal();
			};

			var keyCode = e.keyCode;
			var moveResult;
			
			// Check if the key code is valid
			if (keyCode == 0) {
				keyCode = e.charCode;
			}

			// Check the interaction to process
			switch (keyCode) {
				// Left arrow
				case 37: 
					moveResult = gameController.processMove(Game2024.Model.INTERACTION_DIRECTIONS.TO_LEFT, 
						gameController.getBoard());
					break;
				// Up arrow
				case 38: 
					moveResult = gameController.processMove(Game2024.Model.INTERACTION_DIRECTIONS.TO_UP, 
						gameController.getBoard());
					break;
				// Right arrow
				case 39: 
					moveResult = gameController.processMove(Game2024.Model.INTERACTION_DIRECTIONS.TO_RIGHT, 
						gameController.getBoard());
					break;
				// Down arrow
				case 40: 
					moveResult = gameController.processMove(Game2024.Model.INTERACTION_DIRECTIONS.TO_DOWN, 
						gameController.getBoard());
					break;
			}

			// Paint the board with the update values
			paintBoard(gameController.getBoard());

			// Paint the score
			paintScore(gameController.getScore());

			// Check if the game was a win
			if (moveResult === Game2024.Model.GAME_RESULTS.GAME_WIN || moveResult === Game2024.Model.GAME_RESULTS.GAME_OVER) {
				handleGameMessage(moveResult);
			}
		};

		var handleStartOverButtonEvent = function() {
			location.reload();
		};

		document.on('keydown', preventKeysInteractions);
		document.on('keyup', handleInteractionEvent);
		$('#game-result .btn-primary').on('click', handleStartOverButtonEvent);
	}

	/**
	 * Initialize the game.
	 */ 
	var initGame = function() {
		gameController.init();
	};

	/**
	 * Paint the board according to the given object
	 */
	var paintBoard = function(board) {
		var tokens = board.getTokens();
		var actualTokenEl;
		var actualTokenNumber;

		for (var indexRow = 0; indexRow < tokens.length; indexRow++) {
			for (var indexColumn = 0; indexColumn < tokens[indexRow].length; indexColumn++) {
				actualTokenNumber = tokens[indexRow][indexColumn].getNumber();
				actualTokenEl = $('.space-' + indexRow + '-' + indexColumn, boardEl)
					.attr('data-color', Game2024.Handler.ColorHandler.getColorForNumber(actualTokenNumber));

				// Check if the number is different than zero to paint it
				if (actualTokenNumber != 0) {
					actualTokenEl.text(actualTokenNumber);
				} else {
					actualTokenEl.empty();
				}
			}
		}
	};

	/**
	 * Paint the game score.
	 *
	 * @param score The score to paint
	 */
	var paintScore = function(score) {
		$('.score span', boardEl).text(score);
	};

	this.init = function() {
		bindInteractionEvents();
		initGame();
		paintBoard(gameController.getBoard());
		paintScore(gameController.getScore());
	};
	
}