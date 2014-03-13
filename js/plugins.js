/*
 * jQuery Address Plugin v1.5
 * http://www.asual.com/jquery/address/
 *
 * Copyright (c) 2009-2010 Rostislav Hristov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2012-11-18 23:51:44 +0200 (Sun, 18 Nov 2012)
 */
(function(c){c.address=function(){var r=function(a){a=c.extend(c.Event(a),function(){for(var b={},f=c.address.parameterNames(),m=0,p=f.length;m<p;m++)b[f[m]]=c.address.parameter(f[m]);return{value:c.address.value(),path:c.address.path(),pathNames:c.address.pathNames(),parameterNames:f,parameters:b,queryString:c.address.queryString()}}.call(c.address));c(c.address).trigger(a);return a},s=function(a){return Array.prototype.slice.call(a)},h=function(){c().bind.apply(c(c.address),Array.prototype.slice.call(arguments));
return c.address},ea=function(){c().unbind.apply(c(c.address),Array.prototype.slice.call(arguments));return c.address},E=function(){return z.pushState&&d.state!==g},U=function(){return("/"+i.pathname.replace(new RegExp(d.state),"")+i.search+(L()?"#"+L():"")).replace(T,"/")},L=function(){var a=i.href.indexOf("#");return a!=-1?t(i.href.substr(a+1),k):""},u=function(){return E()?U():L()},V=function(){return"javascript"},O=function(a){a=a.toString();return(d.strict&&a.substr(0,1)!="/"?"/":"")+a},t=function(a,
b){if(d.crawlable&&b)return(a!==""?"!":"")+a;return a.replace(/^\!/,"")},v=function(a,b){return parseInt(a.css(b),10)},H=function(){if(!x){var a=u();if(decodeURI(e)!=decodeURI(a))if(w&&A<7)i.reload();else{w&&!F&&d.history&&q(M,50);_old=e;e=a;G(k)}}},G=function(a){var b=r(W);a=r(a?X:Y);q(fa,10);if(b.isDefaultPrevented()||a.isDefaultPrevented())ga()},ga=function(){e=_old;if(E())z.popState({},"",d.state.replace(/\/$/,"")+(e===""?"/":e));else{x=n;if(B)if(d.history)i.hash="#"+t(e,n);else i.replace("#"+
t(e,n));else if(e!=u())if(d.history)i.hash="#"+t(e,n);else i.replace("#"+t(e,n));w&&!F&&d.history&&q(M,50);if(B)q(function(){x=k},1);else x=k}},fa=function(){if(d.tracker!=="null"&&d.tracker!==I){var a=c.isFunction(d.tracker)?d.tracker:j[d.tracker],b=(i.pathname+i.search+(c.address&&!E()?c.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,"");if(c.isFunction(a))a(b);else if(c.isFunction(j.urchinTracker))j.urchinTracker(b);else if(j.pageTracker!==g&&c.isFunction(j.pageTracker._trackPageview))j.pageTracker._trackPageview(b);
else j._gaq!==g&&c.isFunction(j._gaq.push)&&j._gaq.push(["_trackPageview",decodeURI(b)])}},M=function(){var a=V()+":"+k+";document.open();document.writeln('<html><head><title>"+o.title.replace(/\'/g,"\\'")+"</title><script>var "+C+' = "'+encodeURIComponent(u()).replace(/\'/g,"\\'")+(o.domain!=i.hostname?'";document.domain="'+o.domain:"")+"\";<\/script></head></html>');document.close();";if(A<7)l.src=a;else l.contentWindow.location.replace(a)},$=function(){if(J&&Z!=-1){var a,b,f=J.substr(Z+1).split("&");
for(a=0;a<f.length;a++){b=f[a].split("=");if(/^(autoUpdate|crawlable|history|strict|wrap)$/.test(b[0]))d[b[0]]=isNaN(b[1])?/^(true|yes)$/i.test(b[1]):parseInt(b[1],10)!==0;if(/^(state|tracker)$/.test(b[0]))d[b[0]]=b[1]}J=I}_old=e;e=u()},ba=function(){if(!aa){aa=n;$();var a=function(){ha.call(this);ia.call(this)},b=c("body").ajaxComplete(a);a();if(d.wrap){c("body > *").wrapAll('<div style="padding:'+(v(b,"marginTop")+v(b,"paddingTop"))+"px "+(v(b,"marginRight")+v(b,"paddingRight"))+"px "+(v(b,"marginBottom")+
v(b,"paddingBottom"))+"px "+(v(b,"marginLeft")+v(b,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+C+'" style="height:100%;overflow:auto;position:relative;'+(B&&!window.statusbar.visible?"resize:both;":"")+'" />');c("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"});B&&c('<style type="text/css" />').appendTo("head").text("#"+C+"::-webkit-resizer { background-color: #fff; }")}if(w&&!F){a=o.getElementsByTagName("frameset")[0];l=o.createElement((a?"":"i")+"frame");l.src=V()+
":"+k;if(a){a.insertAdjacentElement("beforeEnd",l);a[a.cols?"cols":"rows"]+=",0";l.noResize=n;l.frameBorder=l.frameSpacing=0}else{l.style.display="none";l.style.width=l.style.height=0;l.tabIndex=-1;o.body.insertAdjacentElement("afterBegin",l)}q(function(){c(l).bind("load",function(){var f=l.contentWindow;_old=e;e=f[C]!==g?f[C]:"";if(e!=u()){G(k);i.hash=t(e,n)}});l.contentWindow[C]===g&&M()},50)}q(function(){r("init");G(k)},1);if(!E())if(w&&A>7||!w&&F)if(j.addEventListener)j.addEventListener(K,H,k);
else j.attachEvent&&j.attachEvent("on"+K,H);else ja(H,50);"state"in window.history&&c(window).trigger("popstate")}},ha=function(){var a,b=c("a"),f=b.size(),m=-1,p=function(){if(++m!=f){a=c(b.get(m));a.is('[rel*="address:"]')&&a.address('[rel*="address:"]');q(p,1)}};q(p,1)},ia=function(){if(d.crawlable){var a=i.pathname.replace(/\/$/,"");c("body").html().indexOf("_escaped_fragment_")!=-1&&c('a[href]:not([href^=http]), a[href*="'+document.domain+'"]').each(function(){var b=c(this).attr("href").replace(/^http:/,
"").replace(new RegExp(a+"/?$"),"");if(b===""||b.indexOf("_escaped_fragment_")!=-1)c(this).attr("href","#"+encodeURI(decodeURIComponent(b.replace(/\/(.*)\?_escaped_fragment_=(.*)$/,"!$2"))))})}},g,I=null,C="jQueryAddress",K="hashchange",W="change",X="internalChange",Y="externalChange",n=true,k=false,d={autoUpdate:n,crawlable:k,history:n,strict:n,wrap:k},D=c.browser,A=parseFloat(D.version),w=!c.support.opacity,B=D.webkit||D.safari,j=function(){try{return top.document!==g&&top.document.title!==g?top:
window}catch(a){return window}}(),o=j.document,z=j.history,i=j.location,ja=setInterval,q=setTimeout,T=/\/{2,9}/g;D=navigator.userAgent;var F="on"+K in j,l,J=c("script:last").attr("src"),Z=J?J.indexOf("?"):-1,P=o.title,x=k,aa=k,ca=n,N=k,e=u();_old=e;if(w){A=parseFloat(D.substr(D.indexOf("MSIE")+4));if(o.documentMode&&o.documentMode!=A)A=o.documentMode!=8?7:8;var da=o.onpropertychange;o.onpropertychange=function(){da&&da.call(o);if(o.title!=P&&o.title.indexOf("#"+u())!=-1)o.title=P}}if(z.navigationMode)z.navigationMode=
"compatible";if(document.readyState=="complete")var ka=setInterval(function(){if(c.address){ba();clearInterval(ka)}},50);else{$();c(ba)}c(window).bind("popstate",function(){if(decodeURI(e)!=decodeURI(u())){_old=e;e=u();G(k)}}).bind("unload",function(){if(j.removeEventListener)j.removeEventListener(K,H,k);else j.detachEvent&&j.detachEvent("on"+K,H)});return{bind:function(){return h.apply(this,s(arguments))},unbind:function(){return ea.apply(this,s(arguments))},init:function(){return h.apply(this,["init"].concat(s(arguments)))},
change:function(){return h.apply(this,[W].concat(s(arguments)))},internalChange:function(){return h.apply(this,[X].concat(s(arguments)))},externalChange:function(){return h.apply(this,[Y].concat(s(arguments)))},baseURL:function(){var a=i.href;if(a.indexOf("#")!=-1)a=a.substr(0,a.indexOf("#"));if(/\/$/.test(a))a=a.substr(0,a.length-1);return a},autoUpdate:function(a){if(a!==g){d.autoUpdate=a;return this}return d.autoUpdate},crawlable:function(a){if(a!==g){d.crawlable=a;return this}return d.crawlable},
history:function(a){if(a!==g){d.history=a;return this}return d.history},state:function(a){if(a!==g){d.state=a;var b=U();if(d.state!==g)if(z.pushState)b.substr(0,3)=="/#/"&&i.replace(d.state.replace(/^\/$/,"")+b.substr(2));else b!="/"&&b.replace(/^\/#/,"")!=L()&&q(function(){i.replace(d.state.replace(/^\/$/,"")+"/#"+b)},1);return this}return d.state},strict:function(a){if(a!==g){d.strict=a;return this}return d.strict},tracker:function(a){if(a!==g){d.tracker=a;return this}return d.tracker},wrap:function(a){if(a!==
g){d.wrap=a;return this}return d.wrap},update:function(){N=n;this.value(e);N=k;return this},title:function(a){if(a!==g){q(function(){P=o.title=a;if(ca&&l&&l.contentWindow&&l.contentWindow.document){l.contentWindow.document.title=a;ca=k}},50);return this}return o.title},value:function(a){if(a!==g){a=O(a);if(a=="/")a="";if(e==a&&!N)return;_old=e;e=a;if(d.autoUpdate||N){G(n);if(E())z[d.history?"pushState":"replaceState"]({},"",d.state.replace(/\/$/,"")+(e===""?"/":e));else{x=n;if(B)if(d.history)i.hash=
"#"+t(e,n);else i.replace("#"+t(e,n));else if(e!=u())if(d.history)i.hash="#"+t(e,n);else i.replace("#"+t(e,n));w&&!F&&d.history&&q(M,50);if(B)q(function(){x=k},1);else x=k}}return this}return O(e)},path:function(a){if(a!==g){var b=this.queryString(),f=this.hash();this.value(a+(b?"?"+b:"")+(f?"#"+f:""));return this}return O(e).split("#")[0].split("?")[0]},pathNames:function(){var a=this.path(),b=a.replace(T,"/").split("/");if(a.substr(0,1)=="/"||a.length===0)b.splice(0,1);a.substr(a.length-1,1)=="/"&&
b.splice(b.length-1,1);return b},queryString:function(a){if(a!==g){var b=this.hash();this.value(this.path()+(a?"?"+a:"")+(b?"#"+b:""));return this}a=e.split("?");return a.slice(1,a.length).join("?").split("#")[0]},parameter:function(a,b,f){var m,p;if(b!==g){var Q=this.parameterNames();p=[];b=b===g||b===I?"":b.toString();for(m=0;m<Q.length;m++){var R=Q[m],y=this.parameter(R);if(typeof y=="string")y=[y];if(R==a)y=b===I||b===""?[]:f?y.concat([b]):[b];for(var S=0;S<y.length;S++)p.push(R+"="+y[S])}c.inArray(a,
Q)==-1&&b!==I&&b!==""&&p.push(a+"="+b);this.queryString(p.join("&"));return this}if(b=this.queryString()){f=[];p=b.split("&");for(m=0;m<p.length;m++){b=p[m].split("=");b[0]==a&&f.push(b.slice(1).join("="))}if(f.length!==0)return f.length!=1?f:f[0]}},parameterNames:function(){var a=this.queryString(),b=[];if(a&&a.indexOf("=")!=-1){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].split("=")[0];c.inArray(m,b)==-1&&b.push(m)}}return b},hash:function(a){if(a!==g){this.value(e.split("#")[0]+(a?"#"+
a:""));return this}a=e.split("#");return a.slice(1,a.length).join("#")}}}();c.fn.address=function(r){var s;if(typeof r=="string"){s=r;r=undefined}c(this).attr("address")||c(s?s:this).live("click",function(h){if(h.shiftKey||h.ctrlKey||h.metaKey||h.which==2)return true;if(c(this).is("a")){h.preventDefault();h=r?r.call(this):/address:/.test(c(this).attr("rel"))?c(this).attr("rel").split("address:")[1].split(" ")[0]:c.address.state()!==undefined&&!/^\/?$/.test(c.address.state())?c(this).attr("href").replace(new RegExp("^(.*"+
c.address.state()+"|\\.)"),""):c(this).attr("href").replace(/^(#\!?|\.)/,"");c.address.value(h)}}).live("submit",function(h){if(c(this).is("form")){h.preventDefault();h=c(this).attr("action");h=r?r.call(this):(h.indexOf("?")!=-1?h.replace(/&$/,""):h+"?")+c(this).serialize();c.address.value(h)}}).attr("address",true);return this}})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.9',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        },

        getLineHeight: function(elem) {
            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.5
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*
* Changelog
* $Date: 2010-12-12 (Wed, 12 Dec 2010) $
* $version: 1.0.0
* $version: 1.0.1 - removed multibyte comments
*
* $Date: 2011-21-02 (Mon, 21 Feb 2011) $
* $version: 1.1.0   - added allowPageScroll property to allow swiping and scrolling of page
*                   - changed handler signatures so one handler can be used for multiple events
* $Date: 2011-23-02 (Wed, 23 Feb 2011) $
* $version: 1.2.0   - added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
*                   - If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
* $version: 1.2.1   - removed console log!
*
* $version: 1.2.2   - Fixed bug where scope was not preserved in callback methods.
*
* $Date: 2011-28-04 (Thurs, 28 April 2011) $
* $version: 1.2.4   - Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
*
* $Date: 2011-27-09 (Tues, 27 September 2011) $
* $version: 1.2.5   - Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
*
* $Date: 2012-14-05 (Mon, 14 May 2012) $
* $version: 1.2.6   - Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
*
* $Date: 2012-05-06 (Tues, 05 June 2012) $
* $version: 1.2.7   - Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
*
* $Date: 2012-05-06 (Tues, 05 June 2012) $
* $version: 1.2.8   - Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
*
* $Date: 2012-06-06 (Wed, 06 June 2012) $
* $version: 1.3.0   - Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
*
* $Date: 2012-05-06 (Fri, 05 June 2012) $
* $version: 1.3.1   - Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
*
* $Date: 2012-29-07 (Sun, 29 July 2012) $
* $version: 1.3.2   - Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
*           - Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
*
* $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
* $version: 1.3.3   - Code tidy prep for minefied version
*
* $Date: 2012-04-10 (wed, 4 Oct 2012) $
* $version: 1.4.0   - Added pinch support, pinchIn and pinchOut
*
* $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
* $version: 1.5.0   - Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all form, input select, button and anchor elements.
*
* $Date: 2012-22-10 (Mon, 22 Oct 2012) $
* $version: 1.5.1   - Fixed bug with jQuery 1.8 and trailing comma in excludedElements
*                   - Fixed bug with IE and eventPreventDefault()
* $Date: 2013-01-12 (Fri, 12 Jan 2013) $
* $version: 1.6.0   - Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
*                   - made the demo site all static local HTML pages so they can be run locally by a developer
*                   - added jsDoc comments and added documentation for the plugin   
*                   - code tidy
*                   - added triggerOnTouchLeave property that will end the event when the user swipes off the element.
* $Date: 2013-03-23 (Sat, 23 Mar 2013) $
* $version: 1.6.1   - Added support for ie8 touch events
* $version: 1.6.2   - Added support for events binding with on / off / bind in jQ for all callback names.
*                   - Deprecated the 'click' handler in favour of tap.
*                   - added cancelThreshold property
*                   - added option method to update init options at runtime
*
* $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
* $Date: 2013-04-04 (Thurs, 04 April 2013) $
* $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
*
* $Date: 2013-08-24 (Sat, 24 Aug 2013) $
* $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.

*/

/**
 * See (http://jquery.com/).
 * @name $
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */
 
/**
 * See (http://jquery.com/)
 * @name fn
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */



(function (factory) {
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {
    "use strict";

    //Constants
    var LEFT = "left",
        RIGHT = "right",
        UP = "up",
        DOWN = "down",
        IN = "in",
        OUT = "out",

        NONE = "none",
        AUTO = "auto",
        
        SWIPE = "swipe",
        PINCH = "pinch",
        TAP = "tap",
        DOUBLE_TAP = "doubletap",
        LONG_TAP = "longtap",
        
        HORIZONTAL = "horizontal",
        VERTICAL = "vertical",

        ALL_FINGERS = "all",
        
        DOUBLE_TAP_THRESHOLD = 10,

        PHASE_START = "start",
        PHASE_MOVE = "move",
        PHASE_END = "end",
        PHASE_CANCEL = "cancel",

        SUPPORTS_TOUCH = 'ontouchstart' in window,

        PLUGIN_NS = 'TouchSwipe';



    /**
    * The default configuration, and available options to configure touch swipe with.
    * You can set the default values by updating any of the properties prior to instantiation.
    * @name $.fn.swipe.defaults
    * @namespace
    * @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
    * @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe. 
    * @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
    * @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch. 
    * @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe. 
    * @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release. 
    * @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
    * @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap
    * @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}
    * @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link $.fn.swipe#event:swipeLeft}
    * @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link $.fn.swipe#event:swipeRight}
    * @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link $.fn.swipe#event:swipeUp}
    * @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link $.fn.swipe#event:swipeDown}
    * @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}
    * @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}
    * @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}
    * @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}
    * @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not. 
    * @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
    * @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
    * @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically. 
    * @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers. 
    * @property {string|undefined} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  <br/><br/>
                                        <code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
                                        <code>"none"</code> : the page will not scroll when user swipes. <br/>
                                        <code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
                                        <code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
    * @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices. 
    * @property {string} [excludedElements="button, input, select, textarea, a, .noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes all form, input, select, button, anchor and .noSwipe elements. 
    
    */
    var defaults = {
        fingers: 1,         
        threshold: 75,  
        cancelThreshold:null,   
        pinchThreshold:20,
        maxTimeThreshold: null, 
        fingerReleaseThreshold:250, 
        longTapThreshold:500,
        doubleTapThreshold:200,
        swipe: null,        
        swipeLeft: null,    
        swipeRight: null,   
        swipeUp: null,      
        swipeDown: null,    
        swipeStatus: null,  
        pinchIn:null,       
        pinchOut:null,      
        pinchStatus:null,   
        click:null, //Deprecated since 1.6.2
        tap:null,
        doubleTap:null,
        longTap:null,       
        triggerOnTouchEnd: true, 
        triggerOnTouchLeave:false, 
        allowPageScroll: "auto", 
        fallbackToMouseEvents: true,    
        excludedElements:"label, button, input, select, textarea, a, .noSwipe"
    };



    /**
    * Applies TouchSwipe behaviour to one or more jQuery objects.
    * The TouchSwipe plugin can be instantiated via this method, or methods within 
    * TouchSwipe can be executed via this method as per jQuery plugin architecture.
    * @see TouchSwipe
    * @class
    * @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
    * the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
    * If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the 
    * configuration properties defined in the object. See TouchSwipe
    *
    */
    $.fn.swipe = function (method) {
        var $this = $(this),
            plugin = $this.data(PLUGIN_NS);

        //Check if we are already instantiated and trying to execute a method   
        if (plugin && typeof method === 'string') {
            if (plugin[method]) {
                return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.swipe');
            }
        }
        //Else not instantiated and trying to pass init object (or nothing)
        else if (!plugin && (typeof method === 'object' || !method)) {
            return init.apply(this, arguments);
        }

        return $this;
    };

    //Expose our defaults so a user could override the plugin defaults
    $.fn.swipe.defaults = defaults;

    /**
    * The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers. 
    * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
    * @namespace
    * @readonly
    * @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
    * @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
    * @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
    * @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
    */
    $.fn.swipe.phases = {
        PHASE_START: PHASE_START,
        PHASE_MOVE: PHASE_MOVE,
        PHASE_END: PHASE_END,
        PHASE_CANCEL: PHASE_CANCEL
    };

    /**
    * The direction constants that are passed to the event handlers. 
    * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
    * @namespace
    * @readonly
    * @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
    * @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
    * @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
    * @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
    * @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
    * @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
    */
    $.fn.swipe.directions = {
        LEFT: LEFT,
        RIGHT: RIGHT,
        UP: UP,
        DOWN: DOWN,
        IN : IN,
        OUT: OUT
    };
    
    /**
    * The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
    * These properties are read only
    * @namespace
    * @readonly
    * @see $.fn.swipe.defaults#allowPageScroll
    * @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
    * @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
    * @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
    * @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
    */
    $.fn.swipe.pageScroll = {
        NONE: NONE,
        HORIZONTAL: HORIZONTAL,
        VERTICAL: VERTICAL,
        AUTO: AUTO
    };

    /**
    * Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the 
    * options object, as well as the value of the <code>fingers</code> event property.
    * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
    * @namespace
    * @readonly
    * @see $.fn.swipe.defaults#fingers
    * @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
    * @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>1</code>.
    * @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>1</code>.
    * @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
    */
    $.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: ALL_FINGERS
    };

    /**
    * Initialise the plugin for each DOM element matched
    * This creates a new instance of the main TouchSwipe class for each DOM element, and then
    * saves a reference to that instance in the elements data property.
    * @internal
    */
    function init(options) {
        //Prep and extend the options
        if (options && (options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined))) {
            options.allowPageScroll = NONE;
        }
        
        //Check for deprecated options
        //Ensure that any old click handlers are assigned to the new tap, unless we have a tap
        if(options.click!==undefined && options.tap===undefined) {
            options.tap = options.click;
        }

        if (!options) {
            options = {};
        }
        
        //pass empty object so we dont modify the defaults
        options = $.extend({}, $.fn.swipe.defaults, options);

        //For each element instantiate the plugin
        return this.each(function () {
            var $this = $(this);

            //Check we havent already initialised the plugin
            var plugin = $this.data(PLUGIN_NS);

            if (!plugin) {
                plugin = new TouchSwipe(this, options);
                $this.data(PLUGIN_NS, plugin);
            }
        });
    }

    /**
    * Main TouchSwipe Plugin Class.
    * Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
    * @private
    * @name TouchSwipe
    * @param {DOMNode} element The HTML DOM object to apply to plugin to
    * @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
    * @see $.fh.swipe.defaults
    * @see $.fh.swipe
    * @class
    */
    function TouchSwipe(element, options) {
        var useTouchEvents = (SUPPORTS_TOUCH || !options.fallbackToMouseEvents),
            START_EV = useTouchEvents ? 'touchstart' : 'mousedown',
            MOVE_EV = useTouchEvents ? 'touchmove' : 'mousemove',
            END_EV = useTouchEvents ? 'touchend' : 'mouseup',
            LEAVE_EV = useTouchEvents ? null : 'mouseleave', //we manually detect leave on touch devices, so null event here
            CANCEL_EV = 'touchcancel';



        //touch properties
        var distance = 0,
            direction = null,
            duration = 0,
            startTouchesDistance = 0,
            endTouchesDistance = 0,
            pinchZoom = 1,
            pinchDistance = 0,
            pinchDirection = 0,
            maximumsMap=null;

        
        
        //jQuery wrapped element for this instance
        var $element = $(element);
        
        //Current phase of th touch cycle
        var phase = "start";

        // the current number of fingers being used.
        var fingerCount = 0;            

        //track mouse points / delta
        var fingerData=null;

        //track times
        var startTime = 0,
            endTime = 0,
            previousTouchEndTime=0,
            previousTouchFingerCount=0,
            doubleTapStartTime=0;

        //Timeouts
        var singleTapTimeout=null;
        
        // Add gestures to all swipable areas if supported
        try {
            $element.bind(START_EV, touchStart);
            $element.bind(CANCEL_EV, touchCancel);
        }
        catch (e) {
            $.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
        }

        //
        //Public methods
        //
        
        /**
        * re-enables the swipe plugin with the previous configuration
        * @function
        * @name $.fn.swipe#enable
        * @return {DOMNode} The Dom element that was registered with TouchSwipe 
        * @example $("#element").swipe("enable");
        */
        this.enable = function () {
            $element.bind(START_EV, touchStart);
            $element.bind(CANCEL_EV, touchCancel);
            return $element;
        };

        /**
        * disables the swipe plugin
        * @function
        * @name $.fn.swipe#disable
        * @return {DOMNode} The Dom element that is now registered with TouchSwipe
        * @example $("#element").swipe("disable");
        */
        this.disable = function () {
            removeListeners();
            return $element;
        };

        /**
        * Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
        * @function
        * @name $.fn.swipe#destroy
        * @return {DOMNode} The Dom element that was registered with TouchSwipe 
        * @example $("#element").swipe("destroy");
        */
        this.destroy = function () {
            removeListeners();
            $element.data(PLUGIN_NS, null);
            return $element;
        };


        /**
         * Allows run time updating of the swipe configuration options.
         * @function
         * @name $.fn.swipe#option
         * @param {String} property The option property to get or set
         * @param {Object} [value] The value to set the property to
         * @return {Object} If only a property name is passed, then that property value is returned.
         * @example $("#element").swipe("option", "threshold"); // return the threshold
         * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
         * @see $.fn.swipe.defaults
         *
         */
        this.option = function (property, value) {
            if(options[property]!==undefined) {
                if(value===undefined) {
                    return options[property];
                } else {
                    options[property] = value;
                }
            } else {
                $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
            }

            return null;
        }

        //
        // Private methods
        //
        
        //
        // EVENTS
        //
        /**
        * Event handler for a touch start event.
        * Stops the default click event from triggering and stores where we touched
        * @inner
        * @param {object} jqEvent The normalised jQuery event object.
        */
        function touchStart(jqEvent) {
            //If we already in a touch event (a finger already in use) then ignore subsequent ones..
            if( getTouchInProgress() )
                return;
            
            //Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
            if( $(jqEvent.target).closest( options.excludedElements, $element ).length>0 ) 
                return;
                
            //As we use Jquery bind for events, we need to target the original event object
            //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            
            var ret,
                evt = SUPPORTS_TOUCH ? event.touches[0] : event;

            phase = PHASE_START;

            //If we support touches, get the finger count
            if (SUPPORTS_TOUCH) {
                // get the total number of fingers touching the screen
                fingerCount = event.touches.length;
            }
            //Else this is the desktop, so stop the browser from dragging the image
            else {
                jqEvent.preventDefault(); //call this on jq event so we are cross browser
            }

            //clear vars..
            distance = 0;
            direction = null;
            pinchDirection=null;
            duration = 0;
            startTouchesDistance=0;
            endTouchesDistance=0;
            pinchZoom = 1;
            pinchDistance = 0;
            fingerData=createAllFingerData();
            maximumsMap=createMaximumsData();
            cancelMultiFingerRelease();

            
            // check the number of fingers is what we are looking for, or we are capturing pinches
            if (!SUPPORTS_TOUCH || (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || hasPinches()) {
                // get the coordinates of the touch
                createFingerData( 0, evt );
                startTime = getTimeStamp();
                
                if(fingerCount==2) {
                    //Keep track of the initial pinch distance, so we can calculate the diff later
                    //Store second finger data as start
                    createFingerData( 1, event.touches[1] );
                    startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
                }
                
                if (options.swipeStatus || options.pinchStatus) {
                    ret = triggerHandler(event, phase);
                }
            }
            else {
                //A touch with more or less than the fingers we are looking for, so cancel
                ret = false; 
            }

            //If we have a return value from the users handler, then return and cancel
            if (ret === false) {
                phase = PHASE_CANCEL;
                triggerHandler(event, phase);
                return ret;
            }
            else {
                setTouchInProgress(true);
            }

            return null;
        };
        
        
        
        /**
        * Event handler for a touch move event. 
        * If we change fingers during move, then cancel the event
        * @inner
        * @param {object} jqEvent The normalised jQuery event object.
        */
        function touchMove(jqEvent) {
            
            //As we use Jquery bind for events, we need to target the original event object
            //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            
            //If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
            if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
                return;

            var ret,
                evt = SUPPORTS_TOUCH ? event.touches[0] : event;
            

            //Update the  finger data 
            var currentFinger = updateFingerData(evt);
            endTime = getTimeStamp();
            
            if (SUPPORTS_TOUCH) {
                fingerCount = event.touches.length;
            }

            phase = PHASE_MOVE;

            //If we have 2 fingers get Touches distance as well
            if(fingerCount==2) {
                
                //Keep track of the initial pinch distance, so we can calculate the diff later
                //We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers
                if(startTouchesDistance==0) {
                    //Create second finger if this is the first time...
                    createFingerData( 1, event.touches[1] );
                    
                    startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
                } else {
                    //Else just update the second finger
                    updateFingerData(event.touches[1]);
                
                    endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
                    pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
                }
                
                
                pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
                pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
            }
            
            
            if ( (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH || hasPinches() ) {
                
                direction = calculateDirection(currentFinger.start, currentFinger.end);
                
                //Check if we need to prevent default event (page scroll / pinch zoom) or not
                validateDefaultEvent(jqEvent, direction);

                //Distance and duration are all off the main finger
                distance = calculateDistance(currentFinger.start, currentFinger.end);
                duration = calculateDuration();

                //Cache the maximum distance we made in this direction
                setMaxDistance(direction, distance);


                if (options.swipeStatus || options.pinchStatus) {
                    ret = triggerHandler(event, phase);
                }
                
                
                //If we trigger end events when threshold are met, or trigger events when touch leaves element
                if(!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
                    
                    var inBounds = true;
                    
                    //If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
                    if(options.triggerOnTouchLeave) {
                        var bounds = getbounds( this );
                        inBounds = isInBounds( currentFinger.end, bounds );
                    }
                    
                    //Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
                    if(!options.triggerOnTouchEnd && inBounds) {
                        phase = getNextPhase( PHASE_MOVE );
                    } 
                    //We end if out of bounds here, so set current phase to END, and check if its modified 
                    else if(options.triggerOnTouchLeave && !inBounds ) {
                        phase = getNextPhase( PHASE_END );
                    }
                        
                    if(phase==PHASE_CANCEL || phase==PHASE_END) {
                        triggerHandler(event, phase);
                    }               
                }
            }
            else {
                phase = PHASE_CANCEL;
                triggerHandler(event, phase);
            }

            if (ret === false) {
                phase = PHASE_CANCEL;
                triggerHandler(event, phase);
            }
        }



        /**
        * Event handler for a touch end event. 
        * Calculate the direction and trigger events
        * @inner
        * @param {object} jqEvent The normalised jQuery event object.
        */
        function touchEnd(jqEvent) {
            //As we use Jquery bind for events, we need to target the original event object
            var event = jqEvent.originalEvent;
                

            //If we are still in a touch with another finger return
            //This allows us to wait a fraction and see if the other finger comes up, if it does within the threshold, then we treat it as a multi release, not a single release.
            if (SUPPORTS_TOUCH) {
                if(event.touches.length>0) {
                    startMultiFingerRelease();
                    return true;
                }
            }
            
            //If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
            //This is used to allow 2 fingers to release fractionally after each other, whilst maintainig the event as containg 2 fingers, not 1
            if(inMultiFingerRelease()) {    
                fingerCount=previousTouchFingerCount;
            }   
                 
            //call this on jq event so we are cross browser 
            jqEvent.preventDefault(); 
            
            //Set end of swipe
            endTime = getTimeStamp();
            
            //Get duration incase move was never fired
            duration = calculateDuration();
            
            //If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
            if(didSwipeBackToCancel()) {
                phase = PHASE_CANCEL;
                triggerHandler(event, phase);
            } else if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd == false && phase === PHASE_MOVE)) {
                phase = PHASE_END;
                triggerHandler(event, phase);
            }
            //Special cases - A tap should always fire on touch end regardless,
            //So here we manually trigger the tap end handler by itself
            //We dont run trigger handler as it will re-trigger events that may have fired already
            else if (!options.triggerOnTouchEnd && hasTap()) {
                //Trigger the pinch events...
                phase = PHASE_END;
                triggerHandlerForGesture(event, phase, TAP);
            }
            else if (phase === PHASE_MOVE) {
                phase = PHASE_CANCEL;
                triggerHandler(event, phase);
            }

            setTouchInProgress(false);

            return null;
        }



        /**
        * Event handler for a touch cancel event. 
        * Clears current vars
        * @inner
        */
        function touchCancel() {
            // reset the variables back to default values
            fingerCount = 0;
            endTime = 0;
            startTime = 0;
            startTouchesDistance=0;
            endTouchesDistance=0;
            pinchZoom=1;
            
            //If we were in progress of tracking a possible multi touch end, then re set it.
            cancelMultiFingerRelease();
            
            setTouchInProgress(false);
        }
        
        
        /**
        * Event handler for a touch leave event. 
        * This is only triggered on desktops, in touch we work this out manually
        * as the touchleave event is not supported in webkit
        * @inner
        */
        function touchLeave(jqEvent) {
            var event = jqEvent.originalEvent;
            
            //If we have the trigger on leave property set....
            if(options.triggerOnTouchLeave) {
                phase = getNextPhase( PHASE_END );
                triggerHandler(event, phase);
            }
        }
        
        /**
        * Removes all listeners that were associated with the plugin
        * @inner
        */
        function removeListeners() {
            $element.unbind(START_EV, touchStart);
            $element.unbind(CANCEL_EV, touchCancel);
            $element.unbind(MOVE_EV, touchMove);
            $element.unbind(END_EV, touchEnd);
            
            //we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
            if(LEAVE_EV) { 
                $element.unbind(LEAVE_EV, touchLeave);
            }
            
            setTouchInProgress(false);
        }

        
        /**
         * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
         */
        function getNextPhase(currentPhase) {
            
            var nextPhase = currentPhase;
            
            // Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
            var validTime = validateSwipeTime();
            var validDistance = validateSwipeDistance();
            var didCancel = didSwipeBackToCancel();
                        
            //If we have exceeded our time, then cancel 
            if(!validTime || didCancel) {
                nextPhase = PHASE_CANCEL;
            }
            //Else if we are moving, and have reached distance then end
            else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) ) {
                nextPhase = PHASE_END;
            } 
            //Else if we have ended by leaving and didn't reach distance, then cancel
            else if (!validDistance && currentPhase==PHASE_END && options.triggerOnTouchLeave) {
                nextPhase = PHASE_CANCEL;
            }
            
            return nextPhase;
        }
        
        
        /**
        * Trigger the relevant event handler
        * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
        * @param {object} event the original event object
        * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
        * @inner
        */
        function triggerHandler(event, phase) {
            
            var ret = undefined;
            
            // SWIPE GESTURES
            if(didSwipe() || hasSwipes()) { //hasSwipes as status needs to fire even if swipe is invalid
                //Trigger the swipe events...
                ret = triggerHandlerForGesture(event, phase, SWIPE);
            } 
            
            // PINCH GESTURES (if the above didn't cancel)
            else if((didPinch() || hasPinches()) && ret!==false) {
                //Trigger the pinch events...
                ret = triggerHandlerForGesture(event, phase, PINCH);
            }
            
            // CLICK / TAP (if the above didn't cancel)
            if(didDoubleTap() && ret!==false) {
                //Trigger the tap events...
                ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
            }
            
            // CLICK / TAP (if the above didn't cancel)
            else if(didLongTap() && ret!==false) {
                //Trigger the tap events...
                ret = triggerHandlerForGesture(event, phase, LONG_TAP);
            }

            // CLICK / TAP (if the above didn't cancel)
            else if(didTap() && ret!==false) {
                //Trigger the tap event..
                ret = triggerHandlerForGesture(event, phase, TAP);
            }
            
            
            
            // If we are cancelling the gesture, then manually trigger the reset handler
            if (phase === PHASE_CANCEL) {
                touchCancel(event);
            }
            
            // If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
            if(phase === PHASE_END) {
                //If we support touch, then check that all fingers are off before we cancel
                if (SUPPORTS_TOUCH) {
                    if(event.touches.length==0) {
                        touchCancel(event); 
                    }
                } 
                else {
                    touchCancel(event);
                }
            }
                    
            return ret;
        }
        
        
        
        /**
        * Trigger the relevant event handler
        * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
        * @param {object} event the original event object
        * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
        * @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
        * @return Boolean False, to indicate that the event should stop propagation, or void.
        * @inner
        */
        function triggerHandlerForGesture(event, phase, gesture) {  
            
            var ret=undefined;
            
            //SWIPES....
            if(gesture==SWIPE) {
                //Trigger status every time..
                
                //Trigger the event...
                $element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount]);
                
                //Fire the callback
                if (options.swipeStatus) {
                    ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount);
                    //If the status cancels, then dont run the subsequent event handlers..
                    if(ret===false) return false;
                }
                
                
                
                
                if (phase == PHASE_END && validateSwipe()) {
                    //Fire the catch all event
                    $element.trigger('swipe', [direction, distance, duration, fingerCount]);
                    
                    //Fire catch all callback
                    if (options.swipe) {
                        ret = options.swipe.call($element, event, direction, distance, duration, fingerCount);
                        //If the status cancels, then dont run the subsequent event handlers..
                        if(ret===false) return false;
                    }
                    
                    //trigger direction specific event handlers 
                    switch (direction) {
                        case LEFT:
                            //Trigger the event
                            $element.trigger('swipeLeft', [direction, distance, duration, fingerCount]);
                    
                            //Fire the callback
                            if (options.swipeLeft) {
                                ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount);
                            }
                            break;
    
                        case RIGHT:
                            //Trigger the event
                            $element.trigger('swipeRight', [direction, distance, duration, fingerCount]);
                    
                            //Fire the callback
                            if (options.swipeRight) {
                                ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount);
                            }
                            break;
    
                        case UP:
                            //Trigger the event
                            $element.trigger('swipeUp', [direction, distance, duration, fingerCount]);
                    
                            //Fire the callback
                            if (options.swipeUp) {
                                ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount);
                            }
                            break;
    
                        case DOWN:
                            //Trigger the event
                            $element.trigger('swipeDown', [direction, distance, duration, fingerCount]);
                    
                            //Fire the callback
                            if (options.swipeDown) {
                                ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount);
                            }
                            break;
                    }
                }
            }
            
            
            //PINCHES....
            if(gesture==PINCH) {
                //Trigger the event
                 $element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom]);
                    
                //Fire the callback
                if (options.pinchStatus) {
                    ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom);
                    //If the status cancels, then dont run the subsequent event handlers..
                    if(ret===false) return false;
                }
                
                if(phase==PHASE_END && validatePinch()) {
                    
                    switch (pinchDirection) {
                        case IN:
                            //Trigger the event
                            $element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom]);
                    
                            //Fire the callback
                            if (options.pinchIn) {
                                ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom);
                            }
                            break;
                        
                        case OUT:
                            //Trigger the event
                            $element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom]);
                    
                            //Fire the callback
                            if (options.pinchOut) {
                                ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom);
                            }
                            break;  
                    }
                }
            }
            


                
                
            if(gesture==TAP) {
                if(phase === PHASE_CANCEL || phase === PHASE_END) {
                    
                    
                    //Cancel any existing double tap
                    clearTimeout(singleTapTimeout);
                           
                    //If we are also looking for doubelTaps, wait incase this is one...
                    if(hasDoubleTap() && !inDoubleTap()) {
                        //Cache the time of this tap
                        doubleTapStartTime = getTimeStamp();
                       
                        //Now wait for the double tap timeout, and trigger this single tap
                        //if its not cancelled by a double tap
                        singleTapTimeout = setTimeout($.proxy(function() {
                            doubleTapStartTime=null;
                            //Trigger the event
                            $element.trigger('tap', [event.target]);

                        
                            //Fire the callback
                            if(options.tap) {
                                ret = options.tap.call($element, event, event.target);
                            }
                        }, this), options.doubleTapThreshold );
                        
                    } else {
                        doubleTapStartTime=null;
                        
                        //Trigger the event
                        $element.trigger('tap', [event.target]);

                        
                        //Fire the callback
                        if(options.tap) {
                            ret = options.tap.call($element, event, event.target);
                        }
                    }
                }
            }
            
            else if (gesture==DOUBLE_TAP) {
                if(phase === PHASE_CANCEL || phase === PHASE_END) {
                    //Cancel any pending singletap 
                    clearTimeout(singleTapTimeout);
                    doubleTapStartTime=null;
                        
                    //Trigger the event
                    $element.trigger('doubletap', [event.target]);
                
                    //Fire the callback
                    if(options.doubleTap) {
                        ret = options.doubleTap.call($element, event, event.target);
                    }
                }
            }
            
            else if (gesture==LONG_TAP) {
                if(phase === PHASE_CANCEL || phase === PHASE_END) {
                    //Cancel any pending singletap (shouldnt be one)
                    clearTimeout(singleTapTimeout);
                    doubleTapStartTime=null;
                        
                    //Trigger the event
                    $element.trigger('longtap', [event.target]);
                
                    //Fire the callback
                    if(options.longTap) {
                        ret = options.longTap.call($element, event, event.target);
                    }
                }
            }               
                
            return ret;
        }



        
        //
        // GESTURE VALIDATION
        //
        
        /**
        * Checks the user has swipe far enough
        * @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
        * If no threshold was set, then we return true.
        * @inner
        */
        function validateSwipeDistance() {
            var valid = true;
            //If we made it past the min swipe distance..
            if (options.threshold !== null) {
                valid = distance >= options.threshold;
            }
            
            return valid;
        }
        
        /**
        * Checks the user has swiped back to cancel.
        * @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
        * If no cancelThreshold was set, then we return true.
        * @inner
        */
        function didSwipeBackToCancel() {
            var cancelled = false;
            if(options.cancelThreshold !== null && direction !==null)  {
                cancelled =  (getMaxDistance( direction ) - distance) >= options.cancelThreshold;
            }
            
            return cancelled;
        }

        /**
        * Checks the user has pinched far enough
        * @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
        * If no threshold was set, then we return true.
        * @inner
        */
        function validatePinchDistance() {
            if (options.pinchThreshold !== null) {
                return pinchDistance >= options.pinchThreshold;
            }
            return true;
        }

        /**
        * Checks that the time taken to swipe meets the minimum / maximum requirements
        * @return Boolean
        * @inner
        */
        function validateSwipeTime() {
            var result;
            //If no time set, then return true

            if (options.maxTimeThreshold) {
                if (duration >= options.maxTimeThreshold) {
                    result = false;
                } else {
                    result = true;
                }
            }
            else {
                result = true;
            }

            return result;
        }


        /**
        * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
        * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
        * @param {object} jqEvent The normalised jQuery representation of the event object.
        * @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}
        * @see $.fn.swipe.directions
        * @inner
        */
        function validateDefaultEvent(jqEvent, direction) {
            if (options.allowPageScroll === NONE || hasPinches()) {
                jqEvent.preventDefault();
            } else {
                var auto = options.allowPageScroll === AUTO;

                switch (direction) {
                    case LEFT:
                        if ((options.swipeLeft && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
                            jqEvent.preventDefault();
                        }
                        break;

                    case RIGHT:
                        if ((options.swipeRight && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
                            jqEvent.preventDefault();
                        }
                        break;

                    case UP:
                        if ((options.swipeUp && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
                            jqEvent.preventDefault();
                        }
                        break;

                    case DOWN:
                        if ((options.swipeDown && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
                            jqEvent.preventDefault();
                        }
                        break;
                }
            }

        }


        // PINCHES
        /**
         * Returns true of the current pinch meets the thresholds
         * @return Boolean
         * @inner
        */
        function validatePinch() {
            var hasCorrectFingerCount = validateFingers();
            var hasEndPoint = validateEndPoint();
            var hasCorrectDistance = validatePinchDistance();
            return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
            
        }
        
        /**
         * Returns true if any Pinch events have been registered
         * @return Boolean
         * @inner
        */
        function hasPinches() {
            //Enure we dont return 0 or null for false values
            return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
        }
        
        /**
         * Returns true if we are detecting pinches, and have one
         * @return Boolean
         * @inner
         */
        function didPinch() {
            //Enure we dont return 0 or null for false values
            return !!(validatePinch() && hasPinches());
        }




        // SWIPES
        /**
         * Returns true if the current swipe meets the thresholds
         * @return Boolean
         * @inner
        */
        function validateSwipe() {
            //Check validity of swipe
            var hasValidTime = validateSwipeTime();
            var hasValidDistance = validateSwipeDistance(); 
            var hasCorrectFingerCount = validateFingers();
            var hasEndPoint = validateEndPoint();
            var didCancel = didSwipeBackToCancel(); 
            
            // if the user swiped more than the minimum length, perform the appropriate action
            // hasValidDistance is null when no distance is set 
            var valid =  !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
            
            return valid;
        }
        
        /**
         * Returns true if any Swipe events have been registered
         * @return Boolean
         * @inner
        */
        function hasSwipes() {
            //Enure we dont return 0 or null for false values
            return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
        }
        
        
        /**
         * Returns true if we are detecting swipes and have one
         * @return Boolean
         * @inner
        */
        function didSwipe() {
            //Enure we dont return 0 or null for false values
            return !!(validateSwipe() && hasSwipes());
        }

        /**
         * Returns true if we have matched the number of fingers we are looking for
         * @return Boolean
         * @inner
        */
        function validateFingers() {
            //The number of fingers we want were matched, or on desktop we ignore
            return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
        }
        
        /**
         * Returns true if we have an end point for the swipe
         * @return Boolean
         * @inner
        */
        function validateEndPoint() {
            //We have an end value for the finger
            return fingerData[0].end.x !== 0;
        }

        // TAP / CLICK
        /**
         * Returns true if a click / tap events have been registered
         * @return Boolean
         * @inner
        */
        function hasTap() {
            //Enure we dont return 0 or null for false values
            return !!(options.tap) ;
        }
        
        /**
         * Returns true if a double tap events have been registered
         * @return Boolean
         * @inner
        */
        function hasDoubleTap() {
            //Enure we dont return 0 or null for false values
            return !!(options.doubleTap) ;
        }
        
        /**
         * Returns true if any long tap events have been registered
         * @return Boolean
         * @inner
        */
        function hasLongTap() {
            //Enure we dont return 0 or null for false values
            return !!(options.longTap) ;
        }
        
        /**
         * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
         * @return Boolean
         * @inner
        */
        function validateDoubleTap() {
            if(doubleTapStartTime==null){
                return false;
            }
            var now = getTimeStamp();
            return (hasDoubleTap() && ((now-doubleTapStartTime) <= options.doubleTapThreshold));
        }
        
        /**
         * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
         * @return Boolean
         * @inner
        */
        function inDoubleTap() {
            return validateDoubleTap();
        }
        
        
        /**
         * Returns true if we have a valid tap
         * @return Boolean
         * @inner
        */
        function validateTap() {
            return ((fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance === 0));
        }
        
        /**
         * Returns true if we have a valid long tap
         * @return Boolean
         * @inner
        */
        function validateLongTap() {
            //slight threshold on moving finger
            return ((duration > options.longTapThreshold) && (distance < DOUBLE_TAP_THRESHOLD)); 
        }
        
        /**
         * Returns true if we are detecting taps and have one
         * @return Boolean
         * @inner
        */
        function didTap() {
            //Enure we dont return 0 or null for false values
            return !!(validateTap() && hasTap());
        }
        
        
        /**
         * Returns true if we are detecting double taps and have one
         * @return Boolean
         * @inner
        */
        function didDoubleTap() {
            //Enure we dont return 0 or null for false values
            return !!(validateDoubleTap() && hasDoubleTap());
        }
        
        /**
         * Returns true if we are detecting long taps and have one
         * @return Boolean
         * @inner
        */
        function didLongTap() {
            //Enure we dont return 0 or null for false values
            return !!(validateLongTap() && hasLongTap());
        }
        
        
        
        
        // MULTI FINGER TOUCH
        /**
         * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
         * @inner
        */
        function startMultiFingerRelease() {
            previousTouchEndTime = getTimeStamp();
            previousTouchFingerCount = event.touches.length+1;
        }
        
        /**
         * Cancels the tracking of time between 2 finger releases, and resets counters
         * @inner
        */
        function cancelMultiFingerRelease() {
            previousTouchEndTime = 0;
            previousTouchFingerCount = 0;
        }
        
        /**
         * Checks if we are in the threshold between 2 fingers being released 
         * @return Boolean
         * @inner
        */
        function inMultiFingerRelease() {
            
            var withinThreshold = false;
            
            if(previousTouchEndTime) {  
                var diff = getTimeStamp() - previousTouchEndTime    
                if( diff<=options.fingerReleaseThreshold ) {
                    withinThreshold = true;
                }
            }
            
            return withinThreshold; 
        }
        

        /**
        * gets a data flag to indicate that a touch is in progress
        * @return Boolean
        * @inner
        */
        function getTouchInProgress() {
            //strict equality to ensure only true and false are returned
            return !!($element.data(PLUGIN_NS+'_intouch') === true);
        }
        
        /**
        * Sets a data flag to indicate that a touch is in progress
        * @param {boolean} val The value to set the property to
        * @inner
        */
        function setTouchInProgress(val) {
            
            //Add or remove event listeners depending on touch status
            if(val===true) {
                $element.bind(MOVE_EV, touchMove);
                $element.bind(END_EV, touchEnd);
                
                //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
                if(LEAVE_EV) { 
                    $element.bind(LEAVE_EV, touchLeave);
                }
            } else {
                $element.unbind(MOVE_EV, touchMove, false);
                $element.unbind(END_EV, touchEnd, false);
            
                //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
                if(LEAVE_EV) { 
                    $element.unbind(LEAVE_EV, touchLeave, false);
                }
            }
            
        
            //strict equality to ensure only true and false can update the value
            $element.data(PLUGIN_NS+'_intouch', val === true);
        }
        
        
        /**
         * Creates the finger data for the touch/finger in the event object.
         * @param {int} index The index in the array to store the finger data (usually the order the fingers were pressed)
         * @param {object} evt The event object containing finger data
         * @return finger data object
         * @inner
        */
        function createFingerData( index, evt ) {
            var id = evt.identifier!==undefined ? evt.identifier : 0; 
            
            fingerData[index].identifier = id;
            fingerData[index].start.x = fingerData[index].end.x = evt.pageX||evt.clientX;
            fingerData[index].start.y = fingerData[index].end.y = evt.pageY||evt.clientY;
            
            return fingerData[index];
        }
        
        /**
         * Updates the finger data for a particular event object
         * @param {object} evt The event object containing the touch/finger data to upadte
         * @return a finger data object.
         * @inner
        */
        function updateFingerData(evt) {
            
            var id = evt.identifier!==undefined ? evt.identifier : 0; 
            var f = getFingerData( id );
            
            f.end.x = evt.pageX||evt.clientX;
            f.end.y = evt.pageY||evt.clientY;
            
            return f;
        }
        
        /**
         * Returns a finger data object by its event ID.
         * Each touch event has an identifier property, which is used 
         * to track repeat touches
         * @param {int} id The unique id of the finger in the sequence of touch events.
         * @return a finger data object.
         * @inner
        */
        function getFingerData( id ) {
            for(var i=0; i<fingerData.length; i++) {
                if(fingerData[i].identifier == id) {
                    return fingerData[i];   
                }
            }
        }
        
        /**
         * Creats all the finger onjects and returns an array of finger data
         * @return Array of finger objects
         * @inner
        */
        function createAllFingerData() {
            var fingerData=[];
            for (var i=0; i<=5; i++) {
                fingerData.push({
                    start:{ x: 0, y: 0 },
                    end:{ x: 0, y: 0 },
                    identifier:0
                });
            }
            
            return fingerData;
        }
        
        /**
         * Sets the maximum distance swiped in the given direction. 
         * If the new value is lower than the current value, the max value is not changed.
         * @param {string}  direction The direction of the swipe
         * @param {int}  distance The distance of the swipe
         * @inner
        */
        function setMaxDistance(direction, distance) {
            distance = Math.max(distance, getMaxDistance(direction) );
            maximumsMap[direction].distance = distance;
        }
        
        /**
         * gets the maximum distance swiped in the given direction. 
         * @param {string}  direction The direction of the swipe
         * @return int  The distance of the swipe
         * @inner
        */        
        function getMaxDistance(direction) {
            if (maximumsMap[direction]) return maximumsMap[direction].distance;
            return undefined;
        }
        
        /**
         * Creats a map of directions to maximum swiped values.
         * @return Object A dictionary of maximum values, indexed by direction.
         * @inner
        */
        function createMaximumsData() {
            var maxData={};
            maxData[LEFT]=createMaximumVO(LEFT);
            maxData[RIGHT]=createMaximumVO(RIGHT);
            maxData[UP]=createMaximumVO(UP);
            maxData[DOWN]=createMaximumVO(DOWN);
            
            return maxData;
        }
        
        /**
         * Creates a map maximum swiped values for a given swipe direction
         * @param {string} The direction that these values will be associated with
         * @return Object Maximum values
         * @inner
        */
        function createMaximumVO(dir) {
            return { 
                direction:dir, 
                distance:0
            }
        }
        
        
        //
        // MATHS / UTILS
        //

        /**
        * Calculate the duration of the swipe
        * @return int
        * @inner
        */
        function calculateDuration() {
            return endTime - startTime;
        }
        
        /**
        * Calculate the distance between 2 touches (pinch)
        * @param {point} startPoint A point object containing x and y co-ordinates
        * @param {point} endPoint A point object containing x and y co-ordinates
        * @return int;
        * @inner
        */
        function calculateTouchesDistance(startPoint, endPoint) {
            var diffX = Math.abs(startPoint.x - endPoint.x);
            var diffY = Math.abs(startPoint.y - endPoint.y);
                
            return Math.round(Math.sqrt(diffX*diffX+diffY*diffY));
        }
        
        /**
        * Calculate the zoom factor between the start and end distances
        * @param {int} startDistance Distance (between 2 fingers) the user started pinching at
        * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
        * @return float The zoom value from 0 to 1.
        * @inner
        */
        function calculatePinchZoom(startDistance, endDistance) {
            var percent = (endDistance/startDistance) * 1;
            return percent.toFixed(2);
        }
        
        
        /**
        * Returns the pinch direction, either IN or OUT for the given points
        * @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
        * @see $.fn.swipe.directions
        * @inner
        */
        function calculatePinchDirection() {
            if(pinchZoom<1) {
                return OUT;
            }
            else {
                return IN;
            }
        }
        
        
        /**
        * Calculate the length / distance of the swipe
        * @param {point} startPoint A point object containing x and y co-ordinates
        * @param {point} endPoint A point object containing x and y co-ordinates
        * @return int
        * @inner
        */
        function calculateDistance(startPoint, endPoint) {
            return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
        }

        /**
        * Calculate the angle of the swipe
        * @param {point} startPoint A point object containing x and y co-ordinates
        * @param {point} endPoint A point object containing x and y co-ordinates
        * @return int
        * @inner
        */
        function calculateAngle(startPoint, endPoint) {
            var x = startPoint.x - endPoint.x;
            var y = endPoint.y - startPoint.y;
            var r = Math.atan2(y, x); //radians
            var angle = Math.round(r * 180 / Math.PI); //degrees

            //ensure value is positive
            if (angle < 0) {
                angle = 360 - Math.abs(angle);
            }

            return angle;
        }

        /**
        * Calculate the direction of the swipe
        * This will also call calculateAngle to get the latest angle of swipe
        * @param {point} startPoint A point object containing x and y co-ordinates
        * @param {point} endPoint A point object containing x and y co-ordinates
        * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
        * @see $.fn.swipe.directions
        * @inner
        */
        function calculateDirection(startPoint, endPoint ) {
            var angle = calculateAngle(startPoint, endPoint);

            if ((angle <= 45) && (angle >= 0)) {
                return LEFT;
            } else if ((angle <= 360) && (angle >= 315)) {
                return LEFT;
            } else if ((angle >= 135) && (angle <= 225)) {
                return RIGHT;
            } else if ((angle > 45) && (angle < 135)) {
                return DOWN;
            } else {
                return UP;
            }
        }
        

        /**
        * Returns a MS time stamp of the current time
        * @return int
        * @inner
        */
        function getTimeStamp() {
            var now = new Date();
            return now.getTime();
        }
        
        
        
        /**
         * Returns a bounds object with left, right, top and bottom properties for the element specified.
         * @param {DomNode} The DOM node to get the bounds for.
         */
        function getbounds( el ) {
            el = $(el);
            var offset = el.offset();
            
            var bounds = {  
                    left:offset.left,
                    right:offset.left+el.outerWidth(),
                    top:offset.top,
                    bottom:offset.top+el.outerHeight()
                    }
            
            return bounds;  
        }
        
        
        /**
         * Checks if the point object is in the bounds object.
         * @param {object} point A point object.
         * @param {int} point.x The x value of the point.
         * @param {int} point.y The x value of the point.
         * @param {object} bounds The bounds object to test
         * @param {int} bounds.left The leftmost value
         * @param {int} bounds.right The righttmost value
         * @param {int} bounds.top The topmost value
        * @param {int} bounds.bottom The bottommost value
         */
        function isInBounds(point, bounds) {
            return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
        };
    
    
    }
    
    


/**
 * A catch all handler that is triggered for all swipe directions. 
 * @name $.fn.swipe#swipe
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 */
 



/**
 * A handler that is triggered for "left" swipes.
 * @name $.fn.swipe#swipeLeft
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 */
 
/**
 * A handler that is triggered for "right" swipes.
 * @name $.fn.swipe#swipeRight
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 */

/**
 * A handler that is triggered for "up" swipes.
 * @name $.fn.swipe#swipeUp
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 */
 
/**
 * A handler that is triggered for "down" swipes.
 * @name $.fn.swipe#swipeDown
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 */
 
/**
 * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
 * This is triggered regardless of swipe thresholds.
 * @name $.fn.swipe#swipeStatus
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}
 * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 */
 
/**
 * A handler triggered for pinch in events.
 * @name $.fn.swipe#pinchIn
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 */

/**
 * A handler triggered for pinch out events.
 * @name $.fn.swipe#pinchOut
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 */ 

/**
 * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
 * @name $.fn.swipe#pinchStatus
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 */

/**
 * A click handler triggered when a user simply clicks, rather than swipes on an element.
 * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
 * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
 * Use the <code>tap</code> event instead.
 * @name $.fn.swipe#click
 * @event
 * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead 
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
 /**
 * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
 * @name $.fn.swipe#tap
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
/**
 * A double tap handler triggered when a user double clicks or taps on an element.
 * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property. 
 * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
 * as the script needs to check if its a double tap.
 * @name $.fn.swipe#doubleTap
 * @see  $.fn.swipe.defaults#doubleTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
 /**
 * A long tap handler triggered when a user long clicks or taps on an element.
 * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property. 
 * @name $.fn.swipe#longTap
 * @see  $.fn.swipe.defaults#longTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */

}));

