new Vue({
	el: "#app",	
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: [],
		currentTurn: 0
	},
	methods: {
		startGame: function() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.gameIsRunning = true;
			this.turns = [];
		},
		attack: function() {
			var damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			this.monsterHealth = this.setMinToZero(this.monsterHealth);

			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster for ' + damage,
				id: this.currentTurn + 1
			});

			this.currentTurn++;

			if (this.checkWin()) {
				return;
			}

			this.monsterAttacks();
		},
		specialAttack: function() {
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.monsterHealth = this.setMinToZero(this.monsterHealth);

			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster hard for ' + damage,
				id: this.currentTurn + 1
			});

			this.currentTurn++;

			if (this.checkWin()) {
				return;
			}

			this.monsterAttacks();
		},
		heal: function() {
			if (this.playerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}

			this.turns.unshift({
				isPlayer: true,
				text: 'Player heals for 10',
				id: this.currentTurn + 1
			});

			this.currentTurn++;

			this.monsterAttacks();
		},
		giveUp: function() {
			this.gameIsRunning = false;
		},
		monsterAttacks: function() {
			var damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			this.playerHealth = this.setMinToZero(this.playerHealth);

			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits Player for ' + damage,
				id: this.currentTurn + 1
			});

			this.currentTurn++;

			this.checkWin();
		},
		setMinToZero(health) {
			return Math.max(health, 0);
		},
		calculateDamage: function(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin: function() {
			if (this.monsterHealth <= 0) {
				if (confirm("You won!! New game?")) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm("You lost!! New game?")) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}	

			return false;
		}
	}
});