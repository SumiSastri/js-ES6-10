// Define object
var game = { counter: 0 };

// Define setters
Object.defineProperty(game, 'reset', {
	get: function() {
		this.counter = 0;
	}
});
Object.defineProperty(game, 'increment', {
	get: function() {
		this.counter++;
	}
});
Object.defineProperty(game, 'decrement', {
	get: function() {
		this.counter--;
	}
});
Object.defineProperty(game, 'add', {
	set: function(value) {
		this.counter += value;
	}
});
Object.defineProperty(game, 'subtract', {
	set: function(value) {
		this.counter -= value;
	}
});

// Play with the counter:
game.reset;
game.add = 5;
game.subtract = 1;
game.increment;
game.decrement;
