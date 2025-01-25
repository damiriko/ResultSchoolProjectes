function useAnimationRight() {

    const shotLeft = document.querySelector('.shot-left');
    const startPosition = shotLeft.getBoundingClientRect().left; // Начальная позиция
    const endPosition = startPosition + 200; // Конечная позиция (200px вправо)
    const duration = 15000; // Длительность анимации в миллисекундах
    const startTime = performance.now(); // Время начала анимации

    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Прогресс анимации (от 0 до 1)

        // Перемещение элемента
        shotLeft.style.transform = `translateX(${progress * 1500}px)`;

        // Продолжаем анимацию, пока не достигнем конца
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Сбрасываем трансформацию после завершения анимации
            shotLeft.style.transform = 'translateX(0)';
        }
    }

    // Запуск анимации
    requestAnimationFrame(animate);

}

function useAnimationLeft() {

    const shotRight = document.querySelector('.shot-right');
    const startPosition = shotRight.getBoundingClientRect().right; // Начальная позиция
    const endPosition = startPosition + 200; // Конечная позиция (200px вправо)
    const duration = 15000; // Длительность анимации в миллисекундах
    const startTime = performance.now(); // Время начала анимации

    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Прогресс анимации (от 0 до 1)

        // Перемещение элемента
        shotRight.style.transform = `translateX(${progress * -1500}px)`;

        // Продолжаем анимацию, пока не достигнем конца
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Сбрасываем трансформацию после завершения анимации
            shotRight.style.transform = 'translateX(0)';
        }
    }

    // Запуск анимации
    requestAnimationFrame(animate);

}

function heatEnemy() {
    enemy.health -= 10;

    useAnimationRight();

    const rightScore = document.querySelector('.right-score');
    rightScore.innerHTML = enemy.health;
}

function heatHero() {
    hero.health -= 10;

    useAnimationLeft();

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