(this["webpackJsonpblog-frontend"]=this["webpackJsonpblog-frontend"]||[]).push([[0],{138:function(e,n){},145:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,s,b,u,j,l,d,O,p=t(0),g=t.n(p),m=t(22),f=t.n(m),h=(t(99),t(20)),x=t(14),v=t(5),y=t(6),w=t(2),k=t(12),E=t(1),C=y.b.div(r||(r=Object(v.a)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 1024px;\n  margin: 0 auto; /* \uc911\uc559 \uc815\ub82c */\n\n  /* \ube0c\ub77c\uc6b0\uc800 \ud06c\uae30\uc5d0 \ub530\ub77c \uac00\ub85c \uc0ac\uc774\uc988 \ubcc0\uacbd */\n  @media (max-width: 1024px) {\n    width: 768px;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),S=function(e){var n=e.children,t=Object(k.a)(e,["children"]);return Object(E.jsx)(C,Object(w.a)(Object(w.a)({},t),{},{children:n}))},I=t(13),T={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]},R=Object(y.a)(a||(a=Object(v.a)(["\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.25rem 1rem;\n  color: white;\n  outline: none;\n  cursor: pointer;\n\n  background: ",";\n  &:hover {\n    background: ",";\n  }\n\n  ","\n\n  ","\n\n    &:disabled {\n    background: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n"])),T.gray[8],T.gray[6],(function(e){return e.fullWidth&&Object(y.a)(c||(c=Object(v.a)(["\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      width: 100%;\n      font-size: 1.125rem;\n    "])))}),(function(e){return e.cyan&&Object(y.a)(o||(o=Object(v.a)(["\n      background: ",";\n      &:hover {\n        background: ",";\n      }\n    "])),T.cyan[5],T.cyan[4])}),T.gray[3],T.gray[5]),_=y.b.button(i||(i=Object(v.a)(["\n  ","\n"])),R),P=Object(y.b)(I.b)(s||(s=Object(v.a)(["\n  ","\n"])),R),L=function(e){return e.to?Object(E.jsx)(P,Object(w.a)(Object(w.a)({},e),{},{cyan:e.cyan?1:0})):Object(E.jsx)(_,Object(w.a)({},e))},N=t(164),z=t(162),D=t(165),U=y.b.div(b||(b=Object(v.a)(["\n  position: fixed;\n  width: 100%;\n  background: white;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);\n"]))),F=Object(y.b)(S)(u||(u=Object(v.a)(["\n  height: 11rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; /* \uc790\uc2dd \uc5d8\ub9ac\uba3c\ud2b8 \uc0ac\uc774\uc5d0 \uc5ec\ubc31\uc744 \ucd5c\ub300\ub85c \uc124\uc815 */\n  .logo {\n    font-size: 1.7rem;\n    font-weight: 750;\n    letter-spacing: 2px;\n    position: absolute;\n    margin-bottom: 1rem;\n  }\n  .right {\n    display: flex;\n    position: absolute;\n    margin-left: 51rem;\n  }\n"]))),A=y.b.div(j||(j=Object(v.a)(["\n  height: 3rem;\n"]))),M=y.b.div(l||(l=Object(v.a)(["\n  font-weight: 800;\n  margin-right: 1rem;\n  margin-top: 0.2rem;\n"]))),B=function(e){var n=e.user,t=e.onLogout;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(U,{children:Object(E.jsxs)(F,{children:[Object(E.jsx)(I.b,{to:"/",className:"logo",children:"YXMPORTFOLIO"}),Object(E.jsx)(N.a,{bg:"#ffffff",variant:"light",style:{marginTop:"8rem"},children:Object(E.jsxs)(z.a,{children:[Object(E.jsx)(N.a.Brand,{href:"/",style:{marginRight:"2rem",marginBottom:"1rem"},children:"\ud3ec\uc2a4\ud2b8"}),Object(E.jsxs)(D.a,{className:"me-auto",children:[Object(E.jsx)(D.a.Link,{href:"/@admin/",style:{marginRight:"2rem",marginBottom:"1rem"},children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(E.jsx)(D.a.Link,{href:"/home",children:"\uc0ac\uc774\ud2b8"})]})]})}),n?Object(E.jsxs)("div",{className:"right",children:[Object(E.jsx)(M,{children:n.username}),Object(E.jsx)(L,{onClick:t,children:"\ub85c\uadf8\uc544\uc6c3"})]}):Object(E.jsx)("div",{className:"right",children:Object(E.jsx)(L,{to:"/login",children:"\ub85c\uadf8\uc778"})})]})}),Object(E.jsx)(A,{})]})},G=t(7),W=t(16),H=t.n(W),q=t(10),J=t(167),X=t(166),Y=t(18),Q=t(84),Z=t.n(Q).a.create(),$=function(){return Z.post("/api/auth/logout")},K="loading/START_LOADING",V="loading/FINISH_LOADING",ee=Object(J.a)(K,(function(e){return e})),ne=Object(J.a)(V,(function(e){return e})),te=Object(X.a)((d={},Object(G.a)(d,K,(function(e,n){return Object(w.a)(Object(w.a)({},e),{},Object(G.a)({},n.payload,!0))})),Object(G.a)(d,V,(function(e,n){return Object(w.a)(Object(w.a)({},e),{},Object(G.a)({},n.payload,!1))})),d),{}),re=function(e){return[e,"".concat(e,"_SUCCESS"),"".concat(e,"_FAILURE")]};function ae(e,n){var t="".concat(e,"_SUCCESS"),r="".concat(e,"_FAILURE");return H.a.mark((function a(c){var o;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Y.c)(ee(e));case 2:return a.prev=2,a.next=5,Object(Y.b)(n,c.payload);case 5:return o=a.sent,a.next=8,Object(Y.c)({type:t,payload:o.data,meta:o});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(2),a.next=14,Object(Y.c)({type:r,payload:a.t0,error:!0});case 14:return a.next=16,Object(Y.c)(ne(e));case 16:case"end":return a.stop()}}),a,null,[[2,10]])}))}var ce=H.a.mark(he),oe=H.a.mark(xe),ie="user/TEMP_SET_USER",se=re("user/CHECK"),be=Object(q.a)(se,3),ue=be[0],je=be[1],le=be[2],de="user/LOGOUT",Oe=Object(J.a)(ie,(function(e){return e})),pe=Object(J.a)(ue),ge=Object(J.a)(de),me=ae(ue,(function(){return Z.get("/api/auth/check")}));function fe(){try{localStorage.removeItem("user")}catch(e){console.log("localStorage is not working")}}function he(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Y.b)($);case 3:localStorage.removeItem("user"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),ce,null,[[0,6]])}function xe(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.d)(ue,me);case 2:return e.next=4,Object(Y.d)(le,fe);case 4:return e.next=6,Object(Y.d)(de,he);case 6:case"end":return e.stop()}}),oe)}var ve,ye,we,ke,Ee,Ce,Se,Ie=Object(X.a)((O={},Object(G.a)(O,ie,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{user:t})})),Object(G.a)(O,je,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{user:t,checkError:null})})),Object(G.a)(O,le,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{user:null,checkError:t})})),Object(G.a)(O,de,(function(e){return Object(w.a)(Object(w.a)({},e),{},{user:null})})),O),{user:null,checkError:null}),Te=function(){var e=Object(x.c)((function(e){return{user:e.user.user}})).user,n=Object(x.b)();return Object(E.jsx)(B,{user:e,onLogout:function(){n(ge())}})},Re=t(35),_e=t.n(Re),Pe=y.b.div(ve||(ve=Object(v.a)(["\n  ","\n  color: ",";\n\n  /* span \uc0ac\uc774\uc5d0 \uac00\uc6b4\ub383\uc810 \ubb38\uc790 \ubcf4\uc5ec\uc8fc\uae30*/\n  span + span:before {\n    color: ",";\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    content: '\\B7'; /* \uac00\uc6b4\ub383\uc810 \ubb38\uc790 */\n  }\n"],["\n  ","\n  color: ",";\n\n  /* span \uc0ac\uc774\uc5d0 \uac00\uc6b4\ub383\uc810 \ubb38\uc790 \ubcf4\uc5ec\uc8fc\uae30*/\n  span + span:before {\n    color: ",";\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    content: '\\\\B7'; /* \uac00\uc6b4\ub383\uc810 \ubb38\uc790 */\n  }\n"])),(function(e){return e.hasMarginTop&&Object(y.a)(ye||(ye=Object(v.a)(["\n      margin-top: 1rem;\n    "])))}),T.gray[6],T.gray[4]),Le=function(e){var n=e.username,t=e.publishedDate,r=e.hasMarginTop;return Object(E.jsxs)(Pe,{hasMarginTop:r,children:[Object(E.jsx)("span",{children:Object(E.jsx)("b",{children:Object(E.jsx)(I.b,{to:"/@".concat(n),children:n})})}),Object(E.jsx)("span",{children:new Date(t).toLocaleDateString()})]})},Ne=y.b.div(we||(we=Object(v.a)(["\n  margin-top: 0.5rem;\n  .tag {\n    display: inline-block;\n    color: ",";\n    text-decoration: none;\n    margin-right: 0.5rem;\n    &:hover {\n      color: ",";\n    }\n  }\n"])),T.cyan[7],T.cyan[6]),ze=function(e){var n=e.tags;return Object(E.jsx)(Ne,{children:n.map((function(e){return Object(E.jsxs)(I.b,{className:"tag",to:"/?tag=".concat(e),children:["#",e]},e)}))})},De=Object(y.b)(S)(ke||(ke=Object(v.a)(["\n  margin-top: 10rem;\n  margin-bottom: 2rem;\n"]))),Ue=y.b.div(Ee||(Ee=Object(v.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 3rem;\n"]))),Fe=y.b.div(Ce||(Ce=Object(v.a)(["\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  /* \ub9e8 \uc704 \ud3ec\uc2a4\ud2b8\ub294 padding-top \uc5c6\uc74c */\n  &:first-child {\n    padding-top: 0;\n  }\n  & + & {\n    border-top: 1px solid ",";\n  }\n\n  h2 {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n    margin-top: 0;\n    &:hover {\n      color: ",";\n    }\n  }\n  p {\n    margin-top: 2rem;\n  }\n"])),T.gray[2],T.gray[6]),Ae=function(e){var n=e.post,t=n.publishedDate,r=n.user,a=n.tags,c=n.title,o=n.body,i=n._id;return Object(E.jsxs)(Fe,{children:[Object(E.jsx)("h2",{children:Object(E.jsx)(I.b,{to:"/@".concat(r.username,"/").concat(i),children:c})}),Object(E.jsx)(Le,{username:r.username,publishedDate:new Date(t)}),Object(E.jsx)(ze,{tags:a}),Object(E.jsx)("p",{children:o})]})},Me=function(e){var n=e.posts,t=e.loading,r=e.error,a=e.showWriteButton,c=e.permit;return r?Object(E.jsx)(De,{children:"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."}):Object(E.jsxs)(De,{children:[Object(E.jsx)(Ue,{children:a&&(c?Object(E.jsx)(L,{cyan:!0,to:"/write",children:"\uc0c8 \uae00 \uc791\uc131\ud558\uae30"}):"")}),!t&&n&&Object(E.jsx)("div",{children:n.map((function(e){return Object(E.jsx)(Ae,{post:e},e._id)}))}),!t&&n&&Object(E.jsx)("div",{children:n.map((function(e){return Object(E.jsx)("noticeItem",{post:e},e._id)}))})]})},Be=H.a.mark(Qe),Ge=re("posts/LIST_POSTS"),We=Object(q.a)(Ge,3),He=We[0],qe=We[1],Je=We[2],Xe=Object(J.a)(He,(function(e){return{tag:e.tag,username:e.username,page:e.page}})),Ye=ae(He,(function(e){var n=e.page,t=e.username,r=e.tag,a=_e.a.stringify({page:n,username:t,tag:r});return Z.get("/api/posts?".concat(a))}));function Qe(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.d)(He,Ye);case 2:case"end":return e.stop()}}),Be)}var Ze,$e,Ke,Ve,en,nn=Object(X.a)((Se={},Object(G.a)(Se,qe,(function(e,n){var t=n.payload,r=n.meta;return Object(w.a)(Object(w.a)({},e),{},{posts:t,lastPage:parseInt(r.headers["last-page"],10)})})),Object(G.a)(Se,Je,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{error:t})})),Se),{posts:null,error:null,lastPage:1}),tn=Object(h.e)((function(e){var n=e.location,t=e.match,r=Object(x.b)(),a=Object(x.c)((function(e){var n=e.posts,t=e.loading,r=e.user;return{posts:n.posts,error:n.error,loading:t["posts/LIST_POSTS"],user:r.user}})),c=a.posts,o=a.error,i=a.loading,s=a.user;return Object(p.useEffect)((function(){var e=t.params.username,a=_e.a.parse(n.search,{ignoreQueryPrefix:!0}),c=a.tag,o=a.page;r(Xe({tag:c,username:e,page:o}))}),[r,n.search,t.params]),Object(E.jsx)(Me,{loading:i,error:o,posts:c,showWriteButton:s})})),rn=y.b.div(Ze||(Ze=Object(v.a)(["\n  width: 320px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 3rem;\n"]))),an=y.b.div($e||($e=Object(v.a)([""]))),cn=function(e){var n=e.username,t=e.tag,r=e.page,a=_e.a.stringify({tag:t,page:r});return n?"/@".concat(n,"?").concat(a):"/?".concat(a)},on=function(e){var n=e.page,t=e.lastPage,r=e.username,a=e.tag;return Object(E.jsxs)(rn,{children:[Object(E.jsx)(L,{disabled:1===n,to:1===n?void 0:cn({username:r,tag:a,page:n-1}),children:"\uc774\uc804"}),Object(E.jsx)(an,{children:n}),Object(E.jsx)(L,{disabled:n===t,to:n===t?void 0:cn({username:r,tag:a,page:n+1}),children:"\ub2e4\uc74c"})]})},sn=Object(h.e)((function(e){var n=e.location,t=e.match,r=Object(x.c)((function(e){var n=e.posts,t=e.loading;return{lastPage:n.lastPage,posts:n.posts,loading:t["posts/LIST_POSTS"]}})),a=r.lastPage,c=r.posts,o=r.loading;if(!c||o)return null;var i=t.params.username,s=_e.a.parse(n.search,{ignoreQueryPrefix:!0}),b=s.tag,u=s.page,j=void 0===u?1:u;return Object(E.jsx)(on,{tag:b,username:i,page:parseInt(j,10),lastPage:a})})),bn=function(e){var n=e.permission;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Te,{}),Object(E.jsx)(tn,{permission:n}),Object(E.jsx)(sn,{})]})},un=y.b.div(Ke||(Ke=Object(v.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background: ",";\n  /* flex\ub85c \ub0b4\ubd80 \ub0b4\uc6a9 \uc911\uc559 \uc815\ub82c */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])),T.gray[2]),jn=y.b.div(Ve||(Ve=Object(v.a)(["\n  .logo-area {\n    font-size: 2rem;\n    display: block;\n    padding-bottom: 2rem;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 10px;\n  }\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);\n  padding: 2rem;\n  width: 20%;\n  height: 80%;\n\n  border-radius: 2px;\n"]))),ln=function(e){var n=e.children;return Object(E.jsx)(un,{children:Object(E.jsxs)(jn,{children:[Object(E.jsx)("div",{className:"logo-area",children:Object(E.jsx)(I.b,{to:"/",children:"YXMPORTFOLIO"})}),n]})})},dn=t(85),On=H.a.mark(Wn),pn="auth/CHANGE_FIELD",gn="auth/INITIALIZE_FORM",mn=re("auth/REGISTER"),fn=Object(q.a)(mn,3),hn=fn[0],xn=fn[1],vn=fn[2],yn=re("auth/LOGIN"),wn=Object(q.a)(yn,3),kn=wn[0],En=wn[1],Cn=wn[2],Sn=re("auth/READ_USER"),In=Object(q.a)(Sn,3),Tn=In[0],Rn=In[1],_n=In[2],Pn=re("auth/PERMIT_USER"),Ln=Object(q.a)(Pn,1)[0],Nn=Object(J.a)(pn,(function(e){return{form:e.form,key:e.key,value:e.value}})),zn=Object(J.a)(gn,(function(e){return e})),Dn=Object(J.a)(hn,(function(e){return{username:e.username,password:e.password}})),Un=Object(J.a)(kn,(function(e){return{username:e.username,password:e.password}})),Fn=Object(J.a)(Tn,(function(e){return{username:e}})),An=Object(J.a)(Ln,(function(e){return{username:e}})),Mn=ae(hn,(function(e){var n=e.username,t=e.password;return Z.post("/api/auth/register",{username:n,password:t})})),Bn=ae(kn,(function(e){var n=e.username,t=e.password;return Z.post("/api/auth/login",{username:n,password:t})})),Gn=ae(Tn,(function(){return Z.get("/api/auth/readUser")}));function Wn(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.d)(hn,Mn);case 2:return e.next=4,Object(Y.d)(kn,Bn);case 4:return e.next=6,Object(Y.d)(Tn,Gn);case 6:case"end":return e.stop()}}),On)}var Hn,qn,Jn,Xn,Yn,Qn,Zn,$n,Kn,Vn={register:{username:"",password:"",passwordConfirm:""},login:{username:"",password:""},auth:null,authError:null,readUser:{readUser:null,error:null},permitUser:!1},et=Object(X.a)((en={},Object(G.a)(en,pn,(function(e,n){var t=n.payload,r=t.form,a=t.key,c=t.value;return Object(dn.a)(e,(function(e){e[r][a]=c}))})),Object(G.a)(en,gn,(function(e,n){var t,r=n.payload;return Object(w.a)(Object(w.a)({},e),{},(t={},Object(G.a)(t,r,Vn[r]),Object(G.a)(t,"authError",null),t))})),Object(G.a)(en,xn,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{authError:null,auth:t})})),Object(G.a)(en,vn,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{authError:t})})),Object(G.a)(en,En,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{authError:null,auth:t})})),Object(G.a)(en,Cn,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{authError:t})})),Object(G.a)(en,Rn,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{readUser:t})})),Object(G.a)(en,_n,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{error:t})})),Object(G.a)(en,Ln,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{permitUser:!t})})),en),Vn),nt=t(163),tt=y.b.div(Hn||(Hn=Object(v.a)(["\n  h3 {\n    margin: 0;\n    color: ",";\n    margin-bottom: 3rem;\n    width: 100%;\n    font-size: 2rem;\n    text-align: center;\n  }\n"])),T.gray[8]),rt=y.b.input(qn||(qn=Object(v.a)(["\n  font-size: 1rem;\n  border: none;\n  text-align: center;\n  border-bottom: 1px solid ",";\n  padding: 1rem 0 1rem 0;\n  margin-bottom: 0.5rem;\n  outline: none;\n  width: 100%;\n  &:focus {\n    color: $oc-teal-7;\n    border-bottom: 1px solid ",";\n  }\n  & + & {\n    margin-top: 0.5rem;\n  }\n"])),T.gray[5],T.gray[7]),at=y.b.div(Jn||(Jn=Object(v.a)(["\n  margin-top: 3rem;\n  text-align: right;\n  font-size: 1.1rem;\n  a {\n    color: ",";\n    text-decoration: underline;\n    &:hover {\n      color: ",";\n    }\n  }\n"])),T.gray[6],T.gray[9]),ct=Object(y.b)(L)(Xn||(Xn=Object(v.a)(["\n  margin-top: 1rem;\n"]))),ot={login:"\ub85c\uadf8\uc778",register:"\ud68c\uc6d0\uac00\uc785"},it=y.b.div(Yn||(Yn=Object(v.a)(["\n  color: red;\n  text-align: center;\n  font-size: 0.875rem;\n  margin-top: 1rem;\n"]))),st=function(e){var n=e.type,t=e.form,r=e.onChange,a=e.onSubmit,c=e.error,o=ot[n];return Object(E.jsxs)(tt,{children:[Object(E.jsx)("h3",{children:o}),Object(E.jsxs)("form",{onSubmit:a,children:[Object(E.jsx)(rt,{autoComplete:"username",name:"username",placeholder:"\uc544\uc774\ub514",onChange:r,value:t.username}),Object(E.jsx)(rt,{autoComplete:"new-password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",type:"password",onChange:r,value:t.password}),"register"===n&&Object(E.jsx)(rt,{autoComplete:"new-password",name:"passwordConfirm",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",type:"password",onChange:r,value:t.passwordConfirm}),"register"===n&&Object(E.jsx)(rt,{autoComplete:"nickname",name:"nickname",placeholder:"\ub2c9\ub124\uc784",onChange:r,value:t.nickname}),"register"===n&&Object(E.jsx)(rt,{autoComplete:"phonenumber",name:"phone",placeholder:"\ud734\ub300 \uc804\ud654",onChange:r,value:t.phone}),"register"===n&&Object(E.jsx)(nt.a,{variant:"outlined",style:{marginLeft:"35%",marginTop:"6px"},onClick:function(){return alert("\ud734\ub300 \uc804\ud654 \uc778\uc99d \uc54c\ub9bc\uc785\ub2c8\ub2e4")},children:"\uc778\uc99d\ud558\uae30"}),c&&Object(E.jsx)(it,{children:c}),Object(E.jsx)(ct,{cyan:!0,fullWidth:!0,style:{marginTop:"1rem"},children:o})]}),Object(E.jsx)(at,{children:"login"===n?Object(E.jsx)(I.b,{to:"/register",children:"\ud68c\uc6d0\uac00\uc785"}):Object(E.jsx)(I.b,{to:"/login",children:"\ub85c\uadf8\uc778"})})]})},bt=Object(h.e)((function(e){var n=e.history,t=Object(p.useState)(null),r=Object(q.a)(t,2),a=r[0],c=r[1],o=Object(x.b)(),i=Object(x.c)((function(e){var n=e.auth,t=e.user;return{form:n.login,auth:n.auth,authError:n.authError,user:t.user}})),s=i.form,b=i.auth,u=i.authError,j=i.user;return Object(p.useEffect)((function(){o(zn("login"))}),[o]),Object(p.useEffect)((function(){if(u)return console.log("\uc624\ub958 \ubc1c\uc0dd"),console.log(u),void c("\ub85c\uadf8\uc778 \uc2e4\ud328");b&&(console.log("\ub85c\uadf8\uc778 \uc131\uacf5"),o(pe()))}),[b,u,o]),Object(p.useEffect)((function(){if(j){n.push("/");try{localStorage.setItem("user",JSON.stringify(j))}catch(e){console.log("localStorage is not working")}}}),[n,j]),Object(E.jsx)(st,{type:"login",form:s,onChange:function(e){var n=e.target,t=n.value,r=n.name;o(Nn({form:"login",key:r,value:t}))},onSubmit:function(e){e.preventDefault();var n=s.username,t=s.password;o(Un({username:n,password:t}))},error:a})})),ut=function(){return Object(E.jsx)(ln,{children:Object(E.jsx)(bt,{})})},jt=Object(h.e)((function(e){var n=e.history,t=Object(p.useState)(null),r=Object(q.a)(t,2),a=r[0],c=r[1],o=Object(x.b)(),i=Object(x.c)((function(e){var n=e.auth,t=e.user;return{form:n.register,auth:n.auth,authError:n.authError,user:t.user}})),s=i.form,b=i.auth,u=i.authError,j=i.user;return Object(p.useEffect)((function(){o(zn("register"))}),[o]),Object(p.useEffect)((function(){if(u)return 409===u.response.status?void c("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uacc4\uc815\uba85\uc785\ub2c8\ub2e4."):void c("\ud68c\uc6d0\uac00\uc785 \uc2e4\ud328");b&&(console.log("\ud68c\uc6d0\uac00\uc785 \uc131\uacf5"),console.log(b),o(pe()))}),[b,u,o]),Object(p.useEffect)((function(){if(j){n.push("/");try{localStorage.setItem("user",JSON.stringify(j))}catch(e){console.log("localStorage is not working")}}}),[n,j]),Object(E.jsx)(st,{type:"register",form:s,onChange:function(e){var n=e.target,t=n.value,r=n.name;o(Nn({form:"register",key:r,value:t}))},onSubmit:function(e){e.preventDefault();var n=s.username,t=s.password,r=s.passwordConfirm;if(![n,t,r].includes(""))return t!==r?(c("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),o(Nn({form:"register",key:"password",value:""})),void o(Nn({form:"register",key:"passwordConfirm",value:""}))):void o(Dn({username:n,password:t}));c("\ube48 \uce78\uc744 \ubaa8\ub450 \uc785\ub825\ud558\uc138\uc694.")},error:a})})),lt=function(){return Object(E.jsx)(ln,{children:Object(E.jsx)(jt,{})})},dt=t(36),Ot=t(90),pt=t.n(Ot),gt=(t(144),Object(y.b)(S)(Qn||(Qn=Object(v.a)(["\n  /* \ud398\uc774\uc9c0 \uc704 \uc544\ub798 \uc5ec\ubc31 \uc9c0\uc815 */\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n"])))),mt=y.b.input(Zn||(Zn=Object(v.a)(["\n  font-size: 3rem;\n  outline: none;\n  padding-bottom: 0.5rem;\n  border: none;\n  border-bottom: 1px solid ",";\n  margin-bottom: 2rem;\n  width: 100%;\n"])),T.gray[4]),ft=y.b.div($n||($n=Object(v.a)(["\n  /* \ucd5c\uc18c \ud06c\uae30 \uc9c0\uc815 \ubc0f padding \uc81c\uac70 */\n  .ql-editor {\n    padding: 0;\n    min-height: 320px;\n    font-size: 1.125rem;\n    line-height: 1.5;\n  }\n  .ql-editor.ql-blank::before {\n    left: 0px;\n  }\n"]))),ht=function(e){var n=e.title,t=e.body,r=e.onChangeField,a=Object(p.useRef)(null),c=Object(p.useRef)(null);Object(p.useEffect)((function(){c.current=new pt.a(a.current,{theme:"bubble",placeholder:"\ub0b4\uc6a9\uc744 \uc791\uc131\ud558\uc138\uc694...",modules:{toolbar:[[{header:"1"},{header:"2"}],["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],["blockquote","code-block","link","image"]]}});var e=c.current;e.on("text-change",(function(n,t,a){"user"===a&&r({key:"body",value:e.root.innerHTML})}))}),[r]);var o=Object(p.useRef)(!1);Object(p.useEffect)((function(){o.current||(o.current=!0,c.current.root.innerHTML=t)}),[t]);return Object(E.jsxs)(gt,{children:[Object(E.jsx)(mt,{placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",onChange:function(e){r({key:"title",value:e.target.value})},value:n}),Object(E.jsx)(ft,{children:Object(E.jsx)("div",{ref:a})})]})},xt=H.a.mark(Bt),vt="write/INITIALIZE",yt="write/CHANGE_FIELD",wt=re("write/WRITE_POST"),kt=Object(q.a)(wt,3),Et=kt[0],Ct=kt[1],St=kt[2],It="write/SET_ORIGINAL_POST",Tt=re("write/UPDATE_POST"),Rt=Object(q.a)(Tt,3),_t=Rt[0],Pt=Rt[1],Lt=Rt[2],Nt=Object(J.a)(vt),zt=Object(J.a)(yt,(function(e){return{key:e.key,value:e.value}})),Dt=Object(J.a)(Et,(function(e){return{title:e.title,body:e.body,tags:e.tags}})),Ut=Object(J.a)(It,(function(e){return e})),Ft=Object(J.a)(_t,(function(e){return{id:e.id,title:e.title,body:e.body,tags:e.tags}})),At=ae(Et,(function(e){var n=e.title,t=e.body,r=e.tags;return Z.post("/api/posts",{title:n,body:t,tags:r})})),Mt=ae(_t,(function(e){var n=e.id,t=e.title,r=e.body,a=e.tags;return Z.patch("/api/posts/".concat(n),{title:t,body:r,tags:a})}));function Bt(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.d)(Et,At);case 2:return e.next=4,Object(Y.d)(_t,Mt);case 4:case"end":return e.stop()}}),xt)}var Gt,Wt,Ht,qt,Jt,Xt,Yt,Qt={title:"",body:"",tags:[],post:null,postError:null,originalPostId:null},Zt=Object(X.a)((Kn={},Object(G.a)(Kn,vt,(function(e){return Qt})),Object(G.a)(Kn,yt,(function(e,n){var t=n.payload,r=t.key,a=t.value;return Object(w.a)(Object(w.a)({},e),{},Object(G.a)({},r,a))})),Object(G.a)(Kn,Et,(function(e){return Object(w.a)(Object(w.a)({},e),{},{post:null,postError:null})})),Object(G.a)(Kn,Ct,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{post:t})})),Object(G.a)(Kn,St,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{postError:t})})),Object(G.a)(Kn,It,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{title:t.title,body:t.body,tags:t.tags,originalPostId:t._id})})),Object(G.a)(Kn,Pt,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{post:t})})),Object(G.a)(Kn,Lt,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{postError:t})})),Kn),Qt),$t=function(){var e=Object(x.b)(),n=Object(x.c)((function(e){var n=e.write;return{title:n.title,body:n.body}})),t=n.title,r=n.body,a=Object(p.useCallback)((function(n){return e(zt(n))}),[e]);return Object(p.useEffect)((function(){return function(){e(Nt())}}),[e]),Object(E.jsx)(ht,{onChangeField:a,title:t,body:r})},Kt=t(60),Vt=y.b.div(Gt||(Gt=Object(v.a)(["\n  width: 100%;\n  border-top: 1px solid ",";\n  padding-top: 2rem;\n\n  h4 {\n    color: ",";\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n  }\n"])),T.gray[2],T.gray[8]),er=y.b.form(Wt||(Wt=Object(v.a)(["\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  width: 300px;\n  border: 1px solid ","; /* \uc2a4\ud0c0\uc77c \ucd08\uae30\ud654 */\n  input,\n  button {\n    outline: none;\n    border: none;\n    font-size: 1rem;\n  }\n\n  input {\n    padding: 0.5rem;\n    flex: 1;\n  }\n  button {\n    cursor: pointer;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    border: none;\n    background: ",";\n    color: white;\n    font-weight: bold;\n    &:hover {\n      background: ",";\n    }\n  }\n"])),T.gray[9],T.gray[8],T.gray[6]),nr=y.b.div(Ht||(Ht=Object(v.a)(["\n  margin-right: 0.5rem;\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    opacity: 0.5;\n  }\n"])),T.gray[6]),tr=y.b.div(qt||(qt=Object(v.a)(["\n  display: flex;\n  margin-top: 0.5rem;\n"]))),rr=g.a.memo((function(e){var n=e.tag,t=e.onRemove;return Object(E.jsxs)(nr,{onClick:function(){return t(n)},children:["#",n]})})),ar=g.a.memo((function(e){var n=e.tags,t=e.onRemove;return Object(E.jsx)(tr,{children:n.map((function(e){return Object(E.jsx)(rr,{tag:e,onRemove:t},e)}))})})),cr=function(e){var n=e.tags,t=e.onChangeTags,r=Object(p.useState)(""),a=Object(q.a)(r,2),c=a[0],o=a[1],i=Object(p.useState)([]),s=Object(q.a)(i,2),b=s[0],u=s[1],j=Object(p.useCallback)((function(e){if(e&&!b.includes(e)){var n=[].concat(Object(Kt.a)(b),[e]);u(n),t(n)}}),[b,t]),l=Object(p.useCallback)((function(e){var n=b.filter((function(n){return n!==e}));u(n),t(n)}),[b,t]),d=Object(p.useCallback)((function(e){o(e.target.value)}),[]),O=Object(p.useCallback)((function(e){e.preventDefault(),j(c.trim()),o("")}),[c,j]);return Object(p.useEffect)((function(){u(n)}),[n]),Object(E.jsxs)(Vt,{children:[Object(E.jsx)("h4",{children:"\ud0dc\uadf8"}),Object(E.jsxs)(er,{onSubmit:O,children:[Object(E.jsx)("input",{placeholder:"\ud0dc\uadf8\ub97c \uc785\ub825\ud558\uc138\uc694",value:c,onChange:d}),Object(E.jsx)("button",{type:"submit",children:"\ucd94\uac00"})]}),Object(E.jsx)(ar,{tags:b,onRemove:l})]})},or=function(){var e=Object(x.b)(),n=Object(x.c)((function(e){return e.write.tags}));return Object(E.jsx)(cr,{onChangeTags:function(n){e(zt({key:"tags",value:n}))},tags:n})},ir=y.b.div(Jt||(Jt=Object(v.a)(["\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n  button + button {\n    margin-left: 0.5rem;\n  }\n"]))),sr=Object(y.b)(L)(Xt||(Xt=Object(v.a)(["\n  height: 2.125rem;\n  & + & {\n    margin-left: 0.5rem;\n  }\n"]))),br=function(e){var n=e.onCancel,t=e.onPublish,r=e.isEdit;return Object(E.jsxs)(ir,{children:[Object(E.jsxs)(sr,{cyan:!0,onClick:t,children:["\ud3ec\uc2a4\ud2b8 ",r?"\uc218\uc815":"\ub4f1\ub85d"]}),Object(E.jsx)(sr,{onClick:n,children:"\ucde8\uc18c"})]})},ur=Object(h.e)((function(e){var n=e.history,t=Object(x.b)(),r=Object(x.c)((function(e){var n=e.write;return{title:n.title,body:n.body,tags:n.tags,post:n.post,postError:n.postError,originalPostId:n.originalPostId}})),a=r.title,c=r.body,o=r.tags,i=r.post,s=r.postError,b=r.originalPostId;return Object(p.useEffect)((function(){if(i){var e=i._id,t=i.user;n.push("/@".concat(t.username,"/").concat(e))}s&&console.log(s)}),[n,i,s]),Object(E.jsx)(br,{onPublish:function(){t(b?Ft({title:a,body:c,tags:o,id:b}):Dt({title:a,body:c,tags:o}))},onCancel:function(){n.goBack()},isEdit:!!b})})),jr=function(){return Object(E.jsxs)(S,{children:[Object(E.jsx)(dt.a,{children:Object(E.jsx)("title",{children:"\uae00 \uc791\uc131\ud558\uae30"})}),Object(E.jsx)($t,{}),Object(E.jsx)(or,{}),Object(E.jsx)(ur,{})]})},lr=t(91),dr=H.a.mark(wr),Or=re("post/READ_POST"),pr=Object(q.a)(Or,3),gr=pr[0],mr=pr[1],fr=pr[2],hr="post/UNLOAD_POST",xr=Object(J.a)(gr,(function(e){return e})),vr=Object(J.a)(hr),yr=ae(gr,(function(e){return Z.get("/api/posts/".concat(e))}));function wr(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.d)(gr,yr);case 2:case"end":return e.stop()}}),dr)}var kr,Er,Cr,Sr,Ir,Tr,Rr,_r,Pr,Lr,Nr,zr,Dr,Ur,Fr,Ar,Mr,Br,Gr={post:null,error:null},Wr=Object(X.a)((Yt={},Object(G.a)(Yt,mr,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{post:t})})),Object(G.a)(Yt,fr,(function(e,n){var t=n.payload;return Object(w.a)(Object(w.a)({},e),{},{error:t})})),Object(G.a)(Yt,hr,(function(){return Gr})),Yt),Gr),Hr=Object(y.b)(S)(kr||(kr=Object(v.a)(["\n  margin-top: 4rem;\n"]))),qr=y.b.div(Er||(Er=Object(v.a)(["\n  border-bottom: 1px solid ",";\n  padding-bottom: 3rem;\n  margin-bottom: 3rem;\n  h1 {\n    font-size: 3rem;\n    line-height: 1.5;\n    margin: 0;\n  }\n"])),T.gray[2]),Jr=y.b.div(Cr||(Cr=Object(v.a)(["\n  font-size: 1.3125rem;\n  color: ",";\n"])),T.gray[8]),Xr=function(e){var n=e.post,t=e.error,r=e.loading,a=e.actionButtons;if(t)return t.response&&404===t.response.status?Object(E.jsx)(Hr,{children:"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ud3ec\uc2a4\ud2b8\uc785\ub2c8\ub2e4."}):Object(E.jsx)(Hr,{children:"\uc624\ub958 \ubc1c\uc0dd!"});if(r||!n)return null;var c=n.title,o=n.body,i=n.user,s=n.publishedDate,b=n.tags;return Object(E.jsxs)(Hr,{children:[Object(E.jsx)(dt.a,{children:Object(E.jsxs)("title",{children:[c," - REACTERS"]})}),Object(E.jsxs)(qr,{children:[Object(E.jsx)("h1",{children:c}),Object(E.jsx)(Le,{username:i.username,publishedDate:s,hasMarginTop:!0}),Object(E.jsx)(ze,{tags:b})]}),a,Object(E.jsx)(Jr,{dangerouslySetInnerHTML:{__html:o}})]})},Yr=y.b.div(Sr||(Sr=Object(v.a)(["\n  position: fixed;\n  z-index: 30;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Qr=y.b.div(Ir||(Ir=Object(v.a)(["\n  width: 320px;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 4px;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);\n  h2 {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n  p {\n    margin-bottom: 3rem;\n  }\n  .buttons {\n    display: flex;\n    justify-content: flex-end;\n  }\n"]))),Zr=Object(y.b)(L)(Tr||(Tr=Object(v.a)(["\n  height: 2rem;\n  & + & {\n    margin-left: 0.75rem;\n  }\n"]))),$r=function(e){var n=e.visible,t=e.title,r=e.description,a=e.confirmText,c=void 0===a?"\ud655\uc778":a,o=e.cancelText,i=void 0===o?"\ucde8\uc18c":o,s=e.onConfirm,b=e.onCancel;return n?Object(E.jsx)(Yr,{children:Object(E.jsxs)(Qr,{children:[Object(E.jsx)("h2",{children:t}),Object(E.jsx)("p",{children:r}),Object(E.jsxs)("div",{className:"buttons",children:[Object(E.jsx)(Zr,{onClick:b,children:i}),Object(E.jsx)(Zr,{cyan:!0,onClick:s,children:c})]})]})}):null},Kr=function(e){var n=e.visible,t=e.onConfirm,r=e.onCancel;return Object(E.jsx)($r,{visible:n,title:"\ud3ec\uc2a4\ud2b8 \uc0ad\uc81c",description:"\ud3ec\uc2a4\ud2b8\ub97c \uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmText:"\uc0ad\uc81c",onConfirm:t,onCancel:r})},Vr=y.b.div(Rr||(Rr=Object(v.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 2rem;\n  margin-top: -1.5rem;\n"]))),ea=y.b.button(_r||(_r=Object(v.a)(["\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  color: ",";\n  font-weight: bold;\n  border: none;\n  outline: none;\n  font-size: 0.875rem;\n  cursor: pointer;\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n  & + & {\n    margin-left: 0.25rem;\n  }\n"])),T.gray[6],T.gray[1],T.cyan[7]),na=function(e){var n=e.onEdit,t=e.onRemove,r=Object(p.useState)(!1),a=Object(q.a)(r,2),c=a[0],o=a[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(Vr,{children:[Object(E.jsx)(ea,{onClick:n,children:"\uc218\uc815"}),Object(E.jsx)(ea,{onClick:function(){o(!0)},children:"\uc0ad\uc81c"})]}),Object(E.jsx)(Kr,{visible:c,onConfirm:function(){o(!1),t()},onCancel:function(){o(!1)}})]})},ta=Object(h.e)((function(e){var n=e.match,t=e.history,r=n.params.postId,a=Object(x.b)(),c=Object(x.c)((function(e){var n=e.post,t=e.loading,r=e.user;return{post:n.post,error:n.error,loading:t["post/READ_POST"],user:r.user}})),o=c.post,i=c.error,s=c.loading,b=c.user;Object(p.useEffect)((function(){return a(xr(r)),function(){a(vr())}}),[a,r]);var u=function(){var e=Object(lr.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=r,Z.delete("/api/posts/".concat(n));case 3:t.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}var n}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),j=(b&&b._id)===(o&&o.user._id);return Object(E.jsx)(Xr,{post:o,loading:s,error:i,actionButtons:j&&Object(E.jsx)(na,{onEdit:function(){a(Ut(o)),t.push("/write")},onRemove:u})})})),ra=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Te,{}),Object(E.jsx)(ta,{})]})},aa=y.b.div(Pr||(Pr=Object(v.a)(["\n  display: flex;\n  justify-content: flex-start;\n\n  h3 {\n    margin-bottom: 2rem;\n  }\n"]))),ca=y.b.div(Lr||(Lr=Object(v.a)(["\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 50%;\n"]))),oa=y.b.div(Nr||(Nr=Object(v.a)(["\n  display: inline-flex;\n  justify-content: flex-end;\n  width: 50%;\n"]))),ia=Object(y.b)(S)(zr||(zr=Object(v.a)(["\n  margin-top: 3rem;\n"]))),sa=y.b.div(Dr||(Dr=Object(v.a)(["\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  width: 100%;\n  ul {\n    margin-top: 2rem;\n  }\n"]))),ba=function(e){var n=e.userList,t=e.permission,r=e.onPermit;return Object(E.jsxs)(sa,{children:[Object(E.jsxs)(ca,{children:["\uc720\uc800\uc774\ub984 : ",n.username,Object(E.jsx)("br",{}),"\uc544\uc774\ub514 : ",n._id]}),Object(E.jsx)(oa,{children:Object(E.jsx)(L,{cyan:!0,onClick:r,children:t?"\uc2b9\uc778\ud655\uc778\ub428":"\uc2b9\uc778\ub300\uae30\uc911"})}),Object(E.jsx)("hr",{})]})},ua=function(e){var n,t=e.readUser,r=e.permission,a=e.onPermit;return Object(E.jsxs)(ia,{children:[Object(E.jsx)(aa,{children:Object(E.jsx)("h3",{children:"\uc720\uc800\uc815\ubcf4"})}),(null===(n=t[0])||void 0===n?void 0:n.username)?Object(E.jsx)("div",{children:t.map((function(e){return Object(E.jsx)(ba,{userList:e,permission:r,onClick:a},e._id)}))}):Object(E.jsx)("h1",{children:" \uc720\uc800\ud56d\ubaa9\uc744 \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. "})]})},ja=Object(h.e)((function(){var e=Object(x.b)(),n=Object(x.c)((function(e){var n=e.auth,t=e.loading;return{userList:n.readUser,loading:t["auth/READ_USER"],permission:n.permitUser}})),t=n.userList,r=n.loading,a=n.permission;return Object(p.useEffect)((function(){e(Fn())}),[]),Object(E.jsx)(ua,{loading:r,readUser:t,permission:a,onClick:function(){e(An())}})})),la=function(e){var n=e.permission;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Te,{}),Object(E.jsx)(ja,{permission:n})]})},da=y.b.div(Ur||(Ur=Object(v.a)(["\n  position: flex;\n  width: 100%;\n  z-index: 6;\n  background: white;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);\n"]))),Oa=Object(y.b)(S)(Fr||(Fr=Object(v.a)(["\n  height: 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; /* \uc790\uc2dd \uc5d8\ub9ac\uba3c\ud2b8 \uc0ac\uc774\uc5d0 \uc5ec\ubc31\uc744 \ucd5c\ub300\ub85c \uc124\uc815 */\n  .logo {\n    font-size: 1.7rem;\n    font-weight: 750;\n    letter-spacing: 2px;\n  }\n  .right {\n    display: flex;\n    align-items: center;\n  }\n"]))),pa=y.b.div(Ar||(Ar=Object(v.a)(["\n  height: 4rem;\n"]))),ga=y.b.div(Mr||(Mr=Object(v.a)(["\n  font-weight: 800;\n  margin-right: 1rem;\n"]))),ma=function(e){var n=e.user,t=e.onLogout;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(da,{children:Object(E.jsxs)(Oa,{children:[Object(E.jsx)(I.b,{to:"/",className:"logo",children:"YXMPORTFOLIO"}),n?Object(E.jsxs)("div",{className:"right",children:[Object(E.jsx)(ga,{children:n.username}),Object(E.jsx)(L,{onClick:t,children:"\ub85c\uadf8\uc544\uc6c3"})]}):Object(E.jsx)("div",{className:"right",children:Object(E.jsx)(L,{to:"/login",children:"\ub85c\uadf8\uc778"})})]})}),Object(E.jsx)(pa,{})]})},fa=y.b.div(Br||(Br=Object(v.a)(["\n.bg{\n  position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n        to right,\n        rgba(20, 20, 20, 0.1) 10%,\n        rgba(20, 20, 20, 0.7) 70%,\n        rgba(20, 20, 20, 1)\n      ),\n      url(https://source.unsplash.com/random/1920x1080);\n    background-size: cover;\n    z-index: 3;\n  }\n  .total{\n    display: flex;\n    align-items:center;\n    justify-content: center;\n    height: 100vh;\n  }\n  .menu{\n    list-style:none;\n    text-align: center;\n    color: white;\n    -webkit-text-stroke: 1px black;\n    font-size: 1.5rem;\n    border: 1px solid #f5f5f5;\n    width: 16rem;\n    height: 6rem;\n    padding: 2rem;\n    margin: 3rem;\n    z-index: 4;\n  }\n"]))),ha=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(fa,{children:Object(E.jsx)("div",{className:"bg",children:Object(E.jsxs)("ol",{className:"total",children:[Object(E.jsx)("li",{className:"menu",children:Object(E.jsx)(I.b,{to:"/",children:"\ud3ec\uc2a4\ud2b8"})}),Object(E.jsx)("li",{className:"menu",children:Object(E.jsx)(I.b,{to:"/@admin/",children:"\uacf5\uc9c0\uc0ac\ud56d"})}),Object(E.jsx)("li",{className:"menu",children:Object(E.jsx)(I.b,{to:"/home",children:"\uc0ac\uc774\ud2b8"})})]})})})})},xa=function(){return Object(E.jsx)(ha,{children:Object(E.jsx)(ma,{})})},va=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(dt.a,{children:Object(E.jsx)("title",{children:"REACTERS"})}),Object(E.jsx)(h.a,{component:xa,path:"/home"}),Object(E.jsx)(h.a,{component:bn,path:["/@:username","/"],exact:!0}),Object(E.jsx)(h.a,{component:ut,path:"/login"}),Object(E.jsx)(h.a,{component:lt,path:"/register"}),Object(E.jsx)(h.a,{component:jr,path:"/write"}),Object(E.jsx)(h.a,{component:ra,path:"/@:username/:postId"}),Object(E.jsx)(h.a,{component:la,path:"/admin"})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ya=t(37),wa=t(92),ka=t(93),Ea=H.a.mark(Ca);function Ca(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.a)([Wn(),xe(),Bt(),wr(),Qe()]);case 2:case"end":return e.stop()}}),Ea)}var Sa=Object(ya.combineReducers)({auth:et,loading:te,user:Ie,write:Zt,post:Wr,posts:nn}),Ia=Object(ka.a)(),Ta=Object(ya.createStore)(Sa,Object(wa.composeWithDevTools)(Object(ya.applyMiddleware)(Ia)));Ia.run(Ca),function(){try{var e=localStorage.getItem("user");if(!e)return;Ta.dispatch(Oe(e)),Ta.dispatch(pe())}catch(n){console.log("localStorage is not working")}}(),f.a.render(Object(E.jsx)(x.a,{store:Ta,children:Object(E.jsx)(I.a,{children:Object(E.jsx)(dt.b,{children:Object(E.jsx)(va,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},99:function(e,n,t){}},[[145,1,2]]]);
//# sourceMappingURL=main.6d2a1a09.chunk.js.map