import{u as J,j as e}from"./chunk-F2EZP5XB-D3mhh4ih.js";import{c as K,$ as L,a as Q,b as X,C as Z,d as o}from"./Checkbox-Ci1YbIct.js";import{R as ee,r as B}from"./index-Cs7sjTYM.js";import{$ as k,B as oe}from"./Button-dpK5mbtK.js";import{u as re,C as se}from"./chunk-CL4FZTH4-CpBX8wWs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";const n=ee.forwardRef((s,t)=>{const b=J(),{children:x,isInvalid:a=!1,isRequired:l=!1,isDisabled:d=!1,size:i="md",className:g,classNames:r,label:v,errorMessage:C,description:R,validationBehavior:E=b.validationBehavior||"aria",...j}=s,U={size:i,...j},{base:Y,wrapper:_,label:A,description:O,errorMessage:S}=B.useMemo(()=>K({isRequired:l,isDisabled:d,size:i}),[l,d,i]),T=k(),f=k(),N=k(),H=y=>typeof y=="string"?e.jsx("small",{className:S(),id:f,children:y}):B.cloneElement(y,{className:S(),id:f});return e.jsx(L.Provider,{value:{"aria-describedby":T,"aria-labelledby":N,"aria-errormessage":f},children:e.jsxs(Q,{...j,isInvalid:a,isRequired:l,ref:t,className:Y({className:X(r==null?void 0:r.base,g)}),validationBehavior:E,children:[v&&e.jsx("span",{className:A(),id:N,children:v}),e.jsx("div",{className:_({className:r==null?void 0:r.wrapper}),children:e.jsx(Z,{value:{...U},children:x})}),R&&e.jsx("span",{className:O({className:r==null?void 0:r.description}),id:T,children:R}),a&&C&&H(C)]})})});n.displayName="MotionWindUI.CheckboxGroup";n.__docgenInfo={description:"",methods:[],displayName:"MotionWindUI.CheckboxGroup",props:{label:{required:!1,tsType:{name:"string"},description:"A label for the group of checkboxes"},description:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"A description for the group of checkboxes"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The checkbox group children"},errorMessage:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"The error message content for when the checkbox group is invalid"},classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  // eslint-disable-next-line
  [key in S]?: ClassValue;
}`,signature:{properties:[{key:{name:"ReturnType",elements:[{name:"checkBoxGroupStyles"}],raw:"ReturnType<typeof checkBoxGroupStyles>",required:!1},value:{name:"ClassValue"}}]}},description:"The individual slots to apply extra styling to"}},composes:["MotionWindUIBaseProps","Omit"]};const ue={title:"Components/Checkbox Group",component:n,argTypes:{color:{description:"The color of the checkbox",control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],table:{defaultValue:{summary:"neutral"},type:{summary:"neutral | primary | secondary | success | warning | danger"}}},radius:{description:"The radius of the checkbox",control:{type:"select"},options:["none","sm","md","lg","full"],table:{defaultValue:{summary:"none"},type:{summary:"none | sm | md | lg | full"}}},size:{description:"The size of the checkbox",control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},isDisabled:{description:"Whether or not the checkbox is disabled",type:"boolean",control:{type:"boolean"}},isReadOnly:{description:"Wheter or not the checkbox can be modified",type:"boolean",control:{type:"boolean"}},children:{description:"The children for this component",control:{type:"text"},table:{type:{summary:"React.ReactNode"}}},description:{description:"The description for the component",control:{type:"text"},table:{type:{summary:"string"}}},className:{description:"Any additional custom classes for the component",control:{type:"text"},table:{type:{summary:"string"},disable:!0}}}},c={args:{label:"Checkbox Group",description:"This is a checkbox group"},render:({...s})=>e.jsxs(n,{...s,children:[e.jsx(o,{value:"1",children:"Checkbox 1"}),e.jsx(o,{value:"2",children:"Checkbox 2"}),e.jsx(o,{value:"3",children:"Checkbox 3"})]}),parameters:{control:{exclude:/children$|classNames$|className$/}}},u=c,p={...c,args:{isDisabled:!0}},m={...c,args:{label:"Please select one or more options",description:"You can select multiple options"},render:({...s})=>{const t=["dogs","fish"];return e.jsxs(n,{...s,value:t,children:[e.jsx(o,{value:"dogs",children:"Dogs"}),e.jsx(o,{value:"cats",children:"Cats"}),e.jsx(o,{value:"fish",children:"Fish"}),e.jsx(o,{value:"birds",children:"Birds"})]})}},h={...c,args:{...c.args,label:"Please select one or more options",description:"You can select multiple options",isRequired:!0},render:({...s})=>{const{handleSubmit:t,control:b}=re({defaultValues:{pets:[]}}),x=a=>{console.log(a),alert(a.pets)};return e.jsxs("form",{onSubmit:t(x),className:"inline-flex flex-col gap-2",children:[e.jsx(se,{control:b,name:"pets",rules:{required:!0},render:({field:{name:a,value:l,onChange:d,ref:i},fieldState:{invalid:g}})=>e.jsxs(n,{...s,value:l,onChange:d,name:a,isInvalid:g,errorMessage:"Please select at least one option",children:[e.jsx(o,{value:"dog",ref:i,children:"Dog"}),e.jsx(o,{value:"cat",children:"Cat"}),e.jsx(o,{value:"fish",children:"Fish"}),e.jsx(o,{value:"bird",children:"Bird"})]})}),e.jsx(oe,{color:s.color,type:"submit",size:"md",children:"Submit"})]})}};var D,G,P;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:"StoryTemplate",...(P=(G=u.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var $,w,M;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    isDisabled: true
  }
}`,...(M=(w=p.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var V,q,I;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    label: "Please select one or more options",
    description: "You can select multiple options"
  },
  render: ({
    ...args
  }) => {
    const defaultValues = ["dogs", "fish"];
    return <CheckboxGroup {...args} value={defaultValues}>
        <Checkbox value="dogs">Dogs</Checkbox>
        <Checkbox value="cats">Cats</Checkbox>
        <Checkbox value="fish">Fish</Checkbox>
        <Checkbox value="birds">Birds</Checkbox>
      </CheckboxGroup>;
  }
}`,...(I=(q=m.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var F,W,z;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    label: "Please select one or more options",
    description: "You can select multiple options",
    isRequired: true
  },
  render: ({
    ...args
  }) => {
    const {
      handleSubmit,
      control
    } = useForm({
      defaultValues: {
        pets: []
      }
    });
    const onSubmit = (data: any) => {
      // eslint-disable-next-line no-console
      console.log(data);
      alert(data.pets);
    };
    return <form onSubmit={handleSubmit(onSubmit)} className="inline-flex flex-col gap-2">
        <Controller control={control} name="pets" rules={{
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
      }) => <CheckboxGroup {...args} value={value} onChange={onChange} name={name} isInvalid={invalid} errorMessage="Please select at least one option">
              <Checkbox value="dog" ref={ref}>
                Dog
              </Checkbox>
              <Checkbox value="cat">Cat</Checkbox>
              <Checkbox value="fish">Fish</Checkbox>
              <Checkbox value="bird">Bird</Checkbox>
            </CheckboxGroup>} />
        <Button color={args.color} type="submit" size="md">
          Submit
        </Button>
      </form>;
  }
}`,...(z=(W=h.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const pe=["Default","Disabled","DefaultValues","ReactHookForm"];export{u as Default,m as DefaultValues,p as Disabled,h as ReactHookForm,pe as __namedExportsOrder,ue as default};
