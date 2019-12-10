import {html, css, LitElement} from 'lit-element';

import '@wonkytech/material-elements';
import '@wonkytech/vaadin-elements';
import '@wonkytech/polymer-elements';
import '@wonkytech/tm-sites';

import './tm-demo-source';

import {parseSectionSource, fetchSource, getSourcePath} from './utils';

window.customElements.define('tm-examples', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String},
            source: {type: String},
            sites: {type: Object},
            author: {type: Object}
        }
    }

    constructor() {
        super();
        this.heading = '';
        this.source = 'main.js';
        this.sites = {};
        // TODO: need to sort out making author details configurable
        this.author = {
            'site': 'http://tim.mcmaster.id.au',
            'src': 'https://github.com/tmcmaster',
            'pika': 'https://www.pika.dev/search?q=%40wonkytech',
            'npm': 'https://www.npmjs.com/search?q=%40wonkytech',
            'docs': 'https://wonkytech.net'
        }
    }

    // noinspection JSUnusedGlobalSymbols
    firstUpdated(_changedProperties) {
        this.dialog = this.shadowRoot.getElementById('dialog');
        this.tabs = this.shadowRoot.querySelector('#tabs');
        this.sections = this.shadowRoot.querySelector('#slot').assignedNodes().filter(node => node.nodeName === "SECTION");

        fetchSource(getSourcePath(this.source)).then(source => {
            this.sourceList = parseSectionSource(source);
        }).catch(error => {
            console.error('There was an error get the source for the examples.', error);
        });

        const {tabs,sections} = this;

        //console.log('Sections: ', sections);
        sections.forEach((section, index) => {
            const title = section.getAttribute('title');

            section.style = "display: flex";
            const scripts = Array.from(section.childNodes).filter(node => node.tagName === 'SCRIPT');
            scripts.forEach(script  => {
                let clone = document.createElement('script');
                clone.innerText = script.innerText;
                document.head.appendChild(clone);
                section.removeChild(script);
            });

            const styles = Array.from(section.childNodes).filter(node => node.tagName === 'STYLE');
            styles.forEach(style  => {
                let clone = document.createElement('style');
                clone.innerText = style.innerText;
                document.head.appendChild(clone);
                section.removeChild(style);
            });

            const button = document.createElement('button');
            button.onclick = () => {
                const {sourceList} = this;
                this.shadowRoot.getElementById('source').viewSource(sourceList[index]);
            };
            button.name = 'source';
            button.style = 'margin-top:-20px;float:right;border:solid lightgrey 0.5px;';
            button.appendChild(document.createTextNode('Source'));
            section.insertBefore(button, section.firstChild);

            const main = document.createElement('main');
            //main.style = "display:inline-block;";
            Array.from(section.childNodes).filter(child => child.name !== 'source').forEach(child => {
                main.appendChild(section.removeChild(child));
            });
            section.appendChild(main);

            const tab = document.createElement('vaadin-tab');
            tab.appendChild(document.createTextNode(title));
            tabs.appendChild(tab);


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
                //border: solid gray 2px;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                --tm-example-icon-size: 32px;
                padding: 3vmin;
            }

            article {
                min-width: 500px;
                max-width:1000px;
                width:100%;
                height: 100%;
                display: flex;
                flex-direction: column;
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
                float: right;
                margin-bottom: 20px;
            }
            header {
            }
            main {
                flex-grow: 1;
                //border: solid blue 1px;
                overflow: scroll;
            }
            footer {
                //border: solid red 1px;
                max-height: 25px;
                margin-top: 5px;
            }
            
            div.header {
                height: 50px;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            tm-sites > h2, tm-sites > span {
                color: gray;
            }

            /* TODO: need to work out how to style within slotted elements (section need a main for the example to go in.)*/
            ::slotted(section) {
                box-sizing: border-box;
                //border: solid red 5px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                padding-top: 20px;
                //border: solid lightgray 1px;
            }
        `;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        const {openSite} = this;

        return html`
            <article>
                <header>
                    <div class="header">
                        ${(Object.keys(this.sites).length === 0 ? "" : html`
                            <tm-sites .sites="${this.sites}">
                                <h2 slot="left">${this.heading}</h2>
                                <h2 slot="right">Demos</h2>
                            </tm-sites>
                        `)}
                    </div>
                    <hr/>                
                    <nav>
                        <vaadin-tabs id="tabs"></vaadin-tabs>
                    </nav>
                </header>
                <main>
                    <slot id="slot"></slot>
                </main>
                <footer>
                    <tm-sites .sites="${this.author}">
                        <span slot="left">Tim McMaster</span>
                        <span slot="right">tim@mcmaster.id.au</span>
                    </tm-sites>
                </footer>
            </article>

            <tm-demo-source id="source"></tm-demo-source>
        `;
    }
});



