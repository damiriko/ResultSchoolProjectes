const URL = "https://jsonplaceholder.typicode.com/users";


fetch(URL)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Ошибка запроса");
        }
        return response.json();
    })
    .then((data) => {
        addUser(data);

    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    });



function addUser(users) {

    for (let user of users) {
        console.log(user);
        const dataContainer = document.getElementById("data-container");
        const newUser = document.createElement("li");
        newUser.innerHTML = `<li><a href="#">${user.username}</a></li>`;
        dataContainer.append(newUser);

    }


}