/**
 * Initialization of the app.
 */
$(function() {
	var guiController = new Game2024.Controller.GUIController($(document), $('.board'));
	guiController.init();
});