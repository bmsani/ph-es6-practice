function loadData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

function displayPost(data) {
  const parentDiv = document.getElementById("postsection");

  for (const post of data) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<h1> ${post.title} </h1>
    <p>${post.body}</p>`;
    parentDiv.appendChild(postDiv);
  }
}

