> The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

อธิบาย เราจะใช้ new operator ก็ต่อเมื่อเราต้องการที่จะสร้าง instance ของ object ที่เราถูกสร้างขึ้น หรือ built-in object ที่มี constructor function โดยทั่วไปแล้วสิ่งที่เราคุ้นชินกันอาจจะเป็นการใช้ `new` กับ Class ต่างๆ

```
class Cat {
    constructor(color) {
        this.color = color;
    }

    printColor() {
        console.log(this.color);
    }
}

const blackCat = new Cat('black');
```

ตามตัวอย่างข้างต้น น่าจะเป็นสิ่งที่เห็นได้ทั่วในภาษา JS และภาษาอื่นๆ ในที่นี้เราจะมาพูดถึงในภาษา JS ก็คือเราสามารถจะสร้าง Instance จาก function ปกติได้ โดยถ้าตามหลักแล้วเมื่อ function นั้นขึ้นตัวด้วยตัวพิมพ์ใหญ่ ก็จะมองได้ว่า function นั้นทำหน้าที่เป็น contructor นั่นเอง แต่โดยทั่วไปแล้ว function ใน javascript ก็สามารถใช้เป็น contructor ได้อยู่แล้วเพียงแค่ใส่ keyword `new` ไปข้างหน้ามัน ตามตัวอย่างดังต่อไปนี้
```
function Cat(color) {
    this.color = color;
}

Cat.prototype.printColor = function() {
    console.log(this.color);
}

const blackCat = new Cat('black');
```

## ขั้นตอนเมื่อ new operator ทำงาน

โดยถ้าตามหลักแล้ว function ที่ทำหน้าที่เป็น contructor จะมี property name ที่ชื่อว่า prototype และมีค่าเป็น plain empty object ที่ได้มาจาก Object.prototype

1. สร้าง plain empty object เราจะเรียกมันว่า newInstance
2. point [[Prototype]] property ของ newInstance ไปที่ property prototype ของ constructor function
3. จากนั้นทำการ execute constructor function ด้วย arguments ต่างๆที่ใส่เข้ามา และทำการ biding newInstance ด้วย this context (this keyword ใน constructor จะอ้างถึง newInstance)
4. ทำการ return newInstance ในกรณีที่ constructor ไม่มีการ return ค่าใดๆ ออกมา (โดยปกติแล้ว contructor จะไม่ return ค่าใดๆ ออกมา)


![Visual Guide](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-Person-prototype.svg)