(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-property"],{"1c45":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{color:{type:String,default:"blue"},InputBottom:{type:Number,default:0},text:{type:String,default:"确定"}},data:function(){return{}}};e.default=a},"2f1f":function(t,e,i){"use strict";var a=i("9cd5"),n=i.n(a);n.a},"4a6d":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),r=i("26cb"),s={data:function(){return{W:{}}},computed:(0,n.default)((0,n.default)({},(0,r.mapState)(["preset"])),(0,r.mapGetters)(["weapon"])),destroyed:function(){uni.$off("weaponChanged")},created:function(t){this.temp=JSON.parse(JSON.stringify(this.preset)),this.setW(this.weapon);var e=this;uni.$on("weaponChanged",(function(t){t.name!=e.W.name&&(e.setW(t),4==t.star?e.temp.wStage=4:e.temp.wStage=0)}))},methods:{setW:function(t){this.W=t,this.$store.commit("setWeapon",t)},toW:function(t){uni.navigateTo({url:"/pages/character/config/weapon"})}}};e.default=s},5717:function(t,e,i){"use strict";i.r(e);var a=i("4a6d"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},6788:function(t,e,i){"use strict";i.r(e);var a=i("970f"),n=i("5717");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"55e0ac9c",null,!1,a["a"],s);e["default"]=o.exports},"67ed":function(t,e,i){"use strict";i.r(e);var a=i("1c45"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},8504:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniSection:i("8483").default,weaponItem:i("6788").default,uniList:i("b532").default,uniListItem:i("6fa1").default,buttonBarBottom:i("f603").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-section",{attrs:{title:"武器",type:"line"}},[i("weapon-item"),i("uni-list",[i("v-uni-picker",{attrs:{value:t.temp.wStage,range:t.refineArr,"range-key":"weapon"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.refineChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"精炼",rightText:t.refine+"精"}})],1)],1)],1),i("uni-section",{attrs:{title:"圣遗物",type:"line"}},[i("v-uni-view",{staticClass:"uni-list"},[t.artifacts[0]?i("uni-list-item",{attrs:{"thumb-size":"lg",showArrow:!0,clickable:!0,title:"圣遗物套装一",note:t.artifactText,thumb:t.artifacts[0].url,title:t.artifacts[0].chs+t.setNum},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(0)}}}):i("uni-list-item",{attrs:{title:"点击选择圣遗物套装一","thumb-size":"lg",showArrow:!0,thumb:t.noArtifactPic,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(0)}}}),t.temp.aSets?i("v-uni-view",[t.artifacts[1]?i("uni-list-item",{attrs:{showArrow:!0,"thumb-size":"lg",clickable:!0,thumb:t.artifacts[1].url,title:t.artifacts[1].chs+" [2]",note:t.artifacts[1].effectText[0]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(1)}}}):i("uni-list-item",{attrs:{title:"点击选择圣遗物套装二",showArrow:!0,"thumb-size":"lg",thumb:t.noArtifactPic,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArtifact(1)}}})],1):t._e(),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.temp.aSets,title:"开启圣遗物套装二"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tapSwitch.apply(void 0,arguments)}}})],1)],1),i("uni-section",{attrs:{title:"人物",type:"line"}},[i("uni-list",[i("v-uni-picker",{attrs:{value:t.temp.cStage,range:t.constellationArr,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.constellationChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"命座",rightText:t.constellation+"命"}})],1),i("v-uni-picker",{attrs:{mode:"multiSelector",value:t.temp.cSkills,range:t.skillArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.skillChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"技能",rightText:t.skillText}})],1)],1)],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}},[i("button-bar-bottom",{attrs:{text:"保存"}})],1)],1)},r=[]},"8f9a":function(t,e,i){"use strict";i.r(e);var a=i("b97c"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"90c6":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".cu-bar[data-v-44ac4022]{background-color:#ad9388;display:flex;position:relative;align-items:center;height:50px;justify-content:space-between}.cu-bar.foot[data-v-44ac4022]{max-width:500px;margin:auto;position:fixed;width:100%;bottom:0;z-index:2;\n\t/* border-radius: 5px; */box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1);border-top:1px solid #e0dad3}.button-text[data-v-44ac4022]{color:#fff;align-items:center;display:flex;justify-content:center;text-align:center;position:relative;flex:2;align-self:stretch}",""]),t.exports=e},"970f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniListItem:i("6fa1").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toW.apply(void 0,arguments)}}},[t.W.url?i("uni-list-item",{attrs:{showArrow:!0,title:"武器",thumb:t.W.url,title:t.W.chs,"thumb-size":"lg",note:t.W.effect}}):i("uni-list-item",{attrs:{title:"点击选择武器",showArrow:!0},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar "},[t._v("无")])]},proxy:!0}])})],1)},r=[]},"9cd5":function(t,e,i){var a=i("90c6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ab339090",a,!0,{sourceMap:!1,shadowMode:!1})},aa85:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{height:"88rpx"}}),i("v-uni-view",{staticClass:"cu-bar  foot"},[i("v-uni-view",{staticClass:"button-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("submit")}}},[t._v(t._s(t.text))])],1)],1)},r=[]},b97c:function(t,e,i){"use strict";var a=i("4ea4");i("a434"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),r=i("26cb"),s={data:function(){return{artifactText:"",temp:{},artifacts:[],skillText:"9 / 9 / 9",noArtifactPic:"/static/artifact.png",setNum:"[4]",constellationArr:[0,1,2,3,4,5,6],skillArr:[[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10,11,12,13],[1,2,3,4,5,6,7,8,9,10,11,12,13]],refineArr:[1,2,3,4,5]}},computed:(0,n.default)((0,n.default)({refine:function(){return this.refineArr[this.temp.wStage].toString()},constellation:function(){return this.constellationArr[this.temp.cStage].toString()}},(0,r.mapState)(["preset"])),(0,r.mapGetters)(["artifact","artifact2"])),onUnload:function(){uni.$off("artifactChanged")},onLoad:function(){this.temp=JSON.parse(JSON.stringify(this.preset)),this.artifacts[0]=this.artifact,this.artifacts[1]=this.artifact2;var t={detail:{value:this.temp.cSkills}};this.skillChange(t);var e=this;uni.$on("artifactChanged",(function(t){var i=t.index;if(t.name){var a=(0,n.default)({},t);e.artifacts[i]=a,e.$forceUpdate(),1==e.temp.aSets&&e.artifacts.length>1&&e.artifacts[0].name==e.artifacts[1].name&&(e.temp.aSets=!1,e.artifacts.splice(1,1)),e.setArtifactText()}else e.artifacts.splice(i,1)})),this.setArtifactText()},methods:{setArtifactText:function(){this.temp.aSets?(this.setNum=" [2]",this.artifactText=this.artifacts[0].effectText[0]):(this.setNum=" [4]",this.artifactText=this.artifacts[0].effectText[0]+this.artifacts[0].effectText[1])},changeModel:function(){uni.showToast({title:"暂不支持修改",duration:2e3})},tapSwitch:function(t){this.temp.aSets=t.value,this.setArtifactText()},constellationChange:function(t){var e=t.detail.value;this.temp.cStage=e},skillChange:function(t){for(var e=t.detail.value,i="",a=[],n=0;n<e.length;n++)a.push(e[n]),n>0&&(i+=" / "),i+=e[n]+1;this.temp.cSkills=a,this.skillText=i},refineChange:function(t){this.temp.wStage=t.detail.value},save:function(){var t=this.artifacts.length;0!=t?!this.temp.aSets||this.artifacts[1]?(this.temp.aSets&&1==t&&(this.temp.aSets=!1),this.temp.aIds=[this.artifacts[0].name],this.temp.aSets&&this.temp.aIds.push(this.artifacts[1].name),this.$store.commit("handlePreset",this.temp),uni.navigateBack({delta:1})):uni.showToast({title:"没有圣遗物二！",duration:3e3}):uni.showToast({title:"没有圣遗物!",duration:3e3})},toArtifact:function(t){uni.navigateTo({url:"/pages/character/config/artifact?index="+t})}}};e.default=s},c1a4:function(t,e,i){"use strict";i.r(e);var a=i("8504"),n=i("8f9a");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"10866c3c",null,!1,a["a"],s);e["default"]=o.exports},f603:function(t,e,i){"use strict";i.r(e);var a=i("aa85"),n=i("67ed");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("2f1f");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"44ac4022",null,!1,a["a"],s);e["default"]=o.exports}}]);