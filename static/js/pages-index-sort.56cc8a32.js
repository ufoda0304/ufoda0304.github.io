(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-sort"],{"04227":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("99af"),i("fb6a"),i("a434"),i("c740"),i("14d9"),i("3c65"),i("4e82");var a=n(i("b85c")),o=n(i("5530")),s=i("26cb"),r=n(i("47d0")),c={data:function(){return{names:{},tempFavList:[],tempAllList:[],tempFavObj:{},tempConfig:{showOptions:[!0,!0,!0]},sortOptions:[["自定义","圣遗物练度","角色练度"],["正序","反序"]],sortIndexs:[0,0],customStyle:{backgroundColor:"#00000087",color:"#fff",borderRadius:"4px",border:"none",fontSize:"16px"}}},computed:(0,o.default)({},(0,s.mapState)(["favList","allList","favObj","config"])),onLoad:function(){uni.setNavigationBarTitle({title:"设置收藏角色"}),this.initData(),this.names=r.default},methods:{switchChange:function(t){this.tempConfig.showOptions[t]=!this.tempConfig.showOptions[t]},sortChange:function(t){this.sortIndexs=t.detail.value,this.sortItems(this.sortIndexs)},initData:function(){this.tempFavList=JSON.parse(JSON.stringify(this.favList)),this.tempAllList=JSON.parse(JSON.stringify(this.allList)),this.tempFavObj=JSON.parse(JSON.stringify(this.favObj)),this.tempConfig=JSON.parse(JSON.stringify(this.config))},initSortIndex:function(){this.sortIndexs!=[0,0]&&(this.sortIndexs=[0,0])},moveElement:function(t,e){return Math.abs(e)>t.length&&(e%=t.length),t.slice(-e).concat(t.slice(0,-e))},moveUp:function(t){if(t>0){var e=this.tempFavList.splice(t,1)[0];this.tempFavList.splice(t-1,0,e),this.initSortIndex()}},moveDown:function(t){if(t<this.tempFavList.length-1){var e=this.tempFavList.splice(t,1)[0];this.tempFavList.splice(t+1,0,e),this.initSortIndex()}},addItem:function(t){var e=this.tempAllList.findIndex((function(e){return e.name==t}));e>-1&&(this.tempFavList.push(this.tempAllList[e]),this.tempAllList.splice(e,1),this.tempFavObj[t].isFav=!0,this.initSortIndex())},removeItem:function(t){var e=this.tempFavList.findIndex((function(e){return e.name==t}));e>-1&&(this.tempAllList.unshift(this.tempFavList[e]),this.tempFavList.splice(e,1),this.tempFavObj[t].isFav=!1,this.initSortIndex())},sortItems:function(t){var e,i=this,n=0==t[1],o=(0,a.default)(this.tempFavList);try{for(o.s();!(e=o.n()).done;){var s=e.value,r=this.tempFavObj[s.name];if(void 0==r.isScore){var c=uni.getStorageSync(s.name);this.tempFavObj[s.name]=c?{isFav:!0,note:c.score,tScore:c.tResult.score,dScore:c.dResult.score,stage:c.cStage,isScore:!c.school||c.school.score}:{isFav:!1,note:"",tScore:0,dScore:0,stage:0,isScore:!1}}0==this.tempFavObj[s.name].isScore&&(0==this.tempFavObj[s.name].dScore?(this.tempFavObj[s.name].dScore=n?0:500,this.tempFavObj[s.name].tScore=n?0:500):(this.tempFavObj[s.name].dScore=n?1:500,this.tempFavObj[s.name].tScore=n?1:500))}}catch(u){o.e(u)}finally{o.f()}2==t[0]?this.tempFavList.sort((function(t,e){var a=i.tempFavObj[e.name],o=i.tempFavObj[t.name],s=a.dScore-o.dScore;return n?s:-1*s})):1==t[0]&&this.tempFavList.sort((function(t,e){var a=i.tempFavObj[e.name],o=i.tempFavObj[t.name],s=a.tScore-o.tScore;return n?s:-1*s}))},save:function(){for(var t=0;t<this.tempFavList.length;t++){var e=this.tempFavList[t].name;this.tempFavObj[e].index=1e4-t}this.$store.commit("setIndexList",{tempFavList:this.tempFavList,tempAllList:this.tempAllList,tempFavObj:this.tempFavObj}),uni.navigateBack({delta:1})}}};e.default=c},"07dd":function(t,e,i){"use strict";var n=i("cd50"),a=i.n(n);a.a},"0c9a":function(t,e,i){var n=i("7902");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b1ff7dec",n,!0,{sourceMap:!1,shadowMode:!1})},1274:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"ysinItemContent",props:{title:{type:String,default:""},note:{type:String,default:""}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},1291:function(t,e,i){"use strict";i.r(e);var n=i("6b9d"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1dfd":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},2481:function(t,e,i){"use strict";i.r(e);var n=i("1274"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},3621:function(t,e,i){"use strict";i.r(e);var n=i("6689"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"3d37":function(t,e,i){"use strict";i.r(e);var n=i("444b"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"3d81":function(t,e,i){"use strict";var n=i("0c9a"),a=i.n(n);a.a},"444b":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},"47d0":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={baishu:"v4草法",kawei:"v4草大剑",dixiya:"迪希雅",anbo:"安柏",bannite:"班尼特",diluke:"迪卢克",hutao:"胡桃",keli:"可莉",tuoma:"托马",xiangling:"香菱",xiaogong:"宵宫",xinyan:"辛焱",yanfei:"烟绯",kelai:"柯莱",tinali:"提纳里",naxida:"纳西妲",aierhaisen:"艾尔海森",yaoyao:"瑶瑶",mika:"米卡",ailuoyi:"埃洛伊",chongyun:"重云",diaona:"迪奥娜",ganyu:"甘雨",kaiya:"凯亚",laiyila:"莱依拉",luoshaliya:"罗莎莉亚",qiqi:"七七",shenhe:"申鹤",shenlilinghua:"神里绫华",youla:"优菈",abeiduo:"阿贝多",huanglongyidou:"荒泷一斗",ningguang:"凝光",nuoaier:"诺艾尔",wulang:"五郎",yunjin:"云堇",zhongli:"钟离",duoli:"多莉",sainuo:"赛诺",bachongshenzi:"八重神子",beidou:"北斗",feixieer:"菲谢尔",jiuqiren:"久岐忍",jiutiaoshaluo:"九条裟罗",keqing:"刻晴",leidianjiangjun:"雷电将军",leize:"雷泽",lisha:"丽莎",traveller:"荧",kong:"空",kandisi:"坎蒂丝",nilu:"妮露",babala:"芭芭拉",dadaliya:"达达利亚",mona:"莫娜",shanhugongxinhai:"珊瑚宫心海",shenlilingren:"神里绫人",xingqiu:"行秋",yelan:"夜兰",falushan:"珐露珊",liulangzhe:"流浪者",fengyuanwanye:"枫原万叶",luyeyuanpingzang:"鹿野院平藏",qin:"琴",shatang:"砂糖",wendi:"温迪",xiao:"魈",zaoyou:"早柚"}},6689:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"6b9d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},scroll:function(t){this.$emit("scroll",t)}}};e.default=n},"6c28":function(t,e,i){"use strict";i.r(e);var n=i("c56e"),a=i("d86f");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3d81");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"787a8b26",null,!1,n["a"],void 0);e["default"]=r.exports},"6c29":function(t,e,i){var n=i("a1ae");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("37f0ae79",n,!0,{sourceMap:!1,shadowMode:!1})},"748d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{height:"100px"}}),i("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content",style:{backgroundColor:t.color}},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:t.color}})],1)],1)},a=[]},7902:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-group[data-v-787a8b26]{display:flex;align-items:center;justify-content:center}.uni-group-item[data-v-787a8b26]{margin-left:10px;padding:0 10px;line-height:40px\n\t/* \twidth: 40px; */}",""]),t.exports=e},"89d3":function(t,e,i){"use strict";i.r(e);var n=i("bd7d"),a=i("3621");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e36a");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"42ced052",null,!1,n["a"],void 0);e["default"]=r.exports},"8ecb":function(t,e,i){"use strict";i.r(e);var n=i("aeb5"),a=i("2481");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("07dd");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"67b10928",null,!1,n["a"],void 0);e["default"]=r.exports},9293:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},a=[]},"9fa9":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".item-content[data-v-67b10928]{\ndisplay:flex;\npadding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.item-content-title[data-v-67b10928]{font-size:14px;color:#3b4144;overflow:hidden}.item-content-note[data-v-67b10928]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}",""]),t.exports=e},a1ae:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},add1:function(t,e,i){"use strict";i.r(e);var n=i("9293"),a=i("1291");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("ffd4");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6fce09b0",null,!1,n["a"],void 0);e["default"]=r.exports},aeb5:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"item-content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.title?i("v-uni-text",{staticClass:"item-content-title"},[t._v(t._s(t.title))]):t._e(),t.note?i("v-uni-text",{staticClass:"item-content-note"},[t._v(t._s(t.note))]):t._e()],1)},a=[]},bcee:function(t,e,i){"use strict";var n=i("e52b"),a=i.n(n);a.a},bd7d:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("fcef").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},c56e:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniSection:i("89d3").default,uniList:i("add1").default,uniListItem:i("6e18").default,ysinItemContent:i("8ecb").default,uniIcons:i("fcef").default,buttonBarBottom:i("e265").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-section",{attrs:{title:"已收藏",type:"line"}}),i("uni-list",{attrs:{border:!1}},[i("v-uni-picker",{attrs:{mode:"multiSelector",value:t.sortIndexs,range:t.sortOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"自动排序",note:"对已收藏的角色排序",rightText:t.sortOptions[0][t.sortIndexs[0]]}})],1),t._l(t.tempFavList,(function(e,n){return i("uni-list-item",{key:n,attrs:{"thumb-size":"lg",thumb:e.avatar,title:t.tempFavObj[e.name].note?t.tempFavObj[e.name].note:e.chs},scopedSlots:t._u([{key:"body",fn:function(){return[i("ysin-item-content",{attrs:{title:t.tempFavObj[e.name].note?t.tempFavObj[e.name].note:t.names[e.name]},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.removeItem(e.name)}}})]},proxy:!0},{key:"footer",fn:function(){return[i("v-uni-view",{staticClass:"uni-group"},[i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveUp(n)}}},[i("uni-icons",{attrs:{type:"arrow-up"}})],1),i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveDown(n)}}},[i("uni-icons",{attrs:{type:"arrow-down"}})],1)],1)]},proxy:!0}],null,!0)})}))],2),i("uni-section",{attrs:{title:"未收藏 ",type:"line"}}),i("uni-list",{attrs:{border:!1}},t._l(t.tempAllList,(function(e,n){return i("uni-list-item",{key:n,attrs:{clickable:!0,"thumb-size":"lg",thumb:e.avatar,title:t.names[e.name],rightText:t.tempFavObj[e.name].note?t.tempFavObj[e.name].note:"未初始化"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addItem(e.name)}}})})),1),i("button-bar-bottom",{attrs:{text:"保存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],1)},o=[]},cd50:function(t,e,i){var n=i("9fa9");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("76c6e9fd",n,!0,{sourceMap:!1,shadowMode:!1})},d69f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},d86f:function(t,e,i){"use strict";i.r(e);var n=i("04227"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e265:function(t,e,i){"use strict";i.r(e);var n=i("748d"),a=i("3d37");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("bcee");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"d83b913c",null,!1,n["a"],void 0);e["default"]=r.exports},e36a:function(t,e,i){"use strict";var n=i("fa22"),a=i.n(n);a.a},e52b:function(t,e,i){var n=i("1dfd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1143f6dc",n,!0,{sourceMap:!1,shadowMode:!1})},fa22:function(t,e,i){var n=i("d69f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2403413f",n,!0,{sourceMap:!1,shadowMode:!1})},ffd4:function(t,e,i){"use strict";var n=i("6c29"),a=i.n(n);a.a}}]);