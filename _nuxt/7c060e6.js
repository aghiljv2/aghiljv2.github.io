(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,o){"use strict";var n=o(0);window.onNuxtReady((function(){var e=o(272);n.a.use(e)}))},105:function(e,t,o){"use strict";var n=o(0),r=o(171),c=o.n(r);n.a.use(c.a)},106:function(e,t,o){"use strict";t.a=function(e,t){var o,i,s,n,r,a,c,l=e.app,d=!1;t("gaPermissions",(function(e,t){return d=t,ga("create",e,"auto"),ga("set","anonymizeIp",!0),ga("set","page",o.fullPath),void ga("send","pageview")})),i=window,s=document,n="script",r="ga",i.GoogleAnalyticsObject=r,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(n),c=s.getElementsByTagName(n)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",c.parentNode.insertBefore(a,c),l.router.afterEach((function(e,t){o=e,d&&(ga("set","page",e.fullPath),ga("send","pageview"))}))}},141:function(e,t,o){var content=o(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("56b15182",content,!0,{sourceMap:!1})},142:function(e,t,o){var content=o(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("1e73de06",content,!0,{sourceMap:!1})},143:function(e,t,o){var content=o(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("487c20de",content,!0,{sourceMap:!1})},144:function(e,t,o){var content=o(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("f73b19b0",content,!0,{sourceMap:!1})},145:function(e,t,o){var content=o(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("59b8dc7a",content,!0,{sourceMap:!1})},146:function(e,t,o){var content=o(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("3d830ad8",content,!0,{sourceMap:!1})},147:function(e,t,o){var content=o(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("9e5e05cc",content,!0,{sourceMap:!1})},148:function(e,t,o){var content=o(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("03a3df92",content,!0,{sourceMap:!1})},149:function(e,t,o){var content=o(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("17023f45",content,!0,{sourceMap:!1})},174:function(e,t,o){"use strict";o(62),o(242);var n={data:function(){return{themeName:"Dark",navAction:!1}},methods:{sendElementDown:function(){document.getElementById("introAnimComp").style.display="none"},changeBG:function(e){this.themeName=e},mouseMoveEvent:function(e){var t=document.getElementById("mainContent").clientWidth/2,o=(document.getElementById("mainContent").clientHeight/2-e.clientY)/100,n=(t-e.clientX)/200;document.getElementById("currentActiveRoute").style.transform="translateY("+o+"%)",null!=document.getElementById("homeTitle1")&&(document.getElementById("homeTitle1").style.transform="translateX("+n+"%)",document.getElementById("homeTitle2").style.transform="translateX("+-n+"%)")}},mounted:function(){}},r=(o(243),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{on:{mousemove:function(t){return e.mouseMoveEvent(t)}}},[o("Particle",{staticClass:"particleClass",attrs:{themeName:e.themeName}}),e._v(" "),o("ProjectHeader",{staticClass:"headerClassMain",on:{changeBG:function(t){return e.changeBG(t)}}}),e._v(" "),o("PhoneNavigator",{on:{changeBG:function(t){return e.changeBG(t)}}}),e._v(" "),o("SocialLinks",{attrs:{id:"socialLinks"}}),e._v(" "),o("Routes",{attrs:{id:"sideRoutes"},on:{changeBG:function(t){return e.changeBG(t)}}}),e._v(" "),o("main",[o("nuxt",{attrs:{id:"mainContent"}})],1),e._v(" "),o("PhoneNavButton",{staticClass:"navButton",attrs:{navAction:e.navAction}}),e._v(" "),o("UserAnalytics")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Particle:o(273).default,ProjectHeader:o(274).default,PhoneNavigator:o(275).default,SocialLinks:o(276).default,Routes:o(277).default,PhoneNavButton:o(278).default,UserAnalytics:o(279).default})},175:function(e,t,o){"use strict";o.r(t);o(62);var n={methods:{changedGAPermission:function(){this.$emit("currentGAPermission",document.getElementById("gaPermission").checked)}}},r=(o(257),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"cookieDesc"}},[o("div",{staticClass:"darkOverlay"}),e._v(" "),o("div",{staticClass:"permission"},[e._m(0),e._v(" "),e._m(1),e._v(" "),o("div",{staticClass:"rowPermission"},[o("input",{attrs:{type:"checkbox",id:"gaPermission",name:"gaPermission",value:"gaPermission"},on:{change:e.changedGAPermission}}),e._v(" "),e._m(2),e._v(" "),o("div"),e._v(" "),o("p",[e._v("The site uses GA to understand the readers better.")])])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bannerHeader"},[o("h3",[e._v("Preferences")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"rowPermission"},[o("input",{attrs:{type:"checkbox",id:"necessary",name:"necessary",value:"necessary",disabled:"true",checked:""}}),e._v(" "),o("label",{attrs:{for:"necessary"}},[o("b",[e._v("Necessary")])]),e._v(" "),o("div"),e._v(" "),o("p",[e._v("\n        These can't be turned off as they are used to ensure the smooth\n        execution of this site.\n      ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{attrs:{for:"gaPermission"}},[o("b",[e._v("Google Analytics")])])}],!1,null,"027e3b2c",null);t.default=component.exports},180:function(e,t,o){o(181),e.exports=o(182)},243:function(e,t,o){"use strict";o(141)},244:function(e,t,o){var n=o(12)(!1);n.push([e.i,':root{--color-primary:#fff;--background-color-primary:#000;--background-color-primary-code:rgba(30,30,30,0.5);--header-bg-color:transparent;--link-text-color:#727272;--active-link-text-color:#c8c8c8;--active-link-background-color:transparent;--particle-color:#fff;--particle-bg-color:#000;--intro-card-bg:rgba(25,25,25,0.5);--intro-card-pic-border-color:#323232;--intro-card-button-holder-color:rgba(50,50,50,0);--intro-card-shadow:rgba(0,0,0,0.2);--invert-value:invert(0);--start-opacity:0}html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;transition:.5s;background:#000;background:var(--background-color-primary)}*{overflow:hidden;scrollbar-width:none;border:none}*,:after,:before{box-sizing:border-box;margin:0}hr{border:none;height:1px;opacity:.15;background-color:#fff;background-color:var(--color-primary)}a:active,a:focus{outline:0;border:none;-moz-outline-style:none}.container{position:absolute;margin:0 auto 0 5%;min-height:100%;width:80%;flex:100%;z-index:3;overflow:auto}.container,.headerClassMain{color:#fff;color:var(--color-primary)}.headerClassMain{position:fixed;top:0;height:10%;width:100%;z-index:5;text-align:left}.particleClass{position:fixed;height:100%;width:100%;z-index:2}.navButton{position:fixed;bottom:1.5%;z-index:11;right:3%}@media only screen and (max-width:1025px){.container{top:10%;min-height:80%;width:80%}}@media only screen and (max-width:600px){.container{width:90%}#sideRoutes{display:none}}@media only screen and (min-width:600px){.navButton{display:none}}.fade-enter-active{-webkit-animation:fade-in .5s;animation:fade-in .5s}.fade-leave-active{-webkit-animation:fade-out .5s;animation:fade-out .5s}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}',""]),e.exports=n},245:function(e,t,o){"use strict";o(142)},246:function(e,t,o){var n=o(12)(!1);n.push([e.i,"#particles-js[data-v-3c6e9a3a]{background:var(--particle-bg-color);height:100%;width:100%}",""]),e.exports=n},247:function(e,t,o){"use strict";o(143)},248:function(e,t,o){var n=o(12)(!1);n.push([e.i,".headerClass[data-v-31da8fd7]{padding:1% 0 1% 5%;transition:.5s;display:flex;align-items:center}.title[data-v-31da8fd7]{width:30%;font-size:4vw;transition:.5s;color:var(--active-link-text-color)}@media only screen and (max-width:1025px){.headerClass[data-v-31da8fd7]{display:flex}.title[data-v-31da8fd7]{width:100%;font-size:12vw}}@media only screen and (min-width:1025px){.headerClass[data-v-31da8fd7],.title[data-v-31da8fd7]{display:none}}",""]),e.exports=n},249:function(e,t,o){"use strict";o(144)},250:function(e,t,o){var n=o(12)(!1);n.push([e.i,".phoneNavClass[data-v-e0b8e7ae]{position:absolute;bottom:-120%;z-index:10;flex-direction:column;justify-content:space-evenly;background:var(--background-color-primary);transition:.5s}.indRoute[data-v-e0b8e7ae],.phoneNavClass[data-v-e0b8e7ae]{width:100%;height:100%;display:flex;align-items:center}.indRoute[data-v-e0b8e7ae]{color:var(--link-text-color);text-decoration:none;margin:1%;justify-content:center}.nuxt-link-active[data-v-e0b8e7ae]{color:var(--active-link-text-color);font-weight:bolder}@media only screen and (min-width:600px){.phoneNavClass[data-v-e0b8e7ae]{display:none}}",""]),e.exports=n},251:function(e,t,o){"use strict";o(145)},252:function(e,t,o){var n=o(12)(!1);n.push([e.i,".socialClass[data-v-07c0be43]{position:fixed;display:flex;align-items:center;height:100%;width:5%;z-index:4}.computerScreen[data-v-07c0be43]{position:absolute;left:-30%}.computerScreen[data-v-07c0be43],.phoneScreen[data-v-07c0be43]{font-size:.5vw;color:#fff;transition:.5s;width:100%}.phoneScreen[data-v-07c0be43]{position:relative;bottom:.5%;z-index:1}ul[data-v-07c0be43]{list-style-type:none;padding:0;text-align:left;width:100%}li[data-v-07c0be43]{padding:0 5% 0 15%;width:75%;transition:.25s}.socialLinkImg[data-v-07c0be43]{height:100%;width:100%;display:flex}@media only screen and (max-width:600px){.computerScreen[data-v-07c0be43]{display:none}.socialClass[data-v-07c0be43]{align-items:flex-end;width:100%;bottom:1%;height:10vh}ul[data-v-07c0be43]{display:flex;justify-content:center;height:10vw}li[data-v-07c0be43]{padding:0;width:10vw}.socialLinkImg[data-v-07c0be43]{height:10vw;width:10vw}}@media only screen and (min-width:600px){.phoneScreen[data-v-07c0be43]{display:none}li[data-v-07c0be43]:hover{transform:translateX(25%)}}",""]),e.exports=n},253:function(e,t,o){"use strict";o(146)},254:function(e,t,o){var n=o(12)(!1);n.push([e.i,".routeHolder[data-v-b38f6b84]{width:5%;right:0;flex-direction:column;border-left:2px solid var(--color-primary)}.currentRouteHolder[data-v-b38f6b84],.routeHolder[data-v-b38f6b84]{position:absolute;height:100%;display:flex;z-index:5;justify-content:space-evenly;align-items:center}.currentRouteHolder[data-v-b38f6b84]{width:8%;right:5%;color:var(--color-primary)}.indRoute[data-v-b38f6b84]{color:var(--link-text-color);text-decoration:none;margin:1%;height:100%;width:200%;font-size:1vw}.indRoute[data-v-b38f6b84],.routeCurrentText[data-v-b38f6b84]{transform:rotate(90deg);display:flex;justify-content:center;align-items:center}.routeCurrentText[data-v-b38f6b84]{font-size:8vw;width:80vw;height:8vw;position:fixed;text-align:center}.nuxt-link-active[data-v-b38f6b84]{color:var(--active-link-text-color);font-weight:bolder}",""]),e.exports=n},255:function(e,t,o){"use strict";o(147)},256:function(e,t,o){var n=o(12)(!1);n.push([e.i,"#nav-icon[data-v-060be974]{width:12%;height:10vw;transform:rotate(0deg);transition:.5s ease-in-out;cursor:pointer}#nav-icon span[data-v-060be974]{display:block;position:absolute;height:10%;width:100%;background:var(--color-primary);opacity:1;left:0;transform:rotate(0deg);transition:.25s ease-in-out}#nav-icon span[data-v-060be974]:first-child{top:0}#nav-icon span[data-v-060be974]:nth-child(2),#nav-icon span[data-v-060be974]:nth-child(3){top:45%}#nav-icon span[data-v-060be974]:nth-child(4){bottom:0}#nav-icon.open span[data-v-060be974]:first-child{top:30%;width:0;left:50%}#nav-icon.open span[data-v-060be974]:nth-child(2){transform:rotate(45deg)}#nav-icon.open span[data-v-060be974]:nth-child(3){transform:rotate(-45deg)}#nav-icon.open span[data-v-060be974]:nth-child(4){top:30%;width:0;left:50%}",""]),e.exports=n},257:function(e,t,o){"use strict";o(148)},258:function(e,t,o){var n=o(12)(!1);n.push([e.i,"#cookieDesc[data-v-027e3b2c]{position:absolute;height:100%;width:100%;display:none;justify-content:center;bottom:0;z-index:100;transition:.5s;opacity:0;align-items:center}.darkOverlay[data-v-027e3b2c]{position:fixed;height:100%;width:100%;top:0;left:0;background:#000;opacity:.8}.permission[data-v-027e3b2c]{position:absolute;width:30%;height:40%;color:var(--background-color-primary);background:var(--color-primary);z-index:100;display:grid;padding:2.5%;grid-template-rows:1fr 1fr}.bannerHeader[data-v-027e3b2c]{position:absolute;padding:2.5% 0 0 5%}.rowPermission[data-v-027e3b2c]{display:grid;grid-template-columns:1fr 4fr;width:100%;align-items:center}@media only screen and (max-width:600px){.permission[data-v-027e3b2c]{height:40%;width:90%;padding:15% 10% 10%}}",""]),e.exports=n},259:function(e,t,o){"use strict";o(149)},260:function(e,t,o){var n=o(12)(!1);n.push([e.i,"#permissionModule[data-v-3c514a24]{position:absolute;height:15%;display:flex;bottom:0;transition:.5s;opacity:0}#permissionModule[data-v-3c514a24],.permission[data-v-3c514a24]{width:100%;justify-content:center;z-index:100}.permission[data-v-3c514a24]{height:100%;color:var(--background-color-primary);background:var(--color-primary);display:grid;padding:0 1%;grid-template-columns:2fr 1fr}.bannerHeader[data-v-3c514a24]{position:absolute;padding:.5% 1% 0}.allowButton[data-v-3c514a24],.disAllowButton[data-v-3c514a24]{width:30%;display:flex;justify-content:center;align-items:center;cursor:pointer;font-size:1vw;text-align:center}.allowButton[data-v-3c514a24]{outline:none;background:var(--background-color-primary);font-weight:700;height:30%;color:var(--color-primary)}.disAllowButton[data-v-3c514a24]{outline:none;background:var(--color-primary);color:var(--link-text-color);font-size:.7vw;height:20%;text-decoration:underline}.permText[data-v-3c514a24]{text-align:center}.permButtons[data-v-3c514a24],.permText[data-v-3c514a24]{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.permButtons[data-v-3c514a24]{flex-direction:column}.indRoute[data-v-3c514a24]{color:var(--link-text-color);text-decoration:none}.bannerInvoker[data-v-3c514a24]{position:fixed;display:flex;bottom:.5vw;left:.5vw;filter:var(--invert-value);width:1.75vw;height:1.75vw;z-index:10}.cookieImage[data-v-3c514a24]{width:1.75vw;height:1.75vw;-o-object-fit:contain;object-fit:contain}@media only screen and (max-width:600px){#permissionModule[data-v-3c514a24]{height:25%}.permission[data-v-3c514a24]{width:100%;grid-template-columns:auto;grid-template-rows:1fr 2fr 2fr}.bannerHeader[data-v-3c514a24]{position:relative}.allowButton[data-v-3c514a24]{height:85%;font-size:3.5vw}.disAllowButton[data-v-3c514a24]{height:55%;font-size:3vw}.allowButton[data-v-3c514a24]:after,.disAllowButton[data-v-3c514a24]:after{right:-10vw}.bannerInvoker[data-v-3c514a24]{bottom:3vw;left:2vw}.bannerInvoker[data-v-3c514a24],.cookieImage[data-v-3c514a24]{width:8vw;height:8vw}}",""]),e.exports=n},261:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return n})),o.d(t,"mutations",(function(){return r}));var n=function(){return{blogs:[{_id:"5e95ecc51c9d4400008c50bd",name:"E2E Testing Benefits",titleImage:"060420/e2e",briefdesc:"An article to inspire you to perform End to End Testing in application"}]}},r={add:function(e,data){e.blogs=data}}},262:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return n})),o.d(t,"mutations",(function(){return r}));var n=function(){return{pageTitle:""}},r={set:function(e,data){e.pageTitle=data}}},263:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return n})),o.d(t,"mutations",(function(){return r}));var n=function(){return{portfolios:[{_id:"5e9311b61c9d4400003cf285",name:"Feel",titleImage:"feel",briefdesc:"The application assists the user to determine a car model suited for them according to their lifestyle."}]}},r={add:function(e,data){e.portfolios=data}}},273:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{particleColor:"#808080",particleBg:"#000000",darkMode:!0}},props:["themeName"],watch:{themeName:function(){"Light"==this.$props.themeName?(this.particleColor="#808080",this.particleBg="#ffffff"):"Dark"==this.$props.themeName&&(this.particleColor="#808080",this.particleBg="#000000"),this.applyThemeChanges()}},mounted:function(){this.initParticles()},methods:{initParticles:function(){var e=this;window.onNuxtReady((function(){e.drawBG()}))},drawBG:function(){window.particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:700}},color:{value:this.particleColor},shape:{type:"circle",stroke:{width:4,color:"#fff"}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:this.particleColor,opacity:.4,width:1},move:{enable:!0,speed:5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),this.applyThemeChanges()},applyThemeChanges:function(){pJSDom[0].pJS.particles.color.value=this.particleColor,pJSDom[0].pJS.particles.shape.stroke.color=this.particleBg,pJSDom[0].pJS.particles.line_linked.color=this.particleColor,pJSDom[0].pJS.fn.particlesRefresh()}}},r=(o(245),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"particles"},[t("div",{attrs:{id:"particles-js"}})])}],!1,null,"3c6e9a3a",null);t.default=component.exports},274:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{themeName:"Light Theme"}},computed:{pageTitle:function(){return this.$store.state.pageTitle.pageTitle}}},r=(o(247),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"headerClass"},[o("div",{staticClass:"title"},[e._v(e._s(e.pageTitle))])])}),[],!1,null,"31da8fd7",null);t.default=component.exports},275:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{themeName:"Light Theme"}},methods:{toggleNav:function(){document.getElementById("phoneNavID").style.bottom="-120%",document.getElementById("nav-icon").classList.toggle("open")},switchTheme:function(){var e=document.documentElement;"Light Theme"==this.themeName?(e.style.setProperty("--background-color-primary","white"),e.style.setProperty("--color-primary","black"),e.style.setProperty("--header-bg-color","rgba(0, 0, 0, 0.1)"),e.style.setProperty("--link-text-color","rgb(114, 114, 114)"),e.style.setProperty("--active-link-text-color","rgba(0,0,0,1)"),e.style.setProperty("--active-link-background-color","white"),e.style.setProperty("--particle-bg-color","white"),e.style.setProperty("--intro-card-bg","rgba(225, 225, 225, 0.5)"),e.style.setProperty("--intro-card-pic-border-color","rgba(205, 205, 205, 1)"),e.style.setProperty("--intro-card-button-holder-color","rgba(205, 205, 205, 0)"),e.style.setProperty("--intro-card-shadow","rgba(0, 0, 0, 0.2)"),e.style.setProperty("--invert-value","invert(1)"),this.$emit("changeBG","Light"),this.themeName="Dark Theme",this.saveCookies("aghiljose_com_selected_theme","light")):(e.style.setProperty("--background-color-primary","black"),e.style.setProperty("--color-primary","white"),e.style.setProperty("--header-bg-color"," rgba(0, 0, 0, 0.6)"),e.style.setProperty("--link-text-color","rgb(114, 114, 114)"),e.style.setProperty("--active-link-text-color","rgba(255, 255, 255, 1)"),e.style.setProperty("--active-link-background-color","white"),e.style.setProperty("--particle-bg-color","black"),e.style.setProperty("--intro-card-bg","rgba(25, 25, 25, 0.5)"),e.style.setProperty("--intro-card-pic-border-color","rgba(50, 50, 50, 1)"),e.style.setProperty("--intro-card-button-holder-color","rgba(50, 50, 50, 0)"),e.style.setProperty("--intro-card-shadow","rgba(0, 0, 0, 0.2)"),e.style.setProperty("--invert-value","invert(0)"),this.$emit("changeBG","Dark"),this.themeName="Light Theme",this.saveCookies("aghiljose_com_selected_theme","dark"))},saveCookies:function(e,t){this.$cookies.set(e,t,{path:"/",maxAge:604800})},loadSavedTheme:function(){var e=this,t=this.$cookies.get("aghiljose_com_selected_theme");"light"==t?this.themeName="Light Theme":"dark"==t&&(this.themeName="Dark Theme"),null!=t&&setTimeout((function(){e.switchTheme()}),0)}},beforeMount:function(){this.loadSavedTheme()}},r=(o(249),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"phoneNavClass",attrs:{id:"phoneNavID"},on:{click:e.toggleNav}},[o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/",exact:""}},[e._v("HOME")]),e._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/portfolio"}},[e._v("PORTFOLIO")]),e._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/blog"}},[e._v("BLOG")]),e._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/about"}},[e._v("ABOUT")]),e._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/contact"}},[e._v("CONTACT")]),e._v(" "),o("div",{staticClass:"indRoute",on:{click:e.switchTheme}},[e._v(e._s(e.themeName))])],1)}),[],!1,null,"e0b8e7ae",null);t.default=component.exports},276:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{sets:[{format:"png"},{format:"webp"}]}}},r=(o(251),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"socialClass"},[o("div",{staticClass:"computerScreen"},[o("ul",[o("li",{staticStyle:{background:"#000000"}},[o("a",{attrs:{href:"https://medium.com/@aghiljv",target:"_blank",rel:"noopener noreferrer"}},[o("picture",[o("source",{attrs:{srcset:"/img/common/medium.webp",type:"image/webp"}}),e._v(" "),o("img",{staticClass:"socialLinkImg",attrs:{src:"/img/common/medium.png",alt:"Medium"}})])])]),e._v(" "),o("li",{staticStyle:{background:"#0077b7"}},[o("a",{attrs:{href:"https://www.linkedin.com/in/aghil-jose/",target:"_blank",rel:"noopener noreferrer"}},[o("picture",[o("source",{attrs:{srcset:"/img/common/linkedin.webp",type:"image/webp"}}),e._v(" "),o("img",{staticClass:"socialLinkImg",attrs:{src:"/img/common/linkedin.png",alt:"LinkedIn"}})])])]),e._v(" "),o("li",{staticStyle:{background:"#2c2c2c"}},[o("a",{attrs:{href:"https://github.com/aghiljv",target:"_blank",rel:"noopener noreferrer"}},[o("picture",[o("source",{attrs:{srcset:"/img/common/github.webp",type:"image/webp"}}),e._v(" "),o("img",{staticClass:"socialLinkImg",attrs:{src:"/img/common/github.png",alt:"GitHub"}})])])])])]),e._v(" "),o("div",{staticClass:"phoneScreen"},[o("ul",[o("li",{staticStyle:{background:"#000000"}},[o("a",{attrs:{href:"https://medium.com/@aghiljv",target:"_blank",rel:"noopener noreferrer"}},[o("picture",[o("source",{attrs:{srcset:"/img/common/mediump.webp",type:"image/webp"}}),e._v(" "),o("img",{staticClass:"socialLinkImg",attrs:{src:"/img/common/mediump.png",alt:"Medium"}})])])]),e._v(" "),o("li",{staticStyle:{background:"#0077b7"}},[o("a",{attrs:{href:"https://www.linkedin.com/in/aghil-jose/",target:"_blank",rel:"noopener noreferrer"}},[o("picture",[o("source",{attrs:{srcset:"/img/common/linkedinp.webp",type:"image/webp"}}),e._v(" "),o("img",{staticClass:"socialLinkImg",attrs:{src:"/img/common/linkedinp.png",alt:"LinkedIn"}})])])]),e._v(" "),o("li",{staticStyle:{background:"#2c2c2c"}},[o("a",{attrs:{href:"https://github.com/aghiljv",target:"_blank",rel:"noopener noreferrer"}},[o("picture",[o("source",{attrs:{srcset:"/img/common/githubp.webp",type:"image/webp"}}),e._v(" "),o("img",{staticClass:"socialLinkImg",attrs:{src:"/img/common/githubp.png",alt:"GitHub"}})])])])])])])}],!1,null,"07c0be43",null);t.default=component.exports},277:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{themeName:"Light Theme"}},computed:{pageTitle:function(){return this.$store.state.pageTitle.pageTitle}},methods:{switchTheme:function(){var e=document.documentElement;"Light Theme"==this.themeName?(e.style.setProperty("--background-color-primary","white"),e.style.setProperty("--color-primary","black"),e.style.setProperty("--header-bg-color","rgba(0, 0, 0, 0)"),e.style.setProperty("--link-text-color","rgb(114, 114, 114)"),e.style.setProperty("--active-link-text-color","rgba(0,0,0,1)"),e.style.setProperty("--active-link-background-color","white"),e.style.setProperty("--particle-bg-color","white"),e.style.setProperty("--intro-card-bg","rgba(225, 225, 225, 0.5)"),e.style.setProperty("--intro-card-pic-border-color","rgba(205, 205, 205, 1)"),e.style.setProperty("--intro-card-button-holder-color","rgba(205, 205, 205, 0)"),e.style.setProperty("--intro-card-shadow","rgba(0, 0, 0, 0.2)"),e.style.setProperty("--invert-value","invert(1)"),this.$emit("changeBG","Light"),this.themeName="Dark Theme",this.saveCookies("aghiljose_com_selected_theme","light")):(e.style.setProperty("--background-color-primary","black"),e.style.setProperty("--color-primary","white"),e.style.setProperty("--header-bg-color"," rgba(0, 0, 0, 0)"),e.style.setProperty("--link-text-color","rgb(114, 114, 114)"),e.style.setProperty("--active-link-text-color","rgba(255, 255, 255, 1)"),e.style.setProperty("--active-link-background-color","white"),e.style.setProperty("--particle-bg-color","black"),e.style.setProperty("--intro-card-bg","rgba(25, 25, 25, 0.5)"),e.style.setProperty("--intro-card-pic-border-color","rgba(50, 50, 50, 1)"),e.style.setProperty("--intro-card-button-holder-color","rgba(50, 50, 50, 0)"),e.style.setProperty("--intro-card-shadow","rgba(0, 0, 0, 0.2)"),e.style.setProperty("--invert-value","invert(0)"),this.$emit("changeBG","Dark"),this.themeName="Light Theme",this.saveCookies("aghiljose_com_selected_theme","dark"))},saveCookies:function(e,t){this.$cookies.set(e,t,{path:"/",maxAge:604800})},loadSavedTheme:function(){var e=this,t=this.$cookies.get("aghiljose_com_selected_theme");"light"==t?this.themeName="Light Theme":"dark"==t&&(this.themeName="Dark Theme"),null!=t&&setTimeout((function(){e.switchTheme()}),0)}},beforeMount:function(){this.loadSavedTheme()}},r=(o(253),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"mainRoutes"}},[o("div",{staticClass:"routeHolder"},[o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/",exact:""}},[e._v("HOME")]),e._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/portfolio"}},[e._v("PORTFOLIO")]),e._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/blog"}},[e._v("BLOG")]),e._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/about"}},[e._v("ABOUT")]),e._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/contact"}},[e._v("CONTACT")]),e._v(" "),o("div",{staticClass:"indRoute",on:{click:e.switchTheme}},[e._v(e._s(e.themeName))])],1),e._v(" "),o("div",{staticClass:"currentRouteHolder",attrs:{id:"currentActiveRoute"}},[o("div",{staticClass:"routeCurrentText"},[e._v(e._s(e.pageTitle))])])])}),[],!1,null,"b38f6b84",null);t.default=component.exports},278:function(e,t,o){"use strict";o.r(t);var n={methods:{bringUpPhoneNav:function(){document.getElementById("nav-icon").classList.toggle("open"),"0%"!=document.getElementById("phoneNavID").style.bottom?document.getElementById("phoneNavID").style.bottom="0%":document.getElementById("phoneNavID").style.bottom="-120%"}}},r=(o(255),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"nav-icon"},on:{click:e.bringUpPhoneNav}},[o("span"),e._v(" "),o("span"),e._v(" "),o("span"),e._v(" "),o("span")])}),[],!1,null,"060be974",null);t.default=component.exports},279:function(e,t,o){"use strict";o.r(t);var n=o(2),r=(o(23),o(62)),c={data:function(){return{gAPermissionState:null}},components:{CookieBanner:o(175).default},methods:{allowGAPermission:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.saveCookies("aghiljose_com_previous_loaded_domain_150322","loaded"),!document.getElementById("gaPermission").checked&&!e){o.next=12;break}return document.getElementById("gaPermission").checked=!0,t.saveCookies("aghiljose_com_previous_loaded_ga","loaded"),t.closeBanner(),o.t0=t,o.next=8,r.a.getId();case 8:o.t1=o.sent,o.t0.$gaPermissions.call(o.t0,o.t1,!0),o.next=15;break;case 12:"unloaded"!=t.$cookies.get("aghiljose_com_previous_loaded_ga")&&t.saveCookies("aghiljose_com_previous_loaded_ga","unloaded"),t.closeBanner(),t.$gaPermissions("",!1);case 15:case"end":return o.stop()}}),o)})))()},closeBanner:function(){var e=this;document.getElementById("permissionModule").style.opacity="0",document.getElementById("cookieDesc").style.opacity="0",setTimeout((function(){return e.closeAssist()}),1e3)},closeAssist:function(){document.getElementById("permissionModule").style.display="none",document.getElementById("cookieDesc").style.display="none"},saveCookies:function(e,t){this.$cookies.set(e,t,{path:"/",maxAge:604800})},showBanner:function(){var e=this;document.getElementById("permissionModule").style.display="flex",setTimeout((function(){return e.showBannerAssist()}),1)},showBannerAssist:function(){document.getElementById("permissionModule").style.opacity="1"},togglePreferences:function(){var e=this;0==document.getElementById("cookieDesc").style.opacity?(document.getElementById("cookieDesc").style.display="flex",setTimeout((function(){return e.showPermissionNotifications()}),1)):(document.getElementById("cookieDesc").style.opacity=0,setTimeout((function(){return e.hidePermissionNotifications()}),500))},showPermissionNotifications:function(){document.getElementById("cookieDesc").style.opacity=1},hidePermissionNotifications:function(){document.getElementById("cookieDesc").style.display="none"},changeGAState:function(e){this.gAPermissionState=e}},computed:{checkPermissionText:function(){return 0==this.gAPermissionState?"Allow":"Allow All"}},mounted:function(){"loaded"==this.$cookies.get("aghiljose_com_previous_loaded_domain_150322")?"loaded"==this.$cookies.get("aghiljose_com_previous_loaded_ga")?(document.getElementById("gaPermission").checked=!0,this.allowGAPermission(!0)):this.allowGAPermission(!1):document.getElementById("permissionModule").style.opacity="1"}},l=(o(259),o(3)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("CookieBanner",{on:{currentGAPermission:function(t){return e.changeGAState(t)}}}),e._v(" "),o("div",{staticClass:"bannerInvoker",on:{click:e.showBanner}},[e._m(0)]),e._v(" "),o("div",{staticClass:"permissionContainer",attrs:{id:"permissionModule"}},[o("div",{staticClass:"permission"},[e._m(1),e._v(" "),o("div",{staticClass:"permText"},[o("div",[e._v("\n          Allow this site to use google-analytics for user analysis and\n          on-page improvements. Please review the\n          "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/privacy-policy"}},[e._v("Privacy Policy")]),e._v("\n          and\n          "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/terms-and-conditions"}},[e._v("Terms & Conditions")])],1)]),e._v(" "),o("div",{staticClass:"permButtons"},[o("div",{staticClass:"allowButton",on:{click:function(t){return e.allowGAPermission("Allow"!=e.checkPermissionText)}}},[e._v("\n          "+e._s(e.checkPermissionText)+"\n        ")]),e._v(" "),o("div",{staticClass:"disAllowButton",on:{click:e.togglePreferences}},[e._v("\n          Preferences\n        ")])])])])],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("picture",[o("source",{attrs:{srcset:"/img/common/cookie.webp",type:"image/webp"}}),e._v(" "),o("img",{staticClass:"cookieImage",attrs:{src:"/img/common/cookie.png",alt:"Cookies"}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bannerHeader"},[o("h3",[e._v("This site uses cookies")])])}],!1,null,"3c514a24",null);t.default=component.exports},62:function(e,t,o){"use strict";var n=o(11),r=o(51),c=o(52),l=(o(6),o(35),o(31),o(18),o(26),o(44),o(45),o(16)),d=o.n(l);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v="https://aghiljv.herokuapp.com/api/posts/",f="https://aghiljv.herokuapp.com/api/blogs/",y=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,null,[{key:"getId",value:function(){return new Promise((function(e,t){try{d.a.get("https://aghiljv.herokuapp.com/ga_id").then((function(t){var data=t.data;e(data)}))}catch(e){t(e)}}))}},{key:"getPortfolios",value:function(){return new Promise((function(e,t){try{d.a.get(v).then((function(t){var data=t.data;e(data.map((function(e){return h({},e)})))}))}catch(e){t(e)}}))}},{key:"getPortfolio",value:function(e){return new Promise((function(t,o){try{d.a.get("".concat(v).concat(e)).then((function(e){var data=e.data;t(data.map((function(e){return h({},e)})))}))}catch(e){o(e)}}))}},{key:"getBlogs",value:function(){return new Promise((function(e,t){try{d.a.get(f).then((function(t){var o=t.data;o.map((function(e){return h({},e)})),e(o.reverse())}))}catch(e){t(e)}}))}},{key:"getBlog",value:function(e){return new Promise((function(t,o){try{d.a.get("".concat(f).concat(e)).then((function(e){var o=e.data;t(o.map((function(e){return h({},e)})))}))}catch(e){o(e)}}))}},{key:"insertComment",value:function(e,t,o,n,r){return d.a.post("".concat(f).concat(e),{email:t,name:o,comment:n,date:r})}},{key:"deletePost",value:function(e){return d.a.delete("".concat(v).concat(e))}}]),e}();t.a=y}},[[180,24,1,25]]]);