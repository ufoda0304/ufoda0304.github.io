(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-compare-index"],{"08e2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},2813:function(t,e,n){"use strict";var i=n("bfb2"),o=n.n(i);o.a},"28b0":function(t,e,n){"use strict";n.r(e);var i=n("6860"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"2b46":function(t,e,n){"use strict";n.r(e);var i=n("482d"),o=n("9346");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("6770");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"d83b913c",null,!1,i["a"],void 0);e["default"]=r.exports},"2f8d":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=i},"482d":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticStyle:{height:"100px"}}),n("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content",style:{backgroundColor:t.color}},[t._v(t._s(t.text))]),n("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:t.color}})],1)],1)},o=[]},"541a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},6183:function(t,e,n){"use strict";n.r(e);var i=n("99c3"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},6770:function(t,e,n){"use strict";var i=n("8b37"),o=n.n(i);o.a},6860:function(t,e,n){"use strict";(function(t){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c740"),n("a434"),n("14d9"),n("e9c4"),n("c975");var o=n("2016"),a=i(n("1487")),s={data:function(){return{ImageUrl:{},disableTeam:!0,event:{team:!1,auto:!0},texts:["1、点击已选武器进行配置修改，右边按钮分别是新增、删除配置，如果设置的配置已存在，则不会保存。","2、计算结果对比的标准为当前队伍/单人的伤害为基准100%，默认平衡双爆后进行计算，从大到小排序。"],isAdd:!0,index:0,id:"",key:"",compare:{weaponIds:[],weaponConfig:{}},weapons:{},weaponIds:{},weaponsData:{},weaponConfig:{}}},onUnload:function(){uni.$off("optionChanged")},onLoad:function(){this.ImageUrl=a.default;var t=this.$store.getters.character,e="ys-compare-"+t.name;this.key=e;var n=this.$store.state.preset;n.gResult&&(this.disableTeam=!1,this.event.team=!0),this.weapons=o.weaponsByType[t.weapon];var i=uni.getStorageSync(e);i&&(this.compare=i),this.weaponConfig=this.compare.weaponConfig,this.weaponIds=this.compare.weaponIds,this.weaponsData=o.weaponsData;var s=this;uni.$on("optionChanged",(function(t){var e=s.weaponConfig[s.id];if(e){var n=e.findIndex((function(e){return e.title===t.title}));s.isAdd?e.splice(s.index+1,0,t):e[s.index]=t,n>-1&&e.splice(n,1)}else e=[t];s.$forceUpdate()}))},methods:{switchChange:function(t){0==t?this.event.team=!this.event.team:this.event.auto=!this.event.auto},initOption:function(e){var n=this.weaponConfig[e];if(!n||0==n.length){t.log("初始化！");var i=this.weaponsData[e],o=5==i.star?1:5,a=o+"精",s=[a];if(i.options)for(var r=0;r<i.options.length;r++){var c=i.options[r],u=i.indexs[r];s.push(c[u])}var l={stage:o-1,indexs:i.indexs,title:s.join(" / ")};t.log(l),this.weaponConfig[e]=[l]}},addWeapon:function(t){this.weaponIds.push(t),this.initOption(t),this.$forceUpdate()},deleteWeapon:function(t){this.weaponIds.splice(t,1)},deleteOption:function(t,e,n){this.weaponConfig[t].splice(e,1),this.$forceUpdate()},copyOption:function(t,e,n){this.weaponConfig[t].splice(e,0,n)},addOption:function(t,e){this.id=t,this.index=e,this.isAdd=!0,this.$store.commit("setOption",null),uni.navigateTo({url:"option?id="+t})},setOption:function(t,e,n){this.id=t,this.index=e,this.isAdd=!n,this.$store.commit("setOption",n),uni.navigateTo({url:"option?id="+t})},checkTeam:function(){var t=this.$store.state.preset,e=this;t.gResult?uni.showModal({title:"提示",content:"使用添加队友的核心伤害作为标准进行计算？",confirmText:"队友",cancelText:"单人",success:function(t){t.confirm?e.save(4):e.save(1)}}):e.save(1)},save:function(e){var n=JSON.parse(JSON.stringify(this.compare)),i=this.$store.state.preset,o=i.wId,a={indexs:i.wIndexs,stage:i.wStage,title:this.getOptionText(i)};t.log(a);var s=n.weaponIds.indexOf(o);if(s<0)n.weaponIds.push(o),n.weaponConfig[o]=[a];else{var r=n.weaponConfig[o].findIndex((function(t){return String(t.indexs)==String(a.indexs)&&t.stage==a.stage}));r<0&&n.weaponConfig[o].push(a)}this.$store.commit("setCompare",n),uni.setStorageSync(this.key,this.compare),uni.navigateTo({url:"result?team="+this.event.team+"&auto="+this.event.auto})},getOptionText:function(t){var e=this.weaponsData[t.wId],n=t.wStage+1,i=n+"精",o=[i];if(e.options)for(var a=0;a<e.options.length;a++){var s=e.options[a],r=t.wIndexs[a];o.push(s[r])}return o.join(" / ")},reset:function(){uni.removeStorageSync(this.key)}}};e.default=s}).call(this,n("5a52")["default"])},"6dee":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"72af":function(t,e,n){"use strict";n.r(e);var i=n("6dee"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},7541:function(t,e,n){"use strict";var i=n("9426"),o=n.n(i);o.a},"7a12":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniSection:n("a009").default,uniList:n("c662").default,uniListItem:n("237e").default,uniIcons:n("8bd5").default,buttonBarBottom:n("2b46").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-section",{attrs:{title:"选项"}}),n("uni-list",{attrs:{border:!1}},[n("uni-list-item",{attrs:{showSwitch:!0,disabled:t.disableTeam,switchChecked:t.event.team,title:"队伍伤害",note:"打开后根据队伍伤害进行计算"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(0)}}}),n("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.event.auto,title:"配平双爆",note:"计算之前会先对双爆进行平衡"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1)}}})],1),n("uni-section",{attrs:{title:"已选择",type:"line"}}),t.weaponIds[0]?t._e():n("v-uni-view",[n("uni-list",{attrs:{border:!1}},[n("uni-list-item",{attrs:{title:"目前没有武器\t",note:"从下面的列表选择武器"}})],1)],1),t._l(t.weaponIds,(function(e,i){return n("v-uni-view",{key:i},[n("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:!t.weaponConfig[e][0],expression:"!weaponConfig[id][0]"}],attrs:{"thumb-size":"lg",thumb:t.ImageUrl[e]},scopedSlots:t._u([{key:"body",fn:function(){return[n("v-uni-view",{staticClass:"item-content",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setOption(e,0,null)}}},[n("v-uni-view",{staticClass:"item-content-title"},[t._v("无选项")])],1)]},proxy:!0},{key:"footer",fn:function(){return[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setOption(e,0,null)}}},[n("uni-icons",{attrs:{type:"plusempty"}})],1),n("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteWeapon(i)}}},[n("uni-icons",{attrs:{type:"trash"}})],1)],1)]},proxy:!0}],null,!0)}),t._l(t.weaponConfig[e],(function(o,a){return n("uni-list-item",{key:a,attrs:{"thumb-size":"lg",thumb:t.ImageUrl[e]},scopedSlots:t._u([{key:"body",fn:function(){return[n("v-uni-view",{staticClass:"item-content",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setOption(e,a,o)}}},[n("v-uni-view",{staticClass:"item-content-title"},[t._v(t._s(o.title))])],1)]},proxy:!0},{key:"footer",fn:function(){return[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setOption(e,a,null)}}},[n("uni-icons",{attrs:{type:"plusempty"}})],1),n("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deleteOption(e,a,i)}}},[n("uni-icons",{attrs:{type:"trash"}})],1)],1)]},proxy:!0}],null,!0)})}))],2)})),n("uni-section",{attrs:{title:"所有",type:"line"}}),t._l(t.weapons,(function(e,i){return n("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.weaponIds.indexOf(e.name)<0,expression:"weaponIds.indexOf(weapon.name) < 0"}],key:e.name,attrs:{title:e.chs,clickable:!0,thumb:t.ImageUrl[e.name],"thumb-size":"lg"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addWeapon(e.name)}}})})),n("button-bar-bottom",{directives:[{name:"show",rawName:"v-show",value:t.weaponIds[0],expression:"weaponIds[0]"}],attrs:{text:"开始计算"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],2)},a=[]},"7f33":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},"8b37":function(t,e,n){var i=n("541a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("39478d7c",i,!0,{sourceMap:!1,shadowMode:!1})},9207:function(t,e,n){var i=n("7f33");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("49f9b71f",i,!0,{sourceMap:!1,shadowMode:!1})},9346:function(t,e,n){"use strict";n.r(e);var i=n("2f8d"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},9426:function(t,e,n){var i=n("fe9c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("3ed74541",i,!0,{sourceMap:!1,shadowMode:!1})},"99c3":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},scroll:function(t){this.$emit("scroll",t)}}};e.default=i},a009:function(t,e,n){"use strict";n.r(e);var i=n("badd"),o=n("72af");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("2813");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"42ced052",null,!1,i["a"],void 0);e["default"]=r.exports},a117:function(t,e,n){"use strict";n.r(e);var i=n("7a12"),o=n("28b0");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("7541");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"72001ceb",null,!1,i["a"],void 0);e["default"]=r.exports},badd:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("8bd5").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?n("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?n("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),n("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?n("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?n("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),n("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},a=[]},bfb2:function(t,e,n){var i=n("08e2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("ae24b342",i,!0,{sourceMap:!1,shadowMode:!1})},c662:function(t,e,n){"use strict";n.r(e);var i=n("e3a8"),o=n("6183");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("d0a6");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"6fce09b0",null,!1,i["a"],void 0);e["default"]=r.exports},d0a6:function(t,e,n){"use strict";var i=n("9207"),o=n.n(i);o.a},e3a8:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},o=[]},fe9c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-group[data-v-72001ceb]{display:flex;align-items:center;justify-content:center}.uni-group-item[data-v-72001ceb]{margin-left:15px;padding:0 10px;line-height:40px\n\t/* \twidth: 40px; */}.item-content[data-v-72001ceb]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden;justify-content:center}.item-content-title[data-v-72001ceb]{font-size:14px;color:#3b4144;overflow:hidden}",""]),t.exports=e}}]);