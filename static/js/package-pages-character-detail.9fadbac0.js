(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-detail"],{1195:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("3652")),r=n(i("16af")),o=n(i("e5da")),s={en:a.default,"zh-Hans":r.default,"zh-Hant":o.default};e.default=s},1291:function(t,e,i){"use strict";i.r(e);var n=i("6b9d"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"13b8":function(t,e,i){var n=i("6c48");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("407de53d",n,!0,{sourceMap:!1,shadowMode:!1})},14641:function(t,e,i){"use strict";i.r(e);var n=i("1db4"),a=i("d0c7");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("c326");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"67d93a44",null,!1,n["a"],void 0);e["default"]=s.exports},1667:function(t,e,i){"use strict";var n=i("d544"),a=i.n(n);a.a},"16af":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店铺","uni-goods-nav.options.cart":"购物车","uni-goods-nav.buttonGroup.addToCart":"加入购物车","uni-goods-nav.buttonGroup.buyNow":"立即购买"}')},"1db4":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniCard:i("3d92").default,uniSection:i("89d3").default,uniListItem:i("6e18").default,ysinTable:i("f97b").default,tipsCard:i("1f5d").default,uniGoodsNav:i("a768").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-card",{attrs:{margin:t.margin,padding:"0",spacing:"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSchool()}}},[i("uni-section",{attrs:{title:"流派",type:"line",rightText:t.preset.school?t.preset.school.name:"默认"}}),i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:t.character.avatar,title:t.character.chs,rightText:t.preset.cNote}}),i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.weapon.chs,thumb:t.ImageUrl[t.weapon.name],rightText:t.weaponNote}}),"wu"!=t.artifact.name?i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.artifact.chs,rightText:t.preset.aSets?"2件套":"4件套 "+t.preset.aNote,thumb:t.ImageUrl[t.artifact.name]}}):t._e(),t.preset.aSets&&"wu"!=t.artifact2.name?i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.artifact2.chs,rightText:"2件套",thumb:t.ImageUrl[t.artifact2.name]}}):t._e()],1),i("uni-card",{attrs:{margin:t.margin,padding:"0",spacing:"0"}},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}}},[i("uni-section",{attrs:{type:"line",title:"词条",rightText:t.preset.tResult.content}}),i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.tResult.title,clickable:!0,rightText:t.preset.tResult.rightText,note:t.preset.tResult.note},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showScore,expression:"showScore"}],staticClass:"cu-avatar",style:{backgroundColor:t.preset.tResult.color}},[t._v(t._s(t.preset.tResult.score))])]},proxy:!0}])}),i("uni-list-item",{attrs:{clickable:!0,title:"圣遗物面板",rightText:t.preset.tPanel}})],1),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[7],title:t.aDetailText},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(7)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[7],expression:"switchChecked[7]"}],staticClass:"swiper-item-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}}},[t.preset.aData?i("v-uni-view",[i("ysin-table",{staticStyle:{"background-color":"rgb(250, 250, 250)"},attrs:{data:t.preset.aData}})],1):t._e(),t._l(t.preset.tResults,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:t.title,rightText:t.text}})})),t.preset.tProgress?i("uni-list-item",{attrs:{title:"极限词条",rightText:t.preset.tProgress+"%"}}):t._e(),t.preset.tLost?i("uni-list-item",{attrs:{title:"损失词条",rightText:"双爆 "+t.preset.tLost}}):t._e()],2)],1),t.config.closeDataNotice||t.index?t._e():i("uni-card",[i("v-uni-text",{staticStyle:{color:"red"}},[t._v("提示：点击下方【数据】卡片的任意位置可以对角色配置（武器，圣遗物，命座、等级等）进行修改，保存一次后会关闭该提示。")])],1),i("uni-card",{attrs:{padding:"0",spacing:"0",margin:t.margin}},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}},[i("uni-section",{attrs:{title:"数据",type:"line",rightText:t.preset.wNote+t.preset.note}}),i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.dResult.title,rightText:t.preset.reactionText+t.preset.dResult.text,note:t.preset.dResult.note},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showScore,expression:"showScore"}],staticClass:"cu-avatar",style:{backgroundColor:t.preset.dResult.color}},[t._v(t._s(t.preset.dResult.score))])]},proxy:!0}])}),t._l(t.preset.dResults,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:t[0],rightText:t[1],note:t[2]?t[2]:""}})})),i("uni-list-item",{attrs:{title:"计算面板",rightText:t.preset.dPanel}})],2),t.preset.dBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[0],title:"环境增益 - "+t.preset.dBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(0)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[0],expression:"switchChecked[0]"}],staticClass:"swiper-item-bg"},t._l(t.preset.dBuffs,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:e+1+"、"+t[0],rightText:t[1]}})})),1),t.preset.weights.length>0?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[1],title:"提升建议 - 单人"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[1],expression:"switchChecked[1]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"类型 - 项目（ 变化 ）",rightText:"期望提高"}}),t._l(t.preset.weights,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:t.title,note:t.note,rightText:t.text+" %"}})}))],2)],1),i("v-uni-view",[i("uni-card",{attrs:{padding:"0",spacing:"0",margin:t.margin}},[t.preset.gResult?i("v-uni-view",[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup.apply(void 0,arguments)}}},[i("uni-section",{attrs:{title:"队伍",type:"line",rightText:t.preset.gContent}}),i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.gResult.title,rightText:t.preset.reactionText+t.preset.gResult.text,note:t.preset.gResult.note},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showScore,expression:"showScore"}],staticClass:"cu-avatar",style:{backgroundColor:t.preset.gResult.color}},[t._v(t._s(t.preset.gResult.score))])]},proxy:!0}],null,!1,1383101758)}),t._l(t.preset.gResults,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:t[0],rightText:t[1],note:t[2]?t[2]:""}})})),i("uni-list-item",{attrs:{title:"计算面板",rightText:t.preset.gPanel}})],2),t.preset.gBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[2],title:"队伍增益 - "+t.preset.gBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(2)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[2],expression:"switchChecked[2]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"1、继承单人增益（不叠加）",rightText:t.preset.dBuffs.length+"项"}}),t._l(t.preset.gBuffs,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:e+2+"、"+t[0],rightText:t[1]}})}))],2),t.preset.gOpenBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[4],title:"额外增益 - "+t.preset.gOpenBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(4)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[4],expression:"switchChecked[4]"}],staticClass:"swiper-item-bg"},t._l(t.preset.gOpenBuffs,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:e+1+"、"+t[0],rightText:t[1]}})})),1),t.preset.weights.length>0?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[3],title:"提升建议 - 队伍"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(3)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[3],expression:"switchChecked[3]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"类型 - 项目（ 变化 ）",rightText:"期望提高"}}),t._l(t.preset.gWeights,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:t.title,note:t.note,rightText:t.text+" %"}})}))],2)],1):i("v-uni-view",[i("uni-section",{attrs:{title:"队友",type:"line",rightText:"无"}}),i("uni-list-item",{attrs:{clickable:!0,showArrow:"",title:"选择队友添加团队增益..."},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup()}}})],1)],1)],1),t.preset.calNotes?i("v-uni-view",[i("tips-card",{attrs:{tipKey:"sanbingCal",title:"计算说明 - "+t.preset.calVersion,tipTexts:t.preset.calNotes,isCard:!0}})],1):t._e(),i("v-uni-view",{staticStyle:{height:"100px"}}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"}},[i("uni-goods-nav",{attrs:{options:t.options,fill:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},r=[]},"1f5d":function(t,e,i){"use strict";i.r(e);var n=i("c25d"),a=i("f1e5");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"4bc82ac8",null,!1,n["a"],void 0);e["default"]=s.exports},2416:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.ys-badge[data-v-339a0c78]{right:-8px;top:-8px;position:absolute;display:flex;overflow:hidden;box-sizing:border-box;justify-content:center;flex-direction:row;height:20px;min-width:20px;padding:0 4px;line-height:18px;border-radius:100px;border:1px solid #fff;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;-webkit-font-feature-settings:"tnum";font-feature-settings:"tnum";font-size:11px;z-index:98;cursor:pointer}.ys-badge-color[data-v-339a0c78]{border:none;color:#2979ff;background-color:initial}.ys-table-tr[data-v-339a0c78]{\n\t/* background-color: rgb(250, 250, 250); */display:table-row;transition:all .3s;box-sizing:border-box}p[data-v-339a0c78]:first-child{background-color:#ff0}.ys-border-right[data-v-339a0c78]{border-right:1px #ebeef5 solid}.ys-table-center[data-v-339a0c78]{text-align:center}.ys-table-right[data-v-339a0c78]{text-align:right}.ys-table-td[data-v-339a0c78]{border-right:1px #ebeef5 solid;display:table-cell;\n\t/* padding: 10px 10px 6px 6px; */padding:12px 14px 6px 6px;font-size:14px;\n\t\n/* \tfont-weight: 400; */color:#606266;line-height:30px;box-sizing:border-box\n\t/* width: 100%; */}.ys-border-top[data-v-339a0c78]{border-top:1px #ebeef5 solid}.ys-table[data-v-339a0c78]{position:relative;width:100%;\n\t/* border-radius: 5px; */\n\t/* background-color: #fff; */box-sizing:border-box;display:table;overflow-x:auto\n\n\t/* border-top: 1px #e5e5e5 solid; */\n\t/* \n\tborder-right: none;\n\tborder-bottom: none; */}.ys-table-content[data-v-339a0c78]{display:inline-block;position:relative}',""]),t.exports=e},"2a4d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniBadge:i("8871").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"ys-table"},t._l(t.data,(function(e,n){return i("tr",{key:n,staticClass:"ys-table-tr  "},[i("td",{staticClass:"ys-table-td  ys-table-center ys-border-top "},[i("v-uni-view",{staticClass:"ys-table-content"},[i("uni-badge",{attrs:{absolute:"rightTop",text:e.count,offset:[5,4],customStyle:{background:t.getLevel(e.count)},size:"small",type:"primary"}},[t._v(t._s(e.type))])],1)],1),t._l(e.attrs,(function(e,n){return i("td",{key:n,staticClass:"ys-table-td  ys-table-right ys-border-right ys-border-top",style:"color:"+e[3]+";"},[i("v-uni-view",{staticClass:"ys-table-content"},[i("v-uni-text",[t._v(t._s(e[0]))]),e[4]?i("uni-text",{staticClass:"ys-badge  ys-badge-color"},[i("span",[t._v(t._s(e[4]))])]):t._e()],1)],1)}))],2)})),0)},r=[]},3621:function(t,e,i){"use strict";i.r(e);var n=i("6689"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},3652:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"shop","uni-goods-nav.options.cart":"cart","uni-goods-nav.buttonGroup.addToCart":"add to cart","uni-goods-nav.buttonGroup.buyNow":"buy now"}')},"3d92":function(t,e,i){"use strict";i.r(e);var n=i("6bb3"),a=i("689e");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("fce2");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"44c0d81e",null,!1,n["a"],void 0);e["default"]=s.exports},"405c":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"ysinTable",props:{data:{type:Object}},data:function(){return{}},methods:{getS:function(t,e){var i="arti1"!=t?"ys-border-top":"",n="";return e&&(n=4!=e?"  ys-border-right":""),i+n},getLevel:function(t){return t>=8?"#ff5722":t>=5.5?"rgb(211,159,81)":t>=4?"rgb(177,135,195)":t>=2.5?"rgb(86,155,175)":t>=1.5?"rgb(108,168,139)":t>=0?"rgb(125,127,131)":void 0}}};e.default=n},4759:function(t,e,i){"use strict";var n=i("eb0e"),a=i.n(n);a.a},"526e":function(t,e,i){var n=i("a5c4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("13158881",n,!0,{sourceMap:!1,shadowMode:!1})},6689:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"689e":function(t,e,i){"use strict";i.r(e);var n=i("e7a4"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"6a77":function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("c740"),i("a434"),i("3c65");var a=n(i("5530")),r=i("26cb"),o=i("fedd"),s=n(i("d37b")),c={data:function(){return{ImageUrl:{},index:void 0,margin:"0 14px 14px",switchChecked:[!1,!1,!1,!1,!1,!1,!1,!1],isFav:!1,options:[{icon:"star",text:"收藏",key:"fav"},{key:"compare",icon:"settings",text:"对比",info:0},{key:"preset",icon:"color",text:" 预设",info:0},{icon:"paperplane",text:"分享",info:0,key:"panel"}]}},computed:(0,a.default)((0,a.default)({aDetailText:function(){var t=this.preset.aData?"属性":"词条";return"查看详情 - "+t},weaponNote:function(){var t="";return this.preset.wLevel&&this.preset.wLevel<90&&(t=this.preset.wLevel,this.preset.wAscend?t+="+ / ":t+=" / "),t+(this.preset.wStage+1)+"精 "+this.preset.wNote},showScore:function(){return this.preset.school.score}},(0,r.mapState)(["config","favObj","preset","profileData"])),(0,r.mapGetters)(["artifact","artifact2","weapon","character"])),onLoad:function(e){this.ImageUrl=s.default,this.index=e.index;var i=JSON.parse(JSON.stringify(this.preset));if(t.log(i),o.version!=i.version&&((0,o.startCalculate)(i),this.index?this.$store.commit("changeProfile",{temp:i,index:this.index}):this.$store.dispatch("storePreset",i),this.$store.commit("setPreset",i),t.log("更新！Preset")),this.index)this.options[0].icon="download",this.options[0].text="复制";else{var n=this.favObj[this.character.name];n&&(this.isFav=n.isFav),this.setFavorite()}var a=this.character.chs;this.index&&(a+=" - "+i.uid),uni.setNavigationBarTitle({title:a})},methods:{switchChange:function(t){var e=this.switchChecked[t];this.switchChecked[t]=!e||!e,this.$forceUpdate()},setFavorite:function(){this.isFav?(this.options[0].icon="star-filled",this.options[0].text="已收藏"):(this.options[0].icon="star",this.options[0].text="收藏")},onClick:function(t){switch(t.content.key){case"fav":if(this.index)return void this.saveProfile();this.favObj&&(this.isFav?this.$store.commit("removeFavList"):this.$store.commit("addFavList"),this.isFav=!this.isFav,this.setFavorite());break;case"panel":uni.navigateTo({url:"share/share"});break;case"compare":uni.navigateTo({url:"compare/index"});break;case"preset":this.toPreset();break;default:break}},toGroup:function(){uni.navigateTo({url:"./group"})},toPreset:function(){this.checkUid()&&uni.navigateTo({url:"./preset"})},toSchool:function(){var t,e=null!==(t=this.index)&&void 0!==t?t:199;uni.navigateTo({url:"./book?index="+e})},toProperty:function(){this.checkUid()&&uni.navigateTo({url:"./property?from=detail"})},toEquipment:function(){this.checkUid()&&uni.navigateTo({url:"./equipment?from=detail"})},checkUid:function(){if(!this.index)return!0;var t=this;uni.showModal({title:"提示",content:"无法修改展示柜，需要先保存到本地（收藏）",confirmText:"保存",cancelText:"取消",success:function(e){e.confirm&&t.saveProfileData()}})},saveProfile:function(){var t=this;uni.showModal({title:"提示",content:"确定保存配置到本地（收藏）？",cancelText:"否",confirmText:"是",success:function(e){e.confirm&&t.saveProfileData()}})},saveProfileData:function(){var t=this.preset.cId,e=uni.getStorageSync(t);uni.showToast({title:"保存成功.."});var i=uni.getStorageSync(t+"-presets");if(i[0]){var n=i.findIndex((function(t){return t.id==e.id}));n>-1?i.splice(n,1,e):i.unshift(e)}else i=[e];uni.setStorageSync(t+"-presets",i),this.$store.dispatch("storePreset",this.preset),this.$store.commit("addFavList"),this.options[0].icon="star-filled",this.options[0].text="已收藏",uni.setNavigationBarTitle({title:this.character.chs}),this.index=void 0}}};e.default=c}).call(this,i("5a52")["default"])},"6b9d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},scroll:function(t){this.$emit("scroll",t)}}};e.default=n},"6bb3":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},a=[]},"6c29":function(t,e,i){var n=i("a1ae");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("37f0ae79",n,!0,{sourceMap:!1,shadowMode:!1})},"6c48":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bottom-view[data-v-67d93a44]{height:env(safe-area-inset-bottom)}.goods-carts[data-v-67d93a44]{display:flex;flex-direction:column;position:fixed;left:0;right:0;left:var(--window-left);right:var(--window-right);bottom:0;z-index:1000}',""]),t.exports=e},"7f70":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("37dc"),r=n(i("1195")),o=(0,a.initVueI18n)(r.default),s=o.t,c={name:"UniGoodsNav",emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:s("uni-goods-nav.options.shop")},{icon:"cart",text:s("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:s("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"linear-gradient(90deg, #FFCD1E, #FF8A18)",color:"#fff"},{text:s("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"linear-gradient(90deg, #FE6035, #EF1224)",color:"#fff"}]}},fill:{type:Boolean,default:!1},stat:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&this.stat&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=c},"89d3":function(t,e,i){"use strict";i.r(e);var n=i("bd7d"),a=i("3621");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("e36a");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"42ced052",null,!1,n["a"],void 0);e["default"]=s.exports},"8bb45":function(t,e,i){"use strict";i.r(e);var n=i("405c"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},9293:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},a=[]},a1ae:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},a55d:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("fcef").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-goods-nav"},[i("v-uni-view",{staticClass:"uni-tab__seat"}),i("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(n,e)}}},[i("v-uni-view",{staticClass:"uni-tab__icon"},[i("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),i("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),i("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?i("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-right",style:{background:e.backgroundColor,color:e.color},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buttonClick(n,e)}}},[i("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},r=[]},a5c4:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-44c0d81e]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-44c0d81e]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-44c0d81e]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-44c0d81e]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-44c0d81e]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-44c0d81e]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-44c0d81e]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-44c0d81e]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-44c0d81e]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-44c0d81e]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-44c0d81e]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-44c0d81e]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-44c0d81e]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-44c0d81e]{font-size:12px}.uni-card--border[data-v-44c0d81e]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-44c0d81e]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-44c0d81e]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-44c0d81e]:after{border-radius:0}.uni-ellipsis[data-v-44c0d81e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},a768:function(t,e,i){"use strict";i.r(e);var n=i("a55d"),a=i("cd18");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("1667");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"3d57e284",null,!1,n["a"],void 0);e["default"]=s.exports},add1:function(t,e,i){"use strict";i.r(e);var n=i("9293"),a=i("1291");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("ffd4");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"6fce09b0",null,!1,n["a"],void 0);e["default"]=s.exports},baf3:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.flex[data-v-3d57e284]{display:flex;flex-direction:row}.uni-goods-nav[data-v-3d57e284]{display:flex;flex:1;flex-direction:row}.uni-tab__cart-box[data-v-3d57e284]{flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-3d57e284]{padding:0 5px}.uni-tab__cart-sub-right[data-v-3d57e284]{flex:1}.uni-tab__right[data-v-3d57e284]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-3d57e284]{display:flex;position:relative;justify-content:center;align-items:center;flex-direction:column;margin:0 10px;cursor:pointer}.uni-tab__icon[data-v-3d57e284]{width:18px;height:18px}.image[data-v-3d57e284]{width:18px;height:18px}.uni-tab__text[data-v-3d57e284]{margin-top:3px;font-size:12px;color:#646566}.uni-tab__cart-button-right[data-v-3d57e284]{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;cursor:pointer}.uni-tab__cart-button-right-text[data-v-3d57e284]{font-size:14px;color:#fff}.uni-tab__cart-button-right[data-v-3d57e284]:active{opacity:.7}.uni-tab__dot-box[data-v-3d57e284]{display:flex;flex-direction:column;position:absolute;right:-2px;top:2px;justify-content:center;align-items:center}.uni-tab__dot[data-v-3d57e284]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-3d57e284]{padding:0 4px;border-radius:15px}',""]),t.exports=e},bd7d:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("fcef").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},r=[]},c25d:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniCard:i("3d92").default,uniSection:i("89d3").default,uniList:i("add1").default,uniListItem:i("6e18").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",[t.isCard?i("uni-card",{attrs:{margin:"16px",padding:"0",spacing:"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close()}}},[i("uni-section",{attrs:{title:t.title,rightText:t.rightText,showIcon:!0,icon:"closeempty"}}),i("uni-list",t._l(t.tipTexts,(function(t,e){return i("uni-list-item",{key:e,staticClass:"item-space",attrs:{title:e+1+"、"+t}})})),1)],1):i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close()}}},[i("uni-section",{attrs:{title:t.title,rightText:t.rightText,showIcon:!0,icon:"closeempty"}}),i("uni-list",t._l(t.tipTexts,(function(t,e){return i("uni-list-item",{key:e,staticClass:"item-space",attrs:{title:e+1+"、"+t}})})),1)],1)],1):t._e()},r=[]},c326:function(t,e,i){"use strict";var n=i("13b8"),a=i.n(n);a.a},cd18:function(t,e,i){"use strict";i.r(e);var n=i("7f70"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},d0b3:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tips-card",props:{tipKey:{type:String,default:"one",required:!0},isCard:{type:[Boolean,String],default:!1},title:{type:String,default:"说明"},rightText:{type:String,default:""},tipTexts:{}},data:function(){return{show:!0}},created:function(){this.$store.state.config[this.tipKey]&&(this.show=!1)},methods:{close:function(){var t=this;uni.showModal({title:"提示",content:"是否移除该提示？（没有更新不会再出现）",cancelText:"否",confirmText:"是",success:function(e){e.confirm&&(t.$store.commit("setConfigClose",t.tipKey),t.show=!1)}})}}};e.default=n},d0c7:function(t,e,i){"use strict";i.r(e);var n=i("6a77"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},d544:function(t,e,i){var n=i("baf3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b7e9fa90",n,!0,{sourceMap:!1,shadowMode:!1})},d69f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},e36a:function(t,e,i){"use strict";var n=i("fa22"),a=i.n(n);a.a},e5da:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店鋪","uni-goods-nav.options.cart":"購物車","uni-goods-nav.buttonGroup.addToCart":"加入購物車","uni-goods-nav.buttonGroup.buyNow":"立即購買"}')},e7a4:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=n},eb0e:function(t,e,i){var n=i("2416");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("225785ca",n,!0,{sourceMap:!1,shadowMode:!1})},f1e5:function(t,e,i){"use strict";i.r(e);var n=i("d0b3"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},f97b:function(t,e,i){"use strict";i.r(e);var n=i("2a4d"),a=i("8bb45");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("4759");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"339a0c78",null,!1,n["a"],void 0);e["default"]=s.exports},fa22:function(t,e,i){var n=i("d69f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2403413f",n,!0,{sourceMap:!1,shadowMode:!1})},fce2:function(t,e,i){"use strict";var n=i("526e"),a=i.n(n);a.a},ffd4:function(t,e,i){"use strict";var n=i("6c29"),a=i.n(n);a.a}}]);