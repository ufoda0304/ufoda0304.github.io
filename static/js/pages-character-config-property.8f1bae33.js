(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-property"],{"08fd":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniListItem:i("6fa1").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toW.apply(void 0,arguments)}}},[t.W.url?i("uni-list-item",{attrs:{showArrow:!0,title:"武器",thumb:t.W.url,title:t.W.chs,"thumb-size":"lg",note:t.showAtk?t.weaponAtk:t.W.effect}}):i("uni-list-item",{attrs:{title:"点击选择武器",showArrow:!0},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar "},[t._v("无")])]},proxy:!0}])})],1)},s=[]},"1c45":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{color:{type:String,default:"blue"},InputBottom:{type:Number,default:0},text:{type:String,default:"确定"}},data:function(){return{}}};e.default=n},"2d31":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a1b9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:16,type:"arrowright"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},s=[]},"2f1f":function(t,e,i){"use strict";var n=i("9cd5"),a=i.n(n);a.a},"4a6d":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),s=i("26cb"),o={props:{showAtk:{type:[Boolean,String],default:!1}},data:function(){return{index:0,W:{}}},computed:(0,a.default)((0,a.default)({weaponAtk:function(){return"攻击力:"+this.W.atk}},(0,s.mapState)(["preset"])),(0,s.mapGetters)(["weapon"])),destroyed:function(){uni.$off("weaponChanged")},created:function(t){this.setW(this.weapon);var e=this;uni.$on("weaponChanged",(function(t){t.name!=e.W.name&&e.setW(t)}))},methods:{setW:function(t){this.W=t},toW:function(t){uni.navigateTo({url:"/pages/character/config/weapon"})}}};e.default=o},5717:function(t,e,i){"use strict";i.r(e);var n=i("4a6d"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},5981:function(t,e,i){"use strict";var n=i("aa3b"),a=i.n(n);a.a},6788:function(t,e,i){"use strict";i.r(e);var n=i("08fd"),a=i("5717");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"9c73f5aa",null,!1,n["a"],o);e["default"]=c.exports},"67ed":function(t,e,i){"use strict";i.r(e);var n=i("1c45"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},8483:function(t,e,i){"use strict";i.r(e);var n=i("2d31"),a=i("fc5c");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("5981");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"516ec331",null,!1,n["a"],o);e["default"]=c.exports},"8f9a":function(t,e,i){"use strict";i.r(e);var n=i("b97c"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"90c6":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".cu-bar[data-v-44ac4022]{background-color:#ad9388;display:flex;position:relative;align-items:center;height:50px;justify-content:space-between}.cu-bar.foot[data-v-44ac4022]{max-width:500px;margin:auto;position:fixed;width:100%;bottom:0;z-index:2;\n\t/* border-radius: 5px; */box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1);border-top:1px solid #e0dad3}.button-text[data-v-44ac4022]{color:#fff;align-items:center;display:flex;justify-content:center;text-align:center;position:relative;flex:2;align-self:stretch}",""]),t.exports=e},"9cd5":function(t,e,i){var n=i("90c6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("ab339090",n,!0,{sourceMap:!1,shadowMode:!1})},aa3b:function(t,e,i){var n=i("b3ac");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("63b61ad0",n,!0,{sourceMap:!1,shadowMode:!1})},aa85:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{height:"88rpx"}}),i("v-uni-view",{staticClass:"cu-bar  foot"},[i("v-uni-view",{staticClass:"button-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("submit")}}},[t._v(t._s(t.text))])],1)],1)},s=[]},b3ac:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-516ec331]{background-color:#fff}.uni-list-item__content[data-v-516ec331]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-516ec331]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-516ec331]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-516ec331]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-516ec331]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-516ec331]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-516ec331]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-516ec331]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-516ec331]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-516ec331]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-516ec331]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-516ec331]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-516ec331]{display:flex;align-items:center;padding-left:10px;color:#b1968b}.uni-list-item__extra-text[data-v-516ec331]{font-size:12px;color:#999}',""]),t.exports=e},b97c:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("c975"),i("a434"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),s=(i("fd88"),i("26cb")),o={data:function(){return{disableWeaponOptions:!1,disableArtifactOptions:!1,weaponOptionsNote:"大部分武器默认触发",artifacOptionsNote:"大部分圣遗物默认触发",wEffectTexts:"",aEffectTexts:"",tempWeapon:{},effectTexts:[],saveText:"保存",isGroup:!1,artifactText:"",temp:{},artifacts:[],skillText:"9 / 9 / 9",noArtifactPic:"/static/artifact.png",setNum:"[4]",constellationArr:["0","1","2","3","4","5","6"],skillArr:[[1,2,3,4,5,6,7,8,9,10,11],[1,2,3,4,5,6,7,8,9,10,11,12,13],[1,2,3,4,5,6,7,8,9,10,11,12,13]],refineArr:["1","2","3","4","5"],levelArr:["90","89","88","87","86","85"," 84","83","82","81","80"]}},computed:(0,a.default)((0,a.default)({},(0,s.mapState)(["preset"])),(0,s.mapGetters)(["artifact","artifact2","weapon","character"])),onUnload:function(){uni.$off("artifactChanged"),uni.$off("weaponChanged")},onLoad:function(t){if(t.id?(this.temp=uni.getStorageSync(t.id),this.isGroup=!0):this.temp=JSON.parse(JSON.stringify(this.preset)),this.tempWeapon=this.weapon,this.artifacts[0]=this.artifact,this.artifacts[1]=this.artifact2,this.weapon.options){this.setWeaponOptionsDisable(this.weapon);var e=this.temp.wIndexs;e||(e=this.weapon.indexs),this.setWeaponOptionText(e)}if(this.artifact.options&&!this.temp.aSets){this.setArtifactOptionDisable(this.artifact);var i=this.temp.aIndexs;i||(i=this.artifact.indexs),this.setArtifactOptionText(i)}var n={detail:{value:this.temp.cSkills}};this.skillChange(n);var s=this;uni.$on("weaponChanged",(function(t){t.name!=s.temp.wId&&(s.tempWeapon=t,s.temp.wId=t.name,s.temp.wNotice=!0,s.switchChange(1),t.indexs&&s.setWeaponOptionText(t.indexs),s.setWeaponOptionsDisable(t),5==t.star?s.temp.wStage=0:s.temp.wStage=4,s.$forceUpdate())})),uni.$on("artifactChanged",(function(t){var e=t.index;if(t.name){var i=(0,a.default)({},t);s.artifacts[e]=i,s.$forceUpdate(),1==s.temp.aSets&&s.artifacts.length>1&&s.artifacts[0].name==s.artifacts[1].name&&(s.temp.aSets=!1,s.artifacts.splice(1,1)),s.setArtifactText(),s.temp.aSets||(t.indexs&&s.setArtifactOptionText(t.indexs),s.setArtifactOptionDisable(t))}else s.artifacts.splice(e,1)})),this.setArtifactText()},methods:{setArtifactOptionDisable:function(t){var e=!1;t.noOptionIds&&t.noOptionIds.indexOf(this.character.name)>-1&&(e=!0),this.disableArtifactOptions=e,this.artifacOptionsNote=e?"该角色无法修改这个圣遗物的选项":"大部分圣遗物默认触发"},setWeaponOptionsDisable:function(t){var e=!1;t.noOptionIds&&t.noOptionIds.indexOf(this.character.name)>-1&&(e=!0);var i=t.noOptionKey;i&&this.character.skillKey.indexOf(i)>-1&&(e=!0),this.disableWeaponOptions=e,this.weaponOptionsNote=e?"该角色无法修改这个武器的选项":"大部分武器默认触发"},switchChange:function(t){0==t?this.temp.cNotice?this.temp.cNotice=!this.temp.cNotice:this.temp.cNotice=!0:this.temp.wNotice?this.temp.wNotice=!this.temp.wNotice:this.temp.wNotice=!0},setWeaponOptionText:function(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];e.push(this.tempWeapon.options[i][n])}this.wIndexs=t,this.wEffectTexts=e.join(" / ")},setArtifactOptionText:function(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];e.push(this.artifacts[0].options[i][n])}this.aIndexs=t,this.aEffectTexts=e.join(" / ")},artifactsOptionsChange:function(t){var e=t.detail.value;this.setArtifactOptionText(e)},optionsChange:function(t){var e=t.detail.value;this.setWeaponOptionText(e)},tapSwitch2:function(e){t.log(e.require),t.log(this.temp.cStage)},setArtifactText:function(){this.temp.aSets?(this.setNum=" [2]",this.artifactText=this.artifacts[0].effectText[0]):(this.setNum=" [4]",this.artifactText=this.artifacts[0].effectText[0]+this.artifacts[0].effectText[1])},changeModel:function(){uni.showToast({title:"暂不支持修改",duration:2e3})},tapSwitch:function(t){this.temp.aSets=t.value,this.setArtifactText()},constellationChange:function(t){var e=t.detail.value;this.temp.cStage=e},levelChange:function(t){var e=t.detail.value;this.temp.cLevel=e},skillChange:function(t){for(var e=t.detail.value,i=[],n=[],a=0;a<e.length;a++)n.push(e[a]),i.push(e[a]+1);this.temp.cSkills=n,this.skillText=i.join(" / ")},refineChange:function(t){this.temp.wStage=t.detail.value},save:function(){var t=this.artifacts.length;0!=t?!this.temp.aSets||this.artifacts[1]?(this.temp.aSets&&1==t&&(this.temp.aSets=!1),this.temp.aIds=[this.artifacts[0].name],this.temp.aSets&&this.temp.aIds.push(this.artifacts[1].name),this.temp.cStage=Number(this.temp.cStage),this.temp.cLevel=Number(this.temp.cLevel),this.temp.wStage=Number(this.temp.wStage),this.temp.wIndexs=this.wIndexs,this.temp.aIndexs=this.aIndexs,this.$store.dispatch("handlePreset",this.temp),uni.$emit("presetChanged"),uni.navigateBack({delta:1})):uni.showToast({title:"没有圣遗物二！",duration:3e3}):uni.showToast({title:"没有圣遗物!",duration:3e3})},toArtifact:function(t){uni.navigateTo({url:"/pages/character/config/artifact?index="+t})}}};e.default=o}).call(this,i("5a52")["default"])},c1a4:function(t,e,i){"use strict";i.r(e);var n=i("f2af"),a=i("8f9a");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"22242fad",null,!1,n["a"],o);e["default"]=c.exports},cd8c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:String,default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},f2af:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniSection:i("8483").default,uniList:i("b532").default,uniListItem:i("6fa1").default,weaponItem:i("6788").default,buttonBarBottom:i("f603").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-section",{attrs:{title:"人物",type:"line"}},[i("uni-list",[i("v-uni-picker",{attrs:{value:t.temp.cLevel,range:t.levelArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.levelChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{"thumb-size":"lg",showArrow:!0,thumb:t.character.avatar,title:"等级",note:"最少为80级突破",rightText:t.levelArr[t.temp.cLevel]+"级"}})],1),i("v-uni-picker",{attrs:{value:t.temp.cStage,range:t.constellationArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.constellationChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"命座",note:"所选的影响伤害的命座默认触发",rightText:t.temp.cStage+"命"}})],1),i("v-uni-picker",{attrs:{mode:"multiSelector",value:t.temp.cSkills,range:t.skillArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.skillChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"技能",note:"按实际填写,命座不会再次+3",rightText:t.skillText}})],1)],1)],1),i("uni-section",{attrs:{title:"武器",type:"line"}},[i("weapon-item"),t.tempWeapon.options?i("v-uni-picker",{attrs:{mode:"multiSelector",disabled:t.disableWeaponOptions,value:t.wIndexs,range:t.tempWeapon.options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.optionsChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"武器特效",note:t.weaponOptionsNote,rightText:t.wEffectTexts}})],1):t._e(),i("v-uni-picker",{attrs:{value:t.temp.wStage,range:t.refineArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.refineChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"精炼级别",note:"选择五星默认1精, 其他默认5精",rightText:t.refineArr[t.temp.wStage]+"精"}})],1)],1),i("uni-section",{attrs:{title:"圣遗物",type:"line"}},[i("v-uni-view",{staticClass:"uni-list"},[t.artifacts[0]?i("uni-list-item",{attrs:{"thumb-size":"lg",showArrow:!0,clickable:!0,note:t.artifactText,thumb:t.artifacts[0].url,title:t.artifacts[0].chs+t.setNum},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(0)}}}):i("uni-list-item",{attrs:{title:"点击选择圣遗物套装一","thumb-size":"lg",showArrow:!0,thumb:t.noArtifactPic,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(0)}}}),t.temp.aSets?i("v-uni-view",[t.artifacts[1]?i("uni-list-item",{attrs:{showArrow:!0,"thumb-size":"lg",clickable:!0,thumb:t.artifacts[1].url,title:t.artifacts[1].chs+" [2]",note:t.artifacts[1].effectText[0]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(1)}}}):i("uni-list-item",{attrs:{title:"点击选择圣遗物套装二",showArrow:!0,"thumb-size":"lg",thumb:t.noArtifactPic,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(1)}}})],1):t.artifacts[0].options?i("v-uni-picker",{attrs:{mode:"multiSelector",disabled:t.disableArtifactOptions,value:t.aIndexs,range:t.artifacts[0].options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.artifactsOptionsChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"圣遗物特效",note:t.artifacOptionsNote,rightText:t.aEffectTexts}})],1):t._e(),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.temp.aSets,title:"开启圣遗物套装二"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tapSwitch.apply(void 0,arguments)}}})],1)],1),i("uni-section",{attrs:{title:"设置",type:"line"}},[i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.temp.cNotice,title:"提醒天赋素材",note:t.character.remind.name},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(0)}}}),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.temp.wNotice,title:"提醒武器素材",note:t.tempWeapon.remind.name},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1)}}})],1),i("v-uni-view",{staticStyle:{height:"60px"}}),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}},[i("button-bar-bottom",{attrs:{text:t.saveText}})],1)],1)},s=[]},f603:function(t,e,i){"use strict";i.r(e);var n=i("aa85"),a=i("67ed");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("2f1f");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"44ac4022",null,!1,n["a"],o);e["default"]=c.exports},fc5c:function(t,e,i){"use strict";i.r(e);var n=i("cd8c"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a}}]);