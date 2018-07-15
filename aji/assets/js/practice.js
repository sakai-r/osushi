/** 
 * chap.1
 */

/** 
 * コンソールでは、動作しているプログラムのエラーの確認及び入力して実行できる
 * メゾットとは、コンピューターに対する「命令」
 * console.logでコンソールに表示しろという命令
 */
console.log('ハロー！'); 

/** 
 * 演算子とは「+」「-」などの記号のこと
 */
console.log(10 + 5);

/** 
 * letは新規作成の意味
 * textは変数の「名称」  
 */
let text = 'ハロー！';
console.log(text);
//疑問！console.logとlet textのように「.」と「 」で繋ぎ方が違うがなぜか

let cost = 100;
let price = cost * 1.08;
console.log('この価格は' + price + '円です');

/**
 * テンプレートリテラル
 */
let cost = 100;
let price = cost * 1.08;
console.log('この価格は${price}円です');
/** 
 * ---------------------------予約語---------------------------
 * break case catch continue debugger default delete do else finally for
 * function if in instanceof new return switch this throw try typeof var
 * void while with class enum export extends import super implements
 * interface let package private protected public static yield null true false
 * -----------------------------------------------------------
 */

let text = prompt ('入力してね');
console.log(text);
/**
 * promptメゾットは「ユーザーがキーボードから何かを入力したら、その結果の文字列を返してくる」
 * 変数 = prompt()の場合「prompt」がメゾット、「()」内が引数
 */

let text = prompt ('入力してね');
console.log('入力したのは' + text);
/**
 * 文字列の時は必ずシングルクオーテーションで囲うこと
 * 実際のwebページでpromptを使うことはまずない
 */

/** 
 * parseInt関数は「文字列を受け取ったら整数に変換して返す」 
 */
let price = prompt ('定価を入力');
console.log(parseInt (price) + 80);
//疑問！「parse」「Int」の繋ぎがキャメルケースなのは覚えればいいだけなのか何か規則や理由がありますか？

/** 
 * parseInt関数は「文字列を受け取ったら実数に変換して返す」小数点や無理数も可能
 */
let price = prompt ('定価を入力');
console.log(parseFloat (price) + 80);

console.log('ハロー！',22,'グッバイ');

/** 
 * ----------console.logを正確に捉える----------
 * - logが「メゾット」
 * - consoleは「オブジェクト」
 * オブジェクトとはJSで操作できる「何か」、windowオブジェクトやDocumentオブジェクトなどがある
 * オブジェクトは「表す対象」を操作するために必要なものを一式持っている
 * オブジェクトはつまり「複数の機能（メゾット）と変数（プロパティ）の集合体」
 * 疑問！オブジェクトの具体例はよく見かけるが、JSで操作できる「何か」がまだよくわからない
 * -------------------------------------------
 */

 //疑問！半角スペースや規則など「当たり前」がわからないのでそのあたりも指摘が欲しい


/**
 * chap.2 
 */

/**
 * isNaNは非数のことで「数値に変換不可」を判断するもの
 * 数字であれば不可ではないのでfalseを返す
 * 全角数字や英字ならば不可なのでtrueを返す
 */
let text = prompt ('入力してね');
console.log(isNaN (text));

/**
 * if文を使って「もし〜だったら」という命令文を作成
 * if文は{}（中かっこ）内全て反映
 */
let text = prompt ('入力してね');
if( isNaN (text)){
    console.log('数字じゃないよ');
}

/**
 * ノット演算、isNaNの前に「!」をつけることで逆転させる
 */
let text = prompt ('入力してね');
if( ! isNaN (text)){
    console.log(parseInt (text) + 80);
}

/**
 * if文は「if節」「else節」で構成されている
 * else節だけ書くとエラーが発生する
 * if節だけ書くのはOK
 */
let text = prompt ('入力してね');
if( ! isNaN (text)){
    console.log(parseInt (text) + 80);
} else {
    console.log('数字じゃないよ');
}