// /*!
//  * imagesLoaded v3.1.4
//  * JavaScript is all like "You images are done yet or what?"
//  * MIT License
//  */

// ( function( window, factory ) { 'use strict';
//   // universal module definition

//   /*global define: false, module: false, require: false */

//   if ( typeof define === 'function' && define.amd ) {
//     // AMD
//     define( [
//       'eventEmitter/EventEmitter',
//       'eventie/eventie'
//     ], function( EventEmitter, eventie ) {
//       return factory( window, EventEmitter, eventie );
//     });
//   } else if ( typeof exports === 'object' ) {
//     // CommonJS
//     module.exports = factory(
//       window,
//       require('eventEmitter'),
//       require('eventie')
//     );
//   } else {
//     // browser global
//     window.imagesLoaded = factory(
//       window,
//       window.EventEmitter,
//       window.eventie
//     );
//   }

// })( this,

// // --------------------------  factory -------------------------- //

// function factory( window, EventEmitter, eventie ) {

// 'use strict';

// var $ = window.jQuery;
// var console = window.console;
// var hasConsole = typeof console !== 'undefined';

// // -------------------------- helpers -------------------------- //

// // extend objects
// function extend( a, b ) {
//   for ( var prop in b ) {
//     a[ prop ] = b[ prop ];
//   }
//   return a;
// }

