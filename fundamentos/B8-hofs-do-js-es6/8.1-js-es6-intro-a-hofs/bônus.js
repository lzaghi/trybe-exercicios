// =============== PARTE 1

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// EXERCICIO 1
const danoDragao = () => {
  const danoMax = dragon.strength;
  const danoMin = 15;
  return Math.floor(Math.random() * (danoMax - danoMin + 1) + danoMin)
}
// console.log(danoDragao());

// EXERCICIO 2
const danoWarrior = () => {
  const danoMax = warrior.strength * warrior.weaponDmg;
  const danoMin = warrior.strength;
  return Math.floor(Math.random() * (danoMax - danoMin + 1) + danoMin)
}
// console.log(danoWarrior());

// EXERCICIO 3
const ataqueMage = () => {
  const danoMax = mage.intelligence * 2;
  const danoMin = mage.intelligence;
  const danoMage = Math.floor(Math.random() * (danoMax - danoMin + 1) + danoMin)

  const dadosTurno = {
    manaGasta: 0,
    dano: 'Não possui mana suficiente'
  }

  if (mage.mana > 15) {
    dadosTurno.manaGasta = 15;
    dadosTurno.dano = danoMage

    return dadosTurno
  }

  return dadosTurno;
}
// console.log(ataqueMage());


// =============== PARTE 2
const gameActions = {
  turnoWarrior: (danoWarrior) => {
    dragon.healthPoints -= danoWarrior;
    warrior.damage = danoWarrior;
  },
  turnoMage: (ataqueMage) => {
    dragon.healthPoints -= ataqueMage.dano;
    mage.damage = ataqueMage.dano;
    mage.mana -= ataqueMage.manaGasta;
  },
  turnoDragon: (danoDragao) => {
    warrior.healthPoints -= danoDragao;
    mage.healthPoints -= danoDragao;
    dragon.damage = danoDragao;
  },
  resultTurno: () => battleMembers,
};

gameActions.turnoWarrior(danoWarrior());
gameActions.turnoMage(ataqueMage());
gameActions.turnoDragon(danoDragao());
console.log(gameActions.resultTurno());