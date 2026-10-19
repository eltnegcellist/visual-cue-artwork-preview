# Visual Cue イラスト・動画プレビュー

[プレビューを開く](https://eltnegcellist.github.io/visual-cue-artwork-preview/)

静止画と動作を比較する採用審査用ページです。制作元は
[Web_EmmaLocal_English_for_babies / PR #107](https://github.com/eltnegcellist/Web_EmmaLocal_English_for_babies/pull/107)。
採用済み素材と旧版を区別するプレビューです。採用数はdeployment.jsonを参照してください。

[音声付きUIプレビュー](https://eltnegcellist.github.io/visual-cue-artwork-preview/ui.html)では、実際の表示部品と採用済み録音音声で切替を確認できます。新しいEmmaの7身振りと英文割当は確認候補です。マイク・AIモデル・アプリ本体の公開は含みません。

公開元は `gh-pages` ブランチのルートです。`index.html` は動画を内包した単一HTMLで、
GitHub Pagesでもローカルのファイルとしても閲覧できます。
生成元コミットとHTMLのSHA256は `deployment.json` を参照してください。

再公開は制作元の `scripts/visual-cue/prepare_pages.py` でパッケージを作成し、
このリポジトリの `gh-pages` にコミット・pushします。
