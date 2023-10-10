const btnUsers = document.getElementById('cliUsers');
const btnImages = document.getElementById('cliAlbums');

async function readUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

async function readAlbums() {
    const results = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    const info = await results.json();
    return info;
}

/* const printUsers = async () => {
    const users = await readUsers();
    let plantilla = '';
    users.forEach((per) => {
        plantilla += `<h2>${per.name}</h2>`
    });

    content.innerHTML = plantilla;
} */

btnUsers.addEventListener('click', async (e) => {
    e.preventDefault();
    const users = await readUsers();
    const content = document.getElementById('u');
    let plantilla = '';
    users.forEach((per) => {
        plantilla += `<h2>${per.name}</h2>`;
    });
    content.innerHTML = plantilla;
})

btnImages.addEventListener('click', async (e) => {
    e.preventDefault();
    const images = await readAlbums();
    const get = document.getElementById('p');
    let tables = '';
    images.forEach((i) => {
        tables += `<img src="${i.url}" alt="${i.title}">`;
    });
    get.innerHTML = tables;
});