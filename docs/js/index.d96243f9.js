(function(e){function t(t){for(var a,l,i=t[0],u=t[1],o=t[2],d=0,f=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={index:0},c=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/server-search-cascader/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var s=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c31f")},"4c21":function(e,t,n){"use strict";n("86af")},"4c72":function(e,t,n){},"4e55":function(e,t,n){},"83f0":function(e,t,n){"use strict";n("4c72")},"86af":function(e,t,n){},a346:function(e,t,n){"use strict";n("4e55")},a7bb:function(e,t,n){"use strict";n("cb0d")},c31f:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=(n("e9c4"),n("bc3a")),c=n.n(r),l={class:"app"},i=Object(a["g"])(" 拿到结果： "),u={setup:function(e){var t=Object(a["p"])(null),n={label:"name",value:"id",children:"children",fullPath:"fullPath"},r=function(e){console.log("拿到结果",e)};return function(e,c){var u=Object(a["r"])("server-search-cascader");return Object(a["m"])(),Object(a["e"])("div",l,[Object(a["h"])(u,{api:"/getTeachers",modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=function(e){return t.value=e}),"field-names":n,onChange:r},null,8,["modelValue"]),Object(a["f"])("div",null,[i,Object(a["f"])("code",null,Object(a["s"])(JSON.stringify(t.value)),1)])])}}},o=(n("a346"),n("6b0d")),s=n.n(o);const d=s()(u,[["__scopeId","data-v-32efde18"]]);var f=d,A=(n("b0c0"),n("d3b7"),n("159b"),n("96eb")),p=n.n(A),b=n("2ef0"),v=n.n(b),m=n("b85c"),g=n("2909"),O=(n("99af"),[{id:"org1",name:"机构1",children:[{id:"org1-part1",name:"机构1-部门1",children:[{id:"org1-part1-zhaoyi",name:"赵一"},{id:"org1-part1-zhaoer",name:"赵二"},{id:"org1-part1-zhaosan",name:"赵三"}]},{id:"org1-part2",name:"机构1-部门2",children:[{id:"org1-part2-qianyi",name:"钱一"},{id:"org1-part2-qianer",name:"钱二"},{id:"org1-part2-qiansan",name:"钱三"}]},{id:"org1-part3",name:"机构1-部门3",children:[{id:"org1-part3-sunyi",name:"孙一"},{id:"org1-part3-suner",name:"孙二",isLast:!0},{id:"org1-part3-sunsan",name:"孙三"}]}]},{id:"org2",name:"机构2",children:[{id:"org2-part1",name:"机构2-部门1",children:[{id:"org2-part1-liyi",name:"李一"},{id:"org2-part1-lier",name:"李二"},{id:"org2-part1-lisan",name:"李三"}]},{id:"org2-part2",name:"机构2-部门2",children:[{id:"org2-part2-zhouyi",name:"周一"},{id:"org2-part2-zhouer",name:"周二"},{id:"org2-part2-zhousan",name:"周三"}]},{id:"org2-part3",name:"机构2-部门3",children:[{id:"org2-part3-wuyi",name:"吴一"},{id:"org2-part3-wuer",name:"吴二"},{id:"org2-part3-wusan",name:"吴三"}]}]},{id:"org3",name:"机构3",children:[{id:"org3-part1",name:"机构3-部门1",children:[{id:"org3-part1-zhengyi",name:"郑一"},{id:"org3-part1-zhenger",name:"郑二"},{id:"org3-part1-zhengsan",name:"郑三"}]},{id:"org3-part2",name:"机构3-部门2",children:[{id:"org3-part2-wangyi",name:"王一"},{id:"org3-part2-wanger",name:"周二"},{id:"org3-part2-wangsan",name:"王三 "}]},{id:"org3-part3",name:"机构3-部门3",children:[{id:"org3-part3-fengyi",name:"冯一"},{id:"org3-part3-fenger",name:"冯二"},{id:"org3-part3-fengsan",name:"冯三 "}]}]}]),h=function(){var e=function(e,t){var n=v.a.cloneDeep(t);return delete n.children,t.fullPath=e?[].concat(Object(g["a"])(e.fullPath),[n]):[n],t},t=function t(n,a){var r,c=Object(m["a"])(a);try{for(c.s();!(r=c.n()).done;){var l=r.value,i=e(n,l);i.children&&t(i,i.children)}}catch(u){c.e(u)}finally{c.f()}},n=v.a.cloneDeep(O);return t(null,n),n},j=h(),y=j,N=function(e){var t=null,n=function n(a){var r,c=Object(m["a"])(a);try{for(c.s();!(r=c.n()).done;){var l=r.value;if(l.id===e)return t=l,!1;l.children&&n(l.children)}}catch(i){c.e(i)}finally{c.f()}};return n(y),t},w=function(e){var t=null,n=function n(a,r){var c,l=Object(m["a"])(r);try{for(l.s();!(c=l.n()).done;){var i=c.value;if(i.name===e)return t=i,!1;i.children&&n(i,i.children)}}catch(u){l.e(u)}finally{l.f()}};return n(null,y),t?[t]:null};p.a.setup({timeout:"1000-2000"}),p.a.mock("/getTeachers",(function(e){var t=JSON.parse(e.body);if(t.name)return w(t.name);var n=[];return n="0"===t.id?{id:"0",name:"root",children:v.a.cloneDeep(y)}:v.a.cloneDeep(N(null===t||void 0===t?void 0:t.id)),n.hasOwnProperty("children")&&n.children.forEach((function(e){delete e.children})),n}));n("a15b"),n("d81d");var E=n("ade3"),I=n("1da1"),k=(n("96cf"),n("fb6a"),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAA4CAYAAACxDdW4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALiSURBVHhe7ZmJisIwFEX7/3+o4oaKKCLuu2Y4YqQjafPaJp3UyYXLDM40772TtTFRUVZFSAJFSAJFSAJFSAI5h3Q6ndRisfBqYtQpp5Cm06nq9XpqPp8bi3Nh2iYGseqSM0gUMBgM1P1+f33iT8QgFjHrkBNI6/VadToddblcXp/4F1OOmMT2rcqQ9vv9M9m61wmkQZGDT1WCpJPcbrevT+qXHsU+O6k0JNaFuoa7TRqUr/WwFCS9cLLThCJy8bVxlII0Go1q3YKlIidyc63CkEiEHgtV5Oa6AwtB8jmkXUkvBS7PUGJIf3EWKitydLmpiCCxxfveZl3L5RnKCimEs1BZuepcK6R2u60mk8n7BVNinyOOkWGKmWVyp4YqskJqtVpqNpuJTVK+Rh4bB/kQwxQ7yzxTRSJILIRFvNlsntcZLsWuRS60bYqZ5yAh4W6363Ta6RdpUyybg4U0HA6dvp0zfWnTFMvmYCG5fnWhLWyKZXOwkFg7eHa5XKrD4VDJtMFU43dTLJuDhYRXq9VzilT1eDxWu93OGEPioCGF4ghJ4AhJ4AhJ4AhJ4AhJ4AhJ4AhJ4AhJYC+QHo+Hut1u7wCfQZtmXQM1UVtRvSFpMOfz+fmOxBs8/hZIuh5qo8br9SoGlnCZRUPH4/HdUNrfBiltaubvtq/IEi7GTA1ofzMkbRjkgUpMD6VNABoxBW+CyZ1rFlNtaeeBskLimoL7HFMCTTC5U4Optk9nrVFWSHwL2u/3K93n/JXJmdypwVRb2qxPWbKuSZjLMy72mXpNMjmTu6mmtGHAzp6lhCHGdpi1u6VNjzB8m2Dp6JEcBX6dk3iAM4QEWFNNbYXPSa+fv8TD+sTNUEwfLptmcqcGaql84s4TDbM9Qp9gerSFBI9c9CghR3Il5zJQPiWClCcNkF5KQ8T0IIlroEWg6v/Xz9OWbldDIKYrEHmqDOk/KEISKEISKEISKEISKEISKEKySqkfdWvgzPI1v2IAAAAASUVORK5CYII="),S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAa5JREFUaEPtltFKAzEQRWf6SZntp/igoKAoKCgoKCgobVFQUFBQUFAUFPTBT+lOPqkjFQKyNHSzkyCF6WszN/fcOzRFWPAPLrh/MID/btAasAaUCdgKKQNUj1sD6giVAtaAMkD1uDWgjlApYA0oA1SPJzfAzAMiGqlvbgiMx+Nhv98fpuomAUwv6fV6A0S8cM6dpV4WO++9PxeR08lkMkqFaA0QzAcTiHjlnDvRQnjvL0XkOOikQrQGmF7QhACAGyI66grBzNcAcNjV/HQuCSACcUdEB6kQzHwLAPsa850AIhAPRLTXFoKZ7wFgV2u+M8AsCBF5qqpqZx5EXdePiLidw7wKIALxUlXVVgyirutnRNzMZV4NEFmnNyLaaEIw8ysArOc0nwUgAvFBRGvBLDO/A8BqbvPZAGZBIOKXc27Fe/8pIsslzGcFiEB8i8hSKfPZASLr9Os/9YWd92sWvk9+yNoIN1/sUuaLNBAAA0RJ80UBwjql/rts0/DfM0VWKNWE5rwBaNLLMWsN5EhRo2ENaNLLMWsN5EhRo2ENaNLLMWsN5EhRo2ENaNLLMfsDGtvBMUB5Km8AAAAASUVORK5CYII=",C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAixJREFUWEftVrFuE0EQndnbFkQLEgUgJRLQJQ1Ctm/WLZSkoYXkA6CBhtBAAx9AoKWBElrvnm0hGtJhpEQiKSJBG5n2vIMW3VnJeffuEiOdi1y5s/vm7cy72YfQ8IcN54czAieqQL/fv2Kt7QLAfWa+hIgXXQuZ+Tci/gKA90KIXqfT2a/b2loEtNYrQoh1Zl6vA4yIW9baLaXUdtX+SgJa6yeI+KIKyBdn5qdKqZdlZ0sJ9Hq9TSHEs9Mkz89Ya593u93NEEaQQJIk95j5wzzJ87OIuBbH8UcflpeA6zkifvsfyXMMZl71acJLIEmSNwHBOVFdA4ALAXKHAPATAFaKcSfMOI43ZtaLC8PhcClN0x1PghER3RwMBtcnk4lrzY3CnlEURWvtdvuHMea7Jw5SyuVWq7V79NxMBYwxjwDglYfAYRRFt10CD4lp8iz2JVClx0T0uoqAAYA4UOJion8izW9eUp0cLiEiKiWgtd5BxKUSAR4j4fYFqjIDwcy7SqnlqgqMAeBcxR8wJeH21bh5DveHiM4vNoFFaEGzIjTGPACAt0UNMPNYSnmrzm+YpulXRDzW6wzvIRG9K9VA9ubveUS4TUSrNQeRG+Mz01AIcbXoFU46ikfMfDlwO2dMxoh44JuCtUexu3njj1FG4tRGxKOfoDFZXEMyHd5zGJMyI5LjV3rCXBONmdKj/cy8wl0AuBOw5Z+llJ+Kb37Zu1KrAhUP01zhMwKNV+AvepVlMJJUNN0AAAAASUVORK5CYII=",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAktJREFUWEfNV+1V1UAUnFQgVqBUIFTAmwrECnhWIFSgVKBWoFQgNvAGKhA7wA6gAj2z527OErNm43vksH9ykmz2zp079yMdGpekPQDvANwBuCDpKyStAbyPY85IXjYembZ1rZsl/QBwEPsNYC3pJQA/Nzgvg9rP4FrOngPgd3HgPck9SSuTMDB0SPJG0jGAIwA3JC9qYEYBSLKnrwF892FB9VUc6NvPJE9Hnl+TXEnyu4+F0XOSH8ZA/AVgQKsptUe3oQHH+47k13xY8RwkPwWoMlwpNCSftwIY0kqS9r55SbIQzWBeP0lm/Tw4pxYC0/4KQPXDf6GJEBr0MwD3AFY5lMPvqiJ0KEx9s9uDjREae500BOCbgcT92wyoB7DZbI66rvu1jdEaWEnOFBvPy5lx6JsEQJLFk4tMEt3/ej72naQyhfOWlK4ZQI65X76ZW82mwEqyQy+KfamOlAw4vb4AuAZwPKeSTRkPhq2FUpTr7GRzJWwxNJEZ9thAbssQLwYgmLAQzbR7iIvZ2WIARhqXMV110U5PjKZWLLalP7x3L8htuz/SAHKKpEayC2OVVBw2qLTNABwLM+Dq1DeZXQOJyuh0L9PxfDENRBicCQ6FRXhphxcFMMbq0wEQzcjtNw2bS63cC7JCPYJ5lltsZQA26n7dz3pLIeg14DR5bPrHhpynI8KlKB/aqQ2lnpBcHXc+Hc0B4CHlYJvxzH9HU9PVo2rA4/lUh20GEM3Ew4R/s/KonRhtMVTT2FwAnutOh39KMXSa7gfAWoT9B28o/5/NXYkeAAAAAElFTkSuQmCC",B=function(e){return Object(a["o"])("data-v-e63669e0"),e=e(),Object(a["n"])(),e},F={key:0,class:"sscd-options-block loading"},J={class:"box"},P=["src"],R=B((function(){return Object(a["f"])("div",null," 加载中",-1)})),U=["onClick"],Q={key:0},M=["src"],V={props:{selected:{type:Object,default:null},api:{type:String},fieldNames:{type:Object}},emits:["onChange"],setup:function(e,t){var n=t.emit,r=e,l=Object(a["p"])([]),i=Object(a["p"])(0),u=function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(t,a,u){var o,s,d,f,A,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("0"!==t[r.fieldNames.value]){for(s=l.value[u],l.value=l.value.slice(0,u+1),d=0;d<s.length;d++)f=s[d],f.active=!1;s[a].active=!0}if(!t.isLast){e.next=4;break}return n("onChange",t),e.abrupt("return",!1);case 4:return t.loading=!0,i.value++,e.next=8,c.a.get(r.api,{data:Object(E["a"])({},r.fieldNames.value,t[r.fieldNames.value])});case 8:if(A=e.sent,p=A.data,t.loading=!1,i.value--,console.log(p),0===i.value){e.next=15;break}return e.abrupt("return",!1);case 15:(null===(o=p[r.fieldNames.children])||void 0===o?void 0:o.length)>0?(r.selected&&r.selected[r.fieldNames.fullPath].length>0&&p[r.fieldNames.children].forEach((function(e){var t=r.selected[r.fieldNames.fullPath].some((function(t){return e[r.fieldNames.value]===t[r.fieldNames.value]}));e.active=t})),l.value=[].concat(Object(g["a"])(l.value),[p[r.fieldNames.children]])):n("onChange",t);case 16:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(a["l"])((function(){u(Object(E["a"])({},r.fieldNames.value,"0"))})),function(e,t){return 0===l.value.length?(Object(a["m"])(),Object(a["e"])("div",F,[Object(a["f"])("div",J,[Object(a["f"])("img",{src:Object(a["t"])(K)},null,8,P),R])])):(Object(a["m"])(!0),Object(a["e"])(a["a"],{key:1},Object(a["q"])(l.value,(function(e,t){return Object(a["m"])(),Object(a["e"])("div",{class:"sscd-options-block",key:t},[(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["q"])(e,(function(e,n){return Object(a["m"])(),Object(a["e"])("div",{class:"sscd-option",key:e[r.fieldNames.value],onClick:function(a){return u(e,n,t)}},[Object(a["x"])(Object(a["f"])("span",{style:{color:"#40a9ff"}},Object(a["s"])(e[r.fieldNames.label]),513),[[a["v"],e.active]]),Object(a["x"])(Object(a["f"])("span",null,Object(a["s"])(e[r.fieldNames.label]),513),[[a["v"],!e.active]]),e.loading?(Object(a["m"])(),Object(a["e"])("span",Q,[Object(a["f"])("img",{src:Object(a["t"])(K),class:"opt-loading"},null,8,M)])):Object(a["d"])("",!0)],8,U)})),128))])})),128))}}};n("83f0");const q=s()(V,[["__scopeId","data-v-e63669e0"]]);var L=q,z=function(e){return Object(a["o"])("data-v-4ee39b64"),e=e(),Object(a["n"])(),e},W={class:"sscd-options-block"},x={key:0,class:"sscd-loading"},T=["src"],X=z((function(){return Object(a["f"])("div",null,"加载中...",-1)})),Y=["onClick"],D={key:1,class:"sscd-nodate"},H=["src"],Z=z((function(){return Object(a["f"])("div",null,"暂无数据",-1)})),G={props:{sscInput:{type:String,default:""},api:{type:String},fieldNames:{type:Object}},emits:["onChange"],setup:function(e,t){var n=t.emit,r=e,l=Object(a["p"])([]),i=Object(a["p"])(!1),u=v.a.throttle(Object(I["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i.value=!0,e.next=3,c.a.get(r.api,{data:Object(E["a"])({},r.fieldNames.label,r.sscInput)});case 3:t=e.sent,n=t.data,i.value=!1,l.value=n,console.log(n);case 8:case"end":return e.stop()}}),e)}))),1e3),o=function(e){n("onChange",e)};return Object(a["w"])((function(){return r.sscInput}),(function(e,t){u()}),{immediate:!0}),function(e,t){var n;return Object(a["m"])(),Object(a["e"])("div",W,[i.value?(Object(a["m"])(),Object(a["e"])("div",x,[Object(a["f"])("img",{src:Object(a["t"])(K)},null,8,T),X])):(Object(a["m"])(),Object(a["e"])(a["a"],{key:1},[(null===(n=l.value)||void 0===n?void 0:n.length)>0?(Object(a["m"])(!0),Object(a["e"])(a["a"],{key:0},Object(a["q"])(l.value,(function(e){return Object(a["m"])(),Object(a["e"])("div",{class:"sscd-option",key:e[r.fieldNames.value],onClick:function(t){return o(e)}},[(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["q"])(e[r.fieldNames.fullPath],(function(t,n){return Object(a["m"])(),Object(a["e"])("span",{key:t[r.fieldNames.value]},Object(a["s"])(t[r.fieldNames.label])+" "+Object(a["s"])(n<e[r.fieldNames.fullPath].length-1?">":""),1)})),128))],8,Y)})),128)):(Object(a["m"])(),Object(a["e"])("div",D,[Object(a["f"])("img",{src:Object(a["t"])(k)},null,8,H),Z]))],64))])}}};n("a7bb");const _=s()(G,[["__scopeId","data-v-4ee39b64"]]);var $=_,ee={class:"server-search-cascader"},te=["placeholder"],ne={class:"ssc-dropdown"},ae=["src"],re=["src"],ce=Object(a["i"])({name:"ServerSearchCascader"});function le(e,t){var n=t.emit,r=e,c=Object(a["p"])(""),l=Object(a["p"])(""),i=Object(a["p"])(null),u=Object(a["p"])(!1),o={focus:function(){u.value=!0},input:function(e){e.target.value}},s=function(e){if("clear"===e)l.value="",n("update:modelValue",null);else{c.value="",l.value=e[r.fieldNames.fullPath].map((function(e){return e[r.fieldNames.label]})).join("/"),u.value=!1,i.value=e;var t=v.a.cloneDeep(e);delete t.loading,delete t.active,n("update:modelValue",t)}n("change",e)},d=function(){l.value="",n("update:modelValue",null)},f=function(e){if(!u.value)return!1;var t=document.querySelector(".ssc-dropdown"),n=t.contains(e.target),a=document.querySelector(".ssc-input"),r=e.target===a;r||n||(u.value=!1)};return Object(a["w"])((function(){return r.modelValue}),(function(e,t){e?(i.value=e,c.value="",l.value=e[r.fieldNames.fullPath].map((function(e){return e[r.fieldNames.label]})).join("/")):(i.value=null,c.value="",l.value="")}),{immediate:!0}),Object(a["l"])((function(){window.addEventListener("click",f)})),Object(a["k"])((function(){window.removeEventListener(f)})),function(e,t){return Object(a["m"])(),Object(a["e"])("div",ee,[Object(a["x"])(Object(a["f"])("input",{class:"ssc-input",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.value=e}),onInput:t[1]||(t[1]=function(){return o.input&&o.input.apply(o,arguments)}),onFocus:t[2]||(t[2]=function(){return o.focus&&o.focus.apply(o,arguments)}),placeholder:l.value},null,40,te),[[a["u"],c.value]]),Object(a["x"])(Object(a["f"])("div",ne,[c.value?(Object(a["m"])(),Object(a["c"])(Object(a["t"])($),{key:0,sscInput:c.value,onOnChange:s,fieldNames:r.fieldNames,api:r.api},null,8,["sscInput","fieldNames","api"])):(Object(a["m"])(),Object(a["c"])(Object(a["t"])(L),{key:1,onOnChange:s,selected:i.value,fieldNames:r.fieldNames,api:r.api},null,8,["selected","fieldNames","api"]))],512),[[a["v"],u.value]]),l.value?(Object(a["m"])(),Object(a["e"])("img",{key:0,src:Object(a["t"])(C),alt:"closeImg",class:"closeImg",onClick:d},null,8,ae)):(Object(a["m"])(),Object(a["e"])("img",{key:1,src:Object(a["t"])(S),alt:"arrowImg",class:Object(a["j"])(["arrowImg",{arrowImgActive:u.value}])},null,10,re))])}}var ie=Object.assign(ce,{props:{api:{type:String,default:null},modelValue:{type:Object,default:null},fieldNames:{type:Object,default:{label:"label",value:"value",children:"children",fullPath:"fullPath"}}},emits:["update:modelValue","change"],setup:le});n("4c21");const ue=s()(ie,[["__scopeId","data-v-7adad7c7"]]);var oe=ue;oe.install=function(e){console.log("Vue",e),e.component(oe.name,oe)};var se=oe,de=Object(a["b"])(f);console.log("app",de),de.use(se).mount("#app")},cb0d:function(e,t,n){}});
//# sourceMappingURL=index.d96243f9.js.map