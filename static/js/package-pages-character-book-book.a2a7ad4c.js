(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-book-book"],{"03aa":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"072e":function(t,e,i){"use strict";i.r(e);var n=i("03aa"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"1b69":function(t,e,i){"use strict";i.r(e);var n=i("a7a0"),o=i("072e");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("a253");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"42ced052",null,!1,n["a"],void 0);e["default"]=s.exports},"1cb5":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},"1de9":function(t,e,i){"use strict";var n=i("f5df5"),o=i.n(n);o.a},"2d71":function(t,e,i){"use strict";i.r(e);var n=i("89fe"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},3300:function(t,e,i){var n=i("87e0");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("be18ff12",n,!0,{sourceMap:!1,shadowMode:!1})},"3e80":function(t,e,i){"use strict";i.r(e);var n=i("b326"),o=i("546e");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("1de9");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"6fce09b0",null,!1,n["a"],void 0);e["default"]=s.exports},"495c":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},scroll:function(t){this.$emit("scroll",t)}}};e.default=n},"52ab":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{height:"100px"}}),i("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content",style:{backgroundColor:t.color}},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:t.color}})],1)],1)},o=[]},"52fd":function(t,e,i){"use strict";var n=i("ca64"),o=i.n(n);o.a},"546e":function(t,e,i){"use strict";i.r(e);var n=i("495c"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"5b61":function(t,e,i){"use strict";i.r(e);var n=i("effc"),o=i("2d71");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("52fd");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"a560b55a",null,!1,n["a"],void 0);e["default"]=s.exports},"5c12":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},6302:function(t,e,i){"use strict";i.r(e);var n=i("1cb5"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"633c":function(t,e,i){"use strict";var n=i("3300"),o=i.n(n);o.a},"74f2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},"87e0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},"89fe":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("14d9");var o=n(i("5530")),a=n(i("2c31")),r=n(i("bfd9")),s=i("7117"),l=i("26cb"),c=n(i("a94a")),u={data:function(){return{manager:{},names:{},cId:"",book:{default:{weapons:[],artifacts:[]}},ImageUrl:{},index:0,info:{},saveText:"保存",school:null,mySchools:[{score:!1,name:"自定义流派",reaction:0}],schoolArr:[{score:!0,name:"默认",reaction:0}],schoolIndex:0,margin:"0 14px 20px"}},computed:(0,o.default)((0,o.default)({},(0,l.mapState)(["preset","favObj"])),(0,l.mapGetters)(["character"])),onLoad:function(t){this.ImageUrl=r.default,this.index=t.index;var e=this.character;uni.setNavigationBarTitle({title:a.default[e.name]});var i,n=this.preset,o=this.favObj[e.name];if(e.schools&&(this.schoolArr=JSON.parse(JSON.stringify(e.schools))),e.skills){var s,l=JSON.parse(JSON.stringify(e.skills)),u=null!==(s=this.preset.cSkills)&&void 0!==s?s:[8,8,8];c.default.init(l,u)}(o.selected?c.default.selected=JSON.parse(JSON.stringify(o.selected)):c.default.selected=e.skills?JSON.parse(JSON.stringify(e.skills.selected)):[],o.school?c.default.school=JSON.parse(JSON.stringify(o.school)):(this.isNew=!0,c.default.school={score:!1,name:"自定义流派",reaction:0,index:-3,user:!0,core:c.default.selected[0],output:[[4,5]]}),c.default.cId=e.name,c.default.school.custom||(c.default.school.custom={title:"技能组合（自定义）期望",note:"选择多个技能进行组合（下个页面）",open:!1,keys:[],items:{}}),this.manager=c.default,99==this.index)?this.saveText="开始计算":this.schoolIndex=null!==(i=n.school.index)&&void 0!==i?i:0;if("fire"==e.element){var d={score:!1,name:"通用（烈绽放）",title:"烈绽放（引爆）期望",note:"引暴伤害",reaction:0,boom:7,short:"烈绽",text:"伤害值"};this.schoolArr.push(d),c.default.boom=d}if(("water"==e.element||"grass"==e.element)&&"kawei"!=e.name){var f={score:!1,name:"通用（绽放）",title:"绽放（种子）期望",note:"触发伤害",text:"伤害值",short:"种子",reaction:0,boom:5};this.schoolArr.push(f),c.default.boom=f}if("thunder"==e.element){var v={score:!1,name:"通用（超绽放）",title:"超绽放（引爆）期望",note:"引暴伤害",text:"伤害值",short:"超绽",reaction:3,boom:6};this.schoolArr.push(v),c.default.boom=v}this.selectSchoolIndex(this.schoolIndex)},methods:{getReactText:function(t){var e=t.reaction;return t.boom&&(e=t.boom),["无","蒸发","融化","超激化","蔓激化","绽放","超绽放","烈绽放"][e]},resetItem:function(){var t=this;uni.showModal({title:"提示",content:"确认是恢复默认设置？",success:function(e){e.confirm&&(t.manager.selected=JSON.parse(JSON.stringify(t.character.skills.selected)))}})},save:function(){this.$store.commit("setSelected",this.manager.selected);var t=this.school.user?this.manager.school:this.school;if(99==this.index){var e=(0,s.initPreset)(this.character,this.school);e.school=t,(0,s.startCalculate)(e),this.$store.commit("setPreset",e),uni.redirectTo({url:"./../equipment?from=school"})}else{var i=JSON.parse(JSON.stringify(this.preset));i.school=t;var n=i.school.element;n&&(i.element=n),(0,s.startCalculate)(i),this.index<99?(this.$store.commit("changeProfile",{temp:i,index:this.index}),this.$store.commit("setPreset",i)):(this.$store.dispatch("storePreset",i),this.$store.commit("setPreset",i)),this.$store.commit("storeFavObj",i),uni.navigateBack({delta:1})}},goDetail:function(){this.school.boom?uni.showToast({icon:"none",title:"绽放(种子)流派的触发者主要需要精通"}):uni.navigateTo({url:"./detail?react="+this.school.reaction})},goWiki:function(t){uni.navigateTo({url:"./wiki?id="+t})},goConfig:function(){uni.navigateTo({url:"./config"})},goSort:function(){uni.navigateTo({url:"./sort"})},selectSchoolIndex:function(t){if(-2!=t)if(-1!=t){if(this.schoolIndex=t,-3!=t){var e=this.schoolArr[t];e.index=t,this.school=e}else if(this.school=this.manager.school,this.isNew){var i=this;uni.showModal({title:"提示",content:"该角色未配置自定义流派，是否进行配置？",success:function(t){t.confirm&&i.goConfig()}})}}else uni.showToast({icon:"none",title:"开发中..."});else uni.showToast({icon:"none",title:"内置流派无法修改.."})}}};e.default=u},a253:function(t,e,i){"use strict";var n=i("e177b"),o=i.n(n);o.a},a7a0:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("d0c7").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},a=[]},a94a:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a434"),i("3c65"),i("14d9"),i("99af");var n={school:{},cId:"",selected:[],all:null,init:function(t,e){var i,n={},s={e:e[1],q:e[2]},c=t.mults,u=null!==(i=t.countTexts)&&void 0!==i?i:{};for(var d in t.items){var f,v,h,p,m=t.items[d];m.base=null!==(f=m.base)&&void 0!==f?f:["atk"],1==m.base.length&&m.base.push(d);var b,g=m.title,x=null!==(v=m.key)&&void 0!==v?v:d[0];if(!g)g=null!==(b=t.titles[x])&&void 0!==b?b:t.titles.a;var w,_,y=x.toUpperCase()+" ";if(g=y+g+"（",m.stage)g+=m.stage+"命"+(null!==(w=m.text)&&void 0!==w?w:"");else g+=null!==(_=m.text)&&void 0!==_?_:"技能";g+="）";var k="";2==m.type?(g+="护盾",k=g):1==m.type?(g+="治疗",k=g):(k=g,g+="暴击",k+="期望");var S=null!==(h=m.itemNote)&&void 0!==h?h:"";if(""==S){var O,C=null!==(O=s[x])&&void 0!==O?O:e[0];S+=a(c,m.base,C,m.type),m.plus&&(S+=" + "+a(c,m.plus,C)),m.countText&&(g+=" x "+m.countText),u[d]&&(g+=" x "+u[d])}var I=null!==(p=m.type)&&void 0!==p?p:0;n[d]=[g,S,k,I,!1]}for(var T=0;T<t.counts.length;T++)for(var $=t.counts[T],M=0==T?"a":"b",N=0;N<$;N++){var j=N+1,B=M+j,J=c[B];if(J&&!n[B]){var E=M.toLocaleUpperCase(),z="".concat(E," ").concat(t.titles.a,"（");z+="b"==M?c["aim"]?"蓄力":"重击":"".concat(B[1],"段"),z+="）";var P=J[[e[0]]],A=l(P);u[B]&&(A+=" x "+u[B]),n[B]=o(z,A)}}if(c.b11){var U="B ".concat(t.titles.a,"（重击x2）"),F=c["b11"][e[0]],L=l(F),Y=c["b12"][e[0]];L+=" + "+l(Y),n["b11"]=o(U,L)}if(c.b21){var R="B ".concat(t.titles.a,"（重击x3）"),q=c["b21"][e[0]],D=l(q),G=c["b22"][e[0]];D+=" + "+l(G);var W=c["b23"][e[0]];D+=" + "+l(W),n["b21"]=o(R,D)}if(c.b9){var H="B ".concat(t.titles.a,"（终结）"),K=c["b9"][e[0]],Q=l(K);n["b9"]=o(H,Q)}if(c.air1)for(T=1;T<4;T++){var V="air"+T,X="AIR ".concat(t.titles.a,"（");X+=r[T-1],X+="）";var Z=c[V][e[0]],tt=l(Z);n[V]=o(X,tt)}if(c.aim){var et="B ".concat(t.titles.a,"（瞄准）"),it=c["aim"][e[0]],nt=l(it);n["aim"]=o(et,nt)}this.all=n},addItem:function(t){this.selected.push(t)},delItem:function(t){this.selected.splice(t,1)},moveDown:function(t){if(t<this.selected.length-1){var e=this.selected.splice(t,1)[0];this.selected.splice(t+1,0,e)}},moveUp:function(t){if(t>0){var e=this.selected.splice(t,1)[0];this.selected.splice(t-1,0,e)}},moveTop:function(t){if(t>0){var e=this.selected.splice(t,1)[0];this.selected.unshift(e)}}};function o(t,e){return[t+"暴击",e,t+"期望",0,!1]}function a(t,e,i,n){var o=e[1],a=e[0];if("string"==typeof o){var r=s(t,o,i),c=l(r,a),u=e[2];if(u){var d=s(t,u,i);if(n)c+=" + "+d;else{var f=e[3];f?c+=" + "+l(d*f,a):c=l(r*d,a)}}return c}return l(o,a)}e.default=n;var r=["下坠","低空","高空"];function s(t,e,i){if("string"==typeof e){var n=t[e];return n?n[i]:"错误！"}return e}function l(t,e){if(!t)return"";var i="";i+=(100*t).toFixed(1)+"%";var n="攻击";return e&&(n={atk:"攻击",life:"生命",em:"精通",def:"防御"}[e]),i+=n,i}},b326:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},o=[]},b615:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".note-text[data-v-a560b55a]{padding:15px;font-size:14px;color:#666;line-height:22px}.uni-group[data-v-a560b55a]{display:flex;align-items:center;justify-content:center}.uni-group-item[data-v-a560b55a]{margin-left:8px;padding:0 8px;line-height:40px\n\t/* \twidth: 40px; */}",""]),t.exports=e},c37c:function(t,e,i){"use strict";i.r(e);var n=i("52ab"),o=i("6302");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("633c");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"d83b913c",null,!1,n["a"],void 0);e["default"]=s.exports},ca64:function(t,e,i){var n=i("b615");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("5ba008dd",n,!0,{sourceMap:!1,shadowMode:!1})},e177b:function(t,e,i){var n=i("74f2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("3a1f529a",n,!0,{sourceMap:!1,shadowMode:!1})},effc:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniSection:i("1b69").default,uniListItem:i("9d9b").default,uniIcons:i("d0c7").default,uniList:i("3e80").default,buttonBarBottom:i("c37c").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-section",{attrs:{title:"选择流派",type:"line"}}),i("v-uni-radio-group",[i("v-uni-view",{staticClass:"uni-list"},[t._l(t.schoolArr,(function(e,n){return i("uni-list-item",{key:e.name,attrs:{title:e.name,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSchoolIndex(n)}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-radio",{attrs:{color:"#ad9388",checked:n==t.schoolIndex}})]},proxy:!0}],null,!0)})})),i("uni-list-item",{key:t.manager.school.name,attrs:{title:t.manager.school.name,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSchoolIndex(-3)}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-radio",{attrs:{color:"#ad9388",checked:-3==t.schoolIndex}})]},proxy:!0}])})],2)],1),t.character.skills?i("v-uni-view",[t.school.user?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goConfig()}}},[i("uni-section",{attrs:{title:"核心技能",type:"line","right-text":"设置"}}),t.manager.school.core?i("uni-list-item",{attrs:{"show-arrow":!0,title:t.manager.all[t.manager.school.core][2],note:t.manager.all[t.manager.school.core][1],"right-text":"流派选项"}}):i("uni-list-item",{attrs:{"show-arrow":!0,title:t.manager.school.custom.title,note:t.manager.school.custom.note,"right-text":"流派选项"}})],1):i("v-uni-view",[i("uni-section",{attrs:{title:"核心技能",type:"line"}}),t.school.title?i("uni-list-item",{attrs:{title:t.school.title,note:t.school.note}}):i("uni-list-item",{attrs:{title:t.manager.all[t.school.core][2],note:t.manager.all[t.school.core][1]}})],1),i("uni-section",{attrs:{title:"计算项目",type:"line","right-text":"排序"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSort.apply(void 0,arguments)}}}),t._l(t.manager.selected,(function(e,n){return t.manager.all[e]?i("uni-list-item",{key:n,attrs:{title:t.manager.all[e][0],note:t.manager.all[e][1],clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.manager.delItem(n)}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-view",{staticClass:"uni-group"},[i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"}},[i("uni-icons",{attrs:{type:"trash"}})],1)],1)]},proxy:!0}],null,!0)}):t._e()})),i("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:0==t.manager.selected.length,expression:"manager.selected.length == 0"}],attrs:{title:"无项目..",note:"点击下方进行选择"}}),i("uni-section",{attrs:{title:"其他项目",type:"line","right-text":"重置"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.resetItem.apply(void 0,arguments)}}}),i("uni-list",t._l(t.manager.all,(function(e,n){return i("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:-1==t.manager.selected.indexOf(n),expression:"manager.selected.indexOf(t2) == -1"}],key:n,attrs:{title:e[0],note:e[1],clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.manager.addItem(n)}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"}},[i("uni-icons",{attrs:{type:"plusempty"}})],1)]},proxy:!0}],null,!0)})})),1)],2):t._e(),i("button-bar-bottom",{attrs:{text:t.saveText},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}})],1)},a=[]},f5df5:function(t,e,i){var n=i("5c12");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("9a96d704",n,!0,{sourceMap:!1,shadowMode:!1})}}]);