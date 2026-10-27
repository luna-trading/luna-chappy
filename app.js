const LESSONS = [
  {
    "title": "基本操作",
    "subtitle": "ChatGPTを開くところから、質問・履歴・設定まで",
    "icon": "🌱",
    "sections": [
      {
        "title": "ChatGPTとは？",
        "description": "ChatGPTは、文章で質問したり相談したりできるAIです。調べもの、文章作成、アイデア出し、手順の説明などを手伝います。回答は間違うこともあるので、重要な情報は確認しましょう。",
        "steps": [
          "ブラウザーで https://chatgpt.com/ を開きます。",
          "必要に応じてログインします。",
          "画面下部の入力欄に質問を入力します。",
          "Enterキーまたは送信ボタンで送ります。改行したいときは Shift＋Enter を試します。"
        ],
        "prompt": "Windows 11の初心者です。画面の操作を、一度に一つずつ、クリックする場所まで教えてください。"
      },
      {
        "title": "上手な質問の作り方",
        "description": "質問には「目的」「状況」「条件」「希望する答え方」を書くと伝わりやすくなります。曖昧なときは、AIに確認してもらうこともできます。",
        "steps": [
          "まず、何をしたいのか一文で書きます。",
          "使用している端末やアプリ名を追加します。",
          "初心者向け、表形式、短く、詳しくなど希望を伝えます。",
          "答えが違ったら「ここを直して」と続けて伝えます。"
        ],
        "prompt": "あなたは親切なパソコン講師です。Windows 11でファイルを整理する方法を、初心者向けに番号付きで、1操作ずつ説明してください。"
      },
      {
        "title": "会話の続け方と便利な操作",
        "description": "同じチャットでは前のやり取りを踏まえて追加質問できます。新しい話題は新しいチャットにすると整理しやすくなります。",
        "steps": [
          "左側のチャット一覧から過去の会話を開きます。",
          "別のテーマを始めるときは新しいチャットを選びます。",
          "必要な回答はコピーしてメモに保存します。",
          "重要な情報は別の資料でも確認します。"
        ],
        "prompt": "今の説明のうち、初心者が間違えやすい点だけを3つ挙げて、対処法も教えて。"
      },
      {
        "title": "設定と安全な使い方",
        "description": "設定メニューでは表示や個人設定などを確認できます。画面構成や利用できる機能は、プラン・端末・更新時期で異なります。",
        "steps": [
          "画面のプロフィールや設定メニューを開きます。",
          "表示、通知、プライバシーなど必要な項目を確認します。",
          "パスワード、認証コード、口座情報などの秘密は入力しません。",
          "医療・法律・投資の重要判断は一次情報や専門家で確認します。"
        ],
        "prompt": "私がChatGPTを安全に使うための注意点を、具体例とともに説明してください。"
      }
    ]
  },
  {
    "title": "記憶とカスタマイズ",
    "subtitle": "自分好みの回答や音声会話の設定",
    "icon": "🎀",
    "sections": [
      {
        "title": "カスタマイズの考え方",
        "description": "ChatGPTには回答のスタイルを調整する機能があります。利用可能な設定や名前は時期・アカウントで変わる場合があります。",
        "steps": [
          "プロフィールから設定を開きます。",
          "パーソナライズに関係する項目を探します。",
          "希望する文体や説明の詳しさを設定します。",
          "実際に質問して、望む返答になるか確認します。"
        ],
        "prompt": "これからは日本語で、親しみやすく、初心者にも分かるように説明して。操作は一つずつ教えて。"
      },
      {
        "title": "メモリの使い方",
        "description": "メモリ機能は、過去のやり取りから役立つ文脈を反映するための仕組みです。すべてを正確に保存・再現するものではありません。",
        "steps": [
          "設定のパーソナライズでメモリ関連の項目を確認します。",
          "「私について覚えていることを教えて」と尋ねて内容を確かめます。",
          "間違いがあれば、その場で訂正を伝えます。",
          "完全な削除が必要な場合は、設定のメモリ要約と元の会話・関連ソースを確認します。"
        ],
        "prompt": "私の説明の好みを、いま分かっている範囲でまとめて。間違いがあれば訂正します。"
      },
      {
        "title": "音声で話す",
        "description": "音声モードでは、文字を入力せずに話しかけられます。マイクの許可が必要です。端末やプランによって利用できる機能が異なります。",
        "steps": [
          "ChatGPTの音声アイコンを探して押します。",
          "ブラウザーや端末から求められたらマイクを許可します。",
          "普通に話しかけます。",
          "聞き取りが違ったときは、短く言い直します。"
        ],
        "prompt": "今から音声でパソコン操作を習いたいです。一度に一つの操作だけ案内してください。"
      },
      {
        "title": "うまく設定するコツ",
        "description": "性格や口調の設定と、回答の正確さは別の話です。かわいい先生風にしても、根拠のない回答は確認しましょう。",
        "steps": [
          "最初に口調を指定します。",
          "説明の長さや専門用語の扱いも指定します。",
          "新しいチャットで設定が反映されるか試します。",
          "大切な事実は元資料や公式サイトで確かめます。"
        ],
        "prompt": "やさしい先生の口調で説明して。ただし、不明なことは推測せず不明と伝えてください。"
      }
    ]
  },
  {
    "title": "検索・調査・分析",
    "subtitle": "Web検索、情報の比較、ニュースと投資分析",
    "icon": "🔎",
    "sections": [
      {
        "title": "Web検索を使う",
        "description": "新しいニュースや価格などは、古い学習情報だけでは不十分です。検索機能が利用できる場合は、最新の公開情報を探してもらえます。",
        "steps": [
          "「最新情報を検索して」と入力します。",
          "調べたい地域・日付・テーマを具体的に指定します。",
          "出典リンクと更新日を確認します。",
          "重要な事実は公式発表と照合します。"
        ],
        "prompt": "今日のEUR/USDに関する主要ニュースを検索し、発表時刻と出典を付けて日本語でまとめて。"
      },
      {
        "title": "情報の信頼性を見分ける",
        "description": "ニュース記事、SNS、企業の宣伝、政府統計では信頼性が異なります。一次情報と複数の独立した情報源を重視しましょう。",
        "steps": [
          "情報の発信元を確認します。",
          "記事の公開日と更新日を確認します。",
          "元の統計や発表資料に当たります。",
          "複数の情報源で一致するか確かめます。"
        ],
        "prompt": "このニュースについて、事実・推測・意見を分けて説明し、一次情報を優先して出典を示してください。"
      },
      {
        "title": "比較表を作る",
        "description": "複数の商品・サービス・手段を比べるときは、条件をそろえると判断しやすくなります。",
        "steps": [
          "比較したい候補を挙げます。",
          "価格、機能、制限、向いている人など評価軸を指定します。",
          "分からない項目は空欄や不明と明記させます。",
          "最終判断前に公式の最新情報を確認します。"
        ],
        "prompt": "候補Aと候補Bを、料金・メリット・デメリット・初心者向けかどうかで比較表にしてください。不明な点は推測しないで。"
      },
      {
        "title": "FX・株式の分析に使う",
        "description": "AIはニュース整理やシナリオ検討に便利ですが、未来の値動きを保証できません。価格、時間足、時刻、データ元を明確にしましょう。",
        "steps": [
          "通貨ペアや銘柄、対象時間を指定します。",
          "実際に取得できた価格と取得時刻を明示させます。",
          "上昇・下落の両シナリオを比較します。",
          "売買判断とリスク管理は自分で行います。"
        ],
        "prompt": "EUR/USDの4時間足と5分足を分析して。実データの取得時刻と出典を明記し、取得できない値は推測せず、上昇・下落シナリオを分けて。"
      }
    ]
  },
  {
    "title": "ファイル・資料作成",
    "subtitle": "Excel、Word、PDF、スライドの作り方",
    "icon": "📁",
    "sections": [
      {
        "title": "ファイルを渡して分析する",
        "description": "ファイル添付機能が使える場合、表計算や文書の内容を整理・要約できます。機密情報を含む資料は共有前に確認しましょう。",
        "steps": [
          "入力欄付近の添付ボタンを押します。",
          "対象のファイルを選びます。",
          "「何をしてほしいか」を具体的に入力します。",
          "出力を開き、元データとの整合性を確認します。"
        ],
        "prompt": "添付した表を読み、列の意味を説明して、欠損値と重複行を報告してください。元ファイルは変更しないで。"
      },
      {
        "title": "Excelを作る",
        "description": "表の列名・計算式・書式を指定すると、管理表や集計表を作りやすくなります。ダウンロードしたらExcelなどで開いて検算しましょう。",
        "steps": [
          "用途を決めます。",
          "列名と計算したい項目を指定します。",
          "必要ならグラフや条件付き書式を指定します。",
          "完成した表を開き、数式と数値を確認します。"
        ],
        "prompt": "月別の家計簿をExcel形式で作って。日付、分類、内容、収入、支出、残高を入れ、月合計を自動計算して。"
      },
      {
        "title": "Word・PDFを作る",
        "description": "報告書や手順書は、見出し構成と読者を指定すると読みやすくなります。PDFは配布に向き、Wordは編集に向きます。",
        "steps": [
          "資料の目的と対象読者を伝えます。",
          "章立て、ページ数、デザインを指定します。",
          "WordまたはPDFで作成を依頼します。",
          "ダウンロードして文字化けや改ページを確認します。"
        ],
        "prompt": "初心者向けのWindows 11操作マニュアルをWordで作って。見出し、番号付き手順、注意点を入れて。"
      },
      {
        "title": "プレゼン資料を作る",
        "description": "発表時間と聞き手に合わせて、1枚に詰め込みすぎない構成にします。",
        "steps": [
          "発表テーマと目的を伝えます。",
          "対象者と発表時間を指定します。",
          "必要なスライド数とデザインを指定します。",
          "完成後、文字サイズと事実関係を確認します。"
        ],
        "prompt": "会社のDX導入を説明する10枚のプレゼンを作って。初心者向けに、導入目的、効果、費用、手順、注意点を含めて。"
      }
    ]
  },
  {
    "title": "画像・動画・音声",
    "subtitle": "画像生成と編集、音声会話、動画AIの基本",
    "icon": "🎨",
    "sections": [
      {
        "title": "画像を生成する",
        "description": "文章で「人物・服装・背景・構図・光・縦横比」を指定すると、希望のイメージを伝えやすくなります。",
        "steps": [
          "作りたい画像の主役を決めます。",
          "服装、背景、表情、構図を指定します。",
          "縦長・横長など用途を伝えます。",
          "生成後、気になる部分だけ修正を依頼します。"
        ],
        "prompt": "ピンクのミニボブでブラウンの瞳の成人女性の実写風パソコン講師。白いブラウス、明るい教室、自然光、正面から、横長16:9。"
      },
      {
        "title": "写真を編集する",
        "description": "写真を添付して、背景や服装の変更を依頼できます。顔などの特徴を維持したい場合は、元画像を明示して参照することが重要です。",
        "steps": [
          "編集したい画像を添付します。",
          "変えたい部分と変えたくない部分を分けて書きます。",
          "修正結果を元画像と比較します。",
          "同一人物の再現は完全には保証されない点を理解します。"
        ],
        "prompt": "この画像を基準に、顔立ち・瞳・髪型はできるだけ維持して、服装を白いブラウス、背景を教室に変更してください。"
      },
      {
        "title": "動画を作る",
        "description": "動画生成サービスでは、シーン・動き・カメラワーク・長さを指示します。利用できるサービスや料金、生成制限は変わります。",
        "steps": [
          "使う動画生成サービスを選びます。",
          "登場人物と動きを短い文章で指定します。",
          "カメラの動きや雰囲気を加えます。",
          "生成物の権利・公開範囲を確認します。"
        ],
        "prompt": "実写風のピンク髪の女性講師が、教室で微笑んで手を振る5秒の動画。自然な動き、固定カメラ、柔らかい光。"
      },
      {
        "title": "音声を活用する",
        "description": "音声入力や音声会話は、キーボードを使いにくいときや練習に便利です。音声機能と動画生成機能は別の場合があります。",
        "steps": [
          "マイクとスピーカーの動作を確認します。",
          "音声モードを開始します。",
          "短く区切って質問します。",
          "必要なら要点を文字でまとめてもらいます。"
        ],
        "prompt": "今話した内容を、あとで見返せるように見出し付きのメモにまとめてください。"
      }
    ]
  },
  {
    "title": "アプリ連携",
    "subtitle": "Gmail、Google Drive、カレンダーと連携",
    "icon": "🔗",
    "sections": [
      {
        "title": "アプリ連携とは",
        "description": "対応アプリを接続すると、許可された範囲の情報を探したり、作業したりできる場合があります。利用可否と権限はアプリ・プランで異なります。",
        "steps": [
          "設定やアプリ・プラグインの一覧を開きます。",
          "使いたいアプリを探します。",
          "接続画面で権限を確認します。",
          "不要になったら接続を見直します。"
        ],
        "prompt": "ChatGPTから使えるアプリ連携の種類と、それぞれで何ができるか教えて。"
      },
      {
        "title": "Gmailを活用する",
        "description": "接続できる場合、メールの検索や要約、返信文の下書きなどに役立ちます。送信前には宛先と内容を確認しましょう。",
        "steps": [
          "Gmailとの接続を確認します。",
          "探したいメールの差出人や期間を指定します。",
          "重要な点を要約してもらいます。",
          "返信が必要なら下書きを確認します。"
        ],
        "prompt": "過去7日間の重要なメールを探して、差出人・件名・対応が必要なことを表にしてください。"
      },
      {
        "title": "Google Driveを活用する",
        "description": "Drive上の資料を検索・要約できる場合があります。ファイルの権限や共有設定には注意が必要です。",
        "steps": [
          "Google Driveの接続を確認します。",
          "ファイル名や内容のキーワードで探します。",
          "対象資料を指定して要約を依頼します。",
          "編集や共有は対象と権限を確認してから実行します。"
        ],
        "prompt": "Google Driveから「業務改善」に関する資料を探し、各資料の概要をまとめてください。"
      },
      {
        "title": "Googleカレンダーを活用する",
        "description": "予定の確認、空き時間の検索、予定の追加などに利用できる場合があります。日時とタイムゾーンを必ず確認します。",
        "steps": [
          "カレンダー接続を確認します。",
          "日付と予定名を指定します。",
          "予定の開始・終了時刻を確認します。",
          "追加や変更の前に内容を確認します。"
        ],
        "prompt": "来週の予定を曜日別にまとめて、空いている時間帯を教えてください。日本時間でお願いします。"
      }
    ]
  },
  {
    "title": "自動化・AIエージェント",
    "subtitle": "定期通知、継続調査、複数手順の作業",
    "icon": "⏰",
    "sections": [
      {
        "title": "自動化でできること",
        "description": "対応機能では、決まった時刻の通知や定期的な情報確認を依頼できます。実行できる範囲や通知方法は設定・プランによります。",
        "steps": [
          "繰り返したい作業を一つ決めます。",
          "頻度と時刻を指定します。",
          "通知内容と条件を具体的に書きます。",
          "作成後に一覧や設定を確認します。"
        ],
        "prompt": "毎日日本時間16時に、EUR/USDの主要ニュースを出典付きでまとめて通知してください。"
      },
      {
        "title": "良い自動化の指示",
        "description": "「いつ」「何を」「どの情報源で」「どう報告するか」を明確にすると、意図が伝わりやすくなります。",
        "steps": [
          "実行する日時とタイムゾーンを書きます。",
          "調べる対象を限定します。",
          "不明なデータは推測しないと指定します。",
          "通知の長さと形式を決めます。"
        ],
        "prompt": "平日の朝8時に、今日の予定と重要なニュース3件を日本語で簡潔にまとめてください。"
      },
      {
        "title": "AIエージェントとは",
        "description": "AIエージェントは、調査・ファイル操作・サイト上の作業など複数の手順を進める仕組みです。利用可能な操作と承認の要否は環境によります。",
        "steps": [
          "目的と完了条件を伝えます。",
          "使ってよい資料やアプリを指定します。",
          "送信・削除・購入など重要操作は確認を求めます。",
          "完了後、変更内容をチェックします。"
        ],
        "prompt": "会社の業務改善案を、現状整理、課題抽出、優先順位、実施計画の順でまとめてください。"
      },
      {
        "title": "自動化の注意点",
        "description": "自動化は常に完全な監視を保証するものではありません。金融取引や緊急時の判断を任せきりにせず、通知と実データを確認しましょう。",
        "steps": [
          "作成した自動化の一覧を確認します。",
          "重複した通知がないか確認します。",
          "不要な自動化は停止します。",
          "重要なイベントは公式通知や別手段でも確認します。"
        ],
        "prompt": "今設定されている自動化を一覧にして、重複や改善点があれば教えてください。"
      }
    ]
  },
  {
    "title": "上級活用",
    "subtitle": "ホームページ制作、プログラミング、DX",
    "icon": "🚀",
    "sections": [
      {
        "title": "ホームページを作る",
        "description": "小規模なサイトならHTML・CSS・JavaScriptの3つのファイルから始められます。HTMLは内容、CSSは見た目、JavaScriptは動きです。",
        "steps": [
          "サイトの目的とページ構成を決めます。",
          "HTML・CSS・JavaScriptの作成を依頼します。",
          "同じフォルダーに保存して index.html を開きます。",
          "スマホ表示とリンクを確認します。"
        ],
        "prompt": "初心者向けの紹介サイトを、index.html、style.css、app.js の3ファイルで作って。画像も同じ階層に置き、相対パスで参照して。"
      },
      {
        "title": "GitHub Pagesで公開する",
        "description": "GitHub Pagesは、静的なHTMLサイトを公開できる仕組みです。公開リポジトリには秘密情報を置かないでください。",
        "steps": [
          "GitHubで公開リポジトリを作ります。",
          "index.html などのファイルをアップロードします。",
          "Settings → Pages で main と /(root) を選びます。",
          "公開URLを開き、表示を確認します。"
        ],
        "prompt": "GitHub Pagesで公開する手順を、Windows 11初心者向けに、1クリックずつ案内してください。"
      },
      {
        "title": "プログラミングを手伝ってもらう",
        "description": "コードの作成だけでなく、エラーの原因調査や改善にも使えます。実行前に内容を確認し、バックアップを取ると安心です。",
        "steps": [
          "使用言語と動作環境を伝えます。",
          "実現したい動作を具体的に説明します。",
          "エラーが出たらメッセージ全文を共有します。",
          "修正後に動作確認します。"
        ],
        "prompt": "Windows 11のPowerShellで動く簡単なファイル整理スクリプトを作って。実行前に変更内容を表示し、確認を求める仕様にして。"
      },
      {
        "title": "会社のDXに活用する",
        "description": "DXは単なるデジタル化ではなく、業務の進め方を改善することです。小さく試し、効果を測って広げると進めやすくなります。",
        "steps": [
          "紙や手入力の業務を洗い出します。",
          "時間がかかる作業を優先します。",
          "小規模な試験導入を行います。",
          "削減時間、ミス、費用を確認して改善します。"
        ],
        "prompt": "社員20人の会社向けに、費用を抑えて始めるDX計画を作って。現状把握、優先順位、3か月の実施計画、効果測定を含めて。"
      }
    ]
  }
];

