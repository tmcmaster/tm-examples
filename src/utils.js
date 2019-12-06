function parseSectionSource(source) {
    const START = "<section ";
    const END = "</section>";

    let pointer = 0;

    const sourceList = [];
    while ((pointer = source.indexOf(START, pointer)) > -1) {
        const start = source.indexOf('>', pointer) + 1;
        const end = source.indexOf(END, start + 1);
        const sectionSource = removeIndent(source.substr(start, end-start));
        sourceList.push(sectionSource);
        pointer = end + END.length;
    }
    //console.log('---- RESULTS: ', sourceList);
    return sourceList;
}

function removeIndent(source){
    //console.log('Source: ', source);
    const lines = source.split('\n').filter(line => line.search(/\S/) > -1);
    //console.log('Lines: ', lines);
    const shortestLeadingWhitespace = Math.min(lines.map(line => line.search(/\S/)).filter(n => n > -1).reduce((a,b) => (a < b ? a : b)));
    const result = lines.map(line => line.substr(shortestLeadingWhitespace)).join('\n');
    return result;
}

function getSourcePath(source) {
    const url = document.location.href;

    const DEMO_REGEX = 'http[s]?:\\/\\/[A-z-]*[:]?[0-9]*\\/demo';
    const DOCS_REGEX = 'http[s]?:\\/\\/[A-z-]*[:]?[0-9]*';
    const GITHUB_REGEX = 'http[s]?:\\/\\/[A-z-]*\\.github.io\\/[A-z-]*';

    return (url.match(DEMO_REGEX) === null
        ? (url.match(GITHUB_REGEX) === null
            ? (url.match(DOCS_REGEX) === null ? source : source)
            : source)
        : "../docs/" + source)
}

function fetchSource(source) {
    return new Promise((resolve, reject) => {
        fetch(source).then((response) => {
            if (response.status == 200) {
                return response.text();
            } else {
                reject('Could not retrieve the source: ' + response.statusText);
            }

        }).then((text) => {
            const END_TOKEN = '</tm-examples>';
            const start = text.indexOf('<tm-examples');
            const end = text.substr(start).indexOf(END_TOKEN) + END_TOKEN.length;
            const source = text.substr(start,end);
            //console.log('MAIN SOURCE SOURCE: ', start, end, source);
            resolve(source);
        }).catch((error) => {
            console.log('MAIN SOURCE ERROR: ', error);
            reject(error);
        });
    });
}

export {parseSectionSource, fetchSource, getSourcePath,removeIndent};