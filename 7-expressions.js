console.log(true && true);//t
console.log(true && false);//f
console.log(true || true);//t
console.log(false || true);//t
// 既可以用来判断  也可以用来某些场合的赋值操作


const a = '1';  //赋值
const b = '2'
const c = false;
const d = null;


const e = a && b; //  等同于 const e = a ? b : a;
const f = a || b;
const g = c || a;
const h = c && a;
const i = c && d;

console.log(e, f, g, h, i)
//2 1 1 false false