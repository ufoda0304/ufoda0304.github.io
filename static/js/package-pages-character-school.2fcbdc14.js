(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-school"],{"00d0":function(e,t,a){"use strict";a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.maximize=function(e,t,a,r,n){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"Brute",d={atk:[0,37],hp:[0,37],def:[0,37],em:[0,35],er:[0,35],cr:[0,35],cd:[0,35]};if(a){if(a.length>3)throw new Error("主词条列表长度不超过3，得到"+a.length);var f,v=(0,o.default)(a);try{for(v.s();!(f=v.n()).done;){var g=f.value;g in d&&(["atk","hp","def"].includes(g)?d[g][1]-=5:d[g][1]-=7)}}catch(N){v.e(N)}finally{v.f()}}if(n)for(var p in d)if(p in n&&(d[p][0]=Math.max(d[p][0],Math.ceil(n[p][0])),d[p][1]=Math.min(d[p][1],Math.floor(n[p][1])),d[p][0]>d[p][1]))throw new Error("".concat(p,"的实际取值范围无效：[").concat(d[p][0],", ").concat(d[p][1],"]"));if(r)for(var h in d)r.includes(h)||(d[h][1]=d[h][0]);var x=[],m=0,b=0;for(var _ in d)d[_][0]<d[_][1]&&x.push(_),m+=d[_][0],b+=d[_][1];if(t<m||t>b)throw new Error("没有可行解，因为".concat(t,"不在[").concat(m,", ").concat(b,"]内"));if(x.length<=1){var S={};for(var E in d)S[E]=Math.min(t-m+d[E][0],d[E][1]);return{statBest:S,dmgBest:e(S)}}if(t==m){var T={};for(var w in d)T[w]=d[w][0];return{statBest:T,dmgBest:e(T)}}if(t==b){var C={};for(var y in d)C[y]=d[y][1];return{statBest:C,dmgBest:e(C)}}switch(u){case"Brute":return i(e,t,d);case"BruteTwice":return s(e,t,d);case"NelderMead":return c(e,t,d);case"NelderMeadBrute":return l(e,t,d);default:throw new Error("未知的优化方法："+u)}},a("14d9"),a("4e82"),a("d9e2"),a("d401"),a("caad"),a("99af"),a("2532");var o=r(a("b85c")),n=r(a("5530"));function i(e,t,a){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o={},i=0,s=["cr","cd","atk","em","hp","def","er"],c={},l=0,u=0,d=s.length-1;d>=0;--d)c[s[d]]=[l,u],l+=a[s[d]][0],u+=a[s[d]][1];function f(t,l){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,v=s[u];if(u==s.length-1){if(l+d>41)return;t[v]=l;var g=e(t);g>i&&(i=g,o=(0,n.default)({},t))}else for(var p=Math.max(a[v][0],l-c[v][1]),h=Math.min(a[v][1],l-c[v][0],41-d),x=p;x<=h;x+=r)t[v]=x,f(t,l-x,u+1,Math.max(d,x))}return t=Math.floor(t),f({},t),{statBest:o,dmgBest:i}}function s(e,t,a){var r=i(e,t,a,2),o=r.statBest,n=(r.dmgBest,{});for(var s in a)n[s]=[a[s][0],a[s][1]],s in o&&(n[s][0]=Math.max(n[s][0],o[s]-3),n[s][1]=Math.min(n[s][1],o[s]+3));return i(e,t,n)}function c(e,t,a){function r(t){var r=[];for(var o in t){if(o in a&&(t[o]<a[o][0]||t[o]>a[o][1]))return 0;t[o]>0&&r.push(t[o])}return r.sort((function(e,t){return t-e})),r.length>=2&&r[0]+r[1]>41?0:e(t)}var o=0,n=[],i=0,s=0,c=[];for(var l in a)if(i+=a[l][0],a[l][0]<a[l][1]){o++,n.push(l);var u=Math.random();s+=u*(a[l][1]-a[l][0]),c.push(u)}for(var d=[],f=0;f<n.length;++f){var v=n[f],g=(t-i)/(s+.1*c[f]*(a[v][1]-a[v][0])),p={};for(var h in a)p[h]=a[h][0];for(var x=0;x<n.length;++x){var m=n[x],b=a[m][1]-a[m][0];p[m]+=g*c[x]*b,m==v&&(p[m]+=.1*g*c[x]*b)}d.push({stat:p,dmg:r(p)})}function _(){d.sort((function(e,t){return t.dmg-e.dmg}))}function S(e,t,o,n){var i={stat:{},dmg:0};for(var s in a)i.stat[s]=e*t.stat[s]+o*n.stat[s];return i.dmg=r(i.stat),i}for(var E=0;E<2e3;++E){_();var T=0;for(var w in a)T=Math.max(T,Math.abs(d[0].stat[w]-d[1].stat[w]));if(Math.abs(d[0].dmg-d[o-1].dmg)<1e-5&&T<1e-5)break;var C={stat:{},dmg:0};for(var y in a){C.stat[y]=0;for(var N=0;N<o-1;++N)C.stat[y]+=d[N].stat[y];C.stat[y]/=o-1}var A=d[o-1],R=S(2,C,-1,A);if(R.dmg>d[0].dmg){var D=S(3,C,-2,A);D.dmg>R.dmg?d[o-1]=D:d[o-1]=R}else if(R.dmg<=d[o-1].dmg){var M=!1;if(R.dmg<A.dmg){var I=S(.5,C,.5,A);I.dmg>A.dmg?d[o-1]=I:M=!0}else{var O=S(1.5,C,-.5,A);O.dmg>R.dmg?d[o-1]=O:M=!0}if(M){0;for(var P=1;P<o;++P)d[P]=S(.5,d[0],.5,d[P])}}else d[o-1]=R}return _(),{statBest:d[0].stat,dmgBest:d[0].dmg}}function l(e,t,a){for(var r=c(e,t,a),o=r.statBest,n=r.dmgBest,s=1;s<5;++s){var l=c(e,t,a);l.dmgBest>n&&(o=l.statBest,n=l.dmgBest)}var u={};for(var d in a)u[d]=[a[d][0],a[d][1]],d in o&&(u[d][0]=Math.max(u[d][0],Math.ceil(o[d]-3)),u[d][1]=Math.min(u[d][1],Math.floor(o[d]+3)));return i(e,t,u)}},"03ea":function(e,t,a){"use strict";a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getTag=function(e){var t,a=e.preset,r={},g=[],p=e.preset.tagNum,h=a.cPanel["HP"][0],x=a.cPanel["ATTACK"][0],m=a.cPanel["DEFENSE"][0],b=a.output,_=[],S=[],E=e.calculator.convert;if(e.convertTag=[],E){var T=JSON.parse(JSON.stringify(a));T.aMinor=[0,0,0,0,0,0,0,0],e.convertPresets=[T]}for(var w={},C={},y=0;y<b.length;y++){var N,A="",R=0,D=b[y],M=(0,n.default)(D);try{for(M.s();!(N=M.n()).done;){var I=N.value;if(0==y){var O=0,P="";switch(I){case 0:C.HP=!0,w.HP_PERCENT=!0,O=.05*h,P="词条 - 生命（ +5% / "+O.toFixed(0)+" ）";break;case 1:C.ATTACK=!0,w.ATTACK_PERCENT=!0,O=.05*x,P="词条 - 攻击（ +5% / "+O.toFixed(0)+" ）";break;case 2:C.DEFENSE=!0,w.DEFENSE_PERCENT=!0,O=.062*m,P="词条 - 防御（ +6.2% / "+O.toFixed(0)+" ）";break;case 3:w.ELEMENT_MASTERY=!0,O=20,P="词条 - 精通（ +20 ）";break;case 4:w.CRITICAL=!0,O=3.3,P="词条 - 暴击（ +3.3% ）";break;case 5:w.CRITICAL_HURT=!0,O=6.6,P="词条 - 爆伤（ +6.6% ）";break;case 6:w.CHARGE_EFFICIENCY=!0,O=5.5,P="词条 - 充能（ +5.5% ）";break;default:break}var k={title:P,note:"",text:0};_.push(k);var F=JSON.parse(JSON.stringify(a));if(F.aMinor[I]+=O,E){var B=E.indexOf(I);if(B>-1){var H=JSON.parse(JSON.stringify(e.convertPresets[0]));H.aMinor[I]+=O,e.convertPresets.push(H),e.convertTag.push(p[I])}}S.push(F)}A+=c[I],R+=p[I]}}catch(Le){M.e(Le)}finally{M.f()}var J={title:A,text:R.toFixed(1)};0==y?r=(0,o.default)({},J):g.push(J)}if(a.cLevel<90){var L=JSON.parse(JSON.stringify(a)),j={character:e.character,preset:L,weapon:e.weapon};L.cLevel=90,L.aTagToMinor=!0,(0,s.getBaseData)(j),(0,i.convertMinor)(L),S.push(L),_.push({title:"人物 - 等级（ +"+(90-a.cLevel)+"级 ）",note:"",text:0})}if(a.wLevel<90){var U=JSON.parse(JSON.stringify(a)),K={character:e.character,preset:U,weapon:e.weapon};U.wLevel=90,(0,s.getBaseData)(K),U.aTagToMinor=!0,(0,i.convertMinor)(U),S.push(U),_.push({title:"武器 - 等级（ +"+(90-a.wLevel)+"级 ）",note:"",text:0})}var G=null!==(t=e.calculator.skillKey)&&void 0!==t?t:e.character.skillKey;if(G){var Y=[9,9];a.cStage>2&&(Y=[12,12],a.cStage<5&&(e.character.isSkillFive?Y[0]=9:Y[1]=9));var $,z=[{key:"技能 - A（ +1级 ）",index:0,max:9},{key:"技能 - E（ +1级 ）",index:1,max:Y[0]},{key:"技能 - Q（ +1级 ）",index:2,max:Y[0]}],W=[],q=(0,n.default)(G);try{for(q.s();!($=q.n()).done;){var Q=$.value,V=a.cSkills[Q],X=z[Q];0==Q&&V<X.max&&W.push(X),0!=Q&&V<X.max&&W.push(X)}}catch(Le){q.e(Le)}finally{q.f()}for(var Z=0,ee=W;Z<ee.length;Z++){var te=ee[Z],ae=JSON.parse(JSON.stringify(a));ae.cSkills[te.index]+=1,S.push(ae),_.push({title:te.key,note:"",text:0})}}if(b[0].indexOf(5)>-1||e.calculator.convert){var re=JSON.parse(JSON.stringify(a));if(S.push(re),_.push({title:"其他 - 伤害加成（ +5% ）",note:"",isBonus:!0,text:0}),a.aMajor[1]<6||a.aMajor[1]==f[a.element]){var oe=a.aMajor[1],ne=e.calculator.preset?e.calculator.preset.aMajor:e.character.preset.aMajor,ie=["HP","ATTACK","DEFENSE"];if(oe<3){var se=JSON.parse(JSON.stringify(a)),ce="（ 元素杯 ）",le=4;5==ne[1]&&(ce="（ 物理杯 ）",le=5);var ue=.466;2==oe&&(ue=.583),se.aMajor[1]=le,(0,s.getMajorData)(se),se.aMinor[oe]-=ue*se.cPanel[ie[oe]][0],S.push(se),_.push({title:"更换 - "+l[1][oe]+ce,note:"",text:0})}else if(3!=oe){var de=JSON.parse(JSON.stringify(a)),fe="更换 - 元素杯";5==oe&&(fe="更换 - 物理杯");var ve=.466,ge="（ 攻击杯 ）";oe=1,2==ne[0]?(ve=.583,ge="（ 防御杯 ）",oe=2):0==ne[0]&&(ge="（ 生命杯 ）",oe=0),de.aMajor[1]=oe,(0,s.getMajorData)(de),de.aMinor[oe]+=ve*de.cPanel[ie[oe]][0],S.push(de),_.push({title:fe+ge,note:"",text:0})}}}var pe=[20,20,20,20,20],he=[];if(a.aConfigs){for(y=0;y<a.aConfigs.length;y++){var xe=a.aConfigs[y];pe[y]=20-xe[1]}pe[0]<20&&he.push(pe[0]+"花"),pe[1]<20&&he.push(pe[1]+"羽")}for(y=0;y<3;y++){var me=a.aMajor[y];if(me<99){var be="";be=1==y&&4==me?v[a.element]+"杯":l[y][me],pe[y+2]<20&&(be=pe[y+2]+be),he.push(be)}else he.push("无")}var _e=he.join(" / ");r.content=_e;var Se=[],Ee=[],Te=[];e.presets=S;for(y=0;y<c.length;y++){var we=p[y].toFixed(1),Ce=c[y]+we,ye=b[0].indexOf(y);if(ye>-1){Se.push(Ce);var Ne=a.aMinor[y].toFixed(0)+c[y];Te[ye]=Ne}else Ee.push(Ce)}var Ae={title:"主要词条",text:Se.join(" /")};g.push(Ae);var Re={title:"其他词条",text:Ee.join(" /")};g.push(Re),b[0].indexOf(5)>-1?r.note="双爆: "+(2*a.aMinor[4]+a.aMinor[5]).toFixed(1):r.note="";if(a.tPanel=Te.join(" /"),a.tResult=r,a.tResults=g,e.weights=_,a.aData)for(var De in a.aData){var Me=a.aData[De];Me.type=u[De[4]],Me.count=0;var Ie,Oe=(0,n.default)(Me.attrs);try{for(Oe.s();!(Ie=Oe.n()).done;){var Pe=Ie.value;Pe[3]="#d5d6d9",Pe[4]=0;if(w[Pe[2]]){Pe[3]="#3b4144";var ke=Pe[1]/d[Pe[2]][1];Pe[4]=ke.toFixed(1),Me.count+=ke}else if("CHARGE_EFFICIENCY"==Pe[2]){var Fe=Pe[1]/d[Pe[2]][1];Pe[4]=Fe.toFixed(1),Me.count+=Fe}if(C[Pe[2]]){Pe[3]="#999";var Be=.05;"DEFENSE"==Pe[2]&&(Be=.062);var He=a.cPanel[Pe[2]][0]*Be,Je=Pe[1]/He;Pe[4]=Je.toFixed(1),Me.count+=Je}Pe[0]=Pe[1]+d[Pe[2]][0]}}catch(Le){Oe.e(Le)}finally{Oe.f()}Me.attrs.sort((function(e,t){return t[4]-e[4]})),Me.count=Me.count.toFixed(1),a.aDetail=!0}else a.aDetail=void 0};var o=r(a("5530")),n=r(a("b85c"));a("e9c4"),a("14d9"),a("c975"),a("4e82");var i=a("7a53"),s=a("175e"),c=["生","攻","防","精","暴","爆","充"],l=[["生命沙","攻击沙","防御沙","精通沙","充能沙"],["生命杯","攻击杯","防御杯","精通杯","元素杯","物理杯","火伤杯","冰伤杯","水伤杯","雷伤杯","草伤杯","岩伤杯","风伤杯"],["生命头","攻击头","防御头","精通头","暴击头","爆伤头","治疗头"]],u=["","花","羽","沙","杯","冠"],d={HP:["小生",0],HP_PERCENT:["生",5],ATTACK:["小攻",1],ATTACK_PERCENT:["攻",5],DEFENSE:["小防",2],DEFENSE_PERCENT:["防",6.2],FIRE_ADD_HURT:"火",ICE_ADD_HURT:"冰",ROCK_ADD_HURT:"岩",ELEC_ADD_HURT:"雷",WIND_ADD_HURT:"风",WATER_ADD_HURT:"水",PHYSICAL_ADD_HURT:"物",GRASS_ADD_HURT:"草",HEAL_ADD:"治",ELEMENT_MASTERY:["精",20],CRITICAL:["暴",3.3],CRITICAL_HURT:["爆",6.6],CHARGE_EFFICIENCY:["充",5.5]},f={fire:6,ice:7,water:8,thunder:9,grass:10,rock:11,wind:12},v={fire:"火伤",water:"水伤",thunder:"雷伤",ice:"冰伤",rock:"岩伤",wind:"风伤",grass:"草伤"}},"0b7e":function(e,t,a){"use strict";(function(e){a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getBaseScore=function(t){var a=t.preset,r=t.calculator.preset?t.calculator.preset:t.character.preset;t.oldPreset=r;var o=JSON.parse(JSON.stringify(r)),c=[8,8,8];4==t.character.star?(c=[8,11,11],o.cStage=6):o.cStage=0;o.cSkills=c,o.cLevel=90,o.wLevel=90,o.school=a.school,o.cId=a.cId,o.wType=a.wType,o.element=a.element,o.energy=a.energy,o.cPanel={HP:[0,4780],HP_PERCENT:[0,0],ATTACK:[0,311],ATTACK_PERCENT:[0,0],DEFENSE:[0,0],DEFENSE_PERCENT:[0,0],FIRE_ADD_HURT:[0,0],ICE_ADD_HURT:[0,0],ROCK_ADD_HURT:[0,0],ELEC_ADD_HURT:[0,0],WIND_ADD_HURT:[0,0],WATER_ADD_HURT:[0,0],PHYSICAL_ADD_HURT:[0,0],HEAL_ADD:[0,0],ELEMENT_MASTERY:[0,0],CRITICAL:[0,0],CRITICAL_HURT:[0,0],CHARGE_EFFICIENCY:[0,0]};var l=d.weaponsData[o.wId];o.wStage=5==l.star?0:4,o.wIndexs||(o.wIndexs=l.indexs);if(!o.aIndexs&&!o.aSets){var f=u.artifactsData[o.aIds[0]];f&&(o.aIndexs=f.indexs)}var v={character:t.character,preset:o,weapon:l};(0,i.getMajorData)(o),(0,i.getBaseData)(v),o.aTagToMinor=!0,o.tagNum=JSON.parse(JSON.stringify(a.school.tagNum)),(0,s.convertMinor)(o);var g=(0,n.buildAttribute)(o);a.output[0].indexOf(5)>-1&&(g.isBalance=!0);g.onlyScore=!0,t.calculator.get(g),t.baseScore=g.score,e.log("-------------"+t.character.chs+"-------------"),e.log("(1) C期望（默认圣遗物+默认配置）："+g.score)},t.getDataScore=function(t){var a=t.preset,r=(0,n.buildAttribute)(a);t.attribute=r,r.isData=!0,t.calculator.get(r),a.dResult=r.result,a.dResults=r.results;var i=r.score;e.log("(3) A期望（当前圣遗物+当前配置）："+i),r.reacResult&&a.dResults.push(r.reacResult);var s=t.baseScore,c=(i/s*100).toFixed(0),d=(0,l.getColor)(c);a.dResult.score=c,a.dResult.color=d,t.dataScore=i,a.recharge=r.recharge;var v=t.baseData;r.dBuffs=v.concat(r.dBuffs),a.dBuffs=r.dBuffs,a.effects=r.effects;var g="",p=t.weapon.options;if(p){var h=a.wIndexs;if(h&&h[0]>0){g+="[";for(var x=0;x<h.length;x++){var m=h[x];g+=p[x][m]}g+="]"}}var b,_="",S="",E=(0,o.default)(a.cSkills);try{for(E.s();!(b=E.n()).done;){var T=b.value;S+=T+1}}catch(j){E.e(j)}finally{E.f()}var w="",C=u.artifactsData[a.aIds[0]];if(a.aSets){var y=u.artifactsData[a.aIds[1]];w=C.short[0]+y.short[0]+"二"}else{w=C.short+"四";var N=C.options;if(N){var A=a.aIndexs;if(A&&A[0]>0){_+="[";for(x=0;x<A.length;x++){var R=A[x];_+=N[x][R]}_+="]"}}}var D=t.weapon.chs.slice(0,2),M="";a.wLevel&&a.wLevel<90&&(M=a.wLevel,a.wAscend&&(M+="+"));var I=a.cLevel;a.cAscend?I+="+":I+="级";var O=I+" / "+a.cStage+"命 / 技能 "+S,P=M+D+(a.wStage+1)+"精 /"+w;a.cNote=O,a.eNote=P,a.wNote=g,a.aNote=_,a.note=P+_+" /"+I+a.cStage+"命 /"+S,a.reactionText=r.reactionText?r.reactionText+" ":"",a.cData={em:r.em0()},t.preset.school.score||(t.supportScore=r.supportScore);if(r.isBalance)a.aMinor[4]+=r.resetCD.diffC,a.aMinor[5]+=r.resetCD.diffD,a.tagNum[4]=(a.aMinor[4]-100*a.cPanel["CRITICAL"][1])/3.3,a.tagNum[5]=(a.aMinor[5]-100*a.cPanel["CRITICAL_HURT"][1])/6.6,a.isAdapt=!1;else{var k=0;if(a.output[0].indexOf(5)>-1){var F=100*r.critical,B=100*r.criticalDamage;if(F<100)if(F*B<2e4){var H=Math.sqrt(8*F*B);k=(2*F+B-H)/6.6}else k=(2*F+B-200-F*B/100)/6.6;else if(B>200)k=(F-100)/3.3;else{var J=Math.sqrt(800*B);k=(2*F+B-J)/6.6}a.tLost=k.toFixed(1)}else a.tLost=null}var L=f(t);a.dPanel=L},t.getGWeightScore=function(e){for(var t=e.preset,a=JSON.parse(JSON.stringify(e.weights)),r=[],o=0;o<a.length;o++){var i=a[o],s=e.presets[o],c=(0,n.buildGroupAttribute)(s);c.onlyScore=!0,i.isBonus&&(c.bonus+=.05),e.calculator.get(c);var l=100*(c.score/e.preset.groupScore-1);l>.05&&(i.text=l.toFixed(2),r.push(i))}r.sort((function(e,t){return t.text-e.text})),t.gWeights=r},t.getGroupScore=function(t){var a=t.preset;if(a.gEffects||a.openBuffs){var r=(0,n.buildGroupAttribute)(a);t.attribute=r,t.calculator.get(r),a.gResult=r.result,a.gResults=r.results;var o=a.gResult.text;e.log("(2) E期望（+队伍增益）："+r.score),r.reacResult&&a.gResults.push(r.reacResult);var i=f(t);a.gPanel=i,a.gBuffs=r.gBuffs,a.gOpenBuffs=r.gOpenBuffs;var s=t.baseScore,c=(o/s*100).toFixed(0);a.gResult.score=c,a.gResult.color=(0,l.getColor)(c),a.groupScore=o}else a.gResult=null,a.gResults=null,a.gWeights=null,a.groupScore=null},t.getPanel=f,t.getTagScore=function(t){var a=t.preset,r=JSON.parse(JSON.stringify(a));r.aConfigs=null,r.aTagToMinor=!0;var o=t.dataScore,u=JSON.parse(JSON.stringify(r)),d=JSON.parse(JSON.stringify(a.school.tagNum)),f=d.map((function(e){return Math.round(5*e/3)}));u.tagNum=f,r.tagNum=d;var v=JSON.parse(JSON.stringify(r));r.aMajor=t.oldPreset.aMajor,(0,i.getMajorData)(r),(0,s.convertMinor)(r),(0,s.convertMinor)(v),(0,s.convertMinor)(u);var g=(0,n.buildAttribute)(u);g.onlyScore=!0;var p=(0,n.buildAttribute)(v);p.onlyScore=!0;var h=(0,n.buildAttribute)(r);h.onlyScore=!0,a.output[0].indexOf(5)>-1?(h.isBalance=!0,g.isBalance=!0,p.isBalance=!0):(h.isBalance=!1,g.isBalance=!1,p.isBalance=!1);t.calculator.get(h);var x=h.score;e.log("(4) B期望（默认圣遗物+当前配置）："+x),t.calculator.get(p);var m=p.score;e.log("(5) D期望（默认词条数）："+m),t.calculator.get(g);var b=g.score;e.log("(6) E期望（极限词条数）："+b);var _=(b-m)/50,S=(o-m)/_+100,E=o/m*100,T=o/x*100,w=o/b*100;e.log("主属性不变："+E.toFixed(0)),e.log("主属性改变："+T.toFixed(0)),e.log("毕业度："+S.toFixed(0)),a.output[0].indexOf(5)>-1?a.tProgress=w.toFixed(0):a.tProgress=null;(0,c.getTag)(t);var C=E.toFixed(0),y=(0,l.getColor)(C);a.tResult.score=C,a.tResult.color=y,t.tagScore=x,a.score=t.supportScore?t.supportScore:a.tResult.score+" / "+a.dResult.score},t.getWeightScore=function(e){for(var t=e.preset,a=JSON.parse(JSON.stringify(e.weights)),r=[],o=0;o<a.length;o++){var i=a[o],s=e.presets[o],c=(0,n.buildAttribute)(s);c.onlyScore=!0,i.isBonus&&(c.bonus+=.05),e.calculator.get(c);var l=100*(c.score/e.dataScore-1);l>.05&&(i.text=l.toFixed(2),r.push(i))}if(e.calculator.convert){var u=Number(e.preset.tResult.text),d=(0,n.buildAttribute)(e.convertPresets[0]);d.onlyScore=!0,e.calculator.get(d);var f=d.score,v=(0,n.buildAttribute)(e.convertPresets[1]);v.onlyScore=!0,e.calculator.get(v);var g=v.score,p=(0,n.buildAttribute)(e.convertPresets[2]);p.onlyScore=!0,e.calculator.get(p);var h=p.score,x=100*(g/f-1),m=100*(h/f-1),b=[x,m],_=0,S=1;x>m&&(_=1,S=0);var E=e.convertTag[_]*(b[_]/b[S]-1),T=u+E;"shanhugongxinhai"!=e.preset.cId?e.preset.tResult.note+=" | ":e.preset.tResult.note="",e.preset.tResult.note+="词条："+e.preset.tResult.text,e.preset.tResult.text=T.toFixed(1),e.preset.tResult.rightText="折算 "+T.toFixed(1)}else e.preset.tResult.rightText="词条 "+e.preset.tResult.text;r.sort((function(e,t){return t.text-e.text})),t.weights=r};var o=r(a("b85c"));a("e9c4"),a("c975"),a("d81d"),a("14d9"),a("99af"),a("fb6a"),a("a9e3"),a("4e82");var n=a("149f"),i=a("175e"),s=a("7a53"),c=a("03ea"),l=a("b209"),u=a("e194"),d=a("0d89");function f(e){var t,a=e.attribute,r=e.preset.output,n=!0,i=[],s=(0,o.default)(r[0]);try{for(s.s();!(t=s.n()).done;){var c=t.value;6==c&&(n=!1);var l=0,u="";switch(c){case 0:l=a.life().toFixed(0),u="生";break;case 1:l=a.atk().toFixed(0),u="攻";break;case 2:l=a.defend().toFixed(0),u="防";break;case 3:l=(100*a.em).toFixed(0),u="精";break;case 4:l=(100*a.critical).toFixed(0),u="暴";break;case 5:l=(100*a.criticalDamage).toFixed(0),u="爆";break;case 6:l=(100*a.recharge).toFixed(0),u="充";break;default:break}i.push(l+u)}}catch(v){s.e(v)}finally{s.f()}a.recharge>1&&n&&i.push((100*a.recharge).toFixed(0)+"充");var d=i.join(" /"),f=d;return f}}).call(this,a("5a52")["default"])},"1dfd":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),e.exports=t},3621:function(e,t,a){"use strict";a.r(t);var r=a("6689"),o=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=o.a},"3d37":function(e,t,a){"use strict";a.r(t);var r=a("444b"),o=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=o.a},"444b":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};t.default=r},4642:function(e,t,a){var r=a("fcb2");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("4f06").default;o("32d78f64",r,!0,{sourceMap:!1,shadowMode:!1})},6689:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=r},"748d":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticStyle:{height:"100px"}}),a("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"content",style:{backgroundColor:e.color}},[e._v(e._s(e.text))]),a("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:e.color}})],1)],1)},o=[]},"89d3":function(e,t,a){"use strict";a.r(t);var r=a("bd7d"),o=a("3621");for(var n in o)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(n);a("e36a");var i=a("f0c5"),s=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"42ced052",null,!1,r["a"],void 0);t["default"]=s.exports},"8c7b":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var r={uniSection:a("89d3").default,uniListItem:a("6e18").default,buttonBarBottom:a("e265").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.index<99,expression:"index<99"}]},[a("uni-section",{attrs:{title:"展示柜说明",type:"line"}}),a("v-uni-view",{staticClass:"note-text"},[a("v-uni-view",[e._v("1、展示柜的属性为只读，只能修改流派和增幅，其他属性无法修改，如果需要调整，可以在详情页下方点击【复制配置到本地】，再从首页进入角色修改")]),a("v-uni-view",[e._v("2、如果发现数据读取有误，先尝试刷新一下展示柜，还是无法解决大概率是BUG，可以把错误情况进行反馈")])],1)],1),a("uni-section",{attrs:{title:"流派",type:"line"}},[a("v-uni-radio-group",[a("v-uni-view",{staticClass:"uni-list"},e._l(e.schoolArr,(function(t,r){return a("uni-list-item",{key:t.name,attrs:{title:t.name,clickable:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectSchoolIndex(r)}},scopedSlots:e._u([{key:"footer",fn:function(){return[a("v-uni-radio",{attrs:{color:"#ad9388",checked:r==e.schoolIndex}})]},proxy:!0}],null,!0)})})),1)],1)],1),a("button-bar-bottom",{attrs:{text:"保存"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save()}}})],1)},n=[]},aade:function(e,t,a){"use strict";(function(e){a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getBestTag=function(t){var r,i=t.preset,s=Number(i.adapt.total),c=["hp","atk","def","em","cr","cd","er","cu","eb","eb"],l=[],u=(0,o.default)(i.output[0]);try{for(u.s();!(r=u.n()).done;){var d=r.value;l.push(c[d])}}catch(S){u.e(S)}finally{u.f()}for(var f=a("00d0"),v={},g=i.adapt.method,p=0;p<i.adapt.min.length;p++){var h=i.adapt.min[p];h&&h>0&&(v[c[p]]=[h,100])}var x=JSON.parse(JSON.stringify(i));x.aConfigs=null;var m=i.adapt.max?Number(i.adapt.max)+18:18;e.log(m);try{Date.now();var b=f.maximize((function(e){var a=e.cr+e.cd;if(a>m)return 0;var r=JSON.parse(JSON.stringify(x)),o=r.cPanel;r.aMinor[0]=(.05*e.hp+o["HP_PERCENT"][1])*o["HP"][0]+o["HP"][1],r.aMinor[1]=(.05*e.atk+o["ATTACK_PERCENT"][1])*o["ATTACK"][0]+o["ATTACK"][1],r.aMinor[2]=(.062*e.def+o["DEFENSE_PERCENT"][1])*o["DEFENSE"][0],r.aMinor[3]=20*e.em+100*o["ELEMENT_MASTERY"][1],r.aMinor[4]=3.3*e.cr+100*o["CRITICAL"][1],r.aMinor[5]=6.6*e.cd+100*o["CRITICAL_HURT"][1],r.aMinor[6]=5.5*e.er+100*o["CHARGE_EFFICIENCY"][1];var s={};return s=g[0]>0&&i.gResult?(0,n.buildGroupAttribute)(r):(0,n.buildAttribute)(r),t.calculator.get(s),Number(s.score)}),s,["eb"],l,v,["BruteTwice","NelderMeadBrute","Brute"][g[1]]),_=(Date.now(),b.statBest);t.preset.tagNum=[_.hp,_.atk,_.def,_.em,_.cr,_.cd,_.er],e.log(_)}catch(E){e.error(E)}};var o=r(a("b85c"));a("a9e3"),a("e9c4"),a("14d9");var n=a("149f")}).call(this,a("5a52")["default"])},b209:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getColor=function(e){var t=e/25;t<0&&(t=0);t>4&&(t=4);return r[Math.floor(t)]};t.default=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"];var r=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"]},bcee:function(e,t,a){"use strict";var r=a("e52b"),o=a.n(r);o.a},bd7d:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var r={uniIcons:a("fcef").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:e.color},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[e.type?a("v-uni-view",{staticClass:"uni-section__head"},[a("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),a("v-uni-view",{staticClass:"uni-list-item__content"},[e.title?a("v-uni-text",{staticClass:"uni-list-item__content-title"},[e._v(e._s(e.title))]):e._e(),e.subTitle?a("v-uni-text",{staticClass:"uni-list-item__content-note"},[e._v(e._s(e.subTitle))]):e._e()],1),a("v-uni-view",{staticClass:"uni-section__content__extra"},[e._t("extra",[e.rightText?a("v-uni-text",{staticClass:"uni-list-item__extra-text"},[e._v(e._s(e.rightText))]):e._e()])],2),e.showIcon?a("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:e.icon}}):e._e()],1),a("v-uni-view",{style:{padding:e.padding?"10px":""}},[e._t("default")],2)],1)},n=[]},d22f:function(e,t,a){"use strict";(function(e){a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("e9c4");var o=r(a("5530")),n=a("fedd"),i=a("26cb"),s={data:function(){return{schoolArr:[{score:!0,name:"默认"}],schoolIndex:0,temp:{},reations:[],current:0,index:0,reactionTexts:["无反应","蒸发","融化","超激化","蔓激化"],reactionArr:{fire:[0,1,2],ice:[0,2],water:[0,1],thunder:[0,3],grass:[0,4]}}},computed:(0,o.default)((0,o.default)({},(0,i.mapState)(["preset","version"])),(0,i.mapGetters)(["character"])),onLoad:function(e){this.index=e.index,this.temp=JSON.parse(JSON.stringify(this.preset)),this.character.schools&&(this.schoolArr=this.character.schools,this.temp.school?this.schoolIndex=this.temp.school.index?this.temp.school.index:0:this.temp.school=(0,o.default)({},this.schoolArr[0]))},methods:{selectIndex:function(t){this.current=t,this.$forceUpdate(),e.log(t)},selectSchoolIndex:function(e){this.schoolIndex=e},save:function(){if(this.temp.school=(0,o.default)({},this.schoolArr[this.schoolIndex]),this.temp.school.index=this.schoolIndex,this.index>99){var e={school:this.temp.school,element:this.temp.school.element};uni.$emit("schoolChanged",e)}else{var t=this.temp.school.element;t&&(this.temp.element=t),(0,n.startCalculate)(this.temp),this.$store.commit("changeProfile",{temp:this.temp,index:this.index}),this.$store.commit("setPreset",this.temp)}uni.navigateBack({delta:1})}}};t.default=s}).call(this,a("5a52")["default"])},d69f:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),e.exports=t},df07:function(e,t,a){"use strict";var r=a("4642"),o=a.n(r);o.a},e265:function(e,t,a){"use strict";a.r(t);var r=a("748d"),o=a("3d37");for(var n in o)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(n);a("bcee");var i=a("f0c5"),s=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"d83b913c",null,!1,r["a"],void 0);t["default"]=s.exports},e36a:function(e,t,a){"use strict";var r=a("fa22"),o=a.n(r);o.a},e52b:function(e,t,a){var r=a("1dfd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("4f06").default;o("1143f6dc",r,!0,{sourceMap:!1,shadowMode:!1})},e993:function(e,t,a){"use strict";a.r(t);var r=a("8c7b"),o=a("fdbb");for(var n in o)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(n);a("df07");var i=a("f0c5"),s=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"2a4645d8",null,!1,r["a"],void 0);t["default"]=s.exports},fa22:function(e,t,a){var r=a("d69f");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("4f06").default;o("2403413f",r,!0,{sourceMap:!1,shadowMode:!1})},fcb2:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,".note-text[data-v-2a4645d8]{padding:15px;font-size:14px;color:#666;line-height:22px}",""]),e.exports=t},fdbb:function(e,t,a){"use strict";a.r(t);var r=a("d22f"),o=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=o.a},fedd:function(e,t,a){"use strict";(function(e){a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.createPreset=function(e){var t=f.charactersData[e];return g(t)},t.getPreset=function(t){var a=f.charactersData[t],r=uni.getStorageSync(t);return r?(r.version&&v==r.version||(p(r),e.log("刷新！！"),uni.setStorageSync(r.cId,r)),r):g(a)},t.initPreset=g,t.startCalculate=p,t.version=void 0,a("e9c4"),a("c975"),a("14d9");var o=r(a("5530")),n=a("0b7e"),i=a("175e"),s=a("aade"),c=a("433a"),l=a("7a53"),u=a("e194"),d=a("0d89"),f=a("4432"),v="2022年8月24日 15:37:17";function g(e,t){var a,r=t||e.name;"kong"==r&&(r="traveller");var n=e.element,i=null!==(a=c.characterDamage[r])&&void 0!==a?a:c.characterDamage[e.name];"traveller"==r&&(n=i.element);var s={cId:e.name,element:n,id:Date.now(),name:"默认预设",cSkills:[8,8,8],cLevel:90,wLevel:90,cAscend:!1,wAscend:!1,effects:[],isAdapt:void 0,type:0,reactionText:""};4==e.star&&(s.cSkills=[8,11,11]);var l=d.weaponsData[i.preset.wId];s.wStage=5==l.star?0:4,s.cStage=5==e.star?0:6;var u=(0,o.default)((0,o.default)({},s),i.preset);return u.aTagToMinor=!0,u}function p(t){var a,r=f.charactersData[t.cId];t.school||(t.school={name:"默认",score:!0,reaction:0});var o=t.school.id;o&&(a=c.characterDamage[o]),a||(a=c.characterDamage[t.cId]);var g=d.weaponsData[t.wId];t.element=a.element?a.element:r.element,t.energy=r.energy,t.wType=g.type,t.wName=g.chs,t.version=v,t.school.stage&&t.cStage<t.school.stage&&(t.cStage=t.school.stage);var p=[];if(p=a.output?JSON.parse(JSON.stringify(a.output)):r.output?JSON.parse(JSON.stringify(r.output)):[[1,4,5]],void 0==t.school.reaction&&r.schools){var h=r.schools[0];h.reaction||(h.reaction=0),t.school=h}if(t.school.reaction>0&&p[0].indexOf(3)<0&&p[0].push(3),"5jueyuan"!=t.aIds[0]||t.aSets||p[0].indexOf(6)<0&&p[0].push(6),!t.school.tagNum){var x=p[0],m=[0,0,0,0,0,0,0],b=x.length;if(-1==x.indexOf(5)){for(var _=0;_<b;_++){var S=x[_];m[S]=0==_?9:1==_?4:3}m[x[0]]=9,m[x[1]]=4}else for(_=0;_<b;_++){var E=x[_];m[E]=4==E||5==E?9:0==_?4:3}t.school.tagNum=m,e.log("初始化默认词条："+m)}if(t.tagNum||1!=t.aTagToMinor||(t.tagNum=JSON.parse(JSON.stringify(t.school.tagNum)),t.isAdapt=!0,t.adapt={type:0,limit:1,method:[0,0,0],total:24,min:[],max:0},e.log("重置当前词条："+t.tagNum)),t.output=p,t.wIndexs||(g.forceOption&&g.forceOption[t.cId]?t.wIndexs=g.forceOption[t.cId]:t.wIndexs=g.indexs),!t.aIndexs&&!t.aSets){var T=u.artifactsData[t.aIds[0]];T.forceOption&&T.forceOption[t.cId]?t.aIndexs=T.forceOption[t.cId]:t.aIndexs=T.indexs}t.cPanel||(t.cPanel={HP:[0,0],HP_PERCENT:[0,0],ATTACK:[0,0],ATTACK_PERCENT:[0,0],DEFENSE:[0,0],DEFENSE_PERCENT:[0,0],FIRE_ADD_HURT:[0,0],ICE_ADD_HURT:[0,0],ROCK_ADD_HURT:[0,0],ELEC_ADD_HURT:[0,0],WIND_ADD_HURT:[0,0],WATER_ADD_HURT:[0,0],GRASS_ADD_HURT:[0,0],PHYSICAL_ADD_HURT:[0,0],HEAL_ADD:[0,0],ELEMENT_MASTERY:[0,0],CRITICAL:[0,0],CRITICAL_HURT:[0,0],CHARGE_EFFICIENCY:[0,0]}),t.uid||(0,i.getMajorData)(t);var w={character:r,preset:t,calculator:a,weapon:g};(0,i.getBaseData)(w),t.isAdapt&&0!=t.adapt.type&&((0,s.getBestTag)(w),e.log("自动计算最优")),(0,l.convertMinor)(t),(0,n.getBaseScore)(w),(0,n.getGroupScore)(w),(0,n.getDataScore)(w),(0,n.getTagScore)(w),(0,n.getWeightScore)(w),(0,n.getGWeightScore)(w)}t.version=v}).call(this,a("5a52")["default"])}}]);