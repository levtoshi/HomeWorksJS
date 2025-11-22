function randomTime()
{
    return Math.ceil(Math.random() * 3) * 1000;
}

function loadImages()
{
    return new Promise((resolved, reject) =>
    {
        setTimeout(() =>
        {
            resolved("Images loaded!");
        }, randomTime());
    });
}

function loadProducts()
{
    return new Promise((resolved, reject) =>
    {
        setTimeout(() =>
        {
            resolved("Products loaded!");
        }, randomTime());
    });
}

function loadUsers()
{
    return new Promise((resolved, reject) =>
    {
        setTimeout(() =>
        {
            resolved("Users loaded!");
        }, randomTime());
    });
}

// Поступово
// loadImages().then((resolvedRes) =>
// {
//     console.log(resolvedRes);
//     loadProducts().then((resolvedRes) =>
//     {
//         console.log(resolvedRes);
//         loadUsers().then((resolvedRes) => console.log(resolvedRes));
//     });
// });

// Одночасно
// Promise.all([loadImages(), loadProducts(), loadUsers()])
// .then((values) =>
// {
//     console.log(values);
// })