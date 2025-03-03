import { getRandomColor } from './utils';

export default function initApp() {
    console.log('add button');

    // <button class="button">Изменить цвет страницы</button>
    const body = document.querySelector("body");

    const myButton = document.createElement("button");
    myButton.classList.add("button");
    myButton.innerText = "Изменить цвет страницы";
    body.append(myButton);

    myButton.addEventListener("click", () => {
        body.style.background = getRandomColor();
    })

}



