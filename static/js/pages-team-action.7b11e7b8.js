(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-team-action"],{"007f":function(t,e,i){"use strict";i.r(e);var n=i("7c4b"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"08e2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},2813:function(t,e,i){"use strict";var n=i("bfb2"),a=i.n(n);a.a},"5c5f":function(t,e,i){"use strict";var n=i("6213"),a=i.n(n);a.a},"5c6e":function(t,e,i){"use strict";i.r(e);var n=i("6f15"),a=i("007f");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5c5f");var c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"5fe8c55a",null,!1,n["a"],void 0);e["default"]=r.exports},6213:function(t,e,i){var n=i("f0b7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2e8ee5d8",n,!0,{sourceMap:!1,shadowMode:!1})},"6dee":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"6f15":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniSection:i("a009").default,uniListItem:i("237e").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"warp"},[i("uni-section",{attrs:{title:"说明",type:"line"}}),i("uni-list-item",{staticClass:"item-space",attrs:{title:"伤害计算的的公式为",note:"增伤* 期望* 防御* 反应* 抗性* 基础（攻击* 倍率 + 其他）"}}),i("uni-list-item",{attrs:{title:"剧变反应的计算公式为",note:"次数* 基础* 系数* 抗性* 增伤（精通 + 其他）"}}),i("uni-list-item",{attrs:{title:"其他提示",note:"点击列表可以查看具体的Buff组成"}}),i("uni-section",{attrs:{title:t.result.title,type:"line",rightText:t.result.text}}),t._l(t.result.actions,(function(e,n){return i("uni-list-item",{key:e.id,attrs:{clickable:!0,title:e.title,note:e.formula,rightText:e.text},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toBuffs(e,t.result.id)}}})}))],2)},o=[]},"72af":function(t,e,i){"use strict";i.r(e);var n=i("6dee"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"7c4b":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=i("26cb"),c=i("10b5"),r={data:function(){return{result:{},formulaText:"增伤* 期望* 防御* 增幅* 抗性* 基础（攻击* 倍率 + 其他）",index:0,cData:{},switchChecked:[!1,!1,!1,!1],switchChecked2:[!1,!1,!1,!1]}},computed:(0,a.default)({},(0,o.mapState)(["Team","version","character"])),onLoad:function(t){this.index=t.index,this.result=this.Team.results[t.index],this.cData=c.charactersData},methods:{switchChange2:function(t){var e=this.switchChecked2[t];this.switchChecked2[t]=!e||!e,this.$forceUpdate()},toBuffs:function(t,e){this.$store.commit("setAction",t),uni.navigateTo({url:"/pages/team/buff?cId="+e})},initData:function(){}}};e.default=r},a009:function(t,e,i){"use strict";i.r(e);var n=i("badd"),a=i("72af");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2813");var c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"42ced052",null,!1,n["a"],void 0);e["default"]=r.exports},badd:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("8bd5").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},bfb2:function(t,e,i){var n=i("08e2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("ae24b342",n,!0,{sourceMap:!1,shadowMode:!1})},f0b7:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".card-actions[data-v-5fe8c55a]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:36px;border-top:1px #eee solid}.card-actions-item[data-v-5fe8c55a]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-5fe8c55a]{font-size:12px;color:#666;margin-left:5px}",""]),t.exports=e}}]);