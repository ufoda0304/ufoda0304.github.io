(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"01d8":function(i,a,t){"use strict";t.r(a);var n=t("9ad11"),e=t("6306");for(var o in e)["default"].indexOf(o)<0&&function(i){t.d(a,i,(function(){return e[i]}))}(o);t("99ad");var u=t("f0c5"),s=Object(u["a"])(e["default"],n["b"],n["c"],!1,null,"1693f0ea",null,!1,n["a"],void 0);a["default"]=s.exports},"12e5":function(i,a,t){var n=t("84a5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=t("4f065").default;e("51ab71fe",n,!0,{sourceMap:!1,shadowMode:!1})},"26a5":function(i,a,t){"use strict";t.r(a);var n=t("4b0e"),e=t("3829");for(var o in e)["default"].indexOf(o)<0&&function(i){t.d(a,i,(function(){return e[i]}))}(o);var u=t("f0c5"),s=Object(u["a"])(e["default"],n["b"],n["c"],!1,null,"7766d014",null,!1,n["a"],void 0);a["default"]=s.exports},"2d7b":function(i,a,t){"use strict";var n=t("bb13"),e=t.n(n);e.a},"31c1":function(i,a,t){"use strict";t.r(a);var n=t("ad10"),e=t.n(n);for(var o in n)["default"].indexOf(o)<0&&function(i){t.d(a,i,(function(){return n[i]}))}(o);a["default"]=e.a},3829:function(i,a,t){"use strict";t.r(a);var n=t("a376"),e=t.n(n);for(var o in n)["default"].indexOf(o)<0&&function(i){t.d(a,i,(function(){return n[i]}))}(o);a["default"]=e.a},"4b0e":function(i,a,t){"use strict";t.d(a,"b",(function(){return e})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return n}));var n={uniPopup:t("c045").default,uniPopupDialog:t("62c3").default},e=function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("v-uni-view",[t("uni-popup",{ref:"popup",attrs:{type:"dialog"}},[t("uni-popup-dialog",{attrs:{cancelText:"支持作者",confirmText:"关闭",title:i.notice},on:{confirm:function(a){arguments[0]=a=i.$handleEvent(a),i.dialogConfirm.apply(void 0,arguments)},close:function(a){arguments[0]=a=i.$handleEvent(a),i.dialogMore.apply(void 0,arguments)}}},[t("v-uni-text",[i._v("1、修复夜兰无法保存的问题\n\t\t\t\t2、修复狼牙E的增伤算在Q上的问题\n\t\t\t\t3、修复海渊终曲90级以下基础攻击错误的问题\n\t\t\t\t4、添加峡湾长歌特效手动开启选项\n\t\t\t\t5、修复流浪者自定义循环无效的问题")])],1)],1)],1)},o=[]},6306:function(i,a,t){"use strict";t.r(a);var n=t("b293"),e=t.n(n);for(var o in n)["default"].indexOf(o)<0&&function(i){t.d(a,i,(function(){return n[i]}))}(o);a["default"]=e.a},"7e1f":function(i,a,t){"use strict";(function(i){t("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={backup:{notice:1,date:0,type:0,update:1,logs:{},id:""},init:function(){var a=uni.getStorageSync("ysin_backup");if(a&&(this.backup=a),2!=this.backup.type&&0==this.backup.type&&this.backup.update>0){var t=new Date((new Date).toLocaleDateString()).getTime();t!=this.backup.date&&(this.backup.notice=1,this.backup.date=t,i.log(t))}},set:function(i){var a=this.backup;-1==i?(a.notice>0&&(a.notice=0,uni.setStorageSync("ysin_backup",a)),2==a.type&&this.backup.update>0&&this.clear()):(a.type=i,uni.setStorageSync("ysin_backup",a))},clear:function(){this.backup.logs={},this.backup.update=0,uni.setStorageSync("ysin_backup",this.backup)},add:function(i,a,t,n){if(this.backup.id=i,2!=this.backup.type){var e=n?"（展示柜）":"（本地）",o=a+t;this.backup.update+=1,1==this.backup.type&&(this.backup.notice=1),this.backup.logs[i]=[e,o,Date.now()],uni.setStorageSync("this.backup",this.backup)}}};a.default=n}).call(this,t("5a52")["default"])},"84a5":function(i,a,t){var n=t("24fb");a=n(!1),a.push([i.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-badge--x[data-v-1693f0ea]{display:inline-block;position:relative}.uni-badge--absolute[data-v-1693f0ea]{position:absolute}.uni-badge--small[data-v-1693f0ea]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.uni-badge[data-v-1693f0ea]{display:flex;overflow:hidden;box-sizing:border-box;-webkit-font-feature-settings:"tnum";font-feature-settings:"tnum";min-width:20px;justify-content:center;flex-direction:row;height:20px;padding:0 4px;line-height:18px;color:#fff;border-radius:100px;background-color:#8f939c;background-color:initial;border:1px solid #fff;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;z-index:999;cursor:pointer}.uni-badge--info[data-v-1693f0ea]{color:#fff;background-color:#8f939c}.uni-badge--primary[data-v-1693f0ea]{background-color:#2979ff}.uni-badge--success[data-v-1693f0ea]{background-color:#18bc37}.uni-badge--warning[data-v-1693f0ea]{background-color:#f3a73f}.uni-badge--error[data-v-1693f0ea]{background-color:#e43d33}.uni-badge--inverted[data-v-1693f0ea]{padding:0 5px 0 0;color:#8f939c}.uni-badge--info-inverted[data-v-1693f0ea]{color:#8f939c;background-color:initial}.uni-badge--primary-inverted[data-v-1693f0ea]{color:#2979ff;background-color:initial}.uni-badge--success-inverted[data-v-1693f0ea]{color:#18bc37;background-color:initial}.uni-badge--warning-inverted[data-v-1693f0ea]{color:#f3a73f;background-color:initial}.uni-badge--error-inverted[data-v-1693f0ea]{color:#e43d33;background-color:initial}',""]),i.exports=a},"85a4":function(i,a,t){"use strict";t.d(a,"b",(function(){return e})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return n}));var n={updateNotice:t("26a5").default,uniGrid:t("fffb").default,uniGridItem:t("1749").default,uniBadge:t("01d8").default,uniSection:t("60df").default,uniIcons:t("879e").default},e=function(){var i=this,a=i.$createElement,n=i._self._c||a;return n("v-uni-view",[n("update-notice"),n("v-uni-view",{staticClass:"example-body"},[n("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},[n("uni-grid-item",{staticClass:"uni-grid-item "},[i.profileData.info?n("v-uni-view",{staticClass:"ys-item-box",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.toProfileDetail.apply(void 0,arguments)}}},[n("uni-badge",{attrs:{absolute:"rightTop",offset:[6,6],text:0}},[n("v-uni-image",{staticClass:"image2",attrs:{src:i.charactersData[i.profileData.info.avatarId].avatar,mode:"aspectFill"}})],1),n("v-uni-text",{staticClass:"text2"},[i._v("展示柜")])],1):n("v-uni-view",{staticClass:"ys-item-box",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.getProfile.apply(void 0,arguments)}}},[n("uni-badge",{attrs:{absolute:"rightTop","is-dot":!0,offset:[6,6],text:"1"}},[n("v-uni-image",{staticClass:"image2",attrs:{src:i.charactersData["traveller"].avatar,mode:"aspectFill"}})],1),n("v-uni-text",{staticClass:"text2"},[i._v("展示柜")])],1)],1),n("uni-grid-item",{staticClass:"uni-grid-item"},[n("v-uni-view",{staticClass:"ys-item-box",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.toAbyss.apply(void 0,arguments)}}},[n("v-uni-view"),n("uni-badge",{attrs:{absolute:"rightTop",offset:[6,6],text:0}},[n("v-uni-image",{staticClass:"image2",attrs:{src:i.user.abyss?i.charactersData[i.user.abyss].avatar:i.charactersData["kong"].avatar,mode:"aspectFill"}})],1),n("v-uni-text",{staticClass:"text2"},[i._v("深渊统计")])],1)],1),n("uni-grid-item",{staticClass:"uni-grid-item"},[n("v-uni-view",{staticClass:"ys-item-box",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.toDaily()}}},[n("uni-badge",{attrs:{absolute:"rightTop",offset:[6,6],text:i.user.daily.count}},[n("v-uni-image",{staticClass:"image2",attrs:{src:i.charactersData[i.user.daily.cId].avatar,mode:"aspectFill"}})],1),n("v-uni-text",{staticClass:"text2"},[i._v("今日素材")])],1)],1),n("uni-grid-item",{staticClass:"uni-grid-item"},[n("v-uni-view",{staticClass:"ys-item-box",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.goLogin.apply(void 0,arguments)}}},[n("uni-badge",{attrs:{absolute:"rightTop","is-dot":!0,offset:[6,6],text:i.backup.notice}},[i.backup.id?n("v-uni-image",{staticClass:"image2",attrs:{src:i.charactersData[i.backup.id].avatar,mode:"aspectFill"}}):n("v-uni-image",{staticClass:"image2",attrs:{src:t("9399"),mode:"aspectFill"}})],1),n("v-uni-text",{staticClass:"text2"},[i._v("数据备份")])],1)],1)],1),n("v-uni-view",[n("uni-section",{attrs:{"show-icon":!0,rightText:"编辑",title:"收藏 - "+i.favTitle,color:"#fff",type:"line"},on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.goSort.apply(void 0,arguments)}}}),n("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},[i._l(i.favList,(function(a,t){return n("uni-grid-item",{key:t,staticClass:"uni-grid-item"},[n("v-uni-view",{staticClass:"grid-item-box",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.toDetail(a)}}},[n("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:i.favObj[a.name].stage,absolute:"rightTop",offset:[8,8],size:"small",customStyle:i.customStyle}},[n("v-uni-image",{staticClass:"image",attrs:{src:a.avatar,mode:"aspectFill"}})],1),n("v-uni-text",{staticClass:"text2"},[i._v(i._s(i.favObj[a.name].note?i.favObj[a.name].note:i.names[a.name]))])],1)],1)})),n("uni-grid-item",{directives:[{name:"show",rawName:"v-show",value:0==i.favList.length,expression:"favList.length == 0"}],staticClass:"uni-grid-item"},[n("v-uni-view",{staticClass:"grid-item-box",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.goSort()}}},[n("v-uni-view",{staticClass:"image icon-add"},[n("uni-icons",{attrs:{color:"#a0a0a0",type:"plusempty",size:"30"}})],1),n("v-uni-text",{staticClass:"text"},[i._v("添加")])],1)],1)],2)],1),n("v-uni-view",[n("uni-section",{attrs:{"show-icon":!0,rightText:"编辑",title:"所有 - "+i.allTitle,color:"#fff",type:"line"},on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.goSort.apply(void 0,arguments)}}}),n("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},i._l(i.allList,(function(a,t){return n("uni-grid-item",{key:t,staticClass:"uni-grid-item"},[n("v-uni-view",{staticClass:"grid-item-box",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.toDetail(a)}}},[n("v-uni-image",{staticClass:"image",attrs:{src:a.avatar,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"text"},[i._v(i._s(i.names[a.name]))])],1)],1)})),1)],1)],1)],1)},o=[]},9399:function(i,a,t){i.exports=t.p+"static/img/paimeng.39f10572.png"},"99ad":function(i,a,t){"use strict";var n=t("12e5"),e=t.n(n);e.a},"9ad11":function(i,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return e})),t.d(a,"a",(function(){}));var n=function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("v-uni-view",{staticClass:"uni-badge--x"},[i._t("default"),i.text?t("v-uni-text",{staticClass:"uni-badge",class:i.classNames,style:[i.positionStyle,i.customStyle,i.dotStyle],on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.onClick()}}},[i._v(i._s(i.displayValue))]):i._e()],2)},e=[]},a376:function(i,a,t){"use strict";t("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"update-notice",data:function(){return{notice:"2023年08月23日"}},mounted:function(){var i=uni.getStorageSync("ysin-notice-date");i!=this.notice&&this.$refs.popup.open()},methods:{dialogMore:function(){uni.setStorageSync("ysin-notice-date",this.notice),uni.switchTab({url:"/pages/my/my"})},dialogConfirm:function(){uni.setStorageSync("ysin-notice-date",this.notice)}}};a.default=n},ad10:function(i,a,t){"use strict";(function(i){t("7a82");var n=t("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("14d9"),t("4e82");var e=n(t("5530")),o=t("26cb"),u=n(t("7e1f")),s=t("065c"),r=n(t("ca5b")),c={data:function(){return{backup:{},daily:{avatar:"",text:""},names:{},key:"",charactersData:"",customStyle:{backgroundColor:"#00000087",color:"#fff",borderRadius:"4px",border:"none",fontSize:"16px"}}},computed:(0,e.default)({favTitle:function(){return this.favList.length},allTitle:function(){return this.allList.length}},(0,o.mapState)(["user","today","config","isBeta","version","favObj","favList","allList","profileData"])),onUnload:function(){uni.$off("initData")},onLoad:function(){this.names=r.default,u.default.init(),this.backup=u.default.backup,this.charactersData=s.charactersData,this.$store.commit("initToday");var i=uni.getStorageSync("ysin_config");i&&this.$store.commit("setConfig",i);var a=this;uni.$on("initData",(function(){a.initData()})),this.initData()},onShareAppMessage:function(a){return"button"===a.from&&i.log(a.target),{title:"Ysin - 原神角色练度计算",path:"/pages/index/index"}},methods:{goTest:function(){i.log("go Battle"),uni.navigateTo({url:"/pages/Battle/Battle"})},toggle:function(i){this.$refs.popup.open()},closeNotice:function(){uni.setStorageSync(this.readKey,!0)},initData:function(){var i=uni.getStorageSync("ysin_profileData");i&&this.$store.commit("setProfileData",i);var a=uni.getStorageSync("favObj");a||(a={});var t=[],n=[];for(var e in s.charactersData){var o=s.charactersData[e],u=a[o.name];u?u.isFav?(u.stage||(u.stage=0),t.push(o)):n.push(o):(a[o.name]={isFav:!1,note:"",tScore:0,dScore:0,stage:0,isScore:!1},n.push(o))}n.sort((function(i,a){return a.rank-i.rank})),t.sort((function(i,t){return a[t.name].index-a[i.name].index})),this.$store.commit("setFavObj",a),this.$store.commit("setAllList",n),this.$store.commit("setFavList",t),this.$store.commit("updateUserDaily")},getMore:function(){uni.switchTab({url:"/pages/my/my"})},getProfile:function(){uni.navigateTo({url:"../../package/pages/profile/profile?new=true"})},toProfileDetail:function(){uni.navigateTo({url:"../../package/pages/profile/detail"})},toAbyss:function(){uni.navigateTo({url:"../../package/pages/abyss/abyss"})},toDaily:function(){uni.navigateTo({url:"../../package/pages/today/daily"})},goSort:function(){uni.navigateTo({url:"sort"})},goLogin:function(i){uni.navigateTo({url:"/pages/my/login"})},toProfile:function(i){var a=this.profileData.list[i],t=s.charactersData[a.cId];this.$store.commit("setCharacter",t),this.$store.commit("setPreset",a),uni.navigateTo({url:"../../package/pages/character/detail?index="+i})},toDetail:function(i){this.$store.commit("setCharacter",i);var a=uni.getStorageSync(i.name);a?(a.cId||(a.cId=i.name),this.$store.commit("setPreset",a),uni.navigateTo({url:"../../package/pages/character/detail?cId="+i.name})):(this.$store.commit("initCharacter",i.name),uni.navigateTo({url:"../../package/pages/character/book/book?index=99"}))}}};a.default=c}).call(this,t("5a52")["default"])},b293:function(i,a,t){"use strict";t("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("a9e3");var n={name:"UniBadge",emits:["click"],props:{type:{type:String,default:"error"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:function(){return[0,0]}},text:{type:[String,Number],default:""},size:{type:String,default:"small"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{width:function(){return 8*String(this.text).length+12},classNames:function(){var i=this.inverted,a=this.type,t=this.size,n=this.absolute;return[i?"uni-badge--"+a+"-inverted":"","uni-badge--"+a,"uni-badge--"+t,n?"uni-badge--absolute":""].join(" ")},positionStyle:function(){if(!this.absolute)return{};var i=this.width/2,a=10;this.isDot&&(i=5,a=5);var t="".concat(-i+this.offset[0],"px"),n="".concat(-a+this.offset[1],"px"),e={rightTop:{right:t,top:n},rightBottom:{right:t,bottom:n},leftBottom:{left:t,bottom:n},leftTop:{left:t,top:n}},o=e[this.absolute];return o||e["rightTop"]},dotStyle:function(){return this.isDot?{width:"10px",minWidth:"0",height:"10px",padding:"0",borderRadius:"10px"}:{}},displayValue:function(){var i=this.isDot,a=this.text,t=this.maxNum;return i?"":Number(a)>t?"".concat(t,"+"):a}},methods:{onClick:function(){this.$emit("click")}}};a.default=n},bb13:function(i,a,t){var n=t("ff7c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=t("4f065").default;e("3728b1b8",n,!0,{sourceMap:!1,shadowMode:!1})},ca5b:function(i,a,t){"use strict";t("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default={10000086:"冰拳v1",10000087:"水炮v1",11427:"四星单手剑",12427:"四星双手剑",13427:"四星长枪",14426:"四星法器",14514:"五星法器（生命）",14513:"五星法器（攻击） ",15427:"四星弓",feimini:"菲米尼",linni:"林尼",linnite:"琳妮特",langya:"狼牙",haiyuanzhongqu:"海渊终曲",huihedushou:"灰河渡手",liaoliaobang:"聊聊棒",langyingkuojian:"浪影阔剑",xiawanchangge:"峡湾长歌",gongyidechoubao:"公义的酬报",yisiyulong:"遗祀玉珑",chunshuiliuhua:"纯水流华",lieyangzhisi:"烈阳之嗣",jingmizhiqu:"静谧之曲",zuichudedamoshu:"最初的大魔术",huangjinjutuan:"黄金剧团",zhuyinglieren:"逐影猎人",huanchuanzhihui:"鹮穿之喙",yuanmudao:"原木刀",senlinwangqi:"森林王器",lierenzhijing:"猎人之径",wangxiajinshi:"王下近侍",yingmanzhishi:"盈满之实",jieze:"竭泽",guanyueshi:"贯月矢",shengxianzhiyao:"圣显之钥",chishazhizhang:"赤沙之杖",liulangdewanxing:"流浪的晚星",mahailadeshuise:"玛海菈的水色",xifusideyueguang:"西福斯的月光",fengxinzhifeng:"风信之锋",qianyefumeng:"千夜浮梦",tulaiduladehuiyi:"图莱杜拉的回忆",donghuafangshiyu:"东花坊时雨",biluozhilong:"碧落之珑",bumieyuehua:"不灭月华",sifengyuandian:"四风原典",tiankongzhijuan:"天空之卷",chenshizhisuo:"尘世之锁",shenlezhizhenyi:"神乐之真意",koudaimodaoshu:"口袋魔导书",xuetubiji:"学徒笔记",yishijiexingji:"异世界行记",jiajibaojue:"甲级宝珏",feiyufaqiu:"翡玉法球",modaoxulun:"魔导绪论",wanguozhuhaitupu:"万国诸海图谱",xialiriyue:"匣里日月",dudukegushiji:"嘟嘟可故事集",zongshimifalu:"宗室秘法录",rendongzhiguo:"忍冬之果",zhaoxin:"昭心",anxiangdejiuyushi:"暗巷的酒与诗",liulangyuezhang:"流浪乐章",baichenzhihuan:"白辰之环",jilicanzhang:"祭礼残章",xifengmidian:"西风秘典",taolongyingjietan:"讨龙英杰谭",zhengshizhimingdong:"证誓之明瞳",shizuojinpo:"试作金珀",heiyanfeiyu:"黑岩绯玉",dongjibaixing:"冬极白星",tiankongzhiyi:"天空之翼",zhongmojietanzhishi:"终末嗟叹之诗",ruoshui:"若水",amosizhigong:"阿莫斯之弓",feileizhixianzhen:"飞雷之弦振",xinshi:"信使",liliandeliegong:"历练的猎弓",lveshizhe:"掠食者",liegong:"猎弓",shensheshouzhishi:"神射手之誓",yayugong:"鸦羽弓",fanqugong:"反曲弓",zongshichanggong:"宗室长弓",youyehuaerzi:"幽夜华尔兹",gongcang:"弓藏",dangong:"弹弓",anxianglieshou:"暗巷猎手",mengyunzhiyue:"朦云之月",pomozhigong:"破魔之弓",jiligong:"祭礼弓",juexian:"绝弦",cangcuiliegong:"苍翠猎弓",luoxia:"落霞",xifengliegong:"西风猎弓",shizuodanyue:"试作澹月",ganglungong:"钢轮弓",fenghuazhisong:"风花之颂",heiyanzhangong:"黑岩战弓",hepuyuan:"和璞鸢",tiankongzhiji:"天空之脊",xizai:"息灾",humozhizhang:"护摩之杖",ticaozhidaoguang:"薙草之稻光",guanhongzhishuo:"贯虹之槊",xinshouchangqiang:"新手长枪",yuemao:"钺矛",tiejianqiang:"铁尖枪",juedouzhiqiang:"决斗之枪",xialimiechen:"匣里灭辰",qianyanchangqiang:"千岩长枪",xiduoyuanshiwenzi:"喜多院十文字",zongshilieqiang:"宗室猎枪",duanlangchangqi:"断浪长鳍",liuyuezhen:"流月针",yuhuo:"渔获",baiyingqiang:"白缨枪",xifengchangqiang:"西风长枪",shizuoxinglian:"试作星镰",heiyanciqiang:"黑岩刺枪",heiyingqiang:"黑缨枪",longjichangqiang:"龙脊长枪",caiyecuiguang:"裁叶萃光",tiankongzhiren:"天空之刃",zhuofengzhiren:"斫峰之刃",boluanyuebaijingjin:"波乱月白经津",panyanjielv:"磐岩结绿",cangguziyouzhishi:"苍古自由之誓",wuqiezhihuiguang:"雾切之回光",fengyingjian:"风鹰剑",chihuyudao:"吃虎鱼刀",lvxingjian:"旅行剑",wufengjian:"无锋剑",antiejian:"暗铁剑",yinjian:"银剑",jianglinzhijian:"降临之剑",feitianyujian:"飞天御剑",lengren:"冷刃",xialilongyin:"匣里龙吟",tianmuyingdadao:"天目影打刀",zongshichangjian:"宗室长剑",anxiangshanguang:"暗巷闪光",jilijian:"祭礼剑",dijian:"笛剑",longdiaopinyixin:"笼钓瓶一心",fuzhizhijian:"腐殖之剑",xifengjian:"西风剑",shizuozhanyan:"试作斩岩",chenshazhifangchui:"辰砂之纺锤",tiefengci:"铁蜂刺",limingshenjian:"黎明神剑",heijian:"黑剑",heiyanchangjian:"黑岩长剑",shitiezhihua:"饰铁之花 ",weihaixinbiao:"苇海信标",tiankongzhiao:"天空之傲",wugongzhijian:"无工之剑",songlaixiangqizhishi:"松籁响起之时",langdemolu:"狼的末路",chijiaoshikuichu:"赤角石溃杵",yilifuren:"以理服人",yongbingzhongjian:"佣兵重剑",baitiedajian:"白铁大剑",xunliandajian:"训练大剑",tieyingkuojian:"铁影阔剑",feitiandayujian:"飞天大御剑",qianyangujian:"千岩古剑",zongshidajian:"宗室大剑",ewangwan:"恶王丸",guimuzhanchangzheng:"桂木斩长正",muyulongxuedejian:"沐浴龙血的剑",baiyingjian:"白影剑",jilidajian:"祭礼大剑",chigujian:"螭骨剑",xianzhuhaihuang:"衔珠海皇",xifengdajian:"西风大剑",shizuoguhua:"试作古华",zhongjian:"钟剑",yucai:"雨裁",xuezangdexingyin:"雪葬的星银",heiyanzhandao:"黑岩斩刀","5qianyan":"千岩牢固","5panyan":"悠古的磐岩",jiaoguan:"教官","5zongshi":"昔日宗室之仪",shenlindejiyi:"深林的记忆","5cuilv":"翠绿之影",shijinzhimeng:"饰金之梦",laiyunyuxiang:"来歆余响",chenshawangshenglu:"辰砂往生录",leyuanyiluozhihua:"乐园遗落之花",loushangshageshihua:"沙上楼阁史话",shuixianzhimeng:"水仙之梦",huahaiganluzhiguang:"花海甘露之光",wu:"散件","5bingfeng":"冰风迷途的勇士","5huaguan":"华馆梦醒形骸记","5rulei":"如雷的盛怒",shouhuzhixin:"守护之心","5pinglei":"平息鸣雷的尊者",zhankuang:"战狂","5ranxue":"染血的骑士道","5chenlun":"沉沦之心",liufang:"流放者","5yuetuan":"流浪大地的乐团","5hairan":"海染砗磲","5duhuo":"渡过烈火的贤人","5monv":"炽烈的炎之魔女","5jueyuan":"绝缘之旗印",cangbai:"苍白之火","5shaonv":"被怜爱的少女","5jiaodou":"角斗士的终幕礼","5zhuiyi":"追忆之注连","5nifei":"逆飞的流星",qiliangliang:"绮良良",baishu:"白术",kawei:"卡维",dixiya:"迪希雅",anbo:"安柏",bannite:"班尼特",diluke:"迪卢克",hutao:"胡桃",keli:"可莉",tuoma:"托马",xiangling:"香菱",xiaogong:"宵宫",xinyan:"辛焱",yanfei:"烟绯",kelai:"柯莱",tinali:"提纳里",naxida:"纳西妲",aierhaisen:"艾尔海森",yaoyao:"瑶瑶",mika:"米卡",ailuoyi:"埃洛伊",chongyun:"重云",diaona:"迪奥娜",ganyu:"甘雨",kaiya:"凯亚",laiyila:"莱依拉",luoshaliya:"罗莎莉亚",qiqi:"七七",shenhe:"申鹤",shenlilinghua:"神里绫华",youla:"优菈",abeiduo:"阿贝多",huanglongyidou:"荒泷一斗",ningguang:"凝光",nuoaier:"诺艾尔",wulang:"五郎",yunjin:"云堇",zhongli:"钟离",duoli:"多莉",sainuo:"赛诺",bachongshenzi:"八重神子",beidou:"北斗",feixieer:"菲谢尔",jiuqiren:"久岐忍",jiutiaoshaluo:"九条裟罗",keqing:"刻晴",leidianjiangjun:"雷电将军",leize:"雷泽",lisha:"丽莎",traveller:"荧",kong:"空",kandisi:"坎蒂丝",nilu:"妮露",babala:"芭芭拉",dadaliya:"达达利亚",mona:"莫娜",shanhugongxinhai:"珊瑚宫心海",shenlilingren:"神里绫人",xingqiu:"行秋",yelan:"夜兰",falushan:"珐露珊",liulangzhe:"流浪者",fengyuanwanye:"枫原万叶",luyeyuanpingzang:"鹿野院平藏",qin:"琴",shatang:"砂糖",wendi:"温迪",xiao:"魈",zaoyou:"早柚"}},d8a5:function(i,a,t){"use strict";t.r(a);var n=t("85a4"),e=t("31c1");for(var o in e)["default"].indexOf(o)<0&&function(i){t.d(a,i,(function(){return e[i]}))}(o);t("2d7b");var u=t("f0c5"),s=Object(u["a"])(e["default"],n["b"],n["c"],!1,null,"1c52728d",null,!1,n["a"],void 0);a["default"]=s.exports},ff7c:function(i,a,t){var n=t("24fb");a=n(!1),a.push([i.i,"\nuni-page-body[data-v-1c52728d]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#fff;min-height:100%;height:auto}body.?%PAGE?%[data-v-1c52728d]{background-color:#fff}uni-view[data-v-1c52728d]{font-size:14px;line-height:inherit}\n.example-body[data-v-1c52728d]{flex-direction:column;padding:15px;background-color:#fff}.uni-textarea[data-v-1c52728d]{width:auto!important}.image[data-v-1c52728d]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.image2[data-v-1c52728d]{\n\t/* margin-right: 30rpx; */\n\t/* \t\twidth: 100rpx;\n\theight: 100rpx;\n\tborder-radius: 8rpx; */width:%?110?%;height:%?110?%;border-radius:%?65?%;border:2px solid #d2c2bc\n\t/* 4px solid #f1f1f1; */}.notice[data-v-1c52728d]{background-color:rgba(185,203,255,.27058823529411763)!important\n\t/* \tfont-weight: 700;\n\tcolor: #b1968b!important; */}.text2[data-v-1c52728d]{text-align:center;font-size:13px;color:#333}.text[data-v-1c52728d]{text-align:center;font-size:13px;margin-top:6px;color:#333}.example-body[data-v-1c52728d]{\ndisplay:block\n}.uni-grid-item[data-v-1c52728d]{height:auto!important}.grid-item-box[data-v-1c52728d]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?28?% 0 %?8?%;margin:%?10?%;background:#f5f5f5;border-radius:%?8?%}.banner-image[data-v-1c52728d]{\nmax-width:500px;\nwidth:%?750?%;height:%?400?%}.swiper-box[data-v-1c52728d]{height:%?400?%}.search-icons[data-v-1c52728d]{padding:%?16?%}.search-container-bar[data-v-1c52728d]{\ndisplay:flex;\nflex-direction:row;justify-content:center;align-items:center;position:fixed;left:0;right:0;z-index:10;background-color:#fff}\n[data-v-1c52728d] .uni-searchbar__box{border-width:0}\n[data-v-1c52728d] .uni-input-placeholder{font-size:%?28?%}.card-actions[data-v-1c52728d]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-1c52728d]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-1c52728d]{font-size:12px;color:#666;margin-left:5px}.icon-add[data-v-1c52728d]{\n\t/* \t    border: 2px #a0a0a0 solid;\n\t    box-sizing: border-box; */display:flex;justify-content:center;align-items:center}.ys-item-box[data-v-1c52728d]{box-shadow:rgba(0,0,0,.08) 0 0 3px 1px;border:1px solid #dcdcdc;flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?16?% 0 %?16?%;margin:%?10?%;\n\t/* background: #f5f5f5; */border-radius:%?8?%}",""]),i.exports=a}}]);