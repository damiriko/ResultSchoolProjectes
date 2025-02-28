'use strict';

console.log('Hello World!');

const body = document.querySelector("body");

const textH1 = document.createElement('h1');
textH1.innerText = "I love JavaScript";
body.append(textH1);

const imageJS = document.createElement('img');
imageJS.src = "/assets/JS_img.jpg";
imageJS.classList.add("our-image");
body.append(imageJS);
