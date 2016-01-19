/**
 * TokenHandler static class.
 */
Game2024.Handler.TokenHandler = {
	/**
	 * Generate an empty token to be used.
	 *
	 * @return Token object
	 */
	generateNewEmptyToken : function() {
		return new Game2024.Model.Token(0);
	},

	/**
	 * Reset a given token.
	 *
	 * @param token Token object to reset
	 * 
	 * @return Token object
	 */
	resetToken : function(token) {
		if (token) {
			token.setNumber(0);
		}

		return token;
	}
}