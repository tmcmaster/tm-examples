import {html, render} from "./web_modules/lit-html.js";

render(html`
    <style>
        body {
          background-color: white;
          padding: 0;
          margin: 0;
        } 
    </style>

    <tm-examples heading="HTML Elements">
        <section title="input">
            <input type="submit" value="Submit">
        </section>
        <section title="button">
            <style>
                button {
                    border: solid blue 1px;
                }
            </style>
            <script>
                function testing() {
                    alert('PANIC!!!!');
                }
            </script>
            <button @click="${() => testing()}">Don't Press</button>
        </section>
    </tm-examples>
`, document.querySelector('body'));