(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-property"],{"8f9a":function(t,e,i){"use strict";i.r(e);var a=i("b97c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},b97c:function(t,e,i){"use strict";var a=i("4ea4");i("a434"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),s=i("26cb"),r={data:function(){return{temp:{},artifacts:[],skillText:"9 / 9 / 9",noArtifactPic:"/static/artifact.png",setNum:"[4]",constellationArr:[0,1,2,3,4,5,6],skillArr:[[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10,11,12,13],[1,2,3,4,5,6,7,8,9,10,11,12,13]],refineArr:[1,2,3,4,5]}},computed:(0,n.default)((0,n.default)({artifactText:function(){return this.temp.aSets?(this.setNum=" [2]",this.artifacts[0].effectText[0]):(this.setNum=" [4]",this.artifacts[0].effectText[0]+this.artifacts[0].effectText[1])},refine:function(){return this.refineArr[this.temp.wStage].toString()},constellation:function(){return this.constellationArr[this.temp.cStage].toString()}},(0,s.mapState)(["preset"])),(0,s.mapGetters)(["artifact","artifact2"])),onUnload:function(){uni.$off("artifactChanged")},onLoad:function(){this.temp=JSON.parse(JSON.stringify(this.preset)),this.artifacts[0]=this.artifact,this.artifacts[1]=this.artifact2;var t={detail:{value:this.temp.cSkills}};this.skillChange(t);var e=this;uni.$on("artifactChanged",(function(t){var i=t.index;if(t.name){var a=(0,n.default)({},t);e.artifacts[i]=a,e.$forceUpdate(),1==e.temp.aSets&&e.artifacts.length>1&&e.artifacts[0].name==e.artifacts[1].name&&(e.temp.aSets=!1,e.artifacts.splice(1,1))}else e.artifacts.splice(i,1)}))},methods:{changeModel:function(){uni.showToast({title:"暂不支持修改",duration:2e3})},tapSwitch:function(t){this.temp.aSets=t.value},constellationChange:function(t){var e=t.detail.value;this.temp.cStage=e},skillChange:function(t){for(var e=t.detail.value,i="",a=[],n=0;n<e.length;n++)a.push(e[n]),n>0&&(i+=" / "),i+=e[n]+1;this.temp.cSkills=a,this.skillText=i},refineChange:function(t){this.temp.wStage=t.detail.value},save:function(){var t=this.artifacts.length;0!=t?!this.temp.aSets||this.artifacts[1]?(this.temp.aSets&&1==t&&(this.temp.aSets=!1),this.temp.aIds=[this.artifacts[0].name],this.temp.aSets&&this.temp.aIds.push(this.artifacts[1].name),this.$store.commit("handlePreset",this.temp),uni.navigateBack({delta:1})):uni.showToast({title:"没有圣遗物二！",duration:3e3}):uni.showToast({title:"没有圣遗物!",duration:3e3})},toArtifact:function(t){uni.navigateTo({url:"/pages/character/config/artifact?index="+t})}}};e.default=r},c1a4:function(t,e,i){"use strict";i.r(e);var a=i("d147"),n=i("8f9a");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var r,c=i("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"e431b77c",null,!1,a["a"],r);e["default"]=l.exports},d147:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uniSection:i("8483").default,weaponItem:i("6788").default,uniList:i("b532").default,uniListItem:i("6fa1").default,buttonBarBottom:i("f603").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-section",{attrs:{title:"武器",type:"line"}},[i("weapon-item"),i("uni-list",[i("v-uni-picker",{attrs:{value:t.temp.wStage,range:t.refineArr,"range-key":"weapon"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.refineChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"精炼",rightText:t.refine+"精"}})],1)],1)],1),i("uni-section",{attrs:{title:"圣遗物",type:"line"}},[i("v-uni-view",{staticClass:"uni-list"},[t.artifacts[0]?i("uni-list-item",{attrs:{"thumb-size":"lg",showArrow:!0,clickable:!0,title:"圣遗物套装一",note:t.artifactText,thumb:t.artifacts[0].url,title:t.artifacts[0].chs+t.setNum},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(0)}}}):i("uni-list-item",{attrs:{title:"点击选择圣遗物套装一","thumb-size":"lg",showArrow:!0,thumb:t.noArtifactPic,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(0)}}}),t.temp.aSets?i("v-uni-view",[t.artifacts[1]?i("uni-list-item",{attrs:{showArrow:!0,"thumb-size":"lg",clickable:!0,thumb:t.artifacts[1].url,title:t.artifacts[1].chs+" [2]",note:t.artifacts[1].effectText[0]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(1)}}}):i("uni-list-item",{attrs:{title:"点击选择圣遗物套装二",showArrow:!0,"thumb-size":"lg",thumb:t.noArtifactPic,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(1)}}})],1):t._e(),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.temp.aSets,title:"开启圣遗物套装二"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tapSwitch.apply(void 0,arguments)}}})],1)],1),i("uni-section",{attrs:{title:"人物",type:"line"}},[i("uni-list",[i("v-uni-picker",{attrs:{value:t.temp.cStage,range:t.constellationArr,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.constellationChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"命座",rightText:t.constellation+"命"}})],1),i("v-uni-picker",{attrs:{mode:"multiSelector",value:t.temp.cSkills,range:t.skillArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.skillChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"技能",rightText:t.skillText}})],1)],1)],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}},[i("button-bar-bottom",{attrs:{text:"保存"}})],1)],1)},s=[]}}]);