import {html, css, LitElement} from 'lit-element';

import CodeFlask from 'codeflask';
import '@wonkytech/material-elements';
import '@wonkytech/vaadin-elements';

window.customElements.define('tm-examples', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String}
        }
    }

    constructor() {
        super();
        this.heading = '';
    }

    // noinspection JSUnusedGlobalSymbols
    firstUpdated(_changedProperties) {
        this.dialog = this.shadowRoot.getElementById('dialog');
        this.tabs = this.shadowRoot.querySelector('#tabs');
        this.sections = this.shadowRoot.querySelector('#slot').assignedNodes().filter(node => node.nodeName === "SECTION");

        const {tabs,sections} = this;

        console.log('Sections: ', sections);
        sections.forEach(section => {
            const title = section.getAttribute('title');

            const heading = document.createElement('h3');
            heading.style = 'color:grey;margin-bottom:10px;';
            heading.innerText = (title === null? 'Example' : title);

            const button = document.createElement('button');
            button.onclick = () => {
                this.shadowRoot.getElementById('ddd').viewSource(section);
            };
            button.style = 'float:right;margin-top:-30px;';
            button.appendChild(document.createTextNode('Source'));

            const hr = document.createElement('hr');
            hr.style = "border:solid lightgrey 0.5px;";

            section.insertBefore(hr, section.firstChild);
            section.insertBefore(button, section.firstChild);
            section.insertBefore(heading, section.firstChild);
            const tab = document.createElement('vaadin-tab');
            tab.appendChild(document.createTextNode(title));
            tabs.appendChild(tab);

            const scripts = Array.from(section.childNodes).filter(node => node.tagName === 'SCRIPT');
            scripts.forEach(script  => {
                console.log('Cloning script: ', script.innerText);
                let clone = document.createElement('script');
                clone.innerText = script.innerText;
                document.head.appendChild(clone);
            });
        });

        this.selectSection();
        tabs.addEventListener('selected-changed', () => {
            this.selectSection();
        });

    }

    selectSection() {
        const {sections, tabs} = this;
        sections.forEach((section, index) => {
            if (index === tabs.selected) {
                section.style = "display:block";
            } else {
                section.style = "display:none";
            }
        });
    }
    static get styles() {
        // language=CSS
        return css`
            :host {
                display: flex;
                flex-direction: row;
                justify-content: center;
                background: var(--tm-demo-background, inherit);
                //border: solid green 2px;
                box-sizing: border-box;
                padding: 10px;
                width: 100%;
            }

            article {
                min-width: 500px;
            }

            h1 {
                color: gray;
                text-align: center;
            }

            hr {
                border: solid lightgray 0.5px;
            }

            button {
                clear: both;
                float: right;
            }

            .hidden {
                display: none;
            }
        `;
    }
    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <article>
                <h1>${this.heading}</h1>
                <hr/>
                <nav>
                    <vaadin-tabs id="tabs">

                    </vaadin-tabs>
                </nav>
                <main>
                    <slot id="slot"></slot>
                </main>
            </article>

            <tm-demo-source id="ddd"></tm-demo-source>
        `;
    }
});

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

    viewSource(element) {
        const {flask, dialog} = this;
        const lines = element.innerHTML.split('\n').filter(line => line.search(/\S/) > -1).splice(1);
        const shortestLeadingWhitespace = Math.min(lines.map(line => line.search(/\S/)).filter(n => n > -1).reduce((a,b) => (a < b ? a : b)));
        const source = lines.map(line => line.substr(shortestLeadingWhitespace)).join('\n');
        flask.updateCode(source);
        dialog.open = true;
    }
});