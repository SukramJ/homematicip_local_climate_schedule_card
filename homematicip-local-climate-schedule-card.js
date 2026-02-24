function e(e,t,i,s){var r,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let o=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new o(i,e,s)},n=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,f=_.trustedTypes,m=f?f.emptyScript:"",g=_.reactiveElementPolyfillSupport,y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),S={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&d(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const o=s?.call(this);r?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=s;const o=r.fromAttribute(t,e.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(void 0!==e){const o=this.constructor;if(!1===s&&(r=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??b)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==r||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,g?.({ReactiveElement:$}),(_.reactiveElementVersions??=[]).push("2.1.2");const E=globalThis,w=e=>e,k=E.trustedTypes,x=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+T,D=`<${P}>`,C=document,M=()=>C.createComment(""),I=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,L="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,R=/>/g,W=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,H=/"/g,j=/^(?:script|style|textarea|title)$/i,z=(e,...t)=>({_$litType$:1,strings:e,values:t}),F=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Z=new WeakMap,Y=C.createTreeWalker(C,129);function q(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,s=[];let r,o=2===t?"<svg>":3===t?"<math>":"",a=N;for(let t=0;t<i;t++){const i=e[t];let n,l,d=-1,c=0;for(;c<i.length&&(a.lastIndex=c,l=a.exec(i),null!==l);)c=a.lastIndex,a===N?"!--"===l[1]?a=U:void 0!==l[1]?a=R:void 0!==l[2]?(j.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=W):void 0!==l[3]&&(a=W):a===W?">"===l[0]?(a=r??N,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?W:'"'===l[3]?H:B):a===H||a===B?a=W:a===U||a===R?a=N:(a=W,r=void 0);const h=a===W&&e[t+1].startsWith("/>")?" ":"";o+=a===N?i+D:d>=0?(s.push(n),i.slice(0,d)+A+i.slice(d)+T+h):i+T+(-2===d?t:h)}return[q(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class K{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,n=this.parts,[l,d]=J(e,t);if(this.el=K.createElement(l,i),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=Y.nextNode())&&n.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(A)){const t=d[o++],i=s.getAttribute(e).split(T),a=/([.?@])?(.*)/.exec(t);n.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?te:"?"===a[1]?ie:"@"===a[1]?se:ee}),s.removeAttribute(e)}else e.startsWith(T)&&(n.push({type:6,index:r}),s.removeAttribute(e));if(j.test(s.tagName)){const e=s.textContent.split(T),t=e.length-1;if(t>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],M()),Y.nextNode(),n.push({type:2,index:++r});s.append(e[t],M())}}}else if(8===s.nodeType)if(s.data===P)n.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(T,e+1));)n.push({type:7,index:r}),e+=T.length-1}r++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,s){if(t===F)return t;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=I(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e),r._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(t=G(e,r._$AS(e,t.values),r,s)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??C).importNode(t,!0);Y.currentNode=s;let r=Y.nextNode(),o=0,a=0,n=i[0];for(;void 0!==n;){if(o===n.index){let t;2===n.type?t=new X(r,r.nextSibling,this,e):1===n.type?t=new n.ctor(r,n.name,n.strings,this,e):6===n.type&&(t=new re(r,this,e)),this._$AV.push(t),n=i[++a]}o!==n?.index&&(r=Y.nextNode(),o++)}return Y.currentNode=C,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),I(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new Q(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new K(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new X(this.O(M()),this.O(M()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(void 0===r)e=G(this,e,t,0),o=!I(e)||e!==this._$AH&&e!==F,o&&(this._$AH=e);else{const s=e;let a,n;for(e=r[0],a=0;a<r.length-1;a++)n=G(this,s[i+a],t,a),n===F&&(n=this._$AH[a]),o||=!I(n)||n!==this._$AH[a],n===V?e=V:e!==V&&(e+=(n??"")+r[a+1]),this._$AH[a]=n}o&&!s&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class se extends ee{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??V)===F)return;const i=this._$AH,s=e===V&&i!==V||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const oe=E.litHtmlPolyfillSupport;oe?.(K,X),(E.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;class ne extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let r=s._$litPart$;if(void 0===r){const e=i?.renderBefore??null;s._$litPart$=r=new X(t.insertBefore(M(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ne._$litElement$=!0,ne.finalized=!0,ae.litElementHydrateSupport?.({LitElement:ne});const le=ae.litElementPolyfillSupport;le?.({LitElement:ne}),(ae.litElementVersions??=[]).push("4.2.2");const de={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},ce=(e=de,t,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,r,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];t.call(this,i),this.requestUpdate(s,r,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};function he(e){return(t,i)=>"object"==typeof i?ce(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function pe(e){return he({...e,state:!0,attribute:!1})}const ue=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];function _e(e){const[t,i]=e.split(":").map(Number);return 60*t+i}function fe(e){const{base_temperature:t,periods:i}=e,s=[],r=[...i].sort((e,t)=>_e(e.starttime)-_e(t.starttime));for(let e=0;e<r.length;e++){const t=r[e];s.push({startTime:t.starttime,startMinutes:_e(t.starttime),endTime:t.endtime,endMinutes:_e(t.endtime),temperature:t.temperature,slot:e+1})}return{blocks:s,baseTemperature:t}}function me(e,t){const i=[],s=[...e].sort((e,t)=>e.startMinutes-t.startMinutes);for(const e of s)i.push({starttime:e.startTime,endtime:e.endTime,temperature:e.temperature});return{base_temperature:t,periods:i}}function ge(e){if(0===e.length)return 20;const t=new Map;for(const i of e){const e=i.endMinutes-i.startMinutes,s=t.get(i.temperature)||0;t.set(i.temperature,s+e)}let i=0,s=20;for(const[e,r]of t.entries())r>i&&(i=r,s=e);return s}function ye(e,t=5,i=30.5){const{base_temperature:s,periods:r}=e;if(s<t||s>i)return{key:"temperatureOutOfRange",params:{block:"base",min:`${t}`,max:`${i}`}};let o=0;for(let e=0;e<r.length;e++){const s=r[e];if(!s.starttime||!s.endtime||void 0===s.temperature)return{key:"slotMissingValues",params:{slot:`${e+1}`}};const a=_e(s.starttime),n=_e(s.endtime);if(n<=a)return{key:"blockEndBeforeStart",params:{block:`${e+1}`}};if(a<o)return{key:"slotTimeBackwards",params:{slot:`${e+1}`,time:s.starttime}};if(s.temperature<t||s.temperature>i)return{key:"temperatureOutOfRange",params:{block:`${e+1}`,min:`${t}`,max:`${i}`}};o=n}return null}const ve=(e,t,i)=>{const s=new CustomEvent(t,{bubbles:!0,composed:!0,detail:i});e.dispatchEvent(s)};class be extends ne{constructor(){super(...arguments),this._expandedEntity=null,this._computeLabel=e=>({entities:"Entities",name:"Card Name (optional)",show_profile_selector:"Show profile selector",editable:"Allow editing",show_temperature:"Show temperature values",show_gradient:"Show color gradient",hour_format:"Time format"}[e.name]||e.name)}static{this.ENTITY_SCHEMA=[{name:"entities",required:!0,selector:{entity:{domain:"climate",integration:"homematicip_local",multiple:!0}}}]}static{this.OPTIONS_SCHEMA=[{name:"name",selector:{text:{}}},{name:"show_profile_selector",selector:{boolean:{}},default:!0},{name:"editable",selector:{boolean:{}},default:!0},{name:"show_temperature",selector:{boolean:{}},default:!0},{name:"show_gradient",selector:{boolean:{}},default:!1},{name:"hour_format",selector:{select:{options:[{value:"24",label:"24h"},{value:"12",label:"12h (AM/PM)"}]}},default:"24"}]}setConfig(e){this._config=e}_getEntityId(e){return"string"==typeof e?e:e.entity}_getEntityName(e){return"string"==typeof e?"":e.name||""}_getEntityProfileNames(e){return"string"==typeof e?{}:e.profile_names||{}}_getEntityIds(){return this._config?.entities?this._config.entities.map(e=>this._getEntityId(e)):[]}_getAvailableProfiles(e){const t=this.hass?.states?.[e];return t?.attributes?.available_profiles?[...t.attributes.available_profiles].sort():[]}render(){if(!this.hass||!this._config)return V;const e={entities:this._getEntityIds()};return z`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${be.ENTITY_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._entitiesChanged}
      ></ha-form>

      ${this._renderEntityConfig()}

      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${be.OPTIONS_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._optionsChanged}
      ></ha-form>
    `}_renderEntityConfig(){const e=this._config?.entities||[];return 0===e.length?z``:z`
      <div class="entity-config">
        <div class="section-header">Entity Configuration</div>
        ${e.map((e,t)=>{const i=this._getEntityId(e),s=this._getEntityName(e),r=this._getEntityProfileNames(e),o=this.hass?.states?.[i]?.attributes.friendly_name||i,a=this._getAvailableProfiles(i),n=this._expandedEntity===i;return z`
            <div class="entity-section">
              <div class="entity-header" @click=${()=>this._toggleEntity(i)}>
                <span class="expand-icon">${n?"▼":"▶"}</span>
                <span class="entity-title" title=${i}>${o}</span>
              </div>

              ${n?z`
                    <div class="entity-details">
                      <div class="config-row">
                        <label>Display Name</label>
                        <input
                          type="text"
                          .value=${s}
                          placeholder=${o}
                          @input=${e=>this._entityNameChanged(t,e)}
                        />
                      </div>

                      ${a.length>0?z`
                            <div class="profile-names-section">
                              <div class="profile-names-header">Profile Names</div>
                              ${a.map(e=>z`
                                  <div class="config-row profile-row">
                                    <label>${e}</label>
                                    <input
                                      type="text"
                                      .value=${r[e]||""}
                                      placeholder=${e}
                                      @input=${i=>this._profileNameChanged(t,e,i)}
                                    />
                                  </div>
                                `)}
                            </div>
                          `:z`
                            <div class="no-profiles">No profiles available for this entity</div>
                          `}
                    </div>
                  `:""}
            </div>
          `})}
      </div>
    `}_toggleEntity(e){this._expandedEntity=this._expandedEntity===e?null:e}_entitiesChanged(e){e.stopPropagation();const t=(e.detail.value?.entities||[]).map(e=>{const t=this._config?.entities?.find(t=>this._getEntityId(t)===e);return t&&"string"!=typeof t&&(t.name||Object.keys(t.profile_names||{}).length>0)?{...t,entity:e}:e}),i={...this._config,entities:t};ve(this,"config-changed",{config:i})}_getOrCreateEntityConfig(e,t){const i=e[t];return"string"==typeof i?{entity:i}:{...i}}_simplifyEntityConfig(e){const t=!!e.name,i=Object.keys(e.profile_names||{}).length>0;return t||i?e:e.entity}_entityNameChanged(e,t){const i=t.target.value.trim(),s=[...this._config?.entities||[]];if(e>=s.length)return;const r=this._getOrCreateEntityConfig(s,e);i?r.name=i:delete r.name,s[e]=this._simplifyEntityConfig(r);const o={...this._config,entities:s};ve(this,"config-changed",{config:o})}_profileNameChanged(e,t,i){const s=i.target.value.trim(),r=[...this._config?.entities||[]];if(e>=r.length)return;const o=this._getOrCreateEntityConfig(r,e);o.profile_names||(o.profile_names={}),s?o.profile_names[t]=s:delete o.profile_names[t],0===Object.keys(o.profile_names).length&&delete o.profile_names,r[e]=this._simplifyEntityConfig(o);const a={...this._config,entities:r};ve(this,"config-changed",{config:a})}_optionsChanged(e){e.stopPropagation();const t={...this._config,...e.detail.value,entities:this._config.entities};ve(this,"config-changed",{config:t})}static{this.styles=a`
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
  `}}e([he({attribute:!1})],be.prototype,"hass",void 0),e([pe()],be.prototype,"_config",void 0),e([pe()],be.prototype,"_expandedEntity",void 0),customElements.define("homematicip-local-climate-schedule-card-editor",be);const Se={en:{weekdays:{short:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"},long:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"}},ui:{schedule:"Schedule",loading:"Loading schedule data...",entityNotFound:"Entity {entity} not found",clickToEdit:"Click on a time slot to edit the schedule",edit:"Edit {weekday}",cancel:"Cancel",save:"Save",addTimeBlock:"+ Add Time Block",copySchedule:"Copy schedule",pasteSchedule:"Paste schedule",undo:"Undo",redo:"Redo",undoShortcut:"Undo (Ctrl+Z)",redoShortcut:"Redo (Ctrl+Y)",exportSchedule:"Export",importSchedule:"Import",exportTooltip:"Export schedule to JSON file",importTooltip:"Import schedule from JSON file",exportSuccess:"Schedule exported successfully",importSuccess:"Schedule imported successfully",unsavedChanges:"Unsaved changes",saveAll:"Save all",discard:"Discard",confirmDiscardChanges:"You have unsaved changes. Do you want to discard them?",from:"From",to:"To",baseTemperature:"Base Temperature",baseTemperatureDescription:"Temperature for unscheduled periods",temperaturePeriods:"Temperature Periods",editSlot:"Edit",saveSlot:"Save",cancelSlotEdit:"Cancel",sensorNotSupported:"Sensor entity {entity} does not have a climate schedule type.",noScheduleData:"Entity {entity} does not provide schedule data."},errors:{failedToChangeProfile:"Failed to change profile: {error}",failedToSaveSchedule:"Failed to save schedule: {error}",failedToPasteSchedule:"Failed to paste schedule: {error}",invalidSchedule:"Invalid schedule: {error}",failedToExport:"Failed to export schedule: {error}",failedToImport:"Failed to import schedule: {error}",invalidImportFile:"Invalid file format. Please select a JSON file.",invalidImportFormat:"Invalid JSON format in file.",invalidImportData:"Invalid schedule data: {error}"},warnings:{title:"Validation Warnings",noWarnings:"No issues detected"},validationMessages:{blockEndBeforeStart:"Block {block}: End time is before start time",blockZeroDuration:"Block {block}: Block has zero duration",invalidStartTime:"Block {block}: Invalid start time",invalidEndTime:"Block {block}: Invalid end time",temperatureOutOfRange:"Block {block}: Temperature out of range ({min}-{max}°C)",invalidSlotCount:"Invalid number of slots: {count} (expected 13)",invalidSlotKey:"Invalid slot key: {key} (must be integer 1-13)",missingSlot:"Missing slot {slot}",slotMissingValues:"Slot {slot} missing ENDTIME or TEMPERATURE",slotTimeBackwards:"Slot {slot} time goes backwards: {time}",slotTimeExceedsDay:"Slot {slot} time exceeds 24:00: {time}",lastSlotMustEnd:"Last slot must end at 24:00",scheduleMustBeObject:"Schedule data must be an object",missingWeekday:"Missing weekday: {weekday}",invalidWeekdayData:"Invalid data for {weekday}",weekdayValidationError:"{weekday}: {details}"}},de:{weekdays:{short:{monday:"Mo",tuesday:"Di",wednesday:"Mi",thursday:"Do",friday:"Fr",saturday:"Sa",sunday:"So"},long:{monday:"Montag",tuesday:"Dienstag",wednesday:"Mittwoch",thursday:"Donnerstag",friday:"Freitag",saturday:"Samstag",sunday:"Sonntag"}},ui:{schedule:"Zeitplan",loading:"Zeitplandaten werden geladen...",entityNotFound:"Entität {entity} nicht gefunden",clickToEdit:"Klicken Sie auf einen Zeitabschnitt, um den Zeitplan zu bearbeiten",edit:"{weekday} bearbeiten",cancel:"Abbrechen",save:"Speichern",addTimeBlock:"+ Zeitblock hinzufügen",copySchedule:"Zeitplan kopieren",pasteSchedule:"Zeitplan einfügen",undo:"Rückgängig",redo:"Wiederholen",undoShortcut:"Rückgängig (Strg+Z)",redoShortcut:"Wiederholen (Strg+Y)",exportSchedule:"Exportieren",importSchedule:"Importieren",exportTooltip:"Zeitplan als JSON-Datei exportieren",importTooltip:"Zeitplan aus JSON-Datei importieren",exportSuccess:"Zeitplan erfolgreich exportiert",importSuccess:"Zeitplan erfolgreich importiert",unsavedChanges:"Ungespeicherte Änderungen",saveAll:"Alle speichern",discard:"Verwerfen",confirmDiscardChanges:"Sie haben ungespeicherte Änderungen. Möchten Sie diese verwerfen?",from:"Von",to:"Bis",baseTemperature:"Basistemperatur",baseTemperatureDescription:"Temperatur für nicht geplante Zeiträume",temperaturePeriods:"Temperaturperioden",editSlot:"Bearbeiten",saveSlot:"Speichern",cancelSlotEdit:"Abbrechen",sensorNotSupported:"Sensor-Entität {entity} hat keinen Klima-Zeitplantyp.",noScheduleData:"Entität {entity} stellt keine Zeitplandaten bereit."},errors:{failedToChangeProfile:"Fehler beim Wechseln des Profils: {error}",failedToSaveSchedule:"Fehler beim Speichern des Zeitplans: {error}",failedToPasteSchedule:"Fehler beim Einfügen des Zeitplans: {error}",invalidSchedule:"Ungültiger Zeitplan: {error}",failedToExport:"Fehler beim Exportieren des Zeitplans: {error}",failedToImport:"Fehler beim Importieren des Zeitplans: {error}",invalidImportFile:"Ungültiges Dateiformat. Bitte wählen Sie eine JSON-Datei.",invalidImportFormat:"Ungültiges JSON-Format in der Datei.",invalidImportData:"Ungültige Zeitplandaten: {error}"},warnings:{title:"Validierungswarnungen",noWarnings:"Keine Probleme erkannt"},validationMessages:{blockEndBeforeStart:"Block {block}: Die Endzeit liegt vor der Startzeit",blockZeroDuration:"Block {block}: Der Block hat keine Dauer",invalidStartTime:"Block {block}: Ungültige Startzeit",invalidEndTime:"Block {block}: Ungültige Endzeit",temperatureOutOfRange:"Block {block}: Temperatur außerhalb des Bereichs ({min}-{max}°C)",invalidSlotCount:"Ungültige Anzahl an Slots: {count} (erwartet 13)",invalidSlotKey:"Ungültiger Slot-Schlüssel: {key} (muss eine Ganzzahl 1-13 sein)",missingSlot:"Slot {slot} fehlt",slotMissingValues:"Slot {slot} fehlt ENDTIME oder TEMPERATURE",slotTimeBackwards:"Slot {slot}: Zeit läuft rückwärts: {time}",slotTimeExceedsDay:"Slot {slot}: Zeit überschreitet 24:00: {time}",lastSlotMustEnd:"Der letzte Slot muss um 24:00 enden",scheduleMustBeObject:"Zeitplandaten müssen ein Objekt sein",missingWeekday:"Fehlender Wochentag: {weekday}",invalidWeekdayData:"Ungültige Daten für {weekday}",weekdayValidationError:"{weekday}: {details}"}}};function $e(e){const t=e.toLowerCase().split("-")[0];return Se[t]||Se.en}function Ee(e,t){let i=e;for(const[e,s]of Object.entries(t))i=i.replace(`{${e}}`,s);return i}let we=class extends ne{constructor(){super(...arguments),this._availableProfiles=[],this._userSelectedProfile=!1,this._isLoading=!1,this._translations=$e("en"),this._minTemp=5,this._maxTemp=30.5,this._tempStep=.5}static getConfigElement(){return document.createElement("homematicip-local-climate-schedule-card-editor")}static getStubConfig(e){const t=Object.keys(e.states).filter(t=>t.startsWith("climate.")&&void 0!==e.states[t].attributes?.schedule_data);return{type:"custom:homematicip-local-climate-schedule-card",entities:t.length>0?[t[0]]:[]}}get _isEditable(){return(this._config?.editable??!0)&&!1!==this.hass?.user?.is_admin}setConfig(e){const t=[],i=e=>{if(!e)return;const i=e.trim();i&&(t.includes(i)||t.push(i))};if(i(e.entity),Array.isArray(e.entities)&&e.entities.forEach(e=>{i("string"==typeof e?e:e.entity)}),0===t.length)throw new Error("You need to define at least one entity");t.sort((e,t)=>e.localeCompare(t));const s=this._activeEntityId,r=t[0],o=s&&t.includes(s)?s:r;this._config={show_profile_selector:!0,editable:!0,show_temperature:!0,temperature_unit:"°C",hour_format:"24",...e,entity:r},this._activeEntityId=o,this._copiedSchedule=void 0,this._editingWeekday=void 0,this._updateLanguage()}_getPreferredLanguage(e){return e?.language||e?.locale?.language}_updateLanguage(){let e="en";if(this._config?.language)e=this._config.language;else{const t=this._getPreferredLanguage(this.hass);t&&(e=t)}this._translations=$e(e),this._weekdayShortLabelMap=this._createWeekdayLabelMap("short"),this._weekdayLongLabelMap=this._createWeekdayLabelMap("long")}_createWeekdayLabelMap(e){const t="short"===e?this._translations.weekdays.short:this._translations.weekdays.long;return{MONDAY:t.monday,TUESDAY:t.tuesday,WEDNESDAY:t.wednesday,THURSDAY:t.thursday,FRIDAY:t.friday,SATURDAY:t.saturday,SUNDAY:t.sunday}}_getWeekdayLabel(e,t="short"){return"long"===t?(this._weekdayLongLabelMap||(this._weekdayLongLabelMap=this._createWeekdayLabelMap("long")),this._weekdayLongLabelMap[e]):(this._weekdayShortLabelMap||(this._weekdayShortLabelMap=this._createWeekdayLabelMap("short")),this._weekdayShortLabelMap[e])}_getEntityId(e){return"string"==typeof e?e:e.entity}_getEntityOptions(){return this._config?this._config.entities?.length?this._config.entities.map(e=>this._getEntityId(e)).sort((e,t)=>e.localeCompare(t)):this._config.entity?[this._config.entity]:[]:[]}_getEntityDisplayName(e){if(this._config?.entities?.length){const t=this._config.entities.find(t=>this._getEntityId(t)===e);if(t&&"string"!=typeof t&&t.name)return t.name}return this.hass?.states?.[e]?.attributes.friendly_name||e}_getProfileDisplayName(e){const t=this._getActiveEntityId();if(t&&this._config?.entities?.length){const i=this._config.entities.find(e=>this._getEntityId(e)===t);if(i&&"string"!=typeof i&&i.profile_names?.[e])return`${e} - ${i.profile_names[e]}`}return e}_getActiveEntityId(){const e=this._getEntityOptions();if(0!==e.length)return this._activeEntityId&&e.includes(this._activeEntityId)?this._activeEntityId:e[0]}_getProfileFromPresetMode(e){return function(e){if(!e)return;const t=e.match(/^week_pro(?:gram|file)_(\d+)$/);return t&&t[1]?`P${t[1]}`:void 0}(e)}_getScheduleApiVersion(e){const t=this.hass?.states[e];return i=t?.attributes?.schedule_api_version,"v2.0"===i?"v2":"v1";var i}_needsManualReload(e){if(!e||!this.hass)return!1;const t=this.hass.states[e];if(!t?.attributes?.interface_id)return!1;const i=t.attributes.interface_id;return i.endsWith("BidCos-RF")||i.endsWith("BidCos-Wired")||i.endsWith("VirtualDevices")}_getDeviceAddress(e){const t=this.hass?.states[e];return function(e){if(!e)return;const t=e.split(":");return 2===t.length?t[0]:void 0}(t?.attributes?.address)}_requireDeviceAddress(e){const t=this._getDeviceAddress(e);if(!t)throw new Error(`Cannot resolve device_address for entity ${e}. Ensure the entity has a valid address attribute (format: "device_address:channel").`);return t}_requireConfigEntryId(e){const t=this.hass?.states[e],i=t?.attributes?.config_entry_id;if(!i)throw new Error(`Cannot resolve config_entry_id for entity ${e}. Ensure the entity has a valid config_entry_id attribute.`);return i}async _callSetActiveProfile(e,t){if("v2"===this._getScheduleApiVersion(e)){const i=this._requireConfigEntryId(e),s=this._requireDeviceAddress(e);await this.hass.callWS({type:"homematicip_local/config/set_climate_active_profile",entry_id:i,device_address:s,profile:t})}else await this.hass.callService("homematicip_local","set_schedule_active_profile",{entity_id:e,profile:t})}async _callSetScheduleWeekday(e,t,i,s,r){if("v2"===this._getScheduleApiVersion(e)){const o=this._requireConfigEntryId(e),a=this._requireDeviceAddress(e);await this.hass.callWS({type:"homematicip_local/config/set_climate_schedule_weekday",entry_id:o,device_address:a,profile:t,weekday:i,base_temperature:s,simple_weekday_list:r})}else await this.hass.callService("homematicip_local","set_schedule_simple_weekday",{entity_id:e,profile:t,weekday:i,base_temperature:s,simple_weekday_list:r})}_scheduleReloadDeviceConfig(e){if(!this.hass)return;const t=this._getDeviceAddress(e);if(!t)return;const i=this.hass.states[e],s=i?.attributes?.config_entry_id;s&&setTimeout(async()=>{try{await this.hass.callWS({type:"homematicip_local/config/reload_device_config",entry_id:s,device_address:t})}catch(e){}},5e3)}_formatValidationParams(e){if(!e)return{};const t={};for(const[i,s]of Object.entries(e))"weekday"===i&&ue.includes(s)?t.weekday=this._getWeekdayLabel(s,"long"):t[i]=s;return t}_translateValidationMessage(e){const t=this._translations.validationMessages[e.key]||e.key,i=this._formatValidationParams(e.params);return e.nested&&(i.details=this._translateValidationMessage(e.nested)),Ee(t,i)}getCardSize(){return 12}willUpdate(e){if(super.willUpdate(e),e.has("hass")&&this._config){this._updateFromEntity();const t=e.get("hass");this._getPreferredLanguage(this.hass)!==this._getPreferredLanguage(t)&&this._updateLanguage()}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0)}_updateFromEntity(){if(!this.hass||!this._config)return;const e=this._getActiveEntityId();if(!e)return this._currentProfile=void 0,this._activeDeviceProfile=void 0,this._scheduleData=void 0,void(this._availableProfiles=[]);const t=this.hass.states?.[e];if(!t)return this._currentProfile=void 0,this._activeDeviceProfile=void 0,this._scheduleData=void 0,void(this._availableProfiles=[]);const i=t.attributes;if(e.startsWith("sensor.")&&"climate"!==i.schedule_type)return this._currentProfile=void 0,this._activeDeviceProfile=void 0,this._scheduleData=void 0,void(this._availableProfiles=[]);if(!i.schedule_data)return this._currentProfile=void 0,this._activeDeviceProfile=void 0,this._scheduleData=void 0,void(this._availableProfiles=[]);const s=this._getScheduleApiVersion(e),r="v2"===s?function(e){if(null!=e)return`P${e}`}(i.device_active_profile_index):this._getProfileFromPresetMode(i.preset_mode);void 0!==r&&void 0!==this._activeDeviceProfile&&r!==this._activeDeviceProfile&&(this._userSelectedProfile=!1,this._reloadScheduleData(e,r)),this._activeDeviceProfile=r,this._userSelectedProfile||(this._currentProfile=this._config.profile||r||("v2"===s?i.current_schedule_profile:i.active_profile)),this._scheduleData=i.schedule_data,this._availableProfiles=(i.available_profiles||[]).slice().sort((e,t)=>e.localeCompare(t)),this._minTemp=i.min_temp??5,this._maxTemp=i.max_temp??30.5,this._tempStep=i.target_temp_step??.5,this._lastScheduleDataHash=i.schedule_data?JSON.stringify(i.schedule_data):void 0}_reloadScheduleData(e,t){this.hass&&this._callSetActiveProfile(e,t).catch(()=>{})}async _handleProfileChange(e){const t=e.target.value,i=this._getActiveEntityId();if(this._config&&this.hass&&i){this._userSelectedProfile=!0;try{await this._callSetActiveProfile(i,t),this._currentProfile=t}catch(e){alert(Ee(this._translations.errors.failedToChangeProfile,{error:String(e)}))}}}_onWeekdayClick(e){this._isEditable&&this._scheduleData&&(this._editingWeekday=e.detail.weekday)}_onCopySchedule(e){const t=e.detail.weekday;if(!this._scheduleData)return;const i=this._getParsedBlocks(t);let s;const r=this._scheduleData[t];s=r?fe(r).baseTemperature:ge(i),this._copiedSchedule={weekday:t,blocks:JSON.parse(JSON.stringify(i)),baseTemperature:s}}async _onPasteSchedule(e){if(!this._isEditable)return;const t=e.detail.weekday;if(!(this._config&&this.hass&&this._currentProfile&&this._copiedSchedule))return;const i=this._getActiveEntityId();if(!i)return;const s=this._copiedSchedule.baseTemperature??ge(this._copiedSchedule.blocks),r=me(this._copiedSchedule.blocks,s),o=ye(r,this._minTemp,this._maxTemp);if(o){const e=this._translateValidationMessage(o);return void alert(Ee(this._translations.errors.invalidSchedule,{error:e}))}this._isLoading=!0,this._loadingTimeoutId=window.setTimeout(()=>{this._isLoading=!1,this._loadingTimeoutId=void 0},1e4);try{const{base_temperature:e,periods:s}=r;await this._callSetScheduleWeekday(i,this._currentProfile,t,e,s),this._scheduleData&&(this._scheduleData={...this._scheduleData,[t]:r}),this._updateFromEntity(),this.requestUpdate(),this._needsManualReload(i)&&this._scheduleReloadDeviceConfig(i)}catch(e){alert(Ee(this._translations.errors.failedToPasteSchedule,{error:String(e)}))}finally{void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0),this._isLoading=!1}}async _onSaveSchedule(e){if(!this._config||!this.hass||!this._currentProfile)return;const t=this._getActiveEntityId();if(!t)return;const{weekday:i,blocks:s,baseTemperature:r}=e.detail,o=me(s,r),a=ye(o,this._minTemp,this._maxTemp);if(a){const e=this._translateValidationMessage(a);return void alert(Ee(this._translations.errors.invalidSchedule,{error:e}))}this._isLoading=!0,this._loadingTimeoutId=window.setTimeout(()=>{this._isLoading=!1,this._loadingTimeoutId=void 0},1e4);try{const{base_temperature:e,periods:s}=o;await this._callSetScheduleWeekday(t,this._currentProfile,i,e,s),this._scheduleData&&(this._scheduleData={...this._scheduleData,[i]:o}),this._updateFromEntity(),this.requestUpdate(),this._editingWeekday=void 0,this._needsManualReload(t)&&this._scheduleReloadDeviceConfig(t)}catch(e){alert(Ee(this._translations.errors.failedToSaveSchedule,{error:String(e)}))}finally{void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0),this._isLoading=!1}}_onValidationFailed(e){alert(Ee(this._translations.errors.invalidSchedule,{error:e.detail.error}))}_onEditorClosed(){this._editingWeekday=void 0}_getParsedBlocks(e){if(this._scheduleData){const t=this._scheduleData[e];if(!t)return[];const{blocks:i}=fe(t);return i}return[]}_exportSchedule(){if(this._currentProfile&&this._scheduleData)try{const e={version:"2.0",profile:this._currentProfile,exported:(new Date).toISOString(),scheduleData:this._scheduleData,format:"simple"},t=JSON.stringify(e,null,2),i=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=`schedule-${this._currentProfile}-${(new Date).toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}catch(e){alert(Ee(this._translations.errors.failedToExport,{error:String(e)}))}}_importSchedule(){if(!this._isEditable)return;const e=document.createElement("input");e.type="file",e.accept=".json,application/json",e.onchange=async e=>{const t=e.target.files?.[0];if(t)if(t.name.endsWith(".json")||"application/json"===t.type)try{const e=await t.text();let i,s;try{i=JSON.parse(e)}catch{return void alert(this._translations.errors.invalidImportFormat)}if(!i||"object"!=typeof i)return void alert(this._translations.errors.invalidImportFormat);s="scheduleData"in i?i.scheduleData:i;const r=function(e){if(!e||"object"!=typeof e)return{key:"scheduleMustBeObject"};const t=e,i=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];for(const e of i){if(!(e in t))return{key:"missingWeekday",params:{weekday:e}};const i=t[e];if(!i||"object"!=typeof i)return{key:"invalidWeekdayData",params:{weekday:e}};if(!("base_temperature"in i)||!("periods"in i))return{key:"invalidWeekdayData",params:{weekday:e}};const s=ye(i);if(s)return{key:"weekdayValidationError",params:{weekday:e},nested:s}}return null}(s);if(r){const e=this._translateValidationMessage(r);return void alert(Ee(this._translations.errors.invalidImportData,{error:e}))}const o=this._getActiveEntityId();if(!(this._config&&this.hass&&this._currentProfile&&o))return;this._isLoading=!0,this._loadingTimeoutId=window.setTimeout(()=>{this._isLoading=!1,this._loadingTimeoutId=void 0},1e4);try{const e=s;for(const t of ue){const i=e[t];if(i){const{base_temperature:e,periods:s}=i;await this._callSetScheduleWeekday(o,this._currentProfile,t,e,s)}}this._scheduleData=e,this._updateFromEntity(),this.requestUpdate(),alert(this._translations.ui.importSuccess),this._needsManualReload(o)&&this._scheduleReloadDeviceConfig(o)}catch(e){alert(Ee(this._translations.errors.failedToImport,{error:String(e)}))}finally{void 0!==this._loadingTimeoutId&&(clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0),this._isLoading=!1}}catch(e){alert(Ee(this._translations.errors.failedToImport,{error:String(e)}))}else alert(this._translations.errors.invalidImportFile)},e.click()}_buildGridTranslations(){return this._weekdayShortLabelMap||(this._weekdayShortLabelMap=this._createWeekdayLabelMap("short")),{weekdayShortLabels:this._weekdayShortLabelMap,clickToEdit:this._translations.ui.clickToEdit,copySchedule:this._translations.ui.copySchedule,pasteSchedule:this._translations.ui.pasteSchedule}}_buildEditorTranslations(){return this._weekdayShortLabelMap||(this._weekdayShortLabelMap=this._createWeekdayLabelMap("short")),this._weekdayLongLabelMap||(this._weekdayLongLabelMap=this._createWeekdayLabelMap("long")),{weekdayShortLabels:this._weekdayShortLabelMap,weekdayLongLabels:this._weekdayLongLabelMap,edit:this._translations.ui.edit,cancel:this._translations.ui.cancel,save:this._translations.ui.save,addTimeBlock:this._translations.ui.addTimeBlock,from:this._translations.ui.from,to:this._translations.ui.to,baseTemperature:this._translations.ui.baseTemperature,baseTemperatureDescription:this._translations.ui.baseTemperatureDescription,temperaturePeriods:this._translations.ui.temperaturePeriods,editSlot:this._translations.ui.editSlot,saveSlot:this._translations.ui.saveSlot,cancelSlotEdit:this._translations.ui.cancelSlotEdit,undoShortcut:this._translations.ui.undoShortcut,redoShortcut:this._translations.ui.redoShortcut,warningsTitle:this._translations.warnings.title,validationMessages:this._translations.validationMessages}}_renderEntitySelector(e,t){const i=t&&e.includes(t)?t:e[0];return z`
      <select
        class="profile-selector entity-selector"
        @change=${this._handleEntitySelection}
        .value=${i}
      >
        ${[...e].sort((e,t)=>e.localeCompare(t)).map(e=>{const t=this._getEntityDisplayName(e);return z`<option value=${e}>${t}</option>`})}
      </select>
    `}_handleEntitySelection(e){const t=e.target.value;t&&t!==this._getActiveEntityId()&&(this._activeEntityId=t,this._editingWeekday=void 0,this._copiedSchedule=void 0,this._userSelectedProfile=!1,this._updateFromEntity())}render(){if(!this._config||!this.hass)return z``;const e=this._getEntityOptions(),t=e.length>1,i=this._getActiveEntityId(),s=i?this.hass.states?.[i]:void 0,r=this._config.name||(i?this._getEntityDisplayName(i):null)||this._translations.ui.schedule;return s?i?.startsWith("sensor.")&&"climate"!==s.attributes.schedule_type?z`
          <ha-card>
            <div class="card-header">
              <div class="name">${r}</div>
            </div>
            <div class="card-content">
              <div class="error">
                ${Ee(this._translations.ui.sensorNotSupported,{entity:i})}
              </div>
            </div>
          </ha-card>
        `:s.attributes.schedule_data?z`
      <ha-card>
        <div class="card-header">
          <div class="name">${r}</div>
        </div>
        <div class="header-controls">
          ${t?this._renderEntitySelector(e,i):""}
          ${this._config.show_profile_selector&&this._availableProfiles.length>0?z`
                <select
                  class="profile-selector"
                  @change=${this._handleProfileChange}
                  .value=${this._currentProfile||""}
                >
                  ${this._availableProfiles.map(e=>z`
                      <option
                        value=${e}
                        ?selected=${e===this._currentProfile}
                        class=${e===this._activeDeviceProfile?"active-profile-option":""}
                      >
                        ${e===this._activeDeviceProfile?"* ":""}${this._getProfileDisplayName(e)}
                      </option>
                    `)}
                </select>
              `:""}
          ${i?z`<span class="api-version-badge"
                >${this._getScheduleApiVersion(i)}</span
              >`:""}
          <button
            class="export-btn"
            @click=${this._exportSchedule}
            title="${this._translations.ui.exportTooltip}"
            ?disabled=${!this._scheduleData}
          >
            ⬇️
          </button>
          ${this._isEditable?z`<button
                class="import-btn"
                @click=${this._importSchedule}
                title="${this._translations.ui.importTooltip}"
              >
                ⬆️
              </button>`:""}
        </div>

        <div class="card-content">
          ${this._scheduleData?z`
                <hmip-schedule-grid
                  .scheduleData=${this._scheduleData}
                  .editable=${this._isEditable}
                  .showTemperature=${this._config.show_temperature??!0}
                  .showGradient=${this._config.show_gradient??!1}
                  .temperatureUnit=${this._config.temperature_unit||"°C"}
                  .hourFormat=${this._config.hour_format||"24"}
                  .translations=${this._buildGridTranslations()}
                  .copiedWeekday=${this._copiedSchedule?.weekday}
                  .editorOpen=${!!this._editingWeekday}
                  .currentProfile=${this._currentProfile}
                  .scheduleDataHash=${this._lastScheduleDataHash}
                  @weekday-click=${this._onWeekdayClick}
                  @copy-schedule=${this._onCopySchedule}
                  @paste-schedule=${this._onPasteSchedule}
                ></hmip-schedule-grid>
              `:z`<div class="loading">${this._translations.ui.loading}</div>`}
        </div>

        ${this._isLoading?z`
              <div class="loading-overlay">
                <div class="loading-spinner"></div>
              </div>
            `:""}
      </ha-card>

      <hmip-schedule-editor
        .open=${!!this._editingWeekday}
        .weekday=${this._editingWeekday}
        .scheduleData=${this._scheduleData}
        .minTemp=${this._minTemp}
        .maxTemp=${this._maxTemp}
        .tempStep=${this._tempStep}
        .temperatureUnit=${this._config.temperature_unit||"°C"}
        .hourFormat=${this._config.hour_format||"24"}
        .translations=${this._buildEditorTranslations()}
        @save-schedule=${this._onSaveSchedule}
        @validation-failed=${this._onValidationFailed}
        @editor-closed=${this._onEditorClosed}
      ></hmip-schedule-editor>
    `:z`
        <ha-card>
          <div class="card-header">
            <div class="name">${r}</div>
          </div>
          <div class="card-content">
            <div class="error">
              ${Ee(this._translations.ui.noScheduleData,{entity:i||""})}
            </div>
          </div>
        </ha-card>
      `:z`
        <ha-card>
          <div class="card-header">
            <div class="name">${r}</div>
          </div>
          <div class="card-content">
            <div class="error">
              ${Ee(this._translations.ui.entityNotFound,{entity:i||this._translations.ui.schedule})}
            </div>
          </div>
        </ha-card>
      `}static get styles(){return a`
      :host {
        display: block;
      }

      ha-card {
        padding: 16px;
        overflow: hidden;
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
        flex-wrap: wrap;
        max-width: 100%;
      }

      .profile-selector {
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        cursor: pointer;
        flex-shrink: 0;
        max-width: 200px;
      }

      .profile-selector .active-profile-option {
        color: var(--success-color, #4caf50);
        font-weight: 500;
      }

      .entity-selector {
        flex: 1 1 auto;
        min-width: 150px;
        max-width: 100%;
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
        flex-shrink: 0;
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

      .api-version-badge {
        font-size: 10px;
        color: var(--secondary-text-color);
        opacity: 0.6;
        flex-shrink: 0;
        user-select: none;
      }

      .card-content {
        position: relative;
        overflow: hidden;
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
      }

      /* Small mobile devices (portrait phones) */
      @media (max-width: 480px) {
        ha-card {
          padding: 8px;
        }

        .name {
          font-size: 18px;
        }
      }

      /* Touch-specific optimizations */
      @media (hover: none) and (pointer: coarse) {
        .export-btn:hover,
        .import-btn:hover {
          opacity: 1;
          background-color: transparent;
        }

        .export-btn:active:not(:disabled),
        .import-btn:active {
          background-color: var(--divider-color);
        }
      }
    `}};var ke;e([he({attribute:!1})],we.prototype,"hass",void 0),e([pe()],we.prototype,"_config",void 0),e([pe()],we.prototype,"_currentProfile",void 0),e([pe()],we.prototype,"_activeDeviceProfile",void 0),e([pe()],we.prototype,"_scheduleData",void 0),e([pe()],we.prototype,"_availableProfiles",void 0),e([pe()],we.prototype,"_activeEntityId",void 0),e([pe()],we.prototype,"_editingWeekday",void 0),e([pe()],we.prototype,"_copiedSchedule",void 0),e([pe()],we.prototype,"_isLoading",void 0),e([pe()],we.prototype,"_translations",void 0),e([pe()],we.prototype,"_minTemp",void 0),e([pe()],we.prototype,"_maxTemp",void 0),e([pe()],we.prototype,"_tempStep",void 0),we=e([(ke="homematicip-local-climate-schedule-card",(e,t)=>{void 0!==t?t.addInitializer(()=>{customElements.define(ke,e)}):customElements.define(ke,e)})],we),window.customCards=window.customCards||[],window.customCards.push({type:"homematicip-local-climate-schedule-card",name:"Homematic(IP) Local Climate Schedule Card",description:"Display and edit Homematic thermostat schedules",preview:!0});export{we as HomematicScheduleCard};