// var objToString = Object.prototype.toString;
// function isArray( obj ) {
//   return objToString.call( obj ) === '[object Array]';
// }

// // turn element or nodeList into an array
// function makeArray( obj ) {
//   var ary = [];
//   if ( isArray( obj ) ) {
//     // use object if already an array
//     ary = obj;
//   } else if ( typeof obj.length === 'number' ) {
//     // convert nodeList to array
//     for ( var i=0, len = obj.length; i < len; i++ ) {
//       ary.push( obj[i] );
//     }
//   } else {
//     // array of single index
//     ary.push( obj );
//   }
//   return ary;
// }

//   // -------------------------- imagesLoaded -------------------------- //

//   /**
//    * @param {Array, Element, NodeList, String} elem
//    * @param {Object or Function} options - if function, use as callback
//    * @param {Function} onAlways - callback function
//    */
//   function ImagesLoaded( elem, options, onAlways ) {
//     // coerce ImagesLoaded() without new, to be new ImagesLoaded()
//     if ( !( this instanceof ImagesLoaded ) ) {
//       return new ImagesLoaded( elem, options );
//     }
//     // use elem as selector string
//     if ( typeof elem === 'string' ) {
//       elem = document.querySelectorAll( elem );
//     }

//     this.elements = makeArray( elem );
//     this.options = extend( {}, this.options );

