(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-weapon"],{"132d":function(n,t,e){"use strict";var a=e("733a"),i=e.n(a);i.a},4771:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={uniList:e("add1").default,uniSection:e("89d3").default,uniListItem:e("6e18").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("uni-list",{attrs:{border:!1}},[n.ids[0]?e("uni-section",{attrs:{title:"推荐",type:"line"}},n._l(n.ids,(function(t,a){return n.weaponsData[t]?e("uni-list-item",{key:a,attrs:{title:n.textMap[t],clickable:!0,thumb:n.ImageUrl[t],"thumb-size":"lg",note:n.book.wNotes?n.book.wNotes[t]:""},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.select(n.weaponsData[t])}}}):n._e()})),1):n._e(),e("uni-section",{attrs:{title:"其他",type:"line"}},n._l(n.weapons,(function(t,a){return e("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:n.ids.indexOf(t.name)<0,expression:"ids.indexOf(weapon.name) < 0"}],key:a,attrs:{title:n.textMap[t.name],clickable:!0,thumb:n.ImageUrl[t.name],"thumb-size":"lg"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.select(t)}}})})),1)],1)],1)},o=[]},"733a":function(n,t,e){var a=e("f61b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("f70b86d2",a,!0,{sourceMap:!1,shadowMode:!1})},"91b6":function(n,t,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("ac1f"),e("5319");var i=e("0d89"),o=a(e("d37b")),s=e("a24b"),r=a(e("7d5b")),u={data:function(){return{textMap:{},book:{default:{weapons:[],artifacts:[]}},ImageUrl:{},ids:[],weapons:[],weaponsData:[]}},onLoad:function(){this.textMap=r.default,this.weaponsData=i.weaponsData,this.ImageUrl=o.default;var n=this.$store.getters.character;this.character=n;var t=s.bookData[n.name];t&&(this.book=t),this.weapons=i.weaponsByType[n.weapon];var e=this.$store.state.preset;if(e.school&&e.school.id){var a=e.school.id.replace("-","");this.book[a]?this.ids=this.book[a].weapons:this.ids=this.book.default.weapons}else this.ids=this.book.default.weapons},methods:{select:function(n){uni.$emit("weaponChanged",n),uni.navigateBack({delta:1})}}};t.default=u},9740:function(n,t,e){"use strict";e.r(t);var a=e("91b6"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},b46b:function(n,t,e){"use strict";e.r(t);var a=e("4771"),i=e("9740");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("132d");var s=e("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"76f16d34",null,!1,a["a"],void 0);t["default"]=r.exports},f61b:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* \t.js {\n\twidth: 25%;\n\tbackground-color: rgb(101,169,227);\n}\n\n.js2 {\n\twidth: 5%;\n\tbackground-color: rgb(106,99,171);\n}\n\n\n.skills {\nfont-size: 14px;\n  text-align: right;\n  padding-right: 20px;\n  line-height: 40px;\n  color: white;\n} */",""]),n.exports=t}}]);