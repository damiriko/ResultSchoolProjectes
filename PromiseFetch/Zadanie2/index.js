const URL = "https://jsonplaceholder.typicode.com/users";

function addUser(user) {

    const dataContainer = document.getElementById("data-container");
    const newUser = document.createElement("li");
    newUser.innerHTML = `<li><a href="#">${user.username}</a></li>`;
    dataContainer.append(newUser);

}

function getUsersByIds(arrayIDUsers) {
    const requests = arrayIDUsers.map((id) => fetch(`${URL}/${id}`));

    Promise.all(requests)
        .then(responses => {
            const dataresults = responses.map(response => response.json());
            return Promise.all(dataresults);
        })
        .then(users => {
            console.log(users);
            users.forEach((user) => { addUser(user) });
        })
        .finally(() => {
            const loader = document.getElementById("loader");
            loader.style.display = "none";
        });
}

getUsersByIds([5, 6, 2, 1]);
