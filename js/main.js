'use strict';

// const sum = function(a,b,c){
//         return a + b + c;
// };

// functionとる
// =>をつける
// return（返すだけ）だったら省略できる

const sum = (a,b,c) => a + b + c;


const total = sum(1,2,3) + sum(4,5,6);
console.log(total);

// 引数が1つの場合は（）を省略できる

// const double = function (a) {
//         return a * 2;
// }

const double = a => a * 2;
        
console.log(double(12));