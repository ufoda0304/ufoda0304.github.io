(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"048f":function(t,e,a){"use strict";a.r(e);var i=a("127b"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"0eae":function(t,e,a){var i=a("c363");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0a61cfa4",i,!0,{sourceMap:!1,shadowMode:!1})},"127b":function(t,e,a){"use strict";(function(t){var i=a("4ea4");a("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),r=a("26cb"),o=a("2062"),d={data:function(){return{gridList:[],current:0,swiperDotIndex:0,customStyle:{backgroundColor:"#00000087",color:"#fff",borderRadius:"4px",border:"none",fontSize:"16px"}}},computed:(0,n.default)({favTitle:function(){return"收藏 - "+this.favList.length},allTitle:function(){return"角色 - "+this.allList.length}},(0,r.mapState)(["week","version","favObj","favList","allList"])),onUnload:function(){uni.$off("initData")},onLoad:function(){var t=this;uni.$on("initData",(function(){t.initData()})),this.initData()},onShareAppMessage:function(e){return"button"===e.from&&t.log(e.target),{title:"Ysin - 原神角色练度计算",path:"/pages/index/index"}},methods:{closeNotice:function(){uni.setStorageSync(this.readKey,!0)},initData:function(){this.$store.commit("setWeek");var t=uni.getStorageSync("favObj");t||(t={});var e=[],a=[];for(var i in o.charactersData){var n=o.charactersData[i],r=t[n.name];r?r.isFav?(r.reminds?r.badge=r.reminds[this.week]:r.badge=0,r.stage||(r.stage=0),e.push(n)):a.push(n):(t[n.name]={isFav:!1,date:n.rank,note:"",badge:0,stage:0},a.push(n))}e.sort((function(e,a){var i=t[a.name],n=t[e.name];return i.date*(i.badge+1)-n.date*(n.badge+1)})),a.sort((function(e,a){return t[a.name].date-t[e.name].date})),this.$store.commit("setFavObj",t),this.$store.commit("setFavList",e),this.$store.commit("setAllList",a)},toDetail:function(t){var e=uni.getStorageSync(t.name);if(e){e.cId||(e.cId=t.name);for(var a=0;a<e.aIds.length;a++){var i=e.aIds[a];"5cangbai"==i&&(e.aIds[a]="cangbai")}this.$store.commit("setPreset",e),uni.navigateTo({url:"/pages/character/detail"})}else this.$store.commit("initCharacter",t),uni.navigateTo({url:"/pages/character/config/equipment?isNew=true"})}}};e.default=d}).call(this,a("5a52")["default"])},"1b0f":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniSection:a("8483").default,uniGrid:a("84ec").default,uniGridItem:a("1eac").default,uniBadge:a("a35f").default,uniCard:a("5083").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"example-body"},[a("uni-section",{attrs:{title:t.favTitle,color:"#fff",type:"line"}},[a("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.favList,(function(e,i){return a("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"grid-item-box",class:t.favObj[e.name].badge>0?"notice":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e)}}},[a("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:t.favObj[e.name].stage,absolute:"rightTop",offset:[8,8],size:"small",customStyle:t.customStyle}},[a("v-uni-image",{staticClass:"image",attrs:{src:e.avatar,mode:"aspectFill"}})],1),a("v-uni-text",{staticClass:"text2"},[t._v(t._s(t.favObj[e.name].note))])],1)],1)})),1)],1),a("uni-section",{attrs:{title:t.allTitle,color:"#fff",type:"line"}}),a("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.allList,(function(e,i){return a("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"grid-item-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e)}}},[a("v-uni-image",{staticClass:"image",attrs:{src:e.avatar,mode:"aspectFill"}}),a("v-uni-text",{staticClass:"text"},[t._v(t._s(e.chs))])],1)],1)})),1)],1),a("uni-card",{attrs:{title:"2022-03-19 13:38:40"}},[a("v-uni-text",[t._v("- 调整了圣遗物基准值计算方法，现在双爆将会自动平衡为1：2,以避免武器带暴击导致暴击过高，导致圣遗物评分变高的问题。")])],1)],1)},r=[]},"2db4":function(t,e,a){"use strict";a.r(e);var i=a("1b0f"),n=a("048f");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("655a");var o,d=a("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"0c733507",null,!1,i["a"],o);e["default"]=c.exports},3888:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-badge--x[data-v-450b4518]{display:inline-block;position:relative}.uni-badge--absolute[data-v-450b4518]{position:absolute}.uni-badge--small[data-v-450b4518]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.uni-badge[data-v-450b4518]{display:flex;overflow:hidden;box-sizing:border-box;justify-content:center;flex-direction:row;height:20px;line-height:18px;color:#fff;border-radius:100px;background-color:#8f939c;background-color:initial;border:1px solid #fff;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;z-index:999;cursor:pointer}.uni-badge--info[data-v-450b4518]{color:#fff;background-color:#8f939c}.uni-badge--primary[data-v-450b4518]{background-color:#2979ff}.uni-badge--success[data-v-450b4518]{background-color:#18bc37}.uni-badge--warning[data-v-450b4518]{background-color:#f3a73f}.uni-badge--error[data-v-450b4518]{background-color:#e43d33}.uni-badge--inverted[data-v-450b4518]{padding:0 5px 0 0;color:#8f939c}.uni-badge--info-inverted[data-v-450b4518]{color:#8f939c;background-color:initial}.uni-badge--primary-inverted[data-v-450b4518]{color:#2979ff;background-color:initial}.uni-badge--success-inverted[data-v-450b4518]{color:#18bc37;background-color:initial}.uni-badge--warning-inverted[data-v-450b4518]{color:#f3a73f;background-color:initial}.uni-badge--error-inverted[data-v-450b4518]{color:#e43d33;background-color:initial}',""]),t.exports=e},"3b61":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-badge--x"},[t._t("default"),t.text?a("v-uni-text",{staticClass:"uni-badge",class:t.classNames,style:[t.badgeWidth,t.positionStyle,t.customStyle,t.dotStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.displayValue))]):t._e()],2)},r=[]},"408b":function(t,e,a){"use strict";a.r(e);var i=a("9d27"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"4d7d":function(t,e,a){"use strict";var i=a("6ef9"),n=a.n(i);n.a},5083:function(t,e,a){"use strict";a.r(e);var i=a("a3e7"),n=a("408b");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("b3ec");var o,d=a("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"6d06604a",null,!1,i["a"],o);e["default"]=c.exports},"655a":function(t,e,a){"use strict";var i=a("d7d6"),n=a.n(i);n.a},"6ef9":function(t,e,a){var i=a("3888");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6d1eb058",i,!0,{sourceMap:!1,shadowMode:!1})},"7c97":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"\nuni-page-body[data-v-0c733507]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#fff;min-height:100%;height:auto}uni-view[data-v-0c733507]{font-size:14px;line-height:inherit}\n.example-body[data-v-0c733507]{flex-direction:column;padding:15px;background-color:#fff}.image[data-v-0c733507]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.notice[data-v-0c733507]{background-color:rgba(185,203,255,.27)!important\n/* \tfont-weight: 700;\n\tcolor: #b1968b!important; */}.text2[data-v-0c733507]{text-align:center;font-size:13px;color:#333}.text[data-v-0c733507]{text-align:center;font-size:13px;margin-top:6px;color:#333}.example-body[data-v-0c733507]{\ndisplay:block\n}.uni-grid-item[data-v-0c733507]{height:auto!important}.grid-item-box[data-v-0c733507]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?28?% 0 %?8?%;margin:%?10?%;background:#f5f5f5;border-radius:%?8?%}.banner-image[data-v-0c733507]{\nmax-width:500px;\nwidth:%?750?%;height:%?400?%}.swiper-box[data-v-0c733507]{height:%?400?%}.search-icons[data-v-0c733507]{padding:%?16?%}.search-container-bar[data-v-0c733507]{\ndisplay:flex;\nflex-direction:row;justify-content:center;align-items:center;position:fixed;left:0;right:0;z-index:10;background-color:#fff}\n[data-v-0c733507] .uni-searchbar__box{border-width:0}\n[data-v-0c733507] .uni-input-placeholder{font-size:%?28?%}.card-actions[data-v-0c733507]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-0c733507]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-0c733507]{font-size:12px;color:#666;margin-left:5px}body.?%PAGE?%[data-v-0c733507]{background-color:#fff}",""]),t.exports=e},"9d27":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=i},a35f:function(t,e,a){"use strict";a.r(e);var i=a("3b61"),n=a("a599d");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("4d7d");var o,d=a("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"450b4518",null,!1,i["a"],o);e["default"]=c.exports},a3e7:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?a("v-uni-view",{staticClass:"uni-card__cover"},[a("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?a("v-uni-view",{staticClass:"uni-card__header"},[a("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?a("v-uni-view",{staticClass:"uni-card__header-avatar"},[a("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),a("v-uni-view",{staticClass:"uni-card__header-content"},[a("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?a("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),a("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[a("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),a("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),a("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},a599d:function(t,e,a){"use strict";a.r(e);var i=a("a65a"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},a65a:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniBadge",emits:["click"],props:{type:{type:String,default:"error"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:function(){return[0,0]}},text:{type:[String,Number],default:""},size:{type:String,default:"small"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{width:function(){return 8*String(this.text).length+12},classNames:function(){var t=this.inverted,e=this.type,a=this.size,i=this.absolute;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+a,i?"uni-badge--absolute":""].join(" ")},positionStyle:function(){if(!this.absolute)return{};var t=this.width/2,e=10;this.isDot&&(t=5,e=5);var a="".concat(-t+this.offset[0],"px"),i="".concat(-e+this.offset[1],"px"),n={rightTop:{right:a,top:i},rightBottom:{right:a,bottom:i},leftBottom:{left:a,bottom:i},leftTop:{left:a,top:i}},r=n[this.absolute];return r||n["rightTop"]},badgeWidth:function(){return{width:"".concat(this.width,"px")}},dotStyle:function(){return this.isDot?{width:"10px",height:"10px",borderRadius:"10px"}:{}},displayValue:function(){var t=this.isDot,e=this.text,a=this.maxNum;return t?"":Number(e)>a?"".concat(a,"+"):e}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},b3ec:function(t,e,a){"use strict";var i=a("0eae"),n=a.n(i);n.a},c363:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},d7d6:function(t,e,a){var i=a("7c97");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("66311862",i,!0,{sourceMap:!1,shadowMode:!1})}}]);