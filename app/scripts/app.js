/**
 * Initialization of the app.
 */
$(function() {
	var guiController = new Game2024.Controller.GUIController($('.board'));
	guiController.init();
});