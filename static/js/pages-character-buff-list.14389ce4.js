(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-buff-list"],{"06c1":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("b993").default,uniPopupDialog:i("b4f6").default,uniCard:i("3d92").default,uniSection:i("89d3").default,uniList:i("add1").default,uniListItem:i("6e18").default,uniIcons:i("fcef").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[i("uni-popup-dialog",{attrs:{mode:"input",title:"输入增益名称",placeholder:"..."},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.doNext.apply(void 0,arguments)}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._l(t.buffs,(function(e,n){return i("uni-card",{key:n,attrs:{margin:"16px",padding:"0",spacing:"0"}},[i("uni-section",{attrs:{title:e.title}}),i("uni-list",t._l(e.data,(function(e,a){return i("uni-list-item",{key:a,attrs:{clickable:!0,title:e.title,rightText:e.text+e.text2},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEdit(n)}}})})),1),i("v-uni-view",{staticClass:"card-actions no-border"},[i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(n,!0)}}},[i("uni-icons",{attrs:{type:"folder-add",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("复制")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(n,!1)}}},[i("uni-icons",{attrs:{type:"compose",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("重命名")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveTop(n)}}},[i("uni-icons",{attrs:{type:"arrow-up",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("置顶")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove(n)}}},[i("uni-icons",{attrs:{type:"trash",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("删除")])],1)],1)],1)}))],2)},o=[]},"09aa":function(t,e,i){"use strict";i.r(e);var n=i("b80c"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},1205:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-e07ee5ea]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-e07ee5ea]{position:relative;z-index:-1}.uni-list--border-top[data-v-e07ee5ea]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-e07ee5ea]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},1291:function(t,e,i){"use strict";i.r(e);var n=i("6b9d"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"196e":function(t,e,i){"use strict";var n=i("7c3d"),a=i.n(n);a.a},"2ff3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".card-actions[data-v-326936dd]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:36px;border-top:1px #eee solid}.card-actions-item[data-v-326936dd]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-326936dd]{font-size:12px;color:#666;margin-left:5px}",""]),t.exports=e},"6b9d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=n},"7c3d":function(t,e,i){var n=i("2ff3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("05a4f33b",n,!0,{sourceMap:!1,shadowMode:!1})},"84b3":function(t,e,i){var n=i("1205");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("9ed59e78",n,!0,{sourceMap:!1,shadowMode:!1})},add1:function(t,e,i){"use strict";i.r(e);var n=i("bb28"),a=i("1291");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("c286");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"e07ee5ea",null,!1,n["a"],void 0);e["default"]=r.exports},b80c:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("a434");var a=n(i("5530")),o=i("26cb"),s={data:function(){return{index:0,title:"",isCopy:!1,allItems:[]}},onUnload:function(){},computed:(0,a.default)({},(0,o.mapState)(["buffs"])),onLoad:function(){this.allItems=JSON.parse(JSON.stringify(this.buffs))},methods:{toEdit:function(t){uni.navigateTo({url:"/pages/character/buff/edit?index="+t})},moveTop:function(t){if(t>0){var e=this.allItems[t];this.allItems.splice(t,1),this.allItems.unshift(e);var i=JSON.parse(JSON.stringify(this.allItems));this.$store.commit("setBuffs",i)}},openDialog:function(t,e){this.index=t,this.isCopy=e,this.title=this.allItems[t].title,e&&(this.title+="副本"),this.$refs.inputDialog.open()},doNext:function(t){t.length>20?uni.showToast({title:"不能超过20个字符!",duration:2e3}):t?this.isCopy?this.copy(t):this.rename(t):uni.showToast({title:"名称不能为空!",duration:2e3})},copy:function(t){if(this.allItems.length>9)uni.showToast({title:"自定义不能超过9个"});else{var e=(0,a.default)({},this.allItems[this.index]);e.title=t,e.id=Date.now(),this.allItems.splice(this.index,0,e);var i=JSON.parse(JSON.stringify(this.allItems));this.$store.commit("setBuffs",i)}},rename:function(t){var e=this.allItems[this.index];e.title=t;var i=JSON.parse(JSON.stringify(this.allItems));this.$store.commit("setBuffs",i)},remove:function(t){var e=this;this.allItems.length<2?uni.showToast({title:"无法删除",duration:2e3}):uni.showModal({title:"提示",content:"确定要删除?",success:function(i){if(i.confirm){e.allItems.splice(t,1);var n=JSON.parse(JSON.stringify(e.allItems));e.$store.commit("setBuffs",n)}}})}}};e.default=s},bb28:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},a=[]},c286:function(t,e,i){"use strict";var n=i("84b3"),a=i.n(n);a.a},d49f:function(t,e,i){"use strict";i.r(e);var n=i("06c1"),a=i("09aa");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("196e");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"326936dd",null,!1,n["a"],void 0);e["default"]=r.exports}}]);