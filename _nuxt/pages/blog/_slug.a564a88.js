(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{264:function(t,e,n){var content=n(291);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("68518cbe",content,!0,{sourceMap:!1})},265:function(t,e,n){var content=n(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("60d8dbf1",content,!0,{sourceMap:!1})},266:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("b3408220",content,!0,{sourceMap:!1})},267:function(t,e,n){var content=n(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("e48e67a4",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";n.r(e);n(24);var o=n(2),r=n(160),c={props:["blogId"],data:function(){return{commentInputText:"",nameInputText:"",emailInputText:"",recaptchaSuccess:!1}},methods:{addComment:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.commentInputText.length>0&&t.nameInputText.length>0&&t.emailInputText.length>0&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t.emailInputText))){e.next=11;break}return e.next=3,r.a.insertComment(t.blogId,t.emailInputText,t.nameInputText,t.commentInputText,(new Date).toGMTString());case 3:t.emailInputText="",t.nameInputText="",t.commentInputText="",t.resetCaptcha(),t.$toast.show("Comment Posted!"),t.$emit("newComment"),e.next=16;break;case 11:0==t.commentInputText.length&&t.$toast.error("Enter a comment!!!"),0==t.nameInputText.length&&t.$toast.error("Provide Name!!!"),0==t.emailInputText.length&&t.$toast.error("Provide Email!!! It will not be published."),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t.emailInputText)||t.$toast.error("Invalid E-mail"),t.recaptchaSuccess||t.$toast.error("Check the 'I'm not a robot' box'");case 16:case"end":return e.stop()}}),e)})))()},onError:function(){console.log("minor error")},resetCaptcha:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.getResponse();case 3:return n=e.sent,console.log("ReCaptcha token:",n),e.next=7,t.$recaptcha.reset();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},onSuccess:function(t){console.log("Succeeded:",t),this.recaptchaSuccess=!0},onExpired:function(){this.recaptchaSuccess=!1},validateEmail:function(t){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)||(alert("You have entered an invalid email address!"),!1)}}},m=(n(290),n(3)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"commentsInputHeader"},[t._v("Leave a comment")]),t._v(" "),n("br"),t._v("All fields are mandatory. Your email id won't be published!\n  "),n("br"),t._v(" "),n("br"),t._v(" "),n("form",{attrs:{id:"commentsIn"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.commentInputText,expression:"commentInputText"}],staticClass:"inputElements",attrs:{type:"text",id:"comment",name:"comment",placeholder:"Comment"},domProps:{value:t.commentInputText},on:{input:function(e){e.target.composing||(t.commentInputText=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nameInputText,expression:"nameInputText"}],staticClass:"inputElements",attrs:{type:"text",id:"name",name:"name",placeholder:"Name"},domProps:{value:t.nameInputText},on:{input:function(e){e.target.composing||(t.nameInputText=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.emailInputText,expression:"emailInputText"}],staticClass:"inputElements",attrs:{type:"text",id:"email",name:"email",placeholder:"E-mail"},domProps:{value:t.emailInputText},on:{input:function(e){e.target.composing||(t.emailInputText=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"recaptchaHolder"},[n("recaptcha",{on:{error:t.onError,success:t.onSuccess,expired:t.onExpired}})],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"postOption"},[n("button",{staticClass:"postButton",attrs:{type:"button"},on:{click:t.addComment}},[t._v("Post Comment")]),t._v(" "),n("br"),t._v(" "),n("br")])])])}),[],!1,null,"64e2f48e",null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var o=n(275),r=(n(160),{components:{CommentComponent:o.default},props:["blogComments"],data:function(){return{}}}),c=(n(294),n(3)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fullComments"},[e("hr"),this._v(" "),e("br"),this._v(" "),null==this.blogComments?e("div",[this._v("\n    No comments\n    "),e("br"),this._v(" "),e("br")]):e("div",this._l(this.blogComments,(function(t,n){return e("CommentComponent",{key:n,attrs:{commentator:t.name,commentContent:t.comment,commentTime:t.date}})})),1),this._v(" "),e("hr")])}),[],!1,null,"8d1e9570",null);e.default=component.exports;installComponents(component,{CommentComponent:n(275).default})},275:function(t,e,n){"use strict";n.r(e);n(160);var o={props:["commentator","commentContent","commentTime"]},r=(n(292),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indComment"},[n("div",{staticClass:"commentator"},[t._m(0),t._v(" "),n("div",{staticClass:"commentNameTime"},[n("div",{staticClass:"commtatorName"},[t._v(t._s(t.commentator))]),t._v(" "),n("div",{staticClass:"commentTime"},[t._v(t._s(t.commentTime))])])]),t._v(" "),n("div",{staticClass:"commentContent"},[t._v(t._s(t.commentContent))])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"commentatorPic"},[e("img",{staticClass:"commentatorImage",attrs:{src:"/img/common/person.png"}})])}],!1,null,"691362b1",null);e.default=component.exports},290:function(t,e,n){"use strict";var o=n(264);n.n(o).a},291:function(t,e,n){(e=n(14)(!1)).push([t.i,".commentsInputHeader[data-v-64e2f48e]{font-size:x-large;font-weight:700}.inputElements[data-v-64e2f48e]{background:transparent;color:var(--color-primary)}.inputElements[data-v-64e2f48e],.postButton[data-v-64e2f48e]{width:100%;height:2.5vw;outline:none;border:1px solid var(--color-primary);border-radius:5vw;padding-left:2.5%}.postButton[data-v-64e2f48e]{background:var(--color-primary);color:var(--background-color-primary);font-weight:700}.recaptchaHolder[data-v-64e2f48e]{display:flex;justify-content:center}@media only screen and (max-width:600px){.commentsInputHeader[data-v-64e2f48e]{font-size:large}.inputElements[data-v-64e2f48e],.postButton[data-v-64e2f48e]{height:10vw}}",""]),t.exports=e},292:function(t,e,n){"use strict";var o=n(265);n.n(o).a},293:function(t,e,n){(e=n(14)(!1)).push([t.i,".indComment[data-v-691362b1]{position:relative;width:100%;height:100%;display:grid;grid-template-columns:auto;padding:1%;align-items:flex-start}.commentator[data-v-691362b1]{width:60%;display:grid;grid-template-columns:2fr 7fr}.commentatorPic[data-v-691362b1]{height:4vw;width:4vw;align-self:center}.commentatorPic[data-v-691362b1],.commentNameTime[data-v-691362b1]{display:flex;flex-direction:column;justify-content:center}.commentNameTime[data-v-691362b1]{align-items:flex-start}.commtatorName[data-v-691362b1]{font-weight:700}.commentTime[data-v-691362b1]{font-size:small}.commentContent[data-v-691362b1]{padding:2% 2% 2% 12.5%}.commentatorImage[data-v-691362b1]{filter:var(--invert-value)}@media only screen and (max-width:600px){.commentatorPic[data-v-691362b1]{height:10vw;width:10vw}.commentTime[data-v-691362b1]{font-size:smaller}}",""]),t.exports=e},294:function(t,e,n){"use strict";var o=n(266);n.n(o).a},295:function(t,e,n){(e=n(14)(!1)).push([t.i,".fullComments[data-v-8d1e9570]{width:100%}",""]),t.exports=e},296:function(t,e,n){"use strict";var o=n(267);n.n(o).a},297:function(t,e,n){(e=n(14)(!1)).push([t.i,".backButton[data-v-690f249c]{position:absolute;text-decoration:none;top:10%;color:var(--primary-color);z-index:6}.blogContainer[data-v-690f249c]{position:absolute;width:100%;height:100%;overflow:auto;-ms-overflow-style:none;color:var(--primary-color)}.blogContainer[data-v-690f249c]::-webkit-scrollbar{display:none}.blogTitleImageHolder[data-v-690f249c]{top:0;width:100%;height:60%;display:flex;justify-content:center}.blogTitleImg[data-v-690f249c]{height:100%;-o-object-fit:contain;object-fit:contain}.blogTitle[data-v-690f249c]{top:40%;width:100%;text-align:center;font-size:4vw}.blogContentHolder[data-v-690f249c]{display:flex;justify-content:center;width:100%;top:50%;font-size:1vw}.blogContent[data-v-690f249c]{width:50%}.commentsHeader[data-v-690f249c]{font-weight:700;font-size:x-large}.commentsMain[data-v-690f249c]{display:flex;flex-direction:column;align-items:center;width:100%;top:50%;font-size:1vw}.commentsHolder[data-v-690f249c],.commentsInput[data-v-690f249c]{width:50%}@media only screen and (max-width:600px){.backButton[data-v-690f249c]{position:unset}.blogTitleImageHolder[data-v-690f249c]{margin-top:2%;height:auto}.blogTitleImg[data-v-690f249c]{width:100%}.blogTitle[data-v-690f249c]{font-size:8vw}.blogContent[data-v-690f249c]{width:100%}.blogContentHolder[data-v-690f249c]{font-size:3vw}.commentsHeader[data-v-690f249c]{font-size:large}.commentsHolder[data-v-690f249c],.commentsInput[data-v-690f249c]{width:100%}.commentsMain[data-v-690f249c]{font-size:3vw}}",""]),t.exports=e},316:function(t,e,n){"use strict";n.r(e);n(16),n(24);var o=n(2),r=n(160),c=n(272),m=n(273),l={transition:"fade",components:{CommentsInput:c.default,CommentsDisplay:m.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,m,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("blogs",o.slug).fetch();case 3:return c=e.sent,e.next=6,r.a.getBlog(o.slug);case 6:return m=e.sent,l=m[0],e.abrupt("return",{post:c,blogItem:l,title:c.name,description:c.briefdesc,ogImage:"/img/blog/".concat(c.titleImage,".jpg"),params:o});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{blogItem:{},currentRoute:""}},head:function(){return{title:this.title,meta:[{hid:"og:image",property:"og:image",content:this.ogImage},{hid:"og:description",name:"og:description",content:this.description},{hid:"og:type",name:"og:type",content:"article"}]}},methods:{loadAndRefreshBlog:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.getBlog(t.params.slug);case 2:n=e.sent,t.blogItem=n[0];case 4:case"end":return e.stop()}}),e)})))()}},validate:function(t){var e=t.params;return isNaN(+e.name)}},d=(n(296),n(3)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"blogContainer"},[n("nuxt-link",{staticClass:"backButton",attrs:{id:"blogDisplay",to:"/blog/"}},[t._v("\n      « Return to List\n      "),n("br"),t._v("BLOGS\n    ")]),t._v(" "),n("div",{staticClass:"blogTitleImageHolder"},[n("img",{staticClass:"blogTitleImg",attrs:{src:"/img/blog/"+t.post.titleImage+".jpg",alt:"blogImage"}})]),t._v(" "),n("div",{staticClass:"blogTitle"},[t._v(t._s(t.post.name))]),t._v(" "),n("div",{staticClass:"blogContentHolder"},[n("div",{staticClass:"blogContent"},[n("nuxt-content",{attrs:{document:t.post}})],1)]),t._v(" "),n("div",{staticClass:"commentsMain"},[n("div",{staticClass:"commentsHeader"},[t._v("Comments")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"commentsHolder"},[n("CommentsDisplay",{attrs:{blogComments:t.blogItem.comments}})],1),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"commentsInput"},[n("CommentsInput",{attrs:{blogId:t.blogItem._id},on:{newComment:t.loadAndRefreshBlog}})],1)])],1)])}),[],!1,null,"690f249c",null);e.default=component.exports;installComponents(component,{CommentsDisplay:n(273).default,CommentsInput:n(272).default})}}]);