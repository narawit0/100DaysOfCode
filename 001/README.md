# Day 1 - Higher-Order Functions (HOF)

> Higher-Order Functions คือ function ที่รับ argument เป็น function หรือมี return result เป็น function

```
function echo(message, callBack) {
    return callBack(message);
}

function helloWorld(name) {
    return `Hello world, ${name}.`;
}

function helloAlien(name) {
    return `Hello Alien from ${name}.`;
}

console.log(echo('Tony', helloWorld)); // Hello world, Tony.
console.log(echo('Elon', helloAlien)); // Hello Alien from Elon.
```
จากตัวอย่างข้างต้น echo function ทำหน้าที่เป็น Higher-Order function และ return ผลลัพธ์ จาก function ที่รับเข้าไป ประโยชน์อีกอย่างนึงของ HOF คือ absctraction repitition ก็คือ function ที่ทำหน้าเป็น HOF มีการทำซ้ำๆรูปแบบเดิม แต่ logic ต่างๆของ function ที่เราใส่เข้าไปเป็น paramerter มีการเปลี่ยนแปลงได้ ทำให้ code มีความ dynamic มากขึ้น

ยกตัวอย่างง่ายๆ
```
const arr = [1,2,3,4,5];

const multiplyByTwo = num => num * 2;
const plusOne = num => num + 1;

console.log(arr.map(multiplyByTwo)); // [2,4,6,8,10]
console.log(arr.map(plusOne)); // [2,3,4,5,6,7]
```