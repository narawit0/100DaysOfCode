> Regular expression is a sequence of characters that specifies a search pattern in text

อธิบายก็คือสมมติเราจะต้อง search pattern ที่เราต้องการใน text หรือ string เพื่อที่จะเปลี่ยนแปลงค่าของ string ที่่เราเสิชเจอ หรือ เช็คว่าถ้า string นั้นผ่านเงื่อนไขที่เราต้องการให้ทำอะไรสักอย่าง regex ถือว่าเป็นเครื่องมือตัวนึงที่เราสามารถนำมาใช้ในการแก้ปัญหานี้ได้

ใน Javascript เราสามารถประกาศ regex ได้ 2 วิธี 
```
let re1 = new RegExp("abc");
let re2 = /abc/;
```

ทั้งสองตัวแปรข้างต้นทำสิ่งเดียวกัน ก็คือ เช็คว่า string นั้น มีตัวอักษร abc หรือไม่

ใน regex plus sign (+) และ question mark (?) มีความหมายพิเศษในการที่จะนำมาใช้งานกับ regex ถ้าเราต้องการ search pattern ของ string ที่เราเป็นต้องมีเครื่องหมายข้างต้นให้เราทำการใช้ backslash (\) เป็นตัวคั่น 

```
let myRe = /abc\+/;
```

ในกรณีนี้ก็คือเราต้องการที่จะ match string ที่เท่ากับ abc+ นั่นเอง

คราวนี้เมื่อเราได้ pattern ในการ search string แล้ว เราจะรู้ได้ยังไงว่า string หรือ text อันนั้น match pattern ที่เราสร้างขึ้นมาจริงๆ โดยเราสามารถใช้ method test ได้ ซึ่งค่าที่ return กลับมาจะเป็น true หรือ false ในกรณีที่ match จะ return true และ ถ้าไม่ match จะ return false

```
let re = /abc/;

console.log(re.test("abc")); // true
console.log(re.test("abcde")); // true
console.log(re.test("acb")); // false
```

จะสังเกตุได้ว่าถ้า string ที่เรานำมาทดสอบนั้นตรงกับ pattern ของ regex ที่เราสร้างขึ้นมาจะ return ค่า true กลับมา 

แต่ทำไม "abcde" ถึง return true เหมือนกัน นั่นเป็นเพราะว่า regex pattern ที่เราสร้างขึ้นมานั้นไม่ได้ระบุว่า string จะต้องเป็นแค่ abc เท่านั้น แต่ถ้าเกิดใน string นั้นมี abc ก็ถือว่า match pattern ทั้งหมด

## Sets of characters
สมมติว่าเราต้องการจะ match string อะไรก็ได้ที่มี ตัวอักษรตั้งแต่ a ถึง d เราสามารถเขียนได้โดยการใช้ bracket เข้ามาช่วย ยกตัวอย่าง

```
let myRe = /[a-d]/;
console.log((myRe.test("abcde"))) // true
console.log((myRe.test("ab"))) // true
console.log((myRe.test("efgh"))) // false
```

หรือในกรณีของตัวเลขก็สามารถทำได้เช่นกัน

```
let myRe = /[0-9]/;
console.log((myRe.test("i was born in 1995"))) // true
```

### built-in shortcuts
ใน regex จะมี built-in shortcuts มาให้สำหรับ pattern ต่างๆที่เราใช้ประจำ

- \d Any digit character (ตัวเลขใดๆก็ตาม ตั้งแต่ 0-9)
- \D A character that is not a digit (แมชทุกอย่างที่ตรงกันข้ามกับ \d เหมือนกับ [^0-9])
- \w An alphanumeric character (แมชทุกอย่างที่เป็น word และ single letter เหมือนกับ [a-zA-Z0-9_])
- \W A nonalphanumeric character (แมชทุกอย่างที่ตรงกันข้ามกับ \w เหมือนกับ [^a-zA-Z0-9_])
- \s Any WhiteSpace character (space, tab, newline and similar เหมือนกับ [ \t\n\r\f])
- \S A nonwhite space character (แมชทุกอย่างที่ตรงกันข้ามกับ \s เหมือนกับ [^ \t\n\r\f])
- . Any character except for newline (อะไรก็ตามที่ไม่ใช่การขึ้นบรรทัดใหม่)

ในที่เกริ่นมาข้างบนอาจจะเป็น caret (^) เราจะใช้เพื่อ invert pattern ของเรานั่นเอง

```
let myRe = /[^0-9]/;

console.log(myRe.test("Hello, world!")); // true
console.log(myRe.test("Hello, w0r1d!")); // true
console.log(myRe3.test("01234")); // false
```

อธิบายก็คือ match ทุกอย่างที่ไม่ใช่ 0-9


