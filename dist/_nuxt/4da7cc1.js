(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{347:function(t,e,r){"use strict";r(39),r(44),r(77),r(138),r(352);var n=r(9),o=80;function c(t,e){t.style.transform=e,t.style.webkitTransform=e}function l(t){return"TouchEvent"===t.constructor.name}function d(t){return"KeyboardEvent"===t.constructor.name}var h={show:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var n=document.createElement("span"),o=document.createElement("span");n.appendChild(o),n.className="v-ripple__container",r.class&&(n.className+=" ".concat(r.class));var h=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=0,o=0;if(!d(t)){var c=e.getBoundingClientRect(),h=l(t)?t.touches[t.touches.length-1]:t;n=h.clientX-c.left,o=h.clientY-c.top}var v=0,m=.3;e._ripple&&e._ripple.circle?(m=.15,v=e.clientWidth/2,v=r.center?v:v+Math.sqrt(Math.pow(n-v,2)+Math.pow(o-v,2))/4):v=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var f="".concat((e.clientWidth-2*v)/2,"px"),w="".concat((e.clientHeight-2*v)/2,"px");return{radius:v,scale:m,x:r.center?f:"".concat(n-v,"px"),y:r.center?w:"".concat(o-v,"px"),centerX:f,centerY:w}}(t,e,r),v=h.radius,m=h.scale,f=h.x,w=h.y,_=h.centerX,y=h.centerY,x="".concat(2*v,"px");o.className="v-ripple__animation",o.style.width=x,o.style.height=x,e.appendChild(n);var O=window.getComputedStyle(e);O&&"static"===O.position&&(e.style.position="relative",e.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),c(o,"translate(".concat(f,", ").concat(w,") scale3d(").concat(m,",").concat(m,",").concat(m,")")),o.dataset.activated=String(performance.now()),setTimeout((function(){o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),c(o,"translate(".concat(_,", ").concat(y,") scale3d(1,1,1)"))}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var r=e[e.length-1];if(!r.dataset.isHiding){r.dataset.isHiding="true";var n=performance.now()-Number(r.dataset.activated),o=Math.max(250-n,0);setTimeout((function(){r.classList.remove("v-ripple__animation--in"),r.classList.add("v-ripple__animation--out"),setTimeout((function(){var e;1===t.getElementsByClassName("v-ripple__animation").length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),(null===(e=r.parentNode)||void 0===e?void 0:e.parentNode)===t&&t.removeChild(r.parentNode)}),300)}),o)}}}}};function v(t){return void 0===t||!!t}function m(t){var e={},element=t.currentTarget;if(element&&element._ripple&&!element._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,l(t))element._ripple.touched=!0,element._ripple.isTouch=!0;else if(element._ripple.isTouch)return;if(e.center=element._ripple.centered||d(t),element._ripple.class&&(e.class=element._ripple.class),l(t)){if(element._ripple.showTimerCommit)return;element._ripple.showTimerCommit=function(){h.show(t,element,e)},element._ripple.showTimer=window.setTimeout((function(){element&&element._ripple&&element._ripple.showTimerCommit&&(element._ripple.showTimerCommit(),element._ripple.showTimerCommit=null)}),o)}else h.show(t,element,e)}}function f(t){var element=t.currentTarget;if(element&&element._ripple){if(window.clearTimeout(element._ripple.showTimer),"touchend"===t.type&&element._ripple.showTimerCommit)return element._ripple.showTimerCommit(),element._ripple.showTimerCommit=null,void(element._ripple.showTimer=setTimeout((function(){f(t)})));window.setTimeout((function(){element._ripple&&(element._ripple.touched=!1)})),h.hide(element)}}function w(t){var element=t.currentTarget;element&&element._ripple&&(element._ripple.showTimerCommit&&(element._ripple.showTimerCommit=null),window.clearTimeout(element._ripple.showTimer))}var _=!1;function y(t){_||t.keyCode!==n.o.enter&&t.keyCode!==n.o.space||(_=!0,m(t))}function x(t){_=!1,f(t)}function O(t){!0===_&&(_=!1,f(t))}function j(t,e,r){var n=v(e.value);n||h.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;var o=e.value||{};o.center&&(t._ripple.centered=!0),o.class&&(t._ripple.class=e.value.class),o.circle&&(t._ripple.circle=o.circle),n&&!r?(t.addEventListener("touchstart",m,{passive:!0}),t.addEventListener("touchend",f,{passive:!0}),t.addEventListener("touchmove",w,{passive:!0}),t.addEventListener("touchcancel",f),t.addEventListener("mousedown",m),t.addEventListener("mouseup",f),t.addEventListener("mouseleave",f),t.addEventListener("keydown",y),t.addEventListener("keyup",x),t.addEventListener("blur",O),t.addEventListener("dragstart",f,{passive:!0})):!n&&r&&C(t)}function C(t){t.removeEventListener("mousedown",m),t.removeEventListener("touchstart",m),t.removeEventListener("touchend",f),t.removeEventListener("touchmove",w),t.removeEventListener("touchcancel",f),t.removeEventListener("mouseup",f),t.removeEventListener("mouseleave",f),t.removeEventListener("keydown",y),t.removeEventListener("keyup",x),t.removeEventListener("dragstart",f),t.removeEventListener("blur",O)}var k={bind:function(t,e,r){j(t,e,!1)},unbind:function(t){delete t._ripple,C(t)},update:function(t,e){e.value!==e.oldValue&&j(t,e,v(e.oldValue))}};e.a=k},348:function(t,e,r){"use strict";r(26),r(23),r(28),r(8),r(35),r(24),r(36);var n=r(5),o=(r(351),r(139),r(44),r(25),r(48),r(0)),c=r(347),l=r(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"routable",directives:{Ripple:c.a},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var t,e,r=this.exact,data=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(n.a)(t,this.to?"nativeOn":"on",h(h({},this.$listeners),"click"in this?{click:this.click}:void 0)),Object(n.a)(t,"ref","link"),t);if(void 0===this.exact&&(r="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var o=this.activeClass,c=this.exactActiveClass||o;this.proxyClass&&(o="".concat(o," ").concat(this.proxyClass).trim(),c="".concat(c," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(data.props,{to:this.to,exact:r,exactPath:this.exactPath,activeClass:o,exactActiveClass:c,append:this.append,replace:this.replace})}else"a"===(e=(this.href?"a":this.tag)||"div")&&this.href&&(data.attrs.href=this.href);return this.target&&(data.attrs.target=this.target),{tag:e,data:data}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),r="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||e,path="_vnode.data.class."+(this.exact?r:e);this.$nextTick((function(){!Object(l.i)(t.$refs.link,path)===t.isActive&&t.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}})},349:function(t,e,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("29751484",content,!0,{sourceMap:!1})},350:function(t,e,r){var n=r(58)((function(i){return i[1]}));n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),n.locals={},t.exports=n},351:function(t,e,r){"use strict";var n=r(1),o=r(249);n({target:"String",proto:!0,forced:r(250)("link")},{link:function(t){return o(this,"a","href",t)}})},352:function(t,e,r){var content=r(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("fc402d5c",content,!0,{sourceMap:!1})},353:function(t,e,r){var n=r(58)((function(i){return i[1]}));n.push([t.i,".v-ripple__container{border-radius:inherit;contain:strict;height:100%;width:100%;z-index:0}.v-ripple__animation,.v-ripple__container{color:inherit;left:0;overflow:hidden;pointer-events:none;position:absolute;top:0}.v-ripple__animation{background:currentColor;border-radius:50%;opacity:0;will-change:transform,opacity}.v-ripple__animation--enter{opacity:0;transition:none}.v-ripple__animation--in{opacity:.25;transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1)}.v-ripple__animation--out{opacity:0;transition:opacity .3s cubic-bezier(.4,0,.2,1)}",""]),n.locals={},t.exports=n},371:function(t,e,r){var content=r(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("5168c68a",content,!0,{sourceMap:!1})},394:function(t,e,r){"use strict";r(26),r(23),r(28),r(8),r(35),r(24),r(36);var n=r(5),o=(r(114),r(349),r(348)),c=r(171);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=r(9),m=Object(v.e)("v-breadcrumbs__divider","li"),f=r(113);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(c.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(m,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(h,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},397:function(t,e,r){t.exports=r.p+"img/header.651a0dc.png"},398:function(t,e,r){t.exports=r.p+"img/logo2.861ac04.png"},400:function(t,e,r){"use strict";r(371)},401:function(t,e,r){var n=r(58)((function(i){return i[1]}));n.push([t.i,".tw-min-h-screen[data-v-3940376a]{min-height:100vh}.bg-color[data-v-3940376a]{background-color:#0097b2}",""]),n.locals={},t.exports=n},480:function(t,e,r){"use strict";r.r(e);var n=r(394),o=(r(26),r(23),r(28),r(8),r(35),r(24),r(36),r(5)),c=(r(53),r(354)),l=r.n(c);r(355);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={head:function(){return{title:"Blog Page"}},setup:function(){new l.a.init({once:!0,duration:2e3})},computed:{breadcrumbItems:function(){return[{text:"Home",href:"/"},{text:"Blog"}].map((function(t){return h(h({},t),{},{disabled:!t.href})}))}}},m=(r(400),r(78)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"tw-relative tw-w-full"},[e("img",{staticClass:"tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover",attrs:{src:r(397),alt:"Image"}}),t._v(" "),e("div",{staticClass:"tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-black tw-bg-opacity-60 tw-p-8 tw-mb-4"},[e("div",{staticClass:"tw-px-8 lg:tw-px-32 tw-items-center tw-justify-center tw-h-full"},[e("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-text-center tw-p-8"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"tw-text-center",attrs:{src:r(398),height:"100px"}})])],1)])])]),t._v(" "),e("div",{staticClass:"tw-flex tw-items-center tw-space-x-2 tw-px-8"},[e(n.a,{staticClass:"tw-text-lg tw-font-extrabold",attrs:{items:t.breadcrumbItems,divider:"/"}})],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-relative tw-min-h-screen"},[e("div",{staticClass:"tw-relative tw-w-full tw-h-96"},[e("img",{staticClass:"tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover tw-min-h-screen",attrs:{src:"https://img.freepik.com/free-photo/serious-dark-skinned-woman-with-curly-hair-has-confident-gaze-recommends-you-something_273609-45538.jpg?w=740&t=st=1684172197~exp=1684172797~hmac=0db2cfa96269fde13b38db34988eb1e9865a940c42ba7faa35532479383dc61a",alt:"Banner Image"}}),t._v(" "),e("div",{staticClass:"tw-relative tw-w-full tw-h-full tw-flex tw-flex-row tw-justify-end tw-items-center tw-bg-black tw-bg-opacity-50 tw-min-h-screen"},[e("div",{staticClass:"tw-mr-16",attrs:{"data-aos":"fade-up","data-aos-duration":"3000"}},[e("h1",{staticClass:"lg:tw-text-6xl tw-text-4xl tw-font-bold tw-text-white tw-text-right"},[t._v("\n      Coming Soon\n    ")]),t._v(" "),e("p",{staticClass:"tw-text-white tw-mt-3 tw-text-md tw-text-right",attrs:{"data-aos":"fade-up","data-aos-duration":"3000"}},[t._v("We are working on something awesome. Stay tuned!")])])])])])}],!1,null,"3940376a",null);e.default=component.exports}}]);