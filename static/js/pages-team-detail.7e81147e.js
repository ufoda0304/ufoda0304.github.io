(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-team-detail"],{2184:function(t,e,i){"use strict";i.r(e);var n=i("49b2"),a=i("56a5");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("6efe");var s,r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"68e7648b",null,!1,n["a"],s);e["default"]=o.exports},2826:function(t,e,i){var n=i("c399");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1f412a45",n,!0,{sourceMap:!1,shadowMode:!1})},"2d31":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a1b9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:16,type:"arrowright"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},c=[]},"49b2":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={uniCard:i("5083").default,uniSection:i("8483").default,uniList:i("b532").default,uniListItem:i("6fa1").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.needInit?t._l(t.initPresets,(function(e,n){return i("uni-card",{key:n,attrs:{margin:"20px",padding:"0",spacing:"0"}},[i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:t.charactersData[e.cId].avatar,title:"该角色未初始化，无法进行计算..",rightText:"配置",showArrow:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toInit(e)}}})],1)})):i("v-uni-view",[i("uni-card",{attrs:{padding:"0",spacing:"0",margin:"14px"}},[i("uni-section",{attrs:{title:"总伤害",type:"line",rightText:t.team.sText}},[i("uni-list",[i("uni-list-item",{attrs:{showBadge:!0,title:t.team.sTitle,clickable:!0,rightText:t.team.dps},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:t.team.result.color}},[t._v(t._s(t.team.result.score))])]},proxy:!0}],null,!1,1238893863)}),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.showSequence,title:"技能轴 - "+t.team.time+"秒"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchSequence.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showSequence,expression:"showSequence"}]},[i("uni-list-item",{attrs:{title:"技能轴来自",rightText:t.team.from}}),t._l(t.team.sequence,(function(e,n){return i("uni-list-item",{key:e.title,staticClass:"swiper-item-bg",attrs:{title:e.title,thumb:t.members[e.index].avatar,rightText:e.text}})}))],2)],1)],1)],1),t._l(t.team.results,(function(e,n){return i("uni-card",{key:n,attrs:{padding:"0",spacing:"0",margin:"14px"}},[i("uni-section",{attrs:{type:"line",title:e.name+" "+e.text,rightText:e.sText}},[e.notices.length>0?i("v-uni-view"):t._e(),i("uni-list",[i("uni-list-item",{attrs:{clickable:!0,"thumb-size":"lg",thumb:t.members[n].avatar,title:e.title,note:e.note,rightText:e.dps},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e.id)}}}),t._l(e.notices,(function(t,e){return i("uni-list-item",{key:e,attrs:{note:"注意: "+t.title}})})),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[n],title:"伤害构成 - "+e.actions.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(n)}}}),i("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[n],expression:"switchChecked[index]"}],attrs:{showSwitch:!0,switchChecked:t.switchChecked2[n],note:t.switchChecked2[n]?t.formulaText:"团队增益",title:"显示计算乘区"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange2(n)}}}),t._l(e.actions,(function(e,a){return i("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[n],expression:"switchChecked[index]"}],key:e.id,staticClass:"swiper-item-bg",attrs:{title:e.title,note:t.switchChecked2[n]?e.formula:e.note,rightText:e.text}})}))],2)],1)],1)}))],2)],2)},c=[]},"56a5":function(t,e,i){"use strict";i.r(e);var n=i("f8af"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},5981:function(t,e,i){"use strict";var n=i("aa3b"),a=i.n(n);a.a},"6efe":function(t,e,i){"use strict";var n=i("2826"),a=i.n(n);a.a},8483:function(t,e,i){"use strict";i.r(e);var n=i("2d31"),a=i("fc5c");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("5981");var s,r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"516ec331",null,!1,n["a"],s);e["default"]=o.exports},aa3b:function(t,e,i){var n=i("b3ac");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("63b61ad0",n,!0,{sourceMap:!1,shadowMode:!1})},b3ac:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-516ec331]{background-color:#fff}.uni-list-item__content[data-v-516ec331]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-516ec331]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-516ec331]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-516ec331]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-516ec331]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-516ec331]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-516ec331]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-516ec331]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-516ec331]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-516ec331]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-516ec331]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-516ec331]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-516ec331]{display:flex;align-items:center;padding-left:10px;color:#b1968b}.uni-list-item__extra-text[data-v-516ec331]{font-size:12px;color:#999}',""]),t.exports=e},c399:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".swiper-item-bg[data-v-68e7648b]{color:#7f858a;background-color:#f5f5f5}.example-body[data-v-68e7648b]{\ndisplay:flex;\nflex-direction:row;justify-content:flex-start;align-items:flex-end;flex-wrap:wrap}.tag-view[data-v-68e7648b]{margin-right:10px}.goods-carts[data-v-68e7648b]{\ndisplay:flex;\nflex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:1000}",""]),t.exports=e},cd8c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:String,default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},f8af:function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("b85c")),c=n(i("5530")),s=i("26cb"),r=i("6f0e"),o=i("6078"),u=i("2062"),l={data:function(){return{needInit:!1,initPresets:[],charactersData:{},formulaText:"基础区 * 增伤 * 期望 * 防御 * 反应 * 抗性 * 倍率",color:"rgb(211,159,81)",score:"",members:[],showSequence:!1,switchChecked:[!1,!1,!1,!1],switchChecked2:[!1,!1,!1,!1],presets:[],team:{},index:0,showRecharges:!1,showTeamBuffs:[],value:["0"],preset:{},options:[{icon:"star",text:"收藏"},{icon:"color",text:" 预设",info:0},{icon:"vip",text:"词条",info:0},{icon:"fire",text:"数据",info:0},{icon:"staff",text:"队友",info:0}]}},computed:(0,c.default)({},(0,s.mapState)(["Team","character"])),onUnload:function(){uni.$off("presetChanged"),t.log("unload presetChanged")},onLoad:function(t){var e=r.Teams[t.teamId];if(e){this.$store.commit("setTeam",e),this.charactersData=u.charactersData;var i=this;uni.$on("presetChanged",(function(){i.initData()})),i.initData()}else uni.reLaunch({url:"./team"})},methods:{initData:function(){if(uni.showLoading({title:"正在计算,请稍后!"}),this.team=(0,o.getTeamData)(this.Team),this.team.needInit)return this.needInit=this.team.needInit,this.initPresets=this.team.initPresets,void uni.hideLoading();this.needInit=!1;var t,e=(0,a.default)(this.team.results);try{for(e.s();!(t=e.n()).done;){var i,n=t.value,c=uni.getStorageSync(n.id),s=(0,a.default)(n.requires);try{for(s.s();!(i=s.n()).done;){var r=i.value;r.wId&&r.wId!=c.wId||r.cStage&&r.cStage>c.cStage?n.notices.push(r):r.recharge&&r.recharge>c.recharge&&(r.title+="   (角色充能:"+c.recharge+"%)",n.notices.push(r))}}catch(u){s.e(u)}finally{s.f()}n.title=c.cNote,n.note=c.eNote,n.name=this.charactersData[n.id].chs,c.score&&(n.text=c.score),this.members.push(this.charactersData[n.id]),uni.hideLoading()}}catch(u){e.e(u)}finally{e.f()}uni.setNavigationBarTitle({title:"默认队伍预设"})},onClick:function(t){switch(t.index){case 0:uni.navigateTo({url:"config/action"});break;default:break}},switchChange2:function(t){var e=this.switchChecked2[t];this.switchChecked2[t]=!e||!e,this.$forceUpdate()},switchChange:function(t){var e=this.switchChecked[t];this.switchChecked[t]=!e||!e,this.$forceUpdate()},setIndex:function(t){this.index=t},switchSequence:function(t){this.showSequence=t.value},switchRecharges:function(t){this.showRecharges=t.value},change:function(e){t.log(e)},toInit:function(t){this.$store.commit("setPreset",t),uni.navigateTo({url:"./config/character"})},toDetail:function(t){var e=uni.getStorageSync(t);this.$store.commit("setPreset",e),uni.navigateTo({url:"./config/character"})}}};e.default=l}).call(this,i("5a52")["default"])},fc5c:function(t,e,i){"use strict";i.r(e);var n=i("cd8c"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a}}]);