/**
 * GameController test class.
 */
(function () {
  'use strict';

  var board;

  describe('Game 2048 - Game Controller Class Test Suite', function () {
    // Before each test, initialize the board object with empty tokens
    beforeEach(function() {
      var tokens = [];

      for (var indexRow = 0; indexRow < 4; indexRow++) {
        var newRow = [];

        for (var indexColumn = 0; indexColumn < 4; indexColumn++) {
          newRow.push(Game2024.Handler.TokenHandler.generateNewEmptyToken());
        }

        tokens.push(newRow);
      }

      board = new Game2024.Model.Board(tokens);
    });

    describe('processBoardInteraction ToRight Tests', function () {
      it('Test 1', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][1].setNumber(2);
        tokens[1][1].setNumber(2);
        tokens[2][1].setNumber(2);
        tokens[3][1].setNumber(2);

        // Process the board interaction to the right
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_RIGHT, board);

        tokens = board.getTokens();

      	assert(tokens[0][1].getNumber() === 0);
        assert(tokens[1][1].getNumber() === 0);
        assert(tokens[2][1].getNumber() === 0);
        assert(tokens[3][1].getNumber() === 0);

        assert(tokens[0][3].getNumber() === 2);
        assert(tokens[1][3].getNumber() === 2);
        assert(tokens[2][3].getNumber() === 2);
        assert(tokens[3][3].getNumber() === 2);
      });

      it('Test 2', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][0].setNumber(4);
        tokens[1][1].setNumber(4);
        tokens[2][2].setNumber(4);
        tokens[3][3].setNumber(4);

        // Process the board interaction to the right
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_RIGHT, board);

        tokens = board.getTokens();

        assert(tokens[0][0].getNumber() === 0);
        assert(tokens[1][1].getNumber() === 0);
        assert(tokens[2][2].getNumber() === 0);

        assert(tokens[0][3].getNumber() === 4);
        assert(tokens[1][3].getNumber() === 4);
        assert(tokens[2][3].getNumber() === 4);
        assert(tokens[3][3].getNumber() === 4);
      });

      it('Test 3', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][1].setNumber(2);
        tokens[0][3].setNumber(2);
        tokens[1][0].setNumber(4);
        tokens[1][2].setNumber(4);
        tokens[2][0].setNumber(8);
        tokens[3][3].setNumber(16);

        // Process the board interaction to the right
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_RIGHT, board);

        tokens = board.getTokens();

        assert(tokens[0][1].getNumber() === 0);
        assert(tokens[1][0].getNumber() === 0);
        assert(tokens[1][2].getNumber() === 0);
        assert(tokens[2][0].getNumber() === 0);

        assert(tokens[0][3].getNumber() === 4);
        assert(tokens[1][3].getNumber() === 8);
        assert(tokens[2][3].getNumber() === 8);
        assert(tokens[3][3].getNumber() === 16);
      });

      it('Test 4', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][0].setNumber(2);
        tokens[0][1].setNumber(2);
        tokens[0][2].setNumber(2);
        tokens[0][3].setNumber(2);
        tokens[1][0].setNumber(2);
        tokens[1][2].setNumber(4);
        tokens[1][3].setNumber(4);
        tokens[2][0].setNumber(2);
        tokens[2][1].setNumber(4);
        tokens[2][2].setNumber(8);
        tokens[2][3].setNumber(16);
        tokens[3][0].setNumber(16);
        tokens[3][1].setNumber(16);

        // Process the board interaction to the right
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_RIGHT, board);

        tokens = board.getTokens();

        assert(tokens[0][0].getNumber() === 0);
        assert(tokens[0][1].getNumber() === 0);
        assert(tokens[0][2].getNumber() === 4);
        assert(tokens[0][3].getNumber() === 4);
        assert(tokens[1][0].getNumber() === 0);
        assert(tokens[1][1].getNumber() === 0);
        assert(tokens[1][2].getNumber() === 2);
        assert(tokens[1][3].getNumber() === 8);
        assert(tokens[2][0].getNumber() === 2);
        assert(tokens[2][1].getNumber() === 4);
        assert(tokens[2][2].getNumber() === 8);
        assert(tokens[2][3].getNumber() === 16);
        assert(tokens[3][0].getNumber() === 0);
        assert(tokens[3][1].getNumber() === 0);
        assert(tokens[3][2].getNumber() === 0);
        assert(tokens[3][3].getNumber() === 32);
      });
    });

    describe('processBoardInteraction ToLeft Tests', function () {
      it('Test 1', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][2].setNumber(2);
        tokens[1][2].setNumber(2);
        tokens[2][2].setNumber(2);
        tokens[3][2].setNumber(2);

        // Process the board interaction to the left
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_LEFT, board);

        tokens = board.getTokens();

        assert(tokens[0][2].getNumber() === 0);
        assert(tokens[1][2].getNumber() === 0);
        assert(tokens[2][2].getNumber() === 0);
        assert(tokens[3][2].getNumber() === 0);

        assert(tokens[0][0].getNumber() === 2);
        assert(tokens[1][0].getNumber() === 2);
        assert(tokens[2][0].getNumber() === 2);
        assert(tokens[3][0].getNumber() === 2);
      });

      it('Test 2', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][0].setNumber(4);
        tokens[1][1].setNumber(4);
        tokens[2][2].setNumber(4);
        tokens[3][3].setNumber(4);

        // Process the board interaction to the left
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_LEFT, board);

        tokens = board.getTokens();

        assert(tokens[1][1].getNumber() === 0);
        assert(tokens[2][2].getNumber() === 0);
        assert(tokens[3][3].getNumber() === 0);

        assert(tokens[0][0].getNumber() === 4);
        assert(tokens[1][0].getNumber() === 4);
        assert(tokens[2][0].getNumber() === 4);
        assert(tokens[3][0].getNumber() === 4);
      });

      it('Test 3', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][1].setNumber(2);
        tokens[0][3].setNumber(2);
        tokens[1][0].setNumber(4);
        tokens[1][2].setNumber(4);
        tokens[2][0].setNumber(8);
        tokens[3][3].setNumber(16);

        // Process the board interaction to the left
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_LEFT, board);

        tokens = board.getTokens();

        assert(tokens[0][1].getNumber() === 0);
        assert(tokens[0][3].getNumber() === 0);
        assert(tokens[1][2].getNumber() === 0);
        assert(tokens[3][3].getNumber() === 0);

        assert(tokens[0][0].getNumber() === 4);
        assert(tokens[1][0].getNumber() === 8);
        assert(tokens[2][0].getNumber() === 8);
        assert(tokens[3][0].getNumber() === 16);
      });

      it('Test 4', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][0].setNumber(2);
        tokens[0][1].setNumber(2);
        tokens[0][2].setNumber(2);
        tokens[0][3].setNumber(2);
        tokens[1][0].setNumber(2);
        tokens[1][2].setNumber(4);
        tokens[1][3].setNumber(4);
        tokens[2][0].setNumber(2);
        tokens[2][1].setNumber(4);
        tokens[2][2].setNumber(8);
        tokens[2][3].setNumber(16);
        tokens[3][0].setNumber(16);
        tokens[3][1].setNumber(16);

        // Process the board interaction to the left
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_LEFT, board);

        tokens = board.getTokens();

        assert(tokens[0][0].getNumber() === 4);
        assert(tokens[0][1].getNumber() === 4);
        assert(tokens[0][2].getNumber() === 0);
        assert(tokens[0][3].getNumber() === 0);
        assert(tokens[1][0].getNumber() === 2);
        assert(tokens[1][1].getNumber() === 8);
        assert(tokens[1][2].getNumber() === 0);
        assert(tokens[1][3].getNumber() === 0);
        assert(tokens[2][0].getNumber() === 2);
        assert(tokens[2][1].getNumber() === 4);
        assert(tokens[2][2].getNumber() === 8);
        assert(tokens[2][3].getNumber() === 16);
        assert(tokens[3][0].getNumber() === 32);
        assert(tokens[3][1].getNumber() === 0);
        assert(tokens[3][2].getNumber() === 0);
        assert(tokens[3][3].getNumber() === 0);
      });
    });

    describe('processBoardInteraction ToDown Tests', function () {
      it('Test 1', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[1][0].setNumber(2);
        tokens[1][1].setNumber(2);
        tokens[1][2].setNumber(2);
        tokens[1][3].setNumber(2);

        // Process the board interaction to the left
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_DOWN, board);

        tokens = board.getTokens();

        assert(tokens[1][0].getNumber() === 0);
        assert(tokens[1][1].getNumber() === 0);
        assert(tokens[1][2].getNumber() === 0);
        assert(tokens[1][3].getNumber() === 0);

        assert(tokens[3][0].getNumber() === 2);
        assert(tokens[3][1].getNumber() === 2);
        assert(tokens[3][2].getNumber() === 2);
        assert(tokens[3][3].getNumber() === 2);
      });

      it('Test 2', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][0].setNumber(4);
        tokens[1][1].setNumber(4);
        tokens[2][2].setNumber(4);
        tokens[3][3].setNumber(4);

        // Process the board interaction to the down
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_DOWN, board);

        tokens = board.getTokens();

        assert(tokens[0][0].getNumber() === 0);
        assert(tokens[1][1].getNumber() === 0);
        assert(tokens[2][2].getNumber() === 0);

        assert(tokens[3][0].getNumber() === 4);
        assert(tokens[3][0].getNumber() === 4);
        assert(tokens[3][0].getNumber() === 4);
        assert(tokens[3][0].getNumber() === 4);
      });

      it('Test 3', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][0].setNumber(4);
        tokens[0][1].setNumber(2);
        tokens[0][3].setNumber(2);
        tokens[1][0].setNumber(4);
        tokens[1][2].setNumber(4);
        tokens[2][0].setNumber(8);
        tokens[2][1].setNumber(2);
        tokens[3][3].setNumber(16);

        // Process the board interaction to the down
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_DOWN, board);

        tokens = board.getTokens();

        assert(tokens[0][0].getNumber() === 0);
        assert(tokens[0][1].getNumber() === 0);
        assert(tokens[0][3].getNumber() === 0);
        assert(tokens[1][0].getNumber() === 0);
        assert(tokens[1][2].getNumber() === 0);
        assert(tokens[2][1].getNumber() === 0);

        assert(tokens[2][0].getNumber() === 8);
        assert(tokens[2][3].getNumber() === 2);
        assert(tokens[3][0].getNumber() === 8);
        assert(tokens[3][1].getNumber() === 4);
        assert(tokens[3][2].getNumber() === 4);
        assert(tokens[3][3].getNumber() === 16);
      });

      it('Test 4', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][0].setNumber(2);
        tokens[0][1].setNumber(2);
        tokens[0][2].setNumber(2);
        tokens[0][3].setNumber(2);
        tokens[1][0].setNumber(2);
        tokens[1][1].setNumber(2);
        tokens[1][2].setNumber(4);
        tokens[1][3].setNumber(4);
        tokens[2][0].setNumber(2);
        tokens[2][1].setNumber(16);
        tokens[2][2].setNumber(8);
        tokens[2][3].setNumber(8);
        tokens[3][0].setNumber(16);
        tokens[3][1].setNumber(16);
        tokens[3][2].setNumber(0);
        tokens[3][3].setNumber(8);

        // Process the board interaction to the down
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_DOWN, board);

        tokens = board.getTokens();

        assert(tokens[0][0].getNumber() === 0);
        assert(tokens[0][1].getNumber() === 0);
        assert(tokens[0][2].getNumber() === 0);
        assert(tokens[0][3].getNumber() === 0);
        assert(tokens[1][0].getNumber() === 2);
        assert(tokens[1][1].getNumber() === 0);
        assert(tokens[1][2].getNumber() === 2);
        assert(tokens[1][3].getNumber() === 2);
        assert(tokens[2][0].getNumber() === 4);
        assert(tokens[2][1].getNumber() === 4);
        assert(tokens[2][2].getNumber() === 4);
        assert(tokens[2][3].getNumber() === 4);
        assert(tokens[3][0].getNumber() === 16);
        assert(tokens[3][1].getNumber() === 32);
        assert(tokens[3][2].getNumber() === 8);
        assert(tokens[3][3].getNumber() === 16);
      });
    });

    describe('processBoardInteraction ToUp Tests', function () {
      it('Test 1', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[1][0].setNumber(2);
        tokens[1][1].setNumber(2);
        tokens[1][2].setNumber(2);
        tokens[1][3].setNumber(2);

        // Process the board interaction to the up
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_UP, board);

        tokens = board.getTokens();

        assert(tokens[1][0].getNumber() === 0);
        assert(tokens[1][1].getNumber() === 0);
        assert(tokens[1][2].getNumber() === 0);
        assert(tokens[1][3].getNumber() === 0);

        assert(tokens[0][0].getNumber() === 2);
        assert(tokens[0][1].getNumber() === 2);
        assert(tokens[0][2].getNumber() === 2);
        assert(tokens[0][3].getNumber() === 2);
      });

      it('Test 2', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][0].setNumber(4);
        tokens[1][1].setNumber(4);
        tokens[2][2].setNumber(4);
        tokens[3][3].setNumber(4);

        // Process the board interaction to the up
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_UP, board);

        tokens = board.getTokens();

        assert(tokens[1][1].getNumber() === 0);
        assert(tokens[2][2].getNumber() === 0);
        assert(tokens[3][3].getNumber() === 0);

        assert(tokens[0][0].getNumber() === 4);
        assert(tokens[0][1].getNumber() === 4);
        assert(tokens[0][2].getNumber() === 4);
        assert(tokens[0][3].getNumber() === 4);
      });

      it('Test 3', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][0].setNumber(4);
        tokens[0][1].setNumber(2);
        tokens[0][3].setNumber(2);
        tokens[1][0].setNumber(4);
        tokens[1][2].setNumber(4);
        tokens[2][0].setNumber(8);
        tokens[2][1].setNumber(2);
        tokens[3][3].setNumber(16);

        // Process the board interaction to the up
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_UP, board);

        tokens = board.getTokens();

        assert(tokens[1][2].getNumber() === 0);
        assert(tokens[2][0].getNumber() === 0);
        assert(tokens[2][1].getNumber() === 0);
        assert(tokens[3][3].getNumber() === 0);

        assert(tokens[0][0].getNumber() === 8);
        assert(tokens[0][1].getNumber() === 4);
        assert(tokens[0][2].getNumber() === 4);
        assert(tokens[0][3].getNumber() === 2);
        assert(tokens[1][0].getNumber() === 8);
        assert(tokens[1][3].getNumber() === 16);
      });

      it('Test 4', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();

        tokens[0][0].setNumber(2);
        tokens[0][1].setNumber(2);
        tokens[0][2].setNumber(2);
        tokens[0][3].setNumber(2);
        tokens[1][0].setNumber(2);
        tokens[1][1].setNumber(2);
        tokens[1][2].setNumber(4);
        tokens[1][3].setNumber(4);
        tokens[2][0].setNumber(2);
        tokens[2][1].setNumber(16);
        tokens[2][2].setNumber(8);
        tokens[2][3].setNumber(8);
        tokens[3][0].setNumber(16);
        tokens[3][1].setNumber(16);
        tokens[3][3].setNumber(8);

        // Process the board interaction to the up
        gameController.processBoardInteraction(Game2024.Model.INTERACTION_DIRECTIONS.TO_UP, board);

        tokens = board.getTokens();

        assert(tokens[0][0].getNumber() === 4);
        assert(tokens[0][1].getNumber() === 4);
        assert(tokens[0][2].getNumber() === 2);
        assert(tokens[0][3].getNumber() === 2);
        assert(tokens[1][0].getNumber() === 2);
        assert(tokens[1][1].getNumber() === 32);
        assert(tokens[1][2].getNumber() === 4);
        assert(tokens[1][3].getNumber() === 4);
        assert(tokens[2][0].getNumber() === 16);
        assert(tokens[2][1].getNumber() === 0);
        assert(tokens[2][2].getNumber() === 8);
        assert(tokens[2][3].getNumber() === 16);
        assert(tokens[3][0].getNumber() === 0);
        assert(tokens[3][1].getNumber() === 0);
        assert(tokens[3][2].getNumber() === 0);
        assert(tokens[3][3].getNumber() === 0);
      });
    });

    describe('findAvailableTokenPositions Tests', function () {
      it('Test 1', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();
        var availablePositions;

        tokens[0][1].setNumber(2);
        tokens[0][3].setNumber(2);
        tokens[1][0].setNumber(4);
        tokens[1][2].setNumber(4);
        tokens[2][0].setNumber(8);
        tokens[3][3].setNumber(16);

        // Get the available board positions
        availablePositions = gameController.findAvailableTokenPositions(board);

        assert(availablePositions.length === 10);
        assert(availablePositions[0].getRow() === 0 && availablePositions[0].getColumn() === 0);
        assert(availablePositions[1].getRow() === 0 && availablePositions[1].getColumn() === 2);
        assert(availablePositions[2].getRow() === 1 && availablePositions[2].getColumn() === 1);
        assert(availablePositions[3].getRow() === 1 && availablePositions[3].getColumn() === 3);
        assert(availablePositions[4].getRow() === 2 && availablePositions[4].getColumn() === 1);
        assert(availablePositions[5].getRow() === 2 && availablePositions[5].getColumn() === 2);
        assert(availablePositions[6].getRow() === 2 && availablePositions[6].getColumn() === 3);
        assert(availablePositions[7].getRow() === 3 && availablePositions[7].getColumn() === 0);
        assert(availablePositions[8].getRow() === 3 && availablePositions[8].getColumn() === 1);
        assert(availablePositions[9].getRow() === 3 && availablePositions[9].getColumn() === 2);
      });

      it('Test 2', function () {
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();
        var availablePositions;

        tokens[0][0].setNumber(2);
        tokens[0][1].setNumber(2);
        tokens[0][2].setNumber(2);
        tokens[0][3].setNumber(2);
        tokens[1][0].setNumber(2);
        tokens[1][1].setNumber(2);
        tokens[1][2].setNumber(4);
        tokens[1][3].setNumber(4);
        tokens[2][0].setNumber(2);
        tokens[2][1].setNumber(16);
        tokens[2][2].setNumber(8);
        tokens[2][3].setNumber(8);
        tokens[3][0].setNumber(16);
        tokens[3][1].setNumber(16);
        tokens[3][3].setNumber(8);

        // Get the available board positions
        availablePositions = gameController.findAvailableTokenPositions(board);

        assert(availablePositions.length === 1);
        assert(availablePositions[0].getRow() === 3 && availablePositions[0].getColumn() === 2);
      });

      it('Test 3', function () {
        var expectedRows = [0, 2, 3];
        var gameController = new Game2024.Controller.GameController();
        var tokens = board.getTokens();
        var availablePositions;

        tokens[1][0].setNumber(2);
        tokens[1][1].setNumber(2);
        tokens[1][2].setNumber(2);
        tokens[1][3].setNumber(2);

        // Get the available board positions
        availablePositions = gameController.findAvailableTokenPositions(board);

        assert(availablePositions.length === 12);
        assert(availablePositions[0].getRow() === 0 && availablePositions[0].getColumn() === 0);
        assert(availablePositions[1].getRow() === 0 && availablePositions[1].getColumn() === 1);
        assert(availablePositions[2].getRow() === 0 && availablePositions[2].getColumn() === 2);
        assert(availablePositions[3].getRow() === 0 && availablePositions[3].getColumn() === 3);
        assert(availablePositions[4].getRow() === 2 && availablePositions[4].getColumn() === 0);
        assert(availablePositions[5].getRow() === 2 && availablePositions[5].getColumn() === 1);
        assert(availablePositions[6].getRow() === 2 && availablePositions[6].getColumn() === 2);
        assert(availablePositions[7].getRow() === 2 && availablePositions[7].getColumn() === 3);
        assert(availablePositions[8].getRow() === 3 && availablePositions[8].getColumn() === 0);
        assert(availablePositions[9].getRow() === 3 && availablePositions[9].getColumn() === 1);
        assert(availablePositions[10].getRow() === 3 && availablePositions[10].getColumn() === 2);
        assert(availablePositions[11].getRow() === 3 && availablePositions[11].getColumn() === 3);
      });
    });
  });
})();
