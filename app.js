const btnUsers = document.getElementById('cliUsers');


async function readUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

btnUsers.addEventListener('click', (e) => {

})