'use strict';

// 間に広告を入れたいとき

console.log('----------');
console.log('-----AD---');
console.log('----------');
console.log('Tom is great!');
console.log('BOb is great!');
console.log('----------');
console.log('-----AD---');
console.log('----------');
console.log('Steve is great!');
console.log('Richard is great!');
console.log('----------');
console.log('-----AD---');
console.log('----------');


// 関数を使うと短く書ける

//引数を使ってみよう

function showAd(message = 'AD'){　//仮引数 実引数が無かった時の値を設定できる
        console.log('----------');
        console.log(`-----${message}---`);
        console.log('----------');   
}

showAd('header Ad');　//実引数
console.log('Tom is great!');
console.log('BOb is great!');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd('fooer Ad');



        
