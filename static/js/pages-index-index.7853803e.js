(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0016":function(t,e,i){"use strict";i("4160"),i("a434"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=n},"048f":function(t,e,i){"use strict";i.r(e);var n=i("127b"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"127b":function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),r=i("26cb"),o=i("2062"),d={data:function(){return{readKey:"isRead2",isRead:!1,gridList:[],current:0,swiperDotIndex:0}},computed:(0,a.default)({},(0,r.mapState)(["week","version","favObj","favList","allList"])),onUnload:function(){uni.$off("initData")},onShow:function(){uni.setNavigationBarTitle({title:"Ysin"})},onLoad:function(){this.isRead=uni.getStorageSync(this.readKey),t.log("生产环境");var e=this;uni.$on("initData",(function(){e.initData()})),this.initData()},methods:{closeNotice:function(){uni.setStorageSync(this.readKey,!0)},initData:function(){this.$store.commit("setWeek");var t=uni.getStorageSync("favObj");t||(t={});var e=[],i=[];for(var n in o.charactersData){var a=o.charactersData[n],r=t[a.name];r?r.isFav?(r.reminds?r.badge=r.reminds[this.week]:r.badge=0,e.push(a)):i.push(a):(t[a.name]={isFav:!1,date:a.rank,note:""},i.push(a))}e.sort((function(e,i){return t[i.name].date-t[e.name].date})),i.sort((function(e,i){return t[i.name].date-t[e.name].date})),this.$store.commit("setFavObj",t),this.$store.commit("setFavList",e),this.$store.commit("setAllList",i)},toDetail:function(t){var e=uni.getStorageSync(t.name);e?uni.navigateTo({url:"/pages/character/detail?cId="+t.name}):(this.$store.commit("initCharacter",t),this.$store.commit("setPreset"),uni.navigateTo({url:"/pages/character/config/equipment?isNew=true"}))}}};e.default=d}).call(this,i("5a52")["default"])},"1eac":function(t,e,i){"use strict";i.r(e);var n=i("afc6"),a=i("b2c2");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("d227");var o,d=i("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"75fe81d7",null,!1,n["a"],o);e["default"]=c.exports},"2db4":function(t,e,i){"use strict";i.r(e);var n=i("de35"),a=i("048f");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("e6a4");var o,d=i("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"d4511d5c",null,!1,n["a"],o);e["default"]=c.exports},"31f3":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":t.showBorder},style:{"border-left-color":t.borderColor},attrs:{id:t.elId}},[t._t("default")],2)],1)},r=[]},3888:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-badge--x[data-v-450b4518]{display:inline-block;position:relative}.uni-badge--absolute[data-v-450b4518]{position:absolute}.uni-badge--small[data-v-450b4518]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.uni-badge[data-v-450b4518]{display:flex;overflow:hidden;box-sizing:border-box;justify-content:center;flex-direction:row;height:20px;line-height:18px;color:#fff;border-radius:100px;background-color:#8f939c;background-color:initial;border:1px solid #fff;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;z-index:999;cursor:pointer}.uni-badge--info[data-v-450b4518]{color:#fff;background-color:#8f939c}.uni-badge--primary[data-v-450b4518]{background-color:#2979ff}.uni-badge--success[data-v-450b4518]{background-color:#18bc37}.uni-badge--warning[data-v-450b4518]{background-color:#f3a73f}.uni-badge--error[data-v-450b4518]{background-color:#e43d33}.uni-badge--inverted[data-v-450b4518]{padding:0 5px 0 0;color:#8f939c}.uni-badge--info-inverted[data-v-450b4518]{color:#8f939c;background-color:initial}.uni-badge--primary-inverted[data-v-450b4518]{color:#2979ff;background-color:initial}.uni-badge--success-inverted[data-v-450b4518]{color:#18bc37;background-color:initial}.uni-badge--warning-inverted[data-v-450b4518]{color:#f3a73f;background-color:initial}.uni-badge--error-inverted[data-v-450b4518]{color:#e43d33;background-color:initial}',""]),t.exports=e},"3b61":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-badge--x"},[t._t("default"),t.text?i("v-uni-text",{staticClass:"uni-badge",class:t.classNames,style:[t.badgeWidth,t.positionStyle,t.customStyle,t.dotStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.displayValue))]):t._e()],2)},r=[]},"3c81":function(t,e,i){"use strict";var n=i("5735"),a=i.n(n);a.a},"4d7d":function(t,e,i){"use strict";var n=i("6ef9"),a=i.n(n);a.a},5735:function(t,e,i){var n=i("b9a2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("50ee0c26",n,!0,{sourceMap:!1,shadowMode:!1})},"6ef9":function(t,e,i){var n=i("3888");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6d1eb058",n,!0,{sourceMap:!1,shadowMode:!1})},"84ec":function(t,e,i){"use strict";i.r(e);var n=i("31f3"),a=i("8b78");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("3c81");var o,d=i("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"534a6b79",null,!1,n["a"],o);e["default"]=c.exports},"8b78":function(t,e,i){"use strict";i.r(e);var n=i("c83b"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},a35f:function(t,e,i){"use strict";i.r(e);var n=i("3b61"),a=i("a599");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("4d7d");var o,d=i("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"450b4518",null,!1,n["a"],o);e["default"]=c.exports},a599:function(t,e,i){"use strict";i.r(e);var n=i("a65a"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},a65a:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniBadge",emits:["click"],props:{type:{type:String,default:"error"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:function(){return[0,0]}},text:{type:[String,Number],default:""},size:{type:String,default:"small"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{width:function(){return 8*String(this.text).length+12},classNames:function(){var t=this.inverted,e=this.type,i=this.size,n=this.absolute;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+i,n?"uni-badge--absolute":""].join(" ")},positionStyle:function(){if(!this.absolute)return{};var t=this.width/2,e=10;this.isDot&&(t=5,e=5);var i="".concat(-t+this.offset[0],"px"),n="".concat(-e+this.offset[1],"px"),a={rightTop:{right:i,top:n},rightBottom:{right:i,bottom:n},leftBottom:{left:i,bottom:n},leftTop:{left:i,top:n}},r=a[this.absolute];return r||a["rightTop"]},badgeWidth:function(){return{width:"".concat(this.width,"px")}},dotStyle:function(){return this.isDot?{width:"10px",height:"10px",borderRadius:"10px"}:{}},displayValue:function(){var t=this.isDot,e=this.text,i=this.maxNum;return t?"":Number(e)>i?"".concat(i,"+"):e}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},afc6:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},r=[]},b2c2:function(t,e,i){"use strict";i.r(e);var n=i("0016"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},b856:function(t,e,i){var n=i("ef081");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("31add4ec",n,!0,{sourceMap:!1,shadowMode:!1})},b9a2:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-wrap[data-v-534a6b79]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-534a6b79]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-534a6b79]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}',""]),t.exports=e},c83b:function(t,e,i){"use strict";i("4160"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=n},d227:function(t,e,i){"use strict";var n=i("b856"),a=i.n(n);a.a},d69c:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\nuni-page-body[data-v-d4511d5c]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#fff;min-height:100%;height:auto}uni-view[data-v-d4511d5c]{font-size:14px;line-height:inherit}.example-body[data-v-d4511d5c]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example-body[data-v-d4511d5c]{flex-direction:column;padding:15px;background-color:#fff}.image[data-v-d4511d5c]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-d4511d5c]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.example-body[data-v-d4511d5c]{\ndisplay:block\n}.uni-grid-item[data-v-d4511d5c]{height:auto!important}.grid-item-box[data-v-d4511d5c]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?15?% 0;margin:%?8?%;background:#f5f5f5;border-radius:%?8?%}.banner-image[data-v-d4511d5c]{\nmax-width:500px;\nwidth:%?750?%;height:%?400?%}.swiper-box[data-v-d4511d5c]{height:%?400?%}.search-icons[data-v-d4511d5c]{padding:%?16?%}.search-container-bar[data-v-d4511d5c]{\ndisplay:flex;\nflex-direction:row;justify-content:center;align-items:center;position:fixed;left:0;right:0;z-index:10;background-color:#fff}\n[data-v-d4511d5c] .uni-searchbar__box{border-width:0}\n[data-v-d4511d5c] .uni-input-placeholder{font-size:%?28?%}.card-actions[data-v-d4511d5c]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-d4511d5c]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-d4511d5c]{font-size:12px;color:#666;margin-left:5px}body.?%PAGE?%[data-v-d4511d5c]{background-color:#fff}",""]),t.exports=e},de35:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniNoticeBar:i("ef6a").default,uniSection:i("8483").default,uniGrid:i("84ec").default,uniGridItem:i("1eac").default,uniBadge:i("a35f").default,uniCard:i("5083").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"warp"},[t.isRead?t._e():i("uni-notice-bar",{attrs:{"show-icon":!0,"show-close":!0,single:!0,text:"添加了部分功能说明,在最下面「我的」选项里查看"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeNotice.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-section",{attrs:{title:"收藏 - "+t.favList.length,color:"#fff",type:"line"}},[i("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.favList,(function(e,n){return i("uni-grid-item",{key:n,staticClass:"uni-grid-item"},[i("v-uni-view",{staticClass:"grid-item-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}},[i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:t.favObj[e.name].badge,absolute:"rightTop",size:"small"}},[i("v-uni-image",{staticClass:"image",attrs:{src:e.avatar,mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"text"},[t._v(t._s(t.favObj[e.name].note))])],1)],1)})),1)],1),i("uni-section",{attrs:{title:"角色 - "+t.allList.length,color:"#fff",type:"line"}}),i("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.allList,(function(e,n){return i("uni-grid-item",{key:n,staticClass:"uni-grid-item"},[i("v-uni-view",{staticClass:"grid-item-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}},[i("v-uni-image",{staticClass:"image",attrs:{src:e.avatar,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.chs))])],1)],1)})),1)],1),i("uni-card",{attrs:{title:"2022-03-06 20:28:02"}},[i("v-uni-text",[t._v("- 修复了融甘预设不显示的问题")])],1),i("v-uni-view",{staticStyle:{height:"50px"}})],1)},r=[]},e6a4:function(t,e,i){"use strict";var n=i("edb6"),a=i.n(n);a.a},edb6:function(t,e,i){var n=i("d69c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("bfa2cb12",n,!0,{sourceMap:!1,shadowMode:!1})},ef081:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-item[data-v-75fe81d7]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-75fe81d7]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-75fe81d7]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-75fe81d7]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-75fe81d7]:active{background-color:#f1f1f1}',""]),t.exports=e}}]);