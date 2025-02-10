// #region инициализация из условия Dom1_Zad2
const tasksList = document.querySelector('.tasks-list');

let tasks = [];
let archivTasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

//загрузка "старых" данных
for (let el of archivTasks) {
    addServiceField(el);
}
// #endregion

// #region Dom1_Zad2

// новую задачу-элемент ->  в строку html
function getOurDiv(id, text) {

    const temlateString =
        ` <div class="task-item" data-task-id = ${id}>
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id = ${id}>
                <label for = ${id}></label>
            </form>
            <span class="task-item__text">
                ${text}
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button">
            Удалить
        </button>
    </div>
`;

    return temlateString;
}

//добавляет одну задачу-элемент в блок
function addServiceField(el) {

    if (tasks.some(tekTask => tekTask.id === el.id))
        return; //уже есть - пропускаем
    else
        tasks.push(el);

    id = String(el.id);
    text = String(el.text);

    tasksList.insertAdjacentHTML("beforeend", getOurDiv(id, text));
}
// #endregion


// #region инициализация из условие Dom2_Zad1
const textButtonAddTask =
    ` <form class="create-task-block">
        <input
          name="taskName"
          class="create-task-block__input default-text-input"
          type="text"
          placeholder="Создайте новую задачу"
          value="Посмотреть урок по JavaScript"
        >
        <button
          type="submit"
          class="create-task-block__button default-button"
        >
          Создать
        </button>
      </form>`;

//tasksList.insertAdjacentHTML("afterend", textButtonAddTask);
tasksList.insertAdjacentHTML("afterbegin", textButtonAddTask);
// #endregion


// #region Задание Dom2_Zad1


//вешаем событие на кнопку
const createTaskBlock = document.querySelector(".create-task-block");
createTaskBlock.addEventListener("submit", (event) => {
    createNewTask(event);
});

function createNewTask(event) {
    event.preventDefault();

    //проверку на пустой текст и на  изменения
    taskText = chekInValid(event.target.querySelector('.create-task-block__input'));

    if (taskText === 'isError')
        return;

    newTask = {
        id: Date.now().toString(),
        completed: false,
        text: taskText,
    };

    addServiceField(newTask);
}

// #endregion

// #region Задание Dom2_Zad2
function chekInValid(inputElement) {

    const taskText = inputElement.value.trim();

    if (taskText === '') {
        const textError = 'Название задачи не должно быть пустым';
        addSpanErr(textError);
        return 'isError';
    }

    else if (tasks.some(tekTask => tekTask.text === taskText)) {
        const textError = 'Задача с таким названием уже существует';
        addSpanErr(textError);
        return 'isError';
    }
    else {
        const elementError = document.querySelector('.error-message-block');
        if (elementError) elementError.remove();
        return taskText;
    }
}

function addSpanErr(textErrorfoSpan) {

    const errorMessageBlock =
        `<span class = "error-message-block">
        ${textErrorfoSpan}
    </span>`;

    const elementError = document.querySelector('.error-message-block'); // Получаем элемент

    if (elementError) {
        elementError.innerText = textErrorfoSpan;
    } else {
        createTaskBlock.insertAdjacentHTML("beforeend", errorMessageBlock);
    }


}
archivTasks = tasks; //на "сохранение" новых данных
// #endregion

// #region Задание Dom2_Zad3


// #region Задание Dom2_Zad3

