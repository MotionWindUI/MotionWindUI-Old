import{j as e}from"./chunk-F2EZP5XB-D3mhh4ih.js";import{r as o}from"./index-Cs7sjTYM.js";import{u as J,C as K}from"./chunk-CL4FZTH4-CpBX8wWs.js";import{d as l}from"./Checkbox-Ci1YbIct.js";import{I as Q}from"./IconWrapper-DHB9v4D9.js";import{B as Y}from"./Button-dpK5mbtK.js";import{a as U,i as X}from"./iconList-BBFHChQC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./CheckCircleIcon-BVgvw-9m.js";function ee({title:r,titleId:n,...s},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":n},s),r?o.createElement("title",{id:n},r):null,o.createElement("path",{d:"m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"}))}const re=o.forwardRef(ee),_=({filled:r=!1,color:n="currentColor",...s})=>r?e.jsx(re,{color:n,...s}):e.jsx(U,{color:n,...s});_.__docgenInfo={description:"",methods:[],displayName:"HeartIcon",props:{filled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{defaultValue:{value:'"currentColor"',computed:!1},required:!1}}};const f={None:null,...X},ue={title:"Components/Checkbox",component:l,argTypes:{color:{description:"The color of the checkbox",control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],table:{defaultValue:{summary:"neutral"},type:{summary:"neutral | primary | secondary | success | warning | danger"}}},radius:{description:"The radius of the checkbox",control:{type:"select"},options:["none","sm","md","lg","full"],table:{defaultValue:{summary:"none"},type:{summary:"none | sm | md | lg | full"}}},size:{description:"The size of the checkbox",control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},isIndeterminate:{description:"Whether or not the checkbox is indeterminate",type:"boolean",control:{type:"boolean"}},isDisabled:{description:"Whether or not the checkbox is disabled",type:"boolean",control:{type:"boolean"}},isReadOnly:{description:"Wheter or not the checkbox can be modified",type:"boolean",control:{type:"boolean"}},children:{description:"The children for this component",control:{type:"text"},table:{type:{summary:"React.ReactNode"}}},className:{description:"Any additional custom classes for the component",control:{type:"text"},table:{type:{summary:"string"},disable:!0}},icon:{options:Object.keys(f),mapping:Object.fromEntries(Object.entries(f).map(([r,n])=>[r,e.jsx(Q,{icon:n,height:24,width:24},r)])),control:{type:"select"}}}},t={args:{children:"Example Label"},parameters:{controls:{exclude:/icon$|classNames$|className$/}},render:({children:r,...n})=>e.jsx(l,{...n,children:r})},i=t,d={...t,args:{...t.args,description:"This is for a newsletter"}},m={...t,args:{children:"Subscribe"},render:({children:r,...n})=>{const[s,a]=o.useState(!0);return e.jsxs("div",{children:[e.jsx(l,{...n,isSelected:s,onChange:a,children:r}),e.jsxs("p",{className:"text-default",children:["You are ",s?"subscribed":"not subscribed"]}),e.jsx(Y,{color:n.color,onPress:()=>a(!s),children:"Toggle Change"})]})}},u={...t,args:{...t.args,defaultSelected:!0}},p={...t,args:{...t.args,isInvalid:!0}},g={...t,args:{...t.args,children:"I accept the terms and conditions"},render:({children:r,...n})=>{let{handleSubmit:s,control:a}=J({defaultValues:{agreeToTerms:""}}),L=c=>{console.log(c),alert(c.agreeToTerms)};return e.jsxs("form",{onSubmit:s(L),className:"inline-flex flex-col gap-2",children:[e.jsx(K,{control:a,name:"agreeToTerms",rules:{required:!0},render:({field:{name:c,value:M,onChange:P,ref:Z},fieldState:{invalid:G}})=>e.jsx(e.Fragment,{children:e.jsx(l,{...n,name:c,value:M,onChange:P,ref:Z,isRequired:!0,validationBehavior:"aria",isInvalid:G,errorMessage:"Agreement to terms and conditions is required",children:r})})}),e.jsx(Y,{color:n.color,type:"submit",size:"md",children:"Submit"})]})}},b={...t,args:{...t.args,icon:e.jsx(_,{})},parameters:{controls:{exclude:/className$|classNames$/}}},h={args:{children:"Checkbox",className:"data-[selected=true]:outline-primary-600 data-[selected=true]:outline hover:bg-neutral-subtle-hover rounded-medium",classNames:{wrapper:"mr-3 align-middle",icon:"text-blue-500"}},render:({...r})=>e.jsx(l,{...r,children:e.jsxs("div",{className:"align-baseline inline-flex w-96 justify-between group-data-[selected=true]:outline group-data-[selected=true]:outline-primary-600",children:[e.jsx("div",{children:"Yep"}),e.jsx("div",{children:"Nope"})]})}),parameters:{controls:{exclude:/icon$/}}};var x,y,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"StoryTemplate",...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,T,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    description: "This is for a newsletter"
  }
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var j,N,w;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: "Subscribe"
  },
  render: ({
    children,
    ...args
  }) => {
    const [subscribed, setSubscribed] = useState(true);
    return <div>
        <Checkbox {...args} isSelected={subscribed} onChange={setSubscribed}>
          {children}
        </Checkbox>
        <p className="text-default">You are {subscribed ? "subscribed" : "not subscribed"}</p>
        <Button color={args.color} onPress={() => setSubscribed(!subscribed)}>
          Toggle Change
        </Button>
      </div>;
  }
}`,...(w=(N=m.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var k,I,R;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    defaultSelected: true
  }
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var $,B,D;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    isInvalid: true
  }
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var q,E,O;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    children: "I accept the terms and conditions"
  },
  render: ({
    children,
    ...args
  }) => {
    let {
      handleSubmit,
      control
    } = useForm({
      defaultValues: {
        agreeToTerms: ""
      }
    });
    let onSubmit = (data: any) => {
      // eslint-disable-next-line no-console
      console.log(data);
      alert(data.agreeToTerms);
    };
    return <form onSubmit={handleSubmit(onSubmit)} className="inline-flex flex-col gap-2">
        <Controller control={control} name="agreeToTerms" rules={{
        required: true
      }} render={({
        field: {
          name,
          value,
          onChange,
          ref
        },
        fieldState: {
          invalid
        }
      }) => <>
              <Checkbox {...args} name={name} value={value} onChange={onChange} ref={ref} isRequired validationBehavior="aria" isInvalid={invalid} errorMessage="Agreement to terms and conditions is required">
                {children}
              </Checkbox>
            </>} />
        <Button color={args.color} type="submit" size="md">
          Submit
        </Button>
      </form>;
  }
}`,...(O=(E=g.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var F,V,H;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    icon: <HeartIcon />
  },
  parameters: {
    controls: {
      exclude: /className$|classNames$/
    }
  }
}`,...(H=(V=b.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var W,z,A;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: "Checkbox",
    className: "data-[selected=true]:outline-primary-600 data-[selected=true]:outline hover:bg-neutral-subtle-hover rounded-medium",
    classNames: {
      wrapper: "mr-3 align-middle",
      icon: "text-blue-500"
    }
  },
  render: ({
    ...args
  }) => {
    return <Checkbox {...args}>
        <div className="align-baseline inline-flex w-96 justify-between group-data-[selected=true]:outline group-data-[selected=true]:outline-primary-600">
          <div>Yep</div>
          <div>Nope</div>
        </div>
      </Checkbox>;
  },
  // Override so that we can see the className and classNames props in the controls for this story
  parameters: {
    controls: {
      exclude: /icon$/
    }
  }
}`,...(A=(z=h.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const pe=["Default","WithDescription","Controlled","DefaultSelected","Invalid","ReactHookForm","CustomIcon","CustomDesign"];export{m as Controlled,h as CustomDesign,b as CustomIcon,i as Default,u as DefaultSelected,p as Invalid,g as ReactHookForm,d as WithDescription,pe as __namedExportsOrder,ue as default};
