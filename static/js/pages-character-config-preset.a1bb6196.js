(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-preset"],{"0eae":function(t,e,i){var a=i("c363");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0a61cfa4",a,!0,{sourceMap:!1,shadowMode:!1})},"1b11":function(t,e,i){"use strict";i.r(e);var a=i("772a"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"24b7":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("c740"),i("4e82"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),r=(i("6835"),i("26cb")),o=(i("2062"),{data:function(){return{showGroupScore:!1,icon:{color:"#4cd964",size:"22",type:"spinner"},current:0,nameValue:"",value:"",index:0,isCopy:!1,none:"none",itemsArr:[],allItems:[],texts:[]}},onLoad:function(t){this.preset?this.initData():uni.reLaunch({url:"../../index/index"})},computed:(0,r.mapState)(["preset"]),methods:{setGroupScore:function(){this.showGroupScore=!this.showGroupScore},initData:function(){uni.setNavigationBarTitle({title:this.$store.getters.character.chs+" "+this.preset.score});var t=(0,n.default)({},this.preset);this.id=t.cId,this.current=t.id;var e=uni.getStorageSync(this.id+"-presets");if(e[0]){var i=e.findIndex((function(e){return e.id==t.id}));i>-1&&e.splice(i,1,t),e.sort((function(t,e){return e.type-t.type})),this.allItems=e}else this.allItems=[t]},moveTop:function(t){if(t>0){var e=this.allItems[t];this.allItems.splice(t,1),this.allItems.unshift(e),uni.setStorageSync(this.id+"-presets",this.allItems)}},openDialog:function(t,e){this.index=t,this.isCopy=e,this.nameValue=this.allItems[t].name,e&&(this.nameValue+="副本"),this.$refs.inputDialog.open()},doNext:function(t){t.length>20?uni.showToast({title:"不能超过20个字符!",duration:2e3}):t?this.isCopy?this.copy(t):this.rename(t):uni.showToast({title:"名称不能为空!",duration:2e3})},load:function(e){this.current!=e.id&&(t.log("重新加载preset"),this.$store.commit("setPreset",e),this.$store.commit("updateFavScore"),uni.setStorageSync(this.id+"-presets",this.allItems),uni.setStorageSync(e.cId,e)),uni.navigateBack({delta:1})},copy:function(t){var e=(0,n.default)({},this.allItems[this.index]);e.name=t,e.id=Date.now(),this.allItems.splice(this.index,0,e),uni.setStorageSync(this.id+"-presets",this.allItems)},rename:function(t){var e=this.allItems[this.index];e.name=t,this.preset.id==e.id&&(this.$store.commit("setPreset",e),uni.setStorageSync(e.cId,e)),uni.setStorageSync(this.id+"-presets",this.allItems)},remove:function(t){var e=this;this.allItems.length<2?uni.showToast({title:"无法删除",duration:2e3}):uni.showModal({title:"提示",content:"确定要删除?",success:function(i){if(i.confirm){var a=e.allItems[t].id;e.allItems.splice(t,1),a==e.current&&(e.$store.commit("setPreset",e.allItems[0]),e.current=e.allItems[0].id,uni.setStorageSync(e.id+"-presets",e.allItems))}}})},change:function(e){t.log(e)}}});e.default=o}).call(this,i("5a52")["default"])},"2d31":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniIcons:i("a1b9").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:16,type:"arrowright"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},r=[]},"2e72":function(t,e,i){"use strict";i.r(e);var a=i("ce0e"),n=i("1b11");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("90ee");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"0deef532",null,!1,a["a"],o);e["default"]=s.exports},"408b":function(t,e,i){"use strict";i.r(e);var a=i("9d27"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"4e1b":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniCard:i("5083").default,uniListItem:i("6fa1").default,uniPopup:i("f422").default,uniPopupDialog:i("00cb").default,uniSection:i("8483").default,uniList:i("b532").default,uniTag:i("2e72").default,uniIcons:i("a1b9").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-card",{attrs:{title:"预设使用说明",note:"Tips"}},[t._v("复制一份新的预设，修改圣遗物或者武器，人物命座等配置，保存后返回此页面，观察不同配置下的圣遗物评分、数据评分、队伍评分、核心技能的期望值（单人），用于解决哪套圣遗物更好，哪把武器更好等问题。")]),i("uni-card",{attrs:{margin:"16px",padding:"0",spacing:"0"}},[i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.showGroupScore,title:"显示队伍评分"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.setGroupScore()}}})],1),i("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[i("uni-popup-dialog",{attrs:{mode:"input",title:"输入预设名称",placeholder:"..."},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.doNext.apply(void 0,arguments)}},model:{value:t.nameValue,callback:function(e){t.nameValue=e},expression:"nameValue"}})],1),t._l(t.allItems,(function(e,a){return i("uni-card",{key:a,attrs:{margin:"16px",padding:"0",spacing:"0"}},[i("uni-section",{attrs:{title:e.cNote,rightText:e.reactionText?e.name+" - "+e.reactionText:e.name,type:t.current==e.id?"circle":""}}),i("uni-list",[i("uni-list-item",{attrs:{clickable:!0,rightText:e.text},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.load(e)}},scopedSlots:t._u([{key:"body",fn:function(){return[i("v-uni-view",{staticClass:"tag-body"},[i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:"tag-content"},[i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.tResult.score,"custom-style":"background-color: "+e.tResult.color}}),i("v-uni-view",[t._v(t._s(e.tResults[e.tResults.length-1].text))])],1)],1),i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:" tag-content"},[i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.dResult.score,"custom-style":"background-color: "+e.dResult.color}}),i("v-uni-view",[t._v(t._s(e.wNote+e.eNote+e.aNote))])],1)],1),e.gResult&&t.showGroupScore?i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:" tag-content"},[i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.gResult.score,"custom-style":"background-color: "+e.gResult.color}}),i("v-uni-view",[t._v(t._s(e.gContent))])],1)],1):t._e()],1)]},proxy:!0}],null,!0)})],1),i("v-uni-view",{staticClass:"card-actions no-border"},[i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(a,!0)}}},[i("uni-icons",{attrs:{type:"folder-add",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("复制")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(a,!1)}}},[i("uni-icons",{attrs:{type:"compose",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("重命名")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveTop(a)}}},[i("uni-icons",{attrs:{type:"arrow-up",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("置顶")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove(a)}}},[i("uni-icons",{attrs:{type:"trash",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("删除")])],1)],1)],1)}))],2)},r=[]},5083:function(t,e,i){"use strict";i.r(e);var a=i("a3e7"),n=i("408b");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("b3ec");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"6d06604a",null,!1,a["a"],o);e["default"]=s.exports},5981:function(t,e,i){"use strict";var a=i("aa3b"),n=i.n(a);n.a},"772a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes:function(){var t=this.type,e=this.disabled,i=this.inverted,a=this.circle,n=this.mark,r=this.size,o=this.isTrue,c=["uni-tag--"+t,"uni-tag--"+r,o(e)?"uni-tag--disabled":"",o(i)?"uni-tag--"+t+"--inverted":"",o(a)?"uni-tag--circle":"",o(n)?"uni-tag--mark":"",o(i)?"uni-tag--inverted uni-tag-text--"+t:"","small"===r?"uni-tag-text--small":""];return c.join(" ")}},methods:{isTrue:function(t){return!0===t||"true"===t},onClick:function(){this.isTrue(this.disabled)||this.$emit("click")}}};e.default=a},8483:function(t,e,i){"use strict";i.r(e);var a=i("2d31"),n=i("fc5c");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("5981");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"516ec331",null,!1,a["a"],o);e["default"]=s.exports},"872f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-tag[data-v-0deef532]{line-height:14px;font-size:12px;font-weight:200;padding:4px 7px;color:#fff;border-radius:3px;background-color:#8f939c;border-width:%?1?%;border-style:solid;border-color:#8f939c;cursor:pointer}.uni-tag--default[data-v-0deef532]{font-size:12px}.uni-tag--default--inverted[data-v-0deef532]{color:#8f939c;border-color:#8f939c}.uni-tag--small[data-v-0deef532]{padding:2px 5px;font-size:12px;border-radius:2px}.uni-tag--mini[data-v-0deef532]{padding:1px 3px;font-size:12px;border-radius:2px}.uni-tag--primary[data-v-0deef532]{background-color:#2979ff;border-color:#2979ff;color:#fff}.uni-tag--success[data-v-0deef532]{color:#fff;background-color:#18bc37;border-color:#18bc37}.uni-tag--warning[data-v-0deef532]{color:#fff;background-color:#f3a73f;border-color:#f3a73f}.uni-tag--error[data-v-0deef532]{color:#fff;background-color:#e43d33;border-color:#e43d33}.uni-tag--primary--inverted[data-v-0deef532]{color:#2979ff;border-color:#2979ff}.uni-tag--success--inverted[data-v-0deef532]{color:#18bc37;border-color:#18bc37}.uni-tag--warning--inverted[data-v-0deef532]{color:#f3a73f;border-color:#f3a73f}.uni-tag--error--inverted[data-v-0deef532]{color:#e43d33;border-color:#e43d33}.uni-tag--inverted[data-v-0deef532]{background-color:#fff}.uni-tag--circle[data-v-0deef532]{border-radius:15px!important}.uni-tag--mark[data-v-0deef532]{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-top-right-radius:15px!important;border-bottom-right-radius:15px!important}.uni-tag--disabled[data-v-0deef532]{opacity:.5;cursor:not-allowed}.uni-tag-text[data-v-0deef532]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-0deef532]{color:#2979ff}.uni-tag-text--success[data-v-0deef532]{color:#18bc37}.uni-tag-text--warning[data-v-0deef532]{color:#f3a73f}.uni-tag-text--error[data-v-0deef532]{color:#e43d33}.uni-tag-text--small[data-v-0deef532]{font-size:12px}',""]),t.exports=e},"90ee":function(t,e,i){"use strict";var a=i("d4bc"),n=i.n(a);n.a},"9a0e":function(t,e,i){"use strict";var a=i("c112"),n=i.n(a);n.a},"9d27":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=a},a3e7:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},aa3b:function(t,e,i){var a=i("b3ac");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("63b61ad0",a,!0,{sourceMap:!1,shadowMode:!1})},ab18:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".tag-item[data-v-95da7330]{display:flex;justify-content:space-between;margin-top:5px;color:#999;font-size:14px}.tag-content[data-v-95da7330]{display:flex;flex-direction:row}.tag-body[data-v-95da7330]{display:flex;flex-direction:column;flex:1}.tag-margin[data-v-95da7330]{\n\t/* \t\ttext-align: center;\n\twidth: 20px; */margin-right:10px;border-color:#fff}.no-border[data-v-95da7330]{border-width:0}.card-actions[data-v-95da7330]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:36px;border-top:1px #eee solid}.card-actions-item[data-v-95da7330]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-95da7330]{font-size:12px;color:#666;margin-left:5px}",""]),t.exports=e},b3ac:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-516ec331]{background-color:#fff}.uni-list-item__content[data-v-516ec331]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-516ec331]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-516ec331]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-516ec331]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-516ec331]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-516ec331]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-516ec331]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-516ec331]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-516ec331]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-516ec331]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-516ec331]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-516ec331]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-516ec331]{display:flex;align-items:center;padding-left:10px;color:#b1968b}.uni-list-item__extra-text[data-v-516ec331]{font-size:12px;color:#999}',""]),t.exports=e},b3ec:function(t,e,i){"use strict";var a=i("0eae"),n=i.n(a);n.a},c112:function(t,e,i){var a=i("ab18");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("16a0e80b",a,!0,{sourceMap:!1,shadowMode:!1})},c363:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},cd8c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:String,default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},ce0e:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-text",{staticClass:"uni-tag",class:t.classes,style:t.customStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t._v(t._s(t.text))]):t._e()},r=[]},d4bc:function(t,e,i){var a=i("872f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("efc05182",a,!0,{sourceMap:!1,shadowMode:!1})},da0f:function(t,e,i){"use strict";i.r(e);var a=i("4e1b"),n=i("dc5b");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("9a0e");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"95da7330",null,!1,a["a"],o);e["default"]=s.exports},dc5b:function(t,e,i){"use strict";i.r(e);var a=i("24b7"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},fc5c:function(t,e,i){"use strict";i.r(e);var a=i("cd8c"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a}}]);