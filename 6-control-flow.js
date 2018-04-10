const a = 5;

 if (a > 10) {
     console.log(`${a}大于10`)
 } else {
     console.log(`${a}小于等于10`)
 }

 if (a > 10) {
     console.log(`${a}大于10`)
 } else if(a === 10) {
     console.log(`${a}等于10`)
 } else {
     console.log(`${a}小于10`)
 }

 switch(a) {
     case 1:
         console.log(`${a}等于1`);
         break;
     case 2:
         console.log(`${a}等于2`);
         break;
     case 3:
         console.log(`${a}等于3`);
         break;
     default:
         console.log(`${a}不等于1，2，3`);
         break;

 }

 function doSomething (arg) {
     if (arg > 5) {
         return;
     } else {
         throw 'err! args too little';
     }
 }
 try {
     doSomething(1)
 } catch (e) {
     console.log(e)
 }