const app=document.querySelector('#app');
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function card(l,i){return `<a class="lesson-card" href="#lesson-${i+1}"><span class="number">${String(i+1).padStart(2,'0')}</span><span class="lesson-icon">${l.icon}</span><img class="card-teacher" src="luna-teacher.webp" alt="講師ルナ" loading="lazy"><h3>第${i+1}回　${escapeHTML(l.title)}</h3><p>${escapeHTML(l.subtitle)}</p><span class="more">くわしく読む →</span></a>`}
function home(){app.innerHTML=`<section class="hero"><div class="hero-copy"><span class="eyebrow">🌸 実写ルナ先生のやさしい解説サイト</span><h1>ChatGPTを、<br><em>もっと自由に。</em></h1><p class="lead">このサイトをご覧のみなさん、こんにちは！講師のルナです。<br>ChatGPTを初めて使う方も、もっと活用したい方も。私が一つずつ丁寧にご案内します。</p><div class="hero-actions"><a class="btn" href="#lessons">全8回の講座を見る ↗</a><a class="btn ghost" href="#lesson-1">第1回から読む</a></div><div class="chips"><span>📖 読むだけで学べる</span><span>📝 テストなし</span><span>📱 スマホ対応</span></div></div><div class="hero-photo"><img src="luna-teacher.webp" alt="実写ルナ先生の写真"><div class="photo-note">「みなさん、ようこそ！一緒に学びましょう♡」</div></div></section><section class="intro"><div><span class="eyebrow">WELCOME</span><h2>ようこそ、ルナの教室へ ♡</h2><p>このサイトをご覧いただきありがとうございます。講師のルナです。難しい言葉はできるだけ使わず、どこをクリックするか、何を入力するかまで丁寧に説明します。どの回からでも自由に読めます。テスト・ログイン・進捗管理はありません。</p></div><img src="luna-teacher.webp" alt="ルナ先生" loading="lazy"></section><section id="lessons" class="lessons"><div class="section-head"><span class="eyebrow">8 LESSONS</span><h2>全8回の講座一覧</h2><p>知りたいテーマを選んでください。各回には操作手順と、そのままコピーして使える質問文を用意しています。</p></div><div class="card-grid">${LESSONS.map(card).join('')}</div></section><section class="footer-message"><img src="luna-teacher.webp" alt="ルナ先生" loading="lazy"><div><h2>分からなくても大丈夫 ♡</h2><p>すべてを一度に覚える必要はありません。必要なときにこのページを開いて、一緒に少しずつ試してみましょう。</p><a class="btn ghost" href="#lesson-1">まずは基本操作から →</a></div></section>`;}
function lesson(n){const l=LESSONS[n-1];if(!l){home();return;}app.innerHTML=`<div class="crumb"><a href="#home">ホーム</a><span>›</span><a href="#lessons">講座一覧</a><span>›</span>第${n}回</div><header class="lesson-head"><div><span class="eyebrow">LESSON ${String(n).padStart(2,'0')}</span><h1>${l.icon} ${escapeHTML(l.title)}</h1><p>${escapeHTML(l.subtitle)}</p><div class="lesson-nav">${n>1?`<a href="#lesson-${n-1}">← 前の回</a>`:''}<a href="#lessons">全8回を見る</a>${n<8?`<a href="#lesson-${n+1}">次の回 →</a>`:''}</div></div><img src="luna-teacher.webp" alt="ルナ先生" loading="lazy"></header><div class="lesson-layout"><aside class="toc"><strong>この回の内容</strong>${l.sections.map((s,i)=>`<a href="#lesson-${n}-part-${i+1}">${i+1}. ${escapeHTML(s.title)}</a>`).join('')}<div class="teacher-mini"><img src="luna-teacher.webp" alt="ルナ先生"><span>ご自分のペースでどうぞ♡</span></div></aside><div class="lesson-body">${l.sections.map((s,i)=>`<section class="lesson-section" id="lesson-${n}-part-${i+1}"><div class="part-label">POINT ${i+1}</div><h2>${escapeHTML(s.title)}</h2><p>${escapeHTML(s.description)}</p><h3>🖱️ 操作の手順</h3><ol>${s.steps.map(step=>`<li>${escapeHTML(step)}</li>`).join('')}</ol><div class="prompt-box"><div class="prompt-title"><strong>💬 そのまま使える質問文</strong><button class="copy" data-copy="${i}">コピーする</button></div><p>${escapeHTML(s.prompt)}</p></div><div class="teacher-tip"><img src="luna-teacher.webp" alt="ルナ先生" loading="lazy"><p>講師ルナからのアドバイス ♡<br><span>${i%2===0?'初めての方も安心してください。一つずつ操作してみましょう。':'画面が説明と違う場合は、端末名と画面の状況をChatGPTに伝えてみてください。'}</span></p></div></section>`).join('')}<div class="bottom-nav"><a class="btn ghost" href="#lessons">← 講座一覧へ</a>${n<8?`<a class="btn" href="#lesson-${n+1}">第${n+1}回へ進む →</a>`:'<a class="btn" href="#home">トップに戻る ♡</a>'}</div></div></div>`;app.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{const value=l.sections[Number(b.dataset.copy)].prompt;try{await navigator.clipboard.writeText(value);b.textContent='コピーしました ✓';}catch{const ta=document.createElement('textarea');ta.value=value;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();b.textContent='コピーしました ✓';}setTimeout(()=>b.textContent='コピーする',1700)}));}
function render(){const hash=decodeURIComponent(location.hash.slice(1));if(/^lesson-[1-8]-part-[1-9][0-9]*$/.test(hash)){const n=Number(hash.split('-')[1]);lesson(n);requestAnimationFrame(()=>document.getElementById(hash)?.scrollIntoView());}else if(/^lesson-[1-8]$/.test(hash)){lesson(Number(hash.split('-')[1]));window.scrollTo(0,0);}else{home();if(hash==='lessons')requestAnimationFrame(()=>document.getElementById('lessons')?.scrollIntoView());else window.scrollTo(0,0);}document.querySelectorAll('.menu').forEach(x=>x.classList.remove('open'));document.title=(/^lesson-[1-8](?:-part-[0-9]+)?$/.test(hash)?'第'+hash.split('-')[1]+'回 | ':'')+'ルナのChatGPT完全マスター講座';}
window.addEventListener('hashchange',render);render();document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.menu').classList.toggle('open'));
