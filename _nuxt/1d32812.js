(window.webpackJsonp=window.webpackJsonp||[]).push([[19,6,8],{281:function(t,e,o){var content=o(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("52b583b1",content,!0,{sourceMap:!1})},287:function(t,e,o){var content=o(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("385232b6",content,!0,{sourceMap:!1})},288:function(t,e,o){"use strict";o(281)},289:function(t,e,o){var n=o(12)(!1);n.push([t.i,".blogHolder[data-v-3369e4b0]{width:20vw;height:17vw;display:grid;padding:5%;text-decoration:none;color:var(--primary-color);grid-auto-rows:4fr 3fr;opacity:1;transition:.5s}.blogImageHolder[data-v-3369e4b0]{position:relative;height:100%;width:100%;display:flex;justify-content:center;align-items:center}.blogImage[data-v-3369e4b0]{transition:.5s}.blogImage[data-v-3369e4b0],.blogItem[data-v-3369e4b0]{height:100%;width:100%}.blogItem[data-v-3369e4b0]{position:relative;padding:1%}.blogName[data-v-3369e4b0]{text-align:left;font-size:1vw;font-weight:700}.blogDesc[data-v-3369e4b0]{font-size:.8vw}@media only screen and (max-width:600px){.blogHolder[data-v-3369e4b0]{grid-auto-rows:5fr 10fr;height:40vw;width:30vw}.blogImageHolder[data-v-3369e4b0],.blogItem[data-v-3369e4b0]{width:100%}.blogName[data-v-3369e4b0]{font-size:3vw}.blogDesc[data-v-3369e4b0]{font-size:2vw}}@media only screen and (min-width:600px){.blogHolder:hover .blogImage[data-v-3369e4b0]{transform:scale(1.1)}}",""]),t.exports=n},291:function(t,e,o){"use strict";o.r(e);var n={props:["blogName","blogImage","blogBrief","blog"],data:function(){return{sets:[{format:"jpg"},{format:"webp"}]}}},l=(o(288),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"blogHolder",attrs:{to:"/blog/"+t.blog.slug}},[o("div",{staticClass:"blogImageHolder"},[o("nuxt-picture",{staticClass:"blogImage",attrs:{src:"/img/blog/"+t.blogImage+".webp",alt:"Aghil Jose Logo",sets:t.sets}})],1),t._v(" "),o("div",{staticClass:"blogItem"},[o("div",{staticClass:"blogName"},[t._v(t._s(t.blogName))]),t._v(" "),o("div",{staticClass:"blogDesc"},[t._v(t._s(t.blogBrief))])])])}),[],!1,null,"3369e4b0",null);e.default=component.exports},302:function(t,e,o){"use strict";o(287)},303:function(t,e,o){var n=o(12)(!1);n.push([t.i,".contentContainer[data-v-788c16be]{position:absolute;overflow:auto;height:100vh;width:100%;display:grid;grid-template-rows:5fr 4fr}.homeTitle[data-v-788c16be]{position:relative;font-size:10vw;padding:0 0 0 5%}.newLogo[data-v-788c16be]{position:absolute;height:20vw;width:20vw;top:10%;right:0;display:flex}.skillAndLogo[data-v-788c16be]{position:relative;display:grid;grid-template-columns:6fr 0fr}.logoImg[data-v-788c16be]{-o-object-fit:contain;object-fit:contain;filter:var(--invert-value)}.logoHolder[data-v-788c16be],.logoImg[data-v-788c16be]{height:100%;width:100%}.logoHolder[data-v-788c16be]{position:relative;display:flex;justify-content:center;align-items:center}.skillHolder[data-v-788c16be]{display:grid;grid-template-columns:repeat(9,auto);justify-content:space-evenly;align-content:space-evenly;padding:2%}.skillClass[data-v-788c16be]{padding:2%;display:inline-block;transition:.5s}.skillImageHolder[data-v-788c16be]{height:4vw;width:3vw;display:grid;grid-template-rows:3fr 1fr}.skillImageHolder span[data-v-788c16be]{font-size:70%;text-align:center;transition:.5s;opacity:0}.skillImageHolder[data-v-788c16be] :hover,.skillImageHolder :hover+span[data-v-788c16be]{opacity:1}.skillLogo[data-v-788c16be]{width:inherit}.latestPostsHeader[data-v-788c16be]{font-weight:700}.latestPostList[data-v-788c16be]{height:100%;display:grid;grid-template-columns:repeat(4,auto);align-items:center}@media only screen and (max-width:600px){.contentContainer[data-v-788c16be]{height:72vh;grid-template-rows:2.5fr 5.5fr}.homeTitle[data-v-788c16be]{font-size:14vw;padding:0;margin:0}.skillAndLogo[data-v-788c16be]{top:0;grid-template-rows:1fr 1fr;grid-template-columns:auto}.skillHolder[data-v-788c16be]{padding:0;grid-template-columns:repeat(6,auto)}.skillImageHolder[data-v-788c16be]{height:10vw;width:8vw;align-self:center}.skillImageHolder span[data-v-788c16be]{font-size:55%}.newLogo[data-v-788c16be]{display:none}.logoImg[data-v-788c16be]{width:25vh}}@media only screen and (min-width:600px){.logoHolder[data-v-788c16be]{display:none}}",""]),t.exports=n},325:function(t,e,o){"use strict";o.r(e);var n={props:["blogs"],data:function(){return{sets:[{format:"png"},{format:"webp"}]}}},l=(o(302),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contentContainer"},[t._m(0),t._v(" "),o("div",{staticClass:"newLogo"},[o("nuxt-picture",{staticClass:"logoImg",attrs:{id:"homeLogoID1",src:"/img/common/aghiljvnewlogo.webp",alt:"Aghil Jose Logo",sets:t.sets}})],1),t._v(" "),o("div",{staticClass:"skillAndLogo"},[o("div",{staticClass:"latestPosts"},[o("div",{staticClass:"latestPostsHeader"},[t._v("Latest Posts")]),t._v(" "),o("div",{staticClass:"latestPostList"},t._l(t.blogs,(function(t,e){return o("BlogNotify",{key:e,attrs:{item:t,blogName:t.name,blogImage:t.titleImage,blogBrief:t.briefdesc,blog:t}})})),1)]),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"homeTitle"},[o("p",{attrs:{id:"homeTitle1"}},[t._v("SOFTWARE")]),t._v(" "),o("p",{attrs:{id:"homeTitle2"}},[t._v("ENGINEER")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logoHolder"},[o("picture",[o("source",{attrs:{srcset:"/img/common/aghiljvnewlogo.webp",type:"image/webp"}}),t._v(" "),o("img",{staticClass:"logoImg",attrs:{src:"/img/common/aghiljvnewlogo.png",alt:"Aghil Jose Logo"}})])])}],!1,null,"788c16be",null);e.default=component.exports;installComponents(component,{BlogNotify:o(291).default})},373:function(t,e,o){"use strict";o.r(e);var n=o(2),l=(o(23),{transition:"fade",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("blogs").only(["name","titleImage","briefdesc","createdAt","slug"]).sortBy("createdAt","desc").limit(4).fetch();case 3:return n=e.sent,e.abrupt("return",{blogs:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"Aghil Jose | Software Engineer"}},head:function(){return{title:"Aghil Jose | Software Engineer",meta:[{hid:"og:title",property:"og:title",content:"Aghil Jose | Software Engineer"},{hid:"description",name:"description",content:"The blog and portfolio of Aghil Jose | Software Engineer"},{hid:"og:image",property:"og:image",content:"/img/common/ogMain.jpg"},{hid:"og:description",name:"og:description",content:"The blog and portfolio of Aghil Jose | Software Engineer"},{hid:"twitter:card",property:"twitter:card",content:"/img/common/ogMain.jpg"},{hid:"twitter:site",property:"twitter:site",content:"https://aghiljose.com/"}]}},created:function(){this.$store.commit("pageTitle/set","HOME")},beforeMount:function(){},methods:{introAnimRemove:function(){document.getElementById("introAnimComp").style.opacity=0,setTimeout(this.sendElementDown,1e3)},sendElementDown:function(){document.getElementById("introAnimComp").style.display="none"}}}),r=o(3),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("HomePage",{attrs:{blogs:t.blogs}})],1)}),[],!1,null,"95e8630c",null);e.default=component.exports;installComponents(component,{HomePage:o(325).default})}}]);