// 1
// function isValidURL(inputString) {
//   const combinedRegex = /^(?:(http|https|ftp):\/\/.*|\[[^\]]*\]\((http|https|ftp):\/\/([^\s\)]+)\))$/;

//   return combinedRegex.test(inputString);
// }

// // Приклади використання
// let url1 = "[https://www.example.com](https://www.example.com)";
// let url2 = "ftp://fileserver/documents";
// let url3 = "invalid-url";
// let url4 = "[http://example.com](http://example.com)";

// console.log(isValidURL(url1)); // true
// console.log(isValidURL(url2)); // true
// console.log(isValidURL(url3)); // false
// console.log(isValidURL(url4)); // true

// 2
import { Modal } from "./modal.js";

function register(formData)
{
  alert("Registration successful!!!");
}

function app()
{
    const modal = new Modal();
    modal.onSubmit = register;

    const btnCreate = document.getElementById("btnRegister");

    btnCreate.addEventListener("click", () =>
    {
        modal.open();
    })
}

document.addEventListener("DOMContentLoaded", app);