(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-school"],{"00d0":function(e,t,a){"use strict";a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.maximize=function(e,t,a,r,i){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"Brute",d={atk:[0,37],hp:[0,37],def:[0,37],em:[0,35],er:[0,35],cr:[0,35],cd:[0,35]};if(a){if(a.length>3)throw new Error("主词条列表长度不超过3，得到"+a.length);var f,v=(0,o.default)(a);try{for(v.s();!(f=v.n()).done;){var p=f.value;p in d&&(["atk","hp","def"].includes(p)?d[p][1]-=5:d[p][1]-=7)}}catch(E){v.e(E)}finally{v.f()}}if(i)for(var g in d)if(g in i&&(d[g][0]=Math.max(d[g][0],Math.ceil(i[g][0])),d[g][1]=Math.min(d[g][1],Math.floor(i[g][1])),d[g][0]>d[g][1]))throw new Error("".concat(g,"的实际取值范围无效：[").concat(d[g][0],", ").concat(d[g][1],"]"));if(r)for(var h in d)r.includes(h)||(d[h][1]=d[h][0]);var x=[],b=0,m=0;for(var S in d)d[S][0]<d[S][1]&&x.push(S),b+=d[S][0],m+=d[S][1];if(t<b||t>m)throw new Error("没有可行解，因为".concat(t,"不在[").concat(b,", ").concat(m,"]内"));if(x.length<=1){var _={};for(var w in d)_[w]=Math.min(t-b+d[w][0],d[w][1]);return{statBest:_,dmgBest:e(_)}}if(t==b){var y={};for(var T in d)y[T]=d[T][0];return{statBest:y,dmgBest:e(y)}}if(t==m){var N={};for(var M in d)N[M]=d[M][1];return{statBest:N,dmgBest:e(N)}}switch(u){case"Brute":return n(e,t,d);case"BruteTwice":return s(e,t,d);case"NelderMead":return c(e,t,d);case"NelderMeadBrute":return l(e,t,d);default:throw new Error("未知的优化方法："+u)}},a("14d9"),a("4e82"),a("d9e2"),a("d401"),a("caad"),a("99af"),a("2532");var o=r(a("b85c")),i=r(a("5530"));function n(e,t,a){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o={},n=0,s=["cr","cd","atk","em","hp","def","er"],c={},l=0,u=0,d=s.length-1;d>=0;--d)c[s[d]]=[l,u],l+=a[s[d]][0],u+=a[s[d]][1];function f(t,l){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,v=s[u];if(u==s.length-1){if(l+d>41)return;t[v]=l;var p=e(t);p>n&&(n=p,o=(0,i.default)({},t))}else for(var g=Math.max(a[v][0],l-c[v][1]),h=Math.min(a[v][1],l-c[v][0],41-d),x=g;x<=h;x+=r)t[v]=x,f(t,l-x,u+1,Math.max(d,x))}return t=Math.floor(t),f({},t),{statBest:o,dmgBest:n}}function s(e,t,a){var r=n(e,t,a,2),o=r.statBest,i=(r.dmgBest,{});for(var s in a)i[s]=[a[s][0],a[s][1]],s in o&&(i[s][0]=Math.max(i[s][0],o[s]-3),i[s][1]=Math.min(i[s][1],o[s]+3));return n(e,t,i)}function c(e,t,a){function r(t){var r=[];for(var o in t){if(o in a&&(t[o]<a[o][0]||t[o]>a[o][1]))return 0;t[o]>0&&r.push(t[o])}return r.sort((function(e,t){return t-e})),r.length>=2&&r[0]+r[1]>41?0:e(t)}var o=0,i=[],n=0,s=0,c=[];for(var l in a)if(n+=a[l][0],a[l][0]<a[l][1]){o++,i.push(l);var u=Math.random();s+=u*(a[l][1]-a[l][0]),c.push(u)}for(var d=[],f=0;f<i.length;++f){var v=i[f],p=(t-n)/(s+.1*c[f]*(a[v][1]-a[v][0])),g={};for(var h in a)g[h]=a[h][0];for(var x=0;x<i.length;++x){var b=i[x],m=a[b][1]-a[b][0];g[b]+=p*c[x]*m,b==v&&(g[b]+=.1*p*c[x]*m)}d.push({stat:g,dmg:r(g)})}function S(){d.sort((function(e,t){return t.dmg-e.dmg}))}function _(e,t,o,i){var n={stat:{},dmg:0};for(var s in a)n.stat[s]=e*t.stat[s]+o*i.stat[s];return n.dmg=r(n.stat),n}for(var w=0;w<2e3;++w){S();var y=0;for(var T in a)y=Math.max(y,Math.abs(d[0].stat[T]-d[1].stat[T]));if(Math.abs(d[0].dmg-d[o-1].dmg)<1e-5&&y<1e-5)break;var N={stat:{},dmg:0};for(var M in a){N.stat[M]=0;for(var E=0;E<o-1;++E)N.stat[M]+=d[E].stat[M];N.stat[M]/=o-1}var C=d[o-1],A=_(2,N,-1,C);if(A.dmg>d[0].dmg){var O=_(3,N,-2,C);O.dmg>A.dmg?d[o-1]=O:d[o-1]=A}else if(A.dmg<=d[o-1].dmg){var R=!1;if(A.dmg<C.dmg){var D=_(.5,N,.5,C);D.dmg>C.dmg?d[o-1]=D:R=!0}else{var I=_(1.5,N,-.5,C);I.dmg>A.dmg?d[o-1]=I:R=!0}if(R){0;for(var k=1;k<o;++k)d[k]=_(.5,d[0],.5,d[k])}}else d[o-1]=A}return S(),{statBest:d[0].stat,dmgBest:d[0].dmg}}function l(e,t,a){for(var r=c(e,t,a),o=r.statBest,i=r.dmgBest,s=1;s<5;++s){var l=c(e,t,a);l.dmgBest>i&&(o=l.statBest,i=l.dmgBest)}var u={};for(var d in a)u[d]=[a[d][0],a[d][1]],d in o&&(u[d][0]=Math.max(u[d][0],Math.ceil(o[d]-3)),u[d][1]=Math.min(u[d][1],Math.floor(o[d]+3)));return n(e,t,u)}},"03ea":function(e,t,a){"use strict";a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getTag=function(e){var t,a=e.preset,r={},f=[],v=e.preset.tagNum,p=a.cPanel["HP"][0],g=a.cPanel["ATTACK"][0],h=a.cPanel["DEFENSE"][0],x=a.output,b=[],m=[],S=e.calculator.convert;if(e.convertTag=[],S){var _=JSON.parse(JSON.stringify(a));_.aMinor=[0,0,0,0,0,0,0,0],e.convertPresets=[_]}for(var w=0;w<x.length;w++){var y,T="",N=0,M=x[w],E=(0,i.default)(M);try{for(E.s();!(y=E.n()).done;){var C=y.value;if(0==w){var A=0,O="";switch(C){case 0:A=.05*p,O="词条 - 生命（ +5% / "+A.toFixed(0)+" ）";break;case 1:A=.05*g,O="词条 - 攻击（ +5% / "+A.toFixed(0)+" ）";break;case 2:A=.062*h,O="词条 - 防御（ +6.2% / "+A.toFixed(0)+" ）";break;case 3:A=20,O="词条 - 精通（ +20 ）";break;case 4:A=3.3,O="词条 - 暴击（ +3.3% ）";break;case 5:A=6.6,O="词条 - 爆伤（ +6.6% ）";break;case 6:A=5.5,O="词条 - 充能（ +5.5% ）";break;default:break}var R={title:O,note:"",text:0};b.push(R);var D=JSON.parse(JSON.stringify(a));if(D.aMinor[C]+=A,S){var I=S.indexOf(C);if(I>-1){var k=JSON.parse(JSON.stringify(e.convertPresets[0]));k.aMinor[C]+=A,e.convertPresets.push(k),e.convertTag.push(v[C])}}m.push(D)}T+=c[C],N+=v[C]}}catch(Me){E.e(Me)}finally{E.f()}var B={title:T,text:N.toFixed(1)};0==w?r=(0,o.default)({},B):f.push(B)}if(a.cLevel<90){var P=JSON.parse(JSON.stringify(a)),j={character:e.character,preset:P,weapon:e.weapon};P.cLevel=90,P.aTagToMinor=!0,(0,s.getBaseData)(j),(0,n.convertMinor)(P),m.push(P),b.push({title:"人物 - 等级（ +"+(90-a.cLevel)+"级 ）",note:"",text:0})}if(a.wLevel<90){var J=JSON.parse(JSON.stringify(a)),F={character:e.character,preset:J,weapon:e.weapon};J.wLevel=90,(0,s.getBaseData)(F),J.aTagToMinor=!0,(0,n.convertMinor)(J),m.push(J),b.push({title:"武器 - 等级（ +"+(90-a.wLevel)+"级 ）",note:"",text:0})}var H=null!==(t=e.calculator.skillKey)&&void 0!==t?t:e.character.skillKey;if(H){var L=[9,9];a.cStage>2&&(L=[12,12],a.cStage<5&&(e.character.isSkillFive?L[0]=9:L[1]=9));var U,G=[{key:"技能 - A（ +1级 ）",index:0,max:9},{key:"技能 - E（ +1级 ）",index:1,max:L[0]},{key:"技能 - Q（ +1级 ）",index:2,max:L[0]}],K=[],$=(0,i.default)(H);try{for($.s();!(U=$.n()).done;){var z=U.value,W=a.cSkills[z],Y=G[z];0==z&&W<Y.max&&K.push(Y),0!=z&&W<Y.max&&K.push(Y)}}catch(Me){$.e(Me)}finally{$.f()}for(var q=0,Q=K;q<Q.length;q++){var V=Q[q],X=JSON.parse(JSON.stringify(a));X.cSkills[V.index]+=1,m.push(X),b.push({title:V.key,note:"",text:0})}}if(x[0].indexOf(5)>-1||e.calculator.convert){var Z=JSON.parse(JSON.stringify(a));if(m.push(Z),b.push({title:"其他 - 伤害加成（ +5% ）",note:"",isBonus:!0,text:0}),a.aMajor[1]<6||a.aMajor[1]==u[a.element]){var ee=a.aMajor[1],te=e.calculator.preset?e.calculator.preset.aMajor:e.character.preset.aMajor,ae=["HP","ATTACK","DEFENSE"];if(ee<3){var re=JSON.parse(JSON.stringify(a)),oe="（ 元素杯 ）",ie=4;5==te[1]&&(oe="（ 物理杯 ）",ie=5);var ne=.466;2==ee&&(ne=.583),re.aMajor[1]=ie,(0,s.getMajorData)(re),re.aMinor[ee]-=ne*re.cPanel[ae[ee]][0],m.push(re),b.push({title:"更换 - "+l[1][ee]+oe,note:"",text:0})}else if(3!=ee){var se=JSON.parse(JSON.stringify(a)),ce="更换 - 元素杯";5==ee&&(ce="更换 - 物理杯");var le=.466,ue="（ 攻击杯 ）";ee=1,2==te[0]?(le=.583,ue="（ 防御杯 ）",ee=2):0==te[0]&&(ue="（ 生命杯 ）",ee=0),se.aMajor[1]=ee,(0,s.getMajorData)(se),se.aMinor[ee]+=le*se.cPanel[ae[ee]][0],m.push(se),b.push({title:ce+ue,note:"",text:0})}}}var de=[20,20,20,20,20],fe=[];if(a.aConfigs){for(w=0;w<a.aConfigs.length;w++){var ve=a.aConfigs[w];de[w]=20-ve[1]}de[0]<20&&fe.push(de[0]+"花"),de[1]<20&&fe.push(de[1]+"羽")}for(w=0;w<3;w++){var pe=a.aMajor[w];if(pe<99){var ge="";ge=1==w&&4==pe?d[a.element]+"杯":l[w][pe],de[w+2]<20&&(ge=de[w+2]+ge),fe.push(ge)}else fe.push("无")}var he=fe.join(" / ");r.content=he;var xe=[],be=[],me=[];e.presets=m;for(w=0;w<c.length;w++){var Se=v[w].toFixed(1),_e=c[w]+Se,we=x[0].indexOf(w);if(we>-1){xe.push(_e);var ye=a.aMinor[w].toFixed(0)+c[w];me[we]=ye}else be.push(_e)}var Te={title:"主要词条",text:xe.join(" / ")};f.push(Te);var Ne={title:"其他词条",text:be.join(" / ")};f.push(Ne),x[0].indexOf(5)>-1?r.note="双爆: "+(2*a.aMinor[4]+a.aMinor[5]).toFixed(1):r.note="";a.tPanel=me.join(" / "),a.tResult=r,a.tResults=f,e.weights=b};var o=r(a("5530")),i=r(a("b85c"));a("e9c4"),a("14d9"),a("c975");var n=a("7a53"),s=a("175e"),c=["生","攻","防","精","暴","爆","充"],l=[["生命沙","攻击沙","防御沙","精通沙","充能沙"],["生命杯","攻击杯","防御杯","精通杯","元素杯","物理杯","火伤杯","冰伤杯","水伤杯","雷伤杯","草伤杯","岩伤杯","风伤杯"],["生命头","攻击头","防御头","精通头","暴击头","爆伤头","治疗头"]],u={fire:6,ice:7,water:8,thunder:9,grass:10,rock:11,wind:12},d={fire:"火伤",water:"水伤",thunder:"雷伤",ice:"冰伤",rock:"岩伤",wind:"风伤",grass:"草伤"}},"0b7e":function(e,t,a){"use strict";(function(e){a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getBaseScore=function(t){var a=t.preset,r=t.calculator.preset?t.calculator.preset:t.character.preset;t.oldPreset=r;var o=JSON.parse(JSON.stringify(r)),c=[8,8,8];4==t.character.star?(c=[8,11,11],o.cStage=6):o.cStage=0;o.cSkills=c,o.cLevel=90,o.wLevel=90,o.school=a.school,o.cId=a.cId,o.wType=a.wType,o.element=a.element,o.energy=a.energy,o.cPanel={HP:[0,4780],HP_PERCENT:[0,0],ATTACK:[0,311],ATTACK_PERCENT:[0,0],DEFENSE:[0,0],DEFENSE_PERCENT:[0,0],FIRE_ADD_HURT:[0,0],ICE_ADD_HURT:[0,0],ROCK_ADD_HURT:[0,0],ELEC_ADD_HURT:[0,0],WIND_ADD_HURT:[0,0],WATER_ADD_HURT:[0,0],PHYSICAL_ADD_HURT:[0,0],HEAL_ADD:[0,0],ELEMENT_MASTERY:[0,0],CRITICAL:[0,0],CRITICAL_HURT:[0,0],CHARGE_EFFICIENCY:[0,0]};var l=d.weaponsData[o.wId];o.wStage=5==l.star?0:4,o.wIndexs||(o.wIndexs=l.indexs);if(!o.aIndexs&&!o.aSets){var f=u.artifactsData[o.aIds[0]];f&&(o.aIndexs=f.indexs)}var v={character:t.character,preset:o,weapon:l};(0,n.getMajorData)(o),(0,n.getBaseData)(v),o.aTagToMinor=!0,o.tagNum=JSON.parse(JSON.stringify(a.school.tagNum)),(0,s.convertMinor)(o);var p=(0,i.buildAttribute)(o);a.output[0].indexOf(5)>-1&&(p.isBalance=!0);p.onlyScore=!0,t.calculator.get(p),t.baseScore=p.score,e("log","-------------"+t.character.chs+"-------------"," at core/utils/score.js:176"),e("log","(1) C期望（默认圣遗物+默认配置）："+p.score," at core/utils/score.js:177")},t.getDataScore=function(t){var a=t.preset,r=(0,i.buildAttribute)(a);t.attribute=r,r.isData=!0,t.calculator.get(r),a.dResult=r.result,a.dResults=r.results;var n=r.score;e("log","(3) A期望（当前圣遗物+当前配置）："+n," at core/utils/score.js:407"),r.reacResult&&a.dResults.push(r.reacResult);var s=t.baseScore,c=(n/s*100).toFixed(0),d=(0,l.getColor)(c);a.dResult.score=c,a.dResult.color=d,t.dataScore=n,a.recharge=r.recharge;var v=t.baseData;r.dBuffs=v.concat(r.dBuffs),a.dBuffs=r.dBuffs,a.effects=r.effects;var p="",g=t.weapon.options;if(g){var h=a.wIndexs;if(h&&h[0]>0){p+="[";for(var x=0;x<h.length;x++){var b=h[x];p+=g[x][b]}p+="]"}}var m,S="",_=" ",w=(0,o.default)(a.cSkills);try{for(w.s();!(m=w.n()).done;){var y=m.value;_+=y+1}}catch(L){w.e(L)}finally{w.f()}var T="",N=u.artifactsData[a.aIds[0]];if(a.aSets){var M=u.artifactsData[a.aIds[1]];T=N.short[0]+M.short[0]+"二"}else{T=N.short+"四";var E=N.options;if(E){var C=a.aIndexs;if(C&&C[0]>0){S+="[";for(x=0;x<C.length;x++){var A=C[x];S+=E[x][A]}S+="]"}}}var O=t.weapon.chs.slice(0,2),R="";a.wLevel&&a.wLevel<90&&(R=a.wLevel,a.wAscend&&(R+="+"));var D=a.cLevel;a.cAscend?D+="+":D+="级";var I=D+" / "+a.cStage+"命 / 技能"+_,k=R+O+(a.wStage+1)+" / "+T;a.cNote=I,a.eNote=k,a.wNote=p,a.aNote=S,a.note=k+S+" / "+D+a.cStage+" /"+_,a.reactionText=r.reactionText?r.reactionText+" ":"",a.cData={em:r.em0()},t.preset.school.score||(t.supportScore=r.supportScore);if(r.isBalance)a.aMinor[4]+=r.resetCD.diffC,a.aMinor[5]+=r.resetCD.diffD,a.tagNum[4]=(a.aMinor[4]-100*a.cPanel["CRITICAL"][1])/3.3,a.tagNum[5]=(a.aMinor[5]-100*a.cPanel["CRITICAL_HURT"][1])/6.6,a.isAdapt=!1;else{var B=0;if(a.output[0].indexOf(5)>-1){var P=100*r.critical,j=100*r.criticalDamage;if(P<100)if(P*j<2e4){var J=Math.sqrt(8*P*j);B=(2*P+j-J)/6.6}else B=(2*P+j-200-P*j/100)/6.6;else if(j>200)B=(P-100)/3.3;else{var F=Math.sqrt(800*j);B=(2*P+j-F)/6.6}a.tLost=B.toFixed(1)}else a.tLost=null}var H=f(t);a.dPanel=H},t.getGWeightScore=function(e){for(var t=e.preset,a=JSON.parse(JSON.stringify(e.weights)),r=[],o=0;o<a.length;o++){var n=a[o],s=e.presets[o],c=(0,i.buildGroupAttribute)(s);c.onlyScore=!0,n.isBonus&&(c.bonus+=.05),e.calculator.get(c);var l=100*(c.score/e.preset.groupScore-1);l>.05&&(n.text=l.toFixed(2),r.push(n))}r.sort((function(e,t){return t.text-e.text})),t.gWeights=r},t.getGroupScore=function(t){var a=t.preset;if(a.gEffects||a.openBuffs){var r=(0,i.buildGroupAttribute)(a);t.attribute=r,t.calculator.get(r),a.gResult=r.result,a.gResults=r.results;var o=a.gResult.text;e("log","(2) E期望（+队伍增益）："+r.score," at core/utils/score.js:592"),r.reacResult&&a.gResults.push(r.reacResult);var n=f(t);a.gPanel=n,a.gBuffs=r.gBuffs,a.gOpenBuffs=r.gOpenBuffs;var s=t.baseScore,c=(o/s*100).toFixed(0);a.gResult.score=c,a.gResult.color=(0,l.getColor)(c),a.groupScore=o}else a.gResult=null,a.gResults=null,a.gWeights=null,a.groupScore=null},t.getPanel=f,t.getTagScore=function(t){var a=t.preset,r=JSON.parse(JSON.stringify(a));r.aConfigs=null,r.aTagToMinor=!0;var o=t.dataScore,u=JSON.parse(JSON.stringify(r)),d=JSON.parse(JSON.stringify(a.school.tagNum)),f=d.map((function(e){return Math.round(5*e/3)}));u.tagNum=f,r.tagNum=d;var v=JSON.parse(JSON.stringify(r));r.aMajor=t.oldPreset.aMajor,(0,n.getMajorData)(r),(0,s.convertMinor)(r),(0,s.convertMinor)(v),(0,s.convertMinor)(u);var p=(0,i.buildAttribute)(u);p.onlyScore=!0;var g=(0,i.buildAttribute)(v);g.onlyScore=!0;var h=(0,i.buildAttribute)(r);h.onlyScore=!0,a.output[0].indexOf(5)>-1?(h.isBalance=!0,p.isBalance=!0,g.isBalance=!0):(h.isBalance=!1,p.isBalance=!1,g.isBalance=!1);t.calculator.get(h);var x=h.score;e("log","(4) B期望（默认圣遗物+当前配置）："+x," at core/utils/score.js:309"),t.calculator.get(g);var b=g.score;e("log","(5) D期望（默认词条数）："+b," at core/utils/score.js:315"),t.calculator.get(p);var m=p.score;e("log","(6) E期望（极限词条数）："+m," at core/utils/score.js:320");var S=(m-b)/50,_=(o-b)/S+100,w=o/b*100,y=o/x*100,T=o/m*100;e("log","毕业度评分："+w.toFixed(0)," at core/utils/score.js:350"),e("log","主属性改变："+y.toFixed(0)," at core/utils/score.js:351"),e("log","主属性不变："+_.toFixed(0)," at core/utils/score.js:352"),a.output[0].indexOf(5)>-1?a.tProgress=T.toFixed(0):a.tProgress=null;(0,c.getTag)(t);var N=_.toFixed(0),M=(0,l.getColor)(N);a.tResult.score=N,a.tResult.color=M,t.tagScore=x,a.score=t.supportScore?t.supportScore:a.tResult.score+" / "+a.dResult.score},t.getWeightScore=function(e){for(var t=e.preset,a=JSON.parse(JSON.stringify(e.weights)),r=[],o=0;o<a.length;o++){var n=a[o],s=e.presets[o],c=(0,i.buildAttribute)(s);c.onlyScore=!0,n.isBonus&&(c.bonus+=.05),e.calculator.get(c);var l=100*(c.score/e.dataScore-1);l>.05&&(n.text=l.toFixed(2),r.push(n))}if(e.calculator.convert){var u=Number(e.preset.tResult.text),d=(0,i.buildAttribute)(e.convertPresets[0]);d.onlyScore=!0,e.calculator.get(d);var f=d.score,v=(0,i.buildAttribute)(e.convertPresets[1]);v.onlyScore=!0,e.calculator.get(v);var p=v.score,g=(0,i.buildAttribute)(e.convertPresets[2]);g.onlyScore=!0,e.calculator.get(g);var h=g.score,x=100*(p/f-1),b=100*(h/f-1),m=[x,b],S=0,_=1;x>b&&(S=1,_=0);var w=e.convertTag[S]*(m[S]/m[_]-1),y=u+w;"shanhugongxinhai"!=e.preset.cId?e.preset.tResult.note+=" | ":e.preset.tResult.note="",e.preset.tResult.note+="词条："+e.preset.tResult.text,e.preset.tResult.text=y.toFixed(1),e.preset.tResult.rightText="折算 "+y.toFixed(1)}else e.preset.tResult.rightText="词条 "+e.preset.tResult.text;r.sort((function(e,t){return t.text-e.text})),t.weights=r};var o=r(a("b85c"));a("e9c4"),a("c975"),a("d81d"),a("14d9"),a("99af"),a("fb6a"),a("a9e3"),a("4e82");var i=a("149f"),n=a("175e"),s=a("7a53"),c=a("03ea"),l=a("b209"),u=a("e194"),d=a("0d89");function f(e){var t,a=e.attribute,r=e.preset.output,i=!0,n=[],s=(0,o.default)(r[0]);try{for(s.s();!(t=s.n()).done;){var c=t.value;6==c&&(i=!1);var l=0,u="";switch(c){case 0:l=a.life().toFixed(0),u="生";break;case 1:l=a.atk().toFixed(0),u="攻";break;case 2:l=a.defend().toFixed(0),u="防";break;case 3:l=(100*a.em).toFixed(0),u="精";break;case 4:l=(100*a.critical).toFixed(0),u="暴";break;case 5:l=(100*a.criticalDamage).toFixed(0),u="爆";break;case 6:l=(100*a.recharge).toFixed(0),u="充";break;default:break}n.push(l+u)}}catch(v){s.e(v)}finally{s.f()}a.recharge>1&&i&&n.push((100*a.recharge).toFixed(0)+"充");var d=n.join(" / "),f=d;return f}}).call(this,a("0de9")["log"])},"1dfd":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),e.exports=t},"2c73":function(e,t,a){var r=a("f253");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("4f06").default;o("42d18ca4",r,!0,{sourceMap:!1,shadowMode:!1})},3621:function(e,t,a){"use strict";a.r(t);var r=a("6689"),o=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"3d37":function(e,t,a){"use strict";a.r(t);var r=a("444b"),o=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"444b":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};t.default=r},5561:function(e,t,a){"use strict";var r=a("2c73"),o=a.n(r);o.a},6689:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=r},"748d":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticStyle:{height:"100px"}}),a("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"content",style:{backgroundColor:e.color}},[e._v(e._s(e.text))]),a("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:e.color}})],1)],1)},o=[]},"7aec":function(e,t,a){"use strict";var r=a("f86f"),o=a.n(r);o.a},"7ce9":function(e,t,a){"use strict";a.r(t);var r=a("d818"),o=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"89d3":function(e,t,a){"use strict";a.r(t);var r=a("971c"),o=a("3621");for(var i in o)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("7aec");var n=a("f0c5"),s=Object(n["a"])(o["default"],r["b"],r["c"],!1,null,"c5b075ba",null,!1,r["a"],void 0);t["default"]=s.exports},"903e":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return r}));var r={uniSection:a("89d3").default,uniListItem:a("6e18").default,buttonBarBottom:a("e265").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.index<99,expression:"index<99"}]},[a("uni-section",{attrs:{title:"展示柜说明",type:"line"}}),a("v-uni-view",{staticClass:"note-text"},[a("v-uni-view",[e._v("1、展示柜的属性为只读，只能修改流派和增幅，其他属性无法修改，如果需要调整，可以在详情页下方点击【复制配置到本地】，再从首页进入角色修改")]),a("v-uni-view",[e._v("2、如果发现数据读取有误，先尝试刷新一下展示柜，还是无法解决大概率是BUG，可以把错误情况进行反馈")])],1)],1),a("uni-section",{attrs:{title:"流派",type:"line"}},[a("v-uni-radio-group",[a("v-uni-view",{staticClass:"uni-list"},e._l(e.schoolArr,(function(t,r){return a("uni-list-item",{key:t.name,attrs:{title:t.name,clickable:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectSchoolIndex(r)}},scopedSlots:e._u([{key:"footer",fn:function(){return[a("v-uni-radio",{attrs:{color:"#ad9388",checked:r==e.schoolIndex}})]},proxy:!0}],null,!0)})})),1)],1)],1),a("button-bar-bottom",{attrs:{text:"保存"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save()}}})],1)},i=[]},"971c":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return r}));var r={uniIcons:a("fcef").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:e.color},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[e.type?a("v-uni-view",{staticClass:"uni-section__head"},[a("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),a("v-uni-view",{staticClass:"uni-list-item__content"},[e.title?a("v-uni-text",{staticClass:"uni-list-item__content-title"},[e._v(e._s(e.title))]):e._e(),e.subTitle?a("v-uni-text",{staticClass:"uni-list-item__content-note"},[e._v(e._s(e.subTitle))]):e._e()],1),a("v-uni-view",{staticClass:"uni-section__content__extra"},[e._t("extra",[e.rightText?a("v-uni-text",{staticClass:"uni-list-item__extra-text"},[e._v(e._s(e.rightText))]):e._e()])],2),e.showArrow?a("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):e._e()],1),a("v-uni-view",{style:{padding:e.padding?"10px":""}},[e._t("default")],2)],1)},i=[]},aade:function(e,t,a){"use strict";(function(e){a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getBestTag=function(t){var r,n=t.preset,s=Number(n.adapt.total),c=["hp","atk","def","em","cr","cd","er","cu","eb","eb"],l=[],u=(0,o.default)(n.output[0]);try{for(u.s();!(r=u.n()).done;){var d=r.value;l.push(c[d])}}catch(_){u.e(_)}finally{u.f()}for(var f=a("00d0"),v={},p=n.adapt.method,g=0;g<n.adapt.min.length;g++){var h=n.adapt.min[g];h&&h>0&&(v[c[g]]=[h,100])}var x=JSON.parse(JSON.stringify(n));x.aConfigs=null;var b=n.adapt.max?Number(n.adapt.max)+18:18;e("log",b," at core/utils/calculate/best.js:83");try{Date.now();var m=f.maximize((function(e){var a=e.cr+e.cd;if(a>b)return 0;var r=JSON.parse(JSON.stringify(x)),o=r.cPanel;r.aMinor[0]=(.05*e.hp+o["HP_PERCENT"][1])*o["HP"][0]+o["HP"][1],r.aMinor[1]=(.05*e.atk+o["ATTACK_PERCENT"][1])*o["ATTACK"][0]+o["ATTACK"][1],r.aMinor[2]=(.062*e.def+o["DEFENSE_PERCENT"][1])*o["DEFENSE"][0],r.aMinor[3]=20*e.em+100*o["ELEMENT_MASTERY"][1],r.aMinor[4]=3.3*e.cr+100*o["CRITICAL"][1],r.aMinor[5]=6.6*e.cd+100*o["CRITICAL_HURT"][1],r.aMinor[6]=5.5*e.er+100*o["CHARGE_EFFICIENCY"][1];var s={};return s=p[0]>0&&n.gResult?(0,i.buildGroupAttribute)(r):(0,i.buildAttribute)(r),t.calculator.get(s),Number(s.score)}),s,["eb"],l,v,["BruteTwice","NelderMeadBrute","Brute"][p[1]]),S=(Date.now(),m.statBest);t.preset.tagNum=[S.hp,S.atk,S.def,S.em,S.cr,S.cd,S.er],e("log",S," at core/utils/calculate/best.js:144")}catch(w){e("error",w," at core/utils/calculate/best.js:147")}};var o=r(a("b85c"));a("a9e3"),a("e9c4"),a("14d9");var i=a("149f")}).call(this,a("0de9")["log"])},b209:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getColor=function(e){var t=e/25;t<0&&(t=0);t>4&&(t=4);return r[Math.floor(t)]};t.default=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"];var r=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"]},bcee:function(e,t,a){"use strict";var r=a("e52b"),o=a.n(r);o.a},d818:function(e,t,a){"use strict";(function(e){a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("e9c4");var o=r(a("5530")),i=a("fedd"),n=a("26cb"),s={data:function(){return{schoolArr:[{score:!0,name:"默认"}],schoolIndex:0,temp:{},reations:[],current:0,index:0,reactionTexts:["无反应","蒸发","融化","超激化","蔓激化"],reactionArr:{fire:[0,1,2],ice:[0,2],water:[0,1],thunder:[0,3],grass:[0,4]}}},computed:(0,o.default)((0,o.default)({},(0,n.mapState)(["preset","version"])),(0,n.mapGetters)(["character"])),onLoad:function(e){this.index=e.index,this.temp=JSON.parse(JSON.stringify(this.preset)),this.character.schools&&(this.schoolArr=this.character.schools,this.temp.school?this.schoolIndex=this.temp.school.index?this.temp.school.index:0:this.temp.school=(0,o.default)({},this.schoolArr[0]))},methods:{selectIndex:function(t){this.current=t,this.$forceUpdate(),e("log",t," at pages/character/school.vue:133")},selectSchoolIndex:function(e){this.schoolIndex=e},save:function(){if(this.temp.school=(0,o.default)({},this.schoolArr[this.schoolIndex]),this.temp.school.index=this.schoolIndex,this.index>99){var e={school:this.temp.school,element:this.temp.school.element};uni.$emit("schoolChanged",e)}else{var t=this.temp.school.element;t&&(this.temp.element=t),(0,i.startCalculate)(this.temp),this.$store.commit("changeProfile",{temp:this.temp,index:this.index}),this.$store.commit("setPreset",this.temp)}uni.navigateBack({delta:1})}}};t.default=s}).call(this,a("0de9")["log"])},e265:function(e,t,a){"use strict";a.r(t);var r=a("748d"),o=a("3d37");for(var i in o)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("bcee");var n=a("f0c5"),s=Object(n["a"])(o["default"],r["b"],r["c"],!1,null,"d83b913c",null,!1,r["a"],void 0);t["default"]=s.exports},e52b:function(e,t,a){var r=a("1dfd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("4f06").default;o("1143f6dc",r,!0,{sourceMap:!1,shadowMode:!1})},f15d:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-c5b075ba]{background-color:#fff}.uni-list-item__content[data-v-c5b075ba]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-c5b075ba]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-c5b075ba]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-c5b075ba]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-c5b075ba]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-c5b075ba]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-c5b075ba]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-c5b075ba]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-c5b075ba]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-c5b075ba]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-c5b075ba]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-c5b075ba]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-c5b075ba]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-c5b075ba]{font-size:13px;color:#999}',""]),e.exports=t},f253:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,".note-text[data-v-4c22d9a1]{padding:15px;font-size:14px;color:#666;line-height:22px}",""]),e.exports=t},f4f7:function(e,t,a){"use strict";a.r(t);var r=a("903e"),o=a("7ce9");for(var i in o)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("5561");var n=a("f0c5"),s=Object(n["a"])(o["default"],r["b"],r["c"],!1,null,"4c22d9a1",null,!1,r["a"],void 0);t["default"]=s.exports},f86f:function(e,t,a){var r=a("f15d");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("4f06").default;o("ba9834aa",r,!0,{sourceMap:!1,shadowMode:!1})},fedd:function(e,t,a){"use strict";(function(e){a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.createPreset=function(e){var t=f.charactersData[e];return p(t)},t.getPreset=function(t){var a=f.charactersData[t],r=uni.getStorageSync(t);return r?(r.version&&v==r.version||(g(r),e("log","刷新！！"," at core/utils/preset.js:161"),uni.setStorageSync(r.cId,r)),r):p(a)},t.initPreset=p,t.startCalculate=g,t.version=void 0,a("e9c4"),a("c975"),a("14d9");var o=r(a("5530")),i=a("0b7e"),n=a("175e"),s=a("aade"),c=a("433a"),l=a("7a53"),u=a("e194"),d=a("0d89"),f=a("4432"),v="2022年8月24日 15:37:17";function p(e,t){var a,r=t||e.name;"kong"==r&&(r="traveller");var i=e.element,n=null!==(a=c.characterDamage[r])&&void 0!==a?a:c.characterDamage[e.name];"traveller"==r&&(i=n.element);var s={cId:e.name,element:i,id:Date.now(),name:"默认预设",cSkills:[8,8,8],cLevel:90,wLevel:90,cAscend:!1,wAscend:!1,effects:[],isAdapt:void 0,type:0,reactionText:""};4==e.star&&(s.cSkills=[8,11,11]);var l=d.weaponsData[n.preset.wId];s.wStage=5==l.star?0:4,s.cStage=5==e.star?0:6;var u=(0,o.default)((0,o.default)({},s),n.preset);return u.aTagToMinor=!0,u}function g(t){var a,r=f.charactersData[t.cId];t.school||(t.school={name:"默认",score:!0,reaction:0});var o=t.school.id;o&&(a=c.characterDamage[o]),a||(a=c.characterDamage[t.cId]);var p=d.weaponsData[t.wId];t.element=a.element?a.element:r.element,t.energy=r.energy,t.wType=p.type,t.wName=p.chs,t.version=v;var g=[];if(g=a.output?JSON.parse(JSON.stringify(a.output)):r.output?JSON.parse(JSON.stringify(r.output)):[[1,4,5]],void 0==t.school.reaction&&r.schools){var h=r.schools[0];h.reaction||(h.reaction=0),t.school=h}if(t.school.reaction>0&&g[0].indexOf(3)<0&&g[0].push(3),"5jueyuan"!=t.aIds[0]||t.aSets||g[0].indexOf(6)<0&&g[0].push(6),!t.school.tagNum){var x=g[0],b=[0,0,0,0,0,0,0],m=x.length;if(-1==x.indexOf(5)){for(var S=0;S<m;S++){var _=x[S];b[_]=0==S?9:1==S?4:3}b[x[0]]=9,b[x[1]]=4}else for(S=0;S<m;S++){var w=x[S];b[w]=4==w||5==w?9:0==S?4:3}t.school.tagNum=b,e("log","初始化默认词条："+b," at core/utils/preset.js:317")}if(t.tagNum||1!=t.aTagToMinor||(t.tagNum=JSON.parse(JSON.stringify(t.school.tagNum)),t.isAdapt=!0,t.adapt={type:0,limit:1,method:[0,0,0],total:24,min:[],max:0},e("log","重置当前词条："+t.tagNum," at core/utils/preset.js:333")),t.output=g,t.wIndexs||(p.forceOption&&p.forceOption[t.cId]?t.wIndexs=p.forceOption[t.cId]:t.wIndexs=p.indexs),!t.aIndexs&&!t.aSets){var y=u.artifactsData[t.aIds[0]];y.forceOption&&y.forceOption[t.cId]?t.aIndexs=y.forceOption[t.cId]:t.aIndexs=y.indexs}t.cPanel||(t.cPanel={HP:[0,0],HP_PERCENT:[0,0],ATTACK:[0,0],ATTACK_PERCENT:[0,0],DEFENSE:[0,0],DEFENSE_PERCENT:[0,0],FIRE_ADD_HURT:[0,0],ICE_ADD_HURT:[0,0],ROCK_ADD_HURT:[0,0],ELEC_ADD_HURT:[0,0],WIND_ADD_HURT:[0,0],WATER_ADD_HURT:[0,0],GRASS_ADD_HURT:[0,0],PHYSICAL_ADD_HURT:[0,0],HEAL_ADD:[0,0],ELEMENT_MASTERY:[0,0],CRITICAL:[0,0],CRITICAL_HURT:[0,0],CHARGE_EFFICIENCY:[0,0]}),t.uid||(0,n.getMajorData)(t);var T={character:r,preset:t,calculator:a,weapon:p};(0,n.getBaseData)(T),t.isAdapt&&0!=t.adapt.type&&((0,s.getBestTag)(T),e("log","自动计算最优"," at core/utils/preset.js:419")),(0,l.convertMinor)(t),(0,i.getBaseScore)(T),(0,i.getGroupScore)(T),(0,i.getDataScore)(T),(0,i.getTagScore)(T),(0,i.getWeightScore)(T),(0,i.getGWeightScore)(T)}t.version=v}).call(this,a("0de9")["log"])}}]);