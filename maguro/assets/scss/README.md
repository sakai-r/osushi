# クラスの命名規則

## BEMの考え方を採用

- Block（構成要素）

    ページ内で何度でもどこでも置くことが出来る独立して動作するもの。


- Element（部品）

    Blockに紐付いて定義される。要素内のパーツであり、Block内であれば繰り返し使用できる。


- Modifier（装飾）

    少しだけ違うものを量産するときに用いる。あくまで変更がかかる要素に対して付ける。


### 接続方法

- BlockとElement（要素）をつなぐ時はアンダースコア`__`2つ

    * Block + Element  

        例： area__title , wrapperSection__text


    * Block + Element + Element  

        例： area__aleat__title , wrapperSection__aleat__text


- Modifier（装飾）につなぐ時はハイフン`--`2つ

    * Block + Modifier  

        例：area--large , wrapperSection--red


    * Block + Element + Modifier  

        例：area__title--large , wrapperSection__text--red



## 複数語を繋ぐ場合

- キャメルケースを採用、

    * 範囲 + 種類・固有名詞  

        例：areaPost , wrapperSection



## チート表

### Block


- 場所
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| section | 区分・区画 |
| content | 文書の内容 |
| article | 記事 |
| post | 投稿 |
| top | 頂上・上部 |
| home | トップページ |
| sidebar | 補足記事 |


- 補足
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| wrapper | 内包する |
| wrap | wrapperの略語 |
| container | 容器・入れ物 |
| group | 集まり |
| area | 特定の場所・範囲 |
| brand | ブランドの |
| site | サイトの |


- 比較
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| main | 主要な |
| primary | 主要な |
| secondary | 補助的な・第二の |
| tertiary | 第三の |
| quaternary | 第四の |
| common | 共通の |
| global | 全体的な |
| local | 局所的な |
| general | 一般的な |


- レイアウト
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| grid | グリッドレイアウト |
| block | 縦に積まれる |
| inline | 横一列に並ぶ |
| media | テキストと画像の横並び |
| flag | テキストと画像の横並び（垂直方向の指定可能） |
| box | 箱状の |
| card | （主に）画像を目立たせるカード型 |
|  tile | 繰り返しによって構成されるパターン |


- コンテンツ
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| about | 〜について |
| work | 仕事・任務 |
| product | 製品 |
| service | サービス |
| news | お知らせ・近況 |
| event | 行事・出来事 |
| history | 歴史・沿革 |
| archive | 保存・保管・記録 |
| concept | 構想・概念・考え |
| recommend | おすすめ・推奨 |
| table of contents | 目次 |
| toc | Table of contentsの略語 |
| index | 索引・指標 |
| contact | 問い合わせ・連絡 |
| inquiry | 問い合わせ・質問・調査 |
| access |  交通手段|
| shop | 店舗 |
| related | 関連のある |
| privacy | 個人情報の利用・保護の方針 |
| qanda | Question and answer（質問と回答）の略 |
| faq | qandaの類語、Frequently asked questions（よくある質問）の略 |


- Image
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| image | 画像 |
| img | imageの略語 |
| icon | 対象の内容や機能などを小さな絵柄で表したもの |
| loading | 読み込み中であることを示すインターフェイス |
| logo | 社名や製品名などを図案化・装飾化した文字・文字列 |
| map | 地図 |
| chart | 理解しやすいような方法で情報を示すリストやグラフのこと |
| graph | chartの類語で視覚表現のための手段のこと |
| hero | キービジュアルになる大型の画像 |
| banner | （主に宣伝用の）画像をともなうリンク |
| carousel | 画像などのコンテンツを上下左右にスライドさせて切り替えるインターフェイス |
| slider | carouselの類語 |
| ticker | carouselの類語で自動でアイテムを左右に流しながら表示する。ユーザーは基本的にコントロールできない |


- Navigation
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| navigation | 情報へ誘導するリンク |
| nav | navigationの略語 |
| breadcrumb | パンくずリスト |トップページから現在ページまでの階層構造を示したリンク |
| topicpath | breadcrumbの類語 |
| springboard | 同じサイズのリンクを2×2や3×3のように配置した同じ重要度を持つ並列なナビゲーション |
| cards | トランプのような積み重なったカードのメタファーをもつインターフェイス |
| list-menu | 縦に並んだリスト型のリンクで、階層構造をもったナビゲーション |
| dashboard | グラフやステータスなどを一つの画面にまとめたインターフェイス |
| pagination | 昇順にしたページ番号付きのナビゲーション |
| back-to-top | ページトップに戻るためのページ内リンク |
| tabbar | 書類などのインデックスタブを模した、別のドキュメントに切り替えるインターフェイス |
segmented-control | モバイルアプリケーションではtabbarを画面全体の切り替えに使い、segmented-controlは画面内の| 特定の表示領域の表示切り替えに使う |
| toolbar | ユーザーが利用できるツールやアクションをまとめたインターフェイス |
off-canvas | 表示領域外から画面の大半を覆い隠したり（オーバーレイ）、ずらすようにスライドしながら表示するナビゲーシ| ョン |
| side-drawer | off-canvasの類語 |drawerは「引き出し」の意味 |
toggle-menu | 同一の操作で二つの状態を交互に切り換えるインターフェイスで、操作対象になるボタンを基準にナビゲーション| を表示することが多い |
scroll-tab | 表示領域よりも横に長いナビゲーションで、左右にスクロールすることで非表示部分を見ることができるインター| フェイス |
| sitemap | サイト内のすべてのページへのリンクをリスト化したもの |
| sns | ソーシャルネットワーキングサービス |