//     if ( typeof options === 'function' ) {
//       onAlways = options;
//     } else {
//       extend( this.options, options );
//     }

//     if ( onAlways ) {
//       this.on( 'always', onAlways );
//     }

//     this.getImages();

//     if ( $ ) {
//       // add jQuery Deferred object
//       this.jqDeferred = new $.Deferred();
//     }

//     // HACK check async to allow time to bind listeners
//     var _this = this;
//     setTimeout( function() {
//       _this.check();
//     });
//   }

//   ImagesLoaded.prototype = new EventEmitter();

//   ImagesLoaded.prototype.options = {};

//   ImagesLoaded.prototype.getImages = function() {
//     this.images = [];

//     // filter & find items if we have an item selector
//     for ( var i=0, len = this.elements.length; i < len; i++ ) {
//       var elem = this.elements[i];
//       // filter siblings
//       if ( elem.nodeName === 'IMG' ) {
//         this.addImage( elem );
//       }
//       // find children
//       var childElems = elem.querySelectorAll('img');
//       // concat childElems to filterFound array
//       for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
//         var img = childElems[j];
//         this.addImage( img );
//       }
//     }
//   };

//   /**
//    * @param {Image} img
//    */
//   ImagesLoaded.prototype.addImage = function( img ) {
//     var loadingImage = new LoadingImage( img );
//     this.images.push( loadingImage );
//   };

