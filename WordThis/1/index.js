const allTechnology = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {

        this.stack.push(allTechnology[this.level - 1]);

        if (this.level >= 5) alert("Студент выучил все технологии!");
        else
            this.level++;

        return this;
    }
}


student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()