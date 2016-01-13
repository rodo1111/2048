/**
 * Initialization of the app.
 */
$(function() {
	var gameController = new Game2024.Controller.GameController($('.board'));
	gameController.init();
});