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
        tokens[3][2].setNumber(0);
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
  });
})();
