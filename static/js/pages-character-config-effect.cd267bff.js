(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-effect"],{"1b72":function(t,e,n){"use strict";n.r(e);var i=n("c863"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"1c45":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{color:{type:String,default:"blue"},InputBottom:{type:Number,default:0},text:{type:String,default:"确定"}},data:function(){return{}}};e.default=i},"2f1f":function(t,e,n){"use strict";var i=n("9cd5"),a=n.n(i);a.a},"67ed":function(t,e,n){"use strict";n.r(e);var i=n("1c45"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"90c6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".cu-bar[data-v-44ac4022]{background-color:#ad9388;display:flex;position:relative;align-items:center;height:50px;justify-content:space-between}.cu-bar.foot[data-v-44ac4022]{max-width:500px;margin:auto;position:fixed;width:100%;bottom:0;z-index:2;\n\t/* border-radius: 5px; */box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1);border-top:1px solid #e0dad3}.button-text[data-v-44ac4022]{color:#fff;align-items:center;display:flex;justify-content:center;text-align:center;position:relative;flex:2;align-self:stretch}",""]),t.exports=e},"9cd5":function(t,e,n){var i=n("90c6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("ab339090",i,!0,{sourceMap:!1,shadowMode:!1})},aa85:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticStyle:{height:"88rpx"}}),n("v-uni-view",{staticClass:"cu-bar  foot"},[n("v-uni-view",{staticClass:"button-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("submit")}}},[t._v(t._s(t.text))])],1)],1)},s=[]},b7a0:function(t,e,n){"use strict";n.r(e);var i=n("fe6f"),a=n("1b72");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"35730e5b",null,!1,i["a"],r);e["default"]=u.exports},c863:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("b85c")),s=i(n("5530")),r=n("6f8b"),c=n("2062"),u=n("fd88"),f=n("26cb"),o={data:function(){return{temp:{},names:[],presets:[],resonances:[],effectTextArrs:[],effects:[]}},computed:(0,s.default)({},(0,f.mapState)(["preset","selectIds","character"])),onLoad:function(){this.initData()},methods:{switchWeights:function(t,e){var n=this.effects[t][e];n.isClose?n.isClose=!1:n.isClose=!0},save:function(){for(var t={},e=0;e<this.effects.length;e++){var n,i=this.effects[e],s=(0,a.default)(i);try{for(s.s();!(n=s.n()).done;){var r=n.value;1==r.isClose||(t[r.id]=r)}}catch(o){s.e(o)}finally{s.f()}}var c,u=(0,a.default)(this.resonances);try{for(u.s();!(c=u.n()).done;){var f=c.value;t[f.id]=f}}catch(o){u.e(o)}finally{u.f()}this.names.unshift(this.character.chs),this.temp.gContent=this.names.join(" / "),this.temp.gEffects=t,this.temp.isGoup=!0,this.temp.gIds=this.selectIds,this.$store.dispatch("handlePreset",this.temp),uni.navigateBack({delta:2})},initData:function(){var t=JSON.parse(JSON.stringify(this.preset));this.temp=t;var e=(0,r.getAttribute)(t);if(this.selectIds[1]){for(var n={fire:0,rock:0,wind:0,ice:0,thunder:0,water:0},i=[],s=0;s<this.selectIds.length;s++){var f=this.selectIds[s],o=c.charactersData[f].element;if(n[o]+=1,s>0){var l=c.charactersData[f].chs;i.push(l);var d=uni.getStorageSync(f);if(this.presets.push(d),d.effects){var h,v=(0,a.default)(d.effects);try{for(v.s();!(h=v.n()).done;){var p=h.value;if(p.id){var b=u.Effects[p.id];b&&(p.value?b.apply(e,p.value):b.apply(e))}}}catch(w){v.e(w)}finally{v.f()}}this.effects.push(d.effects),this.effectTextArrs.push(e.gBuffs),e.gBuffs=[]}}n.fire>1&&this.resonances.push({id:"shuanghuo",title:"共鸣 - 双火",note:"攻击力提升25%"}),n.ice>1&&this.resonances.push({id:"shuangbing",title:"共鸣 - 双冰",note:"暴击率提升15%"}),n.rock>1&&this.resonances.push({id:"shuangyan",title:"共鸣 - 双岩",note:"伤害提升15%,目标岩元素抗性降低15%"});var g=[],m=[];n.ice>0&&n.thunder>0&&(g.push({id:"chaodao"}),m.push(["效果 - 超导","目标物理抗性降低40%"])),n.ice>0&&n.water>0&&(g.push({id:"dongjie"}),m.push(["效果 - 冻结","目标处于冻结状态"])),g.length>0&&(i.push("其他"),this.effects.push(g),this.effectTextArrs.push(m)),this.names=i}}}};e.default=o},f603:function(t,e,n){"use strict";n.r(e);var i=n("aa85"),a=n("67ed");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("2f1f");var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"44ac4022",null,!1,i["a"],r);e["default"]=u.exports},fe6f:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uniSection:n("8483").default,uniListItem:n("6fa1").default,buttonBarBottom:n("f603").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.resonances.length>0?n("uni-section",{attrs:{title:"共鸣",type:"line"}}):t._e(),t._l(t.resonances,(function(t,e){return n("uni-list-item",{attrs:{title:t.title,note:t.note}})})),t._l(t.effectTextArrs,(function(e,i){return n("uni-section",{key:i,attrs:{title:t.names[i]+" - "+e.length,type:"line"}},t._l(e,(function(e,a){return n("uni-list-item",{key:a,attrs:{showSwitch:"true",switchChecked:"true",title:e[0],note:e[1]},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchWeights(i,a)}}})})),1)})),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}},[n("button-bar-bottom",{attrs:{text:"保存"}})],1)],2)},s=[]}}]);