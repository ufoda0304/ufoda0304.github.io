(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-book"],{"190b":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("2ca0");var n={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=n},"1dfd":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},"202a":function(t,e,i){var n=i("68de");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("500ebc92",n,!0,{sourceMap:!1,shadowMode:!1})},"24db":function(t,e,i){"use strict";i.r(e);var n=i("190b"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"32d0":function(t,e,i){var n=i("58dd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("5264f9cc",n,!0,{sourceMap:!1,shadowMode:!1})},3621:function(t,e,i){"use strict";i.r(e);var n=i("6689"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"3d37":function(t,e,i){"use strict";i.r(e);var n=i("444b"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"444b":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},"58dd":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e},"629f":function(t,e,i){"use strict";var n=i("202a"),o=i.n(n);o.a},6689:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"68de":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".note-text[data-v-47401270]{padding:15px;font-size:14px;color:#666;line-height:22px}",""]),t.exports=e},"748d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{height:"100px"}}),i("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content",style:{backgroundColor:t.color}},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:t.color}})],1)],1)},o=[]},"7b15":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniSection:i("89d3").default,uniListItem:i("6e18").default,uniLink:i("bfb4").default,buttonBarBottom:i("e265").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-section",{attrs:{title:"选择流派",type:"line"}}),i("v-uni-radio-group",[i("v-uni-view",{staticClass:"uni-list"},t._l(t.schoolArr,(function(e,n){return i("uni-list-item",{key:e.name,attrs:{title:e.name,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSchoolIndex(n)}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-radio",{attrs:{color:"#ad9388",checked:n==t.schoolIndex}})]},proxy:!0}],null,!0)})})),1)],1),t.isBoom?i("v-uni-view",[i("uni-section",{attrs:{title:"说明",type:"line"}}),i("uni-list-item",{staticClass:"item-space",attrs:{title:"烈/超绽放流派作为引爆辅助定位,堆高精通即可"}})],1):t.info.major?i("v-uni-view",[i("uni-section",{attrs:{type:"line",title:"流派说明"}}),t.info.notes?i("v-uni-view",t._l(t.info.notes,(function(t,e){return i("uni-list-item",{key:e,staticClass:"item-space",attrs:{title:t}})})),1):t._e(),i("uni-list-item",{attrs:{title:"主词条",rightText:t.info.major}}),i("uni-list-item",{attrs:{title:"副词条",rightText:t.minorText+t.info.minor}}),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.notice.apply(void 0,arguments)}}},[i("uni-section",{attrs:{title:"圣遗物推荐",type:"line"}},t._l(t.info.artifacts,(function(e,n){return t.artifactsData[e]?i("uni-list-item",{key:n,attrs:{title:t.artifactsData[e].chs,clickable:!0,thumb:t.ImageUrl[e],"thumb-size":"lg",note:t.character.aNotes?t.character.aNotes[e]:""}}):t._e()})),1),i("uni-section",{attrs:{title:"武器推荐",type:"line"}},t._l(t.info.weapons,(function(e,n){return t.weaponsData[e]?i("uni-list-item",{key:n,attrs:{title:t.weaponsData[e].chs,clickable:!0,thumb:t.ImageUrl[e],"thumb-size":"lg",note:t.character.wNotes?t.character.wNotes[e]:""}}):t._e()})),1)],1),i("uni-section",{attrs:{title:"其他说明",type:"line"}}),i("uni-list-item",{staticClass:"item-space",attrs:{title:"角色圣遗物和武器推荐来自 NGA@一只不知名的菜鸡"},scopedSlots:t._u([{key:"footer",fn:function(){return[i("uni-link",{attrs:{color:"#007AFF",href:"https://nga.178.com/read.php?tid=27859119",text:"原帖地址"}})]},proxy:!0}])})],1):t.info.text?i("v-uni-view",[i("uni-section",{attrs:{title:"角色说明",type:"line"}}),i("uni-list-item",{staticClass:"item-space",attrs:{title:t.info.text}})],1):i("v-uni-view",[i("uni-section",{attrs:{title:"其他说明",type:"line"}}),i("uni-list-item",{staticClass:"item-space",attrs:{title:"该角色的流派的武器/圣遗物推荐等相关内容正在更新中..."}})],1),i("button-bar-bottom",{attrs:{text:t.saveText},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}})],1)},a=[]},8265:function(t,e,i){"use strict";i.r(e);var n=i("f562"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"89d3":function(t,e,i){"use strict";i.r(e);var n=i("bd7d"),o=i("3621");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("e36a");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"42ced052",null,!1,n["a"],void 0);e["default"]=s.exports},"949d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowA?i("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):i("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},o=[]},a1f1:function(t,e,i){"use strict";var n=i("32d0"),o=i.n(n);o.a},bcee:function(t,e,i){"use strict";var n=i("e52b"),o=i.n(n);o.a},bd7d:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("fcef").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},a=[]},bfb4:function(t,e,i){"use strict";i.r(e);var n=i("949d"),o=i("24db");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("a1f1");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"03b6d5de",null,!1,n["a"],void 0);e["default"]=s.exports},c584:function(t,e,i){"use strict";i.r(e);var n=i("7b15"),o=i("8265");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("629f");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"47401270",null,!1,n["a"],void 0);e["default"]=s.exports},d69f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},e265:function(t,e,i){"use strict";i.r(e);var n=i("748d"),o=i("3d37");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("bcee");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"d83b913c",null,!1,n["a"],void 0);e["default"]=s.exports},e36a:function(t,e,i){"use strict";var n=i("fa22"),o=i.n(n);o.a},e52b:function(t,e,i){var n=i("1dfd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("1143f6dc",n,!0,{sourceMap:!1,shadowMode:!1})},f562:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c975"),i("14d9"),i("e9c4"),i("ac1f"),i("5319");var o=n(i("2909")),a=n(i("5530")),r=n(i("d37b")),s=i("fedd"),c=i("26cb"),l=i("0d89"),u=i("e194"),d={data:function(){return{isBoom:!1,ImageUrl:{},index:0,info:{},saveText:"保存",weaponsData:{},artifactsData:{},school:null,schoolArr:[{score:!0,name:"默认",reaction:0}],schoolIndex:0,margin:"0 14px 20px"}},computed:(0,a.default)((0,a.default)((0,a.default)({},(0,c.mapState)(["preset"])),(0,c.mapGetters)(["character"])),{},{minorText:function(){return this.school&&this.school.reaction>0&&-1==this.info.minor.indexOf("精通")?"精通、":""}}),onLoad:function(t){this.ImageUrl=r.default,this.index=t.index,this.artifactsData=u.artifactsData,this.weaponsData=l.weaponsData;var e,i=this.character,n=this.preset;(i.schools&&(this.schoolArr=(0,o.default)(i.schools)),99==this.index)?this.saveText="开始计算":this.schoolIndex=null!==(e=n.school.index)&&void 0!==e?e:0;"fire"==i.element&&this.schoolArr.push({score:!1,name:"烈绽放",reaction:0,boom:7}),"thunder"==i.element&&this.schoolArr.push({score:!1,name:"超绽放",reaction:0,boom:6}),this.selectSchoolIndex(this.schoolIndex)},methods:{onClickItem:function(t){switch(t.currentIndex){case 1:uni.redirectTo({url:"./equipment?from=detail"});break;case 2:uni.redirectTo({url:"./property?from=detail"});break;case 3:uni.redirectTo({url:"./group"});break;default:break}},notice:function(){uni.showModal({title:"提示",content:"这里只能修改流派，武器/圣遗物可在数据页修改",showCancel:!1,confirmText:"好的"})},save:function(){if(99==this.index){var t=(0,s.initPreset)(this.character,this.school.id);t.school=this.school,(0,s.startCalculate)(t),this.$store.commit("setPreset",t),uni.redirectTo({url:"equipment?from=school"})}else{var e=JSON.parse(JSON.stringify(this.preset)),i=e.school.element;e.school=this.school,i&&(e.element=i),(0,s.startCalculate)(e),this.index<99?(this.$store.commit("changeProfile",{temp:e,index:this.index}),this.$store.commit("setPreset",e),this.$store.commit("storeFavObj",e)):(this.$store.dispatch("storePreset",e),this.$store.commit("setPreset",e)),uni.navigateBack({delta:1})}},selectSchoolIndex:function(t){var e,i=null===(e=this.schoolArr[t])||void 0===e?void 0:e.id;this.schoolIndex=t;var n=this.schoolArr[t];n.index=t,this.school=n,this.isBoom=!!n.boom,this.getInfo(i)},getInfo:function(t){if(t){var e=t.replace("-","");this.character[e]?this.info=this.character[e]:this.info=this.character.default}else this.info=this.character.default}}};e.default=d},fa22:function(t,e,i){var n=i("d69f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("2403413f",n,!0,{sourceMap:!1,shadowMode:!1})}}]);