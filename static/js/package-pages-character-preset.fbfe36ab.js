(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-preset"],{"01e4":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes:function(){var t=this.type,e=this.disabled,i=this.inverted,n=this.circle,a=this.mark,o=this.size,r=this.isTrue,s=["uni-tag--"+t,"uni-tag--"+o,r(e)?"uni-tag--disabled":"",r(i)?"uni-tag--"+t+"--inverted":"",r(n)?"uni-tag--circle":"",r(a)?"uni-tag--mark":"",r(i)?"uni-tag--inverted uni-tag-text--"+t:"","small"===o?"uni-tag-text--small":""];return s.join(" ")}},methods:{isTrue:function(t){return!0===t||"true"===t},onClick:function(){this.isTrue(this.disabled)||this.$emit("click")}}};e.default=n},1291:function(t,e,i){"use strict";i.r(e);var n=i("6b9d"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1acc":function(t,e,i){"use strict";i.r(e);var n=i("e4c9"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1f5d":function(t,e,i){"use strict";i.r(e);var n=i("cb90"),a=i("f1e5");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"762b152b",null,!1,n["a"],void 0);e["default"]=s.exports},3306:function(t,e,i){"use strict";i.r(e);var n=i("01e4"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"48c1":function(t,e,i){var n=i("780e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0a5803af",n,!0,{sourceMap:!1,shadowMode:!1})},"4eda":function(t,e,i){"use strict";i.r(e);var n=i("c857"),a=i("1acc");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("84eb");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"7903d0bb",null,!1,n["a"],void 0);e["default"]=s.exports},5445:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-text",{staticClass:"uni-tag",class:t.classes,style:t.customStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t._v(t._s(t.text))]):t._e()},a=[]},"5b58":function(t,e,i){"use strict";i.r(e);var n=i("5445"),a=i("3306");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("bf30");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"350e8d74",null,!1,n["a"],void 0);e["default"]=s.exports},"6b9d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},scroll:function(t){this.$emit("scroll",t)}}};e.default=n},"6c29":function(t,e,i){var n=i("a1ae");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("37f0ae79",n,!0,{sourceMap:!1,shadowMode:!1})},"780e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".tag-item[data-v-7903d0bb]{display:flex;justify-content:space-between;margin-top:5px;color:#999;font-size:14px}.tag-content[data-v-7903d0bb]{display:flex;flex-direction:row}.tag-body[data-v-7903d0bb]{display:flex;flex-direction:column;flex:1}.tag-margin[data-v-7903d0bb]{\n\t/* \t\ttext-align: center;\n\t\twidth: 20px; */margin-right:10px;border-color:#fff}.no-border[data-v-7903d0bb]{border-width:0}.card-actions[data-v-7903d0bb]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:36px;border-top:1px #eee solid}.card-actions-item[data-v-7903d0bb]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-7903d0bb]{font-size:12px;color:#666;margin-left:5px}",""]),t.exports=e},"84eb":function(t,e,i){"use strict";var n=i("48c1"),a=i.n(n);a.a},9293:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},a=[]},a1ae:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},add1:function(t,e,i){"use strict";i.r(e);var n=i("9293"),a=i("1291");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("ffd4");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6fce09b0",null,!1,n["a"],void 0);e["default"]=s.exports},bf30:function(t,e,i){"use strict";var n=i("da49"),a=i.n(n);a.a},c857:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("b993").default,uniPopupDialog:i("b4f6").default,uniCard:i("3d92").default,uniSection:i("89d3").default,uniList:i("add1").default,uniListItem:i("6e18").default,uniTag:i("5b58").default,uniIcons:i("fcef").default,tipsCard:i("1f5d").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[i("uni-popup-dialog",{attrs:{mode:"input",title:"输入预设名称",placeholder:"..."},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.doNext.apply(void 0,arguments)}},model:{value:t.nameValue,callback:function(e){t.nameValue=e},expression:"nameValue"}})],1),t._l(t.allItems,(function(e,n){return i("uni-card",{key:n,attrs:{margin:"16px",padding:"0",spacing:"0"}},[i("uni-section",{attrs:{title:e.name,rightText:t.compare[e.id],type:t.current==e.id?"circle":""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setCurrent(e)}}}),i("uni-list",{attrs:{border:!1}},[i("uni-list-item",{attrs:{clickable:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.load(e)}},scopedSlots:t._u([{key:"body",fn:function(){return[i("v-uni-view",{staticClass:"tag-body"},[i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:"tag-content"},[e.school.score?i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.tResult.score,"custom-style":"background-color: "+e.tResult.color+";"}}):t._e(),i("v-uni-view",[t._v(t._s(e.tResult.rightText+" / "+e.school.name))])],1)],1),i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:" tag-content"},[e.school.score?i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.dResult.score,"custom-style":"background-color: "+e.dResult.color+";"}}):t._e(),i("v-uni-view",[t._v(t._s(t.showGroupScore?e.dPanel:e.wNote+e.note))])],1)],1),e.gResult?i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:" tag-content"},[e.school.score?i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.gResult.score,"custom-style":"background-color: "+e.gResult.color+";"}}):t._e(),i("v-uni-view",[t._v(t._s(t.showGroupScore?e.gPanel:e.gContent))])],1)],1):t._e()],1)]},proxy:!0}],null,!0)})],1),i("v-uni-view",{staticClass:"card-actions no-border"},[i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(n,!0)}}},[i("uni-icons",{attrs:{type:"folder-add",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("复制")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(n,!1)}}},[i("uni-icons",{attrs:{type:"compose",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("重命名")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveTop(n)}}},[i("uni-icons",{attrs:{type:"arrow-up",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("置顶")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove(n)}}},[i("uni-icons",{attrs:{type:"trash",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("删除")])],1)],1)],1)})),i("tips-card",{attrs:{tipKey:"presetTips",tipTexts:t.tips,isCard:!0}})],2)},o=[]},cb90:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniCard:i("3d92").default,uniSection:i("89d3").default,uniList:i("add1").default,uniListItem:i("6e18").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",[t.isCard?i("uni-card",{attrs:{margin:"16px",padding:"0",spacing:"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close()}}},[i("uni-section",{attrs:{title:"说明",showIcon:!0,icon:"closeempty"}}),i("uni-list",t._l(t.tipTexts,(function(t,e){return i("uni-list-item",{key:e,staticClass:"item-space",attrs:{title:e+1+"、"+t}})})),1)],1):i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close()}}},[i("uni-section",{attrs:{title:"说明",showIcon:!0,icon:"closeempty"}}),i("uni-list",t._l(t.tipTexts,(function(t,e){return i("uni-list-item",{key:e,staticClass:"item-space",attrs:{title:e+1+"、"+t}})})),1)],1)],1):t._e()},o=[]},d0b3:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tips-card",props:{tipKey:{type:String,default:"one",required:!0},isCard:{type:[Boolean,String],default:!1},tipTexts:{}},data:function(){return{show:!0}},created:function(){this.$store.state.config[this.tipKey]&&(this.show=!1)},methods:{close:function(){var t=this;uni.showModal({title:"提示",content:"是否移除该提示？（没有更新不会再出现）",cancelText:"否",confirmText:"是",success:function(e){e.confirm&&(t.$store.commit("setConfigClose",t.tipKey),t.show=!1)}})}}};e.default=n},d159:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-tag[data-v-350e8d74]{line-height:14px;font-size:12px;font-weight:200;padding:4px 7px;color:#fff;border-radius:3px;background-color:#8f939c;border-width:%?1?%;border-style:solid;border-color:#8f939c;cursor:pointer}.uni-tag--default[data-v-350e8d74]{font-size:12px}.uni-tag--default--inverted[data-v-350e8d74]{color:#8f939c;border-color:#8f939c}.uni-tag--small[data-v-350e8d74]{padding:2px 5px;font-size:12px;border-radius:2px}.uni-tag--mini[data-v-350e8d74]{padding:1px 3px;font-size:12px;border-radius:2px}.uni-tag--primary[data-v-350e8d74]{background-color:#2979ff;border-color:#2979ff;color:#fff}.uni-tag--success[data-v-350e8d74]{color:#fff;background-color:#18bc37;border-color:#18bc37}.uni-tag--warning[data-v-350e8d74]{color:#fff;background-color:#f3a73f;border-color:#f3a73f}.uni-tag--error[data-v-350e8d74]{color:#fff;background-color:#e43d33;border-color:#e43d33}.uni-tag--primary--inverted[data-v-350e8d74]{color:#2979ff;border-color:#2979ff}.uni-tag--success--inverted[data-v-350e8d74]{color:#18bc37;border-color:#18bc37}.uni-tag--warning--inverted[data-v-350e8d74]{color:#f3a73f;border-color:#f3a73f}.uni-tag--error--inverted[data-v-350e8d74]{color:#e43d33;border-color:#e43d33}.uni-tag--inverted[data-v-350e8d74]{background-color:#fff}.uni-tag--circle[data-v-350e8d74]{border-radius:15px!important}.uni-tag--mark[data-v-350e8d74]{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-top-right-radius:15px!important;border-bottom-right-radius:15px!important}.uni-tag--disabled[data-v-350e8d74]{opacity:.5;cursor:not-allowed}.uni-tag-text[data-v-350e8d74]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-350e8d74]{color:#2979ff}.uni-tag-text--success[data-v-350e8d74]{color:#18bc37}.uni-tag-text--warning[data-v-350e8d74]{color:#f3a73f}.uni-tag-text--error[data-v-350e8d74]{color:#e43d33}.uni-tag-text--small[data-v-350e8d74]{font-size:12px}',""]),t.exports=e},da49:function(t,e,i){var n=i("d159");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5ef6d5d0",n,!0,{sourceMap:!1,shadowMode:!1})},e4c9:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c740"),i("a434"),i("3c65"),i("99af"),i("e9c4");var a=n(i("b85c")),o=n(i("5530")),r=i("26cb"),s={data:function(){return{tips:["复制一份新的预设，修改圣遗物或者武器，人物命座等配置，保存后返回此页面，观察不同配置下的圣遗物评分、数据评分、队伍评分，用于解决哪套圣遗物更好，哪把武器更好等问题。","右上角是以当前预设为基准100%，显示所有预设的单人/队伍差异，没有队伍或流派不一样会显示NA。","点击黄色标题区可以切换基准预设，点击白色信息区选择并加读取预设。"],showGroupScore:!1,showCompare:!1,compare:{},icon:{color:"#4cd964",size:"22",type:"spinner"},current:0,nameValue:"",value:"",index:0,isCopy:!1,none:"none",itemsArr:[],allItems:[],filterItems:[],texts:[]}},onLoad:function(t){this.preset?this.initData():uni.reLaunch({url:"../../index/index"})},computed:(0,o.default)({showScore:function(){return this.preset.school.score}},(0,r.mapState)(["preset","character"])),methods:{setCompare:function(){this.showCompare=!this.showCompare},setGroupScore:function(){this.showGroupScore=!this.showGroupScore},compareRatio:function(t){var e,i=(0,a.default)(this.allItems);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.school.name==t.school.name?this.compare[n.id]=this.getRatioText(n,t):this.compare[n.id]="NA"}}catch(o){i.e(o)}finally{i.f()}},getRatioText:function(t,e){return e.gResult&&t.gResult?(t.dResult.text/e.dResult.text*100).toFixed(0)+"% / "+(t.gResult.text/e.gResult.text*100).toFixed(0)+"%":(t.dResult.text/e.dResult.text*100).toFixed(0)+"% / NA"},initData:function(){uni.setNavigationBarTitle({title:this.character.chs});var t=(0,o.default)({},this.preset);this.id=t.cId,this.current=t.id;var e=uni.getStorageSync(this.id+"-presets"),i=[];if(t.school&&t.school.id){var n=t.school.id,a=uni.getStorageSync(n+"-presets");a&&(i=a,uni.removeStorageSync(n+"-presets"))}if(e[0]){var r=e.findIndex((function(e){return e.id==t.id}));r>-1?e.splice(r,1,t):e.unshift(t),this.allItems=i.concat(e)}else this.allItems=[t];this.compareRatio(t),uni.setStorageSync(this.id+"-presets",this.allItems)},copy:function(t){if(this.allItems.length>9)uni.showToast({title:"预设不能超过9个"});else{var e=(0,o.default)({},this.allItems[this.index]);e.name=t,e.id=Date.now(),this.allItems.splice(this.index,0,e),this.setPreset()}},remove:function(t){var e=this;this.allItems.length<2?uni.showToast({title:"无法删除",duration:2e3}):uni.showModal({title:"提示",content:"确定要删除?",success:function(i){if(i.confirm){var n=e.allItems[t].id;if(e.allItems.splice(t,1),n==e.current){var a=e.allItems[0];e.setPreset(a),e.current=a.id}else e.setPreset()}}})},rename:function(t){var e=this.allItems[this.index];e.name=t,this.preset.id!=e.id?this.setPreset():this.setPreset(e)},moveTop:function(t){if(t>0){var e=this.allItems[t];this.allItems.splice(t,1),this.allItems.unshift(e),this.current!=e.id?this.setPreset():uni.setStorageSync(this.id+"-presets",this.allItems)}},setCurrent:function(t){this.current=t.id,this.setPreset(t),this.compareRatio(t)},load:function(t){this.setPreset(t),uni.navigateBack({delta:1})},setPreset:function(t){if(t){var e=JSON.parse(JSON.stringify(t));this.$store.dispatch("storePreset",e),this.$store.commit("setPreset",e)}uni.setStorageSync(this.id+"-presets",this.allItems)},openDialog:function(t,e){this.index=t,this.isCopy=e,this.nameValue=this.allItems[t].name,e&&(this.nameValue+="副本"),this.$refs.inputDialog.open()},doNext:function(t){t.length>20?uni.showToast({title:"不能超过20个字符!",duration:2e3}):t?this.isCopy?this.copy(t):this.rename(t):uni.showToast({title:"名称不能为空!",duration:2e3})}}};e.default=s},f1e5:function(t,e,i){"use strict";i.r(e);var n=i("d0b3"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},ffd4:function(t,e,i){"use strict";var n=i("6c29"),a=i.n(n);a.a}}]);