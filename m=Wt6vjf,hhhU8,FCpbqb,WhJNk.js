"use strict";this.default_OneGoogleWidgetUi=this.default_OneGoogleWidgetUi||{};(function(_){var window=this;
try{
_.w("Wt6vjf");

var Ty=function(a){_.J.call(this,a)};_.G(Ty,_.J);Ty.prototype.ab=function(){return _.Hj(this,1)};Ty.prototype.Ac=function(a){_.A(this,1,a)};Ty.jc="f.bo";
var Uy=function(){_.Km.call(this)};_.G(Uy,_.Km);Uy.prototype.nb=function(){this.Fs=!1;Vy(this);_.Km.prototype.nb.call(this)};Uy.prototype.j=function(){Wy(this);if(this.vl)return Xy(this),!1;if(!this.Ft)return Yy(this),!0;this.dispatchEvent("m");if(!this.Iq)return Yy(this),!0;this.yp?(this.dispatchEvent("o"),Yy(this)):Xy(this);return!1};
var Zy=function(a){var b=new _.Au(a.qz);null!=a.Ar&&b.j.set("authuser",a.Ar);return b},Xy=function(a){a.vl=!0;var b=Zy(a),c="rt=r&f_uid="+_.Fh(a.Iq);_.gt(b,(0,_.I)(a.o,a),"POST",c)};
Uy.prototype.o=function(a){a=a.target;Wy(this);if(_.ot(a)){this.wo=0;if(this.yp)this.vl=!1,this.dispatchEvent("o");else if(this.Ft)this.dispatchEvent("p");else{try{var b=_.pt(a),c=JSON.parse(b.substring(b.indexOf("\n")));var d=(new Ty(c[0])).ab()}catch(e){_.qe(null,e);this.dispatchEvent("q");$y(this);return}this.vl=!1;d?this.dispatchEvent("n"):this.dispatchEvent("o")}Yy(this)}else{if(0!=a.Uf()){d="";try{d=_.pt(a)}catch(e){}a=Error("ub`"+a.Uf()+"`"+Zy(this).toString()+"`"+String(a.O)+"`"+d);_.qe(null,
a);this.dispatchEvent("q")}$y(this)}};var Wy=function(a){var b=_.Sy.get("https:"==window.location.protocol?"SAPISID":"APISID","");a.yp=""!==a.vo&&""===b;a.Ft=a.vo!=b;a.vo=b},$y=function(a){a.yp||(a.vl=!0,a.wo=Math.min(2*(a.wo||3),60),Yy(a))},Yy=function(a){if(a.Fs||a.vl)Vy(a),a.iq=window.setTimeout((0,_.I)(a.j,a),1E3*Math.max(3,a.wo))},Vy=function(a){a.iq&&(window.clearTimeout(a.iq),a.iq=0)};_.h=Uy.prototype;_.h.wo=0;_.h.iq=0;_.h.vo=null;_.h.yp=!1;_.h.Ft=!1;_.h.Ar=null;_.h.qz="/_/idv/";_.h.Iq="";
_.h.Fs=!1;_.h.vl=!1;_.Gc(_.Dk,Uy);
_.na().xd(function(a){var b=new Uy;_.Es(a,_.Dk,b);if(_.yu()){a=_.yu();var c=_.xc("WZsZ1e").Ya(null);b.Iq=a;void 0!==c&&(b.vo=c);a=_.zu();_.Dg(a,"/")||(a="/"+a);b.qz=a+"/idv/";(a=_.ak())&&_.xc("gGcLoe").j(!1)&&(b.Ar=a);b.Fs=!0;b.j()}});

_.y();

_.w("hhhU8");

var EK=function(){return!(!window.performance||!window.performance.timing)},GK=function(a,b,c,d,e){0>=c||0>=d||_.dI(a,b,d-c)&&(e||FK(a,c))(b,d)},HK=function(a){if(EK()){var b=_.oH,c=window.performance.timing;var d=null!=b.o?b.o:EK()?window.performance.timing.navigationStart:void 0;b=null!=b.N?b.N:EK()?window.performance.timing.responseStart:void 0;a.na.push({label:"addNavigationTimings",timing:c});GK(a,"dns",c.domainLookupStart,c.domainLookupEnd);GK(a,"con",c.connectStart,c.connectEnd);GK(a,"req",
c.requestStart,b);GK(a,"rcv",b,c.responseEnd);if(0<d){var e=FK(a,d);GK(a,"ntsrt",d,b,e);GK(a,"nsfs",d,c.fetchStart,e);GK(a,"ntplt0",d,c.loadEventStart,e);GK(a,"ntplt1",d,c.loadEventEnd,e)}}},IK=function(a){if(_.t.performance&&_.t.performance.getEntriesByType&&0!=_.t.performance.getEntriesByType("paint").length){a=FK(a,0);var b=_.t.performance.getEntriesByType("paint");b=_.E(b);for(var c=b.next();!c.done;c=b.next())switch(c=c.value,c.name){case "first-paint":a("fp",c.startTime+c.duration);break;case "first-contentful-paint":a("fcp",
c.startTime+c.duration)}}},JK=function(a){var b;return _.t.PerformanceObserver&&_.t.PerformanceObserver.prototype.takeRecords&&(null==(b=_.t.PerformanceObserver.supportedEntryTypes)?void 0:b.includes(a))},KK=function(a){if(!JK(a))return[];var b=new PerformanceObserver(function(){});b.observe({type:a,buffered:!0});a=b.takeRecords();b.disconnect();return a},MK=function(a){if(!LK){var b=KK("first-input");0!==b.length&&(b=b[0].processingStart-b[0].startTime,0<=b&&6E5>=b&&(_.sH(a,[{nativeFirstInputDelay:b}]),
LK=!0))}},NK=function(a){var b=KK("largest-contentful-paint");0<b.length&&(b=b[b.length-1].startTime,FK(a,0)("lcp",b));MK(a);if(JK("layout-shift")){b=KK("layout-shift").filter(function(d){return!d.hadRecentInput}).map(function(d){return d.value}).reduce(function(d,e){return d+e},0);var c={};c.cls=Math.floor(1E3*b);_.sH(a,[c])}},OK=function(){var a=_.iI("WMove",_.$H);_.TH(a.j.j);_.tH(a);_.HE&&_.cI(a,"animFps",1E3/(_.GE/_.DE));var b=[];if(!_.Vq.O&&null!=_.Vq.v){var c={};c.firstInputDelay=_.Vq.v;b.push(c);
_.Vq.O=!0}null!=_.Vq.j&&(c={},c.averageInputDelay=_.Vq.j,b.push(c));_.Vq.N||null==_.Vq.o||(c={},c.firstInputCodeLoadingDelay=_.Vq.o,b.push(c),_.Vq.N=!0);_.Vq.H=0;_.Vq.j=null;_.sH(a,b);MK(a);_.gI(a);(_.t.performance&&_.t.performance.memory||_.HE||JK("first-input"))&&setTimeout(OK,18E5)},QK=function(){var a=PK(_.oH).find(function(b){return"ol"in b});return a?a.ol:Infinity},FK=function(a,b){var c=[{"":b}];a.H.push(c);return function(d,e){var f={};f[d]=e||_.lH();c.push(f)}},RK=function(a,b){var c=new _.iF;
b=_.oF(c,3,b);_.QF(a.v,b)},PK=function(a){return[{"":_.EH(a)}].concat(_.fe(window.cc_latency))},SK=function(){var a=_.oH;if(!a.j){var b=window.prt;if(0<b){var c={};window.cc_latency.push((c.prt=b,c))}b=PK(a);a.j=new _.bI(a.v,b,window.cc_aid,_.uH,a.O,a.H)}return a.j.N?null:a.j},LK=!1;
_.qH();_.gd(function(){var a=_.xc("fPDxwd");a.o()&&RK(_.oH,a.H().map(function(b){return b.number()}));(0,_.GH)();if(a=SK())_.TH(a.j.j),_.CH(a,QK()),HK(a),IK(a),NK(a),_.tH(a),_.wH(a),_.gI(a);setTimeout(OK,3E5)});

_.y();

_.w("FCpbqb");

_.na().xd(function(a){_.id(_.vs,a)});

_.y();

_.w("WhJNk");

var eK=new Date(1262304E6),fK=new Date(12779424E5),gK=new Date(129384E7),hK=function(a,b){b?a.push(Math.round((b-eK.getTime())/6E4)):a.push(null)},iK=function(a,b,c){a.push(b.getTimezoneOffset()/15+56);a:{var d=b.getTimezoneOffset();var e=c.getTimezoneOffset();if(d!=e)for(b=b.getTime()/6E4,c=c.getTime()/6E4;b<=c;){var f=(b>>1)+(c>>1),g=6E4*f,k=(new Date(g+3E4)).getTimezoneOffset();if((new Date(g-3E4)).getTimezoneOffset()!=k){d=g;break a}if(k==d)b=f+1;else if(k==e)c=f-1;else break}d=null}hK(a,d)};
var jK=function(a){_.P.call(this,a.ua);this.j=a.service.window;var b=void 0===b?!1:b;if(_.Sy.isEnabled()&&(void 0===_.Sy.get("OTZ")||b)){a=_.Sy.set;b=[];var c=new Date;hK(b,c.getTime());b.push(c.getTimezoneOffset()/15+56);iK(b,eK,fK);iK(b,fK,gK);a.call(_.Sy,"OTZ",b.join("_"),{Ps:2592E3,path:"/",domain:void 0,GG:"https:"===this.j.get().location.protocol})}};_.G(jK,_.P);jK.va=_.P.va;jK.ma=function(){return{service:{window:_.SB}}};_.Q(_.vs,jK);

_.y();

}catch(e){_._DumpException(e)}
}).call(this,this.default_OneGoogleWidgetUi);
// Google Inc.
