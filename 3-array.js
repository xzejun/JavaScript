 const arr = [1, 2, 3, 4];

 arr.push(5);
 arr.unshift(5);//[5, 1, 2, 3, 4, 5]

 //let a=arr.shift();//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
 //console.log(a);//5
 //let a=arr.pop();//pop() 方法用于删除并返回数组的最后一个元素。
 //console.log(a);//5
 //arr.splice(0,0,55)  //参数: start length splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
//注释：该方法会改变原始数组。[55, 5, 1, 2, 3, 4, 5]
 //let a=arr.slice(0,2)  //跟 splice比较： 不改变原有数组，返回值为切割部分,2不是个数，是下标；返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
//console.log(a);
// arr 方法比较重要 大部分需要会使用

 //console.log(arr.join(':'))//join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。没有该参数，默认为逗号
 //console.log('%s or %s',arr.includes(1),arr.includes(10))  //ES7 6

 //console.log(arr)

/*map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
map() 方法按照原始数组元素顺序依次处理元素。
注意： map() 不会对空数组进行检测。
注意： map() 不会改变原始数组*/
 //const a = arr.map(v => v + 1);
//上行代码等同于
 const a=arr.map((function(v){
 	return v+1;
 }).bind(this));
 console.log(a);//[6, 2, 3, 4, 5, 6]
 arr.forEach(v => console.log(v))
/*5
1
2
3
4
5*/
 //console.log(a);

