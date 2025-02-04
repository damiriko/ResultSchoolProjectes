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

tasksList.insertAdjacentHTML("afterend", textButtonAddTask);
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
    const taskText = event.target.querySelector('.create-task-block__input').value.trim();
    const oldText = event.target.querySelector('.create-task-block__input').defaultValue;

    if (taskText === '' || taskText === oldText) return;

    newTask = {
        id: Date.now().toString(),
        completed: false,
        text: taskText,
    };

    addServiceField(newTask);
}

archivTasks = tasks; //на "сохранение" новых данных
// #endregion