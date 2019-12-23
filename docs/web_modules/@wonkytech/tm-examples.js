import './material-elements.js';
import { h as html } from '../common/lit-html-acd9a6eb.js';
import { LitElement, css } from '../lit-element.js';
import '../common/disable-upgrade-mixin-ae41579f.js';
import './polymer-elements.js';
import './vaadin-elements.js';
import './tm-sites.js';
import CodeFlask from '../codeflask.js';

window.customElements.define('tm-demo-source', class extends LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {
      title: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.title = 'Source Code';
  } // noinspection JSUnusedGlobalSymbols


  firstUpdated(_changedProperties) {
    this.dialog = this.shadowRoot.getElementById('dialog');
    let codeDiv = this.shadowRoot.getElementById('source');
    this.flask = new CodeFlask(codeDiv, {
      language: 'html'
    });
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
  } // noinspection JSUnusedGlobalSymbols


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
    const {
      flask,
      dialog
    } = this;
    flask.updateCode(source);
    dialog.open = true;
  }

});

function parseSectionSource(source) {
  const START = "<section ";
  const END = "</section>";
  let pointer = 0;
  const sourceList = [];

  while ((pointer = source.indexOf(START, pointer)) > -1) {
    const start = source.indexOf('>', pointer) + 1;
    const end = source.indexOf(END, start + 1);
    const sectionSource = removeIndent(source.substr(start, end - start));
    sourceList.push(sectionSource);
    pointer = end + END.length;
  } //console.log('---- RESULTS: ', sourceList);


  return sourceList;
}

function removeIndent(source) {
  //console.log('Source: ', source);
  const lines = source.split('\n').filter(line => line.search(/\S/) > -1); //console.log('Lines: ', lines);

  const shortestLeadingWhitespace = Math.min(lines.map(line => line.search(/\S/)).filter(n => n > -1).reduce((a, b) => a < b ? a : b));
  const result = lines.map(line => line.substr(shortestLeadingWhitespace)).join('\n');
  return result;
}

function getSourcePath(source) {
  const url = document.location.href;
  const DEMO_REGEX = 'http[s]?:\\/\\/[A-z-]*[:]?[0-9]*\\/demo';
  const DOCS_REGEX = 'http[s]?:\\/\\/[A-z-]*[:]?[0-9]*';
  const GITHUB_REGEX = 'http[s]?:\\/\\/[A-z-]*\\.github.io\\/[A-z-]*';
  return url.match(DEMO_REGEX) === null ? url.match(GITHUB_REGEX) === null ? url.match(DOCS_REGEX) === null ? source : source : source : "../docs/" + source;
}

function fetchSource(source) {
  return new Promise((resolve, reject) => {
    fetch(source).then(response => {
      if (response.status == 200) {
        return response.text();
      } else {
        reject('Could not retrieve the source: ' + response.statusText);
      }
    }).then(text => {
      const END_TOKEN = '</tm-examples>';
      const start = text.indexOf('<tm-examples');
      const end = text.substr(start).indexOf(END_TOKEN) + END_TOKEN.length;
      const source = text.substr(start, end); //console.log('MAIN SOURCE SOURCE: ', start, end, source);

      resolve(source);
    }).catch(error => {
      console.log('MAIN SOURCE ERROR: ', error);
      reject(error);
    });
  });
}

window.customElements.define('tm-examples', class extends LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {
      heading: {
        type: String
      },
      source: {
        type: String
      },
      sites: {
        type: Object
      },
      author: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.heading = '';
    this.source = 'main.js';
    this.sites = {}; // TODO: need to sort out making author details configurable

    this.author = {
      'site': 'http://tim.mcmaster.id.au',
      'src': 'https://github.com/tmcmaster',
      'pika': 'https://www.pika.dev/search?q=%40wonkytech',
      'npm': 'https://www.npmjs.com/search?q=%40wonkytech',
      'docs': 'https://wonkytech.net'
    };
  } // noinspection JSUnusedGlobalSymbols


  firstUpdated(_changedProperties) {
    this.dialog = this.shadowRoot.getElementById('dialog');
    this.tabs = this.shadowRoot.querySelector('#tabs');
    this.sections = this.shadowRoot.querySelector('#slot').assignedNodes().filter(node => node.nodeName === "SECTION");
    fetchSource(getSourcePath(this.source)).then(source => {
      this.sourceList = parseSectionSource(source);
    }).catch(error => {
      console.error('There was an error get the source for the examples.', error);
    });
    const {
      tabs,
      sections
    } = this; //console.log('Sections: ', sections);

    sections.forEach((section, index) => {
      const title = section.getAttribute('title');
      section.style = "display: flex";
      const scripts = Array.from(section.childNodes).filter(node => node.tagName === 'SCRIPT');
      scripts.forEach(script => {
        let clone = document.createElement('script');
        clone.innerText = script.innerText;
        document.head.appendChild(clone);
        section.removeChild(script);
      });
      const styles = Array.from(section.childNodes).filter(node => node.tagName === 'STYLE');
      styles.forEach(style => {
        let clone = document.createElement('style');
        clone.innerText = style.innerText;
        document.head.appendChild(clone);
        section.removeChild(style);
      });
      const button = document.createElement('button');

      button.onclick = () => {
        const {
          sourceList
        } = this;
        this.shadowRoot.getElementById('source').viewSource(sourceList[index]);
      };

      button.name = 'source';
      button.style = 'margin-top:-20px;float:right;border:solid lightgrey 0.5px;';
      button.appendChild(document.createTextNode('Source'));
      section.insertBefore(button, section.firstChild);
      const main = document.createElement('main');
      main.style.display = "flex";
      main.style.flexDirection = "row";
      main.style.justifyContent = "center";
      Array.from(section.childNodes).filter(child => child.name !== 'source').forEach(child => {
        main.appendChild(section.removeChild(child));
      });
      section.main = main;
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
    const {
      sections,
      tabs
    } = this;
    sections.forEach((section, index) => {
      if (index === tabs.selected) {
        if (section.main !== undefined) {
          section.appendChild(section.main);
          section.main = undefined;
        }

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
                width: 100vw;
                height: 100vh;
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
            
            nav {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
        `;
  } // noinspection JSUnusedGlobalSymbols


  render() {
    return html`
            <article>
                <header>
                    <div class="header">
                        ${Object.keys(this.sites).length === 0 ? "" : html`
                            <tm-sites .sites="${this.sites}">
                                <h2 slot="left">${this.heading}</h2>
                                <h2 slot="right">Demos</h2>
                            </tm-sites>
                        `}
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
