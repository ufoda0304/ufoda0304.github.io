(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-weapon"],{"0c04":function(t,e,n){var i=n("8012");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("85875dcc",i,!0,{sourceMap:!1,shadowMode:!1})},"0cda":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[t.border?n("v-uni-view",{staticClass:"uni-list--border-top"}):t._e(),t._t("default"),t.border?n("v-uni-view",{staticClass:"uni-list--border-bottom"}):t._e()],2)},o=[]},"10f0":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-e07ee5ea]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-e07ee5ea]{position:relative;z-index:-1}.uni-list--border-top[data-v-e07ee5ea]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-e07ee5ea]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},"118c":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* \t.js {\n\twidth: 25%;\n\tbackground-color: rgb(101,169,227);\n}\n\n.js2 {\n\twidth: 5%;\n\tbackground-color: rgb(106,99,171);\n}\n\n\n.skills {\nfont-size: 14px;\n  text-align: right;\n  padding-right: 20px;\n  line-height: 40px;\n  color: white;\n} */",""]),t.exports=e},"5aaf":function(t,e,n){"use strict";n.r(e);var i=n("8e5f"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"61c6":function(t,e,n){"use strict";var i=n("0c04"),a=n.n(i);a.a},7687:function(t,e,n){"use strict";var i=n("a898"),a=n.n(i);a.a},"7a42":function(t,e,n){"use strict";n.r(e);var i=n("7d0c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"7d0c":function(t,e,n){"use strict";(function(t){n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("6cc0"),a={data:function(){return{ids:[],weapons:[],weaponsData:[]}},onLoad:function(){this.weaponsData=i.weaponsData;var e=this.$store.getters.character;this.weapons=i.weaponsByType[e.weapon];var n=this.$store.state.preset;if(n.school&&n.school.id){var a=n.school.id.replace("-","");e[a]?(t.log(a),this.ids=e[a].weapons):this.ids=e.default.weapons}else this.ids=e.default.weapons},methods:{select:function(t){uni.$emit("weaponChanged",t),uni.navigateBack({delta:1})}}};e.default=a}).call(this,n("5a52")["default"])},8012:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-c5b075ba]{background-color:#fff}.uni-list-item__content[data-v-c5b075ba]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-c5b075ba]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-c5b075ba]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-c5b075ba]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-c5b075ba]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-c5b075ba]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-c5b075ba]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-c5b075ba]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-c5b075ba]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-c5b075ba]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-c5b075ba]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-c5b075ba]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-c5b075ba]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-c5b075ba]{font-size:13px;color:#999}',""]),t.exports=e},"8e5f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=i},"963a":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("a5ea").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?n("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?n("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),n("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?n("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?n("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):t._e()],1),n("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},9734:function(t,e,n){var i=n("10f0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7857526c",i,!0,{sourceMap:!1,shadowMode:!1})},"9ab4":function(t,e,n){"use strict";n.r(e);var i=n("fe7c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a898:function(t,e,n){var i=n("118c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("61f50a78",i,!0,{sourceMap:!1,shadowMode:!1})},b875:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniList:n("eab5").default,uniSection:n("db908").default,uniListItem:n("eced").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-list",[t.ids[0]?n("uni-section",{attrs:{title:"推荐",type:"line"}},t._l(t.ids,(function(e,i){return t.weaponsData[e]?n("uni-list-item",{key:i,attrs:{title:t.weaponsData[e].chs,clickable:!0,thumb:t.weaponsData[e].url,"thumb-size":"lg",rightText:""+t.weaponsData[e].atk},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select(t.weaponsData[e])}}}):t._e()})),1):t._e(),n("uni-section",{attrs:{title:"其他",type:"line"}},t._l(t.weapons,(function(e,i){return n("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.ids.indexOf(e.name)<0,expression:"ids.indexOf(weapon.name) < 0"}],key:i,attrs:{title:e.chs,rightText:""+e.atk,clickable:!0,thumb:e.url,"thumb-size":"lg"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select(e)}}})})),1)],1),n("v-uni-view",{staticStyle:{height:"100px"}})],1)},o=[]},bcb2:function(t,e,n){"use strict";var i=n("9734"),a=n.n(i);a.a},c033:function(t,e,n){"use strict";n.r(e);var i=n("b875"),a=n("7a42");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7687");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"e1c872ac",null,!1,i["a"],r);e["default"]=s.exports},db908:function(t,e,n){"use strict";n.r(e);var i=n("963a"),a=n("9ab4");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("61c6");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"c5b075ba",null,!1,i["a"],r);e["default"]=s.exports},eab5:function(t,e,n){"use strict";n.r(e);var i=n("0cda"),a=n("5aaf");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("bcb2");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"e07ee5ea",null,!1,i["a"],r);e["default"]=s.exports},fe7c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i}}]);