import{j as e}from"./chunk-F2EZP5XB-D3mhh4ih.js";import{r as d,R as T}from"./index-Cs7sjTYM.js";import{a as v,B as o}from"./Button-dpK5mbtK.js";import{F as j,I}from"./IconWrapper-DHB9v4D9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";function R({title:r,titleId:t,...s},b){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:b,"aria-labelledby":t},s),r?d.createElement("title",{id:t},r):null,d.createElement("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",clipRule:"evenodd"}))}const C=d.forwardRef(R),w=({filled:r=!1,color:t="currentColor",...s})=>r?e.jsx(C,{color:t,...s}):e.jsx(j,{color:t,...s});w.__docgenInfo={description:"",methods:[],displayName:"ChevronDownIcon",props:{filled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{defaultValue:{value:'"currentColor"',computed:!1},required:!1}}};const n=T.forwardRef((r,t)=>e.jsx("div",{ref:t,className:"flex flex-row",children:e.jsx(v,{...r,children:r.children})}));n.displayName="MotionWindUI.ButtonGroup";n.__docgenInfo={description:"",methods:[],displayName:"MotionWindUI.ButtonGroup",props:{color:{required:!1,tsType:{name:'ButtonProps["color"]',raw:'ButtonProps["color"]'},description:""},variant:{required:!1,tsType:{name:'ButtonProps["variant"]',raw:'ButtonProps["variant"]'},description:""},size:{required:!1,tsType:{name:'ButtonProps["size"]',raw:'ButtonProps["size"]'},description:""},radius:{required:!1,tsType:{name:'ButtonProps["radius"]',raw:'ButtonProps["radius"]'},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},disableAnimations:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W={title:"Components/Button Group",component:n},c={argTypes:{color:{description:"The color of the checkbox",control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],table:{defaultValue:{summary:"neutral"},type:{summary:"neutral | primary | secondary | success | warning | danger"}}},variant:{options:["solid","faded","bordered","ghost","light"],control:{type:"select"},description:"The variation style of the button group."},size:{options:["sm","md","lg"],control:{type:"select"},description:"The size of the button group."},radius:{options:["none","sm","md","lg","full"],control:{type:"select"},description:"The border radius of the button group."},isDisabled:{control:{type:"boolean"},description:"Whether or not this button is disabled."},shadow:{control:{type:"boolean"}}},args:{color:"neutral",variant:"solid",size:"md",radius:"md",isDisabled:!1},render:({...r})=>e.jsxs(n,{...r,children:[e.jsx(o,{children:"Cut"}),e.jsx(o,{children:"Copy"}),e.jsx(o,{children:"Paste"})]})},a=c,i={...c,render:({...r})=>e.jsxs(n,{...r,children:[e.jsx(o,{children:"One"}),e.jsx(o,{children:"Two"}),e.jsx(o,{variant:"bordered",children:"Three"}),e.jsx(o,{children:"Four"})]})},l={...c,parameters:{controls:{exclude:/children/g}},render:({...r})=>e.jsxs(n,{...r,children:[e.jsx(o,{children:"Action"}),e.jsx(o,{isIconOnly:!0,startContent:e.jsx(I,{icon:w})})]})};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"StoryTemplate",...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,h,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: ({
    ...args
  }) => {
    return <ButtonGroup {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button variant="bordered">Three</Button>
        <Button>Four</Button>
      </ButtonGroup>;
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,x,g;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      exclude: /children/g
    }
  },
  render: ({
    ...args
  }) => {
    return <ButtonGroup {...args}>
        <Button>Action</Button>
        <Button isIconOnly startContent={<IconWrapper icon={ChevronDownIcon} />} />
      </ButtonGroup>;
  }
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const z=["Default","DifferentStyles","WithIconOnly"];export{a as Default,i as DifferentStyles,l as WithIconOnly,z as __namedExportsOrder,W as default};
