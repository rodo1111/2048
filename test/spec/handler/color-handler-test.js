/**
 * ColorHandler test class.
 */
(function () {
  'use strict';

  describe('Game 2048 - Color Handler Class Test Suite', function () {
      it('getColorForNumber Test', function () {
      	Game2024.Handler.TokenHandler.generateNewEmptyToken();

      	assert(Game2024.Handler.ColorHandler.getColorForNumber(0) === 'transparent');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(2) === 'gray');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(4) === 'beige');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(8) === 'yellow');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(16) === 'orange');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(32) === 'red');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(64) === 'pink');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(128) === 'purple');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(256) === 'blue');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(512) === 'dark-blue');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(1024) === 'dark-green');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(2048) === 'green');
        assert(Game2024.Handler.ColorHandler.getColorForNumber(1) === undefined);
      });
  });
})();
