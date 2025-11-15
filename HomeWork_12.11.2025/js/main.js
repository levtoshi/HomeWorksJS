// 1
// const btn = document.getElementById("click_btn");
// const infoContainer = document.getElementById("info_container");

// function WriteMouseInfo(event)
// {
//     infoContainer.textContent = `Event: ${event.type}\nTarget: ${event.target.tagName}\nCoordinates: ${event.clientX}, ${event.clientY}\n`;
// }

// function WriteKeyboardInfo(event)
// {
//     infoContainer.textContent = `Event: ${event.type}\nKey:${event.key}\n`;
// }

// function WriteTimeInfo()
// {
//     infoContainer.textContent += `Time: ${new Date().toLocaleTimeString()}\n`;
// }

// function RandomBackground()
// {
//     btn.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
// }


// btn.addEventListener('click', (event) =>
// {
//     WriteMouseInfo(event);
//     WriteTimeInfo();
// });

// btn.addEventListener('dblclick', (event) =>
// {
//     RandomBackground();
//     WriteMouseInfo(event);
//     WriteTimeInfo();
// });

// btn.addEventListener('contextmenu', (event) =>
// {
//     event.preventDefault();
//     WriteMouseInfo(event);
//     WriteTimeInfo();
// });

// document.addEventListener('keydown', (event) =>
// {
//     WriteKeyboardInfo(event);
//     WriteTimeInfo();
// });

// ------------------------------------------------------------------------------------------------------

// 2
// function Car(brand, model, year)
// {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }

// Car.prototype.displayInfo = function()
// {
//     console.log(`Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`);
// };

// Car.prototype.drive = function()
// {
//     console.log("Move started!");
// }

// const cars =
// [
//     new Car("Bugatti", "Chiron", 2024),
//     new Car("Porsche", "911", 2022),
//     new Car("Mercedes-Benz", "Maybach", 2025)
// ];

// for (car of cars)
// {
//     car.displayInfo();
//     car.drive();
// }

// ------------------------------------------------------------------------------------------------------

// 3
// class Student
// {
//     constructor(name, age, grade)
//     {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }

//     study()
//     {
//         console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}\n`);
//     }
// }

// const students =
// [
//     new Student("Oleg", 17, 89),
//     new Student("Oksana", 17, 71),
//     new Student("Vika", 17, 68),
//     new Student("Taras", 18, 86),
//     new Student("Artur", 18, 95),
// ];

// for (student of students)
// {
//     student.study();
// }

// ------------------------------------------------------------------------------------------------------

// 4
// class Book
// {
//     constructor(title, author, year)
//     {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     displayInfo()
//     {
//         console.log(`Title: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}\n`);
//     }
// }

// const books =
// [
//     new Book("Alpha", "Iota", 1989),
//     new Book("Beta", "Zeta", 1971),
//     new Book("Gamma", "Mu", 1968)
// ];

// for (book of books)
// {
//     book.displayInfo();
// }

// ------------------------------------------------------------------------------------------------------

// 5
// class Shape
// {
//     constructor(color)
//     {
//         this.color = color;
//     }

//     countArea() {}
//     countPerimeter() {}
// }

// class Circle extends Shape
// {
//     constructor (color, radius)
//     {
//         super(color);
//         this.radius = radius;
//     }

//     countArea()
//     {
//         return (Math.PI * (this.radius * this.radius));
//     }

//     countPerimeter()
//     {
//         return (2 * Math.PI * this.radius)
//     }
// }

// class Rectangle extends Shape
// {
//     constructor (color, sideA, sideB)
//     {
//         super(color);
//         this.sideA = sideA;
//         this.sideB = sideB;
//     }

//     countArea()
//     {
//         return (this.sideA * this.sideB);
//     }

//     countPerimeter()
//     {
//         return (2 * (this.sideA + this.sideB));
//     }
// }

// const shapes =
// [
//     new Rectangle("black", 2, 3),
//     new Circle("white", 3)
// ];

// for (shape of shapes)
// {
//     console.log(shape.countArea());
// }