import {html, css, LitElement} from 'lit-element';

import '@wonkytech/material-elements';
import '@wonkytech/vaadin-elements';
import '@wonkytech/tm-sites';

import './tm-demo-source';

import {parseSectionSource, fetchSource, getSourcePath} from './utils';

window.customElements.define('tm-examples', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String},
            source: {type: String},
            sites: {type: Object}
        }
    }

    constructor() {
        super();
        this.heading = '';
        this.source = 'main.js';
        this.sites = {}
    }

    // noinspection JSUnusedGlobalSymbols
    firstUpdated(_changedProperties) {
        this.dialog = this.shadowRoot.getElementById('dialog');
        this.tabs = this.shadowRoot.querySelector('#tabs');
        this.sections = this.shadowRoot.querySelector('#slot').assignedNodes().filter(node => node.nodeName === "SECTION");

        fetchSource(getSourcePath(this.source)).then(source => {
            this.sourceList = parseSectionSource(source);
            //console.log('------', sourceList);
        }).catch(error => {
            //console.log('------', error);
        });

        const {tabs,sections} = this;

        //console.log('Sections: ', sections);
        sections.forEach((section, index) => {
            const title = section.getAttribute('title');

            const heading = document.createElement('h3');
            heading.style = 'color:grey;margin-bottom:10px;';
            heading.innerText = (title === null? 'Example' : title);

            const button = document.createElement('button');
            button.onclick = () => {
                const {sourceList} = this;
                this.shadowRoot.getElementById('ddd').viewSource(sourceList[index]);
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

            const templates = Array.from(section.childNodes).filter(node => node.tagName === 'CODE');
            templates.forEach(template  => {
                Array.from(template.childNodes).forEach((node) => {
                    //section.appendChild(node);
                });
            });

            const scripts = Array.from(section.childNodes).filter(node => node.tagName === 'SCRIPT');
            scripts.forEach(script  => {
                //console.log('Cloning script: ', script.innerText);
                let clone = document.createElement('script');
                clone.innerText = script.innerText;
                document.head.appendChild(clone);
            });
        });

        this._selectSection();
        tabs.addEventListener('selected-changed', () => {
            this._selectSection();
        });

    }

    _selectSection() {
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
                --tm-example-icon-size: 32px;
            }

            article {
                min-width: 500px;
            }

            h1 {
                color: gray;
                text-align: center;
                margin-bottom: 10px;
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
            
            tm-sites {
                width: 100%;
                margin-bottom: 20px;
            }
        `;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        const {openSite} = this;

        return html`
            
            <article>
                <h1>${this.heading}</h1>
                ${(Object.keys(this.sites).length === 0 ? "" : html`
                    <tm-sites .sites="${this.sites}"></tm-sites>
                `)}
                <hr/>
                <nav>
                    <vaadin-tabs id="tabs"></vaadin-tabs>
                </nav>
                <main>
                    <slot id="slot"></slot>
                </main>
            </article>

            <tm-demo-source id="ddd"></tm-demo-source>
        `;
    }
});



