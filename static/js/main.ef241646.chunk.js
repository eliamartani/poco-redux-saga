(this["webpackJsonppoco-redux-saga"]=this["webpackJsonppoco-redux-saga"]||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/refresh.96fb8799.svg"},32:function(e,t,n){e.exports=n(62)},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),o=n.n(c),u=n(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i="cat/FETCH_CAT",s="cat/FETCH_CAT_ERROR",l="cat/RECEIVE_CAT_SUCCESS",d="cat/RECEIVE_CAT_FAILURE",p=function(e){return{type:l,data:e}},f=function(e){return{type:d,data:e}},v=n(10),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.cat;return t},m=Object(v.a)(b,(function(e){var t=e.data;return void 0===t?{}:t})),h=Object(v.a)(b,(function(e){return e.loading})),g=(Object(v.a)(b,(function(e){var t=e.error;return void 0===t?"":t})),Object(v.a)(m,(function(e){var t=e.url;return void 0===t?"":t}))),O=n(28),j=n.n(O),x=Object(u.b)((function(e){return{loading:h(e),src:g(e)}}),{onLoadCat:function(){return{type:i}}})((function(e){var t=e.loading,n=e.error,c=e.onLoadCat,o=e.src;return Object(a.useEffect)((function(){c()}),[c]),r.a.createElement("div",{className:"App"},t&&r.a.createElement("div",null,"Loading..."),!t&&n,!t&&!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:c,"aria-label":"Load Cat"},r.a.createElement("img",{alt:"Load Cat",src:j.a})),r.a.createElement("img",{src:o,alt:"Cat pic"})))})),E=function(){return r.a.createElement("div",null,r.a.createElement(x,null))},w=n(5),C=n.n(w),k=n(31),y=n(7),T=n(9),_=n(14),A={data:{},error:null,loading:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.data,r=t.error;switch(n){case i:case s:return Object(_.a)({},e,{error:null,loading:!0});case l:return Object(_.a)({},e,{data:a,error:null,loading:!1});case d:return Object(_.a)({},e,{data:{},error:r,loading:!1});default:return e}},R=n(29),F=n(30),I=n.n(F),S=function(){var e=Object(R.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=C.a.mark(V),H=C.a.mark(W),J=C.a.mark(N),U=C.a.mark($);function V(){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.b)(S,"https://api.thecatapi.com/v1/images/search");case 3:return e=t.sent,t.next=6,Object(y.d)(p(e.data[0]));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(y.d)(f(t.t0));case 12:case"end":return t.stop()}}),B,null,[[0,8]])}function W(){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.c)(1e3);case 3:return t.next=5,Object(y.b)(S,"https://api.thecatapi.com/v1/images");case 5:return e=t.sent,t.next=8,Object(y.d)(p(e.data[0]));case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(y.d)(f("There was a problem fetching a cat."));case 14:case"end":return t.stop()}}),H,null,[[0,10]])}function N(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(i,V);case 2:case"end":return e.stop()}}),J)}function $(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(s,W);case 2:case"end":return e.stop()}}),U)}var q=C.a.mark(z);function z(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([N(),$()]);case 2:case"end":return e.stop()}}),q)}var D=Object(k.a)(),G=Object(T.c)({cat:L}),K=Object(T.d)(Object(T.a)(D)),M=Object(T.e)(G,K);D.run(z);n(61);o.a.render(r.a.createElement(u.a,{store:M},r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.ef241646.chunk.js.map