(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"0146":function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4");var a=n(i("5530")),o=i("26cb"),r={data:function(){return{login:null,tempConfig:{showBox:!0,showAll:!0},urls:["https://mp-aed33a24-9001-489d-9fa7-a38945cb0da2.cdn.bspapp.com/cloudstorage/f21767cd-d50a-4b7c-aa20-f95d0221bd0d.jpg","https://mp-aed33a24-9001-489d-9fa7-a38945cb0da2.cdn.bspapp.com/cloudstorage/045f7698-be0a-46bb-ace6-7de033b3fc7a.png"],accordionVal2:"-1",accordionVal:"-1",keyValue:"",downloadText:"下载云端数据",backup:null}},computed:(0,a.default)({},(0,o.mapState)(["config"])),onUnload:function(){uni.$off("updateLogin")},onLoad:function(){this.tempConfig=JSON.parse(JSON.stringify(this.config));var t=this;uni.$on("updateLogin",(function(){t.updateLogin()})),t.updateLogin()},methods:{updateLogin:function(){var t=uni.getStorageSync("ysin_login");if(t)this.login=t;else{var e=uni.getStorageSync("ysin_key"),i=uni.getStorageSync("ysin_date");this.login={key:e,keys:["",""],date:i}}},showImage:function(e){uni.previewImage({urls:[this.urls[e]],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){t.log("选中了第"+(e.tapIndex+1)+"个按钮,第"+(e.index+1)+"张图片")},fail:function(e){t.log(e.errMsg)}}})},switchChange:function(t){0==t?this.tempConfig.showBox=!this.tempConfig.showBox:this.tempConfig.showAll=!this.tempConfig.showAll,this.$store.commit("saveConfig",this.tempConfig)},copyKey:function(){this.login.key?uni.setClipboardData({data:this.login.key,success:function(){uni.showToast({title:"复制成功"})},fail:function(e){t.log(e)}}):uni.showToast({title:"没有连接数据库"})},goLogin:function(t){uni.navigateTo({url:"/pages/my/login?type="+t})},clickBannerItem:function(){uni.clearStorage(),uni.showToast({title:"缓存已经清除",icon:"none"}),this.login={},uni.$emit("initData")},toChangelog:function(){uni.navigateTo({url:"/pages/index/changelog"})},deleteLoacl:function(){var t=this;uni.showModal({title:"提示",content:"确定要清空吗?",success:function(e){e.confirm?t.clickBannerItem():e.cancel}})}}};e.default=r}).call(this,i("5a52")["default"])},"054d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("e25e");var n=i("cdb7"),a={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,n.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var t=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){t.refresh()}),parseInt(this.refreshRate)))}}};e.default=a},"0767":function(t,e,i){"use strict";var n=i("e30c"),a=i.n(n);a.a},1291:function(t,e,i){"use strict";i.r(e);var n=i("6b9d"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"190b":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("2ca0");var n={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=n},"199f":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("fcef").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-collapse-item"},[i("v-uni-view",{staticClass:"uni-collapse-item__title",class:{"is-open":t.isOpen&&"auto"===t.titleBorder,"uni-collapse-item-border":"none"!==t.titleBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick(!t.isOpen)}}},[i("v-uni-view",{staticClass:"uni-collapse-item__title-wrap"},[t._t("title",[i("v-uni-view",{staticClass:"uni-collapse-item__title-box",class:{"is-disabled":t.disabled}},[t.thumb?i("v-uni-image",{staticClass:"uni-collapse-item__title-img",attrs:{src:t.thumb}}):t._e(),i("v-uni-text",{staticClass:"uni-collapse-item__title-text"},[t._v(t._s(t.title))])],1)])],2),t.showArrow?i("v-uni-view",{staticClass:"uni-collapse-item__title-arrow",class:{"uni-collapse-item__title-arrow-active":t.isOpen,"uni-collapse-item--animation":!0===t.showAnimation}},[i("uni-icons",{attrs:{color:t.disabled?"#ddd":"#bbb",size:"14",type:"bottom"}})],1):t._e()],1),i("v-uni-view",{staticClass:"uni-collapse-item__wrap",class:{"is--transition":t.showAnimation},style:{height:(t.isOpen?t.height:0)+"px"}},[i("v-uni-view",{ref:"collapse--hook",staticClass:"uni-collapse-item__wrap-content",class:{open:t.isheight,"uni-collapse-item--border":t.border&&t.isOpen},attrs:{id:t.elId}},[t._t("default")],2)],1)],1)},o=[]},"24db":function(t,e,i){"use strict";i.r(e);var n=i("190b"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"32d0":function(t,e,i){var n=i("58dd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5264f9cc",n,!0,{sourceMap:!1,shadowMode:!1})},3552:function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("d401"),i("d3b7"),i("25f0"),i("c975"),i("14d9"),i("159b"),i("a434"),i("ac1f");var n={name:"uniCollapseItem",props:{title:{type:String,default:""},name:{type:[Number,String],default:""},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!0},open:{type:Boolean,default:!1},thumb:{type:String,default:""},titleBorder:{type:String,default:"auto"},border:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:!1,isheight:null,height:0,elId:t,nameSync:0}},watch:{open:function(t){this.isOpen=t,this.onClick(t,"init")}},updated:function(t){var e=this;this.$nextTick((function(){e.init(!0)}))},created:function(){this.collapse=this.getCollapse(),this.oldHeight=0,this.onClick(this.open,"init")},destroyed:function(){this.__isUnmounted||this.uninstall()},mounted:function(){this.collapse&&(""!==this.name?this.nameSync=this.name:this.nameSync=this.collapse.childrens.length+"",-1===this.collapse.names.indexOf(this.nameSync)?this.collapse.names.push(this.nameSync):t.warn("name 值 ".concat(this.nameSync," 重复")),-1===this.collapse.childrens.indexOf(this)&&this.collapse.childrens.push(this),this.init())},methods:{init:function(t){this.getCollapseHeight(t)},uninstall:function(){var t=this;this.collapse&&(this.collapse.childrens.forEach((function(e,i){e===t&&t.collapse.childrens.splice(i,1)})),this.collapse.names.forEach((function(e,i){e===t.nameSync&&t.collapse.names.splice(i,1)})))},onClick:function(t,e){this.disabled||(this.isOpen=t,this.isOpen&&this.collapse&&this.collapse.setAccordion(this),"init"!==e&&this.collapse.onChange(t,this))},getCollapseHeight:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=uni.createSelectorQuery().in(this);n.select("#".concat(this.elId)).fields({size:!0},(function(n){if(!(i>=10)){if(!n)return i++,void e.getCollapseHeight(!1,i);e.height=n.height,e.isheight=!0,t||e.onClick(e.isOpen,"init")}})).exec()},getNvueHwight:function(t){var e=this;dom.getComponentRect(this.$refs["collapse--hook"],(function(i){if(i&&i.result&&i.size){if(e.height=i.size.height,e.isheight=!0,t)return;e.onClick(e.open,"init")}}))},getCollapse:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniCollapse",e=this.$parent,i=e.$options.name;while(i!==t){if(e=e.$parent,!e)return!1;i=e.$options.name}return e}}};e.default=n}).call(this,i("5a52")["default"])},4920:function(t,e,i){"use strict";i.r(e);var n=i("0146"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"57f9":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-collapse"},[this._t("default")],2)},a=[]},"58dd":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e},"6b9d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},scroll:function(t){this.$emit("scroll",t)}}};e.default=n},"6c29":function(t,e,i){var n=i("a1ae");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("37f0ae79",n,!0,{sourceMap:!1,shadowMode:!1})},"70f1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-collapse[data-v-1de8c812]{width:100%;display:flex;flex-direction:column;background-color:#fff}',""]),t.exports=e},7537:function(t,e,i){"use strict";var n=i("78b4"),a=i.n(n);a.a},"78b4":function(t,e,i){var n=i("b5a8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("035636ec",n,!0,{sourceMap:!1,shadowMode:!1})},"86d6":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-7b4ad1bd]{padding:15px}.text[data-v-7b4ad1bd]{font-size:14px;color:#666;line-height:20px}.title-text[data-v-7b4ad1bd]{font-weight:700;margin-top:14px}.title-card[data-v-7b4ad1bd]{margin-bottom:20px;font-weight:700;font-size:18px}",""]),t.exports=e},"8ad1":function(t,e,i){"use strict";i.r(e);var n=i("e71d"),a=i("4920");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0767");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"7b4ad1bd",null,!1,n["a"],void 0);e["default"]=s.exports},9156:function(t,e,i){"use strict";i.r(e);var n=i("199f"),a=i("fef2");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("7537");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"335e5506",null,!1,n["a"],void 0);e["default"]=s.exports},9293:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},a=[]},"949d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowA?i("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):i("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},a=[]},a1ae:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},a1f1:function(t,e,i){"use strict";var n=i("32d0"),a=i.n(n);a.a},a552:function(t,e,i){"use strict";i.r(e);var n=i("57f9"),a=i("d62a");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b402");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1de8c812",null,!1,n["a"],void 0);e["default"]=s.exports},add1:function(t,e,i){"use strict";i.r(e);var n=i("9293"),a=i("1291");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("ffd4");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6fce09b0",null,!1,n["a"],void 0);e["default"]=s.exports},af21:function(t,e,i){"use strict";i.r(e);var n=i("fa26"),a=i("ce24");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"690ab064",null,!1,n["a"],void 0);e["default"]=s.exports},b402:function(t,e,i){"use strict";var n=i("be93"),a=i.n(n);a.a},b5a8:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-collapse-item[data-v-335e5506]{box-sizing:border-box}.uni-collapse-item__title[data-v-335e5506]{display:flex;width:100%;box-sizing:border-box;flex-direction:row;align-items:center;transition:border-bottom-color .3s}.uni-collapse-item__title-wrap[data-v-335e5506]{width:100%;flex:1}.uni-collapse-item__title-box[data-v-335e5506]{padding:0 15px;display:flex;width:100%;box-sizing:border-box;flex-direction:row;justify-content:space-between;align-items:center;height:48px;line-height:48px;background-color:#fff;color:#303133;font-size:13px;font-weight:500;cursor:pointer;outline:none}.uni-collapse-item__title-box.is-disabled .uni-collapse-item__title-text[data-v-335e5506]{color:#999}.uni-collapse-item__title.uni-collapse-item-border[data-v-335e5506]{border-bottom:1px solid #ebeef5}.uni-collapse-item__title.is-open[data-v-335e5506]{border-bottom-color:transparent}.uni-collapse-item__title-img[data-v-335e5506]{height:22px;width:22px;margin-right:10px}.uni-collapse-item__title-text[data-v-335e5506]{flex:1;font-size:14px;white-space:nowrap;color:inherit;overflow:hidden;text-overflow:ellipsis}.uni-collapse-item__title-arrow[data-v-335e5506]{display:flex;box-sizing:border-box;align-items:center;justify-content:center;width:20px;height:20px;margin-right:10px;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.uni-collapse-item__title-arrow-active[data-v-335e5506]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.uni-collapse-item__wrap[data-v-335e5506]{will-change:height;box-sizing:border-box;background-color:#fff;overflow:hidden;position:relative;height:0}.uni-collapse-item__wrap.is--transition[data-v-335e5506]{transition-property:height,border-bottom-width;transition-duration:.3s;will-change:height}.uni-collapse-item__wrap-content[data-v-335e5506]{position:absolute;font-size:13px;color:#303133;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:0}.uni-collapse-item__wrap-content.uni-collapse-item--border[data-v-335e5506]{border-bottom-width:1px;border-bottom-color:red;border-bottom-color:#ebeef5}.uni-collapse-item__wrap-content.open[data-v-335e5506]{position:relative}.uni-collapse-item--animation[data-v-335e5506]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s;transition-timing-function:ease}',""]),t.exports=e},be93:function(t,e,i){var n=i("70f1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4daba22e",n,!0,{sourceMap:!1,shadowMode:!1})},bfb4:function(t,e,i){"use strict";i.r(e);var n=i("949d"),a=i("24db");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a1f1");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"03b6d5de",null,!1,n["a"],void 0);e["default"]=s.exports},cdb7:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=l,e.friendlyDate=function(t,e){var i=e.locale,n=void 0===i?"zh":i,a=e.threshold,o=void 0===a?[6e4,36e5]:a,r=e.format,u=void 0===r?"yyyy/MM/dd hh:mm:ss":r;if("-"===t)return t;if(!t&&0!==t)return"";var c,d,f={zh:{year:"年",month:"月",day:"天",hour:"小时",minute:"分钟",second:"秒",ago:"前",later:"后",justNow:"刚刚",soon:"马上",template:"{num}{unit}{suffix}"},en:{year:"year",month:"month",day:"day",hour:"hour",minute:"minute",second:"second",ago:"ago",later:"later",justNow:"just now",soon:"soon",template:"{num} {unit} {suffix}"}},h=f[n]||f.zh,p=s(t),v=p.getTime()-Date.now(),m=Math.abs(v);if(m<o[0])return v<0?h.justNow:h.soon;if(m>=o[1])return l(p,u);var g=h.later;v<0&&(g=h.ago,v=-v);var b=Math.floor(v/1e3),w=Math.floor(b/60),y=Math.floor(w/60),_=Math.floor(y/24),x=Math.floor(_/30),S=Math.floor(x/12);switch(!0){case S>0:c=S,d=h.year;break;case x>0:c=x,d=h.month;break;case _>0:c=_,d=h.day;break;case y>0:c=y,d=h.hour;break;case w>0:c=w,d=h.minute;break;default:c=b,d=h.second;break}"en"===n&&(1===c?c="a":d+="s");return h.template.replace(/{\s*num\s*}/g,c+"").replace(/{\s*unit\s*}/g,d).replace(/{\s*suffix\s*}/g,g)};var a=n(i("53ca"));function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;t+="";while(t.length<e)t="0"+t;return t.slice(-e)}i("fb6a"),i("c975"),i("ac1f"),i("5319");var r={yyyy:function(t){return o(t.year,4)},yy:function(t){return o(t.year)},MM:function(t){return o(t.month)},M:function(t){return t.month},dd:function(t){return o(t.day)},d:function(t){return t.day},hh:function(t){return o(t.hour)},h:function(t){return t.hour},mm:function(t){return o(t.minute)},m:function(t){return t.minute},ss:function(t){return o(t.second)},s:function(t){return t.second},SSS:function(t){return o(t.millisecond,3)},S:function(t){return t.millisecond}};function s(t){if(t instanceof Date)return t;switch((0,a.default)(t)){case"string":return t.indexOf("T")>-1?new Date(t):new Date(t.replace(/-/g,"/"));default:return new Date(t)}}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd hh:mm:ss";if(!t&&0!==t)return"";t=s(t);var i={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds(),millisecond:t.getMilliseconds()},n=/yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/,a=!0,o=e;while(a)a=!1,o=o.replace(n,(function(t){return a=!0,r[t](i)}));return o}},ce24:function(t,e,i){"use strict";i.r(e);var n=i("054d"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d62a:function(t,e,i){"use strict";i.r(e);var n=i("e606"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e30c:function(t,e,i){var n=i("86d6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b2b5b1e0",n,!0,{sourceMap:!1,shadowMode:!1})},e606:function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("14d9");var n={name:"uniCollapse",emits:["change","activeItem","input","update:modelValue"],props:{value:{type:[String,Array],default:""},modelValue:{type:[String,Array],default:""},accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},computed:{dataValue:function(){var t="string"===typeof this.value&&""===this.value||Array.isArray(this.value)&&0===this.value.length;"string"===typeof this.modelValue&&""===this.modelValue||Array.isArray(this.modelValue)&&this.modelValue.length;return t?this.modelValue:this.value}},watch:{dataValue:function(t){this.setOpen(t)}},created:function(){this.childrens=[],this.names=[]},mounted:function(){var t=this;this.$nextTick((function(){t.setOpen(t.dataValue)}))},methods:{setOpen:function(e){var i=this,n="string"===typeof e,a=Array.isArray(e);this.childrens.forEach((function(o,r){if(n&&e===o.nameSync){if(!i.accordion)return void t.warn("accordion 属性为 false ,v-model 类型应该为 array");o.isOpen=!0}a&&e.forEach((function(e){if(e===o.nameSync){if(i.accordion)return void t.warn("accordion 属性为 true ,v-model 类型应该为 string");o.isOpen=!0}}))})),this.emit(e)},setAccordion:function(t){this.accordion&&this.childrens.forEach((function(e,i){t!==e&&(e.isOpen=!1)}))},resize:function(){this.childrens.forEach((function(t,e){t.getCollapseHeight()}))},onChange:function(t,e){var i=[];this.accordion?i=t?e.nameSync:"":this.childrens.forEach((function(t,e){t.isOpen&&i.push(t.nameSync)})),this.$emit("change",i),this.emit(i)},emit:function(t){this.$emit("input",t),this.$emit("update:modelValue",t)}}};e.default=n}).call(this,i("5a52")["default"])},e71d:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniCard:i("3d92").default,uniSection:i("89d3").default,uniList:i("add1").default,uniListItem:i("6e18").default,uniPopup:i("b993").default,uniPopupDialog:i("b4f6").default,uniDateformat:i("af21").default,uniLink:i("bfb4").default,uniCollapse:i("a552").default,uniCollapseItem:i("9156").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-card",{attrs:{margin:"0 15px 15px",spacing:"0",padding:"0"}},[i("uni-section",{attrs:{title:"支持作者",type:"line"}}),i("uni-list",{attrs:{border:!1}},[i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:"/static/we.png",clickable:!0,title:"微信",showArrow:!0,rightText:"赞赏码"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showImage(0)}}}),i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:"/static/ali.png",clickable:!0,title:"支付宝",showArrow:!0,rightText:"二维码"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showImage(1)}}})],1)],1),i("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[i("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",value:t.keyValue,title:"输入密钥..",placeholder:"..."},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}})],1),i("uni-card",{attrs:{margin:"15px",spacing:"0",padding:"0"}},[i("uni-section",{attrs:{title:"数据同步",type:"line"}}),i("v-uni-view",{staticStyle:{margin:"20px"}},[t.login.key?i("v-uni-view",[i("v-uni-view",[t._v(t._s("密钥："+t.login.key))]),i("v-uni-view",[t._v(t._s("Key："+t.login.keys[0]))]),i("v-uni-view",{staticStyle:{"font-size":"13px","margin-top":"10px"}},[t._v("更新时间："),i("uni-dateformat",{attrs:{date:t.login.date}})],1)],1):i("v-uni-view",[t._v("上传后生成的密钥可以用于恢复数据.....")]),i("v-uni-view",{staticStyle:{"margin-top":"20px",display:"flex","flex-direction":"row","align-content":"space-between"}},[i("v-uni-button",{staticStyle:{"background-color":"#f6f2ee",margin:"0px"},attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLogin(0)}}},[t._v("上传数据")]),i("v-uni-button",{staticStyle:{"background-color":"#f6f2ee"},attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLogin(1)}}},[t._v("下载数据")]),i("v-uni-button",{staticStyle:{"background-color":"#f6f2ee",margin:"0px"},attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyKey()}}},[t._v("复制密钥")])],1)],1)],1),i("uni-card",{attrs:{spacing:"0",padding:"0"}},[i("uni-section",{attrs:{title:"意见/反馈",type:"line"}}),i("v-uni-view",{staticStyle:{padding:"20px"}},[i("v-uni-view",{staticStyle:{color:"#303133"}},[t._v("1、微信：badl2019 或 QQ：313306199")]),i("v-uni-view",[t._v("处理优先级较高，一般都在（不一定能及时回复）")]),i("v-uni-view",{staticStyle:{color:"#303133","margin-top":"10px"}},[t._v("2、在帖子中回复："),i("uni-link",{attrs:{color:"#007AFF",href:"https://nga.178.com/read.php?tid=30528221",text:"地址（NGA）"}})],1),i("v-uni-view",[t._v("不急的问题可以回帖，定期会回复（反馈别开新帖，可能看不到）")])],1)],1),i("uni-card",{attrs:{padding:"0",spacing:"0"}},[i("uni-section",{attrs:{title:"核心算法",type:"line"}}),i("uni-collapse",{attrs:{accordion:!0},model:{value:t.accordionVal2,callback:function(e){t.accordionVal2=e},expression:"accordionVal2"}},[i("uni-collapse-item",{attrs:{title:"1. 词条分 "}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("[ 期望值A ] = [ 目前圣遗物 ] + [ 目前配置 ]")]),i("v-uni-view",[t._v("[ 期望值B ] = [ 默认圣遗物 ] + [ 目前配置 ]")]),i("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("圣遗物评分 = A / B * 100")]),i("v-uni-view",[t._v("[ 默认圣遗物 ] 的标准为18双爆 + 4主词条 + 3词条，其他有效继续 +3,比如：")]),i("v-uni-view",[t._v("2有效词条 9 + 4 = 13条（如心海）")]),i("v-uni-view",[t._v("3有效词条 18 + 4 = 22条（大部分角色）")]),i("v-uni-view",[t._v("4有效词条 18 + 4 + 3 = 25条（如雷电将军）")]),i("v-uni-view",[t._v("5有效词条 18 + 4 + 3 + 3 = 28条 （如香菱、胡桃）")]),i("v-uni-view",[t._v("说明：词条分体现的是当前比默认圣遗物强多少（伤害），如果你在100左右，说明圣遗物已经是小毕业的范畴。 但要注意两点\n\t\t\t\t\t\t\t1、和单人期望直接挂钩，由于词条权重的问题，可能会出现词条数挺高，但词条分低的情况。 2、和主属性无关，穿戴不合适的主属性/套装不会影响词条分，但会影响数据分。")])],1)],1),i("uni-collapse-item",{attrs:{title:"2. 数据分 "}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("[ 期望值A ] = [ 目前圣遗物 ] + [ 目前配置 ]")]),i("v-uni-view",[t._v("[ 期望值C ] = [ 默认圣遗物 ] + [ 默认配置 ]")]),i("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("数据评分 = A / C * 100")]),i("v-uni-view",[t._v("说明：[期望值C] 通常5星角色+专武，技能999，22-28词条的默认情况算出来的，是一个基准值，只是为了方便对比，实际上主C数据分80以上打深渊已经完全够了，不同角色之间评分标准不太一样，如行秋是祭礼剑作为默认武器计算标准分，这时候如果换成绿剑，数据分就会很高，但如果默认武器改成绿剑，那带祭礼数据分就很低，因此理性看待，评分是毕竟是相对分，有时候不好平衡，只要明白一点，同一个角色数据分高那个期望伤害更高就是了。")])],1)],1)],1),i("v-uni-view",{staticClass:"content"},[t._v("词条分、数据分都是基于单人期望进行计算的，区别是词条分是只考虑圣遗物词条（不考虑主属性）的伤害能力，无视其他配置，是阶段性的。数据分则是综合考虑所有配置获得的最终结果，如果数据分比词条分低，原因是圣遗物主属性（如默认是攻击沙，而实际带了充能沙）、圣遗物套装、武器、技能等级等非词条的配置比角色默认的要低。\n\t\t\t\t具体算法可以点开上面查看。")])],1),i("uni-card",{attrs:{padding:"0",spacing:"0"}},[i("uni-section",{attrs:{title:"Q & A",type:"line"}},[i("uni-collapse",{attrs:{accordion:!0},model:{value:t.accordionVal,callback:function(e){t.accordionVal=e},expression:"accordionVal"}},[i("uni-collapse-item",{attrs:{title:"1. 首页角色下面的数字是什么？"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("分别是词条分和数据分，读取的人物详情页的数据，具体可以查看上面的核心算法说明。")])],1)],1),i("uni-collapse-item",{attrs:{title:"2. 提升建议是什么？"}},[i("v-uni-view",{staticClass:"content"},[t._v("当前配置保持不变，提升某项数值后进行计算得到提升幅度，依次计算所有权重项得到所有增幅。其意义在于告诉你，在目前状态下，人物等级（未满级的情况），技能等级(未升满)，每个圣遗物词条，以及增伤对期望伤害的影响，可以参考这个权重来进行选择刷等级、天赋、圣遗物或者用于配队等，其中更换杯子的意义是，如果更换杯子增幅不多，看看你手上的杯子词条差是否可以弥补差距，判断是否要强刷一个新杯子。")])],1),i("uni-collapse-item",{attrs:{title:"3.预设是做什么用的？"}},[i("v-uni-view",{staticClass:"content"},[t._v("用于解决对比哪个武器更好，哪个套圣遗物更好，氪金命座还是专武等问题，具体方法为为进入预设页面，把当前配置复制一份出来，然后可以调整武器等配置，再进入预设页对比不同配置下的各项评分。")])],1),i("uni-collapse-item",{attrs:{title:"4.词条折算是按什么比例？"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("折算率 = 次属性提升期望 / 主属性提升期望")]),t._v("将次要属性（如胡桃的攻击）按折算率进行折算，加上其他有效词条获得折算后的词条数，感谢 NGA@young13325 提出的算法。")],1)],1),i("uni-collapse-item",{attrs:{title:"5.损失词条是什么意思？"}},[i("v-uni-view",{staticClass:"content"},[t._v("双爆不平衡会导致期望损失，比如目前是18条双爆，若显示损失了1个词条，则说明由于双爆的失衡，18条的期望与17条合理比例的双爆期望一致，感谢 NGA @Gansterbot\n\t\t\t\t\t\t\t提出的算法。")])],1),i("uni-collapse-item",{attrs:{title:"6.极限词条是多少词条？"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("极限词条 = 数据分 / 极限分")]),t._v("（1）极限词条是保持现在的主属性和其他配置不变，根据30+7+5*N的规则代入词条数，计算出来的（平衡双爆）的期望。可以用于参考这套圣遗物距离究极毕业还有多远。"),i("v-uni-view",[t._v("（2）极限词条的规则是通用的，因此不一定是每个角色的最优毕业分配。")]),i("v-uni-view",[t._v("（3）无论是词条分还是极限词条都没有办法考虑实战中需要的充能。")]),i("v-uni-view",[t._v("（4）不同角色（配置）极限词条和词条分之间的比例不同，比如有的角色对圣遗物要求不高，容易毕业，刷圣遗物伤害提升不大了，反过来也一样，总之，算法存在局限性，参考一下即可。")])],1)],1),i("uni-collapse-item",{attrs:{title:"7.圣遗物属性的角标颜色标准？"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("（1）展示柜角色，保存到本地并且未修改词条，导入展示柜角色的词条的角色会有圣遗物属性。")]),i("v-uni-view",[t._v("（2）体现是的圣遗物本身的稀有度，除了小词条会根据角色基础属性的不同进行折算，其他不区分权重。")]),i("v-uni-view",[t._v("（3）第一列为该圣遗物总词条数，其他列为具体词条数，根据角色有效词条判断是否计算（充能永远算有效）")]),i("v-uni-view",[t._v("（4）总词条标准是红色>=8、黄色>=5.5、紫色>=4、蓝色>=2.5、绿色>=1.5、灰色>=0（暂定，可能会调整）")])],1)],1)],1)],1)],1),i("uni-card",{attrs:{spacing:"0",padding:"0"}},[i("uni-section",{attrs:{title:"设置选项",type:"line"}}),i("uni-list",{attrs:{border:!1}},[i("uni-list-item",{attrs:{showSwitch:!0,title:"展示柜",switchChecked:t.tempConfig.showBox,note:"首页是否显示展示柜信息"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(0)}}}),i("uni-list-item",{attrs:{showSwitch:!0,title:"所有角色",switchChecked:t.tempConfig.showAll,note:"首页是否显示未收藏的角色"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1)}}}),i("uni-list-item",{attrs:{clickable:!0,showArrow:!0,title:"更新日志",note:"显示所有更新记录"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toChangelog.apply(void 0,arguments)}}})],1)],1),i("v-uni-button",{staticStyle:{margin:"40px 15px","background-color":"#f6f2ee"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteLoacl.apply(void 0,arguments)}}},[t._v("清空本地缓存")])],1)},o=[]},fa26:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-text",[this._v(this._s(this.dateShow))])},a=[]},fef2:function(t,e,i){"use strict";i.r(e);var n=i("3552"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},ffd4:function(t,e,i){"use strict";var n=i("6c29"),a=i.n(n);a.a}}]);