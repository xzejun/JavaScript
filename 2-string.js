const str = 'HelloWorld';

console.log(str.indexOf('o'));//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。下标从0开始
console.log(str.indexOf('b'));
console.log(str.lastIndexOf('o'));
console.log(str.replace('el', 'b'));
console.log(str.slice(1, 3));//一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。
console.log(str.split('o')); // 字符串转数组
console.log(str.toUpperCase());
console.log(str.toLowerCase());


console.log(str)