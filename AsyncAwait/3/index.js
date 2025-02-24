const URL = "https://jsonplaceholder.typicode.com/albums";

function createOneElementOfAlbom(photo) {

    const dataContainer = document.getElementById("data-container");

    const title = document.createElement("li");
    title.innerText = photo.title;

    dataContainer.append(title);
}

function outputError(textError) {
    const error = document.getElementById("data-container");
    error.innerText = textError;

}

const renderAlbums = async () => {

    try {
        response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Ошибка`);
        }
        const NamesPhotos = await response.json();


        for (const NamePhoto of NamesPhotos) {
            createOneElementOfAlbom(NamePhoto);
        }

    } catch {
        const textError = "Произошла ошибка в получении данных об альбомах...";
        outputError(textError);
    }

    const loader = document.getElementById("loader");
    loader.style.display = "none";

}

renderAlbums();