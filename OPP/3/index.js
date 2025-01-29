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