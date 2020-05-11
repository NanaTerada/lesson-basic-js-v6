'use strict';

// iはカウンターの変数名によく使われる。再代入されるのでlet

for (let i = 1; i <= 10; i++){
// console.log("hello");
// console.log("hello" + i);
// テンプレートリテラルを使う↓``と$を使う
console.log(`hello ${i}`);

}

let hp = 100;

// 100から0になる間
while(hp >0){
        console.log(`${hp} HP　left!`);
        hp -= 15; //hpを15ずつ減らしていく
        //終わるようにしないと永遠に繰り返されてPCがフリーズしてしまう
}





        
