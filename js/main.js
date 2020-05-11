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

function showAd(){
        console.log('----------');
        console.log('-----AD---');
        console.log('----------');   
}

showAd();
console.log('Tom is great!');
console.log('BOb is great!');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd();




        
