class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power) {
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const randomHealth = Math.random() < 0.5 ? 0 : 10;
        const randomPower = Math.random() < 0.5 ? 0 : 10;
        return { health: randomHealth, power: randomPower };
    }

    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log("Player Status Before Shooting:");
            this.player1.showStatus();
            this.player2.showStatus();

            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            this.player1.useItem(item1);
            this.player2.useItem(item2);

            console.log("Player Status After Shooting:");
            this.player1.showStatus();
            this.player2.showStatus();

            this.player2.hit(this.player1.power);
            this.player1.hit(this.player2.power);
        }

        if (this.player1.health <= 0) {
            console.log(`${this.player2.name} wins!`);
        } else {
            console.log(`${this.player1.name} wins!`);
        }
    }
}

// Example usage:
const player1 = new Player("bayu");
const player2 = new Player("erik");

const game = new ShootingGame(player1, player2);
game.start();
