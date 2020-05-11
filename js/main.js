'use strict';

function sum(a,b,c) { //カンマ区切りでいくつでも渡せる
        //console.log(a + b + c);
        return a + b + c;  returnを書くとそれ以降の処理は実行されないので注意
}

sum(1,2,3);
sum(3,4,5);

const total = sum(1,2,3) + sum(3,4,5);
console.log(total);


// 関数式でかいてみする

const sum2 = function(e,f,g){
        return e + f + g;
}; //セミコロン注意
 
const total2 = sum2(1,2,3) + sum2(3,4,5);
console.log(total2);


        
