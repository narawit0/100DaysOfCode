# Day 2 - JS Object Prototypes

> Object Prototypes เป็นกลไกในการ inherit features หรือ methods ต่างๆ จาก Object หรือ ตัวแปร ที่ถูกสร้างขึ้น โดยอัตโนมัติ

สมมติเราประกาศ function ขึ้นมา

```
function sum(a, b) {
    return a + b;
}
console.log(sum.toString());

// function sum(a, b) {
//    return a + b;   
// }
```


เราประกาศ function sum ขึ้นมาแล้วเรียกใช้ `toString` method ทั้งๆที่ไม่ได้ประกาศไว้ นั่นคือสิ่งที่เรียกว่า Object Prototypes

อธิบายวิธีการทำงานคร่าวๆ เมื่อ object หรือตัวแปรต่างๆ ถูกสร้างขึ้นจะมี property ที่ชื่อว่า prototype แปะมาด้วยเสมอ และ ในที่นี่ prototype นั้นก็มี method ที่เรียกว่า `toString` จึงทำให้เราสามารถเรียกใช้ method ตัวนั้นได้ ทำให้ function sum ของเราสามารถ print ออกมาเป็น string ได้นั่นเอง

## จำลองการาสร้าง Prototype

```
const prototype1 = {
    greet() {
        console.log(`Hello world, ${this.name}`);
    }
}

const obj1 = Object.create(prototype1);
obj1.name = 'Tony';

obj1.greet(); // Hello world,Tony
```


เราได้ทำการสร้าง obj1 ด้วย prototype1 ทำให้ obj1 ที่เราสร้างขึ้นมานั้นสามารถเรียกใช้ method ใน prototype1 ได้ คล้ายๆกับการทำงานเบื้องหลังของการเรียกใช้ method toString จากตัวอย่างข้างบน


## สรุป
>Opbject prototypes เป็นเหมือน object หนึ่งที่เก็บค่าของ methods ต่างๆเอาไว้ โดยที่เราสามารถเรียกใช้ methods นั้นๆที่อยู่ในแต่ละ prototype object ที่ตัวแปรนั้นสร้างขึ้นมา
