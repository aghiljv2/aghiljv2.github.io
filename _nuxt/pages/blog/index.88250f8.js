(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{258:function(t,e,o){var content=o(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("3c6f09ec",content,!0,{sourceMap:!1})},259:function(t,e,o){var content=o(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("0744c066",content,!0,{sourceMap:!1})},278:function(t,e,o){"use strict";var n=o(258);o.n(n).a},279:function(t,e,o){(e=o(14)(!1)).push([t.i,".blogContainer[data-v-f3c9d9fe]{position:absolute;width:100%;height:100%;overflow:auto;padding-top:5%;-ms-overflow-style:none}.blogContainer[data-v-f3c9d9fe]::-webkit-scrollbar{display:none}",""]),t.exports=e},280:function(t,e,o){"use strict";var n=o(259);o.n(n).a},281:function(t,e,o){(e=o(14)(!1)).push([t.i,".blogHolder[data-v-78793a85]{width:100%;height:30%;display:flex;justify-content:space-between;align-items:center;padding:1% 0;text-decoration:none;color:var(--primary-color)}#blogDisplay[data-v-78793a85]{opacity:1;transition:.5s}.portImageHolder[data-v-78793a85]{position:relative;height:100%;width:30%;display:flex;justify-content:center;align-items:center}.portImage[data-v-78793a85]{width:100%;transition:.5s}.blogItem[data-v-78793a85]{position:relative;height:50%;width:70%;padding:1%}.blogName[data-v-78793a85]{text-align:left;font-size:2vw}.blogDesc[data-v-78793a85]{font-size:1vw}@media only screen and (max-width:600px){.blogHolder[data-v-78793a85]{flex-direction:column;height:auto;padding:5% 0}.blogItem[data-v-78793a85],.portImageHolder[data-v-78793a85]{width:100%}.blogName[data-v-78793a85]{font-size:5vw}.blogDesc[data-v-78793a85]{font-size:3vw}}@media only screen and (min-width:600px){.blogHolder:hover .portImage[data-v-78793a85]{transform:scale(1.1)}}",""]),t.exports=e},310:function(t,e,o){"use strict";o.r(e);var n={props:["blogName","blogImage","blogBrief","blog"]},l=(o(280),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"blogHolder",attrs:{id:"blogDisplay",to:"/blog/"+t.blog.slug}},[o("div",{staticClass:"portImageHolder"},[o("img",{staticClass:"portImage",attrs:{src:"/img/blog/"+t.blogImage+".jpg",alt:"blogImage"}})]),t._v(" "),o("div",{staticClass:"blogItem"},[o("div",{staticClass:"blogName"},[t._v(t._s(t.blogName))]),t._v(" "),o("div",{staticClass:"blogDesc"},[t._v(t._s(t.blogBrief))])])])}),[],!1,null,"78793a85",null);e.default=component.exports},313:function(t,e,o){"use strict";o.r(e);o(24);var n=o(2),l={transition:"fade",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("blogs").only(["name","titleImage","briefdesc","createdAt","slug"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{blogs:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{scrollState:null,swipeState:null,scrollDirecton:0,currentIndex:0,minIndex:0,error:"",currentDeltaY:0,firstLoad:!0}},head:function(){return{title:"Blog | Aghil Jose | Full Stack Engineer",meta:[{hid:"og:image",property:"og:image",content:"/img/common/ogBlog.png"},{hid:"og:description",name:"og:description",content:"The blog of Aghil Jose | Full Stack Engineer"},{hid:"og:type",name:"og:type",content:"blog"}]}},mounted:function(){document.getElementById("mainContent").addEventListener("wheel",this.handleScroll)},methods:{handleScroll:function(t){this.firstLoad=!1,t.deltaY<-20?this.scrollState="up":t.deltaY>20&&(this.scrollState="down"),-1!=t.deltaY&&1!=t.deltaY||(this.scrollState=null)},switchblog:function(t){document.getElementById("blogDisplay").style.opacity=t},swipeUpAction:function(){var t=this;this.scrollState="up",setTimeout((function(){t.scrollState=null}),500)},swipeDownAction:function(){var t=this;this.scrollState="down",setTimeout((function(){t.scrollState=null}),500)}},watch:{scrollState:function(){var t=this;"up"==this.scrollState?this.currentIndex>0&&setTimeout((function(){t.currentIndex--}),500):"down"==this.scrollState&&this.currentIndex<this.maxIndex-1&&setTimeout((function(){t.currentIndex++}),500)}},computed:{maxIndex:function(){return this.$store.state.blogs.blogs.length}}},r=(o(278),o(3)),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:this.swipeUpAction,expression:"swipeUpAction",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:this.swipeDownAction,expression:"swipeDownAction",arg:"swipe",modifiers:{left:!0}}],staticClass:"blogContainer"},this._l(this.blogs,(function(t,o){return e("BlogMain",{key:o,attrs:{item:t,index:o,blogName:t.name,blogImage:t.titleImage,blogBrief:t.briefdesc,blog:t}})})),1)])}),[],!1,null,"f3c9d9fe",null);e.default=component.exports;installComponents(component,{BlogMain:o(310).default})}}]);