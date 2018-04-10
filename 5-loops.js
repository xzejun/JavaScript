
 let a = 0;
 do {
     a ++
     console.log(a)
 } while (a < 10); //1-10

 for (let i = 0;  i < 10; i ++) {
     console.log(i);//0-9
 }

const arr = [1, 2, 3, 4];
 for (let i = 0;  i < arr.length; i ++) {
     console.log(arr[i]);//1-4
 }
 for (const v of arr) {//of取值
     console.log(v);//1-4
 }
 for (const k in arr) {//K 去键值
     console.log(k, arr[k]);//0 1    1 2
 }
//arr.map(...fn)  返回值 数组
//arr.forEach(v => console.log(v));