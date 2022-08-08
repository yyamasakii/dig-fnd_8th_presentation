'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// 0-1) 画像パスの入った配列を準備
const imgPathArray = [
    "bot_img/bot_img1.png", 
    "bot_img/bot_img2.png", 
    "bot_img/bot_img3.png",
    "bot_img/bot_img4.png",
    "bot_img/bot_img5.png",
    "bot_img/bot_img6.png",
    "bot_img/bot_img7.png",
    "bot_img/bot_img8.png",
    "bot_img/bot_img9.png",
    "bot_img/nightmare_day03_dig-comparisons-intro.png"
];

// 0-2) リンクのURLが入った配列を準備
const urlArray = [
    "https://toyotatimes.jp/series/toyoda_words/001.html",
    "https://toyotatimes.jp/series/toyoda_words/002.html",
    "https://toyotatimes.jp/series/toyoda_words/003.html",
    "https://toyotatimes.jp/series/toyoda_words/004.html",
    "https://toyotatimes.jp/series/toyoda_words/005.html",
    "https://toyotatimes.jp/series/toyoda_words/006.html",
    "https://toyotatimes.jp/series/toyoda_words/007.html",
    "https://toyotatimes.jp/series/toyoda_words/008.html",
    "https://toyotatimes.jp/series/toyoda_words/009.html",
    "https://yyamasakii.github.io/dig-fnd_8th_presentation/"
]

// 0-3) リンクのURLが入った配列を準備
const numberArray = [
    "#01「もっといいクルマをつくろう」",
    "#02「この町いちばん」",
    "#03「忘れないでいる」",
    "#04「現場にいちばん近い社長でありたい」",
    "#05「持続的成長」",
    "#06「意志ある情熱と行動」",
    "#07「負け嫌い」",
    "#08「自分以外の誰かのために」",
    "#09「バッターボックスに立とう」",
    "ナイトメア問題（Week 1 - Wednesday 2022/07/13 dig-comparisons-intro)"
]

// ガチャクリックで動く関数
function change(){

    //  配列のインデックスをランダムに収める変数
    const randamBot = Math.floor ( Math.random() * imgPathArray.length);

    // 1) HTML上のimg id="botImg"を取得し書き換え
    const botImg = document.getElementById("botImg");
    botImg.src = imgPathArray[randamBot];


    // 2) HTML上のimg id="pageLink"を取得し書き換え
    const linkURL = document.getElementById("linkURL");
    linkURL.href = urlArray[randamBot];

    // 3) h2 id=numberに言葉を入れる
    const number = document.getElementById("number");
    number.innerText = numberArray[randamBot];
    
    // 4) ガチャの画像を消す
    const button = document.getElementById("button");
    button.style.display = "none";
}

