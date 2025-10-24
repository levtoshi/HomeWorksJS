// 1
// function compare(n1, n2)
// {
//     if (n1 < n2)
//     {
//         return -1;
//     }
//     else if (n1 > n2)
//     {
//         return 1;
//     }
//     else
//     {
//         return 0;
//     }
// }

// console.log(compare(1,2));

// 2
// function countS(a, b = 0)
// {
//     if (b == 0)
//     {
//         return a * a;
//     }
//     return a * b;
// }

// console.log(countS(7));

// 3
// function createStr(a, b, c)
// {
//     return (String)(a) + b + c;
// }

// console.log(createStr(1,2,3));

// 4
// function reSumOfDigits(n)
// {
//     let sum = 0;
//     let digits = String(n).split('');
    
//     for (digit of digits)
//     {
//         sum += (Number)(digit);
//     }

//     return sum;
// }

// console.log(reSumOfDigits(123));

// 5
// function calculate(a, b, operator)
// {
//     if (operator == '/' && b === 0)
//     {
//         return "Cannot devide by 0!";
//     }

//     switch (operator)
//     {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return a / b;
//         default:
//             return "Incorrect operator!";
//     }
// }

// console.log(calculate(1,2,'+'));

// 6
// function average(...numbers)
// {
//     let sum = 0;
    
//     for (number of numbers)
//     {
//         sum += number;
//     }

//     return sum / numbers.length;
// }

// console.log(average(1,2,3));

// 7
// function isEven(n)
// {
//     return (n % 2) ? "Odd" : "Even";
// }

// console.log(isEven(7));

// 8
// function sumTo(n)
// {
//     return (n != 1) ? sumTo(n - 1) + n : n;
// }

// console.log(sumTo(10));


// 9
// function repeatString(str, times)
// {
//     let re = "";
//     for (let i = 0; i < times; ++i)
//     {
//         re += str + ' ';
//     }
//     return re;
// }

// console.log(repeatString("Hi!", 3));

// 10
// function isTriangle(a, b, c)
// {
//     return ((a + b) > c) && ((a + c) > b) && ((b + c) > a);
// }

// console.log(isTriangle(3,4,5));