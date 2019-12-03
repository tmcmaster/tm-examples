import {css, html, LitElement} from "lit-element";
import CodeFlask from "codeflask";

window.customElements.define('tm-demo-source', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            title: {type: String}
        }
    }

    constructor() {
        super();
        this.title = 'Source Code';
    }

    // noinspection JSUnusedGlobalSymbols
    firstUpdated(_changedProperties) {
        this.dialog = this.shadowRoot.getElementById('dialog');
        let codeDiv = this.shadowRoot.getElementById('source');
        this.flask = new CodeFlask(codeDiv, {language: 'html'});
    }

    static get styles() {
        // language=CSS
        return css`
            main {
                display: inline-block;
                box-sizing: border-box;
                scroll-behavior: auto;
                border: solid lightgray 2px;
                overflow: scroll;
                padding: 20px;
                width: 100%;
                height: 400px;
            }
            #source {
                display: inline-block;
                box-sizing: border-box;
                //border: solid red 2px;
            }
            textarea {
                display: none;
            }
            pre {
                margin: 0;
            }
            h3 {
                margin-bottom: 0;
                text-align: center;
                color: blue;
            }
        `;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <mwc-dialog id="dialog" heading="${this.title}">
                <main>
                    <div id="source"></div>
                </main>
                <mwc-button slot="secondaryAction" dialogAction="cancel">Cancel</mwc-button>
            </mwc-dialog>
        `;
    }

    viewSource(source) {
        const {flask, dialog} = this;
        flask.updateCode(source);
        dialog.open = true;
    }
});
