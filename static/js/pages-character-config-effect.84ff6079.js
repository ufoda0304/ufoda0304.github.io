(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-effect"],{"0eae":function(t,e,a){var i=a("c363");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0a61cfa4",i,!0,{sourceMap:!1,shadowMode:!1})},"0ef5":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".content[data-v-710b46ce]{width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:2.55555556;color:#fff;background-color:#ad9388}.bottom-view[data-v-710b46ce]{background-color:#ad9388;height:calc(env(safe-area-inset-bottom)/2)}.goods-carts[data-v-710b46ce]{background-color:#ad9388;display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:1000}",""]),t.exports=e},"1a55":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticStyle:{height:"60px"}}),a("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"}},[a("v-uni-view",{staticClass:"content"},[t._v("保存")]),a("v-uni-view",{staticClass:"bottom-view"})],1)],1)},r=[]},"1b72":function(t,e,a){"use strict";a.r(e);var i=a("c863"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"1c45":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{},data:function(){return{}}};e.default=i},3474:function(t,e,a){"use strict";var i=a("4a25"),n=a.n(i);n.a},3931:function(t,e,a){var i=a("8a21");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("52489e27",i,!0,{sourceMap:!1,shadowMode:!1})},"408b":function(t,e,a){"use strict";a.r(e);var i=a("9d27"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"4a25":function(t,e,a){var i=a("0ef5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6f1e2e66",i,!0,{sourceMap:!1,shadowMode:!1})},5083:function(t,e,a){"use strict";a.r(e);var i=a("a3e7"),n=a("408b");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("b3ec");var c,d=a("f0c5"),o=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"6d06604a",null,!1,i["a"],c);e["default"]=o.exports},"67ed":function(t,e,a){"use strict";a.r(e);var i=a("1c45"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"8a21":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".image[data-v-751470b6]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-751470b6]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.uni-grid-item[data-v-751470b6]{height:auto!important}.grid-item-box[data-v-751470b6]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?40?% 0 0 0;margin:%?8?%;border-radius:%?8?%}",""]),t.exports=e},"9d27":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=i},a3e7:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?a("v-uni-view",{staticClass:"uni-card__cover"},[a("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?a("v-uni-view",{staticClass:"uni-card__header"},[a("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?a("v-uni-view",{staticClass:"uni-card__header-avatar"},[a("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),a("v-uni-view",{staticClass:"uni-card__header-content"},[a("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?a("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),a("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[a("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),a("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),a("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},a55b:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniCard:a("5083").default,uniList:a("b532").default,uniListItem:a("6fa1").default,buttonBarBottom:a("f603").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t._l(t.presets,(function(e,i){return a("uni-card",{key:i,attrs:{margin:"20px",padding:"0",spacing:"0"}},[a("uni-list",[a("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:t.charactersData[e.cId].avatar,title:e.cNote,note:e.eNote,rightText:"配置",showArrow:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e.cId)}}}),0==i?a("v-uni-view",[t._l(t.resonances,(function(t,e){return a("uni-list-item",{key:t.title,attrs:{title:t.title,note:t.text}})})),t._l(t.options,(function(e,i){return a("uni-list-item",{key:e.title,attrs:{showSwitch:"true",switchChecked:"true",title:e.title,note:e.text},on:{switchChange:function(a){arguments[0]=a=t.$handleEvent(a),t.closeEffect(e)}}})}))],2):t._e(),t._l(t.effectsArr[i],(function(e,i){return a("uni-list-item",{key:e.title,attrs:{showSwitch:!t.disbaleObj[e.id],switchChecked:"true",clickable:!0,title:e.title,note:e.text},on:{switchChange:function(a){arguments[0]=a=t.$handleEvent(a),t.closeEffect(e)}}})}))],2)],1)})),a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}},[a("button-bar-bottom",{attrs:{text:"保存"}})],1)],2)},r=[]},b3ec:function(t,e,a){"use strict";var i=a("0eae"),n=a.n(i);n.a},b7a0:function(t,e,a){"use strict";a.r(e);var i=a("a55b"),n=a("1b72");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("c748");var c,d=a("f0c5"),o=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"751470b6",null,!1,i["a"],c);e["default"]=o.exports},c363:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},c748:function(t,e,a){"use strict";var i=a("3931"),n=a.n(i);n.a},c863:function(t,e,a){"use strict";(function(t){var i=a("4ea4");a("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("b85c")),r=i(a("5530")),c=a("6835"),d=(a("6f8b"),a("2062")),o=(a("fd88"),a("26cb")),s={data:function(){return{disbaleObj:{},index:0,resonances:[],options:[],effectsArr:[],closedObj:{},temp:{},names:[],presets:[],effectTextArrs:[],effects:[]}},computed:(0,r.default)({},(0,o.mapState)(["preset","selectIds","character","version"])),onLoad:function(){var t=this;t.initData(),uni.$on("presetChanged",(function(){t.$store.commit("recoverPreset"),t.initData()}))},methods:{toPanel:function(){},closeEffect:function(e){e.isClose?e.isClose=!e.isClose:e.isClose=!0,t.log(e)},toDetail:function(t){this.$store.dispatch("setTempPreset",t),uni.navigateTo({url:"../../team/config/character"})},save:function(){var t,e={},a=(0,n.default)(this.resonances);try{for(a.s();!(t=a.n()).done;){var i=t.value;e[i.id]=i}}catch(v){a.e(v)}finally{a.f()}var r,c=(0,n.default)(this.options);try{for(c.s();!(r=c.n()).done;){var d=r.value;d.isClose||(e[d.id]=d)}}catch(v){c.e(v)}finally{c.f()}var o,s=(0,n.default)(this.effectsArr);try{for(s.s();!(o=s.n()).done;){var u,l=o.value,f=(0,n.default)(l);try{for(f.s();!(u=f.n()).done;){var h=u.value;h.isClose||(e[h.id]=h)}}catch(v){f.e(v)}finally{f.f()}}}catch(v){s.e(v)}finally{s.f()}this.temp.gContent=this.names.join(" / "),this.temp.gEffects=e,this.temp.isGoup=!0,this.temp.gIds=this.selectIds,this.$store.dispatch("handlePreset",this.temp),uni.navigateBack({delta:2})},initData:function(){this.effectsArr=[],this.presets=[],this.resonances=[],uni.showLoading({});var t=JSON.parse(JSON.stringify(this.preset));this.temp=t,this.charactersData=d.charactersData;for(var e={fire:0,rock:0,wind:0,ice:0,thunder:0,water:0},a=0;a<this.selectIds.length;a++){var i=this.selectIds[a],n=(0,c.getPreset)(i,this.version);if(0==a){var r=n.effects.filter((function(t){return t.type<2&&!t.own}));this.effectsArr.push(r)}else{var o=n.effects.filter((function(t){return t.type>0}));this.effectsArr.push(o)}this.presets.push(n);var s=n.element;e[s]+=1,a>0&&this.names.push(this.charactersData[i].chs)}e.fire>1&&this.resonances.push({id:"shuanghuo",title:"共鸣 - 双火",text:"攻击力提升25%"}),e.ice>1&&this.resonances.push({id:"shuangbing",title:"共鸣 - 双冰",text:"暴击率提升15%"}),e.rock>1&&this.resonances.push({id:"shuangyan",title:"共鸣 - 双岩",text:"增伤15%,目标岩抗降低20%"}),e.ice>0&&e.thunder>0&&this.options.push({id:"chaodao",title:"效果 - 超导",text:"目标物理抗性降低40%"}),e.ice>0&&e.water>0&&this.options.push({id:"dongjie",title:"效果 - 冻结",text:"目标处于冻结状态"}),uni.hideLoading({})}}};e.default=s}).call(this,a("5a52")["default"])},f603:function(t,e,a){"use strict";a.r(e);var i=a("1a55"),n=a("67ed");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("3474");var c,d=a("f0c5"),o=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"710b46ce",null,!1,i["a"],c);e["default"]=o.exports}}]);