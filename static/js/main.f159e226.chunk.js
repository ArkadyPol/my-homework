(this["webpackJsonpmy-homework"]=this["webpackJsonpmy-homework"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={affairs:"Affairs_affairs__33Da4",affair:"Affairs_affair__xaP0r",active:"Affairs_active__1OtIL"}},,,function(e,t,n){e.exports={message:"Message_message__3gkCT",image:"Message_image__LYmtu",rectangle:"Message_rectangle__1u1mD",name:"Message_name__1Jm2z",messageText:"Message_messageText__37UaU",time:"Message_time__2Qf-V"}},function(e,t,n){e.exports={greeting:"Greeting_greeting__3DpZX",buttonAdd:"Greeting_buttonAdd__3eUGr",total:"Greeting_total__3GbuT",error:"Greeting_error__2j4R_",errorMessage:"Greeting_errorMessage__XBspy"}},,,,function(e,t,n){e.exports={header:"Header_header__2LQK-",active:"Header_active__1V3TK"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2DaOX",errorInput:"SuperInputText_errorInput__3KWD8",error:"SuperInputText_error__25rPE"}},,,function(e,t,n){e.exports={default:"SuperButton_default__2plII",red:"SuperButton_red__3t7fb"}},function(e,t,n){e.exports={blue:"HW4_blue__l28DE",column:"HW4_column__7psBu",testSpanError:"HW4_testSpanError__3Wljr"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1tWFi",spanClassName:"SuperCheckbox_spanClassName__3I3Ux"}},,,,,function(e,t,n){e.exports={App:"App_App__1R79e"}},function(e,t,n){e.exports={superSpan:"SuperEditableSpan_superSpan__3lFW7"}},function(e,t,n){e.exports={user:"HW8_user__1weup"}},function(e,t,n){e.exports={page404:"Error404_page404__2QgPq",explosion:"Error404_explosion__2APuf"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(29),s=n.n(c),i=(n(39),n(30)),o=n.n(i),j=n(11),l=n(3),u=n(13),d=n.n(u),b=n(0);var O=function(e){return Object(b.jsxs)("div",{className:d.a.message,children:[Object(b.jsx)("div",{className:d.a.image,children:Object(b.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(b.jsxs)("div",{className:d.a.rectangle,children:[Object(b.jsx)("div",{className:d.a.name,children:e.name}),Object(b.jsxs)("div",{className:d.a.messageText,children:[e.message," "]}),Object(b.jsxs)("div",{className:d.a.time,children:[e.time," "]})]})]})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Anonym",m="Hello World",f="22:00";var p=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(O,{avatar:h,name:x,message:m,time:f}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},v=n(2),_=n(10),g=n.n(_),C=n(6),k=n(5),N=n(23),y=n.n(N),S=function(e){var t=e.red,n=e.className,r=Object(k.a)(e,["red","className"]),a="".concat(t?y.a.red:y.a.default," ").concat(n);return Object(b.jsx)("button",Object(C.a)({className:a},r))};var w=function(e){return Object(b.jsxs)("div",{className:g.a.affair,children:[Object(b.jsx)("div",{children:e.affair.name}),Object(b.jsx)("div",{style:{color:{high:"red",middle:"yellow",low:"green"}[e.affair.priority]},children:e.affair.priority}),Object(b.jsx)(S,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var T=function(e){var t=e.data.map((function(t){return Object(b.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:g.a.affairs,children:[t,Object(b.jsx)(S,{className:"all"===e.filter?g.a.active:"",onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)(S,{className:"high"===e.filter?g.a.active:"",onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)(S,{className:"middle"===e.filter?g.a.active:"",onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)(S,{className:"low"===e.filter?g.a.active:"",onClick:function(){e.setFilter("low")},children:"Low"})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(r.useState)(A),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(v.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(T,{data:j,filter:i,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},I=n(17),F=n(48),M=n(14),W=n.n(M),P=n(20),D=n.n(P),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(k.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(D.a.error," ").concat(i||""),l="".concat(c?D.a.errorInput:D.a.superInput," ").concat(s||"");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(C.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(b.jsx)("span",{className:j,children:c})]})},H=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a?W.a.error:"";return Object(b.jsxs)("div",{className:W.a.greeting,children:[Object(b.jsx)(B,{value:t,onChange:n,className:s,onEnter:r}),Object(b.jsx)("span",{className:W.a.errorMessage,children:a}),Object(b.jsx)(S,{className:W.a.buttonAdd,disabled:""!==a,onClick:r,children:"add"}),Object(b.jsx)("span",{className:W.a.total,children:c})]})},U=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(v.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(v.a)(o,2),l=j[0],u=j[1],d=t.length;return Object(b.jsx)(H,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;i(t),t.trim()&&u("")},addUser:function(){var e=s.trim();e?(n(e),alert("Hello ".concat(e,"!"))):u("name is required!"),i("")},error:l,totalUsers:d})};var G=function(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(U,{users:n,addUserCallback:function(e){var t={_id:Object(F.a)(),name:e};a([].concat(Object(I.a)(n),[t]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},L=n(24),J=n.n(L),K=n(25),X=n.n(K),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(k.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(C.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(b.jsx)("span",{className:X.a.spanClassName,children:a})]})};var Q=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(v.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:J.a.column,children:[Object(b.jsx)(B,{value:n,onChangeText:a,onEnter:s,error:c}),Object(b.jsx)(B,{className:J.a.blue}),Object(b.jsx)(S,{children:"default"}),Object(b.jsx)(S,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(S,{disabled:!0,children:"disabled"}),Object(b.jsx)(q,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(q,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},R=n(31),z=n.n(R),V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(k.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(v.a)(s,2),o=i[0],j=i[1],l=a||{},u=l.children,d=l.onDoubleClick,O=l.className,h=Object(k.a)(l,["children","onDoubleClick","className"]),x="".concat(z.a.superSpan," ").concat(O);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(B,Object(C.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(b.jsx)("span",Object(C.a)(Object(C.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},h),{},{children:u||c.value}))})};function Y(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}Y("test",{x:"A",y:1});var Z=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(V,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(S,{onClick:function(){Y("editable-span-value",n)},children:"save"}),Object(b.jsx)(S,{onClick:function(){a(function(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}("editable-span-value",n))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var $=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsx)(E,{}),Object(b.jsx)(G,{}),Object(b.jsx)(Q,{}),Object(b.jsx)(Z,{})]})},ee=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,a=Object(k.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)})):[];return Object(b.jsx)("select",Object(C.a)(Object(C.a)({onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},a),{},{children:c}))},te=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=e.onChange,c=e.onChangeOption,s=(Object(k.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",value:e,checked:e===r,onChange:s,name:t}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:i})},ne=["x","y","z"];var re=function(){var e=Object(r.useState)(ne[1]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(ee,{options:ne,value:n,onChangeOption:a})}),Object(b.jsx)("div",{children:Object(b.jsx)(te,{name:"radio",options:ne,value:n,onChangeOption:a})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ae=function(e,t){switch(t.type){case"sort":switch(t.payload){case"up":return Object(I.a)(e).sort((function(e,t){return e.name<t.name?-1:e.name===t.name?0:1}));case"down":return Object(I.a)(e).sort((function(e,t){return e.name>t.name?-1:e.name===t.name?0:1}));default:return e}case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},ce=n(32),se=n.n(ce),ie=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var oe=function(){var e=Object(r.useState)(ie),t=Object(v.a)(e,2),n=t[0],a=t[1],c=n.map((function(e){return Object(b.jsxs)("div",{className:se.a.user,children:[Object(b.jsx)("span",{children:e.name}),Object(b.jsx)("span",{children:e.age})]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",c,Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{onClick:function(){return a(ae(ie,{type:"sort",payload:"up"}))},children:"sort up"}),Object(b.jsx)(S,{onClick:function(){return a(ae(ie,{type:"sort",payload:"down"}))},children:"sort down"}),Object(b.jsx)(S,{onClick:function(){return a(ae(ie,{type:"check",payload:18}))},children:"check 18"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var je=function(){var e=Object(r.useState)(0),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),s=Object(v.a)(c,2),i=s[0],o=s[1],j=Object(r.useState)(!1),l=Object(v.a)(j,2),u=l[0],d=l[1],O=function(){clearInterval(n)},h=null===i||void 0===i?void 0:i.toLocaleTimeString(),x=null===i||void 0===i?void 0:i.toLocaleDateString();return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:h}),u&&Object(b.jsx)("div",{children:x}),Object(b.jsx)(S,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);a(e)},children:"start"}),Object(b.jsx)(S,{onClick:O,children:"stop"})]})};var le=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 9",Object(b.jsx)(je,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ue=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(re,{}),Object(b.jsx)(oe,{}),Object(b.jsx)(le,{})]})},de=n(33),be=n.n(de);var Oe=function(){return Object(b.jsxs)("div",{className:be.a.page404,children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"})]})};var he=function(){return Object(b.jsx)("div",{})},xe="/pre-junior",me="/junior",fe="/junior-plus";var pe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(l.a,{to:xe})}}),Object(b.jsx)(l.b,{path:xe,render:function(){return Object(b.jsx)($,{})}}),Object(b.jsx)(l.b,{path:me,render:function(){return Object(b.jsx)(ue,{})}}),Object(b.jsx)(l.b,{path:fe,render:function(){return Object(b.jsx)(he,{})}}),Object(b.jsx)(l.b,{render:function(){return Object(b.jsx)(Oe,{})}})]})})},ve=n(18),_e=n.n(ve);var ge=function(){return Object(b.jsxs)("div",{className:_e.a.header,children:[Object(b.jsx)(j.b,{to:xe,activeClassName:_e.a.active,children:"pre-junior"}),Object(b.jsx)(j.b,{to:me,activeClassName:_e.a.active,children:"junior"}),Object(b.jsx)(j.b,{to:fe,activeClassName:_e.a.active,children:"junior+"})]})};var Ce=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(ge,{}),Object(b.jsx)(pe,{})]})})};var ke=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(Ce,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(ke,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.f159e226.chunk.js.map