'use strict';

        console.log('Hello World from main.js!');
        
        console.log("it's me!");
        // シングルクォーテーションが間に入る場合は””で囲う
        console.log('it\'s me!');
        // \(バックスラッシュ)の直後のシングルクォーテーションは文字として扱われる
        console.log('He\nllo Wor\tld');
        // \ｎ　は　開業　\ｔ　はテーブル
        console.log('hello' + 'world');
        // 文字の連結は　+　を使う

        // 計算をしよう
        console.log(10%3); 
        // 10を3で割った余りを出す
        console.log(10 ** 3); //答え：1000
        // 10の3乗

        // 計算の優先順位
        console.log(2 + 10 * 3); //32 10*3が先に計算される
        console.log((2 + 10 )* 3); //先に足し算したいときは

