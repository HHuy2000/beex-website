(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,i,s){var n=s(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,i,s){return i in e?Object.defineProperty(e,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[i]=s,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7316:function(e){e.exports=function(e,i){if(null==e)return{};var s,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],i.indexOf(s)>=0||(t[s]=e[s]);return t}},319:function(e,i,s){var n=s(3646),t=s(6860),r=s(379),c=s(8206);e.exports=function(e){return n(e)||t(e)||r(e)||c()}},6255:function(e,i,s){"use strict";var n=s(3038),t=s(319),r=s(5318);var c=r(s(7316)),a=r(s(7154)),l=r(s(7294)),o=r(s(7947)),d=s(7239),h=s(5655),m=s(5749);var g=new Map([["imgix",function(e){var i=e.root,s=e.src,n=e.width,t=e.quality,r=["auto=format","fit=max","w="+n],c="";t&&r.push("q="+t);r.length&&(c="?"+r.join("&"));return"".concat(i).concat(w(s)).concat(c)}],["cloudinary",function(e){var i=e.root,s=e.src,n=e.width,t=e.quality,r=["f_auto","c_limit","w_"+n,"q_"+(t||"auto")].join(",")+"/";return"".concat(i).concat(r).concat(w(s))}],["akamai",function(e){var i=e.root,s=e.src,n=e.width;return"".concat(i).concat(w(s),"?imwidth=").concat(n)}],["default",function(e){var i=e.root,s=e.src,n=e.width,t=e.quality;0;return"".concat(i,"?url=").concat(encodeURIComponent(s),"&w=").concat(n,"&q=").concat(t||75)}]]),v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://noop/",loader:"imgix",enableBlurryPlaceholder:!1}||h.imageConfigDefault,u=v.deviceSizes,x=v.imageSizes,j=v.loader,p=v.path,f=(v.domains,v.enableBlurryPlaceholder),N=[].concat(t(u),t(x));function _(e){var i=e.src,s=e.unoptimized,n=e.layout,r=e.width,c=e.quality,a=e.sizes,l=e.loader;if(s)return{src:i,srcSet:void 0,sizes:void 0};var o=function(e,i,s){if(s&&("fill"===i||"responsive"===i)){for(var n,r=/(^|\s)(1?\d?\d)vw/g,c=[];n=r.exec(s);n)c.push(parseInt(n[2]));if(c.length){var a=.01*Math.min.apply(Math,c);return{widths:N.filter((function(e){return e>=u[0]*a})),kind:"w"}}return{widths:N,kind:"w"}}return"number"!==typeof e||"fill"===i||"responsive"===i?{widths:u,kind:"w"}:{widths:t(new Set([e,2*e].map((function(e){return N.find((function(i){return i>=e}))||N[N.length-1]})))),kind:"x"}}(r,n,a),d=o.widths,h=o.kind,m=d.length-1;return{sizes:a||"w"!==h?a:"100vw",srcSet:d.map((function(e,s){return"".concat(l({src:i,quality:c,width:e})," ").concat("w"===h?e:s+1).concat(h)})).join(", "),src:l({src:i,quality:c,width:d[m]})}}function b(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function y(e){var i=g.get(j);if(i)return i((0,a.default)({root:p},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(h.VALID_LOADERS.join(", "),". Received: ").concat(j))}function w(e){return"/"===e[0]?e.slice(1):e}u.sort((function(e,i){return e-i})),N.sort((function(e,i){return e-i}))},5749:function(e,i,s){"use strict";var n=s(3038);i.__esModule=!0,i.useIntersection=function(e){var i=e.rootMargin,s=e.disabled||!c,l=(0,t.useRef)(),o=(0,t.useState)(!1),d=n(o,2),h=d[0],m=d[1],g=(0,t.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),s||h||e&&e.tagName&&(l.current=function(e,i,s){var n=function(e){var i=e.rootMargin||"",s=a.get(i);if(s)return s;var n=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var i=n.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;i&&s&&i(s)}))}),e);return a.set(i,s={id:i,observer:t,elements:n}),s}(s),t=n.id,r=n.observer,c=n.elements;return c.set(e,i),r.observe(e),function(){c.delete(e),r.unobserve(e),0===c.size&&(r.disconnect(),a.delete(t))}}(e,(function(e){return e&&m(e)}),{rootMargin:i}))}),[s,i,h]);return(0,t.useEffect)((function(){if(!c&&!h){var e=(0,r.requestIdleCallback)((function(){return m(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[h]),[g,h]};var t=s(7294),r=s(8391),c="undefined"!==typeof IntersectionObserver;var a=new Map},3367:function(e,i,s){"use strict";var n;i.__esModule=!0,i.AmpStateContext=void 0;var t=((n=s(7294))&&n.__esModule?n:{default:n}).default.createContext({});i.AmpStateContext=t},7845:function(e,i,s){"use strict";i.__esModule=!0,i.isInAmpMode=c,i.useAmp=function(){return c(t.default.useContext(r.AmpStateContext))};var n,t=(n=s(7294))&&n.__esModule?n:{default:n},r=s(3367);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.ampFirst,s=void 0!==i&&i,n=e.hybrid,t=void 0!==n&&n,r=e.hasQuery,c=void 0!==r&&r;return s||t&&c}},7947:function(e,i,s){"use strict";var n=s(9713);function t(e,i){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),s.push.apply(s,n)}return s}i.__esModule=!0,i.defaultHead=m,i.default=void 0;var r,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=h();if(i&&i.has(e))return i.get(e);var s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=n?Object.getOwnPropertyDescriptor(e,t):null;r&&(r.get||r.set)?Object.defineProperty(s,t,r):s[t]=e[t]}s.default=e,i&&i.set(e,s);return s}(s(7294)),a=(r=s(617))&&r.__esModule?r:{default:r},l=s(3367),o=s(4287),d=s(7845);function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=[c.default.createElement("meta",{charSet:"utf-8"})];return e||i.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),i}function g(e,i){return"string"===typeof i||"number"===typeof i?e:i.type===c.default.Fragment?e.concat(c.default.Children.toArray(i.props.children).reduce((function(e,i){return"string"===typeof i||"number"===typeof i?e:e.concat(i)}),[])):e.concat(i)}var v=["name","httpEquiv","charSet","itemProp"];function u(e,i){return e.reduce((function(e,i){var s=c.default.Children.toArray(i.props.children);return e.concat(s)}),[]).reduce(g,[]).reverse().concat(m(i.inAmpMode)).filter(function(){var e=new Set,i=new Set,s=new Set,n={};return function(t){var r=!0,c=!1;if(t.key&&"number"!==typeof t.key&&t.key.indexOf("$")>0){c=!0;var a=t.key.slice(t.key.indexOf("$")+1);e.has(a)?r=!1:e.add(a)}switch(t.type){case"title":case"base":i.has(t.type)?r=!1:i.add(t.type);break;case"meta":for(var l=0,o=v.length;l<o;l++){var d=v[l];if(t.props.hasOwnProperty(d))if("charSet"===d)s.has(d)?r=!1:s.add(d);else{var h=t.props[d],m=n[d]||new Set;"name"===d&&c||!m.has(h)?(m.add(h),n[d]=m):r=!1}}}return r}}()).reverse().map((function(e,s){var r=e.key||s;if(!i.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(i){return e.props.href.startsWith(i)}))){var a=function(e){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?t(Object(s),!0).forEach((function(i){n(e,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(s,i))}))}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,c.default.cloneElement(e,a)}return c.default.cloneElement(e,{key:r})}))}function x(e){var i=e.children,s=(0,c.useContext)(l.AmpStateContext),n=(0,c.useContext)(o.HeadManagerContext);return c.default.createElement(a.default,{reduceComponentsToState:u,headManager:n,inAmpMode:(0,d.isInAmpMode)(s)},i)}x.rewind=function(){};var j=x;i.default=j},617:function(e,i,s){"use strict";var n=s(319),t=s(4575),r=s(3913),c=(s(1506),s(2205)),a=s(8585),l=s(9754);function o(e){var i=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=l(e);if(i){var t=l(this).constructor;s=Reflect.construct(n,arguments,t)}else s=n.apply(this,arguments);return a(this,s)}}i.__esModule=!0,i.default=void 0;var d=s(7294),h=function(e){c(s,e);var i=o(s);function s(e){var r;return t(this,s),(r=i.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(n(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(s,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),s}(d.Component);i.default=h},7239:function(e,i){"use strict";i.__esModule=!0,i.toBase64=function(e){return window.btoa(e)}},3378:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return y}});var n=s(5893),t=s(9008);s(7294);var r=function(){return(0,n.jsx)("div",{children:"Footer"})},c=s(6156),a=s(6015),l=s.n(a);s(5675);var o=function(){var e;return(0,n.jsxs)("div",{className:l().navbar,children:[(0,n.jsx)("img",{src:"/images/logo.svg",alt:"logo",className:l().logo}),(0,n.jsxs)("div",(e={className:l().navitem},(0,c.Z)(e,"className",l().trangchu),(0,c.Z)(e,"children",[(0,n.jsx)("img",{className:l().trangchulogo,src:"/images/mainpagebee.svg",alt:"minibee"}),(0,n.jsx)("h1",{className:l().trangchutext,children:(0,n.jsx)("span",{className:l().span,children:"Trang ch\u1ee7"})})]),e)),(0,n.jsx)("h1",{className:l().navitem,children:"D\u1ecbch v\u1ee5"}),(0,n.jsx)("h1",{className:l().navitem,children:"G\xf3i d\u1ecbch v\u1ee5"}),(0,n.jsx)("h1",{className:l().navitem,children:"V\u1ec1 ch\xfang t\xf4i"})]})};var d=function(){return(0,n.jsx)("div",{children:"Advisory"})};var h=function(){return(0,n.jsx)("div",{children:"B\u1ea1n \u0111\xe3 s\u1eb5n s\xe0ng ?"})},m=s(681),g=s.n(m);var v=function(){return(0,n.jsxs)("div",{className:g().div,children:[(0,n.jsxs)("div",{className:g().text,children:[(0,n.jsx)("div",{className:g().quotehighdaddy,children:(0,n.jsx)("p",{className:g().quotehigh,children:"C\xd9NG BEEX \u0110\u01afA B\u1ea0N \u0110\u1ebeN C\xc2U CHUY\u1ec6N"})}),(0,n.jsxs)("div",{className:g().allh1,children:[(0,n.jsxs)("h1",{className:g().h1,children:["Nh\u1eefng ch\xfa ong ",(0,n.jsx)("span",{className:g().span,children:"ch\u0103m ch\u1ec9"})]}),(0,n.jsxs)("h1",{className:g().h1,children:["C\xf9ng b\u1ea1n x\xe2y ",(0,n.jsx)("span",{className:g().span,children:"th\u01b0\u01a1ng hi\u1ec7u"})]})]}),(0,n.jsxs)("p",{className:g().quotelow,children:[(0,n.jsx)("span",{className:g().span,children:"BeeX"})," l\xe0 n\u01a1i tuy\u1ec7t v\u1eddi \u0111\u1ec3 b\u1eaft \u0111\u1ea7u hi\u1ec7n th\u1ef1c ho\xe1 \xfd t\u01b0\u1edfng kinh doanh c\u1ee7a b\u1ea1n. V\u1edbi nh\u1eefng chi\u1ebfn d\u1ecbch gi\xfap gia t\u0103ng doanh s\u1ed1 b\xe1n h\xe0ng t\u1eeb \u0111\xf3 h\u01b0\u1edbng \u0111\u1ebfn s\u1ef1 th\xe0nh c\xf4ng c\u1ee7a doanh nghi\u1ec7p b\u1ea1n"]}),(0,n.jsx)("button",{className:g().btn,children:"Li\xean h\u1ec7"})]}),(0,n.jsx)("div",{className:g().pic,children:(0,n.jsx)("img",{src:"\\images\\Header_pic.svg",alt:"Picture header",className:g().png})})]})};var u=function(){return(0,n.jsx)("div",{children:"Our products"})},x=s(4112),j=s.n(x);var p=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("section",{className:j().sectionTitle,children:[(0,n.jsx)("div",{className:j().title,children:(0,n.jsx)("h1",{children:"G\xf3i d\u1ecbch v\u1ee5"})}),(0,n.jsx)("div",{className:j().logoTitle,children:(0,n.jsx)("img",{src:"../images/pricingTitle.svg",alt:""})})]}),(0,n.jsxs)("section",{className:j().sectionbody,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Tr\u1ee9ng"}),(0,n.jsx)("button",{children:(0,n.jsx)("a",{href:"",children:"2tr499k/th\xe1ng"})}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Thi\u1ebft k\u1ebf logo"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Thi\u1ebft k\u1ebf \u1ea3nh b\xeca"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"4"})," b\xe0i s\xe1ng t\u1ea1o n\u1ed9i dung"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"4"})," thi\u1ebft k\u1ebf poster"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp, t\u1ed1i \u01b0u ho\xe1 fanpage"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp Chatbot tr\u1ea3 l\u1eddi t\u1ef1 \u0111\u1ed9ng"]}),(0,n.jsxs)("a",{href:"",children:["Mua ngay",(0,n.jsx)("img",{className:j().Footerimg,src:"../images/pricingFooterdiv.svg"})]})]})]}),(0,n.jsxs)("div",{className:j().divorange,children:[(0,n.jsx)("h1",{children:"\u1ea4u tr\xf9ng"}),(0,n.jsx)("button",{children:(0,n.jsx)("a",{href:"",children:"2tr499k/th\xe1ng"})}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/pricingTickwhite.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Thi\u1ebft k\u1ebf logo"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/pricingTickwhite.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Thi\u1ebft k\u1ebf \u1ea3nh b\xeca"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/pricingTickwhite.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Event/Minigame"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/pricingTickwhite.svg",alt:""})}),(0,n.jsx)("b",{children:"8"})," b\xe0i s\xe1ng t\u1ea1o n\u1ed9i dung"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/pricingTickwhite.svg",alt:""})}),(0,n.jsx)("b",{children:"9"})," thi\u1ebft k\u1ebf poster"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/pricingTickwhite.svg",alt:""})}),"Thi\u1ebft l\u1eadp Chatbot tr\u1ea3 l\u1eddi t\u1ef1 \u0111\u1ed9ng"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/pricingTickwhite.svg",alt:""})}),"Thi\u1ebft l\u1eadp, t\u1ed1i \u01b0u ho\xe1 fanpage"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/pricingTickwhite.svg",alt:""})}),"Thi\u1ebft l\u1eadp Chatbot tr\u1ea3 l\u1eddi t\u1ef1 \u0111\u1ed9ng"]}),(0,n.jsx)("img",{src:"../images/pricingImgdivorange.svg",alt:""}),(0,n.jsxs)("a",{href:"",children:["Mua ngay",(0,n.jsx)("img",{className:j().Footerimg,src:"../images/pricingFooterdiv.svg"})]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Ong non"}),(0,n.jsx)("button",{children:(0,n.jsx)("a",{href:"",children:"9tr999k/th\xe1ng"})}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Thi\u1ebft k\u1ebf logo"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Thi\u1ebft k\u1ebf \u1ea3nh b\xeca"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"12"})," b\xe0i s\xe1ng t\u1ea1o n\u1ed9i dung"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"2"})," Event/Minigame"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"14"})," thi\u1ebft k\u1ebf poster"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp, t\u1ed1i \u01b0u ho\xe1 fanpag"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp Chatbot tr\u1ea3 l\u1eddi t\u1ef1 \u0111\u1ed9ng"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp doanh nghi\u1ec7p tr\xean Google Map"]}),(0,n.jsxs)("a",{href:"",children:["Mua ngay",(0,n.jsx)("img",{className:j().Footerimg,src:"../images/pricingFooterdiv.svg"})]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Ong tr\u01b0\u1edfng th\xe0nh"}),(0,n.jsx)("button",{children:(0,n.jsx)("a",{href:"",children:"14tr999k/th\xe1ng"})}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Thi\u1ebft k\u1ebf logo"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Thi\u1ebft k\u1ebf \u1ea3nh b\xeca"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"16"})," b\xe0i s\xe1ng t\u1ea1o n\u1ed9i dung"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"4"})," Event/Minigame"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"20"})," thi\u1ebft k\u1ebf poster"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp, t\u1ed1i \u01b0u ho\xe1 fanpage"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp Chatbot tr\u1ea3 l\u1eddi t\u1ef1 \u0111\u1ed9ng"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp doanh nghi\u1ec7p tr\xean Google Map"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thu h\xfat l\u01b0\u1ee3t ti\u1ebfp c\u1eadn, ch\u1ea1y ads"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"X\xe2y d\u1ef1ng chi\u1ebfn l\u01b0\u1ee3c qu\u1ea3n tr\u1ecb v\xe0 ph\xe1t tri\u1ec3n fanpag"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp Chatbot tr\u1ea3 l\u1eddi tin nh\u1eafn t\u1ef1 \u0111\u1ed9ng"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Tr\u1ea3 l\u1eddi inbox, t\u01b0 v\u1ea5n s\u1ea3n ph\u1ea9m"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"X\xe2y d\u1ef1ng landing page"]}),(0,n.jsxs)("a",{href:"",children:["Mua ngay",(0,n.jsx)("img",{className:j().Footerimg,src:"../images/pricingFooterdiv.svg"})]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Ong ch\xfaa"}),(0,n.jsx)("button",{children:(0,n.jsx)("a",{href:"",children:"29tr999/th\xe1ng"})}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Thi\u1ebft k\u1ebf logo"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"1"})," Thi\u1ebft k\u1ebf \u1ea3nh b\xeca"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"20"})," b\xe0i s\xe1ng t\u1ea1o n\u1ed9i dung"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"4-8"})," Event/Minigame"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),(0,n.jsx)("b",{children:"28"})," thi\u1ebft k\u1ebf poster"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp, t\u1ed1i \u01b0u ho\xe1 fanpage"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp Chatbot tr\u1ea3 l\u1eddi t\u1ef1 \u0111\u1ed9ng"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp doanh nghi\u1ec7p tr\xean Google Map"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thu h\xfat l\u01b0\u1ee3t ti\u1ebfp c\u1eadn, ch\u1ea1y ads"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"X\xe2y d\u1ef1ng chi\u1ebfn l\u01b0\u1ee3c qu\u1ea3n tr\u1ecb v\xe0 ph\xe1t tri\u1ec3n fanpag"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp Chatbot tr\u1ea3 l\u1eddi tin nh\u1eafn t\u1ef1 \u0111\u1ed9ng"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"Tr\u1ea3 l\u1eddi inbox, t\u01b0 v\u1ea5n s\u1ea3n ph\u1ea9m"]}),(0,n.jsxs)("li",{className:j().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:j().imgvector,src:"../images/Vector.svg",alt:""})}),"X\xe2y d\u1ef1ng landing page"]}),(0,n.jsxs)("a",{href:"",children:["Mua ngay",(0,n.jsx)("img",{className:j().Footerimg,src:"../images/pricingFooterdiv.svg"})]})]})]})]})]})},f=s(8793),N=s.n(f);var _=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:N().divtitle,children:[(0,n.jsx)("h1",{className:N().title,children:"D\u1ecbch v\u1ee5"}),(0,n.jsx)("p",{className:N().imgbg})]}),(0,n.jsxs)("section",{className:N().sectionmain,children:[(0,n.jsxs)("div",{className:N().divone,children:[(0,n.jsx)("h4",{className:N().header,children:"Thi\u1ebft k\u1ebf nh\u1eadn di\u1ec7n th\u01b0\u01a1ng hi\u1ec7u"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"T\u01b0 v\u1ea5n th\u01b0\u01a1ng hi\u1ec7u"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})})," S\xe1ng t\u1ea1o n\u1ed9i dung"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft k\u1ebf th\u01b0\u01a1ng hi\u1ec7u"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft k\u1ebf bao b\xec"]})]}),(0,n.jsx)("button",{className:N().divonebutton,children:"Li\xean h\u1ec7"})]}),(0,n.jsx)("div",{className:N().divtwo,children:(0,n.jsx)("img",{className:N().imgdivtwo,src:"../images/services-img1.svg",alt:""})})]}),(0,n.jsxs)("section",{id:N().sectionreverse,className:N().sectionmain,children:[(0,n.jsxs)("div",{className:N().divone,children:[(0,n.jsx)("h4",{className:N().header,children:"Ph\xe1t tri\u1ec3n ph\u1ea7n m\u1ec1m"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"X\xe2y d\u1ef1ng landing s\xe1ng t\u1ea1o"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})})," X\xe2y d\u1ef1ng website \u0111i\u1ec7n t\u1eed"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"X\xe2y d\u1ef1ng ph\u1ea7n m\u1ec1m qu\u1ea3n l\xed doanh nghi\u1ec7p CRM, LMS, CMS,..."]})]}),(0,n.jsx)("button",{className:N().divonebutton,children:"Li\xean h\u1ec7"})]}),(0,n.jsx)("div",{className:N().divtwo,children:(0,n.jsx)("img",{className:N().imgdivtwo,src:"../images/services-img2.svg",alt:""})})]}),(0,n.jsxs)("section",{className:N().sectionmain,children:[(0,n.jsxs)("div",{className:N().divone,children:[(0,n.jsx)("h4",{className:N().header,children:"Ph\xe1t tri\u1ec3n v\xe0 qu\u1ea3n l\xed Fanpage"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp, t\u1ed1i \u01b0u h\xf3a fanpage"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"S\xe1ng t\u1ea1o n\u1ed9i dung"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"Event / Minigame"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft k\u1ebf poster"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"Thu h\xfat l\u01b0\u1ee3t ti\u1ebfp c\u1eadn, ch\u1ea1y qu\u1ea3ng c\xe1o"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"X\xe2y d\u1ef1ng chi\u1ebfn l\u01b0\u1ee3c qu\u1ea3n tr\u1ecb v\xe0 ph\xe1t tri\u1ec3n fanpage"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp Chatbot tr\u1ea3 l\u1eddi tin nh\u1eafn t\u1ef1 \u0111\u1ed9ng"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"Tr\u1ea3 l\u1eddi inbox, t\u01b0 v\u1ea5n s\u1ea3n ph\u1ea9m"]})]}),(0,n.jsx)("button",{className:N().divonebutton,children:"Li\xean h\u1ec7"})]}),(0,n.jsx)("div",{className:N().divtwo,children:(0,n.jsx)("img",{className:N().imgdivtwo,src:"../images/services-img3.svg",alt:""})})]}),(0,n.jsxs)("section",{id:N().sectionreverse,className:N().sectionmain,children:[(0,n.jsxs)("div",{className:N().divone,children:[(0,n.jsx)("h4",{className:N().header,children:"D\u1ecbch v\u1ee5 kh\xe1c"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"Thi\u1ebft l\u1eadp doanh nghi\u1ec7p tr\xean Google Map"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"H\u1ed7 tr\u1ee3 \u0111\u0103ng k\xfd t\xean mi\u1ec1n"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"D\u1ef1ng, ch\u1ec9nh s\u1eeda video"]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../images/Vector.svg",alt:""})}),"Ch\u1ec9nh s\u1eeda \u1ea3nh, blend m\xe0u, h\u1eadu k\xec,.."]}),(0,n.jsxs)("li",{className:N().divoneli,children:[(0,n.jsx)("i",{children:(0,n.jsx)("img",{className:N().imgvector,src:"../ images/Vector.svg",alt:""})}),"Ch\u1ee5p \u1ea3nh s\u1ea3n ph\u1ea9m"]})]}),(0,n.jsx)("button",{className:N().divonebutton,children:"Li\xean h\u1ec7"})]}),(0,n.jsx)("div",{className:N().divtwo,children:(0,n.jsx)("img",{className:N().imgdivtwo,src:"../images/services-img4.svg",alt:""})})]})]})};var b=function(){return(0,n.jsx)("div",{children:"testimonial"})};function y(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.default,{children:[(0,n.jsx)("title",{children:"New App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(o,{}),(0,n.jsx)(v,{}),(0,n.jsx)(_,{}),(0,n.jsx)(d,{}),(0,n.jsx)(p,{}),(0,n.jsx)(u,{}),(0,n.jsx)(h,{}),(0,n.jsx)(b,{}),(0,n.jsx)(r,{})]})}},3685:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3378)}])},6015:function(e){e.exports={navbar:"TopBar_navbar__2i0hv",logo:"TopBar_logo__2qcq9",trangchu:"TopBar_trangchu__2SHDr",trangchulogo:"TopBar_trangchulogo__3z-92",trangchutext:"TopBar_trangchutext__4UrHW",span:"TopBar_span__3iZ3Y",navitem:"TopBar_navitem__1QRIG"}},681:function(e){e.exports={div:"Header_div__126ji",h1:"Header_h1__1K4aZ",png:"Header_png__6kT7C",text:"Header_text__1tGAd",pic:"Header_pic__3IpTl",quotelow:"Header_quotelow__C3SFS",quotehigh:"Header_quotehigh__23DXQ",btn:"Header_btn__TvMfe",span:"Header_span__37xqC",quotehighdaddy:"Header_quotehighdaddy__lKZwm",allh1:"Header_allh1__27FOv"}},4112:function(e){e.exports={sectionTitle:"Pricing_sectionTitle__1ItGK",title:"Pricing_title__3N-Cm",logoTitle:"Pricing_logoTitle__2a5EP",sectionbody:"Pricing_sectionbody__2CBA4",imgvector:"Pricing_imgvector__12E57",divorange:"Pricing_divorange__1cSxy",Footerimg:"Pricing_Footerimg__RaLmC"}},8793:function(e){e.exports={header:"Services_header__1i-fy",sectionmain:"Services_sectionmain__T6fOY",divtitle:"Services_divtitle__27CUT",imgbg:"Services_imgbg__3GnY9",sectionreverse:"Services_sectionreverse__uswn7",title:"Services_title__LEa0_",divone:"Services_divone__1djbM",imgvector:"Services_imgvector__2udp-",divoneli:"Services_divoneli__U06jh",button:"Services_button__2ZCmB",divonebutton:"Services_divonebutton__1uq1O",divtwo:"Services_divtwo__2FU-4"}},5655:function(e,i){"use strict";i.__esModule=!0,i.imageConfigDefault=i.VALID_LOADERS=void 0;i.VALID_LOADERS=["default","imgix","cloudinary","akamai"];i.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],enableBlurryPlaceholder:!1}},9008:function(e,i,s){e.exports=s(7947)},5675:function(e,i,s){s(6255)}},function(e){e.O(0,[774,888,179],(function(){return i=3685,e(e.s=i);var i}));var i=e.O();_N_E=i}]);