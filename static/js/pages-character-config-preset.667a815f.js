(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-preset"],{"075f":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tag-content[data-v-8eb8af9e]{display:flex;flex-direction:row}.tag-note[data-v-8eb8af9e]{margin-top:5px;color:#999;font-size:14px}.tag-item[data-v-8eb8af9e]{display:flex;flex-direction:column;flex:1}.tag-margin[data-v-8eb8af9e]{margin-right:10px;border-color:#fff}.no-border[data-v-8eb8af9e]{border-width:0}.card-actions[data-v-8eb8af9e]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:36px;border-top:1px #eee solid}.card-actions-item[data-v-8eb8af9e]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-8eb8af9e]{font-size:12px;color:#666;margin-left:5px}",""]),t.exports=e},"0eae":function(t,e,a){var i=a("c363");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0a61cfa4",i,!0,{sourceMap:!1,shadowMode:!1})},"1b11":function(t,e,a){"use strict";a.r(e);var i=a("772a"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"1e88":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniPopup:a("f422").default,uniPopupDialog:a("00cb").default,uniCard:a("5083").default,uniSection:a("8483").default,uniList:a("b532").default,uniListItem:a("6fa1").default,uniTag:a("2e72").default,uniIcons:a("a1b9").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[a("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",title:"输入预设名称",placeholder:"..."},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.doNext.apply(void 0,arguments)}},model:{value:t.nameValue,callback:function(e){t.nameValue=e},expression:"nameValue"}})],1),t._l(t.allItems,(function(e,i){return a("uni-card",{key:i,attrs:{margin:"20px",padding:"0",spacing:"0"}},[a("uni-section",{attrs:{title:e.name,rightText:e.cNote,showArrow:!0,type:"line"}}),a("uni-list",[a("uni-list-item",{attrs:{clickable:!0,rightText:t.res[e.type].short+" "+e.text},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.load(e)}},scopedSlots:t._u([{key:"body",fn:function(){return[a("v-uni-view",{staticClass:"tag-item"},[a("v-uni-view",{staticClass:"tag-content tag-note"},[a("uni-tag",{staticClass:"tag-margin",style:{backgroundColor:e.tResult.color},attrs:{text:e.tResult.score}}),a("v-uni-view",[t._v(t._s(e.tResult.content))])],1),a("v-uni-view",{staticClass:"tag-note"},[e.dResult.score?a("uni-tag",{staticClass:"tag-margin",style:{backgroundColor:e.dResult.color},attrs:{text:e.dResult.score}}):t._e(),t._v(t._s(e.eNote))],1)],1)]},proxy:!0}],null,!0)})],1),a("v-uni-view",{staticClass:"card-actions no-border"},[a("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(i,!0)}}},[a("uni-icons",{attrs:{type:"folder-add",size:"18",color:"#999"}}),a("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("复制")])],1),a("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(i,!1)}}},[a("uni-icons",{attrs:{type:"compose",size:"18",color:"#999"}}),a("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("重命名")])],1),a("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove(i)}}},[a("uni-icons",{attrs:{type:"trash",size:"18",color:"#999"}}),a("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("删除")])],1)],1)],1)}))],2)},r=[]},"24b7":function(t,e,a){"use strict";(function(t){var i=a("4ea4");a("c740"),a("4e82"),a("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),r=a("26cb"),o={data:function(){return{res:[{short:""}],activeColor:"#ad9388",tabs:["无反应","融化"],nameValue:"",value:"",index:0,isCopy:!1,none:"none",itemsArr:[],allItems:[],texts:[]}},onLoad:function(e){this.id=this.character.name;var a=(0,n.default)({},this.preset),i=this.reactions[a.element];i&&(this.res=i);var r=uni.getStorageSync(this.id+"-presets");if(t.log(r),r[0]){var o=r.findIndex((function(t){return t.id==a.id}));o>-1&&r.splice(o,1),r.unshift(a),r.sort((function(t,e){return e.type-t.type})),this.allItems=r}else this.allItems=[a]},computed:(0,r.mapState)(["reactions","character","preset"]),methods:{openDialog:function(t,e){this.index=t,this.isCopy=e,e||(this.nameValue=this.allItems[t].name),this.$refs.inputDialog.open()},doNext:function(t){t.length>20?uni.showToast({title:"不能超过20个字符!",duration:2e3}):t?this.isCopy?this.copy(t):this.rename(t):uni.showToast({title:"名称不能为空!",duration:2e3})},load:function(t){this.$store.commit("setPreset",t),uni.setStorageSync(this.id+"-presets",this.allItems),uni.setStorageSync(t.cId,t),uni.navigateBack({delta:1})},copy:function(t){var e=(0,n.default)({},this.allItems[this.index]);e.name=t,e.id=Date.now(),this.allItems.splice(this.index,0,e),uni.setStorageSync(this.id+"-presets",this.allItems)},rename:function(t){var e=this.allItems[this.index];e.name=t,this.preset.id==e.id&&(this.$store.commit("setPreset",e),uni.setStorageSync(e.cId,e)),uni.setStorageSync(this.id+"-presets",this.allItems)},remove:function(t){var e=this;this.allItems.length<2?uni.showToast({title:"无法删除",duration:2e3}):uni.showModal({title:"提示",content:"确定要删除?",success:function(a){a.confirm?(e.allItems.splice(t,1),uni.setStorageSync(e.id+"-presets",e.allItems),0==t&&e.$store.commit("setPreset",e.allItems[0])):a.cancel}})},change:function(e){t.log(e)}}};e.default=o}).call(this,a("5a52")["default"])},"2e72":function(t,e,a){"use strict";a.r(e);var i=a("ce0e"),n=a("1b11");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("90ee");var o,d=a("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"0deef532",null,!1,i["a"],o);e["default"]=c.exports},"408b":function(t,e,a){"use strict";a.r(e);var i=a("9d27"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},5083:function(t,e,a){"use strict";a.r(e);var i=a("a3e7"),n=a("408b");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("b3ec");var o,d=a("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"6d06604a",null,!1,i["a"],o);e["default"]=c.exports},"772a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes:function(){var t=this.type,e=this.disabled,a=this.inverted,i=this.circle,n=this.mark,r=this.size,o=this.isTrue,d=["uni-tag--"+t,"uni-tag--"+r,o(e)?"uni-tag--disabled":"",o(a)?"uni-tag--"+t+"--inverted":"",o(i)?"uni-tag--circle":"",o(n)?"uni-tag--mark":"",o(a)?"uni-tag--inverted uni-tag-text--"+t:"","small"===r?"uni-tag-text--small":""];return d.join(" ")}},methods:{isTrue:function(t){return!0===t||"true"===t},onClick:function(){this.isTrue(this.disabled)||this.$emit("click")}}};e.default=i},"845c":function(t,e,a){"use strict";var i=a("c289"),n=a.n(i);n.a},"872f":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-tag[data-v-0deef532]{line-height:14px;font-size:12px;font-weight:200;padding:4px 7px;color:#fff;border-radius:3px;background-color:#8f939c;border-width:%?1?%;border-style:solid;border-color:#8f939c;cursor:pointer}.uni-tag--default[data-v-0deef532]{font-size:12px}.uni-tag--default--inverted[data-v-0deef532]{color:#8f939c;border-color:#8f939c}.uni-tag--small[data-v-0deef532]{padding:2px 5px;font-size:12px;border-radius:2px}.uni-tag--mini[data-v-0deef532]{padding:1px 3px;font-size:12px;border-radius:2px}.uni-tag--primary[data-v-0deef532]{background-color:#2979ff;border-color:#2979ff;color:#fff}.uni-tag--success[data-v-0deef532]{color:#fff;background-color:#18bc37;border-color:#18bc37}.uni-tag--warning[data-v-0deef532]{color:#fff;background-color:#f3a73f;border-color:#f3a73f}.uni-tag--error[data-v-0deef532]{color:#fff;background-color:#e43d33;border-color:#e43d33}.uni-tag--primary--inverted[data-v-0deef532]{color:#2979ff;border-color:#2979ff}.uni-tag--success--inverted[data-v-0deef532]{color:#18bc37;border-color:#18bc37}.uni-tag--warning--inverted[data-v-0deef532]{color:#f3a73f;border-color:#f3a73f}.uni-tag--error--inverted[data-v-0deef532]{color:#e43d33;border-color:#e43d33}.uni-tag--inverted[data-v-0deef532]{background-color:#fff}.uni-tag--circle[data-v-0deef532]{border-radius:15px!important}.uni-tag--mark[data-v-0deef532]{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-top-right-radius:15px!important;border-bottom-right-radius:15px!important}.uni-tag--disabled[data-v-0deef532]{opacity:.5;cursor:not-allowed}.uni-tag-text[data-v-0deef532]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-0deef532]{color:#2979ff}.uni-tag-text--success[data-v-0deef532]{color:#18bc37}.uni-tag-text--warning[data-v-0deef532]{color:#f3a73f}.uni-tag-text--error[data-v-0deef532]{color:#e43d33}.uni-tag-text--small[data-v-0deef532]{font-size:12px}',""]),t.exports=e},"90ee":function(t,e,a){"use strict";var i=a("d4bc"),n=a.n(i);n.a},"9d27":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=i},a3e7:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?a("v-uni-view",{staticClass:"uni-card__cover"},[a("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?a("v-uni-view",{staticClass:"uni-card__header"},[a("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?a("v-uni-view",{staticClass:"uni-card__header-avatar"},[a("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),a("v-uni-view",{staticClass:"uni-card__header-content"},[a("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?a("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),a("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[a("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),a("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),a("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},b3ec:function(t,e,a){"use strict";var i=a("0eae"),n=a.n(i);n.a},c289:function(t,e,a){var i=a("075f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("46ae166d",i,!0,{sourceMap:!1,shadowMode:!1})},c363:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},ce0e:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.text?a("v-uni-text",{staticClass:"uni-tag",class:t.classes,style:t.customStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t._v(t._s(t.text))]):t._e()},r=[]},d4bc:function(t,e,a){var i=a("872f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("efc05182",i,!0,{sourceMap:!1,shadowMode:!1})},da0f:function(t,e,a){"use strict";a.r(e);var i=a("1e88"),n=a("dc5b");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("845c");var o,d=a("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"8eb8af9e",null,!1,i["a"],o);e["default"]=c.exports},dc5b:function(t,e,a){"use strict";a.r(e);var i=a("24b7"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a}}]);