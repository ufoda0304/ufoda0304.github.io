(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"09d5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-cefb4a64]{padding:15px}.text[data-v-cefb4a64]{font-size:14px;color:#666;line-height:20px}.title-text[data-v-cefb4a64]{font-weight:700;margin-top:14px}.title-card[data-v-cefb4a64]{margin-bottom:20px;font-weight:700;font-size:18px}",""]),t.exports=e},"1fa2":function(t,e,i){"use strict";i.r(e);var n=i("76b7"),a=i("a345");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e9e2");var c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"cefb4a64",null,!1,n["a"],void 0);e["default"]=l.exports},2542:function(t,e,i){"use strict";(function(t,n){i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("c7eb")),c=a(i("1da1")),l={data:function(){return{updateTime:0,time:0,urls:["https://mp-aed33a24-9001-489d-9fa7-a38945cb0da2.cdn.bspapp.com/cloudstorage/f21767cd-d50a-4b7c-aa20-f95d0221bd0d.jpg","https://mp-aed33a24-9001-489d-9fa7-a38945cb0da2.cdn.bspapp.com/cloudstorage/045f7698-be0a-46bb-ace6-7de033b3fc7a.png"],accordionVal2:"-1",accordionVal:"-1",keyValue:"",downloadText:"下载云端数据",backup:null,login:{key:null,keys:["",""],date:"",limit:"",mola:0}}},onReady:function(){},onUnload:function(){uni.$off("updateLogin")},onLoad:function(){var t=uni.getStorageSync("ysin_updateTime");this.updateTime=null!==t&&void 0!==t?t:0;var e=this;uni.$on("updateLogin",(function(){e.updateLogin()})),e.updateLogin()},methods:{getMola:function(){var e=this;return(0,c.default)((0,o.default)().mark((function i(){var a,c,l,s;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a=Date.now()-e.updateTime,!(a>6048e5)){i.next=19;break}if(!e.login.key){i.next=19;break}return c={id:e.login.key},l=t.importObject("adLog",{customUI:!0}),i.prev=5,i.next=8,l.count(c);case 8:s=i.sent,e.login.mola=s.total,uni.setStorageSync("ysin_login",e.login),n.log(s),e.updateTime=Date.now(),uni.setStorageSync("ysin_updateTime",e.updateTime),i.next=19;break;case 16:i.prev=16,i.t0=i["catch"](5),n.log(i.t0);case 19:case"end":return i.stop()}}),i,null,[[5,16]])})))()},updateLogin:function(){var t=uni.getStorageSync("ysin_login");t&&(t.mola||(t.mola=0),this.login=t)},showImage:function(t){uni.previewImage({urls:[this.urls[t]],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){n.log("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片")},fail:function(t){n.log(t.errMsg)}}})},copyKey:function(){this.login.key?uni.setClipboardData({data:this.login.key,success:function(){uni.showToast({title:"复制成功"})},fail:function(t){n.log(t)}}):uni.showToast({title:"没有连接数据库"})},goLogin:function(t){uni.navigateTo({url:"/pages/my/login"})},clickBannerItem:function(){uni.clearStorage(),uni.showToast({title:"缓存已经清除",icon:"none"}),this.login={},uni.$emit("initData")},toChangelog:function(){uni.navigateTo({url:"/pages/index/changelog"})},deleteLoacl:function(){var t=this;uni.showModal({title:"提示",content:"确定要清空吗?",success:function(e){e.confirm?t.clickBannerItem():e.cancel}})},showAd:function(){if(this.isLoading)return this.$refs.adRewardedVideo.load(),void uni.showToast({icon:"none",title:"加载中.."});var t=this;uni.showModal({title:"提示",content:"将会播放一段20-30秒的视频广告，确定要看吗？",confirmText:"开看",cancelText:"算了",success:function(e){e.confirm&&(t.time=Date.now(),t.$refs.adRewardedVideo.show())}})},onadload:function(t){this.isLoading=!1},onadclose:function(t){var e=this;return(0,c.default)((0,o.default)().mark((function i(){var a,c,l;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a=t.detail,c=Date.now(),l=c-e.time,!a||!a.isEnded){i.next=11;break}return uni.showModal({title:"提示",content:"非常感谢你的支持，收益将优先支付ysin服务器费用。",confirmText:"不客气",showCancel:!1,success:function(t){t.cancel&&uni.navigateTo({})}}),i.next=7,e.createAdLog(1,l);case 7:return i.next=9,e.getMola();case 9:i.next=14;break;case 11:return i.next=13,e.createAdLog(0,l);case 13:n.log("onClose "+a.isEnded);case 14:case"end":return i.stop()}}),i)})))()},onaderror:function(t){n.log(t.detail)},createAdLog:function(e,i){var a=this;return(0,c.default)((0,o.default)().mark((function c(){var l,s,u,r,d;return(0,o.default)().wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(a.login.key){o.next=14;break}return l=t.importObject("backup",{customUI:!0}),o.prev=2,s={data:{},keys:["",""]},o.next=6,l.createData(s);case 6:u=o.sent,a.login.key=u.id,a.login.date=Date.now(),o.next=14;break;case 11:o.prev=11,o.t0=o["catch"](2),n.log(o.t0);case 14:return r={id:a.login.key,type:e,time:i,from:"my"},d=t.importObject("adLog",{customUI:!0}),o.prev=16,o.next=19,d.create(r);case 19:1==e&&(a.login.mola+=1),o.next=25;break;case 22:o.prev=22,o.t1=o["catch"](16),n.log(o.t1);case 25:uni.setStorageSync("ysin_login",a.login);case 26:case"end":return o.stop()}}),c,null,[[2,11],[16,22]])})))()}}};e.default=l}).call(this,i("a9ff")["default"],i("5a52")["default"])},"38b8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},"3c19":function(t,e,i){var n=i("09d5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f065").default;a("1d5601e9",n,!0,{sourceMap:!1,shadowMode:!1})},6293:function(t,e,i){"use strict";i.r(e);var n=i("6be9"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"6be9":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},scroll:function(t){this.$emit("scroll",t)}}};e.default=n},"76b7":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniCard:i("2dea").default,uniSection:i("60df").default,uniList:i("8179").default,uniListItem:i("8c8a").default,uniLink:i("864a").default,uniCollapse:i("6312").default,uniCollapseItem:i("4a78").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-card",{attrs:{margin:"0 15px 15px",spacing:"0",padding:"0"}},[i("uni-section",{attrs:{title:"支持作者",type:"line"}}),i("uni-list",{attrs:{border:!1}},[i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:"/static/we.png",clickable:!0,title:"微信",showArrow:!0,rightText:"赞赏码"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showImage(0)}}}),i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:"/static/ali.png",clickable:!0,title:"支付宝",showArrow:!0,rightText:"二维码"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showImage(1)}}})],1)],1),i("uni-card",{attrs:{margin:"15px",spacing:"0",padding:"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLogin.apply(void 0,arguments)}}},[i("uni-section",{attrs:{title:"数据备份",type:"line"}}),i("uni-list",[t.login.key?i("uni-list-item",{staticClass:"item-space",attrs:{title:"密钥："+t.login.key,note:"Key："+t.login.keys[0],"show-arrow":!0}}):i("uni-list-item",{attrs:{title:"上传本地缓存数据进行备份",note:"避免本地缓存因意外丢失","show-arrow":!0}})],1)],1),i("uni-card",{attrs:{spacing:"0",padding:"0"}},[i("uni-section",{attrs:{title:"意见/反馈",type:"line"}}),i("v-uni-view",{staticStyle:{padding:"20px"}},[i("v-uni-view",{staticStyle:{color:"#303133"}},[t._v("1、微信：badl2019 或 QQ：313306199")]),i("v-uni-view",[t._v("处理优先级较高，一般都在（不一定能及时回复）")]),i("v-uni-view",{staticStyle:{color:"#303133","margin-top":"10px"}},[t._v("2、在帖子中回复："),i("uni-link",{attrs:{color:"#007AFF",href:"https://nga.178.com/read.php?tid=30528221",text:"地址（NGA）"}})],1),i("v-uni-view",[t._v("不急的问题可以回帖，定期会回复（反馈别开新帖，可能看不到）")])],1)],1),i("uni-card",{attrs:{padding:"0",spacing:"0"}},[i("uni-section",{attrs:{title:"核心算法",type:"line"}}),i("uni-collapse",{attrs:{accordion:!0},model:{value:t.accordionVal2,callback:function(e){t.accordionVal2=e},expression:"accordionVal2"}},[i("uni-collapse-item",{attrs:{title:"1. 词条分 "}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("[ 期望值A ] = [ 目前圣遗物 ] + [ 目前配置 ]")]),i("v-uni-view",[t._v("[ 期望值B ] = [ 默认圣遗物 ] + [ 目前配置 ]")]),i("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("圣遗物评分 = A / B * 100")]),i("v-uni-view",[t._v("[ 默认圣遗物 ] 的标准为18双爆 + 4主词条 + 3词条，其他有效继续 +3,比如：")]),i("v-uni-view",[t._v("2有效词条 9 + 4 = 13条（如心海）")]),i("v-uni-view",[t._v("3有效词条 18 + 4 = 22条（大部分角色）")]),i("v-uni-view",[t._v("4有效词条 18 + 4 + 3 = 25条（如雷电将军）")]),i("v-uni-view",[t._v("5有效词条 18 + 4 + 3 + 3 = 28条 （如香菱、胡桃）")]),i("v-uni-view",[t._v("说明：词条分体现的是当前比默认圣遗物强多少（伤害），如果你在100左右，说明圣遗物已经是小毕业的范畴。 但要注意两点\n\t\t\t\t\t\t\t1、和单人期望直接挂钩，由于词条权重的问题，可能会出现词条数挺高，但词条分低的情况。 2、和主属性无关，穿戴不合适的主属性/套装不会影响词条分，但会影响数据分。")])],1)],1),i("uni-collapse-item",{attrs:{title:"2. 数据分 "}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("[ 期望值A ] = [ 目前圣遗物 ] + [ 目前配置 ]")]),i("v-uni-view",[t._v("[ 期望值C ] = [ 默认圣遗物 ] + [ 默认配置 ]")]),i("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("数据评分 = A / C * 100")]),i("v-uni-view",[t._v("说明：[期望值C] 通常5星角色+专武，技能999，22-28词条的默认情况算出来的，是一个基准值，只是为了方便对比，实际上主C数据分80以上打深渊已经完全够了，不同角色之间评分标准不太一样，如行秋是祭礼剑作为默认武器计算标准分，这时候如果换成绿剑，数据分就会很高，但如果默认武器改成绿剑，那带祭礼数据分就很低，因此理性看待，评分是毕竟是相对分，有时候不好平衡，只要明白一点，同一个角色数据分高那个期望伤害更高就是了。")])],1)],1)],1),i("v-uni-view",{staticClass:"content"},[t._v("词条分、数据分都是基于单人期望进行计算的，区别是词条分是只考虑圣遗物词条（不考虑主属性）的伤害能力，无视其他配置，是阶段性的。数据分则是综合考虑所有配置获得的最终结果，如果数据分比词条分低，原因是圣遗物主属性（如默认是攻击沙，而实际带了充能沙）、圣遗物套装、武器、技能等级等非词条的配置比角色默认的要低。\n\t\t\t\t具体算法可以点开上面查看。")]),i("uni-list-item",{attrs:{clickable:!0,showArrow:!0,title:"更新日志",note:"显示所有更新记录"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toChangelog.apply(void 0,arguments)}}})],1),i("uni-card",{attrs:{padding:"0",spacing:"0"}},[i("uni-section",{attrs:{title:"Q & A",type:"line"}},[i("uni-collapse",{attrs:{accordion:!0},model:{value:t.accordionVal,callback:function(e){t.accordionVal=e},expression:"accordionVal"}},[i("uni-collapse-item",{attrs:{title:"1. 首页角色下面的数字是什么？"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("分别是词条分和数据分，读取的人物详情页的数据，具体可以查看上面的核心算法说明。")])],1)],1),i("uni-collapse-item",{attrs:{title:"2. 提升建议是什么？"}},[i("v-uni-view",{staticClass:"content"},[t._v("当前配置保持不变，提升某项数值后进行计算得到提升幅度，依次计算所有权重项得到所有增幅。其意义在于告诉你，在目前状态下，人物等级（未满级的情况），技能等级(未升满)，每个圣遗物词条，以及增伤对期望伤害的影响，可以参考这个权重来进行选择刷等级、天赋、圣遗物或者用于配队等，其中更换杯子的意义是，如果更换杯子增幅不多，看看你手上的杯子词条差是否可以弥补差距，判断是否要强刷一个新杯子。")])],1),i("uni-collapse-item",{attrs:{title:"3.预设是做什么用的？"}},[i("v-uni-view",{staticClass:"content"},[t._v("用于解决对比哪个武器更好，哪个套圣遗物更好，氪金命座还是专武等问题，具体方法为为进入预设页面，把当前配置复制一份出来，然后可以调整武器等配置，再进入预设页对比不同配置下的各项评分。")])],1),i("uni-collapse-item",{attrs:{title:"4.词条折算是按什么比例？"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("折算率 = 次属性提升期望 / 主属性提升期望")]),t._v("将次要属性（如胡桃的攻击）按折算率进行折算，加上其他有效词条获得折算后的词条数，感谢 NGA@young13325 提出的算法。")],1)],1),i("uni-collapse-item",{attrs:{title:"5.损失词条是什么意思？"}},[i("v-uni-view",{staticClass:"content"},[t._v("双爆不平衡会导致期望损失，比如目前是18条双爆，若显示损失了1个词条，则说明由于双爆的失衡，18条的期望与17条合理比例的双爆期望一致，感谢 NGA @Gansterbot\n\t\t\t\t\t\t\t提出的算法。")])],1),i("uni-collapse-item",{attrs:{title:"6.极限词条是多少词条？"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("极限词条 = 数据分 / 极限分")]),t._v("（1）极限词条是保持现在的主属性和其他配置不变，根据30+7+5*N的规则代入词条数，计算出来的（平衡双爆）的期望。可以用于参考这套圣遗物距离究极毕业还有多远。"),i("v-uni-view",[t._v("（2）极限词条的规则是通用的，因此不一定是每个角色的最优毕业分配。")]),i("v-uni-view",[t._v("（3）无论是词条分还是极限词条都没有办法考虑实战中需要的充能。")]),i("v-uni-view",[t._v("（4）不同角色（配置）极限词条和词条分之间的比例不同，比如有的角色对圣遗物要求不高，容易毕业，刷圣遗物伤害提升不大了，反过来也一样，总之，算法存在局限性，参考一下即可。")])],1)],1),i("uni-collapse-item",{attrs:{title:"7.圣遗物属性的评分标准？"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("圣遗物评分 = 数据分 / 圣遗物基础分")]),i("v-uni-view",[t._v("（1）圣遗物基础分是指去掉该件圣遗物有效副词条后，进行计算获得的基础分数。")]),i("v-uni-view",[t._v("（2）圣遗物评分提现了单件圣遗物对角色的提升幅度（如15.6就是提升15.6%），方便观察和快速判断该角色哪个部位提升空间更大（如果要调整优化圣遗物，先从....")]),i("v-uni-view",[t._v("（3）如果双爆严重失衡，会出现比如角色总共30暴200爆，有一个羽毛20暴，那这个羽毛对这个角色的重要程度就很明显了（分会很高）。")]),i("v-uni-view",[t._v("（4）因此该评分不能完全代表圣遗物本身的绝对强度，而是针对角色的适配性或者说重要性（没有它损失程度有多大）。")]),i("v-uni-view",[t._v("（5）圣遗物评分颜色标准是红色>=20%、黄色>=10%、紫色>=7.5%、蓝色>=5%、绿色>=2.5%、灰色>=0%")]),i("v-uni-view",[t._v("（6）角标第一排为该圣遗物总词条数，其他为具体词条数，根据角色有效词条判断是否计算（充能永远算有效），小词条则会根据角色基础属性进行折算。")])],1)],1)],1)],1)],1),i("v-uni-button",{staticStyle:{margin:"40px 15px","background-color":"#f6f2ee"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteLoacl.apply(void 0,arguments)}}},[t._v("清空本地缓存")])],1)},o=[]},8179:function(t,e,i){"use strict";i.r(e);var n=i("f91a"),a=i("6293");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b6dd");var c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"6fce09b0",null,!1,n["a"],void 0);e["default"]=l.exports},a345:function(t,e,i){"use strict";i.r(e);var n=i("2542"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},b6dd:function(t,e,i){"use strict";var n=i("d3ec"),a=i.n(n);a.a},d3ec:function(t,e,i){var n=i("38b8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f065").default;a("d2ce4208",n,!0,{sourceMap:!1,shadowMode:!1})},e9e2:function(t,e,i){"use strict";var n=i("3c19"),a=i.n(n);a.a},f91a:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},a=[]}}]);