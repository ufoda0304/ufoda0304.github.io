(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-profile"],{1330:function(t,e,i){var n=i("6056");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("47889a34",n,!0,{sourceMap:!1,shadowMode:!1})},1955:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".note-text[data-v-67091fcc]{padding:15px;font-size:14px;color:#666;line-height:22px}",""]),t.exports=e},"44e9":function(t,e,i){"use strict";var n=i("4ea4");i("c740"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("5530")),a=i("b9da"),r=i("26cb"),c={data:function(){return{schoolArr:[{score:!0,name:"默认"}],schoolIndex:0,temp:{},items:[],current:0,index:0,reactions:{fire:[{name:"无反应",type:0},{name:"火水蒸发 150%",short:"蒸发",type:1},{name:"火冰融化 200%",type:2}],ice:[{name:"无反应",short:"",type:0},{name:"冰火融化 150%",type:2}],water:[{name:"无反应",type:0},{name:"水火蒸发 200%",type:1}]}}},computed:(0,o.default)((0,o.default)({},(0,r.mapState)(["preset","version"])),(0,r.mapGetters)(["character"])),onLoad:function(t){var e=this;this.index=t.index,this.temp=JSON.parse(JSON.stringify(this.preset));var i=this.reactions[this.temp.element];if(i){this.items=i;var n=i.findIndex((function(t){return t.type==e.temp.type}));n>-1&&(this.current=n)}else this.items=[{name:"无反应",short:"",type:0}];if(this.character.schools)if(this.schoolArr=this.character.schools,this.temp.school){var a=this.character.schools.findIndex((function(t){return t.name===e.temp.school.name}));this.schoolIndex=a}else this.temp.school=(0,o.default)({},this.schoolArr[0])},methods:{selectIndex:function(t){this.current=t},selectSchoolIndex:function(t){this.schoolIndex=t},save:function(){if(this.items){var t=this.items[this.current];this.temp.type=t.type}else this.temp.type=0;this.temp.school=(0,o.default)({},this.schoolArr[this.schoolIndex]),(0,a.startCalculate)(this.temp,this.version),this.$store.commit("changeProfile",{temp:this.temp,index:this.index}),this.$store.commit("setPreset",this.temp),uni.navigateBack({delta:1})}}};e.default=c},"45ba":function(t,e,i){var n=i("1955");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("1e9a4a0d",n,!0,{sourceMap:!1,shadowMode:!1})},5037:function(t,e,i){"use strict";i.r(e);var n=i("e0c1"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"5bdc":function(t,e,i){"use strict";var n=i("45ba"),o=i.n(n);o.a},6056:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-48961cb2]{background-color:#fff}.uni-list-item__content[data-v-48961cb2]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-48961cb2]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-48961cb2]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-48961cb2]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-48961cb2]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-48961cb2]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-48961cb2]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-48961cb2]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-48961cb2]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-48961cb2]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-48961cb2]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-48961cb2]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-48961cb2]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-48961cb2]{font-size:13px;color:#999}',""]),t.exports=e},"83c7":function(t,e,i){"use strict";var n=i("1330"),o=i.n(n);o.a},9931:function(t,e,i){var n=i("f4e1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("45a9246d",n,!0,{sourceMap:!1,shadowMode:!1})},9938:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniSection:i("db908").default,uniListItem:i("eced").default,buttonBarBottom:i("ecee").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-section",{attrs:{title:"展示柜说明",type:"line"}}),i("v-uni-view",{staticClass:"note-text"},[i("v-uni-view",[t._v("1、展示柜的属性为只读，只能修改流派和增幅，其他属性无法修改，如果需要调整，可以在详情页下方点击【复制配置到本地】，再从首页进入角色修改")]),i("v-uni-view",[t._v("2、如果发现数据读取有误，先尝试刷新一下展示柜，还是无法解决大概率是BUG，可以把错误情况进行反馈")])],1),i("uni-section",{attrs:{title:"流派",type:"line"}},[i("v-uni-radio-group",[i("v-uni-view",{staticClass:"uni-list"},t._l(t.schoolArr,(function(e,n){return i("uni-list-item",{key:e.name,attrs:{title:e.name,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSchoolIndex(n)}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-radio",{attrs:{color:"#ad9388",checked:n==t.schoolIndex}})]},proxy:!0}],null,!0)})})),1)],1)],1),i("uni-section",{attrs:{title:"增幅",type:"line"}},[i("v-uni-radio-group",[i("v-uni-view",{staticClass:"uni-list"},t._l(t.items,(function(e,n){return i("uni-list-item",{key:n,attrs:{title:e.name,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectIndex(n)}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-radio",{attrs:{color:"#ad9388",checked:n==t.current}})]},proxy:!0}],null,!0)})})),1)],1)],1),i("v-uni-view",{staticStyle:{height:"100px"}}),i("button-bar-bottom",{attrs:{text:"保存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],1)},a=[]},"9ab4":function(t,e,i){"use strict";i.r(e);var n=i("fe7c"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},a401:function(t,e,i){"use strict";i.r(e);var n=i("9938"),o=i("e6b2");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("5bdc");var r,c=i("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"67091fcc",null,!1,n["a"],r);e["default"]=s.exports},be9ca:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a5ea").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},a=[]},d239:function(t,e,i){"use strict";var n=i("9931"),o=i.n(n);o.a},d86d:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"height-set"}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},a=[]},db908:function(t,e,i){"use strict";i.r(e);var n=i("be9ca"),o=i("9ab4");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("83c7");var r,c=i("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"48961cb2",null,!1,n["a"],r);e["default"]=s.exports},e0c1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{text:{type:String,default:"保存"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},e6b2:function(t,e,i){"use strict";i.r(e);var n=i("44e9"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},ecee:function(t,e,i){"use strict";i.r(e);var n=i("d86d"),o=i("5037");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("d239");var r,c=i("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"f7d2f876",null,!1,n["a"],r);e["default"]=s.exports},f4e1:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-f7d2f876]{height:50px;width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:2.55555556;color:#fff;background-color:#ad9388}.bottom-view[data-v-f7d2f876]{background-color:#ad9388;height:calc(env(safe-area-inset-bottom)/2)}.height-set[data-v-f7d2f876]{\n\t/* background-color: #000000; */height:100px}.goods-carts[data-v-f7d2f876]{background-color:#ad9388;display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},fe7c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n}}]);