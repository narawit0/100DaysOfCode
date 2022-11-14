> The well-known Symbol.iterator symbol specifies the default iterator for an object. Used by for...of.

Symbol.iterator ก็คือ Interface ที่สามารถ implement เข้าไปใน object ใดๆ ก็ได้ เพื่อที่จะทำให้ object นั้นสามารถ ใช้ for...of loop เพื่อแสดงค่าออกมา โดยจำเป็นที่จะต้อง implement method next() เพื่อที่จะแสดงค่าถัดไป method next() ควรจะ return ค่าออกมาสองตัวก็คือ value และ done ถ้า done เป็น true แปลว่า ไม่มีค่าต่อจากนี้แล้วให้จบการทำงานได้เลย

ยกตัวอย่าง สมมติเรามี object ตัวนึง แล้วเราต้องการที่จะ loop มัน โดยปกติแล้วจะทำไม่ได้ มันจะแจ้ง error ออกมาว่า TypeError: range is not iterable
```
    let range = {
        from: 1,
        to: 5
    }

    for (let item of range) {
        console.log(item);
    }
```

เราจึงจำเป็นต้องทำการ implement iterator interface ก่อน
```
    let range = {
        from: 1,
        to: 5
    }

    range[Symbol.iterator] = function() {
        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++};
                } else {
                    return { done: true};
                }
            }
        }
    }

    for (let item of range) {
        console.log(item); // 1,2,3,4,5
    }
```