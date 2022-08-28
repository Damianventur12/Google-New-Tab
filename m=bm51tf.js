"use strict";this.default_OneGoogleWidgetUi=this.default_OneGoogleWidgetUi||{};(function(_){var window=this;
try{
_.w("bm51tf");

var ifa=function(a,b,c,d,e){this.v=a;this.N=b;this.H=c;this.O=d;this.W=e;this.j=0;this.o=bY(this)},jfa=function(a){var b={};_.Ma(a.sD(),function(e){b[e]=!0});var c=a.YC(),d=a.gD();return new ifa(a.fD(),1E3*c.o(),a.KC(),1E3*d.o(),b)},bY=function(a){return Math.random()*Math.min(a.N*Math.pow(a.H,a.j),a.O)},cY=function(a,b){return a.j>=a.v?!1:null!=b?!!a.W[b]:!0};
var dY=function(a){_.P.call(this,a.ua);this.v=a.service.Ct;this.H=a.service.metadata;a=a.service.ED;this.o=a.v.bind(a)};_.G(dY,_.P);dY.va=_.P.va;dY.ma=function(){return{service:{Ct:_.$X,metadata:_.WX,ED:_.yW}}};dY.prototype.j=function(a,b){if(1!=this.H.getType(a.Kb()))return _.Hn(a);var c=this.v.j;(c=c?jfa(c):null)&&cY(c)?(b=eY(this,a,b,c),a=new _.Gn(a,b,2)):a=_.Hn(a);return a};
var eY=function(a,b,c,d){return c.then(function(e){return e},function(e){if(!e.status||!cY(d,_.Ij(e.status,1,0)))throw e;return _.Qc(d.o).then(function(){if(!cY(d))throw Error("Cc`"+d.v);++d.j;d.o=bY(d);return eY(a,b,a.o(b),d)})},a)};_.Q(_.kM,dY);

_.y();

}catch(e){_._DumpException(e)}
}).call(this,this.default_OneGoogleWidgetUi);
// Google Inc.
