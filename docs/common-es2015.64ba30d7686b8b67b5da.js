(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{RN0A:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i("tk/3"),r=i("LRne"),n=i("lJxs"),p=i("vkgz"),l=i("JIr8"),s=i("fXoL"),h=i("k+0w");let a=(()=>{class t{constructor(t,e){this.httpClient=t,this.logService=e,this.blogUrl="api/blog",this.appCommentsUrl="api/blog/id/comment",this.httpOptions={headers:new o.e({"Content-Type":"application/json"})}}getTopicList(){return this.httpClient.get(this.blogUrl)}getTopicById(t){return this.httpClient.get(this.blogUrl).pipe(Object(n.a)(e=>e.find(e=>e.id===+t)))}getBlog(){return this.httpClient.get(this.blogUrl).pipe(Object(p.a)(t=>this.logService.log(t)),Object(l.a)(this.handleError("getBlog",[])))}addBlog(t){return this.httpClient.post(this.blogUrl,t,this.httpOptions).pipe(Object(p.a)(t=>this.logService.log("added Posts w/ id="+t.id)),Object(l.a)(this.handleError("addBlog")))}deleteAppBlog(t){return this.httpClient.delete(`${this.blogUrl}/${"number"==typeof t?t:t.id}`,this.httpOptions).pipe(Object(l.a)(this.handleError("deleteBlog")))}getAppComment(){return this.httpClient.get(this.appCommentsUrl).pipe(Object(p.a)(t=>this.logService.log(t)),Object(l.a)(this.handleError("getAppComment",[])))}addAppComment(t){return this.httpClient.post(this.appCommentsUrl,t,this.httpOptions).pipe(Object(p.a)(t=>this.logService.log("added Comment")),Object(l.a)(this.handleError("addComment")))}handleError(t="operation",e){return i=>(console.error(i),this.log(`${t} failed: ${i.message}`),Object(r.a)(e))}log(t){console.warn("BlogService: "+t)}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(o.b),s.Xb(h.a))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);