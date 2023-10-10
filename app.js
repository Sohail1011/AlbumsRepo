const btnUsers = document.getElementById('cliUsers');


async function readUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
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