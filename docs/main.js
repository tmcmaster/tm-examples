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
        <section title="button">
            <style>
                button {
                    border: solid lightgrey 1px;
                }
            </style>
            <button>Don't Press</button>
        </section>
        <section title="input">
            <input value="Some Text"/>
        </section>
    </tm-examples>
`, document.querySelector('body'));