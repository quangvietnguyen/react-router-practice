(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__1m44e"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},55:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),a=c(2),r=c(37),s=c(41),i=c.n(s),u=c(1),l=function(e){return Object(u.jsx)("div",{className:i.a.card,children:e.children})},d=c(14),j=c(42),b=c.n(j),f=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],i=c[1],j=Object(n.useRef)(),f=Object(n.useRef)();return Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsx)(a.a,{when:s,message:function(e){return"All your data will be lost if you try to leave."}}),Object(u.jsx)(l,{children:Object(u.jsxs)("form",{onFocus:function(){i(!0)},className:b.a.form,onSubmit:function(t){t.preventDefault();var c=j.current.value,n=f.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:b.a.loading,children:Object(u.jsx)(d.a,{})}),Object(u.jsxs)("div",{className:b.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:j})]}),Object(u.jsxs)("div",{className:b.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:f})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)("button",{onClick:function(){i(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(35),m=c(36);t.default=function(){var e=Object(h.a)(m.b),t=e.sendRequest,c=e.status,o=Object(a.h)();Object(n.useEffect)((function(){"completed"===c&&o.push("/quotes")}),[c,o]);return Object(u.jsx)(f,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.08a8f969.chunk.js.map