(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-compare-index"],{"0434":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniSection:n("89d3").default,uniList:n("add1").default,uniListItem:n("6e18").default,uniIcons:n("fcef").default,buttonBarBottom:n("e265").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-section",{attrs:{title:"选项"}}),n("uni-list",[n("uni-list-item",{attrs:{showSwitch:!0,disabled:t.disableTeam,switchChecked:t.event.team,title:"队伍伤害",note:"打开后根据队伍伤害进行计算"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(0)}}}),n("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.event.auto,title:"配平双爆",note:"计算之前会先对双爆进行平衡"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1)}}})],1),n("uni-section",{attrs:{title:"已选择",type:"line"}}),t.weaponIds[0]?t._e():n("v-uni-view",[n("uni-list",[n("uni-list-item",{attrs:{title:"目前没有武器\t",note:"从下面的列表选择武器"}})],1)],1),t._l(t.weaponIds,(function(e,i){return n("v-uni-view",{key:i},t._l(t.weaponConfig[e],(function(o,a){return n("uni-list-item",{key:a,attrs:{"thumb-size":"lg",thumb:t.weaponsData[e].url},scopedSlots:t._u([{key:"body",fn:function(){return[n("v-uni-view",{staticClass:"item-content",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setOption(e,a,o)}}},[n("v-uni-view",{staticClass:"item-content-title"},[t._v(t._s(o.title))])],1)]},proxy:!0},{key:"footer",fn:function(){return[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setOption(e,a,null)}}},[n("uni-icons",{attrs:{type:"plusempty"}})],1),n("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deleteOption(e,a,i)}}},[n("uni-icons",{attrs:{type:"trash"}})],1)],1)]},proxy:!0}],null,!0)})})),1)})),n("uni-section",{attrs:{title:"所有",type:"line"}}),t._l(t.weapons,(function(e,i){return n("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.weaponIds.indexOf(e.name)<0,expression:"weaponIds.indexOf(weapon.name) < 0"}],key:e.name,attrs:{title:e.chs,clickable:!0,thumb:e.url,"thumb-size":"lg"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addWeapon(e.name)}}})})),n("button-bar-bottom",{directives:[{name:"show",rawName:"v-show",value:t.weaponIds[0],expression:"weaponIds[0]"}],attrs:{text:"开始计算"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],2)},a=[]},1205:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-e07ee5ea]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-e07ee5ea]{position:relative;z-index:-1}.uni-list--border-top[data-v-e07ee5ea]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-e07ee5ea]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},1291:function(t,e,n){"use strict";n.r(e);var i=n("6b9d"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"1dfd":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},3621:function(t,e,n){"use strict";n.r(e);var i=n("6689"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"3d37":function(t,e,n){"use strict";n.r(e);var i=n("444b"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"444b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=i},6689:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"6b9d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=i},"748d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticStyle:{height:"100px"}}),n("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content",style:{backgroundColor:t.color}},[t._v(t._s(t.text))]),n("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:t.color}})],1)],1)},a=[]},"76e6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-group[data-v-3726adc8]{display:flex;align-items:center;justify-content:center}.uni-group-item[data-v-3726adc8]{margin-left:15px;padding:0 10px;line-height:40px\n\t/* \twidth: 40px; */}.item-content[data-v-3726adc8]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden;justify-content:center}.item-content-title[data-v-3726adc8]{font-size:14px;color:#3b4144;overflow:hidden}",""]),t.exports=e},"7aec":function(t,e,n){"use strict";var i=n("f86f"),o=n.n(i);o.a},"84b3":function(t,e,n){var i=n("1205");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("9ed59e78",i,!0,{sourceMap:!1,shadowMode:!1})},"89d3":function(t,e,n){"use strict";n.r(e);var i=n("971c"),o=n("3621");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("7aec");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"c5b075ba",null,!1,i["a"],s);e["default"]=c.exports},9452:function(t,e,n){"use strict";n.r(e);var i=n("0434"),o=n("b436");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c43e");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"3726adc8",null,!1,i["a"],s);e["default"]=c.exports},"971c":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("fcef").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?n("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?n("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),n("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?n("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?n("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):t._e()],1),n("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},a=[]},add1:function(t,e,n){"use strict";n.r(e);var i=n("bb28"),o=n("1291");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c286");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"e07ee5ea",null,!1,i["a"],s);e["default"]=c.exports},b436:function(t,e,n){"use strict";n.r(e);var i=n("f1e1"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},bb28:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[t.border?n("v-uni-view",{staticClass:"uni-list--border-top"}):t._e(),t._t("default"),t.border?n("v-uni-view",{staticClass:"uni-list--border-bottom"}):t._e()],2)},a=[]},bcee:function(t,e,n){"use strict";var i=n("e52b"),o=n.n(i);o.a},c286:function(t,e,n){"use strict";var i=n("84b3"),o=n.n(i);o.a},c43e:function(t,e,n){"use strict";var i=n("e113"),o=n.n(i);o.a},e113:function(t,e,n){var i=n("76e6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("94f4b024",i,!0,{sourceMap:!1,shadowMode:!1})},e265:function(t,e,n){"use strict";n.r(e);var i=n("748d"),o=n("3d37");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("bcee");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"d83b913c",null,!1,i["a"],s);e["default"]=c.exports},e52b:function(t,e,n){var i=n("1dfd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("8c48942a",i,!0,{sourceMap:!1,shadowMode:!1})},f15d:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-c5b075ba]{background-color:#fff}.uni-list-item__content[data-v-c5b075ba]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-c5b075ba]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-c5b075ba]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-c5b075ba]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-c5b075ba]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-c5b075ba]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-c5b075ba]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-c5b075ba]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-c5b075ba]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-c5b075ba]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-c5b075ba]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-c5b075ba]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-c5b075ba]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-c5b075ba]{font-size:13px;color:#999}',""]),t.exports=e},f1e1:function(t,e,n){"use strict";(function(t){n("c740"),n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("0d89"),o={data:function(){return{disableTeam:!0,event:{team:!1,auto:!0},texts:["1、点击已选武器进行配置修改，右边按钮分别是新增、删除配置，如果设置的配置已存在，则不会保存。","2、计算结果对比的标准为当前队伍/单人的伤害为基准100%，默认平衡双爆后进行计算，从大到小排序。"],isAdd:!0,index:0,id:"",key:"",compare:{weaponIds:[],weaponConfig:{}},weapons:{},weaponIds:{},weaponsData:{},weaponConfig:{}}},onUnload:function(){uni.$off("optionChanged")},onLoad:function(){var t=this.$store.getters.character,e="ys-compare-"+t.name;this.key=e;var n=this.$store.state.preset;n.gResult&&(this.disableTeam=!1,this.event.team=!0),this.weapons=i.weaponsByType[t.weapon];var o=uni.getStorageSync(e);o&&(this.compare=o),this.weaponConfig=this.compare.weaponConfig,this.weaponIds=this.compare.weaponIds,this.weaponsData=i.weaponsData;var a=this;uni.$on("optionChanged",(function(t){var e=a.weaponConfig[a.id];if(e){var n=e.findIndex((function(e){return e.title===t.title}));a.isAdd?e.splice(a.index+1,0,t):e[a.index]=t,n>-1&&e.splice(n,1)}else e=[t];a.$forceUpdate()}))},methods:{switchChange:function(t){0==t?this.event.team=!this.event.team:this.event.auto=!this.event.auto},initOption:function(e){var n=this.weaponConfig[e];if(!n||0==n.length){t.log("初始化！");var i=this.weaponsData[e],o=5==i.star?1:5,a=o+"精",s=[a];if(i.options)for(var r=0;r<i.options.length;r++){var c=i.options[r],u=i.indexs[r];s.push(c[u])}var l={stage:o-1,indexs:i.indexs,title:s.join(" / ")};t.log(l),this.weaponConfig[e]=[l]}},addWeapon:function(t){this.weaponIds.push(t),this.initOption(t),this.$forceUpdate()},deleteWeapon:function(t){this.weaponIds.splice(t,1)},deleteOption:function(t,e,n){1==this.weaponConfig[t].length&&this.weaponIds.splice(n,1),this.weaponConfig[t].splice(e,1),this.$forceUpdate()},copyOption:function(t,e,n){this.weaponConfig[t].splice(e,0,n)},addOption:function(t,e){this.id=t,this.index=e,this.isAdd=!0,this.$store.commit("setOption",null),uni.navigateTo({url:"option?id="+t})},setOption:function(t,e,n){this.id=t,this.index=e,this.isAdd=!n,this.$store.commit("setOption",n),uni.navigateTo({url:"option?id="+t})},checkTeam:function(){var t=this.$store.state.preset,e=this;t.gResult?uni.showModal({title:"提示",content:"使用添加队友的核心伤害作为标准进行计算？",confirmText:"队友",cancelText:"单人",success:function(t){t.confirm?e.save(4):e.save(1)}}):e.save(1)},save:function(t){var e=JSON.parse(JSON.stringify(this.compare));this.$store.commit("setCompare",e),uni.setStorageSync(this.key,this.compare),uni.navigateTo({url:"result?team="+this.event.team+"&auto="+this.event.auto})},reset:function(){uni.removeStorageSync(this.key)}}};e.default=o}).call(this,n("5a52")["default"])},f86f:function(t,e,n){var i=n("f15d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("6eb03f5a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);