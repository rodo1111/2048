/**
 * Token class.
 */ 
Game2024.Model.Token = function(pNumber, pColor) {
	var number = pNumber;
	var color = pColor;

	this.getNumber = function() {
		return number;
	}

	this.setNumber = function(pNumber) {
		number = pNumber;
	}

	this.getColor = function() {
		return color;
	}

	this.setColor = function(pColor) {
		color = pColor;
	}
};