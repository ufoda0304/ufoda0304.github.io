(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-detail"],{"0337":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("37dc"),o=a(i("2273")),r=(0,n.initVueI18n)(o.default),s=r.t,c={name:"UniGoodsNav",emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:s("uni-goods-nav.options.shop")},{icon:"cart",text:s("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:s("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"linear-gradient(90deg, #FFCD1E, #FF8A18)",color:"#fff"},{text:s("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"linear-gradient(90deg, #FE6035, #EF1224)",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=c},"0eae":function(t,e,i){var a=i("c363");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0a61cfa4",a,!0,{sourceMap:!1,shadowMode:!1})},"17e3":function(t,e,i){"use strict";i.r(e);var a=i("0337"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"19ad":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniIcons:i("a1b9").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-goods-nav"},[i("v-uni-view",{staticClass:"uni-tab__seat"}),i("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,a){return i("v-uni-view",{key:a,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(a,e)}}},[i("v-uni-view",{staticClass:"uni-tab__icon"},[i("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),i("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),i("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?i("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,a){return i("v-uni-view",{key:a,staticClass:"flex uni-tab__cart-button-right",style:{background:e.backgroundColor,color:e.color},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buttonClick(a,e)}}},[i("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},o=[]},2273:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("6de8")),o=a(i("3cac8")),r=a(i("f300")),s={en:n.default,"zh-Hans":o.default,"zh-Hant":r.default};e.default=s},2827:function(t,e,i){var a=i("f601a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("09d94420",a,!0,{sourceMap:!1,shadowMode:!1})},3373:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.card-actions[data-v-52bd4c94]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-52bd4c94]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-52bd4c94]{font-size:12px;color:#666;margin-left:5px}.goods-carts[data-v-52bd4c94]{display:flex;flex-direction:column;position:fixed;left:0;right:0;left:var(--window-left);right:var(--window-right);bottom:0;z-index:1000}.box[data-v-52bd4c94]{display:flex}.b-title[data-v-52bd4c94]{flex:1;border:1px solid red;height:80px;display:flex;align-items:center;justify-content:center}',""]),t.exports=e},"3ba3":function(t,e,i){"use strict";var a=i("fef2"),n=i.n(a);n.a},"3cac8":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店铺","uni-goods-nav.options.cart":"购物车","uni-goods-nav.buttonGroup.addToCart":"加入购物车","uni-goods-nav.buttonGroup.buyNow":"立即购买"}')},"408b":function(t,e,i){"use strict";i.r(e);var a=i("9d27"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},5083:function(t,e,i){"use strict";i.r(e);var a=i("a3e7"),n=i("408b");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("b3ec");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"6d06604a",null,!1,a["a"],r);e["default"]=c.exports},"5dd3":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("b85c")),o=a(i("5530")),r=i("26cb"),s={data:function(){return{isFav:!1,showWeights:!1,showPanels:!1,showBuffs:!1,options:[{icon:"star",text:"收藏"},{icon:"staff",text:" 预设",info:0},{icon:"vip",text:"词条",info:0},{icon:"fire",text:"数据",info:0},{icon:"color",text:"计算",info:0}],icons:{renwu:"/static/icons/renwu.png",wuqi:"/static/icons/wuqi.png"}}},computed:(0,o.default)((0,o.default)({characterText:function(){var t,e=this.preset.cStage+"命 / 技能",i="",a=(0,n.default)(this.preset.cSkills);try{for(a.s();!(t=a.n()).done;){var o=t.value;i+=o+1}}catch(r){a.e(r)}finally{a.f()}return e+i}},(0,r.mapState)(["favObj","preset","character"])),(0,r.mapGetters)(["artifact","artifact2","weapon"])),onShow:function(){uni.setNavigationBarTitle({title:this.preset.reactionText+this.preset.name})},onUnload:function(){uni.$off("presetChanged")},onLoad:function(){var t=this,e=t.favObj[t.character.name];e&&(t.isFav=e.isFav),t.setFav()},methods:{switchBuffs:function(t){this.showBuffs=t.value},switchWeights:function(t){this.showWeights=t.value},switchPanels:function(t){this.showPanels=t.value},setFav:function(){this.isFav?(this.options[0].icon="star-filled",this.options[0].text="已收藏"):(this.options[0].icon="star",this.options[0].text="收藏")},onClick:function(t){switch(t.index){case 0:this.isFav?this.$store.commit("removeFavList"):this.$store.commit("addFavList"),this.isFav=!this.isFav,this.setFav();break;case 1:this.toPreset();break;case 2:this.toEquipment();break;case 3:this.toProperty();break;case 4:uni.showToast({title:"功能开发中...",icon:"none"});break;default:break}},toPreset:function(){uni.navigateTo({url:"/pages/character/config/preset"})},toProperty:function(){uni.navigateTo({url:"/pages/character/config/property"})},toEquipment:function(){uni.navigateTo({url:"/pages/character/config/equipment"})}}};e.default=s},"68e3":function(t,e,i){"use strict";i.r(e);var a=i("f62d"),n=i("9156");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("3ba3");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"52bd4c94",null,!1,a["a"],r);e["default"]=c.exports},"6de8":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"shop","uni-goods-nav.options.cart":"cart","uni-goods-nav.buttonGroup.addToCart":"add to cart","uni-goods-nav.buttonGroup.buyNow":"buy now"}')},9156:function(t,e,i){"use strict";i.r(e);var a=i("5dd3"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9d27":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=a},a3e7:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},o=[]},b3ec:function(t,e,i){"use strict";var a=i("0eae"),n=i.n(a);n.a},c363:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},df67:function(t,e,i){"use strict";var a=i("2827"),n=i.n(a);n.a},f27b:function(t,e,i){"use strict";i.r(e);var a=i("19ad"),n=i("17e3");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("df67");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5f40e182",null,!1,a["a"],r);e["default"]=c.exports},f300:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店鋪","uni-goods-nav.options.cart":"購物車","uni-goods-nav.buttonGroup.addToCart":"加入購物車","uni-goods-nav.buttonGroup.buyNow":"立即購買"}')},f601a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.flex[data-v-5f40e182]{display:flex;flex-direction:row}.uni-goods-nav[data-v-5f40e182]{display:flex;flex:1;flex-direction:row}.uni-tab__cart-box[data-v-5f40e182]{flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-5f40e182]{padding:0 5px}.uni-tab__cart-sub-right[data-v-5f40e182]{flex:1}.uni-tab__right[data-v-5f40e182]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-5f40e182]{display:flex;position:relative;justify-content:center;align-items:center;flex-direction:column;margin:0 10px;cursor:pointer}.uni-tab__icon[data-v-5f40e182]{width:18px;height:18px}.image[data-v-5f40e182]{width:18px;height:18px}.uni-tab__text[data-v-5f40e182]{margin-top:3px;font-size:12px;color:#646566}.uni-tab__cart-button-right[data-v-5f40e182]{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;cursor:pointer}.uni-tab__cart-button-right-text[data-v-5f40e182]{font-size:14px;color:#fff}.uni-tab__cart-button-right[data-v-5f40e182]:active{opacity:.7}.uni-tab__dot-box[data-v-5f40e182]{display:flex;flex-direction:column;position:absolute;right:-2px;top:2px;justify-content:center;align-items:center}.uni-tab__dot[data-v-5f40e182]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-5f40e182]{padding:0 4px;border-radius:15px}',""]),t.exports=e},f62d:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniCard:i("5083").default,uniList:i("b532").default,uniListItem:i("6fa1").default,uniSection:i("8483").default,uniGoodsNav:i("f27b").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-card",{attrs:{margin:"20px",padding:"0",spacing:"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}},[i("uni-list",[i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:t.character.avatar,title:t.character.chs,rightText:t.preset.cNote}}),t.weapon?i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.weapon.chs,thumb:t.weapon.url,rightText:t.preset.wStage+1+"精"}}):t._e(),t.artifact?i("v-uni-view",[i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.artifact.chs,rightText:t.preset.aSets?"2件套":"4件套",thumb:t.artifact.url}}),t.preset.aSets?i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,title:t.artifact2.chs,rightText:"2件套",thumb:t.artifact2.url}}):t._e()],1):t._e()],1)],1),t.preset.tResult?i("uni-card",{attrs:{margin:"20px",padding:"0",spacing:"0"}},[i("uni-section",{attrs:{type:"line",title:"词条分析",rightText:t.preset.tResult.content}}),i("uni-list",[i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.tResult.title,clickable:!0,rightText:t.preset.tResult.text},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:t.preset.tResult.color}},[t._v(t._s(t.preset.tResult.score))])]},proxy:!0}],null,!1,1554086503)}),t._l(t.preset.tResults,(function(e,a){return i("uni-list-item",{key:a,attrs:{clickable:!0,title:e.title,rightText:e.text},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}}})})),t.preset.weights?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.showWeights,title:"显示各单位词条权重 "},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchWeights.apply(void 0,arguments)}}}):t._e(),t._l(t.preset.weights,(function(e,a){return i("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showWeights,expression:"showWeights"}],key:a+"2",attrs:{title:"- "+e.title,rightText:e.text+"%"}})}))],2)],1):t._e(),i("uni-card",{attrs:{padding:"0",spacing:"0",margin:"20px"}},[i("uni-section",{attrs:{title:"数据分析",type:"line",rightText:t.preset.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}}),i("uni-list",[i("uni-list-item",{attrs:{clickable:!0,showBadge:!0,title:t.preset.dResult.title,rightText:t.preset.dResult.text,note:t.preset.dResult.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:t.preset.dResult.color}},[t._v(t._s(t.preset.dResult.score))])]},proxy:!0}])}),t._l(t.preset.dResults,(function(e,a){return i("uni-list-item",{key:a,attrs:{clickable:!0,title:e[0],rightText:e[1]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}})})),t.preset.dBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.showBuffs,title:"显示环境与增益 ("+t.preset.dBuffs.length+"项)"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchBuffs.apply(void 0,arguments)}}}):t._e(),t._l(t.preset.dBuffs,(function(e,a){return i("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showBuffs,expression:"showBuffs"}],key:a+"1",attrs:{title:"- "+e[0],rightText:e[1]}})}))],2)],1),i("v-uni-view",{staticStyle:{height:"60px"}}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"}},[i("uni-goods-nav",{attrs:{options:t.options,fill:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},buttonClick:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick.apply(void 0,arguments)}}})],1)],1)},o=[]},fef2:function(t,e,i){var a=i("3373");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c7c1720e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);