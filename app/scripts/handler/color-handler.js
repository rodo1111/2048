/**
 * ColorHandler static class.
 */
Game2024.Handler.ColorHandler = {};

Game2024.Handler.ColorHandler.COLORS = {
 	'0' : 'transparent',
 	'2' : 'gray',
 	'4' : 'beige',
 	'8' : 'yellow',
 	'16' : 'orange',
 	'32' : 'red',
 	'64' : 'pink',
 	'128' : 'purple',
 	'256' : 'blue',
 	'512' : 'dark-blue',
 	'1024' : 'dark-green',
 	'2048' : 'green'
};

/**
 * Return the color name according to the given number
 *
 * @param number Actual token number
 *
 * @return Color name
 */
Game2024.Handler.ColorHandler.getColorForNumber = function(number) {
	return Game2024.Handler.ColorHandler.COLORS[number.toString()];
};