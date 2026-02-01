function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,_=m?m.emptyScript:"",f=g.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const r=this.constructor;if(!1===s&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[y("elementProperties")]=new Map,k[y("finalized")]=new Map,f?.({ReactiveElement:k}),(g.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,S=t=>t,w=$.trustedTypes,E=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+A,D=`<${M}>`,B=document,C=()=>B.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,N="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,z=/>/g,W=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,L=/"/g,H=/^(?:script|style|textarea|title)$/i,j=(t,...e)=>({_$litType$:1,strings:t,values:e}),F=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),V=new WeakMap,Z=B.createTreeWalker(B,129);function J(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,d]=((t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=O;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===O?"!--"===l[1]?n=U:void 0!==l[1]?n=z:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=W):void 0!==l[3]&&(n=W):n===W?">"===l[0]?(n=o??O,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?W:'"'===l[3]?L:R):n===L||n===R?n=W:n===U||n===z?n=O:(n=W,o=void 0);const h=n===W&&t[e+1].startsWith("/>")?" ":"";r+=n===O?i+D:d>=0?(s.push(a),i.slice(0,d)+T+i.slice(d)+A+h):i+A+(-2===d?e:h)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=q.createElement(l,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(T)){const e=d[r++],i=s.getAttribute(t).split(A),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:X}),s.removeAttribute(t)}else t.startsWith(A)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(H.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),Z.nextNode(),a.push({type:2,index:++o});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===M)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)a.push({type:7,index:o}),t+=A.length-1}o++}}static createElement(t,e){const i=B.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===F)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=I(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=K(t,o._$AS(t,e.values),o,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??B).importNode(e,!0);Z.currentNode=s;let o=Z.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=Z.nextNode(),r++)}return Z.currentNode=B,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),I(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(B.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new q(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=S(t).nextSibling;S(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=K(this,t,e,0),r=!I(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=K(this,s[i+n],e,n),a===F&&(a=this._$AH[n]),r||=!I(a)||a!==this._$AH[n],a===Y?t=Y:t!==Y&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class it extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??Y)===F)return;const i=this._$AH,s=t===Y&&i!==Y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Y&&(i===Y||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const ot={I:Q},rt=$.litHtmlPolyfillSupport;rt?.(q,Q),($.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;let at=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(C(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");let dt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const{I:ct}=ot,ht=t=>t,pt=()=>document.createComment(""),ut=(t,e,i)=>{const s=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(pt(),o),r=s.insertBefore(pt(),o);i=new ct(e,r,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,n=r!==t;if(n){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==o||n){let t=i._$AA;for(;t!==e;){const e=ht(t).nextSibling;ht(s).insertBefore(t,o),t=e}}}return i},gt=(t,e,i=t)=>(t._$AI(e,i),t),mt={},_t=(t,e=mt)=>t._$AH=e,ft=t=>{t._$AR(),t._$AA.remove()},yt=(t,e,i)=>{const s=new Map;for(let o=e;o<=i;o++)s.set(t[o],o);return s},vt=(kt=class extends dt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const o=[],r=[];let n=0;for(const e of t)o[n]=s?s(e,n):n,r[n]=i(e,n),n++;return{values:r,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const o=(t=>t._$AH)(t),{values:r,keys:n}=this.dt(e,i,s);if(!Array.isArray(o))return this.ut=n,r;const a=this.ut??=[],l=[];let d,c,h=0,p=o.length-1,u=0,g=r.length-1;for(;h<=p&&u<=g;)if(null===o[h])h++;else if(null===o[p])p--;else if(a[h]===n[u])l[u]=gt(o[h],r[u]),h++,u++;else if(a[p]===n[g])l[g]=gt(o[p],r[g]),p--,g--;else if(a[h]===n[g])l[g]=gt(o[h],r[g]),ut(t,l[g+1],o[h]),h++,g--;else if(a[p]===n[u])l[u]=gt(o[p],r[u]),ut(t,o[h],o[p]),p--,u++;else if(void 0===d&&(d=yt(n,u,g),c=yt(a,h,p)),d.has(a[h]))if(d.has(a[p])){const e=c.get(n[u]),i=void 0!==e?o[e]:null;if(null===i){const e=ut(t,o[h]);gt(e,r[u]),l[u]=e}else l[u]=gt(i,r[u]),ut(t,o[h],i),o[e]=null;u++}else ft(o[p]),p--;else ft(o[h]),h++;for(;u<=g;){const e=ut(t,l[g+1]);gt(e,r[u]),l[u++]=e}for(;h<=p;){const t=o[h++];null!==t&&ft(t)}return this.ut=n,_t(t,l),F}},(...t)=>({_$litDirective$:kt,values:t})),bt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},xt=(t=bt,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};var kt;function $t(t){return(e,i)=>"object"==typeof i?xt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function St(t){return $t({...t,state:!0,attribute:!1})}const wt=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],Et=(t,e,i)=>{const s=new CustomEvent(e,{bubbles:!0,composed:!0,detail:i});t.dispatchEvent(s)};class Tt extends at{constructor(){super(...arguments),this._expandedEntity=null,this._computeLabel=t=>({entities:"Entities",name:"Card Name (optional)",show_profile_selector:"Show profile selector",editable:"Allow editing",show_temperature:"Show temperature values",show_gradient:"Show color gradient",hour_format:"Time format"}[t.name]||t.name)}setConfig(t){this._config=t}_getEntityId(t){return"string"==typeof t?t:t.entity}_getEntityName(t){return"string"==typeof t?"":t.name||""}_getEntityProfileNames(t){return"string"==typeof t?{}:t.profile_names||{}}_getEntityIds(){return this._config?.entities?this._config.entities.map(t=>this._getEntityId(t)):[]}_getAvailableProfiles(t){const e=this.hass?.states?.[t];return e?.attributes?.available_profiles?[...e.attributes.available_profiles].sort():[]}render(){if(!this.hass||!this._config)return Y;const t={entities:this._getEntityIds()};return j`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${Tt.ENTITY_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._entitiesChanged}
      ></ha-form>

      ${this._renderEntityConfig()}

      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Tt.OPTIONS_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._optionsChanged}
      ></ha-form>
    `}_renderEntityConfig(){const t=this._config?.entities||[];return 0===t.length?j``:j`
      <div class="entity-config">
        <div class="section-header">Entity Configuration</div>
        ${t.map((t,e)=>{const i=this._getEntityId(t),s=this._getEntityName(t),o=this._getEntityProfileNames(t),r=this.hass?.states?.[i]?.attributes.friendly_name||i,n=this._getAvailableProfiles(i),a=this._expandedEntity===i;return j`
            <div class="entity-section">
              <div class="entity-header" @click=${()=>this._toggleEntity(i)}>
                <span class="expand-icon">${a?"▼":"▶"}</span>
                <span class="entity-title" title=${i}>${r}</span>
              </div>

              ${a?j`
                    <div class="entity-details">
                      <div class="config-row">
                        <label>Display Name</label>
                        <input
                          type="text"
                          .value=${s}
                          placeholder=${r}
                          @input=${t=>this._entityNameChanged(e,t)}
                        />
                      </div>

                      ${n.length>0?j`
                            <div class="profile-names-section">
                              <div class="profile-names-header">Profile Names</div>
                              ${n.map(t=>j`
                                  <div class="config-row profile-row">
                                    <label>${t}</label>
                                    <input
                                      type="text"
                                      .value=${o[t]||""}
                                      placeholder=${t}
                                      @input=${i=>this._profileNameChanged(e,t,i)}
                                    />
                                  </div>
                                `)}
                            </div>
                          `:j`
                            <div class="no-profiles">No profiles available for this entity</div>
                          `}
                    </div>
                  `:""}
            </div>
          `})}
      </div>
    `}_toggleEntity(t){this._expandedEntity=this._expandedEntity===t?null:t}_entitiesChanged(t){t.stopPropagation();const e=(t.detail.value?.entities||[]).map(t=>{const e=this._config?.entities?.find(e=>this._getEntityId(e)===t);return e&&"string"!=typeof e&&(e.name||Object.keys(e.profile_names||{}).length>0)?{...e,entity:t}:t}),i={...this._config,entities:e};Et(this,"config-changed",{config:i})}_getOrCreateEntityConfig(t,e){const i=t[e];return"string"==typeof i?{entity:i}:{...i}}_simplifyEntityConfig(t){const e=!!t.name,i=Object.keys(t.profile_names||{}).length>0;return e||i?t:t.entity}_entityNameChanged(t,e){const i=e.target.value.trim(),s=[...this._config?.entities||[]];if(t>=s.length)return;const o=this._getOrCreateEntityConfig(s,t);i?o.name=i:delete o.name,s[t]=this._simplifyEntityConfig(o);const r={...this._config,entities:s};Et(this,"config-changed",{config:r})}_profileNameChanged(t,e,i){const s=i.target.value.trim(),o=[...this._config?.entities||[]];if(t>=o.length)return;const r=this._getOrCreateEntityConfig(o,t);r.profile_names||(r.profile_names={}),s?r.profile_names[e]=s:delete r.profile_names[e],0===Object.keys(r.profile_names).length&&delete r.profile_names,o[t]=this._simplifyEntityConfig(r);const n={...this._config,entities:o};Et(this,"config-changed",{config:n})}_optionsChanged(t){t.stopPropagation();const e={...this._config,...t.detail.value,entities:this._config.entities};Et(this,"config-changed",{config:e})}}function At(t){const[e,i]=t.split(":").map(Number);return 60*e+i}function Mt(t){const e=t%60;return`${Math.floor(t/60).toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}function Dt(t){const e={},i=Object.keys(t).map(t=>parseInt(t)).filter(t=>!isNaN(t)&&t>=1&&t<=13).sort((t,e)=>t-e);for(const s of i){const i=t[s.toString()];i&&(e[s]={ENDTIME:i.ENDTIME,TEMPERATURE:i.TEMPERATURE})}return e}function Bt(t){const e=Object.keys(t).map(t=>parseInt(t)).filter(t=>!isNaN(t)&&t>=1&&t<=13).sort((t,e)=>t-e);let i=0;for(const s of e){const e=t[s.toString()];if(!e)continue;if(!e.ENDTIME||void 0===e.TEMPERATURE)return{key:"slotMissingValues",params:{slot:`${s}`}};const o=At(e.ENDTIME);if(o<i)return{key:"slotTimeBackwards",params:{slot:`${s}`,time:e.ENDTIME}};if(o>1440)return{key:"slotTimeExceedsDay",params:{slot:`${s}`,time:e.ENDTIME}};i=o}if(e.length>0){const i=t[e[e.length-1].toString()];if(i&&"24:00"!==i.ENDTIME)return{key:"lastSlotMustEnd"}}return null}function Ct(t){return t<10?"#2b9af9":t<14?"#40c4ff":t<17?"#26c6da":t<19?"#66bb6a":t<21?"#9ccc65":t<23?"#ffb74d":t<25?"#ff8100":"#f4511e"}function It(t,e="24"){if("24"===e)return t;const[i,s]=t.split(":");let o=parseInt(i,10);if(24===o)return"12:00 AM";const r=o>=12?"PM":"AM";return 0===o?o=12:o>12&&(o-=12),`${o}:${s||"00"} ${r}`}function Pt(t){const{base_temperature:e,periods:i}=t,s=[],o=[...i].sort((t,e)=>At(t.starttime)-At(e.starttime));for(let t=0;t<o.length;t++){const e=o[t];s.push({startTime:e.starttime,startMinutes:At(e.starttime),endTime:e.endtime,endMinutes:At(e.endtime),temperature:e.temperature,slot:t+1})}return{blocks:s,baseTemperature:e}}function Nt(t,e){const i=[],s=[...t].sort((t,e)=>t.startMinutes-e.startMinutes);for(const t of s)i.push({starttime:t.startTime,endtime:t.endTime,temperature:t.temperature});return{base_temperature:e,periods:i}}function Ot(t){if(0===t.length)return 20;const e=new Map;for(const i of t){const t=i.endMinutes-i.startMinutes,s=e.get(i.temperature)||0;e.set(i.temperature,s+t)}let i=0,s=20;for(const[t,o]of e.entries())o>i&&(i=o,s=t);return s}function Ut(t,e=5,i=30.5){const{base_temperature:s,periods:o}=t;if(s<e||s>i)return{key:"temperatureOutOfRange",params:{block:"base",min:`${e}`,max:`${i}`}};let r=0;for(let t=0;t<o.length;t++){const s=o[t];if(!s.starttime||!s.endtime||void 0===s.temperature)return{key:"slotMissingValues",params:{slot:`${t+1}`}};const n=At(s.starttime),a=At(s.endtime);if(a<=n)return{key:"blockEndBeforeStart",params:{block:`${t+1}`}};if(n<r)return{key:"slotTimeBackwards",params:{slot:`${t+1}`,time:s.starttime}};if(s.temperature<e||s.temperature>i)return{key:"temperatureOutOfRange",params:{block:`${t+1}`,min:`${e}`,max:`${i}`}};r=a}return null}function zt(t){if(0===t.length)return[];const e=[...t].sort((t,e)=>t.startMinutes-e.startMinutes),i=[];let s={...e[0]};for(let t=1;t<e.length;t++){const o=e[t];s.endMinutes===o.startMinutes&&s.temperature===o.temperature?s={...s,endTime:o.endTime,endMinutes:o.endMinutes}:(i.push(s),s={...o})}return i.push(s),i.map((t,e)=>({...t,slot:e+1}))}function Wt(t,e){if(0===t.length)return[{startTime:"00:00",startMinutes:0,endTime:"24:00",endMinutes:1440,temperature:e,slot:1}];const i=[...t].sort((t,e)=>t.startMinutes-e.startMinutes),s=[];let o=0;for(const t of i)t.startMinutes>o&&s.push({startTime:Mt(o),startMinutes:o,endTime:t.startTime,endMinutes:t.startMinutes,temperature:e,slot:s.length+1}),s.push({...t,slot:s.length+1}),o=t.endMinutes;return o<1440&&s.push({startTime:Mt(o),startMinutes:o,endTime:"24:00",endMinutes:1440,temperature:e,slot:s.length+1}),zt(s)}function Rt(t){return[...t].sort((t,e)=>t.startMinutes-e.startMinutes).map((t,e)=>({...t,slot:e+1}))}Tt.ENTITY_SCHEMA=[{name:"entities",required:!0,selector:{entity:{domain:"climate",multiple:!0}}}],Tt.OPTIONS_SCHEMA=[{name:"name",selector:{text:{}}},{name:"show_profile_selector",selector:{boolean:{}},default:!0},{name:"editable",selector:{boolean:{}},default:!0},{name:"show_temperature",selector:{boolean:{}},default:!0},{name:"show_gradient",selector:{boolean:{}},default:!1},{name:"hour_format",selector:{select:{options:[{value:"24",label:"24h"},{value:"12",label:"12h (AM/PM)"}]}},default:"24"}],Tt.styles=n`
    ha-form {
      display: block;
    }

    .entity-config {
      margin: 16px 0;
      padding: 12px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
    }

    .section-header {
      font-weight: 500;
      margin-bottom: 12px;
      color: var(--primary-text-color);
    }

    .entity-section {
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      margin-bottom: 8px;
      overflow: hidden;
    }

    .entity-section:last-child {
      margin-bottom: 0;
    }

    .entity-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      cursor: pointer;
      background: var(--secondary-background-color, #f5f5f5);
      user-select: none;
    }

    .entity-header:hover {
      background: var(--primary-color-light, #e3f2fd);
    }

    .expand-icon {
      font-size: 10px;
      color: var(--secondary-text-color);
      width: 12px;
    }

    .entity-title {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      color: var(--primary-text-color);
    }

    .entity-details {
      padding: 12px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .config-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .config-row:last-child {
      margin-bottom: 0;
    }

    .config-row label {
      min-width: 100px;
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    .config-row input {
      flex: 1;
      min-width: 0;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      font-size: 14px;
      background: var(--input-fill-color, var(--secondary-background-color));
      color: var(--primary-text-color);
    }

    .config-row input:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .config-row input::placeholder {
      color: var(--secondary-text-color);
      opacity: 0.7;
    }

    .profile-names-section {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .profile-names-header {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
    }

    .profile-row label {
      min-width: 60px;
      font-family: monospace;
    }

    .no-profiles {
      font-size: 13px;
      color: var(--secondary-text-color);
      font-style: italic;
      margin-top: 8px;
    }
  `,t([$t({attribute:!1})],Tt.prototype,"hass",void 0),t([St()],Tt.prototype,"_config",void 0),t([St()],Tt.prototype,"_expandedEntity",void 0),customElements.define("homematicip-local-climate-schedule-card-editor",Tt);const Lt={en:{weekdays:{short:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"},long:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"}},ui:{schedule:"Schedule",loading:"Loading schedule data...",entityNotFound:"Entity {entity} not found",clickToEdit:"Click on a day to edit its schedule",edit:"Edit {weekday}",cancel:"Cancel",save:"Save",addTimeBlock:"+ Add Time Block",copySchedule:"Copy schedule",pasteSchedule:"Paste schedule",undo:"Undo",redo:"Redo",undoShortcut:"Undo (Ctrl+Z)",redoShortcut:"Redo (Ctrl+Y)",exportSchedule:"Export",importSchedule:"Import",exportTooltip:"Export schedule to JSON file",importTooltip:"Import schedule from JSON file",exportSuccess:"Schedule exported successfully",importSuccess:"Schedule imported successfully",unsavedChanges:"Unsaved changes",saveAll:"Save all",discard:"Discard",confirmDiscardChanges:"You have unsaved changes. Do you want to discard them?",from:"From",to:"To",baseTemperature:"Base Temperature",baseTemperatureDescription:"Temperature for unscheduled periods",temperaturePeriods:"Temperature Periods",editSlot:"Edit",saveSlot:"Save",cancelSlotEdit:"Cancel"},errors:{failedToChangeProfile:"Failed to change profile: {error}",failedToSaveSchedule:"Failed to save schedule: {error}",failedToPasteSchedule:"Failed to paste schedule: {error}",invalidSchedule:"Invalid schedule: {error}",failedToExport:"Failed to export schedule: {error}",failedToImport:"Failed to import schedule: {error}",invalidImportFile:"Invalid file format. Please select a JSON file.",invalidImportFormat:"Invalid JSON format in file.",invalidImportData:"Invalid schedule data: {error}"},warnings:{title:"Validation Warnings",noWarnings:"No issues detected"},validationMessages:{blockEndBeforeStart:"Block {block}: End time is before start time",blockZeroDuration:"Block {block}: Block has zero duration",invalidStartTime:"Block {block}: Invalid start time",invalidEndTime:"Block {block}: Invalid end time",temperatureOutOfRange:"Block {block}: Temperature out of range ({min}-{max}°C)",invalidSlotCount:"Invalid number of slots: {count} (expected 13)",invalidSlotKey:"Invalid slot key: {key} (must be integer 1-13)",missingSlot:"Missing slot {slot}",slotMissingValues:"Slot {slot} missing ENDTIME or TEMPERATURE",slotTimeBackwards:"Slot {slot} time goes backwards: {time}",slotTimeExceedsDay:"Slot {slot} time exceeds 24:00: {time}",lastSlotMustEnd:"Last slot must end at 24:00",scheduleMustBeObject:"Schedule data must be an object",missingWeekday:"Missing weekday: {weekday}",invalidWeekdayData:"Invalid data for {weekday}",weekdayValidationError:"{weekday}: {details}"}},de:{weekdays:{short:{monday:"Mo",tuesday:"Di",wednesday:"Mi",thursday:"Do",friday:"Fr",saturday:"Sa",sunday:"So"},long:{monday:"Montag",tuesday:"Dienstag",wednesday:"Mittwoch",thursday:"Donnerstag",friday:"Freitag",saturday:"Samstag",sunday:"Sonntag"}},ui:{schedule:"Zeitplan",loading:"Zeitplandaten werden geladen...",entityNotFound:"Entität {entity} nicht gefunden",clickToEdit:"Klicken Sie auf einen Tag, um den Zeitplan zu bearbeiten",edit:"{weekday} bearbeiten",cancel:"Abbrechen",save:"Speichern",addTimeBlock:"+ Zeitblock hinzufügen",copySchedule:"Zeitplan kopieren",pasteSchedule:"Zeitplan einfügen",undo:"Rückgängig",redo:"Wiederholen",undoShortcut:"Rückgängig (Strg+Z)",redoShortcut:"Wiederholen (Strg+Y)",exportSchedule:"Exportieren",importSchedule:"Importieren",exportTooltip:"Zeitplan als JSON-Datei exportieren",importTooltip:"Zeitplan aus JSON-Datei importieren",exportSuccess:"Zeitplan erfolgreich exportiert",importSuccess:"Zeitplan erfolgreich importiert",unsavedChanges:"Ungespeicherte Änderungen",saveAll:"Alle speichern",discard:"Verwerfen",confirmDiscardChanges:"Sie haben ungespeicherte Änderungen. Möchten Sie diese verwerfen?",from:"Von",to:"Bis",baseTemperature:"Basistemperatur",baseTemperatureDescription:"Temperatur für nicht geplante Zeiträume",temperaturePeriods:"Temperaturperioden",editSlot:"Bearbeiten",saveSlot:"Speichern",cancelSlotEdit:"Abbrechen"},errors:{failedToChangeProfile:"Fehler beim Wechseln des Profils: {error}",failedToSaveSchedule:"Fehler beim Speichern des Zeitplans: {error}",failedToPasteSchedule:"Fehler beim Einfügen des Zeitplans: {error}",invalidSchedule:"Ungültiger Zeitplan: {error}",failedToExport:"Fehler beim Exportieren des Zeitplans: {error}",failedToImport:"Fehler beim Importieren des Zeitplans: {error}",invalidImportFile:"Ungültiges Dateiformat. Bitte wählen Sie eine JSON-Datei.",invalidImportFormat:"Ungültiges JSON-Format in der Datei.",invalidImportData:"Ungültige Zeitplandaten: {error}"},warnings:{title:"Validierungswarnungen",noWarnings:"Keine Probleme erkannt"},validationMessages:{blockEndBeforeStart:"Block {block}: Die Endzeit liegt vor der Startzeit",blockZeroDuration:"Block {block}: Der Block hat keine Dauer",invalidStartTime:"Block {block}: Ungültige Startzeit",invalidEndTime:"Block {block}: Ungültige Endzeit",temperatureOutOfRange:"Block {block}: Temperatur außerhalb des Bereichs ({min}-{max}°C)",invalidSlotCount:"Ungültige Anzahl an Slots: {count} (erwartet 13)",invalidSlotKey:"Ungültiger Slot-Schlüssel: {key} (muss eine Ganzzahl 1-13 sein)",missingSlot:"Slot {slot} fehlt",slotMissingValues:"Slot {slot} fehlt ENDTIME oder TEMPERATURE",slotTimeBackwards:"Slot {slot}: Zeit läuft rückwärts: {time}",slotTimeExceedsDay:"Slot {slot}: Zeit überschreitet 24:00: {time}",lastSlotMustEnd:"Der letzte Slot muss um 24:00 enden",scheduleMustBeObject:"Zeitplandaten müssen ein Objekt sein",missingWeekday:"Fehlender Wochentag: {weekday}",invalidWeekdayData:"Ungültige Daten für {weekday}",weekdayValidationError:"{weekday}: {details}"}}};function Ht(t){const e=t.toLowerCase().split("-")[0];return Lt[e]||Lt.en}function jt(t,e){let i=t;for(const[t,s]of Object.entries(e))i=i.replace(`{${t}}`,s);return i}let Ft=class extends at{static getConfigElement(){return document.createElement("homematicip-local-climate-schedule-card-editor")}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("climate."));return{type:"custom:homematicip-local-climate-schedule-card",entities:e.length>0?[e[0]]:[]}}constructor(){super(),this._availableProfiles=[],this._isLoading=!1,this._currentTimePercent=0,this._currentTimeMinutes=0,this._historyStack=[],this._historyIndex=-1,this._translations=Ht("en"),this._validationWarnings=[],this._parsedScheduleCache=new WeakMap,this._minTemp=5,this._maxTemp=30.5,this._tempStep=.5,this._keyDownHandler=this._handleKeyDown.bind(this)}setConfig(t){const e=[],i=t=>{if(!t)return;const i=t.trim();i&&(e.includes(i)||e.push(i))};if(i(t.entity),Array.isArray(t.entities)&&t.entities.forEach(t=>{i("string"==typeof t?t:t.entity)}),0===e.length)throw new Error("You need to define at least one entity");e.sort((t,e)=>t.localeCompare(e));const s=this._activeEntityId,o=e[0],r=s&&e.includes(s)?s:o;this._config={show_profile_selector:!0,editable:!0,show_temperature:!0,temperature_unit:"°C",hour_format:"24",...t,entity:o,entities:[...e]},this._activeEntityId=r,this._copiedSchedule=void 0,this._editingWeekday=void 0,this._editingBlocks=void 0,this._parsedScheduleCache=new WeakMap,this._updateLanguage()}_getPreferredLanguage(t){return t?.language||t?.locale?.language}_updateLanguage(){let t="en";if(this._config?.language)t=this._config.language;else{const e=this._getPreferredLanguage(this.hass);e&&(t=e)}this._translations=Ht(t),this._weekdayShortLabelMap=this._createWeekdayLabelMap("short"),this._weekdayLongLabelMap=this._createWeekdayLabelMap("long")}_createWeekdayLabelMap(t){const e="short"===t?this._translations.weekdays.short:this._translations.weekdays.long;return{MONDAY:e.monday,TUESDAY:e.tuesday,WEDNESDAY:e.wednesday,THURSDAY:e.thursday,FRIDAY:e.friday,SATURDAY:e.saturday,SUNDAY:e.sunday}}_getWeekdayLabel(t,e="short"){return"long"===e?(this._weekdayLongLabelMap||(this._weekdayLongLabelMap=this._createWeekdayLabelMap("long")),this._weekdayLongLabelMap[t]):(this._weekdayShortLabelMap||(this._weekdayShortLabelMap=this._createWeekdayLabelMap("short")),this._weekdayShortLabelMap[t])}_getTimeLabels(){const t=this._config?.hour_format||"24",e=[];for(let i=0;i<=24;i+=3){const s=`${i.toString().padStart(2,"0")}:00`;e.push({hour:i,label:It(s,t),position:i/24*100})}return e}_formatTimeDisplay(t){return It(t,this._config?.hour_format||"24")}_getEntityId(t){return"string"==typeof t?t:t.entity}_getEntityOptions(){return this._config?this._config.entities?.length?this._config.entities.map(t=>this._getEntityId(t)).sort((t,e)=>t.localeCompare(e)):this._config.entity?[this._config.entity]:[]:[]}_getEntityDisplayName(t){if(this._config?.entities?.length){const e=this._config.entities.find(e=>this._getEntityId(e)===t);if(e&&"string"!=typeof e&&e.name)return e.name}return this.hass?.states?.[t]?.attributes.friendly_name||t}_getProfileDisplayName(t){const e=this._getActiveEntityId();if(e&&this._config?.entities?.length){const i=this._config.entities.find(t=>this._getEntityId(t)===e);if(i&&"string"!=typeof i&&i.profile_names?.[t])return`${t} - ${i.profile_names[t]}`}return t}_getActiveEntityId(){const t=this._getEntityOptions();if(0!==t.length)return this._activeEntityId&&t.includes(this._activeEntityId)?this._activeEntityId:t[0]}_needsManualReload(t){if(!t||!this.hass)return!1;const e=this.hass.states[t];if(!e?.attributes?.interface_id)return!1;const i=e.attributes.interface_id;return i.endsWith("BidCos-RF")||i.endsWith("BidCos-Wired")||i.endsWith("VirtualDevices")}_scheduleReloadDeviceConfig(t){if(!this.hass)return;const e=this.hass.states[t],i=e?.attributes?.address;if(!i)return;const s=i.split(":");if(2!==s.length)return;const[o]=s;setTimeout(async()=>{try{await this.hass.callService("homematicip_local","reload_device_config",{device_address:o})}catch(t){}},5e3)}_formatValidationParams(t){if(!t)return{};const e={};for(const[i,s]of Object.entries(t))"weekday"===i&&wt.includes(s)?e.weekday=this._getWeekdayLabel(s,"long"):e[i]=s;return e}_translateValidationMessage(t){const e=this._translations.validationMessages[t.key]||t.key,i=this._formatValidationParams(t.params);return t.nested&&(i.details=this._translateValidationMessage(t.nested)),jt(e,i)}getCardSize(){return 12}connectedCallback(){super.connectedCallback(),this._updateCurrentTime(),this._timeUpdateInterval=window.setInterval(()=>{this._updateCurrentTime()},6e4),window.addEventListener("keydown",this._keyDownHandler)}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._timeUpdateInterval&&(clearInterval(this._timeUpdateInterval),this._timeUpdateInterval=void 0),void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0),window.removeEventListener("keydown",this._keyDownHandler)}_updateCurrentTime(){const t=new Date,e=60*t.getHours()+t.getMinutes();this._currentTimePercent=e/1440*100,this._currentTimeMinutes=e;const i=t.getDay();this._currentWeekday=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][i]}_isBlockActive(t,e){return!(!this._currentWeekday||this._currentWeekday!==t)&&this._currentTimeMinutes>=e.startMinutes&&this._currentTimeMinutes<e.endMinutes}_handleKeyDown(t){if(!this._editingWeekday||!this._editingBlocks)return;const e=t.ctrlKey||t.metaKey;e&&"z"===t.key&&!t.shiftKey?(t.preventDefault(),this._undo()):e&&("y"===t.key||"z"===t.key&&t.shiftKey)&&(t.preventDefault(),this._redo())}_saveHistoryState(){if(!this._editingBlocks)return;const t=JSON.parse(JSON.stringify(this._editingBlocks));this._historyStack=this._historyStack.slice(0,this._historyIndex+1),this._historyStack.push(t),this._historyIndex++,this._historyStack.length>50&&(this._historyStack.shift(),this._historyIndex--)}_undo(){this._historyIndex<=0||(this._historyIndex--,this._editingBlocks=JSON.parse(JSON.stringify(this._historyStack[this._historyIndex])),this._updateValidationWarnings())}_redo(){this._historyIndex>=this._historyStack.length-1||(this._historyIndex++,this._editingBlocks=JSON.parse(JSON.stringify(this._historyStack[this._historyIndex])),this._updateValidationWarnings())}_canUndo(){return this._historyIndex>0}_canRedo(){return this._historyIndex<this._historyStack.length-1}shouldUpdate(t){if(t.has("_config"))return!0;if(t.has("hass")){const e=t.get("hass"),i=this.hass;if(!this._config)return!1;if(!e||!i)return!0;const s=this._getActiveEntityId();if(!s)return!0;const o=e.states?.[s],r=i.states?.[s];return o!==r||(i?.language||i?.locale?.language)!==(e?.language||e?.locale?.language)}return!0}updated(t){if(super.updated(t),t.has("hass")&&this._config){this._updateFromEntity();const e=t.get("hass");this._getPreferredLanguage(this.hass)!==this._getPreferredLanguage(e)&&this._updateLanguage()}}_updateFromEntity(){if(!this.hass||!this._config)return;const t=this._getActiveEntityId();if(!t)return this._currentProfile=void 0,this._scheduleData=void 0,void(this._availableProfiles=[]);const e=this.hass.states?.[t];if(!e)return this._currentProfile=void 0,this._scheduleData=void 0,void(this._availableProfiles=[]);const i=e.attributes;this._currentProfile=this._config.profile||i.active_profile,this._scheduleData=i.schedule_data,this._availableProfiles=(i.available_profiles||[]).slice().sort((t,e)=>t.localeCompare(e)),this._minTemp=i.min_temp??5,this._maxTemp=i.max_temp??30.5,this._tempStep=i.target_temp_step??.5,this._parsedScheduleCache=new WeakMap}_getBaseTemperature(t){if(this._scheduleData){const e=this._scheduleData[t];if(e){const{baseTemperature:t}=Pt(e);return t}}return 20}_getParsedBlocks(t){if(this._scheduleData){const e=this._scheduleData[t];if(!e)return[];const i=this._parsedScheduleCache.get(e);if(i)return i;const{blocks:s}=Pt(e);return this._parsedScheduleCache.set(e,s),s}return[]}async _handleProfileChange(t){const e=t.target.value,i=this._getActiveEntityId();if(this._config&&this.hass&&i)try{await this.hass.callService("homematicip_local","set_schedule_active_profile",{entity_id:i,profile:e}),this._currentProfile=e}catch(t){alert(jt(this._translations.errors.failedToChangeProfile,{error:String(t)}))}}_updateValidationWarnings(){this._validationWarnings=this._editingBlocks?function(t,e=5,i=30.5){const s=[];if(0===t.length)return s;for(let e=0;e<t.length-1;e++){const i=t[e];i.endMinutes<i.startMinutes&&s.push({key:"blockEndBeforeStart",params:{block:`${e+1}`}}),i.endMinutes===i.startMinutes&&s.push({key:"blockZeroDuration",params:{block:`${e+1}`}})}const o=t[t.length-1];return o.endMinutes<o.startMinutes&&s.push({key:"blockEndBeforeStart",params:{block:`${t.length}`}}),t.forEach((t,o)=>{(t.startMinutes<0||t.startMinutes>1440)&&s.push({key:"invalidStartTime",params:{block:`${o+1}`}}),(t.endMinutes<0||t.endMinutes>1440)&&s.push({key:"invalidEndTime",params:{block:`${o+1}`}}),(t.temperature<e||t.temperature>i)&&s.push({key:"temperatureOutOfRange",params:{block:`${o+1}`,min:`${e}`,max:`${i}`}})}),s}(this._editingBlocks,this._minTemp,this._maxTemp):[]}_handleWeekdayClick(t){if(!this._config?.editable)return;if(!this._scheduleData)return;this._editingWeekday=t,this._editingBlocks=this._getParsedBlocks(t);const e=this._scheduleData[t];if(e){const{baseTemperature:t}=Pt(e);this._editingBaseTemperature=t}else this._editingBaseTemperature=20;this._historyStack=[JSON.parse(JSON.stringify(this._editingBlocks))],this._historyIndex=0,this._updateValidationWarnings()}_closeEditor(){this._editingWeekday=void 0,this._editingBlocks=void 0,this._editingBaseTemperature=void 0,this._editingSlotIndex=void 0,this._editingSlotData=void 0,this._historyStack=[],this._historyIndex=-1}async _saveSchedule(){if(!(this._config&&this.hass&&this._editingWeekday&&this._editingBlocks&&this._currentProfile&&void 0!==this._editingBaseTemperature))return;const t=this._getActiveEntityId();if(!t)return;const e=Nt(this._editingBlocks,this._editingBaseTemperature),i=Ut(e,this._minTemp,this._maxTemp);if(i){const t=this._translateValidationMessage(i);return void alert(jt(this._translations.errors.invalidSchedule,{error:t}))}this._isLoading=!0,this._loadingTimeoutId=window.setTimeout(()=>{this._isLoading=!1,this._loadingTimeoutId=void 0},1e4);try{const{base_temperature:i,periods:s}=e;await this.hass.callService("homematicip_local","set_schedule_simple_weekday",{entity_id:t,profile:this._currentProfile,weekday:this._editingWeekday,base_temperature:i,simple_weekday_list:s}),this._scheduleData&&(this._scheduleData={...this._scheduleData,[this._editingWeekday]:e}),this._updateFromEntity(),this.requestUpdate(),this._closeEditor(),this._needsManualReload(t)&&this._scheduleReloadDeviceConfig(t)}catch(t){alert(jt(this._translations.errors.failedToSaveSchedule,{error:String(t)}))}finally{void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0),this._isLoading=!1}}_copySchedule(t){if(!this._scheduleData)return;const e=this._getParsedBlocks(t);let i;const s=this._scheduleData[t];i=s?Pt(s).baseTemperature:Ot(e),this._copiedSchedule={weekday:t,blocks:JSON.parse(JSON.stringify(e)),baseTemperature:i}}async _pasteSchedule(t){if(!(this._config&&this.hass&&this._currentProfile&&this._copiedSchedule))return;const e=this._getActiveEntityId();if(!e)return;const i=this._copiedSchedule.baseTemperature??Ot(this._copiedSchedule.blocks),s=Nt(this._copiedSchedule.blocks,i),o=Ut(s,this._minTemp,this._maxTemp);if(o){const t=this._translateValidationMessage(o);return void alert(jt(this._translations.errors.invalidSchedule,{error:t}))}this._isLoading=!0,this._loadingTimeoutId=window.setTimeout(()=>{this._isLoading=!1,this._loadingTimeoutId=void 0},1e4);try{const{base_temperature:i,periods:o}=s;await this.hass.callService("homematicip_local","set_schedule_simple_weekday",{entity_id:e,profile:this._currentProfile,weekday:t,base_temperature:i,simple_weekday_list:o}),this._scheduleData&&(this._scheduleData={...this._scheduleData,[t]:s}),this._updateFromEntity(),this.requestUpdate(),this._needsManualReload(e)&&this._scheduleReloadDeviceConfig(e)}catch(t){alert(jt(this._translations.errors.failedToPasteSchedule,{error:String(t)}))}finally{void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0),this._isLoading=!1}}_exportSchedule(){if(this._currentProfile&&this._scheduleData)try{const t={version:"2.0",profile:this._currentProfile,exported:(new Date).toISOString(),scheduleData:this._scheduleData,format:"simple"},e=JSON.stringify(t,null,2),i=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s,o.download=`schedule-${this._currentProfile}-${(new Date).toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}catch(t){alert(jt(this._translations.errors.failedToExport,{error:String(t)}))}}_importSchedule(){const t=document.createElement("input");t.type="file",t.accept=".json,application/json",t.onchange=async t=>{const e=t.target.files?.[0];if(e)if(e.name.endsWith(".json")||"application/json"===e.type)try{const t=await e.text();let i;try{i=JSON.parse(t)}catch{return void alert(this._translations.errors.invalidImportFormat)}if(!i||"object"!=typeof i)return void alert(this._translations.errors.invalidImportFormat);let s,o,r=!1;if("scheduleData"in i?(s=i.scheduleData,r="simple"===("format"in i?i.format:void 0)||"2.0"===("version"in i?i.version:void 0)):(s=i,r=Array.isArray(s&&"object"==typeof s&&"MONDAY"in s?s.MONDAY:null)),o=r?function(t){if(!t||"object"!=typeof t)return{key:"scheduleMustBeObject"};const e=t,i=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];for(const t of i){if(!(t in e))return{key:"missingWeekday",params:{weekday:t}};const i=e[t];if(!i||"object"!=typeof i)return{key:"invalidWeekdayData",params:{weekday:t}};if(!("base_temperature"in i)||!("periods"in i))return{key:"invalidWeekdayData",params:{weekday:t}};const s=Ut(i);if(s)return{key:"weekdayValidationError",params:{weekday:t},nested:s}}return null}(s):function(t){if(!t||"object"!=typeof t)return{key:"scheduleMustBeObject"};const e=t,i=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];for(const t of i){if(!(t in e))return{key:"missingWeekday",params:{weekday:t}};const i=e[t];if(!i||"object"!=typeof i)return{key:"invalidWeekdayData",params:{weekday:t}};const s=Bt(i);if(s)return{key:"weekdayValidationError",params:{weekday:t},nested:s}}return null}(s),o){const t=this._translateValidationMessage(o);return void alert(jt(this._translations.errors.invalidImportData,{error:t}))}const n=this._getActiveEntityId();if(!(this._config&&this.hass&&this._currentProfile&&n))return;this._isLoading=!0,this._loadingTimeoutId=window.setTimeout(()=>{this._isLoading=!1,this._loadingTimeoutId=void 0},1e4);try{if(r){const t=s;for(const e of wt){const i=t[e];if(i){const{base_temperature:t,periods:s}=i;await this.hass.callService("homematicip_local","set_schedule_simple_weekday",{entity_id:n,profile:this._currentProfile,weekday:e,base_temperature:t,simple_weekday_list:s})}}this._scheduleData=t}else{const t=s;for(const e of wt){const i=t[e];if(i){const t=Dt(i);await this.hass.callService("homematicip_local","set_schedule_profile_weekday",{entity_id:n,profile:this._currentProfile,weekday:e,weekday_data:t})}}}this._updateFromEntity(),this.requestUpdate(),alert(this._translations.ui.importSuccess),this._needsManualReload(n)&&this._scheduleReloadDeviceConfig(n)}catch(t){alert(jt(this._translations.errors.failedToImport,{error:String(t)}))}finally{void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0),this._isLoading=!1}}catch(t){alert(jt(this._translations.errors.failedToImport,{error:String(t)}))}else alert(this._translations.errors.invalidImportFile)},t.click()}_addTimeBlock(){if(!this._editingBlocks)return;const t=this._editingBlocks[this._editingBlocks.length-1],e=t?t.endMinutes:0,i=Math.min(e+60,1440);i>e&&this._editingBlocks.length<12&&(this._saveHistoryState(),this._editingBlocks=[...this._editingBlocks,{startTime:Mt(e),startMinutes:e,endTime:Mt(i),endMinutes:i,temperature:20,slot:this._editingBlocks.length+1}],this._updateValidationWarnings())}_removeTimeBlock(t){!this._editingBlocks||this._editingBlocks.length<=1||(this._saveHistoryState(),this._editingBlocks=this._editingBlocks.filter((e,i)=>i!==t),this._editingBlocks=this._editingBlocks.map((t,e)=>({...t,slot:e+1})),this._updateValidationWarnings())}_updateTimeBlock(t,e){if(this._editingBlocks){this._saveHistoryState(),this._editingBlocks=this._editingBlocks.map((i,s)=>{if(s!==t)return i;const o={...i,...e};return e.endTime&&(o.endMinutes=At(e.endTime)),o});for(let e=t+1;e<this._editingBlocks.length;e++){const t=this._editingBlocks[e-1];this._editingBlocks[e]={...this._editingBlocks[e],startTime:t.endTime,startMinutes:t.endMinutes}}this._editingBlocks=[...this._editingBlocks],this._updateValidationWarnings()}}render(){if(!this._config||!this.hass)return j``;const t=this._getEntityOptions(),e=t.length>1,i=this._getActiveEntityId(),s=i?this.hass.states?.[i]:void 0,o=this._config.name||s?.attributes.friendly_name||this._translations.ui.schedule;return s?j`
      <ha-card>
        <div class="card-header">
          <div class="name">${o}</div>
        </div>
        <div class="header-controls">
          ${e?this._renderEntitySelector(t,i):""}
          ${this._config.show_profile_selector&&this._availableProfiles.length>0?j`
                <select
                  class="profile-selector"
                  @change=${this._handleProfileChange}
                  .value=${this._currentProfile||""}
                >
                  ${this._availableProfiles.map(t=>j`
                      <option value=${t} ?selected=${t===this._currentProfile}>
                        ${this._getProfileDisplayName(t)}
                      </option>
                    `)}
                </select>
              `:""}
          <button
            class="export-btn"
            @click=${this._exportSchedule}
            title="${this._translations.ui.exportTooltip}"
            ?disabled=${!this._scheduleData}
          >
            ⬇️
          </button>
          <button
            class="import-btn"
            @click=${this._importSchedule}
            title="${this._translations.ui.importTooltip}"
          >
            ⬆️
          </button>
        </div>

        <div class="card-content">
          ${this._scheduleData?this._renderScheduleView():j`<div class="loading">${this._translations.ui.loading}</div>`}
        </div>

        ${this._isLoading?j`
              <div class="loading-overlay">
                <div class="loading-spinner"></div>
              </div>
            `:""}
      </ha-card>

      ${this._editingWeekday?this._renderEditDialog():""}
    `:j`
        <ha-card>
          <div class="card-header">
            <div class="name">${o}</div>
          </div>
          <div class="card-content">
            <div class="error">
              ${jt(this._translations.ui.entityNotFound,{entity:i||this._translations.ui.schedule})}
            </div>
          </div>
        </ha-card>
      `}_renderScheduleView(){return this._scheduleData?j`
      <div class="schedule-container">
        <!-- Empty cell for time-axis header alignment -->
        <div class="time-axis-header"></div>

        <!-- Weekday headers -->
        ${vt(wt,t=>`header-${t}`,t=>{const e=this._copiedSchedule?.weekday===t;return j`
              <div class="weekday-header">
                <div class="weekday-label">${this._getWeekdayLabel(t,"short")}</div>
                ${this._config?.editable?j`
                      <div class="weekday-actions">
                        <button
                          class="copy-btn ${e?"active":""}"
                          @click=${e=>{e.stopPropagation(),this._copySchedule(t)}}
                          title="${this._translations.ui.copySchedule}"
                        >
                          📋
                        </button>
                        <button
                          class="paste-btn"
                          @click=${e=>{e.stopPropagation(),this._pasteSchedule(t)}}
                          title="${this._translations.ui.pasteSchedule}"
                          ?disabled=${!this._copiedSchedule}
                        >
                          📄
                        </button>
                      </div>
                    `:""}
              </div>
            `})}

        <!-- Time axis labels -->
        <div class="time-axis-labels">
          ${vt(this._getTimeLabels(),t=>t.hour,t=>j`
              <div class="time-label" style="top: ${t.position}%">${t.label}</div>
            `)}
        </div>

        <!-- Time blocks content wrapper (for correct indicator positioning) -->
        <div class="schedule-content">
          ${vt(wt,t=>t,t=>{const e=this._getParsedBlocks(t),i=this._getBaseTemperature(t),s=Wt(e,i);return j`
                <div
                  class="time-blocks ${this._config?.editable?"editable":""}"
                  @click=${()=>this._config?.editable&&this._handleWeekdayClick(t)}
                >
                  ${vt(s,t=>`${t.slot}-${t.startMinutes}`,(o,r)=>{const n=this._isBlockActive(t,o),a=o.temperature===i&&!e.some(t=>t.startMinutes===o.startMinutes&&t.endMinutes===o.endMinutes);let l;if(a)l="background-color: var(--secondary-background-color, #e0e0e0);";else if(this._config?.show_gradient){l=`background: ${function(t,e,i){const s=Ct(t);return null===e&&null===i?s:null!==e&&null===i?`linear-gradient(to bottom, ${Ct(e)}, ${s})`:null===e&&null!==i?`linear-gradient(to bottom, ${s}, ${Ct(i)})`:`linear-gradient(to bottom, ${Ct(e)}, ${s} 50%, ${Ct(i)})`}(o.temperature,r>0?s[r-1].temperature:null,r<s.length-1?s[r+1].temperature:null)};`}else l=`background-color: ${Ct(o.temperature)};`;return j`
                        <div
                          class="time-block ${n?"active":""} ${a?"base-temp-block":""}"
                          style="
                              height: ${(o.endMinutes-o.startMinutes)/1440*100}%;
                              ${l}
                            "
                        >
                          ${this._config?.show_temperature?j`<span class="temperature"
                                >${o.temperature.toFixed(1)}°</span
                              >`:""}
                          <div class="time-block-tooltip">
                            <div class="tooltip-time">
                              ${this._formatTimeDisplay(o.startTime)} -
                              ${this._formatTimeDisplay(o.endTime)}
                            </div>
                            <div class="tooltip-temp">
                              ${function(t,e="°C"){return`${t.toFixed(1)}${e}`}(o.temperature,this._config?.temperature_unit)}
                            </div>
                          </div>
                        </div>
                      `})}
                </div>
              `})}

          <!-- Current time indicator line (hidden when editor is open) -->
          ${this._editingWeekday?"":j`<div
                class="current-time-indicator"
                style="top: ${this._currentTimePercent}%"
              ></div>`}
        </div>
      </div>

      ${this._config?.editable?j`<div class="hint">${this._translations.ui.clickToEdit}</div>`:""}
    `:j``}_renderEntitySelector(t,e){const i=e&&t.includes(e)?e:t[0];return j`
      <select
        class="profile-selector entity-selector"
        @change=${this._handleEntitySelection}
        .value=${i}
      >
        ${[...t].sort((t,e)=>t.localeCompare(e)).map(t=>{const e=this._getEntityDisplayName(t);return j`<option value=${t}>${e}</option>`})}
      </select>
    `}_handleEntitySelection(t){const e=t.target.value;e&&e!==this._getActiveEntityId()&&(this._activeEntityId=e,this._editingWeekday=void 0,this._editingBlocks=void 0,this._copiedSchedule=void 0,this._validationWarnings=[],this._parsedScheduleCache=new WeakMap,this._updateFromEntity())}_startSlotEdit(t){if(!this._editingBlocks||t<0||t>=this._editingBlocks.length)return;const e=this._editingBlocks[t];this._editingSlotIndex=t,this._editingSlotData={startTime:e.startTime,endTime:e.endTime,temperature:e.temperature}}_startSlotEditFromDisplay(t,e){if(!this._editingBlocks)return;const i=e[t],s=this._editingBlocks.findIndex(t=>t.startMinutes===i.startMinutes&&t.endMinutes===i.endMinutes&&t.temperature===i.temperature);-1!==s&&this._startSlotEdit(s)}_cancelSlotEdit(){this._editingSlotIndex=void 0,this._editingSlotData=void 0}_saveSlotEdit(){if(void 0===this._editingSlotIndex||!this._editingSlotData||!this._editingBlocks||void 0===this._editingBaseTemperature)return;const t=this._editingSlotIndex,{startTime:e,endTime:i,temperature:s}=this._editingSlotData,o={startTime:e,startMinutes:At(e),endTime:i,endMinutes:At(i),temperature:s,slot:t+1},r=this._editingBlocks.filter((e,i)=>i!==t),n=function(t,e){const i=[],s=e.startMinutes,o=e.endMinutes,r=[...t].sort((t,e)=>t.startMinutes-e.startMinutes);for(const t of r){const e=t.startMinutes,r=t.endMinutes;r<=s||e>=o?i.push(t):(e<s&&i.push({...t,endTime:Mt(s),endMinutes:s,slot:i.length+1}),r>o&&i.push({...t,startTime:Mt(o),startMinutes:o,slot:i.length+1}))}i.push({...e,slot:i.length+1});const n=i.sort((t,e)=>t.startMinutes-e.startMinutes);return zt(n)}(r,o),a=zt(Rt(n));this._saveHistoryState(),this._editingBlocks=a,this._editingSlotIndex=void 0,this._editingSlotData=void 0,this._updateValidationWarnings()}_addNewSlot(){if(!this._editingBlocks||void 0===this._editingBaseTemperature)return;if(this._editingBlocks.length>=12)return;let t=0,e=60;if(this._editingBlocks.length>0){const i=Rt(this._editingBlocks),s=i[i.length-1];if(s.endMinutes<1440)t=s.endMinutes,e=Math.min(t+60,1440);else{let s=!1;for(let o=0;o<i.length;o++){const r=0===o?0:i[o-1].endMinutes;if(i[o].startMinutes>r){t=r,e=i[o].startMinutes,s=!0;break}}if(!s)return}}const i=Math.min(this._editingBaseTemperature+2,this._maxTemp),s={startTime:Mt(t),startMinutes:t,endTime:Mt(e),endMinutes:e,temperature:i,slot:this._editingBlocks.length+1};this._saveHistoryState();const o=Rt([...this._editingBlocks,s]);this._editingBlocks=o;const r=o.findIndex(i=>i.startMinutes===t&&i.endMinutes===e);r>=0&&this._startSlotEdit(r),this._updateValidationWarnings()}_renderEditor(){if(!this._editingWeekday||!this._editingBlocks)return j``;const t=void 0!==this._editingBaseTemperature?Wt(this._editingBlocks,this._editingBaseTemperature):this._editingBlocks;return j`
      <div class="editor">
        <div class="editor-header">
          <h3>
            ${jt(this._translations.ui.edit,{weekday:this._getWeekdayLabel(this._editingWeekday,"long")})}
          </h3>
          <div class="editor-actions">
            <button
              class="undo-btn"
              @click=${this._undo}
              ?disabled=${!this._canUndo()}
              title="${this._translations.ui.undoShortcut}"
            >
              ↶
            </button>
            <button
              class="redo-btn"
              @click=${this._redo}
              ?disabled=${!this._canRedo()}
              title="${this._translations.ui.redoShortcut}"
            >
              ↷
            </button>
            <button class="close-btn" @click=${this._closeEditor}>✕</button>
          </div>
        </div>

        ${this._validationWarnings.length>0?j`
              <div class="validation-warnings">
                <div class="warnings-header">
                  <span class="warning-icon">⚠️</span>
                  <span class="warnings-title">${this._translations.warnings.title}</span>
                </div>
                <ul class="warnings-list">
                  ${this._validationWarnings.map(t=>j`<li class="warning-item">
                        ${this._translateValidationMessage(t)}
                      </li>`)}
                </ul>
              </div>
            `:""}

        <!-- Base Temperature Section -->
        <div class="base-temperature-section">
          <div class="base-temperature-header">
            <span class="base-temp-label">${this._translations.ui.baseTemperature}</span>
            <span class="base-temp-description"
              >${this._translations.ui.baseTemperatureDescription}</span
            >
          </div>
          <div class="base-temperature-input">
            <input
              type="number"
              class="temp-input base-temp-input"
              .value=${this._editingBaseTemperature?.toString()||"20.0"}
              step=${this._tempStep}
              min=${this._minTemp}
              max=${this._maxTemp}
              @change=${t=>{this._saveHistoryState(),this._editingBaseTemperature=parseFloat(t.target.value),this.requestUpdate()}}
            />
            <span class="temp-unit">${this._config?.temperature_unit||"°C"}</span>
            <div
              class="color-indicator"
              style="background-color: ${Ct(this._editingBaseTemperature||20)}"
            ></div>
          </div>
        </div>

        <div class="editor-content-label">${this._translations.ui.temperaturePeriods}</div>
        <div class="editor-content">
          <div class="time-block-header">
            <span class="header-cell header-from">${this._translations.ui.from}</span>
            <span class="header-cell header-to">${this._translations.ui.to}</span>
            <span class="header-cell header-temp">Temp</span>
            <span class="header-cell header-actions"></span>
          </div>
          ${t.map((e,i)=>{const s=this._editingBlocks.findIndex(t=>t.startMinutes===e.startMinutes&&t.endMinutes===e.endMinutes),o=!(-1!==s);return void 0!==this._editingSlotIndex&&this._editingSlotIndex===s&&void 0!==this._editingSlotData&&this._editingSlotData?j`
                <div class="time-block-editor editing">
                  <input
                    type="time"
                    class="time-input"
                    .value=${this._editingSlotData.startTime}
                    @change=${t=>{this._editingSlotData&&(this._editingSlotData={...this._editingSlotData,startTime:t.target.value},this.requestUpdate())}}
                  />
                  <input
                    type="time"
                    class="time-input"
                    .value=${"24:00"===this._editingSlotData.endTime?"23:59":this._editingSlotData.endTime}
                    @change=${t=>{if(this._editingSlotData){let e=t.target.value;"23:59"===e&&(e="24:00"),this._editingSlotData={...this._editingSlotData,endTime:e},this.requestUpdate()}}}
                  />
                  <div class="temp-input-group">
                    <input
                      type="number"
                      class="temp-input"
                      .value=${this._editingSlotData.temperature.toString()}
                      step=${this._tempStep}
                      min=${this._minTemp}
                      max=${this._maxTemp}
                      @change=${t=>{this._editingSlotData&&(this._editingSlotData={...this._editingSlotData,temperature:parseFloat(t.target.value)},this.requestUpdate())}}
                    />
                    <span class="temp-unit">${this._config?.temperature_unit||"°C"}</span>
                  </div>
                  <div class="slot-actions">
                    <button class="slot-save-btn" @click=${this._saveSlotEdit}>
                      ${this._translations.ui.saveSlot}
                    </button>
                    <button class="slot-cancel-btn" @click=${this._cancelSlotEdit}>
                      ${this._translations.ui.cancelSlotEdit}
                    </button>
                  </div>
                  <div
                    class="color-indicator"
                    style="background-color: ${Ct(this._editingSlotData.temperature)}"
                  ></div>
                </div>
              `:j`
              <div class="time-block-editor ${o?"base-temp-slot":""}">
                <span class="time-display">${this._formatTimeDisplay(e.startTime)}</span>
                <span class="time-display">${this._formatTimeDisplay(e.endTime)}</span>
                <div class="temp-display-group">
                  <span class="temp-display">${e.temperature.toFixed(1)}</span>
                  <span class="temp-unit">${this._config?.temperature_unit||"°C"}</span>
                </div>
                <div class="slot-actions">
                  ${o?j``:j`
                        <button
                          class="slot-edit-btn"
                          @click=${()=>this._startSlotEditFromDisplay(i,t)}
                          ?disabled=${void 0!==this._editingSlotIndex}
                        >
                          ${this._translations.ui.editSlot}
                        </button>
                        <button
                          class="remove-btn"
                          @click=${()=>this._removeTimeBlockByIndex(i,t)}
                          ?disabled=${void 0!==this._editingSlotIndex}
                        >
                          🗑️
                        </button>
                      `}
                </div>
                <div
                  class="color-indicator"
                  style="background-color: ${Ct(e.temperature)}"
                ></div>
              </div>
            `})}
          ${this._editingBlocks.length<12&&void 0===this._editingSlotIndex?j`
                <button class="add-btn" @click=${this._addNewSlot}>
                  ${this._translations.ui.addTimeBlock}
                </button>
              `:""}
        </div>

        <div class="editor-footer">
          <button class="cancel-btn" @click=${this._closeEditor}>
            ${this._translations.ui.cancel}
          </button>
          <button class="save-btn" @click=${this._saveSchedule}>
            ${this._translations.ui.save}
          </button>
        </div>
      </div>
    `}_removeTimeBlockByIndex(t,e){if(!this._editingBlocks||void 0===this._editingBaseTemperature)return;const i=e[t],s=this._editingBlocks.findIndex(t=>t.startMinutes===i.startMinutes&&t.endMinutes===i.endMinutes&&t.temperature===i.temperature);if(-1===s)return;this._saveHistoryState();const o=this._editingBlocks.filter((t,e)=>e!==s);this._editingBlocks=zt(Rt(o)),this._updateValidationWarnings()}async _saveAndClose(){await this._saveSchedule()}_switchToWeekday(t){if(t===this._editingWeekday)return;this._editingWeekday=t,this._editingBlocks=this._getParsedBlocks(t);const e=this._scheduleData?.[t];if(e){const{baseTemperature:t}=Pt(e);this._editingBaseTemperature=t}else this._editingBaseTemperature=20;this._historyStack=[JSON.parse(JSON.stringify(this._editingBlocks))],this._historyIndex=0,this._updateValidationWarnings()}_renderEditDialog(){return this._editingWeekday?j`
      <ha-dialog
        open
        @closed=${this._closeEditor}
        .heading=${jt(this._translations.ui.edit,{weekday:this._getWeekdayLabel(this._editingWeekday,"long")})}
        scrimClickAction="close"
        escapeKeyAction="close"
      >
        <div class="dialog-content">
          <!-- Weekday selector tabs -->
          <div class="weekday-tabs">
            ${wt.map(t=>j`
                <button
                  class="weekday-tab ${t===this._editingWeekday?"active":""}"
                  @click=${()=>this._switchToWeekday(t)}
                >
                  ${this._getWeekdayLabel(t,"short")}
                </button>
              `)}
          </div>

          <!-- Editor content in dialog -->
          <div class="dialog-editor">${this._renderEditor()}</div>
        </div>

        <mwc-button slot="primaryAction" @click=${this._saveAndClose} dialogAction="close">
          ${this._translations.ui.save}
        </mwc-button>
        <mwc-button slot="secondaryAction" @click=${this._closeEditor} dialogAction="close">
          ${this._translations.ui.cancel}
        </mwc-button>
      </ha-dialog>
    `:j``}static get styles(){return n`
      :host {
        display: block;
      }

      ha-card {
        padding: 16px;
      }

      .card-header {
        display: block;
        margin-bottom: 8px;
      }

      .name {
        font-size: 24px;
        font-weight: 400;
        color: var(--primary-text-color);
        margin-bottom: 8px;
      }

      .header-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-bottom: 24px;
      }

      .profile-selector {
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        cursor: pointer;
      }

      .entity-selector {
        width: 100%;
        font-size: 16px;
      }

      .export-btn,
      .import-btn {
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.2s;
        line-height: 1;
      }

      .export-btn:hover,
      .import-btn:hover {
        background-color: var(--divider-color);
      }

      .export-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      .export-btn:disabled:hover {
        background-color: var(--card-background-color);
      }

      .card-content {
        position: relative;
      }

      .schedule-container {
        display: grid;
        grid-template-columns: auto repeat(7, minmax(0, 1fr));
        grid-template-rows: auto 1fr;
        gap: 8px;
        min-height: 400px;
        overflow-x: auto;
        overflow-y: visible;
        width: 100%;
        box-sizing: border-box;
      }

      .time-axis-header {
        /* Empty cell in row 1, col 1 - height matches weekday headers */
      }

      .time-axis-labels {
        position: relative;
        border-right: 2px solid var(--divider-color);
        min-width: 50px;
      }

      .time-label {
        position: absolute;
        right: 8px;
        transform: translateY(-50%);
        font-size: 11px;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      .schedule-content {
        grid-column: 2 / -1;
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 8px;
        position: relative;
        min-height: 300px;
      }

      .current-time-indicator {
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background-color: var(--error-color, #ff0000);
        border-top: 2px dashed var(--error-color, #ff0000);
        pointer-events: none;
        z-index: 10;
        transform: translateY(-50%);
        box-shadow: 0 0 4px rgba(255, 0, 0, 0.5);
        will-change: top;
      }

      .current-time-indicator::before {
        content: "";
        position: absolute;
        left: -6px;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background-color: var(--error-color, #ff0000);
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(255, 0, 0, 0.7);
      }

      .weekday-header {
        padding: 4px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        border: 1px solid var(--divider-color);
        border-radius: 4px;
      }

      .weekday-label {
        font-weight: 500;
        font-size: 14px;
      }

      .weekday-actions {
        display: flex;
        gap: 4px;
      }

      .copy-btn,
      .paste-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 14px;
        padding: 2px 4px;
        border-radius: 3px;
        transition: background-color 0.2s;
        opacity: 0.7;
      }

      .copy-btn:hover,
      .paste-btn:not(:disabled):hover {
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.2);
      }

      .copy-btn.active {
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.3);
        animation: pulse 1s ease-in-out;
        will-change: transform;
      }

      @keyframes pulse {
        0%,
        100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      }

      .paste-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      .time-blocks {
        flex: 1;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: visible;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
      }

      .time-blocks.editable {
        cursor: pointer;
        will-change: transform, box-shadow;
      }

      .time-blocks.editable:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      .time-block {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 12px;
        font-weight: 500;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        transition: opacity 0.2s;
        cursor: pointer;
      }

      .time-block.base-temp-block {
        color: var(--secondary-text-color, #666);
        text-shadow: none;
        border-top: 1px dashed var(--divider-color, #ccc);
      }

      .time-block.base-temp-block:first-child {
        border-top: none;
      }

      .time-block:hover {
        opacity: 0.9;
      }

      .time-block:hover .time-block-tooltip {
        opacity: 1;
        visibility: visible;
      }

      .temperature {
        user-select: none;
        position: relative;
        z-index: 1;
      }

      /* Active block highlighting */
      .time-block.active {
        box-shadow:
          inset 0 0 0 3px rgba(255, 255, 255, 0.9),
          0 0 20px rgba(255, 255, 255, 0.6),
          0 0 30px rgba(255, 255, 255, 0.4);
        animation: pulse-glow 2s ease-in-out infinite;
        z-index: 10;
        will-change: box-shadow;
      }

      @keyframes pulse-glow {
        0%,
        100% {
          box-shadow:
            inset 0 0 0 3px rgba(255, 255, 255, 0.9),
            0 0 15px rgba(255, 255, 255, 0.5),
            0 0 25px rgba(255, 255, 255, 0.3);
        }
        50% {
          box-shadow:
            inset 0 0 0 3px rgba(255, 255, 255, 1),
            0 0 25px rgba(255, 255, 255, 0.8),
            0 0 40px rgba(255, 255, 255, 0.6);
        }
      }

      /* Tooltip styling */
      .time-block-tooltip {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.95);
        color: white;
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 10px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition:
          opacity 0.2s,
          visibility 0.2s;
        z-index: 1000;
        pointer-events: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        min-width: 80px;
      }

      .tooltip-time {
        font-weight: 500;
        margin-bottom: 2px;
        text-align: center;
        font-size: 10px;
        line-height: 1.2;
      }

      .tooltip-temp {
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        line-height: 1.2;
      }

      .hint {
        margin-top: 12px;
        text-align: center;
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .loading,
      .error {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .error {
        color: var(--error-color);
      }

      /* Editor Styles */
      .editor {
        background-color: var(--card-background-color);
      }

      .editor-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--divider-color);
      }

      .editor-header h3 {
        margin: 0;
        font-size: 20px;
        font-weight: 500;
      }

      .editor-actions {
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .undo-btn,
      .redo-btn,
      .close-btn {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: var(--secondary-text-color);
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition:
          background-color 0.2s,
          opacity 0.2s;
      }

      .undo-btn:hover:not(:disabled),
      .redo-btn:hover:not(:disabled),
      .close-btn:hover {
        background-color: var(--divider-color);
      }

      .undo-btn:disabled,
      .redo-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      .validation-warnings {
        background-color: rgba(255, 152, 0, 0.1);
        border: 1px solid rgba(255, 152, 0, 0.3);
        border-radius: 4px;
        padding: 12px;
        margin: 12px 0;
      }

      .warnings-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .warning-icon {
        font-size: 18px;
      }

      .warnings-title {
        font-size: 14px;
      }

      .warnings-list {
        margin: 0;
        padding-left: 28px;
        list-style-type: disc;
      }

      .warning-item {
        color: var(--secondary-text-color);
        font-size: 13px;
        line-height: 1.6;
        margin: 4px 0;
      }

      /* Base Temperature Section */
      .base-temperature-section {
        background-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        padding: 12px;
        margin: 12px 0;
      }

      .base-temperature-header {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 8px;
      }

      .base-temp-label {
        font-weight: 500;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .base-temp-description {
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .base-temperature-input {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .base-temp-input {
        width: 80px;
        font-weight: 500;
      }

      .editor-content-label {
        font-weight: 500;
        font-size: 14px;
        color: var(--primary-text-color);
        margin: 16px 0 8px 0;
        padding-left: 8px;
      }

      .editor-content {
        max-height: 500px;
        overflow-y: auto;
      }

      .time-block-header {
        display: grid;
        grid-template-columns: 100px 100px 90px 1fr 24px;
        gap: 8px;
        align-items: center;
        padding: 8px;
        border-bottom: 2px solid var(--divider-color);
        font-weight: 500;
        font-size: 12px;
        color: var(--secondary-text-color);
        text-transform: uppercase;
      }

      .header-cell {
        text-align: left;
      }

      .time-block-editor {
        display: grid;
        grid-template-columns: 100px 100px 90px 1fr 24px;
        gap: 8px;
        align-items: center;
        padding: 8px;
        border-bottom: 1px solid var(--divider-color);
      }

      .time-block-editor.editing {
        background-color: var(--primary-color-light, rgba(3, 169, 244, 0.1));
        border: 1px solid var(--primary-color);
        border-radius: 4px;
        margin: 4px 0;
      }

      .time-block-editor.base-temp-slot {
        opacity: 0.6;
        background-color: var(--divider-color);
      }

      .time-display {
        font-size: 14px;
        color: var(--primary-text-color);
        font-family: monospace;
      }

      .temp-display-group,
      .temp-input-group {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .temp-display {
        font-size: 14px;
        color: var(--primary-text-color);
        font-weight: 500;
      }

      .slot-actions {
        display: flex;
        gap: 4px;
        justify-content: flex-end;
      }

      .slot-edit-btn,
      .slot-save-btn,
      .slot-cancel-btn {
        padding: 4px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 12px;
        cursor: pointer;
        white-space: nowrap;
      }

      .slot-edit-btn:hover,
      .slot-save-btn:hover,
      .slot-cancel-btn:hover {
        background-color: var(--divider-color);
      }

      .slot-save-btn {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        border-color: var(--primary-color);
      }

      .slot-cancel-btn {
        background-color: var(--error-color, #e74c3c);
        color: white;
        border-color: var(--error-color, #e74c3c);
      }

      .slot-edit-btn:disabled,
      .remove-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      .block-number {
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .time-input,
      .temp-input {
        padding: 6px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        width: 100%;
        box-sizing: border-box;
      }

      .time-input {
        min-width: 100px;
        max-width: 120px;
      }

      .temp-input {
        max-width: 60px;
      }

      .temp-unit {
        color: var(--secondary-text-color);
        font-size: 14px;
      }

      .remove-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 18px;
        padding: 4px;
      }

      .remove-btn:hover {
        opacity: 0.7;
      }

      .color-indicator {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        border: 1px solid var(--divider-color);
        flex-shrink: 0;
      }

      .add-btn {
        margin: 12px 0;
        padding: 10px 16px;
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        width: 100%;
      }

      .add-btn:hover {
        opacity: 0.9;
      }

      .editor-footer {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid var(--divider-color);
      }

      .cancel-btn,
      .save-btn {
        padding: 10px 24px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
      }

      .cancel-btn {
        background-color: var(--divider-color);
        color: var(--primary-text-color);
      }

      .save-btn {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }

      .cancel-btn:hover,
      .save-btn:hover {
        opacity: 0.9;
      }

      /* Loading overlay */
      .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        border-radius: 4px;
      }

      .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(255, 255, 255, 0.3);
        border-top-color: var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      /* Mobile Optimization */
      @media (max-width: 768px) {
        ha-card {
          padding: 12px;
        }

        .card-header {
          flex-direction: column;
          align-items: stretch;
          gap: 12px;
          margin-bottom: 12px;
        }

        .name {
          font-size: 20px;
          text-align: center;
        }

        .header-controls {
          justify-content: center;
          flex-wrap: wrap;
        }

        .profile-selector,
        .export-btn,
        .import-btn {
          min-height: 44px;
          padding: 10px 16px;
          font-size: 16px;
        }

        .schedule-container {
          gap: 4px;
          min-height: 350px;
        }

        .time-axis-labels {
          min-width: 40px;
        }

        .time-label {
          font-size: 10px;
          right: 4px;
        }

        .schedule-content {
          gap: 4px;
        }

        .weekday-header {
          padding: 6px 4px;
        }

        .weekday-label {
          font-size: 12px;
        }

        .weekday-actions {
          gap: 6px;
        }

        .copy-btn,
        .paste-btn {
          font-size: 16px;
          padding: 6px 8px;
          min-width: 44px;
          min-height: 44px;
        }

        .temperature {
          font-size: 11px;
        }

        .time-block-tooltip {
          font-size: 11px;
          padding: 8px 12px;
        }

        .hint {
          font-size: 14px;
        }

        /* Editor mobile styles */
        .editor-header h3 {
          font-size: 18px;
        }

        .undo-btn,
        .redo-btn,
        .close-btn {
          width: 44px;
          height: 44px;
          font-size: 28px;
        }

        .editor-content {
          max-height: 400px;
        }

        .time-block-editor {
          grid-template-columns: 30px 1fr 70px 40px 44px 20px;
          gap: 6px;
          padding: 10px 6px;
        }

        .block-number {
          font-size: 13px;
        }

        .time-input,
        .temp-input {
          padding: 10px 8px;
          font-size: 16px;
          min-height: 44px;
        }

        .temp-unit {
          font-size: 13px;
        }

        .remove-btn {
          font-size: 22px;
          padding: 8px;
          min-width: 44px;
          min-height: 44px;
        }

        .add-btn {
          padding: 14px 16px;
          font-size: 16px;
          min-height: 48px;
        }

        .editor-footer {
          flex-direction: column-reverse;
          gap: 8px;
        }

        .cancel-btn,
        .save-btn {
          width: 100%;
          padding: 14px 24px;
          font-size: 16px;
          min-height: 48px;
        }

        .validation-warnings {
          padding: 10px;
          margin: 10px 0;
        }

        .warnings-title {
          font-size: 13px;
        }

        .warning-item {
          font-size: 12px;
        }
      }

      /* Small mobile devices (portrait phones) */
      @media (max-width: 480px) {
        ha-card {
          padding: 8px;
        }

        .name {
          font-size: 18px;
        }

        .schedule-container {
          gap: 2px;
          min-height: 300px;
        }

        .time-axis-labels {
          min-width: 35px;
        }

        .time-label {
          font-size: 9px;
          right: 2px;
        }

        .schedule-content {
          gap: 2px;
        }

        .weekday-label {
          font-size: 11px;
        }

        .temperature {
          font-size: 10px;
        }

        .time-block-editor {
          grid-template-columns: 25px 1fr 60px 35px 44px 16px;
          gap: 4px;
          padding: 8px 4px;
        }

        .block-number {
          font-size: 12px;
        }

        .editor-header h3 {
          font-size: 16px;
        }
      }

      /* Landscape mobile optimization */
      @media (max-width: 768px) and (orientation: landscape) {
        .schedule-container {
          min-height: 250px;
        }

        .editor-content {
          max-height: 200px;
        }
      }

      /* Touch-specific optimizations */
      @media (hover: none) and (pointer: coarse) {
        .weekday-column.editable:hover {
          transform: none;
          box-shadow: none;
        }

        .weekday-column.editable:active {
          transform: scale(0.98);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .time-block:hover {
          opacity: 1;
        }

        .time-block:active {
          opacity: 0.85;
        }

        /* Show tooltip on tap instead of hover */
        .time-block:active .time-block-tooltip {
          opacity: 1;
          visibility: visible;
        }

        /* Disable hover effects, use active states */
        .copy-btn:hover,
        .paste-btn:not(:disabled):hover,
        .undo-btn:hover:not(:disabled),
        .redo-btn:hover:not(:disabled),
        .close-btn:hover,
        .add-btn:hover,
        .cancel-btn:hover,
        .save-btn:hover,
        .export-btn:hover,
        .import-btn:hover,
        .remove-btn:hover {
          opacity: 1;
          background-color: transparent;
        }

        .copy-btn:active,
        .paste-btn:not(:disabled):active {
          background-color: rgba(255, 255, 255, 0.3);
        }

        .undo-btn:active:not(:disabled),
        .redo-btn:active:not(:disabled),
        .close-btn:active {
          background-color: var(--divider-color);
        }

        .export-btn:active:not(:disabled),
        .import-btn:active {
          background-color: var(--divider-color);
        }

        .add-btn:active,
        .save-btn:active {
          opacity: 0.85;
        }

        .cancel-btn:active {
          opacity: 0.85;
        }

        .remove-btn:active {
          opacity: 0.5;
        }
      }

      /* Dialog styles */
      ha-dialog {
        --mdc-dialog-max-width: 90vw;
        --mdc-dialog-max-height: 90vh;
      }

      .dialog-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        overflow-y: auto;
        max-height: calc(90vh - 200px);
      }

      .weekday-tabs {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .weekday-tab {
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        cursor: pointer;
        transition:
          background-color 0.2s,
          border-color 0.2s;
        min-width: 40px;
        text-align: center;
      }

      .weekday-tab:hover {
        background-color: var(--divider-color);
      }

      .weekday-tab.active {
        background-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
        border-color: var(--primary-color);
      }

      .dialog-editor {
        flex: 1;
        min-height: 0;
      }

      .dialog-editor .editor {
        box-shadow: none;
        border: none;
        padding: 0;
      }

      .dialog-editor .editor-header {
        display: none;
      }

      .dialog-editor .editor-footer {
        display: none;
      }

      @media (max-width: 768px) {
        ha-dialog {
          --mdc-dialog-max-width: 100vw;
          --mdc-dialog-max-height: 100vh;
        }

        .dialog-content {
          max-height: calc(100vh - 150px);
        }
      }
    `}};t([$t({attribute:!1})],Ft.prototype,"hass",void 0),t([St()],Ft.prototype,"_config",void 0),t([St()],Ft.prototype,"_currentProfile",void 0),t([St()],Ft.prototype,"_scheduleData",void 0),t([St()],Ft.prototype,"_availableProfiles",void 0),t([St()],Ft.prototype,"_activeEntityId",void 0),t([St()],Ft.prototype,"_editingWeekday",void 0),t([St()],Ft.prototype,"_editingBlocks",void 0),t([St()],Ft.prototype,"_editingBaseTemperature",void 0),t([St()],Ft.prototype,"_copiedSchedule",void 0),t([St()],Ft.prototype,"_isLoading",void 0),t([St()],Ft.prototype,"_currentTimePercent",void 0),t([St()],Ft.prototype,"_currentTimeMinutes",void 0),t([St()],Ft.prototype,"_currentWeekday",void 0),t([St()],Ft.prototype,"_translations",void 0),t([St()],Ft.prototype,"_validationWarnings",void 0),t([St()],Ft.prototype,"_minTemp",void 0),t([St()],Ft.prototype,"_maxTemp",void 0),t([St()],Ft.prototype,"_tempStep",void 0),t([St()],Ft.prototype,"_editingSlotIndex",void 0),t([St()],Ft.prototype,"_editingSlotData",void 0),Ft=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("homematicip-local-climate-schedule-card")],Ft),window.customCards=window.customCards||[],window.customCards.push({type:"homematicip-local-climate-schedule-card",name:"Homematic(IP) Local Climate Schedule Card",description:"Display and edit Homematic thermostat schedules",preview:!0});export{Ft as HomematicScheduleCard};
