(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8117a528"],{"230c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[a("van-nav-bar",{attrs:{"left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.back()}},scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showAuthor,expression:"showAuthor"}],staticClass:"nav-author"},[a("van-image",{attrs:{round:"",width:"7vw",height:"7vw",src:t.article.aut_photo}}),a("span",{staticClass:"name"},[t._v("极乐头条")]),a("span",{staticClass:"line"},[t._v("|")]),a("span",{staticClass:"follow",class:{un:t.article.is_followed},on:{click:t.fllowAuthor}},[t._v(t._s(t.article.is_followed?"取消关注":"关注"))])],1)]},proxy:!0},{key:"right",fn:function(){return[a("van-icon",{attrs:{name:"ellipsis",size:"5.4vw"}})]},proxy:!0}])}),t.loading?a("div",{staticClass:"article-skeleton"},[a("van-skeleton",{attrs:{title:"",row:12}})],1):a("div",{ref:"wrapper",staticClass:"article-wrapper",on:{scroll:t.scrollScreen}},[a("div",{ref:"header",staticClass:"header"},[a("h3",{staticClass:"title"},[t._v(t._s(t.article.title))]),a("div",{staticClass:"time"},[a("span",[t._v(t._s(t.article.pubdate))]),a("span",[t._v("|")]),a("span",[t._v(t._s(t.article.read_count)+" 阅读")]),a("span",[t._v("|")]),a("span",[t._v(t._s(t.article.comm_count)+" 评论")])]),a("div",{staticClass:"author van-hairline--bottom"},[a("van-image",{attrs:{round:"",width:"10vw",height:"10vw",src:t.article.aut_photo}}),a("span",{staticClass:"name"},[t._v("极乐头条")]),a("van-button",{attrs:{round:"",size:"small",color:"#FC6627"},on:{click:t.fllowAuthor}},[t._v("+ "+t._s(t.article.is_followed?"取消关注":"关注"))])],1)]),a("div",{ref:"main",staticClass:"main"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"html",domProps:{innerHTML:t._s(t.article.content)}}),a("div",{staticClass:"space"})]),a("article-comment",{attrs:{article:t.article},on:{"click-scroll":t.scrollToCommentOrTop}})],1)],1)},r=[],i=a("3835"),s=a("1da1"),o=(a("96cf"),a("b775"));function c(t){return Object(o["a"])({url:"articles/"+t})}function l(t,e){return e?Object(o["a"])({url:"user/followings",mathod:"POST",data:{target:t}}):Object(o["a"])({url:"user/followings/"+t,method:"DELETE"})}function u(t,e){return Object(o["a"])({url:"comments",params:{type:"a",source:t,offset:e}})}function d(t,e){return e?Object(o["a"])({url:"article/likings",method:"POST",data:{target:t}}):Object(o["a"])({url:"article/likings/"+t,method:"DELETE"})}function m(t,e){return e?Object(o["a"])({url:"article/collections",method:"POST",data:{target:t}}):Object(o["a"])({url:"article/collections/"+t,method:"DELETE"})}function p(t,e){return Object(o["a"])({url:"comments",params:{type:"c",source:t,offset:e}})}function f(t,e,a){return Object(o["a"])({url:"comments",method:"POST",data:{target:t,content:e,art_id:a}})}var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-comment"},[a("van-sticky",{attrs:{"offset-top":"10.73333vw"}},[a("div",{staticClass:"title van-hairline--bottom"},[a("span",[t._v("全部评论 ("+t._s(t.article.comm_count)+")")]),a("span",[t._v("0 点赞")])])]),a("div",{staticClass:"list"},[a("van-list",{attrs:{finished:t.finished,"finished-text":"没有评论了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.commentList,(function(e){return a("div",{key:e.com_id,staticClass:"item van-hairline--bottom"},[a("van-image",{attrs:{round:"",width:"10vw",height:"10vw",src:e.aut_photo}}),a("div",{staticClass:"info"},[a("p",[a("span",{staticClass:"name"},[t._v(t._s(e.aut_name))]),a("span",{staticClass:"zan"},[t._v(t._s(e.like_count)+" "),a("geek-icon",{attrs:{name:"like2"}})],1)]),a("p",{staticClass:"cont"},[t._v(t._s(e.content))]),a("p",[a("span",{staticClass:"reply",on:{click:function(a){return t.showReplyModel(e)}}},[t._v(t._s(e.reply_count)+"回复 "),a("i",{staticClass:"van-icon van-icon-arrow"})]),a("span",{staticClass:"time"},[t._v(t._s(t._f("relativeTime")(e.pubdate)))])])])],1)})),0)],1),a("div",{staticClass:"footer van-hairline--top"},[a("div",{staticClass:"input",on:{click:function(e){t.showInput=!0}}},[a("i",{staticClass:"van-icon van-icon-edit"})]),a("div",{staticClass:"btn",on:{click:t.scrollToCommentOrTop}},[a("geek-icon",{attrs:{name:"comment"}}),a("p",[t._v("评论")]),t.article.comm_count?a("i",[t._v(t._s(t.article.comm_count))]):t._e()],1),a("div",{staticClass:"btn",on:{click:t.likeArticle}},[a("geek-icon",{attrs:{name:1===t.article.attitude?"like-sel":"like"}}),a("p",[t._v("点赞")])],1),a("div",{staticClass:"btn",on:{click:t.collectArticle}},[a("geek-icon",{attrs:{name:t.article.is_collected?"collect-sel":"collect"}}),a("p",[t._v("收藏")])],1),a("div",{staticClass:"btn"},[a("geek-icon",{attrs:{name:"share"}}),a("p",[t._v("分享")])],1)]),a("van-popup",{attrs:{position:"right"},model:{value:t.reply.open,callback:function(e){t.$set(t.reply,"open",e)},expression:"reply.open"}},[a("van-nav-bar",{attrs:{"left-arrow":"",title:t.currentComment.reply_count+"条回复"},on:{"click-left":function(e){t.reply.open=!1,t.currentComment={}}}}),a("div",{staticClass:"reply-wrapper list"},[a("van-list",{attrs:{"immediate-check":!1,finished:t.reply.finished,"finished-text":"没有回复了"},on:{load:t.loadReply},model:{value:t.reply.loading,callback:function(e){t.$set(t.reply,"loading",e)},expression:"reply.loading"}},t._l(t.reply.commentList,(function(e){return a("div",{key:e.com_id,staticClass:"item van-hairline--bottom"},[a("van-image",{attrs:{round:"",width:"10vw",height:"10vw",src:e.aut_photo}}),a("div",{staticClass:"info"},[a("p",[a("span",{staticClass:"name"},[t._v(t._s(e.aut_name))]),a("span",{staticClass:"zan"},[t._v(t._s(e.like_count)),a("geek-icon",{attrs:{name:"like2"}})],1)]),a("p",{staticClass:"cont"},[t._v(t._s(e.content))]),a("p",[a("span",{staticClass:"time",staticStyle:{"margin-left":"0"}},[t._v("2小时内")])])])],1)})),0)],1),a("div",{staticClass:"footer van-hairline--top",staticStyle:{position:"static"}},[a("div",{staticClass:"input big",on:{click:function(e){t.showInput=!0}}},[a("i",{staticClass:"van-icon van-icon-edit"})]),a("div",{staticClass:"btn"},[a("geek-icon",{attrs:{name:"collect"}}),a("p",[t._v("收藏")])],1),a("div",{staticClass:"btn"},[a("geek-icon",{attrs:{name:"share"}}),a("p",[t._v("分享")])],1)])],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.showInput,callback:function(e){t.showInput=e},expression:"showInput"}},[a("van-nav-bar",{attrs:{"left-arrow":"",title:"评论文章","right-text":"发表"},on:{"click-left":function(e){t.showInput=!1},"click-right":t.commentArticle}}),a("van-field",{attrs:{rows:"3",autosize:"",type:"textarea",maxlength:"100",placeholder:t.currentComment.aut_name?"@"+t.currentComment.aut_name:"请输入评论","show-word-limit":""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)],1)},v=[],_=a("2909"),w={name:"ArticleComment",props:["article"],data:function(){return{showInput:!1,text:"",loading:!1,finished:!1,offset:null,commentList:[],currentComment:{},reply:{open:!1,offset:null,loading:!1,finished:!1}}},created:function(){},methods:{commentArticle:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s,o,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.currentComment.aut_name){e.next=16;break}return e.next=3,f(t.currentComment.com_id,t.text,t.article.art_id);case 3:if(a=e.sent,n=Object(i["a"])(a,2),r=n[0],s=n[1],!r){e.next=9;break}return e.abrupt("return",t.$toast.fail(r));case 9:console.log(s),t.showInput=!1,t.reply.commentList.push(s.data.data.new_obj),t.currentComment.reply_count++,t.text="",e.next=29;break;case 16:return e.next=18,f(t.article.art_id,t.text);case 18:if(o=e.sent,c=Object(i["a"])(o,2),l=c[0],u=c[1],!l){e.next=24;break}return e.abrupt("return",t.$toast.fail(l));case 24:console.log(u),t.showInput=!1,t.commentList.unshift(u.data.data.new_obj),t.article.comm_count++,t.text="";case 29:case"end":return e.stop()}}),e)})))()},loadReply:function(){},showReplyModel:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.currentComment=t,e.reply.open=!0,a.next=4,p(t.com_id,e.reply.offset);case 4:if(n=a.sent,r=Object(i["a"])(n,2),s=r[0],o=r[1],!s){a.next=10;break}return a.abrupt("return",e.$toast.fail(s));case 10:console.log(o),o.data.data.end_id===o.data.data.last_id?e.reply.finished=!0:e.reply.offset=o.data.data.end_id,e.reply.commentList=o.data.data.results;case 13:case"end":return a.stop()}}),a)})))()},collectArticle:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:if(a=e.sent,n=Object(i["a"])(a,1),r=n[0],!r){e.next=7;break}return e.abrupt("return",t.$toast.fail(r));case 7:t.article.is_collected=!t.article.is_collected,t.$toast.success(t.article.is_collected?"收藏成功":"取消收藏成功");case 9:case"end":return e.stop()}}),e)})))()},likeArticle:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:if(a=e.sent,n=Object(i["a"])(a,1),r=n[0],!r){e.next=7;break}return e.abrupt("return",t.$toast.fail(r));case 7:1===t.article.attitude?(t.article.attitude=-1,t.$toast.success("取消点赞成功")):(t.article.attitude=1,t.$toast.success("点赞成功"));case 8:case"end":return e.stop()}}),e)})))()},scrollToCommentOrTop:function(){this.$emit("click-scroll")},onLoad:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,u(t.article.art_id,t.offset);case 3:if(n=e.sent,r=Object(i["a"])(n,2),s=r[0],o=r[1],!s){e.next=9;break}return e.abrupt("return",t.$toast.fail(s));case 9:(a=t.commentList).push.apply(a,Object(_["a"])(o.data.data.results)),o.data.data.end_id===o.data.data.last_id?t.finished=!0:t.offset=o.data.data.last_id,t.loading=!1;case 12:case"end":return e.stop()}}),e)})))()},getArticleCommentsByID:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u(t.article.art_id,t.offset);case 2:if(a=e.sent,n=Object(i["a"])(a,2),r=n[0],s=n[1],!r){e.next=8;break}return e.abrupt("return",t.$toast.fail(r));case 8:s.data.data.end_id===s.data.data.last_id?(t.commentList=s.data.data.results,t.finished=!0):t.offset=s.data.data.last_id;case 9:case"end":return e.stop()}}),e)})))()}}},b=w,g=(a("3ba6"),a("2877")),k=Object(g["a"])(b,h,v,!1,null,"f6a4a830",null),C=k.exports,x={components:{articleComment:C},data:function(){return{article:{},showAuthor:!1,loading:!1,isToComment:!1}},methods:{scrollToCommentOrTop:function(){this.isToComment?this.$refs.wrapper.scrollTop=0:this.$refs.wrapper.scrollTop=this.$refs.header.offsetHeight+this.$refs.main.offsetHeight,this.isToComment=!this.isToComment},fllowAuthor:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l(t.article.aut_id,!t.article.is_followed);case 2:t.article.is_followed=!t.article.is_followed,t.$toast(t.article.is_followed?"关注成功":"取消关注成功");case 4:case"end":return e.stop()}}),e)})))()},scrollScreen:function(){this.$refs.wrapper.scrollTop>this.$refs.header.offsetHeight?this.showAuthor=!0:this.showAuthor=!1}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,c(t.$route.params.id);case 3:if(a=e.sent,n=Object(i["a"])(a,2),r=n[0],s=n[1],!r){e.next=9;break}return e.abrupt("return",t.$toast.fail(r));case 9:console.log(s),t.article=s.data.data,t.loading=!1;case 12:case"end":return e.stop()}}),e)})))()}},y=x,O=(a("3d67"),Object(g["a"])(y,n,r,!1,null,"e1b5c270",null));e["default"]=O.exports},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("6b75");function r(t){if(Array.isArray(t))return Object(n["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=a("06c5");a("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||i(t)||Object(s["a"])(t)||o()}},"3ba6":function(t,e,a){"use strict";a("5078")},"3d67":function(t,e,a){"use strict";a("dc0f")},5078:function(t,e,a){},dc0f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-8117a528.ffa3c06b.js.map