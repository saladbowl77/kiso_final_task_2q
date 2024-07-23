# 基礎実習 2Q HTML・CSS 最終課題

京都精華大学 メディア表現学部 基礎実習 6(2 年 2Q 基礎実習)の最終課題です。

温かみのある手打ちの HTML と CSS という課題をベースに、技術的に幾つかふざけた要素を作りたいと言ったやつです。

## 技術的にふざけたもの

- ### web components

  JavaScript で作れる例のコンポーネントです。header 並びに footer 部分に活用してます。

- ### pnpm / stylelint

  いや誰が stylelint を入れるんだよって声が聞こえてきそうですが、入れてます。

  案の定(?)パッケージマネージャーは [pnpm](https://pnpm.io/ja/) なので、以下のコードでインストールできます。

  ```bash
  pnpm i
  ```

  pnpm 自体は brew で入れるか corepack で入れるのをお勧めします

  ```bash
  corepack enable pnpm
  # pnpm が有効になっているか確認
  pnpm --version
  ```
