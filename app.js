function showUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => loadData(data));
}

function loadData(data){
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} 
         email: ${user.email}`;
        ul.appendChild(li);
    }
}