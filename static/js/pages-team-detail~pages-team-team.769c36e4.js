(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-team-detail~pages-team-team"],{"0eae":function(e,i,t){var a=t("c363");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("4f06").default;n("0a61cfa4",a,!0,{sourceMap:!1,shadowMode:!1})},1148:function(e,i,t){"use strict";var a=t("a691"),n=t("1d80");e.exports="".repeat||function(e){var i=String(n(this)),t="",l=a(e);if(l<0||l==1/0)throw RangeError("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(i+=i))1&l&&(t+=i);return t}},"38cf":function(e,i,t){var a=t("23e7"),n=t("1148");a({target:"String",proto:!0},{repeat:n})},"408b":function(e,i,t){"use strict";t.r(i);var a=t("9d27"),n=t.n(a);for(var l in a)"default"!==l&&function(e){t.d(i,e,(function(){return a[e]}))}(l);i["default"]=n.a},5083:function(e,i,t){"use strict";t.r(i);var a=t("a3e7"),n=t("408b");for(var l in n)"default"!==l&&function(e){t.d(i,e,(function(){return n[e]}))}(l);t("b3ec");var s,r=t("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6d06604a",null,!1,a["a"],s);i["default"]=o.exports},6676:function(e,i,t){"use strict";var a=t("4ea4");t("c975"),t("e25e"),t("38cf"),Object.defineProperty(i,"__esModule",{value:!0}),i.getTeamData=c;var n=a(t("5530")),l=a(t("b85c")),s=t("44c1"),r=t("af5a"),o=(t("2fb7"),t("6835")),u=t("add3"),d=["无","蒸发 - ","融化 - "];function c(e,i){var t,a=JSON.parse(JSON.stringify(e)),c={},f={fire:0,rock:0,wind:0,ice:0,thunder:0,water:0},g=[],x=[],b=(0,l.default)(a.cIds);try{for(b.s();!(t=b.n()).done;){var h=t.value,p=(0,o.getPreset)(h,i);x.push(p),f[p.element]+=1}}catch(re){b.e(re)}finally{b.f()}for(var v=0,q=x;v<q.length;v++){var k=q[v];if(k.effects){var _,y=(0,l.default)(k.effects);try{for(y.s();!(_=y.n()).done;){var j=_.value;c[j.id]=j}}catch(re){y.e(re)}finally{y.f()}}}f.fire>1&&g.push({id:"shuanghuo",title:"共鸣 - 双火",text:"攻击力提升25%"}),f.ice>1&&(c.shuangbing={id:"shuangbing",title:"共鸣 - 双冰",text:"暴击率提升15%"}),f.rock>1&&g.push({id:"shuangyan",title:"共鸣 - 双岩",text:"伤害提升15%,目标岩元素抗性降低15%"}),f.ice>0&&f.thunder>0&&(c.chaodao={id:"chaodao",title:"效果 - 超导",text:"目标物理抗性降低40%"});var E=a.skillFamilies;a.score=0;var m,Q=(0,l.default)(a.results);try{for(Q.s();!(m=Q.n()).done;){var A=m.value;A.score=0;var w,z=A.index,T=x[z],C=r.characterDamage[A.id],S=(0,l.default)(A.actions);try{for(S.s();!(w=S.n()).done;){var N=w.value,F=[],Z=[];if(N.buffs){var O,P=(0,l.default)(N.buffs);try{for(P.s();!(O=P.n()).done;){var I=O.value,D=c[I];D&&F.push(D)}}catch(re){P.e(re)}finally{P.f()}}var M=(0,n.default)({},T);N.type?(M.type=N.type,N.text=d[N.type]):(M.type=-1,N.text=""),M.tIds=a.cIds;var B=null;if(N.aConfig){var $=N.aConfig[T.aIds[0]];!T.aSets&&$&&(B=$)}var G=null;N.wConfig&&(G=N.wConfig[T.wId]);var H=(0,s.buildTeamAttribute)(M,g,F,G,B);H.isTeam=!0,H.buffTexts&&(Z=H.buffTexts),H.wBuff&&Z.unshift(H.wBuff);var J=N.skills[0][0];if("u"==J)H.jType=N.jType,C.get(H),N.score=H.damage*N.repeat[0],N.formula=H.formula+" * "+N.repeat[0];else{var U=0,V=0,L=M["cSkills"];V="q"==J?L[2]:"e"==J?L[1]:L[0];for(var R=0;R<N.skills.length;R++){var W=N.skills[R],Y=E[z][W][V];N.repeat?U+=Y*N.repeat[R]:U+=Y;var K=N.skillFix;if(K&&M.cStage>=K.stage){var X=K.skills.indexOf(W);X>-1&&(U+=Y*K.repeat[X]),N.extraNote=K.extraNote}}H.skills.push({element:N.element,title:N.title,key:J,level:U}),C.get(H),N.score=H.score,N.formula=H.formula,N.extraNote&&Z.unshift(N.extraNote)}Z.length>0?N.note=Z.join(" | "):N.note="无",A.score+=parseInt(N.score),N.text+=(1*N.score).toFixed(0)}}catch(re){S.e(re)}finally{S.f()}a.score+=A.score}}catch(re){Q.e(re)}finally{Q.f()}var ee,ie=(0,l.default)(a.results);try{for(ie.s();!(ee=ie.n()).done;){var te=ee.value,ae=(te.score/a.score*100).toFixed(0)+"%";te.sText=te.score+" / "+ae}}catch(re){ie.e(re)}finally{ie.f()}a.sText=a.score+"/ 100%";var ne=a.score/a.time;a.text=ne.toFixed(0);var le=(ne/5e4*100).toFixed(0),se=(0,u.getColor)(le);return a.result.color=se,a.result.score=le,a}},"6ae0":function(e,i,t){var a={"./优雷修班23.js":"a49f5","./雷神国家队.js":"b356","./雷神国家队21.js":"baca"};function n(e){var i=l(e);return t(i)}function l(e){if(!t.o(a,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=l,e.exports=n,n.id="6ae0"},"6f0e":function(e,i,t){"use strict";var a=t("4ea4");t("d3b7"),t("ddb0"),Object.defineProperty(i,"__esModule",{value:!0}),i.Teams=void 0;var n=a(t("b85c")),l={};function s(e){var i,t=(0,n.default)(e.keys());try{for(t.s();!(i=t.n()).done;){var a=i.value,s=e(a).default;l[s.id]=s}}catch(r){t.e(r)}finally{t.f()}}s(t("6ae0"));var r=l;i.Teams=r},"9d27":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(e){this.$emit("click",e)}}};i.default=a},a3e7:function(e,i,t){"use strict";var a;t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return l})),t.d(i,"a",(function(){return a}));var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":e.isFull,"uni-card--shadow":e.isShadow,"uni-card--border":e.border},style:{margin:e.isFull?0:e.margin,padding:e.spacing,"box-shadow":e.isShadow?e.shadow:""}},[e._t("cover",[e.cover?t("v-uni-view",{staticClass:"uni-card__cover"},[t("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:e.cover},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onClick("cover")}}})],1):e._e()]),e._t("title",[e.title||e.extra?t("v-uni-view",{staticClass:"uni-card__header"},[t("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onClick("title")}}},[e.thumbnail?t("v-uni-view",{staticClass:"uni-card__header-avatar"},[t("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:e.thumbnail,mode:"aspectFit"}})],1):e._e(),t("v-uni-view",{staticClass:"uni-card__header-content"},[t("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[e._v(e._s(e.title))]),e.title&&e.subTitle?t("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[e._v(e._s(e.subTitle))]):e._e()],1)],1),t("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onClick("extra")}}},[t("v-uni-text",{staticClass:"uni-card__header-extra-text"},[e._v(e._s(e.extra))])],1)],1):e._e()]),t("v-uni-view",{staticClass:"uni-card__content",style:{padding:e.padding},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onClick("content")}}},[e._t("default")],2),t("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onClick("actions")}}},[e._t("actions")],2)],2)},l=[]},a49f5:function(e,i,t){"use strict";var a=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(t("a02c")),l=a(t("a4eb")),s=a(t("c54a")),r=a(t("0c91")),o={id:"youleixiuban",name:"优雷修班（23秒轴 @VanDarkhelmet）",sTitle:"优雷修班 23秒轴",sText:"总伤害 / 占比",title:"",text:"",time:23,from:"NGA @VanDarkhelmet",cIds:["youla","leidianjiangjun","luoshaliya","bannite"],skillFamilies:[r.default,n.default,l.default,s.default],note:"共鸣 - 双冰",teamBuffs:[],result:{score:0,color:""},results:[{requires:[{title:"充能低于166.6%",recharge:166.6}],notices:[],id:"leidianjiangjun",index:1,sTitle:"雷电将军 100 / 200",sText:"伤害 / 占比",title:"等级命座",note:"武器，圣遗物",text:"秒伤",actions:[{title:"梦想真说 Q",buffs:["leidianjiangjunE","songlaixiangqizhishi","shuangbing"],skills:["q1","qbonus1"],repeat:[1,50],extraNote:"50层愿力",skillFix:{stage:1,skills:["qbonus1"],repeat:[10],extraNote:"60层愿力"}},{title:"梦想真说 AAAZ*2 + AZ",buffs:["leidianjiangjunE","songlaixiangqizhishi"],skills:["qa1","qa2","qa3","qb1","qb2","qbonus2"],repeat:[3,2,2,3,3,650],extraNote:"50层愿力",skillFix:{stage:1,skills:["qbonus2"],repeat:[130],extraNote:"60层愿力"}},{title:"恶曜开眼 E2 * 7",buffs:["songlaixiangqizhishi"],skills:["e2"],repeat:[7]},{wConfig:{ticaozhidaoguang:{enable:!1}},title:"恶曜开眼 E2 * 7",buffs:["songlaixiangqizhishi","luoshaliyaT","shuangbing"],skills:["e2"],repeat:[7]},{wConfig:{ticaozhidaoguang:{enable:!1}},title:"恶曜开眼 E2 * 4",buffs:["shuangbing"],skills:["e2"],repeat:[4]},{wConfig:{ticaozhidaoguang:{enable:!1}},title:"恶曜开眼 E1",skills:["e1"]},{wConfig:{ticaozhidaoguang:{enable:!1}},title:"超导 * 6",jType:0,buffs:[""],skills:["u"],repeat:[6]}]},{id:"youla",index:0,title:"等级命座",note:"武器，圣遗物",text:"伤害",requires:[{title:"充能低于127.40%",recharge:127.4}],notices:[],actions:[{aConfig:{cangbai:{level:2}},buffs:["5zongshi","songlaixiangqizhishi","banniteQ","leidianjiangjunE","luoshaliyaT","shuangbing","chaodao","youlaE","luoshaliya6","youla1"],title:"凝浪之光剑 Q2",skills:["q2","q3"],repeat:[1,13],extraNote:"13层",skillFix:{stage:6,skills:["q3"],repeat:[10],extraNote:"23层"}},{aConfig:{cangbai:{level:2}},buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","chaodao","luoshaliya6","youlaE","youla1"],title:"普通攻击 aaaa",skills:["a1","a2","a31","a32","a4"]},{aConfig:{cangbai:{level:2}},buffs:["5zongshi","songlaixiangqizhishi","banniteQ","leidianjiangjunE","luoshaliyaT","shuangbing","chaodao","youlaE","luoshaliya6","youla1"],title:"冰潮的涡旋 E光剑",skills:["q2"],repeat:[.5]},{aConfig:{cangbai:{level:2}},element:"ice",buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","youlaE","youla1"],title:"凝浪之光剑 E冰剑 * 2",skills:["e3"],repeat:[2]},{aConfig:{cangbai:{level:1}},element:"ice",buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","youla1"],title:"凝浪之光剑 长按E2",skills:["e2"]},{aConfig:{cangbai:{level:1}},buffs:["5zongshi","banniteQ","luoshaliyaT","shuangbing","chaodao","luoshaliya6"],title:"普通攻击 aaaa",skills:["a1","a2","a31","a32","a4"]},{aConfig:{cangbai:{level:1}},element:"ice",buffs:["5zongshi","banniteQ","luoshaliyaT","shuangbing","leidianjiangjunE"],title:"凝浪之光剑 Q1",skills:["q1"]},{aConfig:{cangbai:{level:0}},element:"ice",buffs:["shuangbing"],title:"凝浪之光剑 E1",skills:["e1"]}]},{id:"bannite",index:3,title:"等级命座",note:"武器，圣遗物",text:"伤害",notices:[],requires:[{title:"充能低于173.68%",recharge:173.68}],actions:[{title:"Q",type:2,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","shuangbing","songlaixiangqizhishi"],skills:["q1"]}]},{id:"luoshaliya",index:2,title:"等级命座",note:"武器，圣遗物",text:"伤害",notices:[],requires:[{title:"未佩戴西方长枪,可能会影响循环",wId:"xifengchangqiang"},{title:"充能低于106.45%",recharge:106.45}],actions:[{title:"噬罪的告解 E",buffs:[],skills:["e11","e12"]},{title:"终命的圣礼 Q1 + Q2 * 3",buffs:["banniteQ","shuangbing","luoshaliyaT","leidianjiangjunE"],skills:["q11","q12","q2"],repeat:[1,1,3]},{title:"终命的圣礼 Q2 * 3",buffs:["banniteQ","shuangbing","luoshaliyaT","youlaE","leidianjiangjunE"],skills:["q2"],repeat:[3]},{title:"噬罪的告解 E",buffs:["banniteQ","shuangbing","luoshaliyaT","youlaE","leidianjiangjunE","songlaxiangqizhishi","5zongshi"],skills:["e11","e12"]}]}],sequence:[{index:0,title:"E ",text:"1s"},{index:3,title:"E   ",text:"1s"},{index:1,title:"E  ",text:"1s"},{index:2,title:"Q   ",text:"1s"},{index:3,title:"Q      ",text:"1s"},{index:1,title:"Qaaaa + Eaaaa",text:"10s"},{index:3,title:"E      ",text:"1s"},{index:0,title:"Q AAAZ AAAZ  AZ ",text:"7s"}]};i.default=o},b356:function(e,i,t){"use strict";var a=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(t("a02c")),l=a(t("d403")),s=a(t("c54a")),r=a(t("d79f")),o={id:"leishenguojiadui",name:"雷神国家队（23秒轴 @bluemushoom）",sTitle:"雷神国家队 23秒轴",sText:"总伤害 / 占比",title:"阵容DPS",text:"阵容DPS",time:23,from:"NGA @bluemushoom",cIds:["leidianjiangjun","xingqiu","bannite","xiangling"],skillFamilies:[n.default,l.default,s.default,r.default],note:"共鸣 - 双火",teamBuffs:[],result:{score:0,color:""},results:[{requires:[{title:"充能低于204.25%",recharge:204.25}],notices:[],id:"leidianjiangjun",index:0,sTitle:"雷电将军 100 / 200",sText:"伤害 / 占比",title:"等级命座",note:"武器，圣遗物",text:"秒伤",from:"",actions:[{title:"QAAAZAAAZ",buffs:["leidianjiangjunE","banniteQ","5zongshi"],skills:["q1","qa1","qa2","qa3","qb1","qb2","qbonus1","qbonus2"],repeat:[1,2,2,2,2,2,54,540],extraNote:"54层愿力",skillFix:{stage:1,skills:["qbonus1","qbonus2"],repeat:[6,60],extraNote:"60层愿力"}},{title:"AAAZ AZ",note:"无增益",buffs:["leidianjiangjunE","banniteQ"],skills:["qbonus2","qa1","qa2","qa3","qb1","qb2"],repeat:[432,2,1,1,2,2],extraNote:"54层愿力",skillFix:{stage:1,skills:["qbonus1","qbonus2"],repeat:[6,60],extraNote:"60层愿力"}},{title:"E2*9",note:"班尼特Q",buffs:["banniteQ","5zongshi"],skills:["e2"],repeat:[9]},{note:"无增益",title:"E1+E2*9",skills:["e1","e2"],repeat:[1,11]}]},{requires:[{title:"未佩戴祭礼剑",wId:"jilijian"},{title:"充能低于146.97%",recharge:146.97}],notices:[],id:"xingqiu",index:1,title:"等级命座",note:"武器，圣遗物",text:"伤害",actions:[{index:1,title:"E",note:"班尼特Q",buffs:["banniteQ","5zongshi"],type:1,skills:["e1","e2"]},{index:1,title:"E",note:"无增益",buffs:["banniteQ","5zongshi"],skills:["e1","e2"]},{index:1,title:"Q*20",note:"班尼特Q",buffs:["leidianjiangjunE"],skills:["q1"],repeat:[20]},{index:1,title:"Q*10",buffs:["leidianjiangjunE"],skills:["q1"],repeat:[10]},{index:1,title:"感电*7",jType:2,buffs:[""],skills:["u"],repeat:[7]}]},{notices:[],requires:[{title:"充能低于119.11%",recharge:119.11}],id:"bannite",index:2,title:"等级命座",note:"武器，圣遗物",text:"伤害",actions:[{title:"Q",note:"班尼特Q",type:1,buffs:["banniteQ","leidianjiangjunE"],skills:["q1"]},{title:"E",note:"无增益",buffs:["banniteQ"],skills:["e1"]},{title:"E",note:"无增益",skills:["e1"]}]},{notices:[],requires:[{title:"命座低于四命",cStage:4},{title:"充能低于180.71%",recharge:180.71}],id:"xiangling",index:3,title:"等级命座",note:"武器，圣遗物",text:"伤害",actions:[{title:"Q4*9+Q1",type:1,buffs:["banniteQ","leidianjiangjunE","5zongshi","xiangling1"],note:"蒸发(150%)",skills:["q4","q1"],repeat:[9,1]},{title:"Q4*2+Q2+Q3",buffs:["banniteQ","leidianjiangjunE","5zongshi","xiangling1"],skills:["q4","q2","q3"],repeat:[2,1,1]},{title:"E*2",buffs:["banniteQ","5zongshi","xiangling1"],note:"蒸发(150%)",type:1,skills:["e1"],repeat:[2]},{note:"无增益",title:"E*2",skills:["e1"],buffs:["banniteQ","5zongshi","xiangling1"],repeat:[2]},{index:1,title:"超载*9",jType:4,buffs:["xiangling1"],skills:["u"],repeat:[9]}]}],sequence:[{id:"leidianjiangjun",index:0,title:"E",text:"1s"},{id:"xingqiu",index:1,title:"Q",text:"1s"},{id:"bannite",index:2,title:"Q E A",text:"2.5s"},{id:"xiangling",index:3,title:"E A Q",text:"2.5s"},{id:"xingqiu",index:1,title:"E A E",text:"3s"},{id:"leidianjiangjun",index:0,title:"Q AAAZ AAAZ AAAZ AZ ",text:"9.5s"},{id:"bannite",index:2,title:"E ",text:"1s"},{id:"xiangling",index:3,title:"AAA",text:"2s"}]};i.default=o},b3ec:function(e,i,t){"use strict";var a=t("0eae"),n=t.n(a);n.a},baca:function(e,i,t){"use strict";var a=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(t("a02c")),l=a(t("d403")),s=a(t("c54a")),r=a(t("d79f")),o={id:"leishenguojiadui2",name:"雷神国家队（21秒轴 @梦魇敌酋）",sTitle:"雷神国家队 21秒轴",sText:"总伤害 / 占比",title:"阵容DPS",text:"阵容DPS",time:21,from:"NGA @梦魇敌酋",cIds:["leidianjiangjun","xingqiu","bannite","xiangling"],skillFamilies:[n.default,l.default,s.default,r.default],note:"共鸣 - 双火",teamBuffs:[],result:{score:0,color:""},results:[{requires:[{title:"充能低于204.25%",recharge:204.25}],notices:[],id:"leidianjiangjun",index:0,sTitle:"雷电将军 100 / 200",sText:"伤害 / 占比",title:"等级命座",note:"武器，圣遗物",text:"秒伤",actions:[{index:0,name:"Q+AAAZ+AAAZ",title:"梦想真说 Q+AAAZ * 2",buffs:["banniteQ","leidianjiangjunE","5zongshi","ticaozhidaoguang"],skills:["q1","qa1","qa2","qa3","qb1","qb2","qbonus1","qbonus2"],repeat:[1,2,2,2,2,2,54,540],extraNote:"54层愿力",skillFix:{stage:1,skills:["qbonus1","qbonus2"],repeat:[6,60],extraNote:"60层愿力"}},{title:"梦想真说 AAAZ",buffs:["leidianjiangjunE","banniteQ"],skills:["qbonus2","qa1","qa2","qa3","qb1","qb2"],repeat:[270,1,1,1,1,1],extraNote:"54层愿力",skillFix:{stage:1,skills:["qbonus2"],repeat:[30],extraNote:"60层愿力"}},{title:"梦想真说 AZ",buffs:["leidianjiangjunE"],skills:["qbonus2","qa1","qb1","qb2"],repeat:[162,1,1,1],extraNote:"54层愿力",skillFix:{stage:1,skills:["qbonus2"],repeat:[18],extraNote:"60层愿力"}},{title:"恶曜开眼 E2 * 9",buffs:["banniteQ","5zongshi"],skills:["e2"],repeat:[9]},{wConfig:{ticaozhidaoguang:{enable:!1}},title:"恶曜开眼 E1+E2 * 9",skills:["e1","e2"],repeat:[1,9]}]},{id:"xingqiu",index:1,title:"等级命座",note:"武器，圣遗物",text:"伤害",requires:[{title:"充能低于146.97%",recharge:146.97}],notices:[],actions:[{index:1,buffs:["xingqiu2"],title:"画雨笼山 E",skills:["e1","e2"]},{index:1,title:"裁雨留虹 Q * 5",buffs:["leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[5]},{index:1,title:"裁雨留虹 Q * 30",buffs:["5zongshi","leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[30]},{index:1,title:"裁雨留虹 Q * 10",buffs:["leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[10]},{index:1,title:"感电 * 9",jType:2,buffs:[""],skills:["u"],repeat:[9]}]},{id:"bannite",index:2,title:"等级命座",note:"武器，圣遗物",text:"伤害",notices:[],requires:[{title:"充能低于119.11%",recharge:119.11}],actions:[{title:"热情过载 E",skills:["e1"]},{title:"美妙旅程 Q",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q1"]},{title:"热情过载 E",type:1,buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{title:"热情过载 E",buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{index:1,title:"超载 * 3",jType:4,skills:["u"],repeat:[3]}]},{id:"xiangling",index:3,title:"等级命座",note:"武器，圣遗物",text:"伤害",notices:[],requires:[{title:"命座低于四命",cStage:4},{title:"充能低于180.71%",recharge:180.71}],actions:[{title:"旋火轮 Q1",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q1"]},{title:"旋火轮 Q2+Q3",buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling6"],skills:["q2","q3"]},{title:"旋火轮 Q4 * 3",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q4"],repeat:[3]},{title:"旋火轮 Q4",buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling1"],skills:["q4"]},{title:"旋火轮 Q4 * 7",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling1"],skills:["q4"],repeat:[7]},{title:"锅巴出击 E",buffs:["banniteQ","bannite6","5zongshi","xiangling6"],type:1,skills:["e1"],repeat:[1]},{type:1,title:"锅巴出击 E * 3",skills:["e1"],buffs:["banniteQ","bannite6","5zongshi","xiangling1","xiangling6"],repeat:[3]},{index:1,title:"超载 * 3",jType:4,skills:["u"],repeat:[3]},{index:1,title:"超载 * 4",jType:4,buffs:["xiangling1"],skills:["u"],repeat:[4]}]}],sequence:[{index:0,title:"E",text:"1s"},{index:2,title:"E ",text:"1s"},{index:1,title:"Q E 吃球",text:"3s"},{index:2,title:"Q E ",text:"2s"},{index:3,title:"Q E  ",text:"3s"},{index:2,title:"E   ",text:"1s"},{index:0,title:"Q AAAZ AAAZ AAAZ AZ ",text:"10s"}]};i.default=o},c363:function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),e.exports=i}}]);