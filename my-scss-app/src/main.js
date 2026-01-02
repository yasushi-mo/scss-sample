import "./style.scss";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
      <div class="container">
      <h1>SCSS Mixin デモ</h1>

      <section class="button-demo">
        <h2>ボタンの例</h2>
        <button class="primary-button">Primary Button</button>
        <button class="success-button">Success Button</button>
        <button class="danger-button">Danger Button</button>
        <button class="warning-button">Warning Button</button>
      </section>

      <section class="card-demo">
        <h2>カードの例</h2>
        <div class="card">
          <h3>通常のカード</h3>
          <p>デフォルトのボックスシャドウを使用しています。</p>
        </div>

        <div class="elevated-card">
          <h3>強調されたカード</h3>
          <p>より濃いシャドウで浮き上がって見えます。</p>
        </div>

        <div class="subtle-card">
          <h3>控えめなカード</h3>
          <p>薄いシャドウで控えめな印象です。</p>
        </div>
      </section>

      <section class="text-demo">
        <h2>テキスト省略の例</h2>
        <p class="single-line-text">
          これは非常に長いテキストで、1行に収まらない場合は省略記号(...)で表示されます。この機能は特に見出しやラベルなどで便利です。
        </p>

        <p class="multi-line-text">
          これは複数行のテキストの例です。3行まで表示され、それ以降は省略記号で表示されます。長い説明文やコメントなどで使用すると便利な機能です。この機能を使うことで、レイアウトを崩すことなく長いテキストを扱うことができます。
        </p>
      </section>
    </div>
`;

setupCounter(document.querySelector("#counter"));
