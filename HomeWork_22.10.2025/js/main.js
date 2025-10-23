// 1
// let secondsInMinute = 60;
// let secondsInHour = secondsInMinute * 60;
// let secondsInDay = secondsInHour * 24;
// let secondsInMonth = secondsInDay * 3;

// console.log("Seconds in hour: ", secondsInHour);
// console.log("Seconds in day: ", secondsInDay);
// console.log("Seconds in month: ", secondsInMonth);

// 2
// const usdToUah = 41.8;
// let usdAmount = prompt("Enter amount of usd: ");
// let uahAmount = usdAmount * usdToUah;

// alert(`Amount of uah: ${uahAmount}\nAmount of usd: ${usdAmount}`);

// 3
// let x = 1;
// let y = 2;
// let res1 = x + String(y);

// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = Boolean(x) + String(y);
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = Boolean(x) && Boolean(y);
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// 4
// for (let i = 1; i < 100; ++i)
// {
//     if (i % 3 == 0)
//     {
//         console.log(i);
//     }
// }

// 5
// let str = prompt("Enter string: ");

// for (let i = (str.length - 1); i >= 0; --i)
// {
//     console.log(str[i]);
// }

// 6
// let num;
// while (true)
// {
//     num = prompt("Enter num bigger than 100:");
//     if (num > 100 || num === null)
//     {
//         break;
//     }
// }

// 7
// const number = +prompt('Введіть число з діапазону від 0 до 3', '');

// switch(number)
// {
//     case 0:
//         alert('Ви ввели число 0');
//         break;
//     case 1:
//         alert('Ви ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Ви ввели число 2 або 3');
//         break;
// }