//   ImagesLoaded.prototype.check = function() {
//     var _this = this;
//     var checkedCount = 0;
//     var length = this.images.length;
//     this.hasAnyBroken = false;
//     // complete if no images
//     if ( !length ) {
//       this.complete();
//       return;
//     }

//     function onConfirm( image, message ) {
//       if ( _this.options.debug && hasConsole ) {
//         console.log( 'confirm', image, message );
//       }

//       _this.progress( image );
//       checkedCount++;
//       if ( checkedCount === length ) {
//         _this.complete();
//       }
//       return true; // bind once
//     }

//     for ( var i=0; i < length; i++ ) {
//       var loadingImage = this.images[i];
//       loadingImage.on( 'confirm', onConfirm );
//       loadingImage.check();
//     }
//   };

//   ImagesLoaded.prototype.progress = function( image ) {
//     this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
//     // HACK - Chrome triggers event before object properties have changed. #83
//     var _this = this;
//     setTimeout( function() {
//       _this.emit( 'progress', _this, image );
//       if ( _this.jqDeferred && _this.jqDeferred.notify ) {
//         _this.jqDeferred.notify( _this, image );
//       }
//     });
//   };

//   ImagesLoaded.prototype.complete = function() {
//     var eventName = this.hasAnyBroken ? 'fail' : 'done';
//     this.isComplete = true;
//     var _this = this;
//     // HACK - another setTimeout so that confirm happens after progress
//     setTimeout( function() {
//       _this.emit( eventName, _this );
//       _this.emit( 'always', _this );
//       if ( _this.jqDeferred ) {
//         var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
//         _this.jqDeferred[ jqMethod ]( _this );
//       }
//     });
//   };

