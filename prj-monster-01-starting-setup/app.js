function calcRandomValueByMinAndMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      battleLog: [],
    };
  },
  computed: {
    monsterHealthStyles() {
      return {
        width: this.monsterHealth > 0 ? `${this.monsterHealth}%` : "0%",
      };
    },
    playerHealthStyles() {
      return {
        width: this.playerHealth > 0 ? `${this.playerHealth}%` : "0%",
      };
    },
    isLimitRoundOfSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;

      const attackDamage = calcRandomValueByMinAndMax(5, 12);
      this.monsterHealth -= attackDamage;

      this.addLogMessage("player", "attack", attackDamage);

      this.attackPlayer();
    },

    attackPlayer() {
      const attackDamage = calcRandomValueByMinAndMax(8, 15);
      this.playerHealth -= attackDamage;

      this.addLogMessage("monster", "attack", attackDamage);
    },

    specialAttackMonster() {
      this.currentRound++;

      const attackDamage = calcRandomValueByMinAndMax(10, 25);
      this.monsterHealth -= attackDamage;

      this.addLogMessage("player", "special-attack", attackDamage);

      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;

      const numOfHeal = calcRandomValueByMinAndMax(8, 20);
      if (this.playerHealth + numOfHeal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += numOfHeal;
      }

      this.addLogMessage("player", "heal", numOfHeal);

      this.attackPlayer();
    },
    restGame() {
      this.winner = null;
      this.currentRound = 0;
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.battleLog = [];
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.battleLog.unshift({
        attackBy: who,
        actionType: what,
        value,
      });
    },
  },
});

app.mount("#game");
