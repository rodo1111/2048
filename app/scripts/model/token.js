/**
 * Token class.
 */
Game2024.Model.Token = function(pNumber) {
	var number = pNumber;

	this.getNumber = function() {
		return number;
	};

	this.setNumber = function(pNumber) {
		number = pNumber;
	};
};
