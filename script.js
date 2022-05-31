// jshint esversion: 6
// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}`;
}
sayHello('Антон');

// Место для второй задачи
function returnNeighboringNumbers(n) {
    return [n - 1, n, n + 1];
}

returnNeighboringNumbers(6);


// Место для третьей задачи
function getMathResult(number, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return number;
    }
    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${number * i}`;
        } else {
            str += `${number * i}---`;
        }
    }
    console.log(str);
    return str;
}
getMathResult(5, 10);

// 1.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2.
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

// 3.

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// 4.

const array = [];
for (let i = 0; i < 10; i++) {
    array[i] = 'x';
}
console.log(array);

// 5.

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 6.

// const randomNumber = [];
// for(let i = 0; i < 10; i++) {
//     console.log(Math.random(randomNumber[i]).toFixed(2));
// }


// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr.push(Math.random().toFixed(2));
// }
// console.log(arr);


// 7.
const randomNumber = [];
for (let i = 0; i < 10; i++) {
    console.log(Math.round(Math.random(randomNumber[i]) * 10 + 1));
}