//сначала создадим dom  вторым способом
function outputModalWindow() {

    const ModalWindow = document.createElement("div");
    ModalWindow.classList.add("modal-overlay");
    ModalWindow.classList.add("modal-overlay_hidden");

    const DeleteModal = document.createElement("div");
    DeleteModal.classList.add("delete-modal");
    ModalWindow.append(DeleteModal);


    const DeleteModalQuestion = document.createElement("h3");
    DeleteModalQuestion.classList.add("delete-modal__question");
    DeleteModalQuestion.textContent = "Вы действительно хотите удалить эту задачу?";
    DeleteModal.append(DeleteModalQuestion);

    const DeleteModalButtons = document.createElement("div");
    DeleteModalButtons.classList.add("delete-modal__buttons");
    DeleteModal.append(DeleteModalButtons);

    const deleteModalButtonCancel = document.createElement("button");
    deleteModalButtonCancel.classList.add("delete-modal__button");
    deleteModalButtonCancel.classList.add("delete-modal__cancel-button");
    deleteModalButtonCancel.textContent = "Отмена";
    DeleteModalButtons.append(deleteModalButtonCancel);

    const deleteModalButtonDelete = document.createElement("button");
    deleteModalButtonDelete.classList.add("delete-modal__button");
    deleteModalButtonDelete.classList.add("delete-modal__confirm-button");
    deleteModalButtonDelete.textContent = "Удалить";
    DeleteModalButtons.append(deleteModalButtonDelete);

    tasksList.append(ModalWindow);
};
outputModalWindow(tasksList);


let taskToDelete;//задача для удаленя

// повесим обработчик на кнопкИ Удалить (в строке)
const buttonsDelete = document.querySelector(".tasks-list");
buttonsDelete.addEventListener("click", (event) => {
    const ourButtonDelete = event.target.closest(".task-item__delete-button");

    if (ourButtonDelete) {
        const taskForDelete = ourButtonDelete.closest(".task-item__main-container");
        if (taskForDelete)
            questDeleteTask(taskForDelete);
    }
});

function questDeleteTask(taskForDelete) {
    taskToDelete = taskForDelete; //запомним текущую задачу
    const modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay)
        modalOverlay.classList.remove("modal-overlay_hidden");

    //console.log(taskForDelete);
}

// повесим обработчик на кнопки Отмена (модально)
const buttonCancel = document.querySelector(".delete-modal__cancel-button");
buttonCancel.addEventListener("click", (event) => {
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.classList.add("modal-overlay_hidden");
});

// повесим обработчик на кнопки Удалить (модально)
const buttonDelete = document.querySelector(".delete-modal__confirm-button");
buttonDelete.addEventListener("click", (event) => {
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.classList.add("modal-overlay_hidden");

    DeleteTask();
});

function DeleteTask() {
    //console.log(taskToDelete);
    if (taskToDelete) {
        taskToDelete.closest(".task-item").remove();
        taskToDelete = null;
    }
}

// #endregion


// #region Задание Dom2_Zad4

document.addEventListener("keydown", (event) => {
    const tab = event.key;

    if (tab === "Tab") {
        event.preventDefault();

        const body = document.querySelector("body");
        let isDark = body.dataset.theme === "dark";

        const tasks = document.querySelectorAll(".task-item");
        const buttons = document.querySelectorAll("button");

        if (isDark) {
            body.style.background = 'initial';
            tasks.forEach(task => task.style.color = 'initial');
            buttons.forEach(task => task.style.border = 'none');
            body.dataset.theme = "notdark";
        }
        else {

            body.style.background = '#24292E';
            tasks.forEach(task => task.style.color = '#ffffff');
            buttons.forEach(task => task.style.border = '1px solid #ffffff');

            body.dataset.theme = "dark";
        }

    }
});


// #endregion


// #region Dom2_DopZadanie

class CustomSelect {
    constructor(id, options) {
        this.id = id;
        this.options = options;
    };

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

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('123', options);
//const mainContainer = document.querySelector('#container'); // нет такого 
const mainContainer = document.querySelector('.tasks-list');
customSelect.render(mainContainer);


// const openclose = document.querySelector("select-dropdown__button");
// openclose.addEventListener("click", () => {
//     //Список открыт, когда у элемента с тегом <ul> есть класс "active"
//     const ulSelectDropdown = querySelector("select-dropdown__list");
//     if (ulSelectDropdown.classList.contains("active")) {
//         console.log('открыт');
//     }
//     else {
//         console.log('закрыт');
//     }
// })

// #endregion