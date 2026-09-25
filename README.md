# コラッツ予想オンライン

コラッツ予想をブラウザ上で計算・可視化するオープンソースプロジェクトです。

## 機能

- コラッツ数列の計算
- 停止時間（1に到達するまでのステップ数）
- 数列中の最大値
- 1への到達確認
- 数列の表示
- 計算履歴
- 複数の初期値の一括計算
- 最大ステップ数の設定
- 結果のJSON保存
- ブラウザだけで動作
- 元のScratch版を `scratch/` に収録

## 数学的定義

正の整数 n に対して

- n が偶数なら n → n / 2
- n が奇数なら n → 3n + 1

という操作を繰り返します。

コラッツ予想は、任意の正の整数から開始してこの操作を繰り返すと、最終的に 1 に到達すると主張する未解決問題です。

このソフトウェアは数値実験を行うものであり、コラッツ予想の証明を主張するものではありません。

## 起動方法

`index.html` をブラウザで開いてください。

ES Modules を利用するため、環境によってはローカルHTTPサーバーを使用してください。

例:

```bash
python -m http.server 8000
```

その後 `http://localhost:8000/` を開きます。

## 構成

```text
.
├── index.html
├── style.css
├── script.js
├── src/
│   ├── collatz.js
│   ├── calculator.js
│   └── ui.js
├── tests/
│   └── collatz.test.js
├── docs/
│   └── mathematics.md
├── examples/
│   └── example.json
├── scratch/
│   └── コラッツ予想オンライン.sb3
├── LICENSE
└── .gitignore
```
