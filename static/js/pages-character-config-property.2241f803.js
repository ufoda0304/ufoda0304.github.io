(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-property"],{8483:function(t,e,i){"use strict";i.r(e);var a=i("aa45"),n=i("fc5c");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("eca8");var o,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"415fc788",null,!1,a["a"],o);e["default"]=r.exports},"8f9a":function(t,e,i){"use strict";i.r(e);var a=i("b97c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},aa45:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uniIcons:i("a1b9").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowdown"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},s=[]},b97c:function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("c975"),i("a434"),i("a9e3"),i("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("b85c")),s=a(i("5530")),o=(i("fd88"),i("26cb")),c={data:function(){return{weaponId:"",showAdapt:!1,isAdapt:!1,disableWeaponOptions:!1,disableArtifactOptions:!1,weaponOptionsNote:"大部分武器默认触发",artifacOptionsNote:"大部分圣遗物默认触发",wEffectTexts:"",aEffectTexts:"",tempWeapon:{},effectTexts:[],saveText:"保存",isGroup:!1,artifactText:"",temp:{},artifacts:[],skillText:"9 / 9 / 9",noArtifactPic:"/static/artifact.png",setNum:"[4]",constellationArr:["0","1","2","3","4","5","6"],skillArr:[[1,2,3,4,5,6,7,8,9,10,11],[1,2,3,4,5,6,7,8,9,10,11,12,13],[1,2,3,4,5,6,7,8,9,10,11,12,13]],refineArr:["1","2","3","4","5"],levelArr:["90","89","88","87","86","85"," 84","83","82","81","80"]}},computed:(0,s.default)((0,s.default)({},(0,o.mapState)(["preset"])),(0,o.mapGetters)(["artifact","artifact2","weapon","character"])),onUnload:function(){uni.$off("artifactChanged"),uni.$off("weaponChanged")},onLoad:function(t){this.temp=JSON.parse(JSON.stringify(this.preset)),this.tempWeapon=this.weapon,this.weaponId=this.weapon.name,this.artifacts[0]=this.artifact,this.artifacts[1]=this.artifact2,this.weapon.options&&this.setWeaponOptionsDisable(this.weapon),this.artifact.options&&!this.temp.aSets&&this.setArtifactOptionDisable(this.artifact,!0);var e={detail:{value:this.temp.cSkills}};this.skillChange(e);var i=this;uni.$on("weaponChanged",(function(t){t.name!=i.temp.wId&&(i.tempWeapon=t,i.temp.wId=t.name,i.temp.wNotice=!0,i.switchChange(1),i.setWeaponOptionsDisable(t),i.showAdapt=i.weaponId!=t.name,i.isAdapt=!1,5==t.star?i.temp.wStage=0:i.temp.wStage=4,i.$forceUpdate())})),uni.$on("artifactChanged",(function(t){var e=t.index;if(t.name){var a=(0,s.default)({},t);i.artifacts[e]=a,i.$forceUpdate(),1==i.temp.aSets&&i.artifacts.length>1&&i.artifacts[0].name==i.artifacts[1].name&&(i.temp.aSets=!1,i.artifacts.splice(1,1)),i.setArtifactText(),i.temp.aSets||i.setArtifactOptionDisable(t)}else i.artifacts.splice(e,1)})),this.setArtifactText()},methods:{onSwitchChange:function(t){this.isAdapt=!this.isAdapt},setArtifactOptionDisable:function(t,e){var i=!1,a=t.forceOption?t.forceOption[this.character.name]:null;a?i=!0:a=e?this.temp.aIndexs?this.temp.aIndexs:null:t.indexs?t.indexs:null,this.disableArtifactOptions=i,this.artifacOptionsNote=i?"该角色无法修改这个圣遗物的选项":"大部分圣遗物默认触发",this.setArtifactOptionText(a)},setWeaponOptionsDisable:function(t,e){var i=!1,a=t.forceOption?t.forceOption[this.character.name]:null;a&&(i=!0);var n=t.noOptionKey;n&&this.character.skillKey.indexOf(n)>-1&&(a=t.indexs,i=!0),i||(a=e?this.weapon.indexs?this.weapon.indexs:null:t.indexs?t.indexs:null),this.disableWeaponOptions=i,this.weaponOptionsNote=i?"该角色无法修改这个武器的选项":"大部分武器默认触发",this.setWeaponOptionText(a)},switchCompare:function(t){0==t?this.temp.aCompare?this.temp.aCompare=!this.temp.aCompare:this.temp.aCompare=!0:this.temp.wCompare?this.temp.wCompare=!this.temp.wCompare:this.temp.wCompare=!0},switchChange:function(t){0==t?this.temp.cNotice?this.temp.cNotice=!this.temp.cNotice:this.temp.cNotice=!0:this.temp.wNotice?this.temp.wNotice=!this.temp.wNotice:this.temp.wNotice=!0},setWeaponOptionText:function(t){if(t){for(var e=[],i=0;i<t.length;i++){var a=t[i];e.push(this.tempWeapon.options[i][a])}this.wIndexs=t,this.wEffectTexts=e.join(" / ")}},setArtifactOptionText:function(t){if(t){for(var e=[],i=0;i<t.length;i++){var a=t[i];e.push(this.artifacts[0].options[i][a])}this.aIndexs=t,this.aEffectTexts=e.join(" / ")}},artifactsOptionsChange:function(t){var e=t.detail.value;this.setArtifactOptionText(e)},optionsChange:function(t){var e=t.detail.value;this.setWeaponOptionText(e)},tapSwitch2:function(e){t.log(e.require),t.log(this.temp.cStage)},setArtifactText:function(){this.temp.aSets?(this.setNum=" [2]",this.artifactText=this.artifacts[0].effectText[0]):(this.setNum=" [4]",this.artifactText=this.artifacts[0].effectText[0]+this.artifacts[0].effectText[1])},changeModel:function(){uni.showToast({title:"暂不支持修改",duration:2e3})},tapSwitch:function(t){this.temp.aSets=t.value,this.setArtifactText()},constellationChange:function(t){var e=t.detail.value;this.temp.cStage=e},levelChange:function(t){var e=t.detail.value;this.temp.cLevel=e},skillChange:function(t){for(var e=t.detail.value,i=[],a=[],n=0;n<e.length;n++)a.push(e[n]),i.push(e[n]+1);this.temp.cSkills=a,this.skillText=i.join(" / ")},refineChange:function(t){this.temp.wStage=t.detail.value},changeAtkMinor:function(){if(this.isAdapt){var t,e=0,i=(0,n.default)(this.preset.aMajor);try{for(i.s();!(t=i.n()).done;){var a=t.value;1==a&&(e+=1)}}catch(f){i.e(f)}finally{i.f()}var s=this.preset.base[1],o=((this.preset.aMinor[1]-311)/s-.466*e)/.05,c=90-this.temp.cLevel,r=this.character,l=(r.attack[13]-r.attack[12])/10*(c-80)+r.attack[12]+parseFloat(this.tempWeapon.atk),p=(.05*o+.466*e)*l+311;this.temp.aMinor[1]=Math.floor(100*p)/100}},save:function(){var t=this.artifacts.length;0!=t?!this.temp.aSets||this.artifacts[1]?(this.temp.aSets&&1==t&&(this.temp.aSets=!1),this.temp.aIds=[this.artifacts[0].name],this.temp.aSets&&this.temp.aIds.push(this.artifacts[1].name),this.temp.cStage=Number(this.temp.cStage),this.temp.cLevel=Number(this.temp.cLevel),this.temp.wStage=Number(this.temp.wStage),this.temp.wIndexs=this.wIndexs,this.temp.aIndexs=this.aIndexs,this.changeAtkMinor(),this.$store.dispatch("handlePreset",this.temp),uni.navigateBack({delta:1})):uni.showToast({title:"没有圣遗物二！",duration:3e3}):uni.showToast({title:"没有圣遗物!",duration:3e3})},toArtifact:function(t){uni.navigateTo({url:"/pages/character/config/artifact?index="+t})}}};e.default=c}).call(this,i("5a52")["default"])},c114:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uniSection:i("8483").default,uniList:i("b532").default,uniListItem:i("6fa1").default,weaponItem:i("6788").default,buttonBarBottom:i("f603").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-section",{attrs:{title:"人物",type:"line"}},[i("uni-list",[i("v-uni-picker",{attrs:{value:t.temp.cLevel,range:t.levelArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.levelChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{"thumb-size":"lg",showArrow:!0,thumb:t.character.avatar,title:"等级",note:"最少为80级突破",rightText:t.levelArr[t.temp.cLevel]+"级"}})],1),i("v-uni-picker",{attrs:{value:t.temp.cStage,range:t.constellationArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.constellationChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"命座",note:"所选的影响伤害的命座默认触发",rightText:t.temp.cStage+"命"}})],1),i("v-uni-picker",{attrs:{mode:"multiSelector",value:t.temp.cSkills,range:t.skillArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.skillChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"技能",note:"按实际填写，命座不会再次+3",rightText:t.skillText}})],1)],1)],1),i("uni-section",{attrs:{title:"武器",type:"line"}},[i("weapon-item",{on:{changeWeaponAtk:function(e){arguments[0]=e=t.$handleEvent(e),t.onSwitchChange.apply(void 0,arguments)}}}),t.tempWeapon.options?i("v-uni-picker",{attrs:{mode:"multiSelector",disabled:t.disableWeaponOptions,value:t.wIndexs,range:t.tempWeapon.options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.optionsChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"武器特效",note:t.weaponOptionsNote,rightText:t.wEffectTexts}})],1):t._e(),i("v-uni-picker",{attrs:{value:t.temp.wStage,range:t.refineArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.refineChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"精炼级别",note:"选择五星默认1精, 其他默认5精",rightText:t.refineArr[t.temp.wStage]+"精"}})],1),i("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showAdapt,expression:"showAdapt"}],attrs:{showSwitch:!0,switchChecked:t.isAdapt,title:"自动调整",note:"保持攻击词条不变,自动改变圣遗物的攻击加成"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.onSwitchChange()}}})],1),i("uni-section",{attrs:{title:"圣遗物",type:"line"}},[i("v-uni-view",{staticClass:"uni-list"},[t.artifacts[0]?i("uni-list-item",{attrs:{"thumb-size":"lg",showArrow:!0,clickable:!0,note:t.artifactText,thumb:t.artifacts[0].url,title:t.artifacts[0].chs+t.setNum},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(0)}}}):i("uni-list-item",{attrs:{title:"点击选择圣遗物套装一","thumb-size":"lg",showArrow:!0,thumb:t.noArtifactPic,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(0)}}}),t.temp.aSets?i("v-uni-view",[t.artifacts[1]?i("uni-list-item",{attrs:{showArrow:!0,"thumb-size":"lg",clickable:!0,thumb:t.artifacts[1].url,title:t.artifacts[1].chs+" [2]",note:t.artifacts[1].effectText[0]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(1)}}}):i("uni-list-item",{attrs:{title:"点击选择圣遗物套装二",showArrow:!0,"thumb-size":"lg",thumb:t.noArtifactPic,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(1)}}})],1):i("v-uni-view",{attrs:{v:!0}},[t.artifacts[0].options?i("v-uni-picker",{attrs:{mode:"multiSelector",disabled:t.disableArtifactOptions,value:t.aIndexs,range:t.artifacts[0].options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.artifactsOptionsChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"圣遗物特效",note:t.artifacOptionsNote,rightText:t.aEffectTexts}})],1):t._e(),t.artifacts[0].note?i("uni-list-item",{attrs:{note:t.artifacts[0].note}}):t._e()],1),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.temp.aSets,title:"开启圣遗物套装二"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tapSwitch.apply(void 0,arguments)}}})],1)],1),i("uni-section",{attrs:{title:"素材提醒",type:"line"}},[i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.temp.cNotice,title:"天赋",note:t.character.remind.name},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(0)}}}),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.temp.wNotice,title:"武器",note:t.tempWeapon.remind.name},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1)}}})],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}},[i("button-bar-bottom",{attrs:{text:t.saveText}})],1)],1)},s=[]},c1a4:function(t,e,i){"use strict";i.r(e);var a=i("c114"),n=i("8f9a");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var o,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5f2a484e",null,!1,a["a"],o);e["default"]=r.exports},cd8c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:String,default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},d145:function(t,e,i){var a=i("ee2b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5e24ef81",a,!0,{sourceMap:!1,shadowMode:!1})},eca8:function(t,e,i){"use strict";var a=i("d145"),n=i.n(a);n.a},ee2b:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-415fc788]{background-color:#fff}.uni-list-item__content[data-v-415fc788]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-415fc788]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-415fc788]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-415fc788]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-415fc788]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-415fc788]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-415fc788]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-415fc788]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-415fc788]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-415fc788]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-415fc788]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-415fc788]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-415fc788]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-415fc788]{font-size:13px;color:#999}',""]),t.exports=e},fc5c:function(t,e,i){"use strict";i.r(e);var a=i("cd8c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a}}]);