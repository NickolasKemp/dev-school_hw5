// almost done (needs revising)

class Warrior {
	constructor() {
		this.level = 1;
		this.expirience = 100;
		this.rank = "Pushover";
		this.achievements = [];
	}

	level() {
		return this.level;
	}

	expirience() {
		return this.expirience;
	}

	rank() {
		return this.rank;
	}

	achievements() {
		return this.achievements;
	}

	training(description, expPoints, minLevel) {


		if (this.level >= minLevel) {
			this.expirience = this.expirience + expPoints;
			this.achievements.push(description);
			return description;
		} else {
			return "not strong enough"
		}
	}

	battle(enemyLevel) {
		if (enemyLevel < 1 || enemyLevel > 100) {
			return "Invalid level";
		}

		const levelDifference = enemyLevel - this.level;

		if (levelDifference === 0) {
			this.level = this.level + 10;
		}

		else if (levelDifference === -1) {
			this.level = this.level + 5;
		}

		else if (levelDifference >= 1) {
			this.level = this.level + (20 * levelDifference * levelDifference);
		}

		else if (levelDifference <= -5 && this.rankIndex() < this.rankIndexByLevel(enemyLevel)) {
			return "you've been defeated"
		}

		this.updateLevelAndRank()
		return this.battleResponse(levelDifference)
	}

	updateLevelAndRank() {
		const newLevel = Math.floor(this.expirience / 100) + 1;

		if (newLevel <= 100) {
			this.level = newLevel;

			if (this.level % 10 === 0) {
				this.rank = this.rankIndexByLevel(this.level)
			}

		} else {
			this.level = 100;
			this.expirience = 10000;
			this.rank = "Gratest";
		}

	}

	rankByLevel() {
		const rankTiers = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran",
			"Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

		return rankTiers[Math.floor((level - 1) / 10)];
	}

	rankIndex() {
		const rankTiers = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran",
			"Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

		return rankTiers.indexOf(this.rank);
	}

	rankIndexByLevel(level) {
		const rankTiers = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran",
			"Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

		return rankTiers[Math.floor((level - 1) / 10)];
	}

	battleResponse(levelDifference) {
		if (levelDifference >= 2) {
			return "easy fight";
		} else if (levelDifference === 1 || levelDifference === 0) {
			return "good fight" ;
		} else {
			return "intense fight"
		 }
	}
}

const bruce_lee = new Warrior();

bruce_lee.level();        // => 1
bruce_lee.experience();   // => 100
bruce_lee.rank();         // => "Pushover"
bruce_lee.achievements(); // => []
bruce_lee.training(["Defeated Chuck Norris", 9000, 1]); // => "Defeated Chuck Norris"
bruce_lee.experience();   // => 9100
bruce_lee.level();        // => 91
bruce_lee.rank();         // => "Master"
bruce_lee.battle(90);     // => "A good fight"
bruce_lee.experience();   // => 9105
bruce_lee.achievements(); // => ["Defeated Chuck Norris"]