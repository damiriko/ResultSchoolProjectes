function startGame(heroPlayer, enemyPlayer) {

    getRandomNumberInRange(0, 1);

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