(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-artifact"],{"1e56":function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("ac1f"),e("5319"),e("14d9"),e("4e82");var n=e("e194"),r=i(e("d37b")),s=e("a24b"),c=i(e("7d5b")),o={data:function(){return{textMap:{},book:{default:{weapons:[],artifacts:[]}},ImageUrl:{},index:3,artifacts:[],artifactsData:{},ids:[],character:{}}},onLoad:function(t){this.ImageUrl=r.default,this.textMap=c.default;var a=this.$store.getters.character;this.character=a;var e=s.bookData[a.name];e&&(this.book=e);var i=this.$store.state.preset;if(i.school&&i.school.id){var o=i.school.id.replace("-","");this.book[o]?this.ids=this.book[o].artifacts:this.ids=this.book.default.artifacts}else this.ids=this.book.default.artifacts;this.index=t.index,this.artifactsData=n.artifactsData;var u=[];for(var f in n.artifactsData)u.push(n.artifactsData[f]);u.sort((function(t,a){return a.date-t.date})),this.artifacts=u},methods:{select:function(t){var a={};a=t||{index:this.index},a.index=this.index,uni.$emit("artifactChanged",a),uni.navigateBack({delta:1})}}};a.default=o},3447:function(t,a,e){"use strict";e.r(a);var i=e("6d66"),n=e("cf70");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);var s=e("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"156f2ff4",null,!1,i["a"],void 0);a["default"]=c.exports},"6d66":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var i={uniList:e("add1").default,uniSection:e("89d3").default,uniListItem:e("6e18").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-list",{attrs:{border:!1}},[t.ids[0]?e("uni-section",{attrs:{title:"推荐",type:"line"}},t._l(t.ids,(function(a,i){return t.artifactsData[a]?e("uni-list-item",{key:i,attrs:{title:t.textMap[a],clickable:!0,thumb:t.ImageUrl[a],"thumb-size":"lg",note:t.book.aNotes?t.book.aNotes[a]:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.select(t.artifactsData[a])}}}):t._e()})),1):t._e(),e("uni-section",{attrs:{title:"所有",type:"line"}},t._l(t.artifacts,(function(a,i){return e("uni-list-item",{key:i,attrs:{title:t.textMap[a.name],clickable:!0,thumb:t.ImageUrl[a.name],"thumb-size":"lg"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.select(a)}}})})),1)],1)],1)},r=[]},cf70:function(t,a,e){"use strict";e.r(a);var i=e("1e56"),n=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a}}]);