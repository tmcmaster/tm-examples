import './material-elements.js';
import { L as LitElement, c as css, h as html } from '../common/lit-element-54503d46.js';
import '../common/disable-upgrade-mixin-ae41579f.js';
import './polymer-elements.js';
import './tm-sites.js';
import './vaadin-elements.js';

var BACKGROUND_COLOR="#fff",LINE_HEIGHT="20px",FONT_SIZE="13px",defaultCssTheme="\n.codeflask {\n  background: "+BACKGROUND_COLOR+";\n  color: #4f559c;\n}\n\n.codeflask .token.punctuation {\n  color: #4a4a4a;\n}\n\n.codeflask .token.keyword {\n  color: #8500ff;\n}\n\n.codeflask .token.operator {\n  color: #ff5598;\n}\n\n.codeflask .token.string {\n  color: #41ad8f;\n}\n\n.codeflask .token.comment {\n  color: #9badb7;\n}\n\n.codeflask .token.function {\n  color: #8500ff;\n}\n\n.codeflask .token.boolean {\n  color: #8500ff;\n}\n\n.codeflask .token.number {\n  color: #8500ff;\n}\n\n.codeflask .token.selector {\n  color: #8500ff;\n}\n\n.codeflask .token.property {\n  color: #8500ff;\n}\n\n.codeflask .token.tag {\n  color: #8500ff;\n}\n\n.codeflask .token.attr-value {\n  color: #8500ff;\n}\n";function cssSupports(e,t){return "undefined"!=typeof CSS?CSS.supports(e,t):"undefined"!=typeof document&&toCamelCase(e)in document.body.style}function toCamelCase(e){return (e=e.split("-").filter(function(e){return !!e}).map(function(e){return e[0].toUpperCase()+e.substr(1)}).join(""))[0].toLowerCase()+e.substr(1)}var FONT_FAMILY='"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',COLOR=cssSupports("caret-color","#000")?BACKGROUND_COLOR:"#ccc",LINE_NUMBER_WIDTH="40px",editorCss="\n  .codeflask {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  .codeflask, .codeflask * {\n    box-sizing: border-box;\n  }\n\n  .codeflask__pre {\n    pointer-events: none;\n    z-index: 3;\n    overflow: hidden;\n  }\n\n  .codeflask__textarea {\n    background: none;\n    border: none;\n    color: "+COLOR+";\n    z-index: 1;\n    resize: none;\n    font-family: "+FONT_FAMILY+";\n    -webkit-appearance: pre;\n    caret-color: #111;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n  }\n\n  .codeflask--has-line-numbers .codeflask__textarea {\n    width: calc(100% - "+LINE_NUMBER_WIDTH+");\n  }\n\n  .codeflask__code {\n    display: block;\n    font-family: "+FONT_FAMILY+";\n    overflow: hidden;\n  }\n\n  .codeflask__flatten {\n    padding: 10px;\n    font-size: "+FONT_SIZE+";\n    line-height: "+LINE_HEIGHT+";\n    white-space: pre;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: auto;\n    margin: 0 !important;\n    outline: none;\n    text-align: left;\n  }\n\n  .codeflask--has-line-numbers .codeflask__flatten {\n    width: calc(100% - "+LINE_NUMBER_WIDTH+");\n    left: "+LINE_NUMBER_WIDTH+";\n  }\n\n  .codeflask__line-highlight {\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 100%;\n    height: "+LINE_HEIGHT+";\n    background: rgba(0,0,0,0.1);\n    z-index: 1;\n  }\n\n  .codeflask__lines {\n    padding: 10px 4px;\n    font-size: 12px;\n    line-height: "+LINE_HEIGHT+";\n    font-family: 'Cousine', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: "+LINE_NUMBER_WIDTH+";\n    height: 100%;\n    text-align: right;\n    color: #999;\n    z-index: 2;\n  }\n\n  .codeflask__lines__line {\n    display: block;\n  }\n\n  .codeflask.codeflask--has-line-numbers {\n    padding-left: "+LINE_NUMBER_WIDTH+";\n  }\n\n  .codeflask.codeflask--has-line-numbers:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: "+LINE_NUMBER_WIDTH+";\n    height: 100%;\n    background: #eee;\n    z-index: 1;\n  }\n";function injectCss(e,t,n){var a=t||"codeflask-style",s=n||document.head;if(!e)return !1;if(document.getElementById(a))return !0;var o=document.createElement("style");return o.innerHTML=e,o.id=a,s.appendChild(o),!0}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(e){return String(e).replace(/[&<>"'`=/]/g,function(e){return entityMap[e]})}var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var prism=createCommonjsModule(function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var s,o,i=a.util.type(t);switch(n=n||{},i){case"Object":if(o=a.util.objId(t),n[o])return n[o];for(var r in s={},n[o]=s,t)t.hasOwnProperty(r)&&(s[r]=e(t[r],n));return s;case"Array":return o=a.util.objId(t),n[o]?n[o]:(s=[],n[o]=s,t.forEach(function(t,a){s[a]=e(t,n);}),s);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var s in t)n[s]=t[s];return n},insertBefore:function(e,t,n,s){var o=(s=s||a.languages)[e],i={};for(var r in o)if(o.hasOwnProperty(r)){if(r==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(r)||(i[r]=o[r]);}var c=s[e];return s[e]=i,a.languages.DFS(a.languages,function(t,n){n===c&&t!=e&&(this[t]=i);}),i},DFS:function e(t,n,s,o){o=o||{};var i=a.util.objId;for(var r in t)if(t.hasOwnProperty(r)){n.call(t,r,t[r],s||r);var l=t[r],c=a.util.type(l);"Object"!==c||o[i(l)]?"Array"!==c||o[i(l)]||(o[i(l)]=!0,e(l,n,r,o)):(o[i(l)]=!0,e(l,n,null,o));}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t);},highlightAllUnder:function(e,t,n){var s={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",s);for(var o,i=s.elements||e.querySelectorAll(s.selector),r=0;o=i[r++];)a.highlightElement(o,!0===t,s.callback);},highlightElement:function(n,s,o){for(var i,r,l=n;l&&!t.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(t)||[,""])[1].toLowerCase(),r=a.languages[i]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+i,n.parentNode&&(l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i));var c={element:n,language:i,grammar:r,code:n.textContent},d=function(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),o&&o.call(c.element);};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(s&&e.Worker){var u=new Worker(a.filename);u.onmessage=function(e){d(e.data);},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}));}else d(a.highlight(c.code,c.grammar,c.language));else d(a.util.encode(c.code));else a.hooks.run("complete",c);},highlight:function(e,t,n){var o={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",o),o.tokens=a.tokenize(o.code,o.grammar),a.hooks.run("after-tokenize",o),s.stringify(a.util.encode(o.tokens),o.language)},matchGrammar:function(e,t,n,o,i,r,l){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==l)return;var d=n[c];d="Array"===a.util.type(d)?d:[d];for(var u=0;u<d.length;++u){var p=d[u],h=p.inside,g=!!p.lookbehind,f=!!p.greedy,m=0,b=p.alias;if(f&&!p.pattern.global){var k=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,k+"g");}p=p.pattern||p;for(var y=o,C=i;y<t.length;C+=t[y].length,++y){var F=t[y];if(t.length>e.length)return;if(!(F instanceof s)){if(f&&y!=t.length-1){if(p.lastIndex=C,!(T=p.exec(e)))break;for(var v=T.index+(g?T[1].length:0),x=T.index+T[0].length,w=y,A=C,_=t.length;w<_&&(A<x||!t[w].type&&!t[w-1].greedy);++w)v>=(A+=t[w].length)&&(++y,C=A);if(t[y]instanceof s)continue;E=w-y,F=e.slice(C,A),T.index-=C;}else{p.lastIndex=0;var T=p.exec(F),E=1;}if(T){g&&(m=T[1]?T[1].length:0);x=(v=T.index+m)+(T=T[0].slice(m)).length;var L=F.slice(0,v),N=F.slice(x),S=[y,E];L&&(++y,C+=L.length,S.push(L));var I=new s(c,h?a.tokenize(T,h):T,b,T,f);if(S.push(I),N&&S.push(N),Array.prototype.splice.apply(t,S),1!=E&&a.matchGrammar(e,t,n,y,C,!0,c),r)break}else if(r)break}}}}},tokenize:function(e,t){var n=[e],s=t.rest;if(s){for(var o in s)t[o]=s[o];delete t.rest;}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t);},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var s,o=0;s=n[o++];)s(t);}},Token:s};function s(e,t,n,a,s){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!s;}if(e.Prism=a,s.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(n){return s.stringify(n,t,e)}).join("");var o={type:e.type,content:s.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,i);}a.hooks.run("wrap",o);var r=Object.keys(o.attributes).map(function(e){return e+'="'+(o.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return "<"+o.tag+' class="'+o.classes.join(" ")+'"'+(r?" "+r:"")+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),s=n.language,o=n.code,i=n.immediateClose;e.postMessage(a.highlight(o,a.languages[s],s)),i&&e.close();},!1),a):a;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(a.filename=o.src,a.manual||o.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==commonjsGlobal&&(commonjsGlobal.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"));}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var o={};o[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",o);}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag));}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,s=e.getAttribute("data-src"),o=e,i=/\blang(?:uage)?-([\w-]+)\b/i;o&&!i.test(o.className);)o=o.parentNode;if(o&&(a=(e.className.match(i)||[,""])[1]),!a){var r=(s.match(/\.(\w+)$/)||[,""])[1];a=n[r]||r;}var l=document.createElement("code");l.className="language-"+a,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",s,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,t.highlightElement(l),e.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty");},c.send(null);}}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}});},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight();}));}),CodeFlask=function(e,t){if(!e)throw Error("CodeFlask expects a parameter which is Element or a String selector");if(!t)throw Error("CodeFlask expects an object containing options as second parameter");if(e.nodeType)this.editorRoot=e;else{var n=document.querySelector(e);n&&(this.editorRoot=n);}this.opts=t,this.startEditor();};CodeFlask.prototype.startEditor=function(){if(!injectCss(editorCss,null,this.opts.styleParent))throw Error("Failed to inject CodeFlask CSS.");this.createWrapper(),this.createTextarea(),this.createPre(),this.createCode(),this.runOptions(),this.listenTextarea(),this.populateDefault(),this.updateCode(this.code);},CodeFlask.prototype.createWrapper=function(){this.code=this.editorRoot.innerHTML,this.editorRoot.innerHTML="",this.elWrapper=this.createElement("div",this.editorRoot),this.elWrapper.classList.add("codeflask");},CodeFlask.prototype.createTextarea=function(){this.elTextarea=this.createElement("textarea",this.elWrapper),this.elTextarea.classList.add("codeflask__textarea","codeflask__flatten");},CodeFlask.prototype.createPre=function(){this.elPre=this.createElement("pre",this.elWrapper),this.elPre.classList.add("codeflask__pre","codeflask__flatten");},CodeFlask.prototype.createCode=function(){this.elCode=this.createElement("code",this.elPre),this.elCode.classList.add("codeflask__code","language-"+(this.opts.language||"html"));},CodeFlask.prototype.createLineNumbers=function(){this.elLineNumbers=this.createElement("div",this.elWrapper),this.elLineNumbers.classList.add("codeflask__lines"),this.setLineNumber();},CodeFlask.prototype.createElement=function(e,t){var n=document.createElement(e);return t.appendChild(n),n},CodeFlask.prototype.runOptions=function(){this.opts.rtl=this.opts.rtl||!1,this.opts.tabSize=this.opts.tabSize||2,this.opts.enableAutocorrect=this.opts.enableAutocorrect||!1,this.opts.lineNumbers=this.opts.lineNumbers||!1,this.opts.defaultTheme=!1!==this.opts.defaultTheme,this.opts.areaId=this.opts.areaId||null,this.opts.ariaLabelledby=this.opts.ariaLabelledby||null,this.opts.readonly=this.opts.readonly||null,"boolean"!=typeof this.opts.handleTabs&&(this.opts.handleTabs=!0),"boolean"!=typeof this.opts.handleSelfClosingCharacters&&(this.opts.handleSelfClosingCharacters=!0),"boolean"!=typeof this.opts.handleNewLineIndentation&&(this.opts.handleNewLineIndentation=!0),!0===this.opts.rtl&&(this.elTextarea.setAttribute("dir","rtl"),this.elPre.setAttribute("dir","rtl")),!1===this.opts.enableAutocorrect&&(this.elTextarea.setAttribute("spellcheck","false"),this.elTextarea.setAttribute("autocapitalize","off"),this.elTextarea.setAttribute("autocomplete","off"),this.elTextarea.setAttribute("autocorrect","off")),this.opts.lineNumbers&&(this.elWrapper.classList.add("codeflask--has-line-numbers"),this.createLineNumbers()),this.opts.defaultTheme&&injectCss(defaultCssTheme,"theme-default",this.opts.styleParent),this.opts.areaId&&this.elTextarea.setAttribute("id",this.opts.areaId),this.opts.ariaLabelledby&&this.elTextarea.setAttribute("aria-labelledby",this.opts.ariaLabelledby),this.opts.readonly&&this.enableReadonlyMode();},CodeFlask.prototype.updateLineNumbersCount=function(){for(var e="",t=1;t<=this.lineNumber;t++)e=e+'<span class="codeflask__lines__line">'+t+"</span>";this.elLineNumbers.innerHTML=e;},CodeFlask.prototype.listenTextarea=function(){var e=this;this.elTextarea.addEventListener("input",function(t){e.code=t.target.value,e.elCode.innerHTML=escapeHtml(t.target.value),e.highlight(),setTimeout(function(){e.runUpdate(),e.setLineNumber();},1);}),this.elTextarea.addEventListener("keydown",function(t){e.handleTabs(t),e.handleSelfClosingCharacters(t),e.handleNewLineIndentation(t);}),this.elTextarea.addEventListener("scroll",function(t){e.elPre.style.transform="translate3d(-"+t.target.scrollLeft+"px, -"+t.target.scrollTop+"px, 0)",e.elLineNumbers&&(e.elLineNumbers.style.transform="translate3d(0, -"+t.target.scrollTop+"px, 0)");});},CodeFlask.prototype.handleTabs=function(e){if(this.opts.handleTabs){if(9!==e.keyCode)return;e.preventDefault();var t=this.elTextarea,n=t.selectionDirection,a=t.selectionStart,s=t.selectionEnd,o=t.value,i=o.substr(0,a),r=o.substring(a,s),l=o.substring(s),c=" ".repeat(this.opts.tabSize);if(a!==s&&r.length>=c.length){var d=a-i.split("\n").pop().length,u=c.length,p=c.length;if(e.shiftKey)o.substr(d,c.length)===c?(u=-u,d>a?(r=r.substring(0,d)+r.substring(d+c.length),p=0):d===a?(u=0,p=0,r=r.substring(c.length)):(p=-p,i=i.substring(0,d)+i.substring(d+c.length))):(u=0,p=0),r=r.replace(new RegExp("\n"+c.split("").join("\\"),"g"),"\n");else i=i.substr(0,d)+c+i.substring(d,a),r=r.replace(/\n/g,"\n"+c);t.value=i+r+l,t.selectionStart=a+u,t.selectionEnd=a+r.length+p,t.selectionDirection=n;}else t.value=i+c+l,t.selectionStart=a+c.length,t.selectionEnd=a+c.length;var h=t.value;this.updateCode(h),this.elTextarea.selectionEnd=s+this.opts.tabSize;}},CodeFlask.prototype.handleSelfClosingCharacters=function(e){if(this.opts.handleSelfClosingCharacters){var t=e.key;if(["(","[","{","<","'",'"'].includes(t)||[")","]","}",">","'",'"'].includes(t))switch(t){case"(":case")":this.closeCharacter(t);break;case"[":case"]":this.closeCharacter(t);break;case"{":case"}":this.closeCharacter(t);break;case"<":case">":case"'":case'"':this.closeCharacter(t);}}},CodeFlask.prototype.setLineNumber=function(){this.lineNumber=this.code.split("\n").length,this.opts.lineNumbers&&this.updateLineNumbersCount();},CodeFlask.prototype.handleNewLineIndentation=function(e){if(this.opts.handleNewLineIndentation&&13===e.keyCode){e.preventDefault();var t=this.elTextarea,n=t.selectionStart,a=t.selectionEnd,s=t.value,o=s.substr(0,n),i=s.substring(a),r=s.lastIndexOf("\n",n-1),l=r+s.slice(r+1).search(/[^ ]|$/),c=l>r?l-r:0,d=o+"\n"+" ".repeat(c)+i;t.value=d,t.selectionStart=n+c+1,t.selectionEnd=n+c+1,this.updateCode(t.value);}},CodeFlask.prototype.closeCharacter=function(e){var t=this.elTextarea.selectionStart,n=this.elTextarea.selectionEnd;if(this.skipCloseChar(e)){var a=this.code.substr(n,1)===e,s=a?n+1:n,o=!a&&["'",'"'].includes(e)?e:"",i=""+this.code.substring(0,t)+o+this.code.substring(s);this.updateCode(i),this.elTextarea.selectionEnd=++this.elTextarea.selectionStart;}else{var r=e;switch(e){case"(":r=String.fromCharCode(e.charCodeAt()+1);break;case"<":case"{":case"[":r=String.fromCharCode(e.charCodeAt()+2);}var l=this.code.substring(t,n),c=""+this.code.substring(0,t)+l+r+this.code.substring(n);this.updateCode(c);}this.elTextarea.selectionEnd=t;},CodeFlask.prototype.skipCloseChar=function(e){var t=this.elTextarea.selectionStart,n=this.elTextarea.selectionEnd,a=Math.abs(n-t)>0;return [")","}","]",">"].includes(e)||["'",'"'].includes(e)&&!a},CodeFlask.prototype.updateCode=function(e){this.code=e,this.elTextarea.value=e,this.elCode.innerHTML=escapeHtml(e),this.highlight(),this.setLineNumber(),setTimeout(this.runUpdate.bind(this),1);},CodeFlask.prototype.updateLanguage=function(e){var t=this.opts.language;this.elCode.classList.remove("language-"+t),this.elCode.classList.add("language-"+e),this.opts.language=e,this.highlight();},CodeFlask.prototype.addLanguage=function(e,t){prism.languages[e]=t;},CodeFlask.prototype.populateDefault=function(){this.updateCode(this.code);},CodeFlask.prototype.highlight=function(){prism.highlightElement(this.elCode,!1);},CodeFlask.prototype.onUpdate=function(e){if(e&&"[object Function]"!=={}.toString.call(e))throw Error("CodeFlask expects callback of type Function");this.updateCallBack=e;},CodeFlask.prototype.getCode=function(){return this.code},CodeFlask.prototype.runUpdate=function(){this.updateCallBack&&this.updateCallBack(this.code);},CodeFlask.prototype.enableReadonlyMode=function(){this.elTextarea.setAttribute("readonly",!0);},CodeFlask.prototype.disableReadonlyMode=function(){this.elTextarea.removeAttribute("readonly");};

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
