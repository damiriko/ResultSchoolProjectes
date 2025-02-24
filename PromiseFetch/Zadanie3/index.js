const URL = 'https://api.slingacademy.com/v1/sample-data/photos';

function createElementPhoto(photo) {

    const dataContainer = document.getElementById("data-container");
    const newPhoto = document.createElement("li");
    newPhoto.classList.add("photo-item");

    const img = document.createElement("img");
    img.classList.add("photo-item__image");
    img.src = photo.photo.url;

    const h3 = document.createElement("h3");
    h3.classList.add("photo-item__title");

    h3.innerText = photo.photo.title;
    newPhoto.append(img);
    newPhoto.append(h3);
    dataContainer.append(newPhoto);

}

function getFastestLoadedPhoto(ids) {
    const requests = ids.map((id) => fetch(`${URL}/${id}`));

    Promise.race(requests)
        .then(response => response.json())
        .then(foto => createElementPhoto(foto))
        .finally(() => {
            const loader = document.getElementById("loader");
            loader.style.display = "none";
        });
}

getFastestLoadedPhoto([60, 12, 55]);