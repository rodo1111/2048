/**
 * TokenHandler test class.
 */
(function () {
  'use strict';

  describe('Game 2048 - Token Handler Class Test Suite', function () {
      it('generateNewEmptyToken Test', function () {
      	var emptyToken = Game2024.Handler.TokenHandler.generateNewEmptyToken();

      	assert(emptyToken.getNumber() === 0);
      	assert(emptyToken.getColor() === Game2024.Model.COLORS['0']);
      });

      it('resetToken Test', function () {
      	var newToken = Game2024.Handler.TokenHandler.generateNewEmptyToken();

      	newToken.setNumber(4);
      	newToken.setColor(Game2024.Model.COLORS['4']);

      	newToken = Game2024.Handler.TokenHandler.generateNewEmptyToken();

      	assert(newToken.getNumber() === 0);
      	assert(newToken.getColor() === Game2024.Model.COLORS['0']);
      });
  });
})();
