function heatEnemy() {
    enemy.health -= 10;
}

function heatHero() {
    hero.health -= 10;
}

function startGame(heroPlayer, enemyPlayer) {
    let name;
    let health;

    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        if (getRandomNumberInRange(0, 1) === 1) {
            console.log('strike heroPlayer ', heroPlayer);
            heatEnemy();
        }
        else {
            console.log('strike enemyPlayer ', enemyPlayer);
            heatHero();
        }
    }

    if (heroPlayer.health > 0) {
        name = heroPlayer.name;
        health = heroPlayer.health;
    }
    else {
        name = enemyPlayer.name;
        health = enemyPlayer.health;
    }


    alert(`${name} победил! У него осталось ${health} здоровья`)
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hero = {
    name: 'Batman',
    health: 100,
};
const enemy = {
    name: 'Joker',
    health: 100,
};

startGame(hero, enemy);