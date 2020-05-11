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

        // 定数を使ってみよう
        
        console.log(150 * 140);
        console.log(150 * 160);
        // なんの計算をしているのかわかりづらいので名前を付けよう

        // 値を割り当てるを代入という
        //const price = 150;　//この定数を使いますよ～宣言をする
        // 右の値を　左の定数に割り当てる。イコールではない
        // これ以降priceは150になる
        // あとから修正するときにいっきに変更できルので楽

        // console.log(price * 140);
        // console.log(price * 160);

        // constでは再代入ができない
        // 変数を使ってみよう

        // varという書き方もあるが古いのでletを使っていく
        // 英数字　＄　＿のみ
        // 数値から始めれない
        // 予約後（let const）は使えない

        // let price = 170; 
        // console.log(price * 140);
        // console.log(price * 160);

        let price = 500;
        price = price + 100;
        // ↓短くかくには
        price += 100;
        // 1足したい場合は特殊な書き方がある
        price++;
        price--;

        //データ型について

        // 文字列(String)
        // 数値(Number)
        // undefined 定義されていない
        // null　値がない
        // 真偽値(boolean) true false
        // オブジェクト(Object)　{a:3,b:5}

        // typeofを使ってデータ型をコンソールで表示

        console.log(typeof 'hello');
        console.log(typeof 5);
        console.log(typeof true);
        console.log(typeof undefined);
        console.log(typeof null);　//objectになるがjsの有名なバグである


        
