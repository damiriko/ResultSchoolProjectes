// #region условие
const textForm =
    `<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>`;

const newBody = document.querySelector('body');
// #endregion

// #region 1 способ 
newBody.innerHTML = textForm;
// #endregion

// #region 2 способ
newBody.innerHTML += `</br></br></br> <b>второй способ</b> </br></br>`;


const newForm = document.createElement('form');
newForm.className = "create-user-form";

//---------
const labelNameUser = document.createElement('label');
labelNameUser.textContent = "Имя";

const inputNameUser = document.createElement('input');
inputNameUser.type = "text";
inputNameUser.name = "userName";
inputNameUser.placeholder = "Введите ваше имя";
labelNameUser.append(inputNameUser);
newForm.append(labelNameUser);

const labelPassword = document.createElement('label');
labelPassword.textContent = "Пароль";

const inputPassword = document.createElement('input');
inputPassword.type = "password";
inputPassword.name = "password";
inputPassword.placeholder = "Придумайте Пароль";
labelPassword.append(inputPassword);
newForm.append(labelPassword);

const button = document.createElement('button');
button.textContent = "Подтвердить";
button.type = "submit";
newForm.append(button);

newBody.append(newForm);
// #endregion