(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"0eae":function(t,a,e){var n=e("c363");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("0a61cfa4",n,!0,{sourceMap:!1,shadowMode:!1})},"1a37":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={uniCard:e("5083").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-card",[t._v("任何建议或者反馈Bug: 微信: badl2019 / QQ: 313306199 / NGA回帖")]),e("uni-card",{attrs:{padding:"20px"}},[e("v-uni-view",{staticStyle:{"margin-bottom":"20px"}},[e("h2",[t._v("当前进度:")])]),e("v-uni-text",[t._v("- 显示命座的提升幅度? 显示武器的强度对比?\n\t\t\t- 添加武器的选项(特别是赌狗乐章)?\n\t\t\t- 完善阵容Dps模拟，添加常用轴。")])],1),e("uni-card",{attrs:{padding:"20px"}},[e("v-uni-view",{staticStyle:{"margin-bottom":"20px"}},[e("h2",[t._v("更新日志:")])]),e("v-uni-text",[t._v("2022年03月1日\n\t\t\t- 添加大部分触发类武器的可选项\n\t\t\t- 莫娜Q加伤问题\n\t\t\t- 调整css,让title优先省略,text完整显示\n\t\t\t- 修复莫娜Q不给岩风角色加伤问题\n\t\t\t- 调整了雷国23秒轴,行秋Q不在吃班尼特Q\n\t\t\t- 修复了衔珠海皇无法保存的问题\n\t\t\t- 调整了万叶吃自己的二命效果\n\t\t\t- 修复了万叶吃砂糖精通的问题")])],1),e("v-uni-button",{staticStyle:{margin:"30px 15px","background-color":"#f6f2ee"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.deleteLoacl.apply(void 0,arguments)}}},[t._v("清空本地缓存")])],1)},r=[]},"22fe":function(t,a,e){"use strict";e.r(a);var n=e("1a37"),i=e("332d4");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);var d,c=e("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"62a7633c",null,!1,n["a"],d);a["default"]=u.exports},"2c31":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{}},methods:{test:function(){uni.navigateTo({url:"/pages/team/team"})},clickBannerItem:function(){uni.clearStorage(),uni.showToast({title:"缓存已经清除",icon:"none"}),uni.$emit("initData")},deleteLoacl:function(){var t=this;uni.showModal({title:"提示",content:"确定要清空吗?",success:function(a){a.confirm?t.clickBannerItem():a.cancel}})}}};a.default=n},"332d4":function(t,a,e){"use strict";e.r(a);var n=e("2c31"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"408b":function(t,a,e){"use strict";e.r(a);var n=e("9d27"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},5083:function(t,a,e){"use strict";e.r(a);var n=e("a3e7"),i=e("408b");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("b3ec");var d,c=e("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"6d06604a",null,!1,n["a"],d);a["default"]=u.exports},"9d27":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};a.default=n},a3e7:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?e("v-uni-view",{staticClass:"uni-card__cover"},[e("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?e("v-uni-view",{staticClass:"uni-card__header"},[e("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("title")}}},[t.thumbnail?e("v-uni-view",{staticClass:"uni-card__header-avatar"},[e("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),e("v-uni-view",{staticClass:"uni-card__header-content"},[e("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?e("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),e("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("extra")}}},[e("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),e("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("content")}}},[t._t("default")],2),e("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},b3ec:function(t,a,e){"use strict";var n=e("0eae"),i=e.n(n);i.a},c363:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=a}}]);