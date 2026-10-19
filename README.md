# Visual Cue イラスト・動画プレビュー

[プレビューを開く](https://eltnegcellist.github.io/visual-cue-artwork-preview/)

静止画と動作を比較する採用審査用ページです。制作元は
[Web_EmmaLocal_English_for_babies / PR #107](https://github.com/eltnegcellist/Web_EmmaLocal_English_for_babies/pull/107)。
採用済み素材と旧版を区別するプレビューです。採用数はdeployment.jsonを参照してください。

[音声付きUIプレビュー](https://eltnegcellist.github.io/visual-cue-artwork-preview/ui.html)では、実際の表示部品と採用済み録音音声で切替を確認できます。mainのまばたき・口パクを維持し、ハート・星を背景に出す2案を確認できます。7種類の差し替え身振りは撤回済みで、英文割当と背景の意味は確認候補です。マイク・AIモデル・アプリ本体の公開は含みません。

[テスト版アプリ](https://eltnegcellist.github.io/visual-cue-artwork-preview/test/)は制作ブランチの実際の画面・音声Worker・表示制御を使用します。「押して聞く」と全英文の選択再生を試せます。テスト入口ではマイク・認識モデルの自動起動を行わず、録音音声は再生時に検証して取得します。本番アプリの更新やmainへのマージは行いません。
[英文の網羅率](https://eltnegcellist.github.io/visual-cue-artwork-preview/coverage.html)で、0件の動画も含む全件数・割合と英文CSVを確認できます。

公開元は `gh-pages` ブランチのルートです。`index.html` は動画を内包した単一HTMLで、
GitHub Pagesでもローカルのファイルとしても閲覧できます。
生成元コミットとHTMLのSHA256は `deployment.json` を参照してください。

再公開は制作元の `scripts/visual-cue/prepare_pages.py` でパッケージを作成し、
このリポジトリの `gh-pages` にコミット・pushします。
