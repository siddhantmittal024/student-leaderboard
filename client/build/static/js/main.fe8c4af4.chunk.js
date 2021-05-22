(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(A,e,t){},45:function(A,e,t){},72:function(A,e,t){"use strict";t.r(e);var c=t(0),s=t(19),a=t.n(s),r=t(75),n=t(74),o=(t(44),t(45),t(12)),i=t(4),g=t(18),j=t.n(g),h=t(25),C=t(15),l=t(26),Q=t.n(l),b=Object(c.createContext)(),B=t(11),E="ADD_RECORD",O="GET_RECORDS",d="RECORD_ERROR",u=function(A,e){switch(e.type){case O:return Object(B.a)(Object(B.a)({},A),{},{records:e.payload,loading:!1});case E:return Object(B.a)(Object(B.a)({},A),{},{records:[e.payload],loading:!1});case d:return Object(B.a)(Object(B.a)({},A),{},{error:e.payload});default:return A}},I=t(1),w=function(A){var e=Object(c.useReducer)(u,{records:[],error:null}),t=Object(C.a)(e,2),s=t[0],a=t[1],r=function(){var A=Object(h.a)(j.a.mark((function A(){var e;return j.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,Q.a.get("api/student/displayRecords");case 3:e=A.sent,a({type:O,payload:e.data}),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),a({type:d,payload:A.t0.response.data.msg});case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(){return A.apply(this,arguments)}}(),n=function(){var A=Object(h.a)(j.a.mark((function A(e){return j.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,Q.a.post("api/student/createRecord",e);case 3:A.sent,a({type:E,payload:e}),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),a({type:d,payload:A.t0.response.data.msg});case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(e){return A.apply(this,arguments)}}();return Object(I.jsx)(b.Provider,{value:{records:s.records,error:s.error,addRecord:n,getRecords:r},children:A.children})},p=t.p+"static/media/pic2.001f8a72.png",x=function(){return Object(I.jsx)("div",{className:"container",children:Object(I.jsxs)("div",{className:"box",children:[Object(I.jsx)("h1",{className:"py-2",children:"STUDENT RESULT PORTAL"}),Object(I.jsx)("h2",{children:" HOME PAGE "}),Object(I.jsxs)("div",{className:"pageLinks",children:[Object(I.jsx)(o.b,{to:"/enterMarks",children:" ENTER MARKS "}),Object(I.jsx)(o.b,{to:"/leaderboard",children:" VIEW LEADERBOARD "})]}),Object(I.jsxs)("p",{className:"homepage-text",children:["This is a student result portal designed for entering a students record by clicking on ",Object(I.jsx)("strong",{children:"Enter Marks"})," and viewing the leaderboard for the result by clicking on"," ",Object(I.jsx)("strong",{children:"View Leaderboard"}),"."]}),Object(I.jsx)("img",{src:p,alt:"img",className:"img"})]})})},D=t(21),m=t(13),M=function(){var A=Object(c.useContext)(b),e=A.addRecord,t=A.error,s=(A.records,A.getRecords,Object(c.useState)({RollNo:"",Name:"",MathsMarks:"",PhysicsMarks:"",ChemMarks:""})),a=Object(C.a)(s,2),r=a[0],n=a[1],i=r.RollNo,g=r.Name,j=r.MathsMarks,h=r.PhysicsMarks,l=r.ChemMarks;Object(c.useEffect)((function(){"Student Record already exists!!"===t&&m.b.error(t)}),[t]);var Q=function(A){return n(Object(B.a)(Object(B.a)({},r),{},Object(D.a)({},A.target.name,A.target.value)))};return Object(I.jsxs)("form",{onSubmit:function(A){if(A.preventDefault(),""===i||""===g||""===j||""===h||""===l)m.b.error("Please fill all the fields!");else if(j<0||h<0||l<0||j>100||h>100||l>100)m.b.error("Marks should be between 0 to 100");else{try{e(r),m.b.success("Record Added!")}catch(t){m.b.error("Not filled")}n({RollNo:"",Name:"",MathsMarks:0,PhysicsMarks:0,ChemMarks:0})}},children:[Object(I.jsx)("input",{type:"number",placeholder:"Roll No.",name:"RollNo",value:i,onChange:Q}),Object(I.jsx)("input",{type:"text",placeholder:"Name",name:"Name",value:g,onChange:Q}),Object(I.jsx)("input",{type:"number",placeholder:"MathsMarks",name:"MathsMarks",value:j,onChange:Q}),Object(I.jsx)("input",{type:"number",placeholder:"PhysicsMarks",name:"PhysicsMarks",value:h,onChange:Q}),Object(I.jsx)("input",{type:"number",placeholder:"ChemMarks",name:"ChemMarks",value:l,onChange:Q}),""!==j&&""!==h&&""!==l&&Object(I.jsxs)("div",{className:"lower-box",children:[Object(I.jsxs)("div",{className:"py-2 total-box",children:["TOTAL MARKS :"," ","".concat(parseInt(l)+parseInt(h)+parseInt(j))]}),Object(I.jsxs)("div",{className:"total-box",children:["PERCENTAGE :"," ","".concat(((parseInt(l)+parseInt(h)+parseInt(j))/300*100).toFixed(2),"%")]})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"submit",value:"Add Record",className:"btn btn-dark btn-block"}),Object(I.jsx)("div",{className:"py-2 back-button",children:Object(I.jsx)(o.b,{to:"/",children:"Back"})})]})]})},y=function(){return Object(I.jsx)("div",{className:"container",children:Object(I.jsxs)("div",{className:"box",children:[Object(I.jsx)("h1",{className:"py-1",children:"ENTER STUDENT RECORD"}),Object(I.jsx)(M,{})]})})},K=t(39),Y=function(){return Object(I.jsx)(c.Fragment,{children:Object(I.jsx)("img",{src:"data:image/gif;base64,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",alt:"Loading ...",style:{width:"200px",margin:"auto",display:"block"}})})},R=function(){var A=Object(c.useContext)(b),e=A.records,t=A.getRecords,s=A.loading,a=Object(c.useState)(""),r=Object(C.a)(a,2),n=r[0],i=r[1];return Object(c.useEffect)((function(){t()}),[]),s?Object(I.jsx)(I.Fragment,{children:"loading"}):null===e||0!==e.length||s?Object(I.jsxs)("div",{className:"table-box",children:[Object(I.jsx)("div",{children:Object(I.jsx)("div",{className:"search-bar",children:Object(I.jsx)("input",{type:"text",value:n,className:"search-input",placeholder:"Search by name...",onChange:function(A){return i(A.target.value)}})})}),Object(I.jsxs)("div",{className:"grid",children:[Object(I.jsx)("span",{children:Object(I.jsx)("strong",{children:"Rank"})}),Object(I.jsxs)("span",{children:[Object(I.jsx)("strong",{children:"Roll No."}),Object(I.jsx)("i",{className:"fa fa-sort-up p-left",type:"button",onClick:function(){return function(A){var t=Object(K.a)(e.data);t.sort(function(A){return function(e,t){return e[A]<t[A]?-1:e[A]>t[A]?1:0}}(A)),console.log(t)}("Roll No.")}})]}),Object(I.jsxs)("span",{children:[Object(I.jsx)("strong",{children:"Name"}),Object(I.jsx)("i",{className:"fa fa-sort-up p-left",type:"button"})]}),Object(I.jsxs)("span",{children:[Object(I.jsx)("strong",{children:"Maths"}),Object(I.jsx)("i",{className:"fa fa-sort-up p-left",type:"button"})]}),Object(I.jsxs)("span",{children:[Object(I.jsx)("strong",{children:"Physics"}),Object(I.jsx)("i",{className:"fa fa-sort-up p-left",type:"button"})]}),Object(I.jsxs)("span",{children:[Object(I.jsx)("strong",{children:"Chemistry"}),Object(I.jsx)("i",{className:"fa fa-sort-up p-left",type:"button",children:" "})]}),Object(I.jsxs)("span",{children:[Object(I.jsx)("strong",{children:"Percentage"}),Object(I.jsx)("i",{className:"fa fa-sort-up p-left",type:"button"})]}),s?Object(I.jsx)(Y,{}):e&&e.data.filter((function(A){return n?A.StudentName.toLowerCase().includes(n.toLowerCase())?A:void 0:A})).map((function(A,e){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("span",{children:e+1},e),Object(I.jsx)("span",{children:A.RollNo}),Object(I.jsx)("span",{children:A.StudentName}),Object(I.jsx)("span",{children:A.MathsMarks}),Object(I.jsx)("span",{children:A.PhysicsMarks}),Object(I.jsx)("span",{children:A.ChemMarks}),Object(I.jsx)("span",{children:"".concat(A.Percentage,"%")})]})}))]}),Object(I.jsx)("div",{className:"py-2 back-button",children:Object(I.jsx)(o.b,{to:"/",children:"Back"})})]}):Object(I.jsx)("h4",{children:"Please add a Record!!"})},k=function(){return Object(I.jsx)("div",{className:"container",children:Object(I.jsxs)("div",{className:"box",children:[Object(I.jsx)("h1",{className:"py-1",children:"LEADERBOARD"}),Object(I.jsx)(R,{})]})})};t(71);var G=function(){return Object(I.jsx)(w,{children:Object(I.jsx)(o.a,{children:Object(I.jsxs)(c.Fragment,{children:[Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)(i.c,{children:[Object(I.jsx)(i.a,{path:"/",component:x,exact:!0}),Object(I.jsx)(i.a,{path:"/enterMarks",component:y}),Object(I.jsx)(i.a,{path:"/leaderboard",component:k})]})}),Object(I.jsx)(m.a,{})]})})})},N=new r.a;a.a.render(Object(I.jsx)(n.a,{client:N,children:Object(I.jsx)(G,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.fe8c4af4.chunk.js.map