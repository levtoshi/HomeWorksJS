// 1
// function findUnique(arr)
// {
//     for (let i = 0; i < arr.length; ++i)
//     {
//         for (let j = 0; j < arr.length; ++j)
//         {
//             if (i !== j && arr[i] === arr[j])
//             {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));
// console.log(findUnique([1, 2, 3, 5, 1]));

// 2
// const shoppingList = 
// [
//     {name: "Banana", quantity: 5, purchased: true},
//     {name: "Apple", quantity: 10, purchased: false},
//     {name: "Coconut", quantity: 29, purchased: true},
//     {name: "Beans", quantity: 100, purchased: true},
//     {name: "Watermelon", quantity: 50, purchased: false},
//     {name: "Lemon", quantity: 20, purchased: true},
//     {name: "Orange", quantity: 23, purchased: false},
//     {name: "Grape", quantity: 15, purchased: true}
// ];

// function outputArray()
// {
//     let copyArr = shoppingList.slice().sort((a, b) => (a.purchased && !b.purchased) ? 1 : -1);

//     copyArr.forEach((element, index, array) =>
//     {
//         console.log(`${index + 1}. Name: ${element.name}, Quantity: ${element.quantity}, Purchased: ${element.purchased}`);
//     });
// }

// function addProduct(nameVal, quantityVal)
// {
//     let found = shoppingList.find(el => el.name === nameVal);
    
//     if (typeof(found) != "undefined")
//     {
//         found.quantity += quantityVal;
//     }
//     else
//     {
//         shoppingList.push({name: nameVal, quantity: quantityVal, purchased : false});
//     }
// }

// function markAsPurchased(nameVal)
// {
//     let found = shoppingList.find(el => el.name === nameVal);
    
//     if (typeof(found) != "undefined")
//     {
//         found.purchased = true;
//     }
// }

// addProduct("Orange", 7);
// markAsPurchased("Orange");
// outputArray();

// 3
// let products =
// [
//     {name: "Phone", price: 500, category: "Electronics"},
//     {name: "Laptop", price: 1000, category: "Electronics"},
//     {name: "Book", price: 20, category: "Books"},
//     {name: "Shoes", price: 80, category: "Fashion"}
// ];

// let userCategory = prompt("Enter category:");
// let filteredProducts = products.filter(p => p.category === userCategory);

// console.log(filteredProducts);

// 4
// let students =
// [
//     {name: "John", grades: {math: 90, english: 85, science: 95}},
//     {name: "Alice", grades: {math: 95, english: 88, science: 92}},
//     {name: "Bob", grades: {math: 80, english: 75, science: 85}}
// ];

// let tempSum = 0;

// for (student of students)
// {
//     for (grade in student.grades)
//     {
//         tempSum += student.grades[grade];
//     }
//     student.averageGrade = tempSum / 3;
//     tempSum = 0;
// }

// console.log(students);