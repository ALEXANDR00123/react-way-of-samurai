(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[0],{112:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},114:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(208),u=n.n(c);t.a=function(){return a.a.createElement("div",{style:{backgroundColor:"white"}},a.a.createElement("img",{src:u.a}))}},126:function(e,t,n){e.exports={paginator:"Paginator_paginator__3XTp-",pageNumber:"Paginator_pageNumber__3ZLKa",selectedPage:"Paginator_selectedPage__18w4-"}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"g",(function(){return S})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return O}));var r=n(11),a=n.n(r),c=n(27),u=n(56),o=n(1),i=n(67),l=n(24),s=function(e){return l.c.get("profile/"+e).then((function(e){return e.data}))},f=function(e){return l.c.get("profile/status/"+e).then((function(e){return e.data}))},d=function(e){return l.c.put("profile/status",{status:e}).then((function(e){return e.data}))},m=function(e){var t=new FormData;return t.append("image",e),l.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},p=function(e){return l.c.put("profile",e).then((function(e){return e.data}))},E={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},h={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:r=t.sent,n(h.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:r=t.sent,n(h.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e);case 3:0===t.sent.resultCode&&n(h.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:0===(r=t.sent).resultCode&&n(h.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,p(e);case 3:if(0!==(u=t.sent).resultCode){t.next=12;break}if(null==c){t.next=9;break}n(g(c)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(i.a)("edit-profile",{_error:u.messages[0]})),t.abrupt("return",Promise.reject(u.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n])});case"SN/PROFILE/SET_STATUS":return Object(o.a)({},e,{status:t.status});case"SN/PROFILE/SET_USER_PROFILE":return Object(o.a)({},e,{profile:t.profile});case"SN/PROFILE/DELETE_POST":return Object(o.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(o.a)({},e,{profile:Object(o.a)({},e.profile,{photos:t.photos})});default:return e}}},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(56),a=n(1),c={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u={sendMessage:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},194:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},202:function(e,t,n){"use strict";n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return T})),n.d(t,"b",(function(){return U}));var r=n(73),a=n.n(r),c=n(125),u=n(159),o=n(59),i={"messages-received":[],"status-changed":[]},l=null,s=function(){E("pending"),setTimeout(h,3e3)},f=function(e){var t=JSON.parse(e.data);i["messages-received"].forEach((function(e){return e(t)}))},d=function(){E("ready")},m=function(){E("error"),console.error("REFRESH PAGE")},p=function(){var e,t,n,r;null===(e=l)||void 0===e||e.removeEventListener("close",s),null===(t=l)||void 0===t||t.removeEventListener("message",f),null===(n=l)||void 0===n||n.removeEventListener("open",d),null===(r=l)||void 0===r||r.removeEventListener("error",m)},E=function(e){i["status-changed"].forEach((function(t){return t(e)}))};function h(){var e;p(),null===(e=l)||void 0===e||e.close(),l=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),E("pending"),l.addEventListener("close",s),l.addEventListener("message",f),l.addEventListener("open",d),l.addEventListener("error",m)}var g=function(){h()},v=function(){var e;i["messages-received"]=[],i["status-changed"]=[],p(),null===(e=l)||void 0===e||e.close()},S=function(e,t){return i[e].push(t),function(){i[e]=i[e].filter((function(e){return e!==t}))}},b=function(e,t){i[e]=i[e].filter((function(e){return e!==t}))},O=function(e){var t;null===(t=l)||void 0===t||t.send(e)},y=n(419),w={messages:[],status:"pending"},j=function(e){return{type:"SN/chat/MESSAGES_RECEVIED",payload:{messages:e}}},_=function(e){return{type:"SN/chat/STATUS_CHANGED",payload:{status:e}}},P=null,I=function(e){return null===P&&(P=function(t){e(j(t))}),P},C=null,k=function(e){return null===C&&(C=function(t){e(_(t))}),C},N=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(),S("messages-received",I(t)),S("status-changed",k(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b("messages-received",I(t)),b("status-changed",k(t)),v();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/chat/MESSAGES_RECEVIED":return Object(o.a)({},e,{messages:[].concat(Object(u.a)(e.messages),Object(u.a)(t.payload.messages.map((function(e){return Object(o.a)({},e,{id:Object(y.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"SN/chat/STATUS_CHANGED":return Object(o.a)({},e,{status:t.payload.status});default:return e}}},208:function(e,t,n){e.exports=n.p+"static/media/preloader.6e7c9db7.svg"},214:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3KF9d"}},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r,a,c=n(207),u=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4c2a720a-b6c7-4460-83f3-bfe52edab881"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},258:function(e,t,n){e.exports=n(414)},263:function(e,t,n){},264:function(e,t,n){},414:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),c=n(16),u=n.n(c),o=(n(263),n(203)),i=n(204),l=n(225),s=n(228),f=(n(264),n(265),n(38)),d=n(17),m=n(200),p=n(57),E=n(112),h=n(13),g=n(11),v=n.n(g),S=n(27),b=n(1),O=n(24),y=n(67),w=function(){return O.c.get("auth/me").then((function(e){return e.data}))},j=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return O.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},_=function(){return O.c.delete("auth/login")},P=function(){return O.c.get("security/get-captcha-url").then((function(e){return e.data}))},I={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},C=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},k=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},N=function(){return function(){var e=Object(S.a)(v.a.mark((function e(t){var n,r,a,c,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:(n=e.sent).resultCode===O.b.Success&&(r=n.data,a=r.id,c=r.login,u=r.email,t(C(a,u,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(S.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,r=n.url,t(k(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(b.a)({},e,{},t.payload);default:return e}},R=n(91),A=n.n(R),L=Object(m.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(p.c)("Email","email",[E.b],p.a),Object(p.c)("Password","password",[E.b],p.a,{type:"password"}),Object(p.c)(void 0,"rememberMe",[],p.a,{type:"checkbox"},"remember me"),r&&a.a.createElement("img",{src:r}),r&&Object(p.c)("Symbols from image","captcha",[E.b],p.a,{}),n&&a.a.createElement("div",{className:A.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),x=function(){var e=Object(h.d)((function(e){return e.auth.captchaUrl})),t=Object(h.d)((function(e){return e.auth.isAuth})),n=Object(h.c)();return t?a.a.createElement(d.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(L,{onSubmit:function(e){var t,r,a,c;n((t=e.email,r=e.password,a=e.rememberMe,c=e.captcha,function(){var e=Object(S.a)(v.a.mark((function e(n){var u,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t,r,a,c);case 2:(u=e.sent).resultCode===O.b.Success?n(N()):(u.resultCode===O.a.CaptchaIsRequired&&n(T()),o=u.messages.length>0?u.messages[0]:"Some error",n(Object(y.a)("login",{_error:o})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e}))},F=n(15),D={initialized:!1},G=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(b.a)({},e,{initialized:!0});default:return e}},H=n(114),z=n(160),V=n(192),W={},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;arguments.length>1&&arguments[1];return e},K=n(56),q=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(b.a)({},e,{},r):e}))},X={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return O.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return O.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return O.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},Y={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},J=function(e){return{type:"SN/USERS/SET_USERS",users:e}},Z=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},$=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},Q=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},ee=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},te=function(e,t,n){return function(){var r=Object(S.a)(v.a.mark((function r(a,c){var u;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(ee(!0)),a(Z(e)),a($(n)),r.next=5,X.getUsers(e,t,n.term,n.friend);case 5:u=r.sent,a(ee(!1)),a(J(u.items)),a(Q(u.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(b.a)({},e,{users:q(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(b.a)({},e,{users:q(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(b.a)({},e,{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(b.a)({},e,{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(b.a)({},e,{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(b.a)({},e,{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(b.a)({},e,{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(b.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(K.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},re=n(210),ae=n(201),ce=n(202),ue=Object(F.c)({profilePage:z.b,dialogsPage:V.b,sidebar:B,usersPage:ne,auth:U,form:ae.a,app:M,chat:ce.a}),oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,ie=Object(F.e)(ue,oe(Object(F.a)(re.a)));window.__store__=ie;var le=ie;function se(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"loading...")},a.a.createElement(e,t))}}var fe=n(211),de=Object(fe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),me=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},Ee=function(e){return e.usersPage.currentPage},he=function(e){return e.usersPage.isFetching},ge=function(e){return e.usersPage.followingInProgress},ve=function(e){return e.usersPage.filter},Se=n(59),be=n(10),Oe=n(9),ye=n(126),we=n.n(ye),je=n(5),_e=n.n(je),Pe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,u=void 0===c?1:c,o=e.onPageChanged,i=void 0===o?function(e){return e}:o,l=e.portionSize,s=void 0===l?10:l,f=Math.ceil(t/n),d=[],m=1;m<=f;m++)d.push(m);var p=Math.ceil(f/s),E=Object(r.useState)(1),h=Object(Oe.a)(E,2),g=h[0],v=h[1],S=(g-1)*s+1,b=g*s;return a.a.createElement("div",{className:_e()(we.a.paginator)},g>1&&a.a.createElement("button",{onClick:function(){v(g-1)}},"PREV"),d.filter((function(e){return e>=S&&e<=b})).map((function(e){return a.a.createElement("span",{className:_e()(Object(be.a)({},we.a.selectedPage,u===e),we.a.pageNumber),key:e,onClick:function(t){i(e)}},e)})),p>g&&a.a.createElement("button",{onClick:function(){v(g+1)}},"NEXT"))},Ie=n(214),Ce=n.n(Ie),ke=n(194),Ne=n.n(ke),Te=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(f.c,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Ne.a,className:Ce.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},Ue=n(103),Re=function(e){return{}},Ae=a.a.memo((function(e){var t=Object(h.d)(ve);return a.a.createElement("div",null,a.a.createElement(Ue.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:Re,onSubmit:function(t,n){var r=n.setSubmitting,a={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(a),r(!1)}},(function(e){var t=e.isSubmitting;return a.a.createElement(Ue.b,null,a.a.createElement(Ue.a,{type:"text",name:"term"}),a.a.createElement(Ue.a,{name:"friend",as:"select"},a.a.createElement("option",{value:"null"},"All"),a.a.createElement("option",{value:"true"},"Only followed"),a.a.createElement("option",{value:"false"},"Only unfollowed")),a.a.createElement("button",{type:"submit",disabled:t},"Find"))})))})),Le=n(154),xe=function(e){var t=Object(h.d)(de),n=Object(h.d)(pe),c=Object(h.d)(Ee),u=Object(h.d)(me),o=Object(h.d)(ve),i=Object(h.d)(ge),l=Object(h.c)(),s=Object(d.g)();Object(r.useEffect)((function(){var e=Le.parse(s.location.search.substr(1)),t=c,n=o;switch(e.page&&(t=Number(e.page)),e.term&&(n=Object(Se.a)({},n,{term:e.term})),e.friend){case"null":n=Object(Se.a)({},n,{friend:null});break;case"true":n=Object(Se.a)({},n,{friend:!0});break;case"false":n=Object(Se.a)({},n,{friend:!1})}l(te(t,u,n))}),[]),Object(r.useEffect)((function(){var e={};o.term&&(e.term=o.term),null!==o.friend&&(e.friend=String(o.friend)),1!==c&&(e.page=String(c)),s.push({pathname:"/developers",search:Le.stringify(e)})}),[o,c]);var f=function e(t){l(e(t))},m=function e(t){l(e(t))};return a.a.createElement("div",null,a.a.createElement(Ae,{onFilterChanged:function(e){l(te(1,u,e))}}),a.a.createElement(Pe,{currentPage:c,onPageChanged:function(e){l(te(e,u,o))},totalItemsCount:n,pageSize:u}),a.a.createElement("div",null,t.map((function(e){return a.a.createElement(Te,{user:e,followingInProgress:i,key:e.id,unfollow:m,follow:f})}))))},Fe=function(e){var t=Object(h.d)(he);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,e.pageTitle),t?a.a.createElement(H.a,null):null,a.a.createElement(xe,null))},De=n(158),Ge=n(416),Me=n(418),He=n(422),ze=n(423),Ve=n(424),We=n(420),Be=n(421),Ke=n(417),qe=n(128),Xe=function(e){return e.auth.isAuth},Ye=function(e){return e.auth.login},Je=function(e){var t=Object(h.d)(Xe),n=Object(h.d)(Ye),r=Object(h.c)(),c=Ge.a.Header;return a.a.createElement(c,{className:"header"},a.a.createElement(We.a,null,a.a.createElement(Be.a,{span:18},a.a.createElement(De.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},a.a.createElement(De.a.Item,{key:"1"},a.a.createElement(f.b,{to:"/developers"},"Developers")))),t?a.a.createElement(a.a.Fragment,null," ",a.a.createElement(Be.a,{span:1},a.a.createElement(Ke.a,{alt:n||"",style:{backgroundColor:"#87d068"},icon:a.a.createElement(He.a,null)})),a.a.createElement(Be.a,{span:5},a.a.createElement(qe.a,{onClick:function(){r(function(){var e=Object(S.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:0===e.sent.data.resultCode&&t(C(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log out"))):a.a.createElement(Be.a,{span:6},a.a.createElement(qe.a,null,a.a.createElement(f.b,{to:"/login"},"Login")))))},Ze=De.a.SubMenu,$e=Ge.a.Content,Qe=Ge.a.Footer,et=Ge.a.Sider,tt=a.a.lazy((function(){return n.e(4).then(n.bind(null,430))})),nt=a.a.lazy((function(){return n.e(3).then(n.bind(null,429))})),rt=a.a.lazy((function(){return n.e(5).then(n.bind(null,431))})),at=se(tt),ct=se(nt),ut=se(rt),ot=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("Some error occured")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement(Ge.a,null,a.a.createElement(Je,null),a.a.createElement($e,{style:{padding:"0 50px"}},a.a.createElement(Me.a,{style:{margin:"16px 0"}},a.a.createElement(Me.a.Item,null,"Home"),a.a.createElement(Me.a.Item,null,"List"),a.a.createElement(Me.a.Item,null,"App")),a.a.createElement(Ge.a,{className:"site-layout-background",style:{padding:"24px 0"}},a.a.createElement(et,{className:"site-layout-background",width:200},a.a.createElement(De.a,{mode:"inline",style:{height:"100%"}},a.a.createElement(Ze,{key:"sub1",icon:a.a.createElement(He.a,null),title:"My Profile"},a.a.createElement(De.a.Item,{key:"1"}," ",a.a.createElement(f.b,{to:"/profile"},"Profile")),a.a.createElement(De.a.Item,{key:"2"}," ",a.a.createElement(f.b,{to:"/dialogs"},"Messages")),a.a.createElement(De.a.Item,{key:"3"},"option3"),a.a.createElement(De.a.Item,{key:"4"},"option4")),a.a.createElement(Ze,{key:"sub2",icon:a.a.createElement(ze.a,null),title:"Developers"},a.a.createElement(De.a.Item,{key:"5"},a.a.createElement(f.b,{to:"/developers"},"Developers")),a.a.createElement(De.a.Item,{key:"6"},"option6"),a.a.createElement(De.a.Item,{key:"7"},"option7"),a.a.createElement(De.a.Item,{key:"8"},"option8")),a.a.createElement(Ze,{key:"sub3",icon:a.a.createElement(Ve.a,null),title:"subnav 3"},a.a.createElement(De.a.Item,{key:"9"},a.a.createElement(f.b,{to:"/chat"},"Chat")),a.a.createElement(De.a.Item,{key:"10"},"option10"),a.a.createElement(De.a.Item,{key:"11"},"option11"),a.a.createElement(De.a.Item,{key:"12"},"option12")))),a.a.createElement($e,{style:{padding:"0 24px",minHeight:280}},a.a.createElement(d.d,null,a.a.createElement(d.b,{exact:!0,path:"/",render:function(){return a.a.createElement(d.a,{to:"/profile"})}}),a.a.createElement(d.b,{path:"/dialogs",render:function(){return a.a.createElement(at,null)}}),a.a.createElement(d.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(ct,null)}}),a.a.createElement(d.b,{path:"/developers",render:function(){return a.a.createElement(Fe,{pageTitle:"\u0421\u0430\u043c\u0443\u0440\u0430\u0438"})}}),a.a.createElement(d.b,{path:"/login",render:function(){return a.a.createElement(x,null)}}),a.a.createElement(d.b,{path:"/chat",render:function(){return a.a.createElement(ut,null)}}),a.a.createElement(d.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}}))))),a.a.createElement(Qe,{style:{textAlign:"center"}},"Samurai Social Network \xa92020 Created by IT-KAMASUTRA")):a.a.createElement(H.a,null)}}]),n}(r.Component),it=Object(F.d)(d.h,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(N());Promise.all([t]).then((function(){e(G())}))}}}))(ot),lt=function(){return a.a.createElement(f.a,null,a.a.createElement(h.a,{store:le},a.a.createElement(it,null)))};u.a.render(a.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d}));var r=n(30),a=n(0),c=n.n(a),u=n(91),o=n.n(u),i=n(146),l=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return c.a.createElement("div",{className:o.a.formControl+" "+(u?o.a.error:"")},c.a.createElement("div",null,a),u&&c.a.createElement("span",null,r))},s=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(l,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(l,e,c.a.createElement("input",Object.assign({},t,n)))};function d(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},91:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1w5-L",error:"FormsControls_error__H6nuI",formSummaryError:"FormsControls_formSummaryError__2iG6H"}}},[[258,1,2]]]);
//# sourceMappingURL=main.d2b99a8b.chunk.js.map