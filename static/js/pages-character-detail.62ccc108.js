(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-detail"],{"0337":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("37dc"),o=n(i("2273")),r=(0,a.initVueI18n)(o.default),s=r.t,c={name:"UniGoodsNav",emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:s("uni-goods-nav.options.shop")},{icon:"cart",text:s("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:s("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"linear-gradient(90deg, #FFCD1E, #FF8A18)",color:"#fff"},{text:s("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"linear-gradient(90deg, #FE6035, #EF1224)",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=c},"0eae":function(t,e,i){var n=i("c363");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0a61cfa4",n,!0,{sourceMap:!1,shadowMode:!1})},"17e3":function(t,e,i){"use strict";i.r(e);var n=i("0337"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"19ad":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a1b9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-goods-nav"},[i("v-uni-view",{staticClass:"uni-tab__seat"}),i("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(n,e)}}},[i("v-uni-view",{staticClass:"uni-tab__icon"},[i("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),i("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),i("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?i("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-right",style:{background:e.backgroundColor,color:e.color},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buttonClick(n,e)}}},[i("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},o=[]},2273:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("6de8")),o=n(i("3cac8")),r=n(i("f300")),s={en:a.default,"zh-Hans":o.default,"zh-Hant":r.default};e.default=s},2827:function(t,e,i){var n=i("f601a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("09d94420",n,!0,{sourceMap:!1,shadowMode:!1})},"36ed":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniCard:i("5083").default,uniList:i("b532").default,uniListItem:i("6fa1").default,uniSection:i("8483").default,uniGoodsNav:i("f27b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-card",{attrs:{margin:"20px",padding:"0",spacing:"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty()}}},[i("uni-list",[i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:t.character.avatar,title:t.character.chs,rightText:t.preset.cNote}}),t.weapon?i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.weapon.chs,thumb:t.weapon.url,rightText:t.preset.wStage+1+"精"}}):t._e(),t.artifact?i("v-uni-view",[i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.artifact.chs,rightText:t.preset.aSets?"2件套":"4件套",thumb:t.artifact.url}}),t.preset.aSets?i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,title:t.artifact2.chs,rightText:"2件套",thumb:t.artifact2.url}}):t._e()],1):t._e()],1)],1),t.preset.tResult?i("uni-card",{attrs:{margin:"20px",padding:"0",spacing:"0"}},[i("uni-section",{attrs:{type:"line",title:"词条分析",rightText:t.preset.tResult.content}}),i("uni-list",[i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.tResult.title,clickable:!0,rightText:t.preset.tResult.text},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:t.preset.tResult.color}},[t._v(t._s(t.preset.tResult.score))])]},proxy:!0}],null,!1,1554086503)}),t._l(t.preset.tResults,(function(e,n){return i("uni-list-item",{key:e.title,attrs:{clickable:!0,title:e.title,rightText:e.text},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}}})}))],2)],1):t._e(),i("uni-card",{attrs:{padding:"0",spacing:"0",margin:"20px"}},[i("uni-section",{attrs:{title:"数据分析",type:"line",rightText:t.preset.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}}),i("uni-list",[i("uni-list-item",{attrs:{clickable:!0,showBadge:!0,title:t.preset.dResult.title,rightText:t.preset.dResult.text,note:t.preset.dResult.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:t.preset.dResult.color}},[t._v(t._s(t.preset.dResult.score))])]},proxy:!0}])}),t._l(t.preset.dResults,(function(e,n){return i("uni-list-item",{key:e[0],attrs:{clickable:!0,title:e[0],rightText:e[1]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}})})),t.preset.dBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.showBuffs,title:"环境增益 - "+t.preset.dBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchBuffs.apply(void 0,arguments)}}}):t._e(),t._l(t.preset.dBuffs,(function(e,n){return i("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showBuffs,expression:"showBuffs"}],key:n,staticClass:"swiper-item-bg",attrs:{title:n+1+"."+e[0],rightText:e[1]}})})),t.preset.weights?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.showWeights,title:"词条权重 - 单人"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchWeights.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showWeights,expression:"showWeights"}]},t._l(t.preset.weights,(function(t,e){return i("uni-list-item",{key:t.title,staticClass:"swiper-item-bg",attrs:{title:e+1+"."+t.title,note:t.note,rightText:"伤害提升 "+t.text+" %"}})})),1)],2)],1),t.preset.gResult?i("uni-card",{attrs:{padding:"0",spacing:"0",margin:"20px"}},[i("uni-section",{attrs:{title:"队伍分析",type:"line",rightText:t.preset.gContent}}),i("uni-list",[i("uni-list-item",{attrs:{clickable:!0,showBadge:!0,title:t.preset.gResult.title,rightText:t.preset.gResult.text,note:t.preset.gResult.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:t.preset.gResult.color}},[t._v(t._s(t.preset.gResult.score))])]},proxy:!0}],null,!1,2165399015)}),t._l(t.preset.gResults,(function(e,n){return i("uni-list-item",{key:e.title,attrs:{clickable:!0,title:e[0],rightText:e[1]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup()}}})})),t.preset.gBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.showGBuffs,title:"队伍增益 - "+t.preset.gBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchGBuffs.apply(void 0,arguments)}}}):t._e(),t._l(t.preset.gBuffs,(function(e,n){return i("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showGBuffs,expression:"showGBuffs"}],key:e.title,staticClass:"swiper-item-bg",attrs:{title:n+1+"."+e[0],rightText:e[1]}})})),t.preset.gWeights?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.showGWeights,title:"词条权重 - 队伍"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchGWeights.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showGWeights,expression:"showGWeights"}]},t._l(t.preset.gWeights,(function(t,e){return i("uni-list-item",{key:t.title,staticClass:"swiper-item-bg",attrs:{title:e+1+"."+t.title,note:t.note,rightText:"伤害提升 "+t.text+" %"}})})),1)],2)],1):t._e(),i("v-uni-view",{staticStyle:{height:"60px"}}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"}},[i("uni-goods-nav",{attrs:{options:t.options,fill:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},buttonClick:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick.apply(void 0,arguments)}}})],1)],1)},o=[]},"3cac8":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店铺","uni-goods-nav.options.cart":"购物车","uni-goods-nav.buttonGroup.addToCart":"加入购物车","uni-goods-nav.buttonGroup.buyNow":"立即购买"}')},"408b":function(t,e,i){"use strict";i.r(e);var n=i("9d27"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},5083:function(t,e,i){"use strict";i.r(e);var n=i("a3e7"),a=i("408b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b3ec");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6d06604a",null,!1,n["a"],r);e["default"]=c.exports},"51b7":function(t,e,i){var n=i("e426");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1275007a",n,!0,{sourceMap:!1,shadowMode:!1})},"5dd3":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=(i("fd88"),i("26cb")),r={data:function(){return{Effects:{},isFav:!1,showWeights:!1,showGWeights:!1,showPanels:!1,showBuffs:!1,showGBuffs:!1,options:[{icon:"star",text:"收藏"},{icon:"color",text:" 预设",info:0},{icon:"vip",text:"词条",info:0},{icon:"fire",text:"数据",info:0},{icon:"staff",text:"队伍",info:0}],icons:{renwu:"/static/icons/renwu.png",wuqi:"/static/icons/wuqi.png"}}},computed:(0,a.default)((0,a.default)({},(0,o.mapState)(["version","favObj","preset","character"])),(0,o.mapGetters)(["artifact","artifact2","weapon"])),onShow:function(){uni.setNavigationBarTitle({title:this.preset.name})},onUnload:function(){uni.$off("presetChanged")},onLoad:function(e){t.log(this.preset);var i=this.favObj[this.character.name];i&&(this.isFav=i.isFav),this.setFav()},methods:{switchGWeights:function(t){this.showGWeights=t.value},switchGBuffs:function(t){this.showGBuffs=t.value},switchBuffs:function(t){this.showBuffs=t.value},switchWeights:function(t){this.showWeights=t.value},switchPanels:function(t){this.showPanels=t.value},setFav:function(){this.isFav?(this.options[0].icon="star-filled",this.options[0].text="已收藏"):(this.options[0].icon="star",this.options[0].text="收藏")},onClick:function(t){switch(t.index){case 0:this.isFav?this.$store.commit("removeFavList"):this.$store.commit("addFavList"),this.isFav=!this.isFav,this.setFav();break;case 1:this.toPreset();break;case 2:this.toEquipment();break;case 3:this.toProperty();break;case 4:this.toGroup();break;default:break}},toGroup:function(){uni.navigateTo({url:"/pages/character/config/group"})},toPreset:function(){uni.navigateTo({url:"/pages/character/config/preset"})},toProperty:function(){uni.navigateTo({url:"/pages/character/config/property"})},toEquipment:function(){uni.navigateTo({url:"/pages/character/config/equipment"})}}};e.default=r}).call(this,i("5a52")["default"])},"68e3":function(t,e,i){"use strict";i.r(e);var n=i("36ed"),a=i("9156");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9635");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"1d54cb58",null,!1,n["a"],r);e["default"]=c.exports},"6de8":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"shop","uni-goods-nav.options.cart":"cart","uni-goods-nav.buttonGroup.addToCart":"add to cart","uni-goods-nav.buttonGroup.buyNow":"buy now"}')},8483:function(t,e,i){"use strict";i.r(e);var n=i("d265"),a=i("fc5c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("baad");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6528593e",null,!1,n["a"],r);e["default"]=c.exports},9156:function(t,e,i){"use strict";i.r(e);var n=i("5dd3"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},9635:function(t,e,i){"use strict";var n=i("e38e"),a=i.n(n);a.a},"9d27":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=n},a3ba:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.swiper-item-bg[data-v-1d54cb58]{color:#7f858a;background-color:#f5f5f5}.card-actions[data-v-1d54cb58]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-1d54cb58]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-1d54cb58]{font-size:12px;color:#666;margin-left:5px}.goods-carts[data-v-1d54cb58]{display:flex;flex-direction:column;position:fixed;left:0;right:0;left:var(--window-left);right:var(--window-right);bottom:0;z-index:1000}.box[data-v-1d54cb58]{display:flex}.b-title[data-v-1d54cb58]{flex:1;border:1px solid red;height:80px;display:flex;align-items:center;justify-content:center}',""]),t.exports=e},a3e7:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},o=[]},b3ec:function(t,e,i){"use strict";var n=i("0eae"),a=i.n(n);a.a},baad:function(t,e,i){"use strict";var n=i("51b7"),a=i.n(n);a.a},c363:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},cd8c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:String,default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},d265:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a1b9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:16,type:"arrowright"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},df67:function(t,e,i){"use strict";var n=i("2827"),a=i.n(n);a.a},e38e:function(t,e,i){var n=i("a3ba");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b36a9cf8",n,!0,{sourceMap:!1,shadowMode:!1})},e426:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-6528593e]{background-color:#fff}.uni-section-header[data-v-6528593e]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-6528593e]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-6528593e]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-6528593e]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-6528593e]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-6528593e]{font-size:14px;color:#333}.distraction[data-v-6528593e]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-6528593e]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-6528593e]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-6528593e]{display:flex;align-items:center;padding-left:10px;color:#b1968b}.uni-list-item__extra-text[data-v-6528593e]{font-size:12px;color:#999}',""]),t.exports=e},f27b:function(t,e,i){"use strict";i.r(e);var n=i("19ad"),a=i("17e3");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("df67");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5f40e182",null,!1,n["a"],r);e["default"]=c.exports},f300:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店鋪","uni-goods-nav.options.cart":"購物車","uni-goods-nav.buttonGroup.addToCart":"加入購物車","uni-goods-nav.buttonGroup.buyNow":"立即購買"}')},f601a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.flex[data-v-5f40e182]{display:flex;flex-direction:row}.uni-goods-nav[data-v-5f40e182]{display:flex;flex:1;flex-direction:row}.uni-tab__cart-box[data-v-5f40e182]{flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-5f40e182]{padding:0 5px}.uni-tab__cart-sub-right[data-v-5f40e182]{flex:1}.uni-tab__right[data-v-5f40e182]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-5f40e182]{display:flex;position:relative;justify-content:center;align-items:center;flex-direction:column;margin:0 10px;cursor:pointer}.uni-tab__icon[data-v-5f40e182]{width:18px;height:18px}.image[data-v-5f40e182]{width:18px;height:18px}.uni-tab__text[data-v-5f40e182]{margin-top:3px;font-size:12px;color:#646566}.uni-tab__cart-button-right[data-v-5f40e182]{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;cursor:pointer}.uni-tab__cart-button-right-text[data-v-5f40e182]{font-size:14px;color:#fff}.uni-tab__cart-button-right[data-v-5f40e182]:active{opacity:.7}.uni-tab__dot-box[data-v-5f40e182]{display:flex;flex-direction:column;position:absolute;right:-2px;top:2px;justify-content:center;align-items:center}.uni-tab__dot[data-v-5f40e182]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-5f40e182]{padding:0 4px;border-radius:15px}',""]),t.exports=e},fc5c:function(t,e,i){"use strict";i.r(e);var n=i("cd8c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);