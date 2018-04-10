const obj = {
    a: 1,
    b: 2,
    c: 3
}
const obj1 = {
    d: 5,
    e: 6,
    f: 7
}
 //console.log(obj.a)
 //console.log(obj['a'])
 //const key = 'a';
 //console.log(obj[key])

//for (const k in obj) {
    // 只能用 for in 遍历
    //console.log(k)
//}
 //for (const v of obj) {
    // error
     //console.log(k)
 //}

 console.log(Object.keys(obj))//返回的是个数组
 console.log(Object.values(obj))//返回的是个数组
 console.log(Object.assign(obj, obj1)) // { ...obj, ...obj1 }第一个叫目标对象，后面的obj1是源对象。对象合并是指：将源对象里面的属性添加到目标对象中去，若两者的属性名有冲突，后面的将会覆盖前面的

 console.log(Object.is(obj, {
     a: 1,
     b: 2,
     c: 3
 })) // 不但值要相等，指向也要相等


const obj2 = obj;
console.log(obj2);
obj.ff = 'ff';
console.log(obj2)
