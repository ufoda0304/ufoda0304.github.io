(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-login","package-pages-character-book-config~package-pages-character-preset"],{"05c1":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),e.exports=t},"0bf0":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var i={uniPopup:n("c045").default,uniPopupDialog:n("62c3").default,uniCard:n("2dea").default,uniSection:n("60df").default,uniEasyinput:n("ef3a").default,tipsCard:n("df28").default,uniListItem:n("8c8a").default,uniDateformat:n("457e").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[n("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",value:e.keyValue,title:"输入密钥..",placeholder:"..."},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}})],1),n("uni-card",{attrs:{spacing:"0",padding:"0"}},[n("uni-section",{attrs:{title:"数据同步"}}),n("v-uni-view",{staticStyle:{padding:"20px"}},[n("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row"}},[n("uni-easyinput",{attrs:{placeholder:"密钥..."},model:{value:e.keyValue,callback:function(t){e.keyValue=t},expression:"keyValue"}}),n("v-uni-button",{staticStyle:{"background-color":"#f6f2ee","margin-left":"20px","font-size":"13px"},attrs:{disabled:!e.keyValue},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copyKey()}}},[e._v("复制")])],1),n("v-uni-view",{staticStyle:{"margin-top":"20px"}},[n("uni-easyinput",{attrs:{placeholder:"Key1 (可用UID、QQ、手机等好记的文本)"},model:{value:e.login.keys[0],callback:function(t){e.$set(e.login.keys,0,t)},expression:"login.keys[0]"}})],1),n("v-uni-view",{staticStyle:{"margin-top":"20px"}},[n("uni-easyinput",{attrs:{placeholder:"Key2 (不要用个人密码，都是明文存储)"},model:{value:e.login.keys[1],callback:function(t){e.$set(e.login.keys,1,t)},expression:"login.keys[1]"}})],1),n("v-uni-view",{staticStyle:{"margin-top":"30px",display:"flex","flex-direction":"row","align-content":"space-between"}},[n("v-uni-button",{staticStyle:{"background-color":"#f6f2ee",margin:"0px"},attrs:{size:"mini",disabled:e.isH5||e.isLoading,loading:e.isLoading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkKeys(0)}}},[e._v("完整上传")]),n("v-uni-button",{staticStyle:{"background-color":"#f6f2ee"},attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkKeys(1)}}},[e._v("快速上传")]),n("v-uni-button",{staticStyle:{"background-color":"#f6f2ee",margin:"0px"},attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkKeys(2)}}},[e._v("下载数据")])],1)],1)],1),n("tips-card",{attrs:{tipKey:"loginIn",tipTexts:e.texts,isCard:!0}}),n("uni-card",{attrs:{padding:"0",spacing:"0"}},[n("v-uni-radio-group",[n("v-uni-view",{staticClass:"uni-list"},[n("uni-section",{attrs:{title:"提醒设置"}}),e._l(e.noticeItems,(function(t,i){return n("uni-list-item",{key:i,attrs:{border:0!=i,title:t[0],note:t[1],clickable:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setBackType(i)}},scopedSlots:e._u([{key:"footer",fn:function(){return[n("v-uni-radio",{attrs:{color:"#ad9388",checked:i==e.backupType}})]},proxy:!0}],null,!0)})}))],2)],1)],1),e.logs?n("uni-card",{attrs:{padding:"0",spacing:"0"}},[n("uni-section",{attrs:{title:"数据变动"}}),e._l(e.logs,(function(t,i){return n("uni-list-item",{key:i,attrs:{"thumb-size":"lg",thumb:e.chars[i].avatar,note:t[1],title:e.names[i]+t[0]},scopedSlots:e._u([{key:"footer",fn:function(){return[n("uni-dateformat",{staticStyle:{"font-size":"14px"},attrs:{date:t[2],threshold:[6e4,36e5]}})]},proxy:!0}],null,!0)})}))],2):e._e(),n("v-uni-view",{staticStyle:{height:"100px"}})],1)},u=[]},"27ae":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("e25e");var i=n("62bf"),a={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,i.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var e=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){e.refresh()}),parseInt(this.refreshRate)))}}};t.default=a},"2bb7":function(e,t,n){"use strict";n.r(t);var i=n("ece2"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=a.a},"2dea":function(e,t,n){"use strict";n.r(t);var i=n("fdaef"),a=n("b3e1");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("480d");var o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"44c0d81e",null,!1,i["a"],void 0);t["default"]=r.exports},"38b8":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),e.exports=t},"44b0":function(e,t,n){"use strict";n.r(t);var i=n("27ae"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=a.a},"457e":function(e,t,n){"use strict";n.r(t);var i=n("6239"),a=n("44b0");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);var o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"690ab064",null,!1,i["a"],void 0);t["default"]=r.exports},"480d":function(e,t,n){"use strict";var i=n("eb5e"),a=n.n(i);a.a},"60df":function(e,t,n){"use strict";n.r(t);var i=n("95d9"),a=n("874a");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("d3fd");var o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"42ced052",null,!1,i["a"],void 0);t["default"]=r.exports},6239:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-text",[this._v(this._s(this.dateShow))])},a=[]},6293:function(e,t,n){"use strict";n.r(t);var i=n("6be9"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=a.a},"62bf":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=c,t.friendlyDate=function(e,t){var n=t.locale,i=void 0===n?"zh":n,a=t.threshold,u=void 0===a?[6e4,36e5]:a,o=t.format,s=void 0===o?"yyyy/MM/dd hh:mm:ss":o;if("-"===e)return e;if(!e&&0!==e)return"";var l,d,f={zh:{year:"年",month:"月",day:"天",hour:"小时",minute:"分钟",second:"秒",ago:"前",later:"后",justNow:"刚刚",soon:"马上",template:"{num}{unit}{suffix}"},en:{year:"year",month:"month",day:"day",hour:"hour",minute:"minute",second:"second",ago:"ago",later:"later",justNow:"just now",soon:"soon",template:"{num} {unit} {suffix}"}},h=f[i]||f.zh,g=r(e),p=g.getTime()-Date.now(),v=Math.abs(p);if(v<u[0])return p<0?h.justNow:h.soon;if(v>=u[1])return c(g,s);var y=h.later;p<0&&(y=h.ago,p=-p);var b=Math.floor(p/1e3),x=Math.floor(b/60),m=Math.floor(x/60),k=Math.floor(m/24),_=Math.floor(k/30),w=Math.floor(_/12);switch(!0){case w>0:l=w,d=h.year;break;case _>0:l=_,d=h.month;break;case k>0:l=k,d=h.day;break;case m>0:l=m,d=h.hour;break;case x>0:l=x,d=h.minute;break;default:l=b,d=h.second;break}"en"===i&&(1===l?l="a":d+="s");return h.template.replace(/{\s*num\s*}/g,l+"").replace(/{\s*unit\s*}/g,d).replace(/{\s*suffix\s*}/g,y)};var a=i(n("53ca"));function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;e+="";while(e.length<t)e="0"+e;return e.slice(-t)}n("fb6a"),n("c975"),n("ac1f"),n("5319");var o={yyyy:function(e){return u(e.year,4)},yy:function(e){return u(e.year)},MM:function(e){return u(e.month)},M:function(e){return e.month},dd:function(e){return u(e.day)},d:function(e){return e.day},hh:function(e){return u(e.hour)},h:function(e){return e.hour},mm:function(e){return u(e.minute)},m:function(e){return e.minute},ss:function(e){return u(e.second)},s:function(e){return e.second},SSS:function(e){return u(e.millisecond,3)},S:function(e){return e.millisecond}};function r(e){if(e instanceof Date)return e;switch((0,a.default)(e)){case"string":return e.indexOf("T")>-1?new Date(e):new Date(e.replace(/-/g,"/"));default:return new Date(e)}}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd hh:mm:ss";if(!e&&0!==e)return"";e=r(e);var n={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()},i=/yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/,a=!0,u=t;while(a)a=!1,u=u.replace(i,(function(e){return a=!0,o[e](n)}));return u}},"6be9":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(e){this.$emit("scrolltolower")},scroll:function(e){this.$emit("scroll",e)}}};t.default=i},"7e1f":function(e,t,n){"use strict";(function(e){n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={backup:{notice:1,date:0,type:0,update:1,logs:{},id:""},init:function(){var t=uni.getStorageSync("ysin_backup");if(t&&(this.backup=t),2!=this.backup.type&&0==this.backup.type&&this.backup.update>0){var n=new Date((new Date).toLocaleDateString()).getTime();n!=this.backup.date&&(this.backup.notice=1,this.backup.date=n,e.log(n))}},set:function(e){var t=this.backup;-1==e?(t.notice>0&&(t.notice=0,uni.setStorageSync("ysin_backup",t)),2==t.type&&this.backup.update>0&&this.clear()):(t.type=e,uni.setStorageSync("ysin_backup",t))},clear:function(){this.backup.logs={},this.backup.update=0,uni.setStorageSync("ysin_backup",this.backup)},add:function(e,t,n,i){if(this.backup.id=e,2!=this.backup.type){var a=i?"（展示柜）":"（本地）",u=t+n;this.backup.update+=1,1==this.backup.type&&(this.backup.notice=1),this.backup.logs[e]=[a,u,Date.now()],uni.setStorageSync("this.backup",this.backup)}}};t.default=i}).call(this,n("5a52")["default"])},"800e":function(e,t,n){var i=n("05c1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f065").default;a("974e5638",i,!0,{sourceMap:!1,shadowMode:!1})},8179:function(e,t,n){"use strict";n.r(t);var i=n("f91a"),a=n("6293");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("b6dd");var o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"6fce09b0",null,!1,i["a"],void 0);t["default"]=r.exports},8480:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-44c0d81e]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-44c0d81e]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-44c0d81e]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-44c0d81e]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-44c0d81e]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-44c0d81e]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-44c0d81e]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-44c0d81e]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-44c0d81e]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-44c0d81e]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-44c0d81e]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-44c0d81e]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-44c0d81e]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-44c0d81e]{font-size:12px}.uni-card--border[data-v-44c0d81e]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-44c0d81e]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-44c0d81e]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-44c0d81e]:after{border-radius:0}.uni-ellipsis[data-v-44c0d81e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),e.exports=t},"863d":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(e){this.$emit("click",e)}}};t.default=i},"874a":function(e,t,n){"use strict";n.r(t);var i=n("8ec8"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=a.a},"8ec8":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=i},"95d9":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("879e").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:e.color},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[e.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),n("v-uni-view",{staticClass:"uni-list-item__content"},[e.title?n("v-uni-text",{staticClass:"uni-list-item__content-title"},[e._v(e._s(e.title))]):e._e(),e.subTitle?n("v-uni-text",{staticClass:"uni-list-item__content-note"},[e._v(e._s(e.subTitle))]):e._e()],1),n("v-uni-view",{staticClass:"uni-section__content__extra"},[e._t("extra",[e.rightText?n("v-uni-text",{staticClass:"uni-list-item__extra-text"},[e._v(e._s(e.rightText))]):e._e()])],2),e.showIcon?n("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:e.icon}}):e._e()],1),n("v-uni-view",{style:{padding:e.padding?"10px":""}},[e._t("default")],2)],1)},u=[]},"9b40":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"tips-card",props:{tipKey:{type:String,default:"one",required:!0},isCard:{type:[Boolean,String],default:!1},title:{type:String,default:"说明"},rightText:{type:String,default:"关闭"},tipTexts:{}},data:function(){return{show:!0}},created:function(){this.$store.state.config[this.tipKey]&&(this.show=!1)},methods:{close:function(){var e=this;uni.showModal({title:"提示",content:"是否移除该提示？（没有更新不会再出现）",cancelText:"否",confirmText:"是",success:function(t){t.confirm&&(e.$store.commit("setConfigClose",e.tipKey),e.show=!1)}})}}};t.default=i},b3e1:function(e,t,n){"use strict";n.r(t);var i=n("863d"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=a.a},b6dd:function(e,t,n){"use strict";var i=n("d3ec"),a=n.n(i);a.a},bf4d:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var i={uniCard:n("2dea").default,uniSection:n("60df").default,uniList:n("8179").default,uniListItem:n("8c8a").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("v-uni-view",[e.isCard?n("uni-card",{attrs:{margin:"16px",padding:"0",spacing:"0"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close()}}},[n("uni-section",{attrs:{title:e.title,"right-text":"关闭"}}),n("uni-list",e._l(e.tipTexts,(function(e,t){return n("uni-list-item",{key:t,staticClass:"item-space",attrs:{title:t+1+"、"+e}})})),1)],1):n("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close()}}},[n("uni-section",{attrs:{title:e.title,"right-text":"关闭"}}),n("uni-list",e._l(e.tipTexts,(function(e,t){return n("uni-list-item",{key:t,staticClass:"item-space",attrs:{title:t+1+"、"+e}})})),1)],1)],1):e._e()},u=[]},ca5b:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={10000086:"冰拳v1",10000087:"水炮v1",11427:"四星单手剑",12427:"四星双手剑",13427:"四星长枪",14426:"四星法器",14514:"五星法器（生命）",14513:"五星法器（攻击） ",15427:"四星弓",feimini:"菲米尼",linni:"林尼",linnite:"琳妮特",langya:"狼牙",haiyuanzhongqu:"海渊终曲",huihedushou:"灰河渡手",liaoliaobang:"聊聊棒",langyingkuojian:"浪影阔剑",xiawanchangge:"峡湾长歌",gongyidechoubao:"公义的酬报",yisiyulong:"遗祀玉珑",chunshuiliuhua:"纯水流华",lieyangzhisi:"烈阳之嗣",jingmizhiqu:"静谧之曲",zuichudedamoshu:"最初的大魔术",huangjinjutuan:"黄金剧团",zhuyinglieren:"逐影猎人",huanchuanzhihui:"鹮穿之喙",yuanmudao:"原木刀",senlinwangqi:"森林王器",lierenzhijing:"猎人之径",wangxiajinshi:"王下近侍",yingmanzhishi:"盈满之实",jieze:"竭泽",guanyueshi:"贯月矢",shengxianzhiyao:"圣显之钥",chishazhizhang:"赤沙之杖",liulangdewanxing:"流浪的晚星",mahailadeshuise:"玛海菈的水色",xifusideyueguang:"西福斯的月光",fengxinzhifeng:"风信之锋",qianyefumeng:"千夜浮梦",tulaiduladehuiyi:"图莱杜拉的回忆",donghuafangshiyu:"东花坊时雨",biluozhilong:"碧落之珑",bumieyuehua:"不灭月华",sifengyuandian:"四风原典",tiankongzhijuan:"天空之卷",chenshizhisuo:"尘世之锁",shenlezhizhenyi:"神乐之真意",koudaimodaoshu:"口袋魔导书",xuetubiji:"学徒笔记",yishijiexingji:"异世界行记",jiajibaojue:"甲级宝珏",feiyufaqiu:"翡玉法球",modaoxulun:"魔导绪论",wanguozhuhaitupu:"万国诸海图谱",xialiriyue:"匣里日月",dudukegushiji:"嘟嘟可故事集",zongshimifalu:"宗室秘法录",rendongzhiguo:"忍冬之果",zhaoxin:"昭心",anxiangdejiuyushi:"暗巷的酒与诗",liulangyuezhang:"流浪乐章",baichenzhihuan:"白辰之环",jilicanzhang:"祭礼残章",xifengmidian:"西风秘典",taolongyingjietan:"讨龙英杰谭",zhengshizhimingdong:"证誓之明瞳",shizuojinpo:"试作金珀",heiyanfeiyu:"黑岩绯玉",dongjibaixing:"冬极白星",tiankongzhiyi:"天空之翼",zhongmojietanzhishi:"终末嗟叹之诗",ruoshui:"若水",amosizhigong:"阿莫斯之弓",feileizhixianzhen:"飞雷之弦振",xinshi:"信使",liliandeliegong:"历练的猎弓",lveshizhe:"掠食者",liegong:"猎弓",shensheshouzhishi:"神射手之誓",yayugong:"鸦羽弓",fanqugong:"反曲弓",zongshichanggong:"宗室长弓",youyehuaerzi:"幽夜华尔兹",gongcang:"弓藏",dangong:"弹弓",anxianglieshou:"暗巷猎手",mengyunzhiyue:"朦云之月",pomozhigong:"破魔之弓",jiligong:"祭礼弓",juexian:"绝弦",cangcuiliegong:"苍翠猎弓",luoxia:"落霞",xifengliegong:"西风猎弓",shizuodanyue:"试作澹月",ganglungong:"钢轮弓",fenghuazhisong:"风花之颂",heiyanzhangong:"黑岩战弓",hepuyuan:"和璞鸢",tiankongzhiji:"天空之脊",xizai:"息灾",humozhizhang:"护摩之杖",ticaozhidaoguang:"薙草之稻光",guanhongzhishuo:"贯虹之槊",xinshouchangqiang:"新手长枪",yuemao:"钺矛",tiejianqiang:"铁尖枪",juedouzhiqiang:"决斗之枪",xialimiechen:"匣里灭辰",qianyanchangqiang:"千岩长枪",xiduoyuanshiwenzi:"喜多院十文字",zongshilieqiang:"宗室猎枪",duanlangchangqi:"断浪长鳍",liuyuezhen:"流月针",yuhuo:"渔获",baiyingqiang:"白缨枪",xifengchangqiang:"西风长枪",shizuoxinglian:"试作星镰",heiyanciqiang:"黑岩刺枪",heiyingqiang:"黑缨枪",longjichangqiang:"龙脊长枪",caiyecuiguang:"裁叶萃光",tiankongzhiren:"天空之刃",zhuofengzhiren:"斫峰之刃",boluanyuebaijingjin:"波乱月白经津",panyanjielv:"磐岩结绿",cangguziyouzhishi:"苍古自由之誓",wuqiezhihuiguang:"雾切之回光",fengyingjian:"风鹰剑",chihuyudao:"吃虎鱼刀",lvxingjian:"旅行剑",wufengjian:"无锋剑",antiejian:"暗铁剑",yinjian:"银剑",jianglinzhijian:"降临之剑",feitianyujian:"飞天御剑",lengren:"冷刃",xialilongyin:"匣里龙吟",tianmuyingdadao:"天目影打刀",zongshichangjian:"宗室长剑",anxiangshanguang:"暗巷闪光",jilijian:"祭礼剑",dijian:"笛剑",longdiaopinyixin:"笼钓瓶一心",fuzhizhijian:"腐殖之剑",xifengjian:"西风剑",shizuozhanyan:"试作斩岩",chenshazhifangchui:"辰砂之纺锤",tiefengci:"铁蜂刺",limingshenjian:"黎明神剑",heijian:"黑剑",heiyanchangjian:"黑岩长剑",shitiezhihua:"饰铁之花 ",weihaixinbiao:"苇海信标",tiankongzhiao:"天空之傲",wugongzhijian:"无工之剑",songlaixiangqizhishi:"松籁响起之时",langdemolu:"狼的末路",chijiaoshikuichu:"赤角石溃杵",yilifuren:"以理服人",yongbingzhongjian:"佣兵重剑",baitiedajian:"白铁大剑",xunliandajian:"训练大剑",tieyingkuojian:"铁影阔剑",feitiandayujian:"飞天大御剑",qianyangujian:"千岩古剑",zongshidajian:"宗室大剑",ewangwan:"恶王丸",guimuzhanchangzheng:"桂木斩长正",muyulongxuedejian:"沐浴龙血的剑",baiyingjian:"白影剑",jilidajian:"祭礼大剑",chigujian:"螭骨剑",xianzhuhaihuang:"衔珠海皇",xifengdajian:"西风大剑",shizuoguhua:"试作古华",zhongjian:"钟剑",yucai:"雨裁",xuezangdexingyin:"雪葬的星银",heiyanzhandao:"黑岩斩刀","5qianyan":"千岩牢固","5panyan":"悠古的磐岩",jiaoguan:"教官","5zongshi":"昔日宗室之仪",shenlindejiyi:"深林的记忆","5cuilv":"翠绿之影",shijinzhimeng:"饰金之梦",laiyunyuxiang:"来歆余响",chenshawangshenglu:"辰砂往生录",leyuanyiluozhihua:"乐园遗落之花",loushangshageshihua:"沙上楼阁史话",shuixianzhimeng:"水仙之梦",huahaiganluzhiguang:"花海甘露之光",wu:"散件","5bingfeng":"冰风迷途的勇士","5huaguan":"华馆梦醒形骸记","5rulei":"如雷的盛怒",shouhuzhixin:"守护之心","5pinglei":"平息鸣雷的尊者",zhankuang:"战狂","5ranxue":"染血的骑士道","5chenlun":"沉沦之心",liufang:"流放者","5yuetuan":"流浪大地的乐团","5hairan":"海染砗磲","5duhuo":"渡过烈火的贤人","5monv":"炽烈的炎之魔女","5jueyuan":"绝缘之旗印",cangbai:"苍白之火","5shaonv":"被怜爱的少女","5jiaodou":"角斗士的终幕礼","5zhuiyi":"追忆之注连","5nifei":"逆飞的流星",qiliangliang:"绮良良",baishu:"白术",kawei:"卡维",dixiya:"迪希雅",anbo:"安柏",bannite:"班尼特",diluke:"迪卢克",hutao:"胡桃",keli:"可莉",tuoma:"托马",xiangling:"香菱",xiaogong:"宵宫",xinyan:"辛焱",yanfei:"烟绯",kelai:"柯莱",tinali:"提纳里",naxida:"纳西妲",aierhaisen:"艾尔海森",yaoyao:"瑶瑶",mika:"米卡",ailuoyi:"埃洛伊",chongyun:"重云",diaona:"迪奥娜",ganyu:"甘雨",kaiya:"凯亚",laiyila:"莱依拉",luoshaliya:"罗莎莉亚",qiqi:"七七",shenhe:"申鹤",shenlilinghua:"神里绫华",youla:"优菈",abeiduo:"阿贝多",huanglongyidou:"荒泷一斗",ningguang:"凝光",nuoaier:"诺艾尔",wulang:"五郎",yunjin:"云堇",zhongli:"钟离",duoli:"多莉",sainuo:"赛诺",bachongshenzi:"八重神子",beidou:"北斗",feixieer:"菲谢尔",jiuqiren:"久岐忍",jiutiaoshaluo:"九条裟罗",keqing:"刻晴",leidianjiangjun:"雷电将军",leize:"雷泽",lisha:"丽莎",traveller:"荧",kong:"空",kandisi:"坎蒂丝",nilu:"妮露",babala:"芭芭拉",dadaliya:"达达利亚",mona:"莫娜",shanhugongxinhai:"珊瑚宫心海",shenlilingren:"神里绫人",xingqiu:"行秋",yelan:"夜兰",falushan:"珐露珊",liulangzhe:"流浪者",fengyuanwanye:"枫原万叶",luyeyuanpingzang:"鹿野院平藏",qin:"琴",shatang:"砂糖",wendi:"温迪",xiao:"魈",zaoyou:"早柚"}},cb32:function(e,t,n){"use strict";n.r(t);var i=n("0bf0"),a=n("2bb7");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);var o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"10cbc727",null,!1,i["a"],void 0);t["default"]=r.exports},d3ec:function(e,t,n){var i=n("38b8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f065").default;a("d2ce4208",i,!0,{sourceMap:!1,shadowMode:!1})},d3fd:function(e,t,n){"use strict";var i=n("800e"),a=n.n(i);a.a},df28:function(e,t,n){"use strict";n.r(t);var i=n("bf4d"),a=n("ee07");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);var o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"5b3e8ed2",null,!1,i["a"],void 0);t["default"]=r.exports},eb5e:function(e,t,n){var i=n("8480");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f065").default;a("f0934760",i,!0,{sourceMap:!1,shadowMode:!1})},ece2:function(e,t,n){"use strict";(function(e,i){n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("ddb0"),n("e9c4");var u=a(n("c7eb")),o=a(n("1da1")),r=a(n("b85c")),c=a(n("7e1f")),s=n("065c"),l=a(n("ca5b")),d={data:function(){return{logs:null,names:{},chars:{},noticeItems:[["每天一次","今天以前有角色变动时,提示一次"],["数据有变动","只要有角色变动,就会有提示"],["不需要提醒","关闭数据变动及提示"]],texts:["上传本地缓存数据到云端进行备份，避免本地缓存被意外清除导致数据丢失","上传时密钥不能为空（首次上传会自动获取）","上传建议同时设置自定义key1 + key2，这样不需再额外保存密钥","下载时会优先用密钥，密钥为空的情况下会使用key1 + key2进行下载"],mola:0,uploadType:0,backupType:0,servers:["快速上传"],obj:null,time:0,isLoading:!1,isDownload:!1,keyValue:"",login:{key:null,keys:["",""],date:"",limit:"",mola:0},isH5:!0}},onLoad:function(){var e;this.names=l.default,this.chars=s.charactersData,0!=c.default.backup.update&&(this.logs=c.default.backup.logs),this.backupType=c.default.backup.type,c.default.set(-1);var t=uni.getStorageSync("ysin_login");t&&(this.login=t),this.keyValue=null!==(e=this.login.key)&&void 0!==e?e:""},methods:{clearLogs:function(){c.default.clear(),this.logs=null},setBackType:function(e){c.default.set(e),this.backupType=e},copyKey:function(){uni.setClipboardData({data:this.login.key,success:function(){uni.showToast({title:"复制成功"})},fail:function(t){e.log(t)}})},checkKeys:function(e){var t,n=!1,i=0,a=(0,r.default)(this.login.keys);try{for(a.s();!(t=a.n()).done;){var u=t.value;u&&(i++,u.length>15&&(n=!0))}}catch(o){a.e(o)}finally{a.f()}n||1==i?uni.showModal({title:"错误",content:"key1、key2必须同时小于15位或者都为空",showCancel:!1}):2==e?this.downLoad():this.upload(i,e)},downLoad:function(){var e=this;this.login.key?uni.showModal({title:"提示",content:"确定用云端数据覆盖本地数据？",success:function(t){t.confirm&&e.getBackupData()}}):this.getBackupData()},upload:function(e,t){var n=this;return(0,o.default)((0,u.default)().mark((function i(){var a;return(0,u.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.checkTime()){i.next=2;break}return i.abrupt("return");case 2:a=n,"快速上传只会上传收藏角色的数据（不包括预设列表）",0==t?uni.showModal({title:"说明",content:"完整上传会上传所有本地缓存数据，但需要看完15-30秒激励视频(同时打包处理本地数据)，快速上传则不需要。",success:function(n){n.confirm&&a.checkRes(e,t)}}):uni.showModal({title:"说明",content:"快速上传只会上传收藏角色的数据（不包括预设列表）",success:function(n){n.confirm&&a.checkRes(e,t)}});case 5:case"end":return i.stop()}}),i)})))()},checkRes:function(t,n){var i=this;return(0,o.default)((0,u.default)().mark((function a(){var o,c,s,l,d,f,h,g,p,v,y;return(0,u.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i.login.key&&(i.keyValue=i.login.key),0==t){a.next=8;break}return a.next=4,i.checkBackupKeys(i.login.keys);case 4:if(o=a.sent,0==o){a.next=8;break}return uni.showModal({title:"错误",content:"key在数据库已经存在，无法使用..",showCancel:!1}),a.abrupt("return");case 8:c=[];try{s=uni.getStorageInfoSync(),c=s.keys}catch(u){e.log(u)}if(l={},1!=n){a.next=36;break}d=uni.getStorageSync("favObj"),f={},h=(0,r.default)(c),a.prev=15,h.s();case 17:if((g=h.n()).done){a.next=24;break}if(p=g.value,"ysin_backup"!=p){a.next=21;break}return a.abrupt("continue",22);case 21:"ysin_login"==p?(v=uni.getStorageSync(p),l[p]=v):d[p]&&d[p].isFav&&(y=uni.getStorageSync(p),l[p]=y,f[p]=d[p]);case 22:a.next=17;break;case 24:a.next=29;break;case 26:a.prev=26,a.t0=a["catch"](15),h.e(a.t0);case 29:return a.prev=29,h.f(),a.finish(29);case 32:l["favObj"]=f,i.comfirmUpload(l),a.next=36;break;case 36:case"end":return a.stop()}}),a,null,[[15,26,29,32]])})))()},comfirmUpload:function(e){var t=arguments,n=this;return(0,o.default)((0,u.default)().mark((function i(){var a,o,r;return(0,u.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a=t.length>1&&void 0!==t[1]&&t[1],!e){i.next=11;break}if(o=JSON.stringify(e),r={data:o,keys:n.login.keys,key:n.login.key,ad:a},!n.login.key){i.next=9;break}return i.next=7,n.updateBackupData(r);case 7:i.next=11;break;case 9:return i.next=11,n.createBackpuData(r);case 11:case"end":return i.stop()}}),i)})))()},checkTime:function(){var e=Date.now();return!(e-this.login.date>6e4)&&(uni.showToast({icon:"none",title:"服务器限制，1分钟内只能请求一次"}),!0)},getBackupData:function(){var t=this;return(0,o.default)((0,u.default)().mark((function n(){var a,o,r,c,s,l;return(0,u.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.checkTime()){n.next=2;break}return n.abrupt("return");case 2:if(a=t.keyValue,!a){n.next=9;break}if(!(a.length<24)){n.next=7;break}return uni.showModal({title:"错误",content:"密钥格式错误",showCancel:!1}),n.abrupt("return");case 7:n.next=12;break;case 9:if(t.login.keys[0]&&t.login.keys[1]){n.next=12;break}return uni.showModal({title:"错误",content:"密钥和Key不能都为空",showCancel:!1}),n.abrupt("return");case 12:if(o=i.importObject("backup"),n.prev=13,!a){n.next=21;break}return e.log(a),n.next=18,o.getData(a);case 18:r=n.sent,n.next=25;break;case 21:return e.log(t.login.keys),n.next=24,o.getDataByKeys(t.login.keys);case 24:r=n.sent;case 25:if(c=r.data[0],c){for(l in uni.showToast({title:"下载数据成功"}),s=JSON.parse(c.data),t.login.key=c._id,t.login.date=c.date,t.login.keys=c.key1?[c.key1,c.key2]:["",""],s)uni.setStorageSync(l,s[l]);t.setBackup(),t.clearLogs(),uni.$emit("initData")}else uni.showToast({title:"未找到数据！"});n.next=32;break;case 29:n.prev=29,n.t0=n["catch"](13),uni.showModal({title:"错误！",content:n.t0.errMsg,showCancel:!1});case 32:case"end":return n.stop()}}),n,null,[[13,29]])})))()},createBackpuData:function(e){var t=arguments,n=this;return(0,o.default)((0,u.default)().mark((function a(){var o,r,c;return(0,u.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t.length>1&&void 0!==t[1]&&t[1],r=i.importObject("backup"),a.prev=2,a.next=5,r.createData(e);case 5:c=a.sent,uni.hideLoading(),o?uni.showModal({title:"提示",content:"云端数据过期，已重新上传（密钥重新生成）",showCancel:!1,confirmText:"知道了"}):(uni.showToast({title:"上传数据成功"}),n.clearLogs()),n.login.key=c.id,n.login.date=Date.now(),n.setBackup(),n.obj=null,a.next=18;break;case 14:a.prev=14,a.t0=a["catch"](2),uni.showToast({title:"上传数据失败"}),uni.hideLoading();case 18:case"end":return a.stop()}}),a,null,[[2,14]])})))()},createAdLog:function(t,n){var a=this;return(0,o.default)((0,u.default)().mark((function o(){var r,c;return(0,u.default)().wrap((function(u){while(1)switch(u.prev=u.next){case 0:return r={id:a.login.key,type:t,time:n,from:"login"},c=i.importObject("adLog",{customUI:!0}),u.prev=2,u.next=5,c.create(r);case 5:u.next=10;break;case 7:u.prev=7,u.t0=u["catch"](2),e.log(u.t0);case 10:case"end":return u.stop()}}),o,null,[[2,7]])})))()},updateBackupData:function(t){var n=this;return(0,o.default)((0,u.default)().mark((function a(){var o,r;return(0,u.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=i.importObject("backup"),a.prev=1,a.next=4,o.updateData(t);case 4:r=a.sent,r.updated>0?(n.obj=null,n.login.date=Date.now(),n.setBackup(),uni.hideLoading(),uni.showToast({title:"更新数据成功"}),n.clearLogs()):n.createBackpuData(t,!0),a.next=13;break;case 8:a.prev=8,a.t0=a["catch"](1),uni.showToast({title:"更新数据失败"}),uni.hideLoading(),e.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[1,8]])})))()},checkBackupKeys:function(e){var t=this;return(0,o.default)((0,u.default)().mark((function n(){var a,o,r;return(0,u.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=i.importObject("backup"),n.prev=1,o={keys:e,key:t.login.key},n.next=5,a.checkKeys(o);case 5:return r=n.sent,n.abrupt("return",r.total);case 9:return n.prev=9,n.t0=n["catch"](1),uni.showToast({title:"错误"}),uni.hideLoading(),n.abrupt("return",1);case 14:case"end":return n.stop()}}),n,null,[[1,9]])})))()},setBackup:function(){this.keyValue=this.login.key,this.login.limit=Date.now(),this.login.mola&&(this.login.mola+=this.mola),uni.setStorageSync("ysin_login",this.login),uni.$emit("updateLogin")},showAd:function(){this.isLoading||(this.time=Date.now(),this.$refs.adRewardedVideo.show())},onadload:function(e){this.isLoading=!1},onadclose:function(e){var t=this;return(0,o.default)((0,u.default)().mark((function n(){var i,a,o;return(0,u.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.detail,a=Date.now(),o=a-t.time,!i||!i.isEnded){n.next=11;break}return t.mola+=1,n.next=7,t.comfirmUpload(t.obj,!0);case 7:return n.next=9,t.createAdLog(1,o);case 9:n.next=14;break;case 11:return n.next=13,t.createAdLog(0,o);case 13:t.obj=null;case 14:case"end":return n.stop()}}),n)})))()},onaderror:function(t){this.obj=null,e.log(t.detail)}}};t.default=d}).call(this,n("5a52")["default"],n("a9ff")["default"])},ee07:function(e,t,n){"use strict";n.r(t);var i=n("9b40"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=a.a},f91a:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?t("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?t("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},a=[]},fdaef:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":e.isFull,"uni-card--shadow":e.isShadow,"uni-card--border":e.border},style:{margin:e.isFull?0:e.margin,padding:e.spacing,"box-shadow":e.isShadow?e.shadow:""}},[e._t("cover",[e.cover?n("v-uni-view",{staticClass:"uni-card__cover"},[n("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:e.cover},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("cover")}}})],1):e._e()]),e._t("title",[e.title||e.extra?n("v-uni-view",{staticClass:"uni-card__header"},[n("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("title")}}},[e.thumbnail?n("v-uni-view",{staticClass:"uni-card__header-avatar"},[n("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:e.thumbnail,mode:"aspectFit"}})],1):e._e(),n("v-uni-view",{staticClass:"uni-card__header-content"},[n("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[e._v(e._s(e.title))]),e.title&&e.subTitle?n("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[e._v(e._s(e.subTitle))]):e._e()],1)],1),n("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("extra")}}},[n("v-uni-text",{staticClass:"uni-card__header-extra-text"},[e._v(e._s(e.extra))])],1)],1):e._e()]),n("v-uni-view",{staticClass:"uni-card__content",style:{padding:e.padding},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("content")}}},[e._t("default")],2),n("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("actions")}}},[e._t("actions")],2)],2)},a=[]}}]);