(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-book"],{"009c":function(t,e,i){"use strict";i.r(e);var n=i("440e"),a=i("7d4d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2510");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"03b6d5de",null,!1,n["a"],r);e["default"]=s.exports},"066b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-538187eb]{height:50px;width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:2.55555556;color:#fff;background-color:#ad9388}.bottom-view[data-v-538187eb]{background-color:#ad9388;height:calc(env(safe-area-inset-bottom)/2)}.height-set[data-v-538187eb]{\n\t/* background-color: #000000; */height:100px}.goods-carts[data-v-538187eb]{background-color:#ad9388;display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},"0c04":function(t,e,i){var n=i("8012");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("85875dcc",n,!0,{sourceMap:!1,shadowMode:!1})},"0d14":function(t,e,i){"use strict";i.r(e);var n=i("9be9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},2510:function(t,e,i){"use strict";var n=i("ad01"),a=i.n(n);a.a},"2a08":function(t,e,i){var n=i("7736");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("026280c8",n,!0,{sourceMap:!1,shadowMode:!1})},"440e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowA?i("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):i("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},o=[]},5037:function(t,e,i){"use strict";i.r(e);var n=i("e0c1"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"61c6":function(t,e,i){"use strict";var n=i("0c04"),a=i.n(n);a.a},"69a2":function(t,e,i){"use strict";i("a9e3"),i("2ca0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=n},7736:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".note-text[data-v-675db1ad]{padding:15px;font-size:14px;color:#666;line-height:22px}",""]),t.exports=e},"7d4d":function(t,e,i){"use strict";i.r(e);var n=i("69a2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},8012:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-c5b075ba]{background-color:#fff}.uni-list-item__content[data-v-c5b075ba]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-c5b075ba]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-c5b075ba]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-c5b075ba]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-c5b075ba]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-c5b075ba]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-c5b075ba]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-c5b075ba]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-c5b075ba]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-c5b075ba]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-c5b075ba]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-c5b075ba]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-c5b075ba]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-c5b075ba]{font-size:13px;color:#999}',""]),t.exports=e},"8c1a":function(t,e,i){"use strict";var n=i("2a08"),a=i.n(n);a.a},"963a":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a5ea").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},"9ab4":function(t,e,i){"use strict";i.r(e);var n=i("fe7c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"9be9":function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("c975"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=i("b9da"),r=i("26cb"),c=i("6cc0"),s=i("ae47"),l={data:function(){return{index:0,info:{},saveText:"保存",weaponsData:{},artifactsData:{},school:null,schoolArr:[{score:!0,name:"默认",reaction:0}],schoolIndex:0,margin:"0 14px 20px"}},computed:(0,a.default)((0,a.default)((0,a.default)({},(0,r.mapState)(["preset"])),(0,r.mapGetters)(["character"])),{},{minorText:function(){return this.school&&this.school.reaction>0&&-1==this.info.minor.indexOf("精通")?"精通、":""}}),onLoad:function(e){this.index=e.index,t.log(this.index),this.artifactsData=s.artifactsData,this.weaponsData=c.weaponsData;var i,n=this.character,a=this.preset;(n.schools&&(this.schoolArr=n.schools),99==this.index)?this.saveText="初始化 - "+n.chs:this.schoolIndex=null!==(i=a.school.index)&&void 0!==i?i:0;this.selectSchoolIndex(this.schoolIndex)},methods:{onClickItem:function(t){switch(t.currentIndex){case 1:uni.redirectTo({url:"./equipment?from=detail"});break;case 2:uni.redirectTo({url:"./property?from=detail"});break;case 3:uni.redirectTo({url:"./group"});break;default:break}},notice:function(){uni.showModal({title:"提示",content:"这里只能修改流派，武器/圣遗物可在配置页修改",showCancel:!1,confirmText:"好的"})},save:function(){if(99==this.index){var t=(0,o.initPreset)(this.character,this.school.id);t.school=this.school,this.$store.commit("setPreset",t),uni.redirectTo({url:"equipment?from=school"})}else{var e=JSON.parse(JSON.stringify(this.preset)),i=e.school.element;e.school=this.school,i&&(e.element=i),(0,o.startCalculate)(e),this.index<99?this.$store.commit("changeProfile",{temp:e,index:this.index}):(this.$store.commit("storePreset",e),this.$store.commit("setPreset",e)),uni.navigateBack({delta:1})}},selectSchoolIndex:function(t){var e,i=null===(e=this.schoolArr[t])||void 0===e?void 0:e.id;this.schoolIndex=t;var n=this.schoolArr[t];n.index=t,this.school=n,this.getInfo(i)},getInfo:function(t){if(t){var e=t.replace("-","");this.character[e]?this.info=this.character[e]:this.info=this.character.default}else this.info=this.character.default}}};e.default=l}).call(this,i("5a52")["default"])},aa78:function(t,e,i){"use strict";i.r(e);var n=i("e83e"),a=i("0d14");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("8c1a");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"675db1ad",null,!1,n["a"],r);e["default"]=s.exports},ac7e:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"height-set"}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},o=[]},ad01:function(t,e,i){var n=i("ca8b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("082d3280",n,!0,{sourceMap:!1,shadowMode:!1})},ca8b:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e},cabc:function(t,e,i){"use strict";var n=i("dd77"),a=i.n(n);a.a},db908:function(t,e,i){"use strict";i.r(e);var n=i("963a"),a=i("9ab4");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("61c6");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"c5b075ba",null,!1,n["a"],r);e["default"]=s.exports},dd77:function(t,e,i){var n=i("066b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("417536d0",n,!0,{sourceMap:!1,shadowMode:!1})},e0c1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{text:{type:String,default:"保存"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},e83e:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniSection:i("db908").default,uniListItem:i("eced").default,uniLink:i("009c").default,buttonBarBottom:i("ecee").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-section",{attrs:{title:"选择流派",type:"line"}}),i("v-uni-radio-group",[i("v-uni-view",{staticClass:"uni-list"},t._l(t.schoolArr,(function(e,n){return i("uni-list-item",{key:e.name,attrs:{title:e.name,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSchoolIndex(n)}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-radio",{attrs:{color:"#ad9388",checked:n==t.schoolIndex}})]},proxy:!0}],null,!0)})})),1)],1),t.index<99?i("v-uni-view",[i("uni-section",{attrs:{title:"展示柜说明",type:"line"}}),i("v-uni-view",{staticClass:"note-text"},[i("v-uni-view",[t._v("1、展示柜的属性为只读，只能修改流派，其他属性无法修改，如果需要调整，可以在详情页下方点击【复制配置到本地】，再从首页进入角色修改")]),i("v-uni-view",[t._v("2、如果发现数据读取有误，先尝试刷新一下展示柜，还是无法解决大概率是BUG，可以把错误情况进行反馈")])],1)],1):t._e(),t.info.major?i("v-uni-view",[i("uni-section",{attrs:{type:"line",title:"流派说明"}}),t.info.notes?i("v-uni-view",t._l(t.info.notes,(function(t,e){return i("uni-list-item",{key:e,attrs:{note:t}})})),1):t._e(),i("uni-list-item",{attrs:{title:"主词条",rightText:t.info.major}}),i("uni-list-item",{attrs:{title:"副词条",rightText:t.minorText+t.info.minor}}),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.notice.apply(void 0,arguments)}}},[i("uni-section",{attrs:{title:"圣遗物推荐",type:"line"}},t._l(t.info.artifacts,(function(e,n){return t.artifactsData[e]?i("uni-list-item",{key:n,attrs:{title:t.artifactsData[e].chs,clickable:!0,thumb:t.artifactsData[e].url,"thumb-size":"lg",note:t.character.aNotes?t.character.aNotes[e]:""}}):t._e()})),1),i("uni-section",{attrs:{title:"武器推荐",type:"line"}},t._l(t.info.weapons,(function(e,n){return t.weaponsData[e]?i("uni-list-item",{key:n,attrs:{title:t.weaponsData[e].chs,clickable:!0,thumb:t.weaponsData[e].url,"thumb-size":"lg",note:t.character.wNotes?t.character.wNotes[e]:""}}):t._e()})),1)],1),i("uni-section",{attrs:{title:"队伍推荐",type:"line"}}),i("uni-list-item",{attrs:{note:"该流派的常见配队正在更新中..."}}),i("uni-section",{attrs:{title:"其他说明",type:"line"}}),i("v-uni-view",{staticStyle:{padding:"14px","font-size":"14px"}},[i("v-uni-view",[t._v("1、相关内容还在完善中..")]),i("v-uni-view",[t._v("2、角色圣遗物和武器推荐主要来自"),i("v-uni-text",{staticStyle:{"font-weight":"700"}},[t._v("NGA@一只不知名的菜鸡")]),t._v("，地址："),i("uni-link",{staticStyle:{color:"#007AFF"},attrs:{href:"https://nga.178.com/read.php?tid=27859119",text:"NGA"}})],1)],1)],1):i("v-uni-view",[i("uni-section",{attrs:{title:"其他说明",type:"line"}}),i("v-uni-view",{staticStyle:{padding:"14px","font-size":"14px"}},[t._v("该角色的流派的武器/圣遗物推荐等相关内容正在更新中...")])],1),i("v-uni-view",{staticStyle:{height:"100px"}}),i("button-bar-bottom",{attrs:{text:t.saveText},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}})],1)},o=[]},ecee:function(t,e,i){"use strict";i.r(e);var n=i("ac7e"),a=i("5037");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("cabc");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"538187eb",null,!1,n["a"],r);e["default"]=s.exports},fe7c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n}}]);