- Form
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| form | 送信フォーム |
| login | ユーザー認証をするためのフォーム |
| signin | loginの類語 |
| registration | ユーザー登録をするためのフォーム |
| step-navigation | 複数画面にわたるフォームの順序や、現在地を示したナビゲーション |
| cart | 購入するアイテムを一時的に保存する画面 |
| checkout | 保存していたアイテムを購入する画面 |
| search-box | キーワード検索するためのフォームエリア |
| search-result | 検索結果画面 |


### Element

- テキスト
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| link | アンカーテキスト |
| label | 分類する・項目名 |
| tag | 符号・識別子 |
| badge | 残数を示す数値 |
| copyright | 著作権表示 |
| dialog | （主に）注意や警告を知らせるために使用されるメッセージで、ユーザーに操作を要求するのが特徴 |
| toast | dialogの類語で、dialogとの違いは時間が経つと自動的に消えること |
| tooltip | マウスオーバー時に補足情報を表示するインターフェイス |
| button | オン・オフの選択に使うインターフェイス |
| btn | buttonの略語 |

- 汎用的
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| inner | 内側の |
| outer | 外側の |
| body | 主要部分 |
| head | 上部 |
| foot | 下部 |
| heading | 見出し・表題 |
| title | 表題・題名 |
| lead | 見出しの補足・記事の要約 |
| list | 一覧・表 |
| menu | 一覧・表 |
| item | （表やデータなどの）項目 |
| unit | 1つの単位・1セット |
| column | 縦列 |
| col | columnの略語 |
| text | 本文 |
| caption | 画像・図表の補足文 |
| thumbnail | 縮小した画像 |
| thumb | thumbnailの略語 |
| avatar | 人の顔を示す画像 |
| feature | 特徴を補足する画像 |
| tel | 電話番号 |
| address | 住所 |
| date | 日付 |
| time | 日時 |
| category | 分類・部類 |
| cat | categoryの略語 |
| tag | 識別子 |
| next | 次の |
| previous | 前の |
| prev | previousの略語 |
| mask | 覆い隠す |
| overlay | かぶせる・上書きする |
| delimiter | アイテムの範囲や境界線を示すインターフェイス |
| separator | delimiterの類語で混ぜないように分離する目的で使います |
| divider | delimiterの類語でグルーピングするように分割する目的で使います |

- 補足
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| emphasis | 強調・重視 |
| catch | 興味を惹く・関心をつかむ |
| note | 注釈 |
| description | 概要 |
| desc | descriptionの略語 |
| introduction | 前置き・導入 |
| intro | introductionの略語 |
| announce | お知らせ |
| information | 情報 |
| info | informationの略語 |
| action | Call To Action |重要度の高い |
| success | 成功 |
| alert | 注意・警戒 |
| attention | 配慮・気配り |
| error | 間違い・失敗 |
| caution | 用心・警告 |
| warning | 警告・予告 |
| danger | 危険・驚異 |
| more | もっと多くの |
| feature | 主要なもの |
| detail | 詳細・細部 |
| summary | 概要・要約 |

### Modifier
| 単語　　　　　　 | 意味　　　　　　 |
|:--------------|--------------:|
| tiny | とても小さい |
| xs | tinyの類語でExtra small（smallよりさらに小さい）こと |
| small | 小さい |
| medium | 中間 |
| large | 大きい |
| huge | とても大きい |
| xl | hugeの類語でExtra large（特大・超大型）のこと |
| reverse | 反転する |
| push | 前方に押す |
| pull | 自分の方に引く |
| offset | 相殺する・埋めあわせる |
| left- 左側の |
| center | 真ん中 |
| right | 右側の |
| top | 上部 |
| middle | 真ん中 |
| bottom | 下部 |
| round | 角丸 |
| circle | 円形 |

| show | 見せる |
| hide | 隠す |
| open | 開く |
| close | 閉じる |
| current | 現在の |
| active | 活動中・有効な |
| disabled | 無効になっている |