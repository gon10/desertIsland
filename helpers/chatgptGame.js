// Game constants
const FIELD_SIZE = 1000;
const TEAM_BLUE = "blue";
const TEAM_RED = "red";

// type PlayerType = {
//     content: string;
//     children?: ReactNode;
//   };

// Player class
class Player {
  constructor(lives, attackRange, attackSpeed, attackDamage) {
    this.lives = lives;
    this.attackRange = attackRange;
    this.attackSpeed = attackSpeed;
    this.attackDamage = attackDamage;
    this.position = [
      Math.floor(Math.random() * FIELD_SIZE),
      Math.floor(Math.random() * FIELD_SIZE),
    ];
    this.opponents = null;
  }

  moveToOpponent() {
    let nearestOpponent = null;
    let nearestOpponentDistance = Infinity;
    for (const opponent of this.opponents) {
      const distance = this.getDistance(opponent.position);
      if (distance < nearestOpponentDistance) {
        nearestOpponent = opponent;
        nearestOpponentDistance = distance;
      }
    }
    if (nearestOpponentDistance <= this.attackRange) {
      this.attack(nearestOpponent);
    } else {
      this.move(nearestOpponent.position);
    }
  }

  getDistance(position) {
    const deltaX = this.position[0] - position[0];
    const deltaY = this.position[1] - position[1];
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }

  move(position) {
    const deltaX = position[0] - this.position[0];
    const deltaY = position[1] - this.position[1];
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const speed = (this.attackSpeed / 1000) * distance;
    this.position[0] += (deltaX / distance) * speed;
    this.position[1] += (deltaY / distance) * speed;
  }

  attack(opponent) {
    opponent.lives -= this.attackDamage;
    if (opponent.lives <= 0) {
      const index = this.opponents.indexOf(opponent);
      if (index !== -1) {
        this.opponents.splice(index, 1);
      }
    }
  }
}

// Team class
class Team {
  constructor(color) {
    this.color = color;
    this.players = [];
  }

  addPlayer(player) {
    player.opponents = this.getOpponents(player);
    this.players.push(player);
  }

  getOpponents(player) {
    return this.players.filter((p) => p !== player);
  }

  update() {
    for (const player of this.players) {
      if (player.opponents.length > 0) {
        player.moveToOpponent();
      }
    }
  }
}

// Game engine
class Game {
  constructor() {
    this.teams = {
      [TEAM_BLUE]: new Team(TEAM_BLUE),
      [TEAM_RED]: new Team(TEAM_RED),
    };
  }

  start() {
    for (let i = 0; i < 10; i++) {
      this.teams[TEAM_BLUE].addPlayer(new Player(10, 50, 1000, 5));
      this.teams[TEAM_RED].addPlayer(new Player(10, 50, 1000, 5));
    }
    this.run();
  }

  run() {
    setInterval(() => {
      for (const team of Object.values(this.teams)) {
        team.update();
      }
    }, 50);
  }
}

// Start the game
const game = new Game();
game.start();
