import {html, render} from "./web_modules/lit-html.js";

let dataGridData = [
    {name: {first:'AAA', last: 'aaa'}, location: {city: 'Aaa'}, visitCount: 1},
    {name: {first:'BBB', last: 'bb'}, location: {city: 'Bbb'}, visitCount: 2}
];

let sites = {
    'src': 'https://github.com/tmcmaster/tm-examples',
    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-examples',
    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-examples',
    'docs': 'https://github.com/tmcmaster/tm-examples#readme'
};

render(html`
    <style>
        body {
            background-color: white;
            padding: 0;
            margin: 0;
            left:0;
            top:0;
            width: 100vw;
            height: 100vh;  
        } 
        
        vaadin-grid {
            height: 500px;
        }
    </style>

    <tm-examples heading="HTML Elements" .sites="${sites}">
        
        <section title="Vaadin Grid">
            <script>
                let dataGridData = [
                    {name: {first:'AAA', last: 'aaa'}, location: {city: 'Aaa'}, visitCount: 1},
                    {name: {first:'BBB', last: 'bb'}, location: {city: 'Bbb'}, visitCount: 2}
                ];
            </script>
            <vaadin-grid id="vaadin-grid" .items="${dataGridData}">
                <vaadin-grid-filter-column path="name.first" header="First name"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column path="name.last" header="Last name"></vaadin-grid-filter-column>
                <vaadin-grid-sort-column path="location.city"></vaadin-grid-sort-column>
                <vaadin-grid-column path="visitCount" text-align="end" width="120px" flex-grow="0"></vaadin-grid-column>
            </vaadin-grid>
        </section>
        
        <section title="input">
            <input value="Some text...."/>
        </section>
        
        <section title="button">
            <style>
                button,input {
                    border: solid grey 1px;
                }
            </style>
            <script>
                function testing() {
                    alert('PANIC!!!!');
                }
            </script>
            <button @click="${() => testing()}">Don't Press</button>
        </section>
        
        <section title="Paper Button">
            <paper-button>Paper Button</paper-button>
        </section>
        
        <section title="Paper Input">
            <paper-input always-float-label label="Paper Input"></paper-input>
        </section>
    </tm-examples>
`, document.querySelector('body'));