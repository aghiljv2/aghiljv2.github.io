(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{261:function(t,e,o){var content=o(285);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("6022129c",content,!0,{sourceMap:!1})},262:function(t,e,o){var content=o(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("e7cb346e",content,!0,{sourceMap:!1})},263:function(t,e,o){var content=o(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("728ab825",content,!0,{sourceMap:!1})},270:function(t,e,o){"use strict";o.r(e);var n={props:["portfolioName","portfolioImage","portfolioBrief","index","activePortIndex"]},r=(o(284),o(3)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"portfolioHolder",attrs:{id:"portfolioDisplay"}},[e("div",{staticClass:"portfolioItem",style:[this.index==this.activePortIndex?{opacity:"1","z-index":"10"}:{opacity:"0"}],attrs:{id:"portfolioItem"+this.index}},[e("div",{staticClass:"portImageHolder"},[e("img",{staticClass:"portImage",attrs:{src:"/img/portfolio/"+this.portfolioImage+"hover.jpg",alt:"portfolioImage"}})])])])}),[],!1,null,"791461a2",null);e.default=component.exports},271:function(t,e,o){"use strict";o.r(e);var n={props:["portfolioName","portfolioImage","index"],methods:{activePort:function(t){this.$emit("setActiveOpacity",t)},mouseMove:function(t){this.$emit("setDetPos",t)}}},r=(o(286),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"portfolioNavHolder",attrs:{id:"portNav"+t.index,to:"/portfolio/"+t.portfolioName}},[o("div",{staticClass:"portImageHolder",on:{mousemove:function(e){return t.mouseMove(e)},mouseover:function(e){return t.activePort(t.index)},mouseleave:function(e){return t.activePort(-1)}}},[t._v("\n\t\t"+t._s(t.portfolioName)+"\n\t")])])}),[],!1,null,"c7608f5c",null);e.default=component.exports},284:function(t,e,o){"use strict";var n=o(261);o.n(n).a},285:function(t,e,o){(e=o(14)(!1)).push([t.i,".portfolioHolder[data-v-791461a2]{height:100%;display:inline-flex}.portfolioHolder[data-v-791461a2],.portImageHolder[data-v-791461a2]{align-items:center;justify-content:center;width:100%}.portImageHolder[data-v-791461a2]{height:60%;display:flex;opacity:1;transition:.5s}.portImage[data-v-791461a2]{width:100%;height:100%;transition:.5s;-o-object-fit:contain;object-fit:contain}.portfolioItem[data-v-791461a2]{position:absolute;top:10%;left:5%;height:80%;width:50%;padding:1%;text-align:center;display:flex;flex-direction:column;justify-content:space-around;align-items:center;z-index:-1}.portName[data-v-791461a2]{text-align:left;font-size:5vw;width:100%;justify-content:center;display:flex}.portfolioDesc[data-v-791461a2],.portName[data-v-791461a2],.portNumber[data-v-791461a2]{transition:.5s}.portNumber[data-v-791461a2]{font-size:1vw;width:100%;display:flex;justify-content:center;align-items:center}@media only screen and (max-width:600px){.portfolioHolder[data-v-791461a2]{flex-direction:column;height:60%;padding:5% 0}.portfolioItem[data-v-791461a2],.portImageHolder[data-v-791461a2]{width:100%}}",""]),t.exports=e},286:function(t,e,o){"use strict";var n=o(262);o.n(n).a},287:function(t,e,o){(e=o(14)(!1)).push([t.i,".portfolioNavHolder[data-v-c7608f5c]{display:inline-flex;text-decoration:none}.portfolioNavHolder[data-v-c7608f5c],.portImageHolder[data-v-c7608f5c]{height:100%;align-items:center;width:100%;transition:.5s}.portImageHolder[data-v-c7608f5c]{position:relative;display:flex;justify-content:flex-end;opacity:1;margin:1%;filter:grayscale(1);letter-spacing:2px;font-size:3.5vw;text-transform:uppercase;-webkit-text-stroke:1px var(--color-primary);-webkit-text-fill-color:hsla(0,0%,100%,0);z-index:0}.portImageHolder[data-v-c7608f5c]:hover{filter:grayscale(0);-webkit-text-fill-color:var(--color-primary);letter-spacing:0;z-index:6}.portImage[data-v-c7608f5c]{width:100%;transition:.5s}.portName[data-v-c7608f5c]{font-size:2vw}@media only screen and (max-width:600px){.portImageHolder[data-v-c7608f5c]{font-size:7.5vw}}",""]),t.exports=e},288:function(t,e,o){"use strict";var n=o(263);o.n(n).a},289:function(t,e,o){(e=o(14)(!1)).push([t.i,".portfolioContainer[data-v-369d7012]{position:absolute;width:100%;height:100%;overflow:auto;bottom:0;justify-content:space-around;align-items:center}.portfolioContainer[data-v-369d7012]::-webkit-scrollbar{display:none}.portContentContainer[data-v-369d7012]{position:fixed;height:100%;width:100%;left:0}.portNavContainer[data-v-369d7012]{position:absolute;width:50%;right:0;top:10%;margin:1%;overflow:auto;-ms-overflow-style:none}@media only screen and (max-width:600px){.portNavContainer[data-v-369d7012]{width:100%}.portContentContainer[data-v-369d7012]{display:none}}",""]),t.exports=e},315:function(t,e,o){"use strict";o.r(e);o(24);var n=o(2),r=(o(160),o(270)),l=o(271),c={transition:"fade",components:{PortfolioMain:r.default,PortfolioNav:l.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("portfolios").only(["name","titleImage","briefdesc","createdAt","slug"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{portfolios:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{scrollState:null,swipeState:null,scrollDirecton:0,currentIndex:0,minIndex:0,error:"",currentDeltaY:0,firstLoad:!0,activePortIndex:-1}},head:function(){return{title:"Portfolio | Aghil Jose | Full Stack Engineer",meta:[{hid:"og:image",property:"og:image",content:"/img/common/ogPortfolio.png"},{hid:"og:description",name:"og:description",content:"The portfolio of Aghil Jose | Full Stack Engineer"},{hid:"og:type",name:"og:type",content:"portfolio"}]}},mounted:function(){document.getElementById("mainContent").addEventListener("wheel",this.handleScroll)},methods:{handleScroll:function(t){this.firstLoad=!1,t.deltaY<-20?this.scrollState="up":t.deltaY>20&&(this.scrollState="down"),-1!=t.deltaY&&1!=t.deltaY||(this.scrollState=null)},switchPortfolio:function(t){document.getElementById("portfolioDisplay").style.opacity=t},swipeUpAction:function(){var t=this;this.scrollState="up",setTimeout((function(){t.scrollState=null}),500)},swipeDownAction:function(){var t=this;this.scrollState="down",setTimeout((function(){t.scrollState=null}),500)},setActiveOpacity:function(t){this.activePortIndex=t},setDetPos:function(t){var e="portNav"+this.activePortIndex,o="portfolioItem"+this.activePortIndex,n=document.getElementById(e).clientWidth/2,r=(document.getElementById(e).clientHeight/2-t.offsetY)/-50,l=(n-t.offsetX)/-20;document.getElementById(o).style.transform="translate("+l+"%, "+r+"%)"}},watch:{scrollState:function(){var t=this;"up"==this.scrollState?this.currentIndex>0&&setTimeout((function(){t.currentIndex--}),500):"down"==this.scrollState&&this.currentIndex<this.maxIndex-1&&setTimeout((function(){t.currentIndex++}),500)}},computed:{maxIndex:function(){return this.$store.state.portfolios.portfolios.length}}},d=(o(288),o(3)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:t.swipeUpAction,expression:"swipeUpAction",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:t.swipeDownAction,expression:"swipeDownAction",arg:"swipe",modifiers:{left:!0}}],staticClass:"portfolioContainer"},[o("div",{staticClass:"portContentContainer"},t._l(t.portfolios,(function(e,n){return o("PortfolioMain",{key:e._id,attrs:{item:e,index:n,portfolioName:e.name,portfolioImage:e.titleImage,portfolioBrief:e.briefdesc,activePortIndex:t.activePortIndex}})})),1),t._v(" "),o("div",{staticClass:"portNavContainer"},t._l(t.portfolios,(function(e,n){return o("PortfolioNav",{key:n,attrs:{index:n,portfolioName:e.name,portfolioImage:e.titleImage},on:{setActiveOpacity:function(e){return t.setActiveOpacity(e)},setDetPos:function(e){return t.setDetPos(e)}}})})),1)])])}),[],!1,null,"369d7012",null);e.default=component.exports;installComponents(component,{PortfolioMain:o(270).default,PortfolioNav:o(271).default})}}]);