// #region условие
const tasksList = document.querySelector('.tasks-list');

const tasks = [
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
// #endregion


// #region Lesson
function getOurDiv(id, completed, text) {

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


for (let el of tasks) {

    id = String(el.id);
    completed = String(el.completed);
    text = String(el.text);

    tasksList.insertAdjacentHTML("beforeend", getOurDiv(id, completed, text));
}

// #endregion