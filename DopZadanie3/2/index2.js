function heatEnemy() {
    enemy.health -= 10;


    const rightScore = document.querySelector('.right-score');
    rightScore.innerHTML = enemy.health;
}

function heatHero() {
    hero.health -= 10;

    const leftScore = document.querySelector('.left-score');
    leftScore.innerHTML = hero.health;


}


function startGame(heroPlayer, enemyPlayer) {
    let name;
    let health;

    const leftScore = document.querySelector('.left-score');
    leftScore.innerHTML = heroPlayer.health;

    const rightScore = document.querySelector('.right-score');

    rightScore.innerHTML = enemyPlayer.health;


    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        if (getRandomNumberInRange(0, 1) === 1) {
            heatEnemy();
        }
        else {
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

    const Resultat = document.querySelector('.resultat');
    Resultat.innerHTML = `${name} победил! У него осталось ${health} здоровья`;

    //alert(`${name} победил! У него осталось ${health} здоровья`)
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hero = {
    name: 'Leopard',
    health: 100,
};
const enemy = {
    name: 'T-34',
    health: 100,
};

startGame(hero, enemy);