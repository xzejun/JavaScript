const a = 1.2;
const b = 1;
const c = 1.2 / 'a';
const d = '1.2';
const e = '1';


 console.log(Number.isNaN(c));
 console.log(Number.parseFloat(d));
 console.log(Number.parseInt(d));
 console.log(Number.parseInt(a));

 console.log(parseInt(a, 10))
 console.log(parseFloat(a, 10))
 console.log(d.toString() === 1.2, d.toString() === '1.2')

// 运算符
 console.log(8 + 4)
 console.log(8 - 4)
 console.log(8 * 4)
 console.log(8 / 4)
 console.log(8 % 4)
 console.log(9 % 4)

console.log(8 + '4')
console.log(8 - '4')
console.log(8 / '4')
console.log(8 % '4')