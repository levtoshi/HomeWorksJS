// 1
// const funcReturn =
// {
//     min : 0,
//     max : 0
// }

// function findMaxAndMinElementInArray(arr)
// {
//     funcReturn.min = Math.min(...arr);
//     funcReturn.max = Math.max(...arr);
// }
// console.log(funcReturn.min, funcReturn.max);
// findMaxAndMinElementInArray([1,7,2,4]);
// console.log(funcReturn.min, funcReturn.max);

// 2
// let x1 = 3, y1 = 4, x2 = 7, y2 = 1;

// function countLength(x1, y1, x2, y2)
// {
//     return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
// }

// console.log(countLength(x1, y1, x2, y2));

// 3
// function convertDate(oldDateFormat)
// {
//     let date = new Date(oldDateFormat);
//     return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear().toString().padStart(2, "0")}`;
// }

// console.log(convertDate("2025-09-29"));

// 4
// function cutString(cuttingAmount, str)
// {
//     return (str.length <= cuttingAmount) ? str : (str.slice(0, cuttingAmount - 3) + "...");
// }

// console.log(cutString(20, "Це дуже довгий рядок, який потрібно обрізати."));

// 5
// let userStr = prompt("Enter string:");

// function cutSpaces(str)
// {
//     return str.trim().split(" ").filter(el => el).join(" ");
// }

// console.log(cutSpaces(userStr));

// 6
// function cssToCamelCase(str)
// {
//     let strArr = str.split("-");
//     for (let i = 1; i < strArr.length; ++i)
//     {
//         strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
//     }
//     return strArr.join("");
// }

// console.log(cssToCamelCase("text-alignment"));
// console.log(cssToCamelCase("text-alignment-good"));

// 7
// function firstCharToUpper(str)
// {
//     let strArr = str.split(" ");

//     for (let i = 0; i < strArr.length; ++i)
//     {
//         strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
//     }

//     return strArr.join(" ");
// }

// console.log(firstCharToUpper("i love java script"));

// 8
let newYear = new Date("2026-01-01T00:00:00");

let countdownDays;
let countdownHours;
let countdownMinutes;
let countdownSeconds;

let diffMilliseconds = 0;

function updateTimer()
{
    let diffMilliseconds = newYear - Date.now();

    let countdownDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
    let countdownHours = Math.floor((diffMilliseconds / (1000 * 60 * 60)) % 24);
    let countdownMinutes = Math.floor((diffMilliseconds / (1000 * 60)) % 60);
    let countdownSeconds = Math.floor((diffMilliseconds / 1000) % 60);

    document.getElementById('days').textContent = String(countdownDays).padStart(2, "0");
    document.getElementById('hours').textContent = String(countdownHours).padStart(2, "0");
    document.getElementById('minutes').textContent = String(countdownMinutes).padStart(2, "0");
    document.getElementById('seconds').textContent = String(countdownSeconds).padStart(2, "0");
}

setInterval(updateTimer, 1000);