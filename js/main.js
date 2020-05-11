'use strict';

// スコープ　＝　有効範囲

const x = 2;

function f() {
        // const x = 1;　これがないとconst x = 2;が有効になる
        console.log(x);
}

f();
// console.log(x);はここでは使えないので外で定義する必要がある
console.log(x);
