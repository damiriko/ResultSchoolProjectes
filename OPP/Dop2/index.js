class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = new Object();
    }

    add(word, description) {
        this.words[word] = {
            word: word,
            description: description
        }
    }

    remove(word) {
        delete this.words[word];
    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        console.log(this.words);
    }

}


const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

console.log('metod get ', dictionary.get('Веб-разработчик'));

dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие


//Задание 4
console.log('Zadanie4-----');
class HardWordsDictionary extends Dictionary {
    constructor() {
        super(name);
    }

    add(word, description) {
        this.words[word] = {
            word: word,
            description: description,
            isDifficult: true,
        }
    }

}


const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();



// дилетант - Тот, кто занимается наукой или искусством
// без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.