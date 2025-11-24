// 1
// async function AsyncFetch() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     data.forEach(user =>
//     {
//         console.log(`User name: ${user.name}`);
//     });
// }

// AsyncFetch();

// 2
// async function AsyncFetch() {
//     const listElement = document.querySelector('.list');

//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();

//     data.forEach(post =>
//     {
//         const li = document.createElement('li');
//         li.textContent = `Post title: ${post.title}`;
//         listElement.appendChild(li);
//     });
// }

// AsyncFetch();

// 3
// async function AsyncFetch() {
//     const postObj = 
//     {
//         title: "My first post",
//         body: "Hello world!",
//         userId: 1
//     };

//     const response = await fetch("https://jsonplaceholder.typicode.com/posts",
//     {
//         method: "POST",
//         body: JSON.stringify(postObj)
//     });
//     const data = await response.json();
    
//     console.log(data);
// }

// AsyncFetch();

// 4
async function AsyncFetch() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    
    renderProducts(data);
}

function renderProducts(products) {
    const container = document.querySelector(".container");
    products.forEach( product => {
        container.innerHTML += `
        <div class="card">
            <div class="title">${product.title}</div>
            <img src="${product.image}" alt="${product.title}-image">
            <div class="price">${product.price}</div>
        </div>
        `
    });
}

AsyncFetch();