(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-team-detail"],{"0c04":function(e,t,i){var a=i("8012");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("85875dcc",a,!0,{sourceMap:!1,shadowMode:!1})},"0cf7":function(e,t,i){var a=i("8d83");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("4b6dc550",a,!0,{sourceMap:!1,shadowMode:!1})},1148:function(e,t,i){"use strict";var a=i("a691"),n=i("1d80");e.exports="".repeat||function(e){var t=String(n(this)),i="",s=a(e);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(i+=t);return i}},"38cf":function(e,t,i){var a=i("23e7"),n=i("1148");a({target:"String",proto:!0},{repeat:n})},"38ff":function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("db53")),s=a(i("6448")),r=a(i("858b")),l=a(i("2b1a")),o={id:"youleixiuban",name:"优雷修班（21秒） ",note:"@VanDarkhelmet",sTitle:"优雷修班 23秒轴",sText:"总伤害 / 占比",title:"",text:"",time:23,from:"NGA @VanDarkhelmet",bg:"bg-cyan",cIds:["youla","leidianjiangjun","luoshaliya","bannite"],teamBuffs:[],result:{score:0,color:""},members:{leidianjiangjun:{id:"leidianjiangjun",skill:n.default,requires:[{title:"雷神充能低于166.6%",recharge:1.666}]},youla:{id:"youla",skill:l.default,requires:[{title:"优菈充能低于127.40%",recharge:1.274}]},bannite:{id:"bannite",skill:r.default,requires:[{title:"班尼特充能低于173.68%",recharge:1.7368}]},luoshaliya:{id:"luoshaliya",skill:s.default,requires:[{title:"罗莎莉亚未佩戴西方长枪,可能会影响循环",wId:"xifengchangqiang"},{title:"罗莎莉亚充能低于106.45%",recharge:1.0645}]}},results:[{id:"leidianjiangjun",title:"E",actions:[{title:"恶曜开眼 E2 * 7",buffs:["songlaixiangqizhishi"],skills:["e2"],repeat:[7]},{wConfigs:{ticaozhidaoguang:{indexs:[0]}},title:"恶曜开眼 E2 * 7",buffs:["songlaixiangqizhishi","luoshaliyaT","shuangbing"],skills:["e2"],repeat:[7]},{wConfigs:{ticaozhidaoguang:{indexs:[0]}},title:"恶曜开眼 E2 * 4",buffs:["shuangbing"],skills:["e2"],repeat:[4]},{wConfigs:{ticaozhidaoguang:{indexs:[0]}},title:"恶曜开眼 E1",skills:["e1"]},{wConfigs:{ticaozhidaoguang:{indexs:[0]}},title:"超导 * 6",jType:0,buffs:[""],skills:["u"],repeat:[6]}]},{id:"luoshaliya",title:"E",actions:[{title:"噬罪的告解 E",buffs:[],skills:["e11","e12"]}]},{id:"youla",title:"E",actions:[{aConfigs:{cangbai:{indexs:[2]}},element:"ice",buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","youlaE","youla1"],title:"凝浪之光剑 E冰剑 * 2",skills:["e3"],repeat:[2]},{aConfigs:{cangbai:{indexs:[1]}},element:"ice",buffs:["shuangbing"],title:"凝浪之光剑 E1",skills:["e1"]}]},{id:"bannite",title:"Q",actions:[{title:"Q",type:2,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","shuangbing","songlaixiangqizhishi"],skills:["q1"]}]},{id:"luoshaliya",title:"Q",actions:[{title:"终命的圣礼 Q1 + Q2 * 3",buffs:["banniteQ","shuangbing","luoshaliyaT","leidianjiangjunE"],skills:["q11","q12","q2"],repeat:[1,1,3]},{title:"终命的圣礼 Q2 * 3",buffs:["banniteQ","shuangbing","luoshaliyaT","youlaE","leidianjiangjunE"],skills:["q2"],repeat:[3]}]},{id:"youla",title:"Qaaaa + Eaaaa",actions:[{aConfig:{cangbai:{level:2}},buffs:["5zongshi","songlaixiangqizhishi","banniteQ","leidianjiangjunE","luoshaliyaT","shuangbing","chaodao","youlaE","luoshaliya6","youla1"],title:"凝浪之光剑 Q2",skills:["q2","q3"],repeat:[1,13],extraNote:"13层",skillFix:{stage:6,skills:["q3"],repeat:[10],extraNote:"23层"}},{aConfigs:{cangbai:{indexs:[2]}},buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","chaodao","luoshaliya6","youlaE","youla1"],title:"普通攻击 aaaa",skills:["a1","a2","a31","a32","a4"]},{aConfigs:{cangbai:{indexs:[2]}},buffs:["5zongshi","songlaixiangqizhishi","banniteQ","leidianjiangjunE","luoshaliyaT","shuangbing","chaodao","youlaE","luoshaliya6","youla1"],title:"冰潮的涡旋 Q光剑",skills:["q2"],repeat:[.5]},{aConfigs:{cangbai:{indexs:[2]}},element:"ice",buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","youlaE","youla1"],title:"凝浪之光剑 E冰剑 * 2",skills:["e3"],repeat:[2]},{aConfigs:{cangbai:{indexs:[1]}},element:"ice",buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","youla1"],title:"凝浪之光剑 长按E2",skills:["e2"]},{aConfigs:{cangbai:{indexs:[1]}},buffs:["5zongshi","banniteQ","luoshaliyaT","shuangbing","chaodao","luoshaliya6"],title:"普通攻击 aaaa",skills:["a1","a2","a31","a32","a4"]},{aConfigs:{cangbai:{indexs:[1]}},element:"ice",buffs:["5zongshi","banniteQ","luoshaliyaT","shuangbing","leidianjiangjunE"],title:"凝浪之光剑 Q1",skills:["q1"]}]},{id:"luoshaliya",title:"E",actions:[{title:"噬罪的告解 E",buffs:["banniteQ","shuangbing","luoshaliyaT","youlaE","leidianjiangjunE","songlaxiangqizhishi","5zongshi"],skills:["e11","e12"]}]},{id:"leidianjiangjun",title:"Q AAAZ AAAZ  AZ",actions:[{title:"梦想真说 Q",buffs:["leidianjiangjunE","songlaixiangqizhishi","shuangbing"],skills:["q1","qbonus1"],repeat:[1,50],extraNote:"50层愿力",skillFix:{stage:1,skills:["qbonus1"],repeat:[10],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}},{title:"梦想真说 AAAZ*2 + AZ",buffs:["leidianjiangjunE","songlaixiangqizhishi"],skills:["qa1","qa2","qa3","qb1","qb2","qbonus2"],repeat:[3,2,2,3,3,650],extraNote:"50层愿力",skillFix:{stage:1,skills:["qbonus2"],repeat:[130],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}}]}],sequence:[{index:0,title:"E ",text:"1s"},{index:3,title:"E   ",text:"1s"},{index:1,title:"E  ",text:"1s"},{index:2,title:"Q   ",text:"1s"},{index:3,title:"Q      ",text:"1s"},{index:1,title:"Qaaaa + Eaaaa",text:"10s"},{index:3,title:"E      ",text:"1s"},{index:0,title:"Q AAAZ AAAZ  AZ ",text:"7s"}]};t.default=o},"44af":function(e,t,i){"use strict";i.r(t);var a=i("7a05"),n=i("704a");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("f943");var r,l=i("f0c5"),o=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"44c0d81e",null,!1,a["a"],r);t["default"]=o.exports},"61c6":function(e,t,i){"use strict";var a=i("0c04"),n=i.n(a);n.a},6382:function(e,t,i){"use strict";i.r(t);var a=i("baa1"),n=i("bded");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("b3e2");var r,l=i("f0c5"),o=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"342b4df7",null,!1,a["a"],r);t["default"]=o.exports},"704a":function(e,t,i){"use strict";i.r(t);var a=i("7fc9"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},"7a05":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":e.isFull,"uni-card--shadow":e.isShadow,"uni-card--border":e.border},style:{margin:e.isFull?0:e.margin,padding:e.spacing,"box-shadow":e.isShadow?e.shadow:""}},[e._t("cover",[e.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:e.cover},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("cover")}}})],1):e._e()]),e._t("title",[e.title||e.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("title")}}},[e.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:e.thumbnail,mode:"aspectFit"}})],1):e._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[e._v(e._s(e.title))]),e.title&&e.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[e._v(e._s(e.subTitle))]):e._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[e._v(e._s(e.extra))])],1)],1):e._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:e.padding},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("content")}}},[e._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("actions")}}},[e._t("actions")],2)],2)},s=[]},"7fc9":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(e){this.$emit("click",e)}}};t.default=a},8012:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-c5b075ba]{background-color:#fff}.uni-list-item__content[data-v-c5b075ba]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-c5b075ba]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-c5b075ba]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-c5b075ba]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-c5b075ba]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-c5b075ba]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-c5b075ba]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-c5b075ba]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-c5b075ba]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-c5b075ba]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-c5b075ba]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-c5b075ba]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-c5b075ba]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-c5b075ba]{font-size:13px;color:#999}',""]),e.exports=t},8478:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".js[data-v-342b4df7]{width:25%;background-color:#6a63ab}.js2[data-v-342b4df7]{width:5%;background-color:#6a63ab}.skills[data-v-342b4df7]{white-space:nowrap;\n\t/* overflow: ; */overflow:visible;text-overflow:ellipsis;font-size:14px;text-align:left;padding-left:5px;line-height:40px;color:#999}.swiper-item-bg[data-v-342b4df7]{color:#7f858a;background-color:#f5f5f5}.example-body[data-v-342b4df7]{\ndisplay:flex;\nflex-direction:row;justify-content:flex-start;align-items:flex-end;flex-wrap:wrap}.tag-view[data-v-342b4df7]{margin-right:10px}.goods-carts[data-v-342b4df7]{\ndisplay:flex;\nflex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:1000}",""]),e.exports=t},"84e8":function(e,t,i){"use strict";(function(e){var a=i("4ea4");i("4e82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("b85c")),s=a(i("5530")),r=i("26cb"),l=i("efd3"),o=i("aa2c"),u=i("7381"),c=i("b9da"),d={data:function(){return{colors:{fire:"#fadbd9",ice:"#d2f1f0",rock:"#fef2ced2",water:"#cce6ff",thunder:"#e1d7f0",wind:"#d7f0dbff"},margin:"0px 15px 30px",notices:[],needInit:!1,initPresets:[],charactersData:{},formulaText:"基础区 * 增伤 * 期望 * 防御 * 反应 * 抗性 * 倍率",color:"rgb(211,159,81)",score:"",members:[],showSequence:!1,switchChecked:[!1,!1,!1,!1],switchChecked2:[!1,!1,!1,!1],presets:[],team:{},index:0,showRecharges:!1,showTeamBuffs:[],value:["0"],preset:{},options:[{icon:"star",text:"收藏"},{icon:"color",text:" 预设",info:0},{icon:"vip",text:"词条",info:0},{icon:"fire",text:"数据",info:0},{icon:"staff",text:"队友",info:0}]}},computed:(0,s.default)({},(0,r.mapState)(["version","character"])),onUnload:function(){uni.$off("presetChanged")},onLoad:function(e){var t=l.Teams[e.teamId];if(t){this.Team=t,this.charactersData=u.charactersData;var i=this;uni.$on("presetChanged",(function(){i.$store.commit("recoverPreset"),i.initData()})),i.initData()}else uni.reLaunch({url:"/pages/team/team"})},methods:{initData:function(){if(uni.showLoading({title:"正在计算,请稍后!"}),this.members=[],this.team=(0,o.getTeamData)(this.Team,this.version),this.team.needInit)return this.needInit=this.team.needInit,this.initPresets=this.team.initPresets,void uni.hideLoading();for(var e in this.needInit=!1,this.team.members){var t=this.team.members[e],i=uni.getStorageSync(t.id);this.notices=[];var a,s=(0,n.default)(t.requires);try{for(s.s();!(a=s.n()).done;){var r=a.value;r.wId&&r.wId!=i.wId||r.cStage&&r.cStage>i.cStage?this.notices.push(r):r.recharge&&r.recharge>i.recharge&&(r.title+="   (目前:"+100*i.recharge+"%)",this.notices.push(r))}}catch(c){s.e(c)}finally{s.f()}this.members.push(t)}this.members.sort((function(e,t){return t.score-e.score}));for(var l=0;l<this.members.length;l++){var u=this.members[l];u.width=0==l?90:u.score/this.members[0].score*90}uni.hideLoading(),this.$store.commit("setTeam",this.team),uni.setNavigationBarTitle({title:this.team.sTitle})},onClick:function(e){switch(e.index){case 0:uni.navigateTo({url:"config/actions"});break;default:break}},switchChange2:function(e){var t=this.switchChecked2[e];this.switchChecked2[e]=!t||!t,this.$forceUpdate()},switchChange:function(e){var t=this.switchChecked[e];this.switchChecked[e]=!t||!t,this.$forceUpdate()},setIndex:function(e){this.index=e},switchSequence:function(e){this.showSequence=e.value},switchRecharges:function(e){this.showRecharges=e.value},change:function(t){e.log(t)},toInit:function(e){var t=this;uni.showLoading({title:"初始化中..",mask:!0}),setTimeout((function(){(0,c.startCalculate)(e,this.version),t.$store.commit("savePreset",e),t.initData(),uni.hideLoading()}),3e3)},toAction:function(e){uni.navigateTo({url:"./action?index="+e})},toDetail:function(e){var t=uni.getStorageSync(e);this.$store.commit("backupPreset"),this.$store.commit("setPreset",t),uni.navigateTo({url:"../character/property?save=true"})}}};t.default=d}).call(this,i("5a52")["default"])},"8d83":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-44c0d81e]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-44c0d81e]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-44c0d81e]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-44c0d81e]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-44c0d81e]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-44c0d81e]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-44c0d81e]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-44c0d81e]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-44c0d81e]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-44c0d81e]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-44c0d81e]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-44c0d81e]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-44c0d81e]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-44c0d81e]{font-size:12px}.uni-card--border[data-v-44c0d81e]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-44c0d81e]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-44c0d81e]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-44c0d81e]:after{border-radius:0}.uni-ellipsis[data-v-44c0d81e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),e.exports=t},"963a":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var a={uniIcons:i("a5ea").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:e.color},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[e.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[e.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[e._v(e._s(e.title))]):e._e(),e.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[e._v(e._s(e.subTitle))]):e._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[e._t("extra",[e.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[e._v(e._s(e.rightText))]):e._e()])],2),e.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):e._e()],1),i("v-uni-view",{style:{padding:e.padding?"10px":""}},[e._t("default")],2)],1)},s=[]},"9ab4":function(e,t,i){"use strict";i.r(t);var a=i("fe7c"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},a7cc:function(e,t,i){var a=i("8478");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("0937b332",a,!0,{sourceMap:!1,shadowMode:!1})},aa2c:function(e,t,i){"use strict";(function(e){var a=i("4ea4");i("c975"),i("e25e"),i("38cf"),Object.defineProperty(t,"__esModule",{value:!0}),t.getTeamData=f;var n=a(i("5530")),s=a(i("b85c")),r=i("3d9f"),l=i("8aa5c"),o=i("b9da"),u=i("0cf9"),c=i("5c62"),d=["无","蒸发 - ","融化 - "];function f(t,i){var a=JSON.parse(JSON.stringify(t)),f={fire:0,rock:0,wind:0,ice:0,thunder:0,water:0},g=[],h={},b=[];for(var x in a.members){var v=a.members[x],p=(0,o.getPreset)(x,i);p.cNote?(v.title=p.cNote,v.note=p.eNote,v.title2=p.score,v.score=0,v.element=p.element,h[p.cId]=p,f[p.element]+=1):b.push(p)}if(b.length>0)return e.log("needInit"),{needInit:!0,initPresets:b};var m={};for(var _ in h){var y=h[_];if(y.effects){var w,k=(0,s.default)(y.effects);try{for(k.s();!(w=k.n()).done;){var j=w.value;m[j.id]=j}}catch(ue){k.e(ue)}finally{k.f()}}}f.fire>1&&g.push({id:"shuanghuo",title:"共鸣 - 双火",text:"攻击力提升25%"}),f.ice>1&&(m.shuangbing={id:"shuangbing",title:"共鸣 - 双冰",text:"暴击率提升15%"}),f.rock>1&&g.push({id:"shuangyan",title:"共鸣 - 双岩",text:"伤害提升15%,目标岩元素抗性降低15%"}),f.ice>0&&f.thunder>0&&(m.chaodao={id:"chaodao",title:"效果 - 超导",text:"目标物理抗性降低40%"}),a.score=0;var q,E=(0,s.default)(a.results);try{for(E.s();!(q=E.n()).done;){var C=q.value;C.score=0;var T,z=h[C.id],Q=l.characterDamage[C.id],A=(0,s.default)(C.actions);try{for(A.s();!(T=A.n()).done;){var S=T.value,I=[],N=[];if(S.buffs){var F,$=(0,s.default)(S.buffs);try{for($.s();!(F=$.n()).done;){var D=F.value,P=m[D];P&&I.push(P)}}catch(ue){$.e(ue)}finally{$.f()}}var M=(0,n.default)({},z);S.type?(M.type=S.type,S.text=d[S.type]):(M.type=-1,S.text=""),M.tIds=a.cIds;var O=void 0;if(S.aConfigs&&!z.aSets){var Z=S.aConfigs[z.aIds[0]];Z&&(O=Z.indexs)}var B=void 0;if(S.wConfigs){var L=S.wConfigs[z.wId];L&&(B=L.indexs)}var U=(0,r.buildTeamAttribute)(M,g,I,B,O);U.isTeam=!0,U.buffTexts&&(N=U.buffTexts),U.wBuff&&N.unshift(U.wBuff),U.aBuff&&N.unshift(U.aBuff);var H=S.skills[0][0];if("u"==H){var J=(0,c.reactionDamage)(U,S.jType);S.score=J*S.repeat[0],S.formula=U.formula+" * "+S.repeat[0]}else{var R=0,G=0,V=M["cSkills"];G="q"==H?V[2]:"e"==H?V[1]:V[0];for(var W=0;W<S.skills.length;W++){var Y=S.skills[W],K=a.members[C.id],X=K.skill[Y][G];S.repeat?R+=X*S.repeat[W]:R+=X;var ee=S.skillFix;if(ee&&M.cStage>=ee.stage){var te=ee.skills.indexOf(Y);te>-1&&(R+=X*ee.repeat[te]),S.extraNote=ee.extraNote}}U.skills.push({element:S.element,title:S.title,key:H,level:R}),Q.get(U),S.score=U.score,S.formula=U.formula,S.extraNote&&N.unshift(S.extraNote)}N.length>0?S.note=N.join(" | "):S.note="无";var ie=parseInt(S.score);C.score+=ie,a.members[C.id].score+=ie,S.text+=(1*S.score).toFixed(0)}}catch(ue){A.e(ue)}finally{A.f()}C.text=C.score.toFixed(0),a.score+=C.score}}catch(ue){E.e(ue)}finally{E.f()}for(var ae in a.members){var ne=a.members[ae],se=(ne.score/a.score*100).toFixed(0)+"%";ne.text=ne.score+" / "+se,ne.dps=(ne.score/a.time).toFixed(0)+" / S"}a.sText=a.score.toFixed(0);var re=a.score/a.time;a.dps=re.toFixed(0)+" / S";var le=(re/5e4*100).toFixed(0),oe=(0,u.getColor)(le);return a.result.color=oe,a.result.score=le,a}}).call(this,i("5a52")["default"])},b37b:function(e,t,i){var a={"./优雷修班23.js":"38ff","./雷神国家队21.js":"be49"};function n(e){var t=s(e);return i(t)}function s(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id="b37b"},b3e2:function(e,t,i){"use strict";var a=i("a7cc"),n=i.n(a);n.a},baa1:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var a={uniCard:i("44af").default,uniSection:i("db908").default,uniListItem:i("eced").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[e.needInit?e._l(e.initPresets,(function(t,a){return i("uni-card",{key:a,attrs:{margin:e.margin,padding:"0",spacing:"0"}},[i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:e.charactersData[t.cId].avatar,title:"该角色未初始化，无法进行计算..",rightText:"配置",showArrow:!0},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toInit(t)}}})],1)})):i("v-uni-view",[i("uni-card",{attrs:{padding:"0",spacing:"0",margin:e.margin}},[i("uni-section",{attrs:{title:"伤害分析",type:"line",rightText:e.team.dps}},[i("uni-list-item",{attrs:{showBadge:!0,title:"总伤害",rightText:e.team.sText+" / 100%",clickable:!0},scopedSlots:e._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:e.team.result.color}},[e._v(e._s(e.team.result.score))])]},proxy:!0}],null,!1,1238893863)}),e._l(e.members,(function(t,a){return i("uni-list-item",{key:a,attrs:{clickable:!0,"thumb-size":"lg",thumb:e.charactersData[t.id].avatar,title:t.title2,rightText:t.text},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toDetail(t.id)}}})})),e.notices.length>0?i("v-uni-view",e._l(e.notices,(function(e,t){return i("uni-list-item",{key:e.title,attrs:{title:e.title}})})),1):i("uni-list-item",{attrs:{title:"充能等配置符合阵容要求.."}})],2)],1),i("uni-card",{key:e.index,attrs:{padding:"0",spacing:"0",margin:e.margin}},[i("uni-section",{attrs:{title:"技能轴",type:"line",rightText:e.team.from}}),e._l(e.team.results,(function(t,a){return i("uni-list-item",{key:t.title,attrs:{clickable:!0,"thumb-size":"lg",thumb:e.charactersData[t.id].avatar,title:t.title,note:t.note,rightText:t.text},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toAction(a)}}})}))],2)],1),i("v-uni-view",{staticStyle:{height:"60px"}})],2)},s=[]},bded:function(e,t,i){"use strict";i.r(t);var a=i("84e8"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},be49:function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("db53")),s=a(i("383e")),r=a(i("858b")),l=a(i("3980")),o={id:"leishenguojiadui2",name:"雷神国家队（21秒） ",note:"@梦魇敌酋",sTitle:"雷神国家队 21秒轴",sText:"总伤害 / 占比",title:"阵容DPS",text:"阵容DPS",time:21,from:"NGA @梦魇敌酋",bg:"bg-purple",cIds:["leidianjiangjun","xingqiu","bannite","xiangling"],skillFamilies:[n.default,s.default,r.default,l.default],teamBuffs:[],result:{score:0,color:""},members:{leidianjiangjun:{id:"leidianjiangjun",skill:n.default,requires:[{title:"雷神充能低于204.25%",recharge:2.0425}]},xingqiu:{id:"xingqiu",skill:s.default,requires:[{title:"行秋充能低于146.97%",recharge:1.4697}]},bannite:{id:"bannite",skill:r.default,requires:[{title:"班尼特充能低于119.11%",recharge:1.1911}]},xiangling:{id:"xiangling",skill:l.default,requires:[{title:"香菱座低于四命",cStage:4},{title:"香菱充能低于180.71%",recharge:1.8071}]}},results:[{id:"leidianjiangjun",title:"E ",actions:[{title:"恶曜开眼 E1+E2 * 9",skills:["e1","e2"],repeat:[1,9],wConfigs:{ticaozhidaoguang:{indexs:[0]}}},{title:"恶曜开眼 E2 * 9",buffs:["banniteQ","5zongshi"],skills:["e2"],repeat:[9],wConfigs:{ticaozhidaoguang:{indexs:[1]}}}]},{id:"bannite",title:"E    ",text:"1s",actions:[{title:"热情过载 E",skills:["e1"]},{index:1,title:"超载",jType:4,skills:["u"],repeat:[1]}]},{id:"xingqiu",title:"Q E 吃球",text:"3s",actions:[{index:1,buffs:["xingqiu2"],title:"画雨笼山 E",skills:["e1","e2"]},{index:1,title:"裁雨留虹 Q * 5",buffs:["leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[5]},{index:1,title:"裁雨留虹 Q * 30",buffs:["5zongshi","leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[30]},{index:1,title:"裁雨留虹 Q * 10",buffs:["leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[10]},{index:1,title:"感电 * 9",jType:2,buffs:[""],skills:["u"],repeat:[9]}]},{id:"bannite",title:"Q E    ",text:"2s",actions:[{title:"美妙旅程 Q",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q1"]},{title:"热情过载 E",type:1,buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{title:"热情过载 E",buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{index:1,title:"超载",jType:4,skills:["u"],repeat:[1]}]},{id:"xiangling",title:"Q E  ",text:"3s",actions:[{title:"旋火轮 Q1",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q1"]},{title:"旋火轮 Q2+Q3",buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling6"],skills:["q2","q3"]},{title:"旋火轮 Q4 * 3",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q4"],repeat:[3]},{title:"旋火轮 Q4",buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling1"],skills:["q4"]},{title:"旋火轮 Q4 * 7",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling1"],skills:["q4"],repeat:[7]},{title:"锅巴出击 E",buffs:["banniteQ","bannite6","5zongshi","xiangling6"],type:1,skills:["e1"],repeat:[1]},{type:1,title:"锅巴出击 E * 3",skills:["e1"],buffs:["banniteQ","bannite6","5zongshi","xiangling1","xiangling6"],repeat:[3]},{index:1,title:"超载 * 3",jType:4,skills:["u"],repeat:[3]},{index:1,title:"超载 * 4",jType:4,buffs:["xiangling1"],skills:["u"],repeat:[4]}]},{id:"bannite",title:"E     ",text:"1s",actions:[{title:"热情过载 E",buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{index:1,title:"超载",jType:4,skills:["u"],repeat:[1]}]},{id:"leidianjiangjun",title:"Q AAAZ AAAZ AAAZ AZ ",text:"10s",actions:[{index:0,name:"Q+AAAZ+AAAZ",title:"梦想真说 Q+AAAZ * 2",buffs:["banniteQ","leidianjiangjunE","5zongshi"],skills:["q1","qa1","qa2","qa3","qb1","qb2","qbonus1","qbonus2"],repeat:[1,2,2,2,2,2,54,540],extraNote:"54层愿力",skillFix:{stage:1,skills:["qbonus1","qbonus2"],repeat:[6,60],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}},{title:"梦想真说 AAAZ",buffs:["leidianjiangjunE","banniteQ"],skills:["qbonus2","qa1","qa2","qa3","qb1","qb2"],repeat:[270,1,1,1,1,1],extraNote:"54层愿力",skillFix:{stage:1,skills:["qbonus2"],repeat:[30],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}},{title:"梦想真说 AZ",buffs:["leidianjiangjunE"],skills:["qbonus2","qa1","qb1","qb2"],repeat:[162,1,1,1],extraNote:"54层愿力",skillFix:{stage:1,skills:["qbonus2"],repeat:[18],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}}]}]};t.default=o},db908:function(e,t,i){"use strict";i.r(t);var a=i("963a"),n=i("9ab4");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("61c6");var r,l=i("f0c5"),o=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"c5b075ba",null,!1,a["a"],r);t["default"]=o.exports},efd3:function(e,t,i){"use strict";var a=i("4ea4");i("d3b7"),i("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.Teams=void 0;var n=a(i("b85c")),s={};function r(e){var t,i=(0,n.default)(e.keys());try{for(i.s();!(t=i.n()).done;){var a=t.value,r=e(a).default;s[r.id]=r}}catch(l){i.e(l)}finally{i.f()}}r(i("b37b"));var l=s;t.Teams=l},f943:function(e,t,i){"use strict";var a=i("0cf7"),n=i.n(a);n.a},fe7c:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=a}}]);