let re = /abc/;

console.log(re.test("abc")); // true
console.log(re.test("abcde")); // true
console.log(re.test("acb")); // false

let myRe = /[a-d]/;
console.log((myRe.test("abcde"))) // true
console.log((myRe.test("ab"))) // true
console.log((myRe.test("efgh"))) // false

let myRe2 = /[0-9]/;
console.log((myRe2.test("i was born in 1995"))) // true


let myRe3 = /[^0-9]/;

console.log(myRe3.test("Hello, world!")); // true
console.log(myRe3.test("Hello, w0r1d!")); // true
console.log(myRe3.test("01234")); // false

console.log(/'\d+'/.test("123")) // true
console.log(/'\d+'/.test("''")) // false
console.log(/'\d*'/.test("'123'")) // true
console.log(/'\d*'/.test("''")) // true

let ohNoRegex = /oh+(no+)+/i;

console.log(ohNoRegex.test('Ohhhhhhnooooonooooo')); // true

console.log(/^\d+$/.test(1234)); // true
console.log(/^\d+$/.test('1234s')); // false

console.log(/^a/.test('aeiou')); // true
console.log(/x$/.test('i love regex')); // true

console.log(/(abc)/.test('a')); // false
console.log(/[abc]/.test('a')); // true