//   // -------------------------- jquery -------------------------- //

//   if ( $ ) {
//     $.fn.imagesLoaded = function( options, callback ) {
//       var instance = new ImagesLoaded( this, options, callback );
//       return instance.jqDeferred.promise( $(this) );
//     };
//   }


//   // --------------------------  -------------------------- //

//   function LoadingImage( img ) {
//     this.img = img;
//   }

//   LoadingImage.prototype = new EventEmitter();

//   LoadingImage.prototype.check = function() {
//     // first check cached any previous images that have same src
//     var resource = cache[ this.img.src ] || new Resource( this.img.src );
//     if ( resource.isConfirmed ) {
//       this.confirm( resource.isLoaded, 'cached was confirmed' );
//       return;
//     }

//     // If complete is true and browser supports natural sizes,
//     // try to check for image status manually.
//     if ( this.img.complete && this.img.naturalWidth !== undefined ) {
//       // report based on naturalWidth
//       this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
//       return;
//     }

//     // If none of the checks above matched, simulate loading on detached element.
//     var _this = this;
//     resource.on( 'confirm', function( resrc, message ) {
//       _this.confirm( resrc.isLoaded, message );
//       return true;
//     });

//     resource.check();
//   };

//   LoadingImage.prototype.confirm = function( isLoaded, message ) {
//     this.isLoaded = isLoaded;
//     this.emit( 'confirm', this, message );
//   };

