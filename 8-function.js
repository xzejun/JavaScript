// function f1 () {
//     //do something
// }

// const f2 = function() {
//     //do something
// }

// const f3 = () => {
//     //do something
// }


// const a = {
//     b: 1,
//     c: function() {
//         console.log(this);
//     }
// }
// const d = {a: 1}
// const a = {
//     b: 1,
//     c: () => {
//         console.log(this);
//     }
// }
// a.c.bind(d)();
// a.c()

// const f1 = function (args) {
//     return args * args
// }
// const f2 = function (arg1, arg2, arg3) {
//     console.log(arguments);
//     console.log(arguments[0]);
// }
// console.log(f1(2))
// f2(1, 2, 3)

// const f3 = function(arg1) {
//     return function(arg2) {
//         return arg1 + arg2;
//     }
// }
// console.log(f3(1));
// console.log(f3(1)(2));