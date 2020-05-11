'use strict';

// if (条件文){
// trueだったときの処理
// }

const score = 80;

if(score > 80){
  console.log('Great!');
} else if (score >= 60){
 console.log("Good");
} else{
     console.log("OK...");   
}
// 命令がブロックで終わる場合は；不要

// if (条件文A){
// 条件文Atrueだったときの処理
// } else if(条件文B){
//  条件文Aはfalse条件文Btrueだったときの処理
// } else {
//         それ以外の場合の処理
// }

// もっと短く書く！条件演算子
// 構文↓
// 条件式　？　true　の処理　：falseの処理

score >= 80 ? console.log('Great!') : console.log('OK...');
        
