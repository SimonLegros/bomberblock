!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):t(jQuery)}(function(t,e){"use strict";var r={beforeShow:f,move:f,change:f,show:f,hide:f,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!0,showInitial:!1,showPalette:!1,showPaletteOnly:!1,hideAfterPaletteSelect:!1,togglePaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,offset:null},a=[],n=!!/msie/i.exec(window.navigator.userAgent),i=function(){function t(t,e){return!!~(""+t).indexOf(e)}var e=document.createElement("div").style;return e.cssText="background-color:rgba(0,0,0,.5)",t(e.backgroundColor,"rgba")||t(e.backgroundColor,"hsla")}(),s=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),o=function(){var t="";if(n)for(var e=1;e<=6;e++)t+="<div class='sp-"+e+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",t,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}();function l(e,r,a,n){for(var s=[],o=0;o<e.length;o++){var l=e[o];if(l){var c=tinycolor(l),f=c.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";f+=tinycolor.equals(r,l)?" sp-thumb-active":"";var u=c.toString(n.preferredFormat||"rgb"),h=i?"background-color:"+c.toRgbString():"filter:"+c.toFilter();s.push('<span title="'+u+'" data-color="'+c.toRgbString()+'" class="'+f+'"><span class="sp-thumb-inner" style="'+h+';" /></span>')}else{s.push(t("<div />").append(t('<span data-color="" style="background-color:transparent;" class="sp-clear-display"></span>').attr("title",n.noColorSelectedText)).html())}}return"<div class='sp-cf "+a+"'>"+s.join("")+"</div>"}function c(c,f){var g,b,v,m,y,w,_,x=(y=f,w=c,(_=t.extend({},r,y)).callbacks={move:h(_.move,w),change:h(_.change,w),show:h(_.show,w),hide:h(_.hide,w),beforeShow:h(_.beforeShow,w)},_),k=x.flat,S=x.showSelectionPalette,C=x.localStorageKey,P=x.theme,A=x.callbacks,M=(g=Wt,b=10,function(){var t=this,e=arguments;v&&clearTimeout(m),!v&&m||(m=setTimeout(function(){m=null,g.apply(t,e)},b))}),R=!1,H=!1,F=0,T=0,O=0,q=0,N=0,j=0,E=0,D=0,I=0,z=0,B=1,L=[],K=[],V={},$=x.selectionPalette.slice(0),W=x.maxSelectionSize,X="sp-dragging",Y=null,G=c.ownerDocument,Q=(G.body,t(c)),J=!1,U=t(o,G).addClass(P),Z=U.find(".sp-picker-container"),tt=U.find(".sp-color"),et=U.find(".sp-dragger"),rt=U.find(".sp-hue"),at=U.find(".sp-slider"),nt=U.find(".sp-alpha-inner"),it=U.find(".sp-alpha"),st=U.find(".sp-alpha-handle"),ot=U.find(".sp-input"),lt=U.find(".sp-palette"),ct=U.find(".sp-initial"),ft=U.find(".sp-cancel"),ut=U.find(".sp-clear"),ht=U.find(".sp-choose"),dt=U.find(".sp-palette-toggle"),pt=Q.is("input"),gt=pt&&"color"===Q.attr("type")&&p(),bt=pt&&!k,vt=bt?t(s).addClass(P).addClass(x.className).addClass(x.replacerClassName):t([]),mt=bt?vt:Q,yt=vt.find(".sp-preview-inner"),wt=x.color||pt&&Q.val(),_t=!1,xt=x.preferredFormat,kt=!x.showButtons||x.clickoutFiresChange,St=!wt,Ct=x.allowEmpty&&!gt;function Pt(){if(x.showPaletteOnly&&(x.showPalette=!0),dt.text(x.showPaletteOnly?x.togglePaletteMoreText:x.togglePaletteLessText),x.palette){L=x.palette.slice(0),K=t.isArray(L[0])?L:[L],V={};for(var e=0;e<K.length;e++)for(var r=0;r<K[e].length;r++){var a=tinycolor(K[e][r]).toRgbString();V[a]=!0}}U.toggleClass("sp-flat",k),U.toggleClass("sp-input-disabled",!x.showInput),U.toggleClass("sp-alpha-enabled",x.showAlpha),U.toggleClass("sp-clear-enabled",Ct),U.toggleClass("sp-buttons-disabled",!x.showButtons),U.toggleClass("sp-palette-buttons-disabled",!x.togglePaletteOnly),U.toggleClass("sp-palette-disabled",!x.showPalette),U.toggleClass("sp-palette-only",x.showPaletteOnly),U.toggleClass("sp-initial-disabled",!x.showInitial),U.addClass(x.className).addClass(x.containerClassName),Wt()}function At(){if(C&&window.localStorage){try{var e=window.localStorage[C].split(",#");e.length>1&&(delete window.localStorage[C],t.each(e,function(t,e){Mt(e)}))}catch(t){}try{$=window.localStorage[C].split(";")}catch(t){}}}function Mt(e){if(S){var r=tinycolor(e).toRgbString();if(!V[r]&&-1===t.inArray(r,$))for($.push(r);$.length>W;)$.shift();if(C&&window.localStorage)try{window.localStorage[C]=$.join(";")}catch(t){}}}function Rt(){var e=Bt(),r=t.map(K,function(t,r){return l(t,e,"sp-palette-row sp-palette-row-"+r,x)});At(),$&&r.push(l(function(){var t=[];if(x.showPalette)for(var e=0;e<$.length;e++){var r=tinycolor($[e]).toRgbString();V[r]||t.push($[e])}return t.reverse().slice(0,x.maxSelectionSize)}(),e,"sp-palette-row sp-palette-row-selection",x)),lt.html(r.join(""))}function Ht(){if(x.showInitial){var t=_t,e=Bt();ct.html(l([t,e],e,"sp-palette-row-initial",x))}}function Ft(){(T<=0||F<=0||q<=0)&&Wt(),H=!0,U.addClass(X),Y=null,Q.trigger("dragstart.spectrum",[Bt()])}function Tt(){H=!1,U.removeClass(X),Q.trigger("dragstop.spectrum",[Bt()])}function Ot(){var t=ot.val();if(null!==t&&""!==t||!Ct){var e=tinycolor(t);e.isValid()?(zt(e),$t(!0)):ot.addClass("sp-validation-error")}else zt(null),$t(!0)}function qt(){R?Dt():Nt()}function Nt(){var e=t.Event("beforeShow.spectrum");R?Wt():(Q.trigger(e,[Bt()]),!1===A.beforeShow(Bt())||e.isDefaultPrevented()||(!function(){for(var t=0;t<a.length;t++)a[t]&&a[t].hide()}(),R=!0,t(G).bind("keydown.spectrum",jt),t(G).bind("click.spectrum",Et),t(window).bind("resize.spectrum",M),vt.addClass("sp-active"),U.removeClass("sp-hidden"),Wt(),Kt(),_t=Bt(),Ht(),A.show(_t),Q.trigger("show.spectrum",[_t])))}function jt(t){27===t.keyCode&&Dt()}function Et(t){2!=t.button&&(H||(kt?$t(!0):It(),Dt()))}function Dt(){R&&!k&&(R=!1,t(G).unbind("keydown.spectrum",jt),t(G).unbind("click.spectrum",Et),t(window).unbind("resize.spectrum",M),vt.removeClass("sp-active"),U.addClass("sp-hidden"),A.hide(Bt()),Q.trigger("hide.spectrum",[Bt()]))}function It(){zt(_t,!0)}function zt(t,e){var r,a;tinycolor.equals(t,Bt())?Kt():(!t&&Ct?St=!0:(St=!1,a=(r=tinycolor(t)).toHsv(),D=a.h%360/360,I=a.s,z=a.v,B=a.a),Kt(),r&&r.isValid()&&!e&&(xt=x.preferredFormat||r.getFormat()))}function Bt(t){return t=t||{},Ct&&St?null:tinycolor.fromRatio({h:D,s:I,v:z,a:Math.round(100*B)/100},{format:t.format||xt})}function Lt(){Kt(),A.move(Bt()),Q.trigger("move.spectrum",[Bt()])}function Kt(){ot.removeClass("sp-validation-error"),Vt();var t=tinycolor.fromRatio({h:D,s:1,v:1});tt.css("background-color",t.toHexString());var e=xt;B<1&&(0!==B||"name"!==e)&&("hex"!==e&&"hex3"!==e&&"hex6"!==e&&"name"!==e||(e="rgb"));var r=Bt({format:e}),a="";if(yt.removeClass("sp-clear-display"),yt.css("background-color","transparent"),!r&&Ct)yt.addClass("sp-clear-display");else{var s=r.toHexString(),o=r.toRgbString();if(i||1===r.alpha?yt.css("background-color",o):(yt.css("background-color","transparent"),yt.css("filter",r.toFilter())),x.showAlpha){var l=r.toRgb();l.a=0;var c=tinycolor(l).toRgbString(),f="linear-gradient(left, "+c+", "+s+")";n?nt.css("filter",tinycolor(c).toFilter({gradientType:1},s)):(nt.css("background","-webkit-"+f),nt.css("background","-moz-"+f),nt.css("background","-ms-"+f),nt.css("background","linear-gradient(to right, "+c+", "+s+")"))}a=r.toString(e)}x.showInput&&ot.val(a),x.showPalette&&Rt(),Ht()}function Vt(){var t=I,e=z;if(Ct&&St)st.hide(),at.hide(),et.hide();else{st.show(),at.show(),et.show();var r=t*F,a=T-e*T;r=Math.max(-O,Math.min(F-O,r-O)),a=Math.max(-O,Math.min(T-O,a-O)),et.css({top:a+"px",left:r+"px"});var n=B*N;st.css({left:n-j/2+"px"});var i=D*q;at.css({top:i-E+"px"})}}function $t(t){var e=Bt(),r="",a=!tinycolor.equals(e,_t);e&&(r=e.toString(xt),Mt(e)),pt&&Q.val(r),t&&a&&(A.change(e),Q.trigger("change",[e]))}function Wt(){var e,r,a,n,i,s,o,l,c,f;R&&(F=tt.width(),T=tt.height(),O=et.height(),rt.width(),q=rt.height(),E=at.height(),N=it.width(),j=st.width(),k||(U.css("position","absolute"),x.offset?U.offset(x.offset):U.offset((r=mt,a=(e=U).outerWidth(),n=e.outerHeight(),i=r.outerHeight(),s=e[0].ownerDocument,o=s.documentElement,l=o.clientWidth+t(s).scrollLeft(),c=o.clientHeight+t(s).scrollTop(),(f=r.offset()).top+=i,f.left-=Math.min(f.left,f.left+a>l&&l>a?Math.abs(f.left+a-l):0),f.top-=Math.min(f.top,f.top+n>c&&c>n?Math.abs(n+i-0):0),f))),Vt(),x.showPalette&&Rt(),Q.trigger("reflow.spectrum"))}function Xt(){Dt(),J=!0,Q.attr("disabled",!0),mt.addClass("sp-disabled")}!function(){if(n&&U.find("*:not(input)").attr("unselectable","on"),Pt(),bt&&Q.after(vt).hide(),Ct||ut.hide(),k)Q.after(U).hide();else{var e="parent"===x.appendTo?Q.parent():t(x.appendTo);1!==e.length&&(e=t("body")),e.append(U)}function r(e){return e.data&&e.data.ignore?(zt(t(e.target).closest(".sp-thumb-el").data("color")),Lt()):(zt(t(e.target).closest(".sp-thumb-el").data("color")),Lt(),$t(!0),x.hideAfterPaletteSelect&&Dt()),!1}At(),mt.bind("click.spectrum touchstart.spectrum",function(e){J||qt(),e.stopPropagation(),t(e.target).is("input")||e.preventDefault()}),(Q.is(":disabled")||!0===x.disabled)&&Xt(),U.click(u),ot.change(Ot),ot.bind("paste",function(){setTimeout(Ot,1)}),ot.keydown(function(t){13==t.keyCode&&Ot()}),ft.text(x.cancelText),ft.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),It(),Dt()}),ut.attr("title",x.clearText),ut.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),St=!0,Lt(),k&&$t(!0)}),ht.text(x.chooseText),ht.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),n&&ot.is(":focus")&&ot.trigger("change"),ot.hasClass("sp-validation-error")||($t(!0),Dt())}),dt.text(x.showPaletteOnly?x.togglePaletteMoreText:x.togglePaletteLessText),dt.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),x.showPaletteOnly=!x.showPaletteOnly,x.showPaletteOnly||k||U.css("left","-="+(Z.outerWidth(!0)+5)),Pt()}),d(it,function(t,e,r){B=t/N,St=!1,r.shiftKey&&(B=Math.round(10*B)/10),Lt()},Ft,Tt),d(rt,function(t,e){D=parseFloat(e/q),St=!1,x.showAlpha||(B=1),Lt()},Ft,Tt),d(tt,function(t,e,r){if(r.shiftKey){if(!Y){var a=I*F,n=T-z*T,i=Math.abs(t-a)>Math.abs(e-n);Y=i?"x":"y"}}else Y=null;var s=!Y||"y"===Y;(!Y||"x"===Y)&&(I=parseFloat(t/F)),s&&(z=parseFloat((T-e)/T)),St=!1,x.showAlpha||(B=1),Lt()},Ft,Tt),wt?(zt(wt),Kt(),xt=x.preferredFormat||tinycolor(wt).format,Mt(wt)):Kt(),k&&Nt();var a=n?"mousedown.spectrum":"click.spectrum touchstart.spectrum";lt.delegate(".sp-thumb-el",a,r),ct.delegate(".sp-thumb-el:nth-child(1)",a,{ignore:!0},r)}();var Yt={show:Nt,hide:Dt,toggle:qt,reflow:Wt,option:function(r,a){return r===e?t.extend({},x):a===e?x[r]:(x[r]=a,"preferredFormat"===r&&(xt=x.preferredFormat),void Pt())},enable:function(){J=!1,Q.attr("disabled",!1),mt.removeClass("sp-disabled")},disable:Xt,offset:function(t){x.offset=t,Wt()},set:function(t){zt(t),$t()},get:Bt,destroy:function(){Q.show(),mt.unbind("click.spectrum touchstart.spectrum"),U.remove(),vt.remove(),a[Yt.id]=null},container:U};return Yt.id=a.push(Yt)-1,Yt}function f(){}function u(t){t.stopPropagation()}function h(t,e){var r=Array.prototype.slice,a=r.call(arguments,2);return function(){return t.apply(e,a.concat(r.call(arguments)))}}function d(e,r,a,i){r=r||function(){},a=a||function(){},i=i||function(){};var s=document,o=!1,l={},c=0,f=0,u="ontouchstart"in window,h={};function d(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}function p(t){if(o){if(n&&s.documentMode<9&&!t.button)return g();var a=t.originalEvent&&t.originalEvent.touches&&t.originalEvent.touches[0],i=a&&a.pageX||t.pageX,h=a&&a.pageY||t.pageY,p=Math.max(0,Math.min(i-l.left,f)),b=Math.max(0,Math.min(h-l.top,c));u&&d(t),r.apply(e,[p,b,t])}}function g(){o&&(t(s).unbind(h),t(s.body).removeClass("sp-dragging"),setTimeout(function(){i.apply(e,arguments)},0)),o=!1}h.selectstart=d,h.dragstart=d,h["touchmove mousemove"]=p,h["touchend mouseup"]=g,t(e).bind("touchstart mousedown",function(r){(r.which?3==r.which:2==r.button)||o||!1!==a.apply(e,arguments)&&(o=!0,c=t(e).height(),f=t(e).width(),l=t(e).offset(),t(s).bind(h),t(s.body).addClass("sp-dragging"),p(r),d(r))})}function p(){return t.fn.spectrum.inputTypeColorSupport()}var g="spectrum.id";t.fn.spectrum=function(e,r){if("string"==typeof e){var n=this,i=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=a[t(this).data(g)];if(r){var s=r[e];if(!s)throw new Error("Spectrum: no such method: '"+e+"'");"get"==e?n=r.get():"container"==e?n=r.container:"option"==e?n=r.option.apply(r,i):"destroy"==e?(r.destroy(),t(this).removeData(g)):s.apply(r,i)}}),n}return this.spectrum("destroy").each(function(){var r=c(this,t.extend({},e,t(this).data()));t(this).data(g,r.id)})},t.fn.spectrum.load=!0,t.fn.spectrum.loadOpts={},t.fn.spectrum.draggable=d,t.fn.spectrum.defaults=r,t.fn.spectrum.inputTypeColorSupport=function e(){if(void 0===e._cachedResult){var r=t("<input type='color'/>")[0];e._cachedResult="color"===r.type&&""!==r.value}return e._cachedResult},t.spectrum={},t.spectrum.localization={},t.spectrum.palettes={},t.fn.spectrum.processNativeColorInputs=function(){var e=t("input[type=color]");e.length&&!p()&&e.spectrum({preferredFormat:"hex6"})},function(){var t=/^[\s,#]+/,e=/\s+$/,r=0,a=Math,n=a.round,i=a.min,s=a.max,o=a.random,l=function(o,c){if(c=c||{},(o=o||"")instanceof l)return o;if(!(this instanceof l))return new l(o,c);var f=function(r){var n={r:0,g:0,b:0},o=1,l=!1,c=!1;"string"==typeof r&&(r=function(r){r=r.replace(t,"").replace(e,"").toLowerCase();var a,n=!1;if(P[r])r=P[r],n=!0;else if("transparent"==r)return{r:0,g:0,b:0,a:0,format:"name"};if(a=E.rgb.exec(r))return{r:a[1],g:a[2],b:a[3]};if(a=E.rgba.exec(r))return{r:a[1],g:a[2],b:a[3],a:a[4]};if(a=E.hsl.exec(r))return{h:a[1],s:a[2],l:a[3]};if(a=E.hsla.exec(r))return{h:a[1],s:a[2],l:a[3],a:a[4]};if(a=E.hsv.exec(r))return{h:a[1],s:a[2],v:a[3]};if(a=E.hsva.exec(r))return{h:a[1],s:a[2],v:a[3],a:a[4]};if(a=E.hex8.exec(r))return{a:(i=a[1],F(i)/255),r:F(a[2]),g:F(a[3]),b:F(a[4]),format:n?"name":"hex8"};var i;if(a=E.hex6.exec(r))return{r:F(a[1]),g:F(a[2]),b:F(a[3]),format:n?"name":"hex"};if(a=E.hex3.exec(r))return{r:F(a[1]+""+a[1]),g:F(a[2]+""+a[2]),b:F(a[3]+""+a[3]),format:n?"name":"hex"};return!1}(r));"object"==typeof r&&(r.hasOwnProperty("r")&&r.hasOwnProperty("g")&&r.hasOwnProperty("b")?(f=r.r,u=r.g,h=r.b,n={r:255*R(f,255),g:255*R(u,255),b:255*R(h,255)},l=!0,c="%"===String(r.r).substr(-1)?"prgb":"rgb"):r.hasOwnProperty("h")&&r.hasOwnProperty("s")&&r.hasOwnProperty("v")?(r.s=O(r.s),r.v=O(r.v),n=function(t,e,r){t=6*R(t,360),e=R(e,100),r=R(r,100);var n=a.floor(t),i=t-n,s=r*(1-e),o=r*(1-i*e),l=r*(1-(1-i)*e),c=n%6;return{r:255*[r,o,s,s,l,r][c],g:255*[l,r,r,o,s,s][c],b:255*[s,s,l,r,r,o][c]}}(r.h,r.s,r.v),l=!0,c="hsv"):r.hasOwnProperty("h")&&r.hasOwnProperty("s")&&r.hasOwnProperty("l")&&(r.s=O(r.s),r.l=O(r.l),n=function(t,e,r){var a,n,i;function s(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=R(t,360),e=R(e,100),r=R(r,100),0===e)a=n=i=r;else{var o=r<.5?r*(1+e):r+e-r*e,l=2*r-o;a=s(l,o,t+1/3),n=s(l,o,t),i=s(l,o,t-1/3)}return{r:255*a,g:255*n,b:255*i}}(r.h,r.s,r.l),l=!0,c="hsl"),r.hasOwnProperty("a")&&(o=r.a));var f,u,h;return o=M(o),{ok:l,format:r.format||c,r:i(255,s(n.r,0)),g:i(255,s(n.g,0)),b:i(255,s(n.b,0)),a:o}}(o);this._originalInput=o,this._r=f.r,this._g=f.g,this._b=f.b,this._a=f.a,this._roundA=n(100*this._a)/100,this._format=c.format||f.format,this._gradientType=c.gradientType,this._r<1&&(this._r=n(this._r)),this._g<1&&(this._g=n(this._g)),this._b<1&&(this._b=n(this._b)),this._ok=f.ok,this._tc_id=r++};function c(t,e,r){t=R(t,255),e=R(e,255),r=R(r,255);var a,n,o=s(t,e,r),l=i(t,e,r),c=(o+l)/2;if(o==l)a=n=0;else{var f=o-l;switch(n=c>.5?f/(2-o-l):f/(o+l),o){case t:a=(e-r)/f+(e<r?6:0);break;case e:a=(r-t)/f+2;break;case r:a=(t-e)/f+4}a/=6}return{h:a,s:n,l:c}}function f(t,e,r){t=R(t,255),e=R(e,255),r=R(r,255);var a,n,o=s(t,e,r),l=i(t,e,r),c=o,f=o-l;if(n=0===o?0:f/o,o==l)a=0;else{switch(o){case t:a=(e-r)/f+(e<r?6:0);break;case e:a=(r-t)/f+2;break;case r:a=(t-e)/f+4}a/=6}return{h:a,s:n,v:c}}function u(t,e,r,a){var i=[T(n(t).toString(16)),T(n(e).toString(16)),T(n(r).toString(16))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function h(t,e,r,a){var i;return[T((i=a,Math.round(255*parseFloat(i)).toString(16))),T(n(t).toString(16)),T(n(e).toString(16)),T(n(r).toString(16))].join("")}function d(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.s-=e/100,r.s=H(r.s),l(r)}function p(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.s+=e/100,r.s=H(r.s),l(r)}function g(t){return l(t).desaturate(100)}function b(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.l+=e/100,r.l=H(r.l),l(r)}function v(t,e){e=0===e?0:e||10;var r=l(t).toRgb();return r.r=s(0,i(255,r.r-n(-e/100*255))),r.g=s(0,i(255,r.g-n(-e/100*255))),r.b=s(0,i(255,r.b-n(-e/100*255))),l(r)}function m(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.l-=e/100,r.l=H(r.l),l(r)}function y(t,e){var r=l(t).toHsl(),a=(n(r.h)+e)%360;return r.h=a<0?360+a:a,l(r)}function w(t){var e=l(t).toHsl();return e.h=(e.h+180)%360,l(e)}function _(t){var e=l(t).toHsl(),r=e.h;return[l(t),l({h:(r+120)%360,s:e.s,l:e.l}),l({h:(r+240)%360,s:e.s,l:e.l})]}function x(t){var e=l(t).toHsl(),r=e.h;return[l(t),l({h:(r+90)%360,s:e.s,l:e.l}),l({h:(r+180)%360,s:e.s,l:e.l}),l({h:(r+270)%360,s:e.s,l:e.l})]}function k(t){var e=l(t).toHsl(),r=e.h;return[l(t),l({h:(r+72)%360,s:e.s,l:e.l}),l({h:(r+216)%360,s:e.s,l:e.l})]}function S(t,e,r){e=e||6,r=r||30;var a=l(t).toHsl(),n=360/r,i=[l(t)];for(a.h=(a.h-(n*e>>1)+720)%360;--e;)a.h=(a.h+n)%360,i.push(l(a));return i}function C(t,e){e=e||6;for(var r=l(t).toHsv(),a=r.h,n=r.s,i=r.v,s=[],o=1/e;e--;)s.push(l({h:a,s:n,v:i})),i=(i+o)%1;return s}l.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},setAlpha:function(t){return this._a=M(t),this._roundA=n(100*this._a)/100,this},toHsv:function(){var t=f(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=f(this._r,this._g,this._b),e=n(360*t.h),r=n(100*t.s),a=n(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+a+"%)":"hsva("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=c(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=c(this._r,this._g,this._b),e=n(360*t.h),r=n(100*t.s),a=n(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+a+"%)":"hsla("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return u(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(){return h(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:n(this._r),g:n(this._g),b:n(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+n(this._r)+", "+n(this._g)+", "+n(this._b)+")":"rgba("+n(this._r)+", "+n(this._g)+", "+n(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:n(100*R(this._r,255))+"%",g:n(100*R(this._g,255))+"%",b:n(100*R(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+n(100*R(this._r,255))+"%, "+n(100*R(this._g,255))+"%, "+n(100*R(this._b,255))+"%)":"rgba("+n(100*R(this._r,255))+"%, "+n(100*R(this._g,255))+"%, "+n(100*R(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(A[u(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+h(this._r,this._g,this._b,this._a),r=e,a=this._gradientType?"GradientType = 1, ":"";t&&(r=l(t).toHex8String());return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,a=this._a<1&&this._a>=0;return e||!a||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(v,arguments)},darken:function(){return this._applyModification(m,arguments)},desaturate:function(){return this._applyModification(d,arguments)},saturate:function(){return this._applyModification(p,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(y,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(S,arguments)},complement:function(){return this._applyCombination(w,arguments)},monochromatic:function(){return this._applyCombination(C,arguments)},splitcomplement:function(){return this._applyCombination(k,arguments)},triad:function(){return this._applyCombination(_,arguments)},tetrad:function(){return this._applyCombination(x,arguments)}},l.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var a in t)t.hasOwnProperty(a)&&(r[a]="a"===a?t[a]:O(t[a]));t=r}return l(t,e)},l.equals=function(t,e){return!(!t||!e)&&l(t).toRgbString()==l(e).toRgbString()},l.random=function(){return l.fromRatio({r:o(),g:o(),b:o()})},l.mix=function(t,e,r){r=0===r?0:r||50;var a,n=l(t).toRgb(),i=l(e).toRgb(),s=r/100,o=2*s-1,c=i.a-n.a,f=1-(a=((a=o*c==-1?o:(o+c)/(1+o*c))+1)/2),u={r:i.r*a+n.r*f,g:i.g*a+n.g*f,b:i.b*a+n.b*f,a:i.a*s+n.a*(1-s)};return l(u)},l.readability=function(t,e){var r=l(t),a=l(e),n=r.toRgb(),i=a.toRgb(),s=r.getBrightness(),o=a.getBrightness(),c=Math.max(n.r,i.r)-Math.min(n.r,i.r)+Math.max(n.g,i.g)-Math.min(n.g,i.g)+Math.max(n.b,i.b)-Math.min(n.b,i.b);return{brightness:Math.abs(s-o),color:c}},l.isReadable=function(t,e){var r=l.readability(t,e);return r.brightness>125&&r.color>500},l.mostReadable=function(t,e){for(var r=null,a=0,n=!1,i=0;i<e.length;i++){var s=l.readability(t,e[i]),o=s.brightness>125&&s.color>500,c=s.brightness/125*3+s.color/500;(o&&!n||o&&n&&c>a||!o&&!n&&c>a)&&(n=o,a=c,r=l(e[i]))}return r};var P=l.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},A=l.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(P);function M(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function R(t,e){var r;"string"==typeof(r=t)&&-1!=r.indexOf(".")&&1===parseFloat(r)&&(t="100%");var n,o="string"==typeof(n=t)&&-1!=n.indexOf("%");return t=i(e,s(0,parseFloat(t))),o&&(t=parseInt(t*e,10)/100),a.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function H(t){return i(1,s(0,t))}function F(t){return parseInt(t,16)}function T(t){return 1==t.length?"0"+t:""+t}function O(t){return t<=1&&(t=100*t+"%"),t}var q,N,j,E=(N="[\\s|\\(]+("+(q="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+q+")[,|\\s]+("+q+")\\s*\\)?",j="[\\s|\\(]+("+q+")[,|\\s]+("+q+")[,|\\s]+("+q+")[,|\\s]+("+q+")\\s*\\)?",{rgb:new RegExp("rgb"+N),rgba:new RegExp("rgba"+j),hsl:new RegExp("hsl"+N),hsla:new RegExp("hsla"+j),hsv:new RegExp("hsv"+N),hsva:new RegExp("hsva"+j),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});window.tinycolor=l}(),t(function(){t.fn.spectrum.load&&t.fn.spectrum.processNativeColorInputs()})});