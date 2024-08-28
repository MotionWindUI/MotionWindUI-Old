import{j as g,u as de}from"./chunk-F2EZP5XB-D3mhh4ih.js";import{r as c,R as I}from"./index-Cs7sjTYM.js";import{h as A,i as oe,f as C,j,g as ce,k as E,l as L,m as ue,n as z,o as fe,p as be,q as pe,r as ve,s as me,t as U,u as xe,v as ge,w as $e,x as he,$ as M}from"./Button-dpK5mbtK.js";import{$ as ye,a as N,b as Re,c as Ie,d as Pe,e as we,f as Ce,g as Se,h as De}from"./chunk-CL4FZTH4-CpBX8wWs.js";const k=c.createContext(null);c.createContext(null);c.createContext(null);c.createContext(null);c.createContext(null);c.createContext({});function H(e,a,n){let[l,s]=c.useState(e||a),t=c.useRef(e!==void 0),r=e!==void 0;c.useEffect(()=>{let i=t.current;i!==r&&console.warn(`WARN: A component changed from ${i?"controlled":"uncontrolled"} to ${r?"controlled":"uncontrolled"}.`),t.current=r},[r]);let o=r?e:l,b=c.useCallback((i,...d)=>{let u=(p,...f)=>{n&&(Object.is(o,p)||n(p,...f)),r||(o=p)};typeof i=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),s((f,...v)=>{let x=i(r?o:f,...v);return u(x,...d),r?f:x})):(r||s(i),u(i,...d))},[r,o,n]);return[o,b]}function Ve(e,a,n){let{isDisabled:l=!1,isReadOnly:s=!1,value:t,name:r,children:o,"aria-label":b,"aria-labelledby":i,validationState:d="valid",isInvalid:u}=e,p=h=>{h.stopPropagation(),a.setSelected(h.target.checked)},f=o!=null,v=b!=null||i!=null;!f&&!v&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:x,isPressed:$}=A({isDisabled:l}),{pressProps:y,isPressed:P}=A({isDisabled:l||s,onPress(){a.toggle()}}),{focusableProps:m}=oe(e,n),w=C(x,m),S=j(e,{labelable:!0});return ye(n,a.isSelected,a.setSelected),{labelProps:C(y,{onClick:h=>h.preventDefault()}),inputProps:C(S,{"aria-invalid":u||d==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":s||void 0,onChange:p,disabled:l,...t==null?{}:{value:t},name:r,type:"checkbox",...w}),isSelected:a.isSelected,isPressed:$||P,isDisabled:l,isReadOnly:s,isInvalid:u||d==="invalid"}}function Y(e,a,n){let l=N({...e,value:a.isSelected}),{isInvalid:s,validationErrors:t,validationDetails:r}=l.displayValidation,{labelProps:o,inputProps:b,isSelected:i,isPressed:d,isDisabled:u,isReadOnly:p}=Ve({...e,isInvalid:s},a,n);Re(e,l,n);let{isIndeterminate:f,isRequired:v,validationBehavior:x="aria"}=e;return c.useEffect(()=>{n.current&&(n.current.indeterminate=!!f)}),{labelProps:o,inputProps:{...b,checked:i,"aria-required":v&&x==="aria"||void 0,required:v&&x==="native"},isSelected:i,isPressed:d,isDisabled:u,isReadOnly:p,isInvalid:s,validationErrors:t,validationDetails:r}}const J=new WeakMap;function qe(e,a){let{isDisabled:n,name:l,validationBehavior:s="aria"}=e,{isInvalid:t,validationErrors:r,validationDetails:o}=a.displayValidation,{labelProps:b,fieldProps:i,descriptionProps:d,errorMessageProps:u}=Ie({...e,labelElementType:"span",isInvalid:t,errorMessage:e.errorMessage||r});J.set(a,{name:l,descriptionId:d.id,errorMessageId:u.id,validationBehavior:s});let p=j(e,{labelable:!0}),{focusWithinProps:f}=ce({onBlurWithin:e.onBlur,onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange});return{groupProps:C(p,{role:"group","aria-disabled":n||void 0,...i,...f}),labelProps:b,descriptionProps:d,errorMessageProps:u,isInvalid:t,validationErrors:r,validationDetails:o}}function K(e={}){let{isReadOnly:a}=e,[n,l]=H(e.isSelected,e.defaultSelected||!1,e.onChange);function s(r){a||l(r)}function t(){a||l(!n)}return{isSelected:n,setSelected:s,toggle:t}}function Be(e,a,n){const l=K({isReadOnly:e.isReadOnly||a.isReadOnly,isSelected:a.isSelected(e.value),onChange($){$?a.addValue(e.value):a.removeValue(e.value),e.onChange&&e.onChange($)}});let{name:s,descriptionId:t,errorMessageId:r,validationBehavior:o}=J.get(a);var b;o=(b=e.validationBehavior)!==null&&b!==void 0?b:o;let{realtimeValidation:i}=N({...e,value:l.isSelected,name:void 0,validationBehavior:"aria"}),d=c.useRef(Pe),u=()=>{a.setInvalid(e.value,i.isInvalid?i:d.current)};c.useEffect(u);let p=a.realtimeValidation.isInvalid?a.realtimeValidation:i,f=o==="native"?a.displayValidation:p;var v;let x=Y({...e,isReadOnly:e.isReadOnly||a.isReadOnly,isDisabled:e.isDisabled||a.isDisabled,name:e.name||s,isRequired:(v=e.isRequired)!==null&&v!==void 0?v:a.isRequired,validationBehavior:o,[we]:{realtimeValidation:p,displayValidation:f,resetValidation:a.resetValidation,commitValidation:a.commitValidation,updateValidation($){d.current=$,u()}}},l,n);return{...x,inputProps:{...x.inputProps,"aria-describedby":[e["aria-describedby"],a.isInvalid?r:null,t].filter(Boolean).join(" ")||void 0}}}const Me=c.createContext({});function ke(e={}){let[a,n]=H(e.value,e.defaultValue||[],e.onChange),l=!!e.isRequired&&a.length===0,s=c.useRef(new Map),t=N({...e,value:a}),r=t.displayValidation.isInvalid;var o;return{...t,value:a,setValue(i){e.isReadOnly||e.isDisabled||n(i)},isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isSelected(i){return a.includes(i)},addValue(i){e.isReadOnly||e.isDisabled||a.includes(i)||n(a.concat(i))},removeValue(i){e.isReadOnly||e.isDisabled||a.includes(i)&&n(a.filter(d=>d!==i))},toggleValue(i){e.isReadOnly||e.isDisabled||(a.includes(i)?n(a.filter(d=>d!==i)):n(a.concat(i)))},setInvalid(i,d){let u=new Map(s.current);d.isInvalid?u.set(i,d):u.delete(i),s.current=u,t.updateValidation(Ce(...u.values()))},validationState:(o=e.validationState)!==null&&o!==void 0?o:r?"invalid":null,isInvalid:r,isRequired:l}}const Oe=c.createContext(null),Q=c.createContext(null),je=c.createContext({}),Ee=c.createContext(null),X=c.createContext(null);function Ne(e,a){[e,a]=E(e,a,Ee);let{validationBehavior:n}=L(Q)||{};var l,s;let t=(s=(l=e.validationBehavior)!==null&&l!==void 0?l:n)!==null&&s!==void 0?s:"native",r=ke({...e,validationBehavior:t}),[o,b]=ue(),{groupProps:i,labelProps:d,descriptionProps:u,errorMessageProps:p,...f}=qe({...e,label:b,validationBehavior:t},r),v=z({...e,values:{isDisabled:r.isDisabled,isReadOnly:r.isReadOnly,isRequired:e.isRequired||!1,isInvalid:r.isInvalid,state:r},defaultClassName:"react-aria-CheckboxGroup"});return I.createElement("div",{...i,...v,ref:a,slot:e.slot||void 0,"data-readonly":r.isReadOnly||void 0,"data-required":e.isRequired||void 0,"data-invalid":r.isInvalid||void 0,"data-disabled":e.isDisabled||void 0},I.createElement(fe,{values:[[X,r],[je,{...d,ref:o,elementType:"span"}],[Me,{slots:{description:u,errorMessage:p}}],[Oe,f]]},v.children))}function Te(e,a){let{inputRef:n=null,...l}=e;[e,a]=E(l,a,k);let{validationBehavior:s}=L(Q)||{};var t,r;let o=(r=(t=e.validationBehavior)!==null&&t!==void 0?t:s)!==null&&r!==void 0?r:"native",b=c.useContext(X),i=be(pe(n,e.inputRef!==void 0?e.inputRef:null)),{labelProps:d,inputProps:u,isSelected:p,isDisabled:f,isReadOnly:v,isPressed:x,isInvalid:$}=b?Be({...e,value:e.value,children:typeof e.children=="function"?!0:e.children},b,i):Y({...e,children:typeof e.children=="function"?!0:e.children,validationBehavior:o},K(e),i),{isFocused:y,isFocusVisible:P,focusProps:m}=ve(),w=f||v,{hoverProps:S,isHovered:h}=me({...e,isDisabled:w}),D=z({...e,defaultClassName:"react-aria-Checkbox",values:{isSelected:p,isIndeterminate:e.isIndeterminate||!1,isPressed:x,isHovered:h,isFocused:y,isFocusVisible:P,isDisabled:f,isReadOnly:v,isInvalid:$,isRequired:e.isRequired||!1}}),V=j(e);return delete V.id,I.createElement("label",{...C(V,d,S,D),ref:a,slot:e.slot||void 0,"data-selected":p||void 0,"data-indeterminate":e.isIndeterminate||void 0,"data-pressed":x||void 0,"data-hovered":h||void 0,"data-focused":y||void 0,"data-focus-visible":P||void 0,"data-disabled":f||void 0,"data-readonly":v||void 0,"data-invalid":$||void 0,"data-required":e.isRequired||void 0},I.createElement(Se,{elementType:"span"},I.createElement("input",{...C(u,m),ref:i})),D.children)}const _e=c.forwardRef(Te),Je=c.forwardRef(Ne),Fe=U({slots:{base:["group","max-w-fit","inline-flex","items-center","justify-start","cursor-pointer","p-2","-m-2","select-none"],wrapper:["relative","inline-flex","items-center","justify-center","align-middle","flex-shrink-0","before:content-['']","before:absolute","before:inset-0","before:border-2","before:border-neutral-negative","before:border-solid","before:box-border","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[hovered=true]:bg-neutral-subtle","before:group-data-[pressed=true]:border-neutral-negative-hover",...xe,...ge],icon:"z-10 w-4 h-4 opacity-0 inset-0",label:"select-none relative !text-neutral",description:"!text-subtle opacity-90 text-small pt-1",errorMessage:"!text-danger text-small"},variants:{size:{sm:{base:"gap-2",wrapper:"w-4 h-4",label:"text-small",icon:"w-3 h-3",description:"text-tiny",errorMessage:"text-tiny"},md:{base:"gap-2",wrapper:"w-5 h-5",label:"text-base",icon:"w-5 h-5",description:"text-small",errorMessage:"text-small"},lg:{base:"gap-3",wrapper:"w-6 h-6",label:"text-large",icon:"w-5 h-5",description:"text-base",errorMessage:"text-base"}},color:{neutral:{wrapper:"after:bg-neutral after:text-on-neutral",icon:"text-on-neutral"},primary:{wrapper:"after:bg-primary after:text-on-primary",icon:"text-on-primary"},secondary:{wrapper:"after:bg-secondary after:text-on-secondary",icon:"text-on-secondary"},success:{wrapper:"after:bg-success after:text-on-success",icon:"text-on-success"},warning:{wrapper:"after:bg-warning after:text-on-warning",icon:"text-on-warning"},danger:{wrapper:"after:bg-danger after:text-on-danger",icon:"text-on-danger"}},radius:{none:{wrapper:["rounded-none","before:rounded-none","after:rounded-none"]},sm:{wrapper:["rounded-small","before:rounded-small","after:rounded-small"]},md:{wrapper:["rounded-medium","before:rounded-medium","after:rounded-medium"]},lg:{wrapper:["rounded-large","before:rounded-large","after:rounded-large"]},xl:{wrapper:["rounded-xlarge","before:rounded-xlarge","after:rounded-xlarge"]},full:{wrapper:["rounded-full","before:rounded-full","after:rounded-full"]}},isSelected:{true:{wrapper:"after:scale-100 after:opacity-100",icon:"opacity-100"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isReadOnly:{true:{base:"pointer-events-none cursor-default"}},isInvalid:{true:{wrapper:["before:border-danger","after:bg-danger","group-data-[hovered=true]:bg-danger-subtle"]}},isRequired:{true:{label:["after:content-['*']","after:text-danger","after:ml-0.5"]}},disableAnimations:{true:{wrapper:"transition-none",icon:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none"}}}}),Ke=U({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium !text-neutral",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"!text-subtle opacity-90 text-small",errorMessage:"!text-danger text-small"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},size:{sm:{label:"text-small",description:"text-tiny",errorMessage:"text-tiny"},md:{label:"text-base",description:"text-small",errorMessage:"text-small"},lg:{label:"text-large",description:"text-base",errorMessage:"text-base"}}},defaultVariants:{isInvalid:!1,isRequired:!1}});function Z(e){const{isSelected:a,disableAnimation:n,isIndeterminate:l,...s}=e;return g.jsx("svg",{viewBox:"0 0 24 24",...s,"aria-label":"Checkmark Icon",children:g.jsx("path",{d:"M5 12l5 5L19 7",stroke:"currentColor",strokeWidth:"3",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:0,strokeDashoffset:a?22:44,style:!n&&a?{transition:"stroke-dashoffset 0.5s linear"}:{}})})}function We(e){const{isIndeterminate:a,isSelected:n,disableAnimation:l,...s}=e;return g.jsx("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...s,"aria-label":"Indeterminate Icon",children:g.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function O(e){const{isIndeterminate:a,...n}=e,l=a?We:Z;return g.jsx(l,{...n})}Z.__docgenInfo={description:"",methods:[],displayName:"CheckIcon",props:{isIndeterminate:{required:!1,tsType:{name:"boolean"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},disableAnimation:{required:!1,tsType:{name:"boolean"},description:""}}};O.__docgenInfo={description:"",methods:[],displayName:"CheckboxIcon",props:{isIndeterminate:{required:!1,tsType:{name:"boolean"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},disableAnimation:{required:!1,tsType:{name:"boolean"},description:""}}};const Ae=(...e)=>$e(he(...e)),[Qe,Le]=De({name:"CheckboxGroup",strict:!1}),G=I.forwardRef((e,a)=>{const[n,l]=E(e,a,k),s=de(),t=Le(),{color:r=(t==null?void 0:t.color)??"neutral",size:o=(t==null?void 0:t.size)??"md",radius:b=(t==null?void 0:t.radius)??"none",disableAnimations:i=s.disableAnimations||(t==null?void 0:t.disableAnimations),icon:d=g.jsx(O,{}),description:u,isIndeterminate:p,isReadOnly:f,isDisabled:v,isInvalid:x,isRequired:$,errorMessage:y,className:P,classNames:m,children:w,validationBehavior:S=s.validationBehavior||(t==null?void 0:t.validationBehavior)||"aria",labelId:h,descriptionId:D,errorMessageId:V,"aria-label":T}=n;!e.children&&!T&&!h&&console.warn("Warning: The `Checkbox` component is missing a label. You must provide an aria-label attribute, label ID to your label, or children for accessibility.");const{base:ee,wrapper:ae,label:ie,icon:te,description:re,errorMessage:_}=c.useMemo(()=>Fe({color:r,size:o,radius:b,isReadOnly:f,isDisabled:v,isInvalid:x,isRequired:$,disableAnimations:i}),[r,o,b,f,v,x,$,i]),F=D??M(),B=V??M(),W=h??M(),ne=R=>typeof R=="string"?g.jsx("small",{className:_(),id:B,children:R}):c.cloneElement(R,{className:_(),id:B}),le=R=>{const q={"aria-hidden":!0,className:te({isSelected:R,className:m==null?void 0:m.icon})};return I.isValidElement(d)&&d.type===O?c.cloneElement(d,{...q,isIndeterminate:p}):c.cloneElement(d,q)};return g.jsx(k.Provider,{value:{"aria-describedby":u?F:void 0,"aria-errormessage":y?B:void 0,"aria-labelledby":W},children:g.jsxs("div",{className:"inline-flex flex-col",children:[g.jsx(_e,{className:ee({className:Ae(m==null?void 0:m.base,P)}),...e,ref:l,validationBehavior:S,"aria-label":T,children:({isSelected:R,isRequired:q,...se})=>g.jsxs(g.Fragment,{children:[g.jsx("span",{className:ae({isSelected:R,...se,className:m==null?void 0:m.wrapper}),children:le(R)}),w&&g.jsx("span",{className:ie({isRequired:q,className:m==null?void 0:m.label}),id:W,children:w})]})}),u&&g.jsx("small",{className:re({className:m==null?void 0:m.description}),id:F,children:u}),x&&y&&ne(y)]})})});G.displayName="MotionWindUI.Checkbox";G.__docgenInfo={description:"",methods:[],displayName:"MotionWindUI.Checkbox",props:{description:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},errorMessage:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  // eslint-disable-next-line
  [key in S]?: ClassValue;
}`,signature:{properties:[{key:{name:"ReturnType",elements:[{name:"checkBoxStyles"}],raw:"ReturnType<typeof checkBoxStyles>",required:!1},value:{name:"ClassValue"}}]}},description:""},labelId:{required:!1,tsType:{name:"string"},description:""},descriptionId:{required:!1,tsType:{name:"string"},description:""},errorMessageId:{required:!1,tsType:{name:"string"},description:""}},composes:["MotionWindUIBaseProps","Omit"]};export{Ee as $,Qe as C,Je as a,Ae as b,Ke as c,G as d};
