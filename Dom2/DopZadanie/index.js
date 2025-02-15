// #region Dom2_DopZadanie
class CustomSelect {

    #currentSelectedOption = null;

    constructor(id, options) {
        this.id = id;
        this.options = options;
    };

    get selectedValue() {
        return this.#currentSelectedOption;
    }
    set selectedValue(value) {
        this.#currentSelectedOption = value;
    }

    render(container) {

        const divSelectDropdown = document.createElement("div");
        divSelectDropdown.classList.add("select-dropdown", `select-dropdown--${this.id}`);

        const buttonSelect = document.createElement("button");
        buttonSelect.classList.add("select-dropdown__button", `select-dropdown__button--${this.id}`);
        const spanSelect = document.createElement("span");
        spanSelect.classList.add("select-dropdown__text", `select-dropdown__text--${this.id}`);
        spanSelect.textContent = "Выберите элемент";
        buttonSelect.append(spanSelect);
        divSelectDropdown.append(buttonSelect);

        const ulSelectDropdown = document.createElement("ul");
        ulSelectDropdown.classList.add("select-dropdown__list", `select-dropdown__list--${this.id}`);

        options.forEach((el) => {

            const liSelectDropdown = document.createElement("li");
            liSelectDropdown.classList.add("select-dropdown__list-item");
            liSelectDropdown.dataset.value = el.value;
            liSelectDropdown.textContent = el.text;

            ulSelectDropdown.append(liSelectDropdown);
        });

        divSelectDropdown.append(ulSelectDropdown);
        container.append(divSelectDropdown);

    }



}
// #region Init
const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);
// #endregion

const openclose = document.querySelector(".select-dropdown__button");
openclose.addEventListener('click', () => {
    //Список открыт, когда у элемента с тегом <ul> есть класс "active"
    const ulSelectDropdown = document.querySelector(".select-dropdown__list");
    if (ulSelectDropdown.classList.contains("active")) {
        ulSelectDropdown.classList.remove("active");
    }
    else {
        ulSelectDropdown.classList.add("active");
    }
})

const ulElement = document.querySelector(".select-dropdown__list");
ulElement.addEventListener('click', (event) => {
    const li = event.target.closest(".select-dropdown__list-item");
    if (li) {

        //снимаем выделения
        document.querySelectorAll(".select-dropdown__list-item").forEach(item => {
            item.classList.remove("selected");
        });
        li.classList.add("selected");


        customSelect.selectedValue = li.dataset.value;

        const selectField = options.find(el => String(el.value) === customSelect.selectedValue);

        const spanSelect = document.querySelector(".select-dropdown__text");
        spanSelect.textContent = selectField.text;


        //сворачиваем 
        document.querySelectorAll(".select-dropdown__list").forEach(item => {
            item.classList.remove("active");
        });

    }
});

// #endregion