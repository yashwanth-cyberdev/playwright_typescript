var H=Object.defineProperty;var W=(t,e,s)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var w=(t,e,s)=>W(t,typeof e!="symbol"?e+"":e,s);import{j as n,r as a,M as B,F as U,n as $,L as z,g as D,T as f,H as J,J as K,t as q,S as C,D as y,y as G,z as Q,h as X,A as Y,N as Z,K as ee,O as te,Q as se,I as oe,E as re,a as ne,c as ce}from"./assets/inspectorTab-CU3eUCmV.js";const ae=({sources:t,fileId:e,setFileId:s})=>n.jsx("select",{className:"source-chooser",hidden:!t.length,title:"Source chooser",value:e,onChange:o=>{s(o.target.selectedOptions[0].value)},children:ie(t)});function ie(t){const e=r=>r.replace(/.*[/\\]([^/\\]+)/,"$1"),s=r=>n.jsx("option",{value:r.id,children:e(r.label)},r.id),o=new Map;for(const r of t){let i=o.get(r.group||"Debugger");i||(i=[],o.set(r.group||"Debugger",i)),i.push(r)}return[...o.entries()].map(([r,i])=>n.jsx("optgroup",{label:r,children:i.filter(c=>(c.group||"Debugger")===r).map(c=>s(c))},r))}const b=a.createContext(void 0),le=({trace:t,children:e})=>{const[s,o]=a.useState(),[r,i]=a.useState(0),c=a.useRef(null);return a.useEffect(()=>(c.current&&clearTimeout(c.current),c.current=setTimeout(async()=>{try{const u=await ue(t);u.sha1!==(s==null?void 0:s.sha1)&&o(u)}catch{o(void 0)}finally{i(r+1)}},500),()=>{c.current&&clearTimeout(c.current)}),[r,s,t]),n.jsx(b.Provider,{value:s==null?void 0:s.model,children:e})};async function ue(t){const e=new URLSearchParams;e.set("trace",t);const o=await(await fetch(`contexts?${e.toString()}`)).json(),r=[];for(const i of o)i.actions.forEach(c=>r.push(c.type+"@"+c.startTime+"-"+c.endTime)),i.events.forEach(c=>r.push(c.type+"@"+c.time));return{model:new B(o),sha1:await U(r.join("|"))}}function de(t,e){return[...t,e].join(" >> internal:control=enter-frame >> ")}function me(t){const{action:e}=t;switch(e.name){case"navigate":return{method:"goto",params:{url:e.url}};case"openPage":case"closePage":throw new Error("Not reached")}const s=de(t.frame.framePath,e.selector);switch(e.name){case"click":return{method:"click",params:{selector:s,strict:!0,modifiers:P(e.modifiers),button:e.button,clickCount:e.clickCount,position:e.position}};case"press":return{method:"press",params:{selector:s,strict:!0,key:[...P(e.modifiers),e.key].join("+")}};case"fill":return{method:"fill",params:{selector:s,strict:!0,value:e.text}};case"setInputFiles":return{method:"setInputFiles",params:{selector:s,strict:!0,localPaths:e.files}};case"check":return{method:"check",params:{selector:s,strict:!0}};case"uncheck":return{method:"uncheck",params:{selector:s,strict:!0}};case"select":return{method:"selectOption",params:{selector:s,strict:!0,options:e.options.map(r=>({value:r}))}};case"assertChecked":return{method:"expect",params:{selector:e.selector,expression:"to.be.checked",isNot:!e.checked}};case"assertText":return{method:"expect",params:{selector:s,expression:"to.have.text",expectedText:[],isNot:!1}};case"assertValue":return{method:"expect",params:{selector:s,expression:"to.have.value",expectedValue:void 0,isNot:!1}};case"assertVisible":return{method:"expect",params:{selector:s,expression:"to.be.visible",isNot:!1}}}}function P(t){const e=[];return t&1&&e.push("Alt"),t&2&&e.push("ControlOrMeta"),t&4&&e.push("ControlOrMeta"),t&8&&e.push("Shift"),e}const he=z,pe=({sdkLanguage:t,actions:e,selectedAction:s,onSelectedAction:o})=>{const r=a.useCallback(i=>xe(t,i),[t]);return n.jsx("div",{className:"vbox",children:n.jsx(he,{name:"actions",items:e,selectedItem:s,onSelected:o,render:r})})},xe=(t,e)=>{const{method:s,params:o}=me(e),r=o.selector?$(t||"javascript",o.selector):void 0,i=`page.${s}`;return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"action-title",title:i,children:[n.jsx("span",{children:i}),r&&n.jsx("div",{className:"action-selector",title:r,children:r}),s==="goto"&&o.url&&n.jsx("div",{className:"action-url",title:o.url,children:o.url})]})})},L=a.createContext(void 0),ge=({guid:t,children:e})=>{const[s,o]=a.useState(void 0),[r,i]=a.useState("none"),[c,u]=a.useState({actions:[],sources:[]}),h=a.useRef({setMode:i,setActions:u});a.useEffect(()=>{const d=new URL(`../${t}`,window.location.toString());d.protocol=window.location.protocol==="https:"?"wss:":"ws:";const x=new WebSocket(d.toString());return o(new fe(x,h.current)),()=>{x.close()}},[t]);const p=a.useMemo(()=>s?{mode:r,actions:c.actions,sources:c.sources,connection:s}:void 0,[c,r,s]);return n.jsx(L.Provider,{value:p,children:e})};class fe{constructor(e,s){w(this,"_lastId",0);w(this,"_webSocket");w(this,"_callbacks",new Map);w(this,"_options");this._webSocket=e,this._callbacks=new Map,this._options=s,this._webSocket.addEventListener("message",o=>{const r=JSON.parse(o.data),{id:i,result:c,error:u,method:h,params:p}=r;if(i){const d=this._callbacks.get(i);if(!d)return;this._callbacks.delete(i),u?d.reject(new Error(u)):d.resolve(c)}else this._dispatchEvent(h,p)})}setMode(e){this._sendMessageNoReply("setMode",{mode:e})}async _sendMessage(e,s){const o=++this._lastId,r={id:o,method:e,params:s};return this._webSocket.send(JSON.stringify(r)),new Promise((i,c)=>{this._callbacks.set(o,{resolve:i,reject:c})})}_sendMessageNoReply(e,s){this._sendMessage(e,s).catch(()=>{})}_dispatchEvent(e,s){if(e==="setMode"){const{mode:o}=s;this._options.setMode(o)}if(e==="setActions"){const{actions:o,sources:r}=s;this._options.setActions({actions:o.filter(i=>i.action.name!=="openPage"&&i.action.name!=="closePage"),sources:r}),window.playwrightSourcesEchoForTest=r}}}const we=()=>{const t=new URLSearchParams(window.location.search),e=t.get("ws"),s=t.get("trace")+".json";return n.jsx(ge,{guid:e,children:n.jsx(le,{trace:s,children:n.jsx(be,{})})})},be=()=>{const t=a.useContext(L),e=a.useContext(b),[s,o]=a.useState(),[r,i]=a.useState(void 0),[c,u]=a.useState(!1),[h,p]=a.useState(""),[d,x]=a.useState(""),[v,S]=a.useState(),T=a.useCallback(l=>{i(l==null?void 0:l.startTime)},[]),g=a.useMemo(()=>t==null?void 0:t.actions.find(l=>l.startTime===r),[t==null?void 0:t.actions,r]);a.useEffect(()=>{var k;const l=(k=e==null?void 0:e.actions.find(M=>M.endTime&&M.endTime===(g==null?void 0:g.endTime)))==null?void 0:k.callId;l&&S(l)},[e,g]);const m=a.useMemo(()=>(t==null?void 0:t.sources.find(l=>l.id===s))||(t==null?void 0:t.sources[0]),[t==null?void 0:t.sources,s]),I=a.useMemo(()=>m?{file:"",line:0,column:0,source:{errors:[],content:m.text}}:void 0,[m]),j=(m==null?void 0:m.language)||"javascript",{boundaries:N}=a.useMemo(()=>{const l={minimum:(e==null?void 0:e.startTime)||0,maximum:(e==null?void 0:e.endTime)||3e4};return l.minimum>l.maximum&&(l.minimum=0,l.maximum=3e4),l.maximum+=(l.maximum-l.minimum)/20,{boundaries:l}},[e]),_=a.useCallback(l=>{p(l),x(""),u(!1)},[]),A=a.useCallback(l=>{x(l),p(l)},[]),E={id:"actions",title:"Actions",component:n.jsx(pe,{sdkLanguage:j,actions:(t==null?void 0:t.actions)||[],selectedAction:g,onSelectedAction:T})},R=n.jsxs(D,{sidebarBackground:!0,children:[n.jsx("div",{style:{width:4}}),n.jsx(f,{icon:"inspect",title:"Pick locator",toggled:c,onClick:()=>{u(!c)}}),n.jsx(f,{icon:"eye",title:"Assert visibility",onClick:()=>{}}),n.jsx(f,{icon:"whole-word",title:"Assert text",onClick:()=>{}}),n.jsx(f,{icon:"symbol-constant",title:"Assert value",onClick:()=>{}}),n.jsx(J,{}),n.jsx(f,{icon:"files",title:"Copy",disabled:!m||!m.text,onClick:()=>{m!=null&&m.text&&K(m.text)}}),n.jsx("div",{style:{flex:"auto"}}),n.jsx("div",{children:"Target:"}),n.jsx(ae,{fileId:s,sources:(t==null?void 0:t.sources)||[],setFileId:l=>{o(l)}}),n.jsx(f,{icon:"color-mode",title:"Toggle color mode",toggled:!1,onClick:()=>q()})]}),F=n.jsx(y,{tabs:[E]}),V=n.jsx(Se,{sdkLanguage:j,callId:v,isInspecting:c,setIsInspecting:u,highlightedLocator:d,setHighlightedLocator:_}),O=n.jsx(ve,{sdkLanguage:j,boundaries:N,setIsInspecting:u,highlightedLocator:h,setHighlightedLocator:A,sourceLocation:I});return n.jsx("div",{className:"vbox workbench",children:n.jsx(C,{sidebarSize:250,orientation:"horizontal",settingName:"recorderActionListSidebar",sidebarIsFirst:!0,main:n.jsx(C,{sidebarSize:250,orientation:"vertical",settingName:"recorderPropertiesSidebar",main:n.jsxs("div",{className:"vbox",children:[R,V]}),sidebar:O}),sidebar:F})})},ve=({sdkLanguage:t,boundaries:e,setIsInspecting:s,highlightedLocator:o,setHighlightedLocator:r,sourceLocation:i})=>{const c=a.useContext(b),u=G(c,e),h=Q(c,e),p=a.useRef(new Map),[d,x]=X("recorderPropertiesTab","source"),v={id:"inspector",title:"Locator",render:()=>n.jsx(oe,{showScreenshot:!1,sdkLanguage:t,setIsInspecting:s,highlightedLocator:o,setHighlightedLocator:r})},S={id:"source",title:"Source",render:()=>n.jsx(re,{sources:p.current,stackFrameLocation:"right",fallbackLocation:i})},T={id:"console",title:"Console",count:u.entries.length,render:()=>n.jsx(Y,{boundaries:e,consoleModel:u})},g={id:"network",title:"Network",count:h.resources.length,render:()=>n.jsx(Z,{boundaries:e,networkModel:h})},m=[S,v,T,g];return n.jsx(y,{tabs:m,selectedTab:d,setSelectedTab:x})},Se=({sdkLanguage:t,callId:e,isInspecting:s,setIsInspecting:o,highlightedLocator:r,setHighlightedLocator:i})=>{const c=a.useContext(b),u=a.useMemo(()=>c==null?void 0:c.actions.find(d=>d.callId===e),[c,e]),h=a.useMemo(()=>{const d=ee(u);return d.action||d.after||d.before},[u]),p=a.useMemo(()=>h?te(h):void 0,[h]);return n.jsx(se,{sdkLanguage:t,testIdAttributeName:"data-testid",isInspecting:s,setIsInspecting:o,highlightedLocator:r,setHighlightedLocator:i,snapshotUrls:p})};(async()=>{if(ne(),window.location.protocol!=="file:"){if(!navigator.serviceWorker)throw new Error(`Service workers are not supported.
Make sure to serve the Recorder (${window.location}) via HTTPS or localhost.`);navigator.serviceWorker.register("sw.bundle.js"),navigator.serviceWorker.controller||await new Promise(t=>{navigator.serviceWorker.oncontrollerchange=()=>t()}),setInterval(function(){fetch("ping")},1e4)}ce(document.querySelector("#root")).render(n.jsx(we,{}))})();