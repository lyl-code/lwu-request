var v=Object.defineProperty;var R=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var q=(t,r,i)=>r in t?v(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,c=(t,r)=>{for(var i in r||(r={}))E.call(r,i)&&q(t,i,r[i]);if(R)for(var i of R(r))U.call(r,i)&&q(t,i,r[i]);return t};var S=t=>{uni.showLoading({title:t.title,mask:t.mask||!0});};var x=t=>{var r,i,e,h,n,a,d,u,f,s,o,l,y,m,g,T,b,p,k,C;return {baseUrl:t.baseUrl,debug:(r=t.debug)!=null?r:!1,loading:(i=t.loading)!=null?i:!0,loadingText:(e=t.loadingText)!=null?e:"\u8BF7\u6C42\u4E2D...",timeout:(h=t.timeout)!=null?h:6e3,method:(n=t.method)!=null?n:"GET",dataType:(a=t.dataType)!=null?a:"json",responseType:(d=t.responseType)!=null?d:"text",sslVerify:(u=t.sslVerify)!=null?u:!0,withCredentials:(f=t.withCredentials)!=null?f:!1,firstIpv4:(s=t.firstIpv4)!=null?s:!1,errorHandleByCode:t.errorHandleByCode,networkExceptionHandle:()=>{},requestSuccessResponseMsgName:(o=t.requestSuccessResponseMsgName)!=null?o:"msg",tokenStorageKeyName:(l=t.tokenStorageKeyName)!=null?l:"",tokenValue:t.tokenValue,buildQueryString:t.buildQueryString,takeTokenMethod:(y=t.takeTokenMethod)!=null?y:"header",takenTokenKeyName:(m=t.takenTokenKeyName)!=null?m:"Authorization",autoRefreshToken:!1,refreshTokenHandle:t.refreshTokenHandle,tokenExpiredCode:(g=t.tokenExpiredCode)!=null?g:403,retry:(T=t.retry)!=null?T:!1,retryCount:(b=t.retryCount)!=null?b:3,retryCountAutoOffRetry:(p=t.retryCountAutoOffRetry)!=null?p:!0,retryMaximum:(k=t.retryMaximum)!=null?k:64,retryDeadline:(C=t.retryDeadline)!=null?C:1e4}};var M=(t,r)=>{let i=Math.floor(Math.random()*1e3);return Math.min(Math.pow(2,t)*1e3+i,r)},A=t=>typeof t=="object"&&t!==null?Object.keys(t).map(r=>`${r}=${encodeURIComponent(t[r])}`).join("&"):t,w=class{constructor(r){this.currentRequestTask={abort:()=>{},onHeadersReceived:()=>{},offHeadersReceived:()=>{}};this.requestTasksName="LWU-REQUEST-TASKS";this.lock=!0;this.pending=[];this.retryCount=3;this.retryMaximum=64;this.retryTimeout=[];this.retryDeadline=1e4;this.config={baseUrl:{pro:"",dev:""},errorHandleByCode:(r,i)=>{}};if(this.config=c({},x(r)),!this.config.retry)this.retryCount=0;else if(this.config.retryCountAutoOffRetry){this.retryMaximum=this.config.retryMaximum*1e3,this.retryTimeout=[],this.retryDeadline=r.retryDeadline;for(let i=0;i<this.retryCount&&!(this.retryDeadline<0);i++){let e=M(i,this.retryMaximum);this.retryDeadline-=e,this.retryTimeout.push(e);}this.retryCount=this.retryTimeout.length;}}handleError(r,i=""){this.config.errorHandleByCode(r,i);}interceptor(r,i,e,h){uni.addInterceptor("request",{invoke:n=>{var u,f;this.config.debug&&console.warn(`\u3010LwuRequest Debug:\u8BF7\u6C42\u62E6\u622A\u3011${JSON.stringify(n)}`),this.config.loading&&S({title:(u=this.config.loadingText)!=null?u:"\u8BF7\u6C42\u4E2D..."}),(f=n==null?void 0:n.header)!=null&&f.contentType&&(n.header["content-type"]=n.header.contentType,delete n.header.contentType);let a="";process.env.NODE_ENV==="development"?a=this.config.baseUrl.dev:a=this.config.baseUrl.pro;let d=`${a}${r}`;n.method==="GET"?(n.data=this.config.buildQueryString&&this.config.buildQueryString(n.data)?this.config.buildQueryString(n.data):A(n.data),n.url=`${d}?${n.data}`):n.url=d,i&&i();},success:n=>{this.handleError(n.statusCode,n.data[this.config.requestSuccessResponseMsgName]),this.config.debug&&console.warn(`\u3010LwuRequest Debug:\u54CD\u5E94\u62E6\u622A\u3011${JSON.stringify(n)}`),e&&e();},fail:n=>{this.config.debug&&console.warn(`\u3010LwuRequest Debug:\u8BF7\u6C42\u62E6\u622A\u5931\u8D25\u3011${JSON.stringify(n)}`);},complete:n=>{uni.hideLoading(),this.config.debug&&console.warn(`\u3010LwuRequest Debug:\u8BF7\u6C42\u62E6\u622A\u5B8C\u6210\u3011${JSON.stringify(n)}`);}});}refreshToken(){this.config.refreshTokenHandle&&this.config.refreshTokenHandle().then(()=>{uni.getStorageSync("LWU-REQUEST-CALLBACK")(r=>{r();});}).catch(()=>{this.handleError(this.config.tokenExpiredCode);});}request(r,i={},e={header:{},method:this.config.method,timeout:this.config.timeout,dataType:this.config.dataType,responseType:this.config.responseType,sslVerify:this.config.sslVerify,withCredentials:this.config.withCredentials,firstIpv4:this.config.firstIpv4,retryCount:this.config.retryCount}){var n;let h=uni.getStorageSync(this.requestTasksName);return e!=null&&e.task_id&&h[e==null?void 0:e.task_id]&&(this.config.debug&&console.warn(`\u3010LwuRequest Debug\u3011\u8BF7\u6C42ID${e.task_id}\u6709\u91CD\u590D\u9879\u5DF2\u81EA\u52A8\u8FC7\u6EE4`),(n=h[e==null?void 0:e.task_id])==null||n.abort()),new Promise((a,d)=>{this.interceptor(r,e.before,e.after,e.header);let u=uni.getStorageSync(this.config.tokenStorageKeyName);(()=>new Promise((s,o)=>{u&&s(u),this.config.tokenValue?this.config.tokenValue().then(l=>{l&&s(l),s(!1);}):s("");}))().then(s=>{if(s&&(this.config.takeTokenMethod==="header"&&(e.header[this.config.takenTokenKeyName]=s),this.config.takeTokenMethod==="body"&&(i[this.config.takenTokenKeyName]=s)),this.currentRequestTask=uni.request({url:r,data:i,header:c({},e.header),method:e.method,timeout:e.timeout,dataType:e.dataType,responseType:e.responseType,sslVerify:e.sslVerify,withCredentials:e.withCredentials,firstIpv4:e.firstIpv4,success:o=>{o.statusCode!==this.config.tokenExpiredCode?a(o.data):(this.refreshToken(),uni.setStorageSync("LWU-REQUEST-CALLBACK",()=>{a(this.request(r,i,e));}));},fail:o=>{var l;this.retryCount=(l=e.retryCount)!=null?l:3,this.retryCount===0?d(o):(this.config.debug&&console.warn(`\u3010LwuRequest Debug\u3011\u81EA\u52A8\u91CD\u8BD5\u6B21\u6570\uFF1A${this.retryCount}`),this.retryCount--,setTimeout(this.request,this.retryTimeout.shift()),this.config.networkExceptionHandle&&this.config.networkExceptionHandle());}}),e!=null&&e.task_id){let o=[];o[e==null?void 0:e.task_id]=this.currentRequestTask,uni.setStorageSync(this.requestTasksName,o);}});})}get(r,i={},e={}){return this.request(r,i,c({method:"GET"},e))}post(r,i={},e={}){return this.request(r,i,c({method:"POST"},e))}put(r,i={},e={}){return this.request(r,i,c({method:"POST"},e))}delete(r,i={},e={}){return this.request(r,i,c({method:"DELETE"},e))}abort(r=""){let i=uni.getStorageSync(this.requestTasksName);i[r]?i[r].abort():this.currentRequestTask.abort();}};

export { w as Http };
