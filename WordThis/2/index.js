const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}


function makeDomestic(isDomestic) {

    alert(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return {
        name: this.name,
        type: this.type,
        isDomestic: isDomestic,
        makeSound: this.makeSound()
    };
}


console.log('bind ', makeDomestic.bind(dog, true)());
console.log('bind ', makeDomestic.bind(bird, false)());

console.log('call ', makeDomestic.call(dog, true));
console.log('call ', makeDomestic.call(bird, false));

console.log('apply ', makeDomestic.apply(dog, [true]));
console.log('apply ', makeDomestic.apply(bird, [false]));