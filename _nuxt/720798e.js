(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,4],{285:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("592fd9fd",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("379eed8d",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n(285)},299:function(t,e,n){var o=n(12)(!1);o.push([t.i,".fullComments[data-v-1af4cf50]{width:100%}",""]),t.exports=o},300:function(t,e,n){"use strict";n(286)},301:function(t,e,n){var o=n(12)(!1);o.push([t.i,".commentsInputHeader[data-v-376266f2]{font-size:x-large;font-weight:700}.inputElements[data-v-376266f2]{background:transparent;color:var(--color-primary)}.inputElements[data-v-376266f2],.postButton[data-v-376266f2]{width:100%;height:2.5vw;outline:none;border:1px solid var(--color-primary);padding-left:2.5%}.postButton[data-v-376266f2]{background:var(--color-primary);color:var(--background-color-primary);font-weight:700}.recaptchaHolder[data-v-376266f2]{display:flex;justify-content:center}@media only screen and (max-width:1025px){.inputElements[data-v-376266f2],.postButton[data-v-376266f2]{width:99%;height:5vw}}@media only screen and (max-width:600px){.commentsInputHeader[data-v-376266f2]{font-size:large}.inputElements[data-v-376266f2],.postButton[data-v-376266f2]{height:10vw}}",""]),t.exports=o},313:function(t,e,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("86bbdbf0",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n.r(e);var o={props:["blogComments"],data:function(){return{}}},r=(n(298),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fullComments"},[n("br"),t._v(" "),n("hr"),t._v(" "),n("br"),t._v(" "),null==this.blogComments?n("div",[t._v("\n    No comments\n    "),n("br"),t._v(" "),n("br")]):n("div",t._l(t.blogComments,(function(t,e){return n("CommentComponent",{key:e,attrs:{commentator:t.name,commentContent:t.comment,commentTime:t.date}})})),1),t._v(" "),n("hr")])}),[],!1,null,"1af4cf50",null);e.default=component.exports},324:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(23),n(46),n(62)),c={props:["blogId"],data:function(){return{commentInputText:"",nameInputText:"",emailInputText:"",recaptchaSuccess:!1,buttonDisabled:!1}},methods:{addComment:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.commentInputText.length>0&&0!=t.commentInputText.replace(/\s/g,"").length&&t.nameInputText.length>0&&0!=t.nameInputText.replace(/\s/g,"").length&&t.emailInputText.length>0&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t.emailInputText)&&t.recaptchaSuccess)){e.next=13;break}return t.buttonDisabled=!0,e.next=4,r.a.insertComment(t.blogId,t.emailInputText,t.nameInputText,t.commentInputText,(new Date).toGMTString());case 4:t.emailInputText="",t.nameInputText="",t.commentInputText="",t.resetCaptcha(),t.$toast.show("Comment Posted!"),t.$emit("newComment"),t.buttonDisabled=!1,e.next=18;break;case 13:0==t.commentInputText.length?t.$toast.error("Enter a comment!!!"):0==t.commentInputText.replace(/\s/g,"").length&&t.$toast.error("Please enter some actual comments"),0==t.nameInputText.length?t.$toast.error("Provide Name!!!"):0==t.nameInputText.replace(/\s/g,"").length&&t.$toast.error("Please enter your name"),0==t.emailInputText.length?t.$toast.error("Provide Email!!! It will not be published."):/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t.emailInputText)||t.$toast.error("Invalid E-mail"),t.recaptchaSuccess||t.commentInputText.replace(/\s/g,"").length,t.$toast.error("Check the 'I'm not a robot' box'");case 18:case"end":return e.stop()}}),e)})))()},onError:function(){console.error("minor error")},resetCaptcha:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.getResponse();case 3:return e.sent,e.next=6,t.$recaptcha.reset();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},onSuccess:function(t){this.recaptchaSuccess=!0},onExpired:function(){this.recaptchaSuccess=!1},validateEmail:function(t){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)||(alert("You have entered an invalid email address!"),!1)}}},l=(n(300),n(3)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"commentsInputHeader"},[t._v("Leave a comment")]),t._v(" "),n("br"),t._v("All fields are mandatory. Your email id won't be published!\n  "),n("br"),t._v(" "),n("br"),t._v(" "),n("form",{attrs:{id:"commentsIn"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.commentInputText,expression:"commentInputText"}],staticClass:"inputElements",attrs:{type:"text",id:"comment",name:"comment",placeholder:"Comment"},domProps:{value:t.commentInputText},on:{input:function(e){e.target.composing||(t.commentInputText=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nameInputText,expression:"nameInputText"}],staticClass:"inputElements",attrs:{type:"text",id:"name",name:"name",placeholder:"Name"},domProps:{value:t.nameInputText},on:{input:function(e){e.target.composing||(t.nameInputText=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.emailInputText,expression:"emailInputText"}],staticClass:"inputElements",attrs:{type:"text",id:"email",name:"email",placeholder:"E-mail"},domProps:{value:t.emailInputText},on:{input:function(e){e.target.composing||(t.emailInputText=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"recaptchaHolder"},[n("recaptcha",{on:{error:t.onError,success:t.onSuccess,expired:t.onExpired}})],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"postOption"},[n("button",{staticClass:"postButton",attrs:{type:"button",disabled:t.buttonDisabled},on:{click:t.addComment}},[t._v("\n        Post Comment\n      ")]),t._v(" "),n("br"),t._v(" "),n("br")])])])}),[],!1,null,"376266f2",null);e.default=component.exports},338:function(t,e,n){"use strict";n(313)},339:function(t,e,n){var o=n(12)(!1);o.push([t.i,".backButton[data-v-4efcbf1d]{position:absolute;text-decoration:none;top:2.5%;color:var(--primary-color);z-index:6;height:1.25vw;width:8vw;display:grid;grid-template-columns:2fr 8fr}.backButtonImage[data-v-4efcbf1d]{height:1vw;width:1vw;filter:var(--invert-value)}.backText[data-v-4efcbf1d]{display:flex;padding-left:10%;align-items:center;font-size:1.25vw}.blogContainer[data-v-4efcbf1d]{position:absolute;width:100%;height:100%;overflow:auto;-ms-overflow-style:none;color:var(--primary-color)}.blogContainer[data-v-4efcbf1d]::-webkit-scrollbar{display:none}.blogTitleImageHolder[data-v-4efcbf1d]{top:0;width:100%;height:60%;display:flex;justify-content:center}.blogTitleImg[data-v-4efcbf1d]{height:100%;width:100%;-o-object-fit:contain;object-fit:contain}.blogTitle[data-v-4efcbf1d]{top:40%;width:100%;text-align:center;font-size:4vw}.blogContentHolder[data-v-4efcbf1d]{display:flex;justify-content:center;width:100%;top:50%;font-size:1vw}.blogContent[data-v-4efcbf1d]{width:50%}.commentsHeader[data-v-4efcbf1d]{font-weight:700;font-size:x-large}.commentsMain[data-v-4efcbf1d]{display:flex;flex-direction:column;align-items:center;width:100%;top:50%;font-size:1vw}.commentsHolder[data-v-4efcbf1d],.commentsInput[data-v-4efcbf1d]{width:50%}.blogPostDate[data-v-4efcbf1d]{font-size:small;height:10vh;display:flex;align-items:center;justify-content:flex-start}.postDateImage[data-v-4efcbf1d]{height:2.5vh;filter:var(--invert-value);width:2.5vh}.contentImages[data-v-4efcbf1d],.postDateImage[data-v-4efcbf1d]{-o-object-fit:contain;object-fit:contain}.contentImages[data-v-4efcbf1d]{height:100%;width:100%}@media only screen and (max-width:1025px){.backButton[data-v-4efcbf1d]{position:unset;height:3vh;width:50vw}.blogPostDate[data-v-4efcbf1d]{font-size:large}.blogTitleImageHolder[data-v-4efcbf1d]{margin-top:2%;height:auto}.blogTitleImg[data-v-4efcbf1d]{height:45vw;width:100%}.blogTitle[data-v-4efcbf1d]{font-size:8vw}.blogContent[data-v-4efcbf1d]{width:100%}.blogContentHolder[data-v-4efcbf1d]{font-size:3vw}.commentsHeader[data-v-4efcbf1d]{font-size:large}.commentsHolder[data-v-4efcbf1d],.commentsInput[data-v-4efcbf1d]{width:100%}.commentsMain[data-v-4efcbf1d]{font-size:3vw}.backText[data-v-4efcbf1d]{font-size:5vw}.backButtonImage[data-v-4efcbf1d]{height:3vh;width:3vh}}@media only screen and (max-width:600px){.backButton[data-v-4efcbf1d]{position:unset;height:3vh;width:50vw}.blogTitleImageHolder[data-v-4efcbf1d]{margin-top:2%;height:auto}.blogTitleImg[data-v-4efcbf1d]{height:45vw;width:100%}.blogTitle[data-v-4efcbf1d]{font-size:8vw}.blogContent[data-v-4efcbf1d]{width:100%}.blogContentHolder[data-v-4efcbf1d]{font-size:3vw}.commentsHeader[data-v-4efcbf1d]{font-size:large}.commentsHolder[data-v-4efcbf1d],.commentsInput[data-v-4efcbf1d]{width:100%}.commentsMain[data-v-4efcbf1d]{font-size:3vw}.backText[data-v-4efcbf1d]{font-size:5vw}.backButtonImage[data-v-4efcbf1d]{height:3vh;width:3vh}}",""]),t.exports=o},371:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(23),n(10),n(62)),c=n(323),l=n(324),d={components:{CommentsDisplay:c.default,CommentsInput:l.default},transition:"fade",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("blogs",o.slug).fetch();case 3:return r=e.sent,e.abrupt("return",{blog:r,title:r.name,description:r.briefdesc,ogImage:"/img/blog/".concat(r.titleImage,".jpg"),params:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{blogItem:{}}},head:function(){return{title:this.title,meta:[{hid:"og:title",property:"og:title",content:this.title},{hid:"og:image",property:"og:image",content:this.ogImage},{hid:"og:description",name:"og:description",content:this.description},{hid:"description",name:"description",content:this.description},{hid:"author",name:"author",content:"Aghil Jose"},{hid:"og:type",name:"og:type",content:"article"},{hid:"twitter:card",property:"twitter:card",content:this.ogImage},{hid:"twitter:site",property:"twitter:site",content:"https://aghiljose.com/"}]}},created:function(){this.$store.commit("pageTitle/set","BLOG")},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loadAndRefreshBlog();case 1:case"end":return e.stop()}}),e)})))()},methods:{loadAndRefreshBlog:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.getBlog(t.title);case 3:n=e.sent,t.blogItem=n[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},validate:function(t){var e=t.params;return isNaN(+e.name)}},m=(n(338),n(3)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"blogContainer"},[n("nuxt-link",{staticClass:"backButton",attrs:{id:"blogDisplay",to:"/blog/"}},[n("picture",[n("source",{attrs:{srcset:"/img/common/back.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"backButtonImage",attrs:{src:"/img/common/back.png",alt:"back"}})]),t._v(" "),n("div",{staticClass:"backText"})]),t._v(" "),n("div",{staticClass:"blogTitleImageHolder"},[n("picture",[n("source",{attrs:{srcset:"/img/blog/"+t.blog.titleImage+".webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"blogTitleImg",attrs:{src:"/img/blog/"+t.blog.titleImage+".jpg",alt:"Blog image"}})])]),t._v(" "),n("div",{staticClass:"blogTitle"},[t._v(t._s(t.blog.name))]),t._v(" "),n("div",{staticClass:"blogContentHolder"},[n("div",{staticClass:"blogContent"},[n("div",{staticClass:"blogPostDate"},[t._m(0),t._v(" "),n("div",[t._v("  : "+t._s(t.blog.postDate))])]),t._v(" "),n("nuxt-content",{attrs:{document:t.blog}})],1)]),t._v(" "),n("div",{staticClass:"commentsMain"},[n("div",{staticClass:"commentsHeader"},[t._v("Comments")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"commentsHolder"},[n("CommentsDisplay",{attrs:{blogComments:t.blogItem.comments}})],1),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"commentsInput"},[n("CommentsInput",{attrs:{blogId:t.blogItem._id},on:{newComment:t.loadAndRefreshBlog}})],1)])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{attrs:{srcset:"/img/common/postDate.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"postDateImage",attrs:{src:"/img/common/postDate.png",alt:"Calendar Image"}})])}],!1,null,"4efcbf1d",null);e.default=component.exports}}]);