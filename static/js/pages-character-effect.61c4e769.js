(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-effect"],{"00d0":function(e,t,a){"use strict";var r=a("4ea4");a("99af"),a("caad"),a("4e82"),a("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.maximize=u;var i=r(a("b85c")),n=r(a("5530"));function o(e,t,a){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i={},o=0,s=["cr","cd","atk","em","hp","def","er"],c={},l=0,u=0,d=s.length-1;d>=0;--d)c[s[d]]=[l,u],l+=a[s[d]][0],u+=a[s[d]][1];function f(t,l){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,v=s[u];if(u==s.length-1){if(l+d>41)return;t[v]=l;var h=e(t);h>o&&(o=h,i=(0,n.default)({},t))}else for(var p=Math.max(a[v][0],l-c[v][1]),g=Math.min(a[v][1],l-c[v][0],41-d),x=p;x<=g;x+=r)t[v]=x,f(t,l-x,u+1,Math.max(d,x))}return t=Math.floor(t),f({},t),{statBest:i,dmgBest:o}}function s(e,t,a){var r=o(e,t,a,2),i=r.statBest,n=(r.dmgBest,{});for(var s in a)n[s]=[a[s][0],a[s][1]],s in i&&(n[s][0]=Math.max(n[s][0],i[s]-3),n[s][1]=Math.min(n[s][1],i[s]+3));return o(e,t,n)}function c(e,t,a){var r=.1,i=2e3,n=1e-5,o=1e-5,s=1,c=2,l=-.5,u=.5;function d(t){var r=[];for(var i in t){if(i in a&&(t[i]<a[i][0]||t[i]>a[i][1]))return 0;t[i]>0&&r.push(t[i])}return r.sort((function(e,t){return t-e})),r.length>=2&&r[0]+r[1]>41?0:e(t)}var f=0,v=[],h=0,p=0,g=[];for(var x in a)if(h+=a[x][0],a[x][0]<a[x][1]){f++,v.push(x);var m=Math.random();p+=m*(a[x][1]-a[x][0]),g.push(m)}for(var b=[],_=0;_<v.length;++_){var w=v[_],S=(t-h)/(p+r*g[_]*(a[w][1]-a[w][0])),y={};for(var N in a)y[N]=a[N][0];for(var C=0;C<v.length;++C){var T=v[C],E=a[T][1]-a[T][0];y[T]+=S*g[C]*E,T==w&&(y[T]+=r*S*g[C]*E)}b.push({stat:y,dmg:d(y)})}function M(){b.sort((function(e,t){return t.dmg-e.dmg}))}function D(e,t,r,i){var n={stat:{},dmg:0};for(var o in a)n.stat[o]=e*t.stat[o]+r*i.stat[o];return n.dmg=d(n.stat),n}for(var k=0;k<i;++k){M();var A=0;for(var O in a)A=Math.max(A,Math.abs(b[0].stat[O]-b[1].stat[O]));if(Math.abs(b[0].dmg-b[f-1].dmg)<o&&A<n)break;var R={stat:{},dmg:0};for(var I in a){R.stat[I]=0;for(var P=0;P<f-1;++P)R.stat[I]+=b[P].stat[I];R.stat[I]/=f-1}var B=b[f-1],F=D(1+s,R,-s,B);if(F.dmg>b[0].dmg){var J=D(1+c,R,-c,B);J.dmg>F.dmg?b[f-1]=J:b[f-1]=F}else if(F.dmg<=b[f-1].dmg){var j=!1;if(F.dmg<B.dmg){var L=D(1+l,R,-l,B);L.dmg>B.dmg?b[f-1]=L:j=!0}else{var H=D(1-l*s,R,l*s,B);H.dmg>F.dmg?b[f-1]=H:j=!0}if(j){if(u>=1)break;for(var $=1;$<f;++$)b[$]=D(1-u,b[0],u,b[$])}}else b[f-1]=F}return M(),{statBest:b[0].stat,dmgBest:b[0].dmg}}function l(e,t,a){for(var r=5,i=c(e,t,a),n=i.statBest,s=i.dmgBest,l=1;l<r;++l){var u=c(e,t,a);u.dmgBest>s&&(n=u.statBest,s=u.dmgBest)}var d={};for(var f in a)d[f]=[a[f][0],a[f][1]],f in n&&(d[f][0]=Math.max(d[f][0],Math.ceil(n[f]-3)),d[f][1]=Math.min(d[f][1],Math.floor(n[f]+3)));return o(e,t,d)}function u(e,t,a,r,n){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"Brute",d={atk:[0,37],hp:[0,37],def:[0,37],em:[0,35],er:[0,35],cr:[0,35],cd:[0,35]};if(a){if(a.length>3)throw new Error("主词条列表长度不超过3，得到"+a.length);var f,v=(0,i.default)(a);try{for(v.s();!(f=v.n()).done;){var h=f.value;h in d&&(["atk","hp","def"].includes(h)?d[h][1]-=5:d[h][1]-=7)}}catch(E){v.e(E)}finally{v.f()}}if(n)for(var p in d)if(p in n&&(d[p][0]=Math.max(d[p][0],Math.ceil(n[p][0])),d[p][1]=Math.min(d[p][1],Math.floor(n[p][1])),d[p][0]>d[p][1]))throw new Error("".concat(p,"的实际取值范围无效：[").concat(d[p][0],", ").concat(d[p][1],"]"));if(r)for(var g in d)r.includes(g)||(d[g][1]=d[g][0]);var x=[],m=0,b=0;for(var _ in d)d[_][0]<d[_][1]&&x.push(_),m+=d[_][0],b+=d[_][1];if(t<m||t>b)throw new Error("没有可行解，因为".concat(t,"不在[").concat(m,", ").concat(b,"]内"));if(x.length<=1){var w={};for(var S in d)w[S]=Math.min(t-m+d[S][0],d[S][1]);return{statBest:w,dmgBest:e(w)}}if(t==m){var y={};for(var N in d)y[N]=d[N][0];return{statBest:y,dmgBest:e(y)}}if(t==b){var C={};for(var T in d)C[T]=d[T][1];return{statBest:C,dmgBest:e(C)}}switch(u){case"Brute":return o(e,t,d);case"BruteTwice":return s(e,t,d);case"NelderMead":return c(e,t,d);case"NelderMeadBrute":return l(e,t,d);default:throw new Error("未知的优化方法："+u)}}},"03ea":function(e,t,a){"use strict";var r=a("4ea4");a("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.getTag=d;var i=r(a("5530")),n=r(a("b85c")),o=a("175e"),s=["生","攻","防","精","暴","爆","充"],c=[["生命沙","攻击沙","防御沙","精通沙","充能沙"],["生命杯","攻击杯","防御杯","精通杯","元素杯","物理杯","火伤杯","冰伤杯","水伤杯","雷伤杯","草伤杯","岩伤杯","风伤杯"],["生命头","攻击头","防御头","精通头","暴击头","爆伤头","治疗头"]],l={fire:6,ice:7,water:8,thunder:9,grass:10,rock:11,wind:12},u={fire:"火伤",water:"水伤",thunder:"雷伤",ice:"冰伤",rock:"岩伤",wind:"风伤",grass:"草伤"};function d(e){var t,a=e.preset,r={},d=[],f=e.preset.tagNum,v=a.cPanel["HP"][0],h=a.cPanel["ATTACK"][0],p=a.cPanel["DEFENSE"][0],g=a.output,x=[],m=[],b=e.calculator.convert;if(e.convertTag=[],b){var _=JSON.parse(JSON.stringify(a));_.aMinor=[0,0,0,0,0,0,0,0],e.convertPresets=[_]}for(var w=0;w<g.length;w++){var S,y="",N=0,C=g[w],T=(0,n.default)(C);try{for(T.s();!(S=T.n()).done;){var E=S.value;if(0==w){var M=0,D="";switch(E){case 0:M=.05*v,D="词条 - 生命（ +5% / "+M.toFixed(0)+" ）";break;case 1:M=.05*h,D="词条 - 攻击（ +5% / "+M.toFixed(0)+" ）";break;case 2:M=.062*p,D="词条 - 防御（ +6.2% / "+M.toFixed(0)+" ）";break;case 3:M=20,D="词条 - 精通（ +20 ）";break;case 4:M=3.3,D="词条 - 暴击（ +3.3% ）";break;case 5:M=6.6,D="词条 - 爆伤（ +6.6% ）";break;case 6:M=5.5,D="词条 - 充能（ +5.5% ）";break;default:break}var k={title:D,note:"",text:0};x.push(k);var A=JSON.parse(JSON.stringify(a));if(A.aMinor[E]+=M,b){var O=b.indexOf(E);if(O>-1){var R=JSON.parse(JSON.stringify(e.convertPresets[0]));R.aMinor[E]+=M,e.convertPresets.push(R),e.convertTag.push(f[E])}}m.push(A)}y+=s[E],N+=f[E]}}catch(Ce){T.e(Ce)}finally{T.f()}var I={title:y,text:N.toFixed(1)};0==w?r=(0,i.default)({},I):d.push(I)}if(a.cLevel<90){var P=JSON.parse(JSON.stringify(a));P.cLevel=90;var B={character:e.character,preset:P,weapon:e.weapon};(0,o.getBaseData)(B),m.push(P),x.push({title:"人物 - 等级（ +"+(90-a.cLevel)+"级 ）",note:"",text:0})}if(a.wLevel<90){var F=JSON.parse(JSON.stringify(a));F.wLevel=90;var J={character:e.character,preset:F,weapon:e.weapon};(0,o.getBaseData)(J),m.push(F),x.push({title:"武器 - 等级（ +"+(90-a.wLevel)+"级 ）",note:"",text:0})}var j=null!==(t=e.calculator.skillKey)&&void 0!==t?t:e.character.skillKey;if(j){var L=[9,9];a.cStage>2&&(L=[12,12],a.cStage<5&&(e.character.isSkillFive?L[0]=9:L[1]=9));var H,$=[{key:"技能 - A（ +1级 ）",index:0,max:9},{key:"技能 - E（ +1级 ）",index:1,max:L[0]},{key:"技能 - Q（ +1级 ）",index:2,max:L[0]}],U=[],z=(0,n.default)(j);try{for(z.s();!(H=z.n()).done;){var Y=H.value,G=a.cSkills[Y],K=$[Y];0==Y&&G<K.max&&U.push(K),0!=Y&&G<K.max&&U.push(K)}}catch(Ce){z.e(Ce)}finally{z.f()}for(var W=0,q=U;W<q.length;W++){var Q=q[W],V=JSON.parse(JSON.stringify(a));V.cSkills[Q.index]+=1,m.push(V),x.push({title:Q.key,note:"",text:0})}}if(g[0].indexOf(5)>-1||e.calculator.convert){var X=JSON.parse(JSON.stringify(a));if(m.push(X),x.push({title:"其他 - 伤害加成（ +5% ）",note:"",isBonus:!0,text:0}),a.aMajor[1]<6||a.aMajor[1]==l[a.element]){var Z=a.aMajor[1],ee=e.calculator.preset?e.calculator.preset.aMajor:e.character.preset.aMajor,te=["HP","ATTACK","DEFENSE"];if(Z<3){var ae=JSON.parse(JSON.stringify(a)),re="（ 元素杯 ）",ie=4;5==ee[1]&&(re="（ 物理杯 ）",ie=5);var ne=.466;2==Z&&(ne=.583),ae.aMajor[1]=ie,(0,o.getMajorData)(ae),ae.aMinor[Z]-=ne*ae.cPanel[te[Z]][0],m.push(ae),x.push({title:"更换 - "+c[1][Z]+re,note:"",text:0})}else if(3!=Z){var oe=JSON.parse(JSON.stringify(a)),se="更换 - 元素杯";5==Z&&(se="更换 - 物理杯");var ce=.466,le="（ 攻击杯 ）";Z=1,2==ee[0]?(ce=.583,le="（ 防御杯 ）",Z=2):0==ee[0]&&(le="（ 生命杯 ）",Z=0),oe.aMajor[1]=Z,(0,o.getMajorData)(oe),oe.aMinor[Z]+=ce*oe.cPanel[te[Z]][0],m.push(oe),x.push({title:se+le,note:"",text:0})}}}var ue=[20,20,20,20,20],de=[];if(a.aConfigs){for(w=0;w<a.aConfigs.length;w++){var fe=a.aConfigs[w];ue[w]=20-fe[1]}ue[0]<20&&de.push(ue[0]+"花"),ue[1]<20&&de.push(ue[1]+"羽")}for(w=0;w<3;w++){var ve=a.aMajor[w];if(ve<99){var he="";he=1==w&&4==ve?u[a.element]+"杯":c[w][ve],ue[w+2]<20&&(he=ue[w+2]+he),de.push(he)}else de.push("无")}var pe=de.join(" / ");r.content=pe;var ge=[],xe=[],me=[];e.presets=m;for(w=0;w<s.length;w++){var be=f[w].toFixed(1),_e=s[w]+be,we=g[0].indexOf(w);if(we>-1){ge.push(_e);var Se=a.aMinor[w].toFixed(0)+s[w];me[we]=Se}else xe.push(_e)}var ye={title:"主要词条",text:ge.join(" / ")};d.push(ye);var Ne={title:"其他词条",text:xe.join(" / ")};d.push(Ne),g[0].indexOf(5)>-1?r.note="双爆: "+(2*a.aMinor[4]+a.aMinor[5]).toFixed(1):r.note="",a.tPanel=me.join(" / "),a.tResult=r,a.tResults=d,e.weights=x}},"0b7e":function(e,t,a){"use strict";(function(e){var r=a("4ea4");a("99af"),a("c975"),a("d81d"),a("fb6a"),a("4e82"),a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.getBaseScore=f,t.getTagScore=v,t.getDataScore=h,t.getGroupScore=p,t.getWeightScore=g,t.getGWeightScore=x,t.getPanel=m;var i=r(a("b85c")),n=a("149f"),o=a("175e"),s=a("7a53"),c=a("03ea"),l=a("b209"),u=a("e194"),d=a("0d89");function f(t){var a=t.preset,r=t.calculator.preset?t.calculator.preset:t.character.preset;t.oldPreset=r;var i=JSON.parse(JSON.stringify(r)),c=[8,8,8];4==t.character.star?(c=[8,11,11],i.cStage=6):i.cStage=0,i.cSkills=c,i.cLevel=90,i.wLevel=90,i.school=a.school,i.cId=a.cId,i.wType=a.wType,i.element=a.element,i.energy=a.energy,i.cPanel={HP:[0,4780],HP_PERCENT:[0,0],ATTACK:[0,311],ATTACK_PERCENT:[0,0],DEFENSE:[0,0],DEFENSE_PERCENT:[0,0],FIRE_ADD_HURT:[0,0],ICE_ADD_HURT:[0,0],ROCK_ADD_HURT:[0,0],ELEC_ADD_HURT:[0,0],WIND_ADD_HURT:[0,0],WATER_ADD_HURT:[0,0],PHYSICAL_ADD_HURT:[0,0],HEAL_ADD:[0,0],ELEMENT_MASTERY:[0,0],CRITICAL:[0,0],CRITICAL_HURT:[0,0],CHARGE_EFFICIENCY:[0,0]};var l=d.weaponsData[i.wId];if(i.wStage=5==l.star?0:4,i.wIndexs||(i.wIndexs=l.indexs),!i.aIndexs&&!i.aSets){var f=u.artifactsData[i.aIds[0]];f&&(i.aIndexs=f.indexs)}var v={character:t.character,preset:i,weapon:l};(0,o.getMajorData)(i),(0,o.getBaseData)(v),i.aTagToMinor=!0,i.tagNum=JSON.parse(JSON.stringify(a.school.tagNum)),(0,s.convertMinor)(i);var h=(0,n.buildAttribute)(i);a.output[0].indexOf(5)>-1&&(h.isBalance=!0),h.onlyScore=!0,t.calculator.get(h),t.baseScore=h.score,e.log("-------------"+t.character.chs+"-------------"),e.log("(1) C期望（默认圣遗物+默认配置）："+h.score)}function v(t){var a=t.preset,r=JSON.parse(JSON.stringify(a));r.aConfigs=null,r.aTagToMinor=!0;var i=null;"xiangling"==r.cId&&(i=[3,800]);var u=t.dataScore;if(i){var d=JSON.parse(JSON.stringify(a)),f=(0,n.buildAttribute)(d);f.onlyScore=!0,f.attackStatic+=i[1],f.em+=i[0],t.calculator.get(f),u=f.score,e.log(u)}var v=JSON.parse(JSON.stringify(r)),h=JSON.parse(JSON.stringify(a.school.tagNum)),p=h.map((function(e){return Math.round(5*e/3)}));v.tagNum=p,r.tagNum=h;var g=JSON.parse(JSON.stringify(r));r.aMajor=t.oldPreset.aMajor,(0,o.getMajorData)(r),(0,s.convertMinor)(r),(0,s.convertMinor)(g),(0,s.convertMinor)(v);var x=(0,n.buildAttribute)(v);i&&(x.attackStatic+=i[1],x.em+=i[0]),x.onlyScore=!0;var m=(0,n.buildAttribute)(g);i&&(m.attackStatic+=i[1],m.em+=i[0]),m.onlyScore=!0;var b=(0,n.buildAttribute)(r);b.onlyScore=!0,i&&(b.attackStatic+=i[1],b.em+=i[0]),a.output[0].indexOf(5)>-1?(b.isBalance=!0,x.isBalance=!0,m.isBalance=!0):(b.isBalance=!1,x.isBalance=!1,m.isBalance=!1),t.calculator.get(b);var _=b.score;e.log("(4) B期望（默认圣遗物+当前配置）："+_),t.calculator.get(m);var w=m.score;e.log("(5) D期望（默认词条数）："+w),t.calculator.get(x);var S=x.score;e.log("(6) E期望（极限词条数）："+S);var y=(S-w)/50,N=(u-w)/y+100,C=u/w*100,T=u/_*100,E=u/S*100;e.log("新算法1："+C.toFixed(0)),e.log("新算法2："+N.toFixed(0)),a.output[0].indexOf(5)>-1?a.tProgress=E.toFixed(0):a.tProgress=null,(0,c.getTag)(t);var M=T.toFixed(0),D=(0,l.getColor)(M);a.tResult.score=M,a.tResult.color=D,t.tagScore=_,a.score=t.supportScore?t.supportScore:a.tResult.score+" / "+a.dResult.score}function h(t){var a=t.preset,r=(0,n.buildAttribute)(a);t.attribute=r,r.isData=!0,t.calculator.get(r),a.dResult=r.result,a.dResults=r.results;var o=r.score;e.log("(3) A期望（当前圣遗物+当前配置）："+o),r.reacResult&&a.dResults.push(r.reacResult);var s=t.baseScore,c=(o/s*100).toFixed(0),d=(0,l.getColor)(c);a.dResult.score=c,a.dResult.color=d,t.dataScore=o,a.recharge=r.recharge;var f=t.baseData;r.dBuffs=f.concat(r.dBuffs),a.dBuffs=r.dBuffs,a.effects=r.effects;var v="",h=t.weapon.options;if(h){var p=a.wIndexs;if(p&&p[0]>0){v+="[";for(var g=0;g<p.length;g++){var x=p[g];v+=h[g][x]}v+="]"}}var b,_="",w=" ",S=(0,i.default)(a.cSkills);try{for(S.s();!(b=S.n()).done;){var y=b.value;w+=y+1}}catch(H){S.e(H)}finally{S.f()}var N="",C=u.artifactsData[a.aIds[0]];if(a.aSets){var T=u.artifactsData[a.aIds[1]];N=C.short[0]+T.short[0]+"二"}else{N=C.short+"四";var E=C.options;if(E){var M=a.aIndexs;if(M&&M[0]>0){_+="[";for(g=0;g<M.length;g++){var D=M[g];_+=E[g][D]}_+="]"}}}var k=t.weapon.chs.slice(0,2),A="";a.wLevel&&a.wLevel<90&&(A=a.wLevel,a.wAscend&&(A+="+"));var O=a.cLevel;a.cAscend?O+="+":O+="级";var R=O+" / "+a.cStage+"命 / 技能"+w,I=A+k+(a.wStage+1)+" / "+N;if(a.cNote=R,a.eNote=I,a.wNote=v,a.aNote=_,a.note=I+_+" / "+O+a.cStage+" /"+w,a.reactionText=r.reactionText?r.reactionText+" ":"",a.cData={em:r.em},t.preset.school.score||(t.supportScore=r.supportScore),r.isBalance)a.aMinor[4]+=r.resetCD.diffC,a.aMinor[5]+=r.resetCD.diffD,a.tagNum[4]=(a.aMinor[4]-100*a.cPanel["CRITICAL"][1])/3.3,a.tagNum[5]=(a.aMinor[5]-100*a.cPanel["CRITICAL_HURT"][1])/6.6,a.isAdapt=!1;else{var P=0;if(a.output[0].indexOf(5)>-1){var B=100*r.critical,F=100*r.criticalDamage;if(B<100)if(B*F<2e4){var J=Math.sqrt(8*B*F);P=(2*B+F-J)/6.6}else P=(2*B+F-200-B*F/100)/6.6;else if(F>200)P=(B-100)/3.3;else{var j=Math.sqrt(800*F);P=(2*B+F-j)/6.6}a.tLost=P.toFixed(1)}else a.tLost=null}var L=m(t);a.dPanel=L}function p(t){var a=t.preset;if(a.gIds&&a.gIds[1]){var r=(0,n.buildGroupAttribute)(a);t.attribute=r,t.calculator.get(r),a.gResult=r.result,a.gResults=r.results;var i=a.gResult.text;e.log("(2) E期望（+队伍增益）："+r.score),r.reacResult&&a.gResults.push(r.reacResult);var o=m(t);a.gPanel=o,a.gBuffs=r.gBuffs;var s=t.baseScore,c=(i/s*100).toFixed(0);a.gResult.score=c,a.gResult.color=(0,l.getColor)(c),a.groupScore=i}else a.gResult=null,a.gResults=null,a.gWeights=null,a.groupScore=null}function g(e){for(var t=e.preset,a=JSON.parse(JSON.stringify(e.weights)),r=[],i=0;i<a.length;i++){var o=a[i],s=e.presets[i],c=(0,n.buildAttribute)(s);c.onlyScore=!0,o.isBonus&&(c.bonus+=.05),e.calculator.get(c);var l=100*(c.score/e.dataScore-1);l>.05&&(o.text=l.toFixed(2),r.push(o))}if(e.calculator.convert){var u=Number(e.preset.tResult.text),d=(0,n.buildAttribute)(e.convertPresets[0]);d.onlyScore=!0,e.calculator.get(d);var f=d.score,v=(0,n.buildAttribute)(e.convertPresets[1]);v.onlyScore=!0,e.calculator.get(v);var h=v.score,p=(0,n.buildAttribute)(e.convertPresets[2]);p.onlyScore=!0,e.calculator.get(p);var g=p.score,x=100*(h/f-1),m=100*(g/f-1),b=[x,m],_=0,w=1;x>m&&(_=1,w=0);var S=e.convertTag[_]*(b[_]/b[w]-1),y=u+S;"shanhugongxinhai"!=e.preset.cId?e.preset.tResult.note+=" | ":e.preset.tResult.note="",e.preset.tResult.note+="词条："+e.preset.tResult.text,e.preset.tResult.text=y.toFixed(1),e.preset.tResult.rightText="折算 "+y.toFixed(1)}else e.preset.tResult.rightText="词条 "+e.preset.tResult.text;r.sort((function(e,t){return t.text-e.text})),t.weights=r}function x(e){for(var t=e.preset,a=JSON.parse(JSON.stringify(e.weights)),r=[],i=0;i<a.length;i++){var o=a[i],s=e.presets[i],c=(0,n.buildGroupAttribute)(s);c.onlyScore=!0,o.isBonus&&(c.bonus+=.05),e.calculator.get(c);var l=100*(c.score/e.preset.groupScore-1);l>.05&&(o.text=l.toFixed(2),r.push(o))}r.sort((function(e,t){return t.text-e.text})),t.gWeights=r}function m(e){var t,a=e.attribute,r=e.preset.output,n=!0,o=[],s=(0,i.default)(r[0]);try{for(s.s();!(t=s.n()).done;){var c=t.value;6==c&&(n=!1);var l=0,u="";switch(c){case 0:l=a.life().toFixed(0),u="生";break;case 1:l=a.atk().toFixed(0),u="攻";break;case 2:l=a.defend().toFixed(0),u="防";break;case 3:l=(100*a.em).toFixed(0),u="精";break;case 4:l=(100*a.critical).toFixed(0),u="暴";break;case 5:l=(100*a.criticalDamage).toFixed(0),u="爆";break;case 6:l=(100*a.recharge).toFixed(0),u="充";break;default:break}o.push(l+u)}}catch(v){s.e(v)}finally{s.f()}a.recharge>1&&n&&o.push((100*a.recharge).toFixed(0)+"充");var d=o.join(" / "),f=d;return f}}).call(this,a("5a52")["default"])},1205:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-e07ee5ea]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-e07ee5ea]{position:relative;z-index:-1}.uni-list--border-top[data-v-e07ee5ea]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-e07ee5ea]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),e.exports=t},1291:function(e,t,a){"use strict";a.r(t);var r=a("6b9d"),i=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},"1dfd":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),e.exports=t},2910:function(e,t,a){"use strict";var r=a("2c51"),i=a.n(r);i.a},"2c51":function(e,t,a){var r=a("3d1d");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=a("4f06").default;i("74f11b50",r,!0,{sourceMap:!1,shadowMode:!1})},"2d6e7":function(e,t,a){"use strict";a.r(t);var r=a("c569"),i=a("a57b");for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("2910");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"21c08166",null,!1,r["a"],o);t["default"]=c.exports},"3d1d":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,".image[data-v-21c08166]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-21c08166]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.uni-grid-item[data-v-21c08166]{height:auto!important}.grid-item-box[data-v-21c08166]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?40?% 0 0 0;margin:%?8?%;border-radius:%?8?%}",""]),e.exports=t},"3d37":function(e,t,a){"use strict";a.r(t);var r=a("444b"),i=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},"3d92":function(e,t,a){"use strict";a.r(t);var r=a("6bb3"),i=a("689e");for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("fce2");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"44c0d81e",null,!1,r["a"],o);t["default"]=c.exports},"444b":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};t.default=r},"526e":function(e,t,a){var r=a("a5c4");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=a("4f06").default;i("7f4fc1b0",r,!0,{sourceMap:!1,shadowMode:!1})},"689e":function(e,t,a){"use strict";a.r(t);var r=a("e7a4"),i=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},"6b9d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(e){this.$emit("scrolltolower")}}};t.default=r},"6bb3":function(e,t,a){"use strict";var r;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":e.isFull,"uni-card--shadow":e.isShadow,"uni-card--border":e.border},style:{margin:e.isFull?0:e.margin,padding:e.spacing,"box-shadow":e.isShadow?e.shadow:""}},[e._t("cover",[e.cover?a("v-uni-view",{staticClass:"uni-card__cover"},[a("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:e.cover},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("cover")}}})],1):e._e()]),e._t("title",[e.title||e.extra?a("v-uni-view",{staticClass:"uni-card__header"},[a("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("title")}}},[e.thumbnail?a("v-uni-view",{staticClass:"uni-card__header-avatar"},[a("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:e.thumbnail,mode:"aspectFit"}})],1):e._e(),a("v-uni-view",{staticClass:"uni-card__header-content"},[a("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[e._v(e._s(e.title))]),e.title&&e.subTitle?a("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[e._v(e._s(e.subTitle))]):e._e()],1)],1),a("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("extra")}}},[a("v-uni-text",{staticClass:"uni-card__header-extra-text"},[e._v(e._s(e.extra))])],1)],1):e._e()]),a("v-uni-view",{staticClass:"uni-card__content",style:{padding:e.padding},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("content")}}},[e._t("default")],2),a("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("actions")}}},[e._t("actions")],2)],2)},n=[]},"748d":function(e,t,a){"use strict";var r;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticStyle:{height:"100px"}}),a("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"content",style:{backgroundColor:e.color}},[e._v(e._s(e.text))]),a("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:e.color}})],1)],1)},n=[]},"84b3":function(e,t,a){var r=a("1205");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=a("4f06").default;i("9ed59e78",r,!0,{sourceMap:!1,shadowMode:!1})},a57b:function(e,t,a){"use strict";a.r(t);var r=a("b021"),i=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},a5c4:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-44c0d81e]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-44c0d81e]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-44c0d81e]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-44c0d81e]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-44c0d81e]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-44c0d81e]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-44c0d81e]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-44c0d81e]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-44c0d81e]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-44c0d81e]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-44c0d81e]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-44c0d81e]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-44c0d81e]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-44c0d81e]{font-size:12px}.uni-card--border[data-v-44c0d81e]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-44c0d81e]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-44c0d81e]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-44c0d81e]:after{border-radius:0}.uni-ellipsis[data-v-44c0d81e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),e.exports=t},aade:function(e,t,a){"use strict";(function(e){var r=a("4ea4");a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.getBestTag=o;var i=r(a("b85c")),n=a("149f");function o(t){var r,o=t.preset,s=Number(o.adapt.total),c=["hp","atk","def","em","cr","cd","er","cu","eb","eb"],l=["eb"],u=[],d=(0,i.default)(o.output[0]);try{for(d.s();!(r=d.n()).done;){var f=r.value;u.push(c[f])}}catch(N){d.e(N)}finally{d.f()}var v=a("00d0"),h={},p=["BruteTwice","NelderMeadBrute","Brute"],g=o.adapt.method;e.log(o.cPanel);for(var x=0;x<o.adapt.min.length;x++){var m=o.adapt.min[x];m&&m>0&&(h[c[x]]=[m,100])}var b=JSON.parse(JSON.stringify(o));b.aConfigs=null;var _=o.adapt.max?o.adapt.max+24:24;e.log(_);var w=function(e){var a=e.cr+e.cd;if(a>=_)return 0;var r=JSON.parse(JSON.stringify(b)),i=r.cPanel;r.aMinor[0]=(.05*e.hp+i["HP_PERCENT"][1])*i["HP"][0]+i["HP"][1],r.aMinor[1]=(.05*e.atk+i["ATTACK_PERCENT"][1])*i["ATTACK"][0]+i["ATTACK"][1],r.aMinor[2]=(.062*e.def+i["DEFENSE_PERCENT"][1])*i["DEFENSE"][0],r.aMinor[3]=20*e.em+100*i["ELEMENT_MASTERY"][1],r.aMinor[4]=3.3*e.cr+100*i["CRITICAL"][1],r.aMinor[5]=6.6*e.cd+100*i["CRITICAL_HURT"][1],r.aMinor[6]=5.5*e.er+100*i["CHARGE_EFFICIENCY"][1];var s={};return s=g[0]>0&&o.gResult?(0,n.buildGroupAttribute)(r):(0,n.buildAttribute)(r),t.calculator.get(s),Number(s.score)};try{Date.now();var S=v.maximize(w,s,l,u,h,p[g[1]]),y=(Date.now(),S.statBest);t.preset.tagNum=[y.hp,y.atk,y.def,y.em,y.cr,y.cd,y.er],e.log(y)}catch(C){e.error(C)}}}).call(this,a("5a52")["default"])},add1:function(e,t,a){"use strict";a.r(t);var r=a("bb28"),i=a("1291");for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("c286");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"e07ee5ea",null,!1,r["a"],o);t["default"]=c.exports},b021:function(e,t,a){"use strict";(function(e){var r=a("4ea4");a("4de4"),a("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("ade3")),n=r(a("b85c")),o=r(a("5530")),s=a("fedd"),c=a("4432"),l=a("26cb"),u={data:function(){return{eleNum:0,percentages:[0,0,0,0,0,0,0,0,0,0],disbaleObj:{},index:0,resonances:[],options:[],effectsArr:[[]],charactersData:{},closedObj:{},temp:{},names:[],presets:[],effectTextArrs:[],effects:[]}},computed:(0,o.default)({},(0,l.mapState)(["preset","selectIds","character","version"])),onUnload:function(){uni.$off("presetChanged")},onLoad:function(){this.temp=(0,o.default)({},this.preset),this.charactersData=c.charactersData;var e=this;e.initData(),uni.$on("presetChanged",(function(){e.initData(),e.$forceUpdate()}))},methods:{showBuff:function(e){if(this.buffIds){var t=this.buffIds.indexOf(e.id)>-1;return e.close=!t,t}return!e.close},toPanel:function(){},closeEffect:function(e){e.close?e.close=!e.close:e.close=!0},initPreset:function(e){var t=this;uni.showLoading({title:"初始化中..",mask:!0}),setTimeout((function(){(0,s.startCalculate)(e),t.$store.commit("storePreset",e),t.initData(),uni.hideLoading()}),2e3)},toDetail:function(e){this.$store.commit("backupPreset"),this.$store.commit("setPreset",e),uni.navigateTo({url:"./property?from=effect"})},save:function(){var t,a={},r=this.percentages,i=[],o=(0,n.default)(this.resonances);try{for(o.s();!(t=o.n()).done;){var c=t.value;a[c.id]=c}}catch(H){o.e(H)}finally{o.f()}var l,u=(0,n.default)(this.options);try{for(u.s();!(l=u.n()).done;){var d=l.value;d.close||(a[d.id]=d)}}catch(H){u.e(H)}finally{u.f()}var f,v=(0,n.default)(this.effectsArr);try{for(v.s();!(f=v.n()).done;){var h,p=f.value,g=(0,n.default)(p);try{for(g.s();!(h=g.n()).done;){var x=h.value;if(!x.close){var m=a[x.id];m?x.many?m.value+=x.value:x.value>m.value&&(a[x.id]=x):a[x.id]=x}}}catch(H){g.e(H)}finally{g.f()}}}catch(H){v.e(H)}finally{v.f()}for(var b in a){var _=a[b];if(_.dynamic){var w=JSON.parse(JSON.stringify(_));i.push(w)}if(_.index&&(r[_.index]+=_.value),"ranse"==b){var S=this.presets[1];if(S){var y=S.element,N=["fire","water","ice","thunder"],C=N.indexOf(y);if(C>-1){var T=["火","水","冰","雷"];a[b].value={eleText:T[C],ele:y},a[b].text=T[C],a[b].title="大招染色"}}}}for(var E=0,M=i;E<M.length;E++){var D=M[E],k=D.dynamic;if("yunjinQ"==D.id){var A=[.025,.05,.075,.115],O=A[this.eleNum-1]-.025;D.value=(r[k.index]*k.base+k.def)*(k.skill+O)}else if("naxidaT"==D.id){var R,I=k.em,P=(0,n.default)(this.presets);try{for(P.s();!(R=P.n()).done;){var B=R.value;"naxida"!=B.cId&&B.cData&&B.cData.em>I&&(I=B.cData.em)}}catch(H){P.e(H)}finally{P.f()}var F=r[k.index],J=I+F;D.value=Math.min(.25*J,2.5)}else{var j=r[k.index]*k.base*k.skill;D.value+=j,e.log(r),e.log(k),e.log(j)}var L="";L=0==k.show?D.value.toFixed(1):1==k.show?(100*D.value).toFixed(1):(100*D.value).toFixed(1)+"%",D.text=k.text+L,a[D.id]=D}this.temp.gContent=this.names.join(" / "),this.temp.gEffects=a,this.temp.isGoup=!0,this.temp.gIds=this.selectIds,(0,s.startCalculate)(this.temp),this.$store.commit("storePreset",this.temp),this.$store.commit("setPreset",this.temp),uni.navigateBack({delta:2})},initData:function(){this.eleNum=0,this.percentages=[0,0,0,0,0,0,0,0,0,0],this.effectsArr=[],this.presets=[],this.resonances=[],this.options=[],this.names=[],uni.showLoading({});for(var e={fire:0,rock:0,wind:0,ice:0,thunder:0,water:0,grass:0},t=0;t<this.selectIds.length;t++){var a=this.selectIds[t],r=(0,s.getPreset)(a);if(0==t){var n=r.effects.filter((function(e){return e.type<2&&!e.own}));this.effectsArr.push(n)}else{var o=r.effects.filter((function(e){return e.type>0}));this.effectsArr.push(o)}this.presets.push(r);var c=r.element;e[c]+=1,1==e[c]&&(this.eleNum+=1),t>0&&this.names.push(this.charactersData[a].chs)}"naxida"==this.temp.cId&&(this.temp.gData={fireNum:e.fire}),"yelan"==this.temp.cId&&(this.temp.gData={eleNum:this.eleNum}),e.fire>1&&(this.percentages[1]+=.25,this.resonances.push({id:"shuanghuo",title:"共鸣 - 双火",text:"攻击力提升25%"})),e.water>1&&(this.percentages[0]+=.25,this.resonances.push({id:"shuangshui",title:"共鸣 - 双水",text:"生命值提高25%"})),e.grass>1&&(this.percentages[3]+=.5,this.resonances.push({id:"shuangcao1",title:"共鸣 - 双草",text:"精通提升50"}),this.options.push((0,i.default)({index:3,value:.3,id:"shuangcao2",title:"共鸣 - 双草（燃烧/激化/绽放）",text:"精通提升30"},"index",3)),this.options.push((0,i.default)({index:3,value:.2,id:"shuangcao3",title:"共鸣 - 双草（超、蔓激化/超、烈绽放）",text:"精通提升20"},"index",3))),e.ice>1&&this.options.push({id:"shuangbing",title:"共鸣 - 双冰",text:"暴击率提升15%"}),e.rock>1&&(this.resonances.push({id:"shuangyan3",title:"共鸣 - 双岩（护盾）",text:"护盾强效提升15%"}),this.options.push({id:"shuangyan",title:"共鸣 - 双岩（增伤）",text:"伤害增加15%"}),this.options.push({id:"shuangyan2",title:"共鸣 - 双岩（减抗）",text:"目标岩元素抗性降低20%"})),e.ice>0&&e.thunder>0&&this.options.push({id:"chaodao",title:"效果 - 超导",text:"目标物理抗性降低40%"}),uni.hideLoading({})}}};t.default=u}).call(this,a("5a52")["default"])},b209:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColor=n,t.default=void 0;var r=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"];t.default=r;var i=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"];function n(e){var t=e/25;return t<0&&(t=0),t>4&&(t=4),i[Math.floor(t)]}},bb28:function(e,t,a){"use strict";var r;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[e.border?a("v-uni-view",{staticClass:"uni-list--border-top"}):e._e(),e._t("default"),e.border?a("v-uni-view",{staticClass:"uni-list--border-bottom"}):e._e()],2)},n=[]},bcee:function(e,t,a){"use strict";var r=a("e52b"),i=a.n(r);i.a},c286:function(e,t,a){"use strict";var r=a("84b3"),i=a.n(r);i.a},c569:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var r={uniCard:a("3d92").default,uniList:a("add1").default,uniListItem:a("6e18").default,buttonBarBottom:a("e265").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("uni-card",{attrs:{margin:"20px"}},[a("v-uni-view",[e._v("队友增益说明：")]),a("v-uni-view",[e._v("1、所有增益都是开关，可以自行设置是否启用。")]),a("v-uni-view",[e._v("2、无法读展示柜的角色信息，需要将角色信息保存到本地才能读取。")])],1),e._l(e.presets,(function(t,r){return a("uni-card",{key:t.cId,attrs:{margin:"20px",padding:"0",spacing:"0"}},[t.cNote?a("uni-list",[0==r?a("v-uni-view",[a("uni-list-item",{attrs:{"thumb-size":"lg",thumb:e.charactersData[t.cId].avatar,title:t.cNote,note:t.eNote}}),e._l(e.resonances,(function(e,t){return a("uni-list-item",{key:e.title,attrs:{title:e.title,note:e.text}})})),e._l(e.options,(function(t,r){return a("uni-list-item",{key:t.title,attrs:{showSwitch:"true",switchChecked:"true",title:t.title,note:t.text},on:{switchChange:function(a){arguments[0]=a=e.$handleEvent(a),e.closeEffect(t)}}})}))],2):a("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:e.charactersData[t.cId].avatar,title:t.cNote,note:t.eNote,rightText:"配置",showArrow:!0},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.toDetail(t)}}}),e._l(e.effectsArr[r],(function(t,r){return a("uni-list-item",{key:r,attrs:{showSwitch:!0,switchChecked:!t.close,clickable:!0,title:t.title,note:t.text},on:{switchChange:function(a){arguments[0]=a=e.$handleEvent(a),e.closeEffect(t)}}})}))],2):a("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:e.charactersData[t.cId].avatar,title:"该角色未初始化，无法读取增益信息..",rightText:"配置",showArrow:!0},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.initPreset(t)}}})],1)})),a("button-bar-bottom",{attrs:{text:"保存"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save()}}})],2)},n=[]},e265:function(e,t,a){"use strict";a.r(t);var r=a("748d"),i=a("3d37");for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("bcee");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"d83b913c",null,!1,r["a"],o);t["default"]=c.exports},e52b:function(e,t,a){var r=a("1dfd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=a("4f06").default;i("8c48942a",r,!0,{sourceMap:!1,shadowMode:!1})},e7a4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(e){this.$emit("click",e)}}};t.default=r},fce2:function(e,t,a){"use strict";var r=a("526e"),i=a.n(r);i.a},fedd:function(e,t,a){"use strict";(function(e){var r=a("4ea4");a("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.initPreset=h,t.createPreset=p,t.getPreset=g,t.startCalculate=x,t.version=void 0;var i=r(a("5530")),n=a("0b7e"),o=a("175e"),s=a("aade"),c=a("433a"),l=a("7a53"),u=a("e194"),d=a("0d89"),f=a("4432"),v="2022年8月24日 15:37:17";function h(e,t){var a,r=t||e.name;"kong"==r&&(r="traveller");var n=e.element,o=null!==(a=c.characterDamage[r])&&void 0!==a?a:c.characterDamage[e.name];"traveller"==r&&(n=o.element);var s={cId:e.name,element:n,id:Date.now(),name:"默认预设",cSkills:[8,8,8],cLevel:90,wLevel:90,cAscend:!1,wAscend:!1,effects:[],isAdapt:void 0,type:0,reactionText:""};4==e.star&&(s.cSkills=[8,11,11]);var l=d.weaponsData[o.preset.wId];s.wStage=5==l.star?0:4,s.cStage=5==e.star?0:6;var u=(0,i.default)((0,i.default)({},s),o.preset);return u.aTagToMinor=!0,u}function p(e){var t=f.charactersData[e];return h(t)}function g(t){var a=f.charactersData[t],r=uni.getStorageSync(t);return r?(r.version&&v==r.version||(x(r,v),e.log("刷新！！"),uni.setStorageSync(r.cId,r)),r):h(a)}function x(t){var a,r=f.charactersData[t.cId];t.school||(t.school={name:"默认",score:!0,reaction:0});var i=t.school.id;i&&(a=c.characterDamage[i]),a||(a=c.characterDamage[t.cId]);var h=d.weaponsData[t.wId];t.element=a.element?a.element:r.element,t.energy=r.energy,t.wType=h.type,t.wName=h.chs,t.version=v;var p=[];if(p=a.output?JSON.parse(JSON.stringify(a.output)):r.output?JSON.parse(JSON.stringify(r.output)):[[1,4,5]],void 0==t.school.reaction&&r.schools){var g=r.schools[0];g.reaction||(g.reaction=0),t.school=g}if(t.school.reaction>0&&p[0].indexOf(3)<0&&p[0].push(3),"5jueyuan"!=t.aIds[0]||t.aSets||p[0].indexOf(6)<0&&p[0].push(6),!t.school.tagNum){var x=p[0],m=[0,0,0,0,0,0,0],b=x.length;if(-1==x.indexOf(5)){for(var _=0;_<b;_++){var w=x[_];m[w]=0==_?9:1==_?4:3}m[x[0]]=9,m[x[1]]=4}else for(_=0;_<b;_++){var S=x[_];m[S]=4==S||5==S?9:0==_?4:3}t.school.tagNum=m,e.log("初始化默认词条："+m)}if(t.tagNum||1!=t.aTagToMinor||(t.tagNum=JSON.parse(JSON.stringify(t.school.tagNum)),t.isAdapt=!0,t.adapt={type:0,limit:1,method:[0,0,0],total:24,min:[],max:0},e.log("重置当前词条："+t.tagNum)),t.output=p,t.wIndexs||(h.forceOption&&h.forceOption[t.cId]?t.wIndexs=h.forceOption[t.cId]:t.wIndexs=h.indexs),!t.aIndexs&&!t.aSets){var y=u.artifactsData[t.aIds[0]];y.forceOption&&y.forceOption[t.cId]?t.aIndexs=y.forceOption[t.cId]:t.aIndexs=y.indexs}t.cPanel||(t.cPanel={HP:[0,0],HP_PERCENT:[0,0],ATTACK:[0,0],ATTACK_PERCENT:[0,0],DEFENSE:[0,0],DEFENSE_PERCENT:[0,0],FIRE_ADD_HURT:[0,0],ICE_ADD_HURT:[0,0],ROCK_ADD_HURT:[0,0],ELEC_ADD_HURT:[0,0],WIND_ADD_HURT:[0,0],WATER_ADD_HURT:[0,0],GRASS_ADD_HURT:[0,0],PHYSICAL_ADD_HURT:[0,0],HEAL_ADD:[0,0],ELEMENT_MASTERY:[0,0],CRITICAL:[0,0],CRITICAL_HURT:[0,0],CHARGE_EFFICIENCY:[0,0]}),t.uid||(0,o.getMajorData)(t);var N={character:r,preset:t,calculator:a,weapon:h};(0,o.getBaseData)(N),t.isAdapt&&0!=t.adapt.type&&((0,s.getBestTag)(N),e.log("自动计算最优")),(0,l.convertMinor)(t),(0,n.getBaseScore)(N),(0,n.getGroupScore)(N),(0,n.getDataScore)(N),(0,n.getTagScore)(N),(0,n.getWeightScore)(N),(0,n.getGWeightScore)(N)}t.version=v}).call(this,a("5a52")["default"])}}]);