//   // -------------------------- Resource -------------------------- //

//   // Resource checks each src, only once
//   // separate class from LoadingImage to prevent memory leaks. See #115

//   var cache = {};

//   function Resource( src ) {
//     this.src = src;
//     // add to cache
//     cache[ src ] = this;
//   }

//   Resource.prototype = new EventEmitter();

//   Resource.prototype.check = function() {
//     // only trigger checking once
//     if ( this.isChecked ) {
//       return;
//     }
//     // simulate loading on detached element
//     var proxyImage = new Image();
//     eventie.bind( proxyImage, 'load', this );
//     eventie.bind( proxyImage, 'error', this );
//     proxyImage.src = this.src;
//     // set flag
//     this.isChecked = true;
//   };

//   // ----- events ----- //

//   // trigger specified handler for event type
//   Resource.prototype.handleEvent = function( event ) {
//     var method = 'on' + event.type;
//     if ( this[ method ] ) {
//       this[ method ]( event );
//     }
//   };

//   Resource.prototype.onload = function( event ) {
//     this.confirm( true, 'onload' );
//     this.unbindProxyEvents( event );
//   };

//   Resource.prototype.onerror = function( event ) {
//     this.confirm( false, 'onerror' );
//     this.unbindProxyEvents( event );
//   };

//   // ----- confirm ----- //

//   Resource.prototype.confirm = function( isLoaded, message ) {
//     this.isConfirmed = true;
//     this.isLoaded = isLoaded;
//     this.emit( 'confirm', this, message );
//   };

//   Resource.prototype.unbindProxyEvents = function( event ) {
//     eventie.unbind( event.target, 'load', this );
//     eventie.unbind( event.target, 'error', this );
//   };

//   // -----  ----- //

//   return ImagesLoaded;

// });