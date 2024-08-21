import{_ as s,o as l,c as e,V as a}from"./chunks/framework.df15cb86.js";const u=JSON.parse('{"title":"更新日志","description":"","frontmatter":{},"headers":[],"relativePath":"changelog.md","filePath":"changelog.md"}'),o={name:"changelog.md"},n=a(`<h1 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-label="Permalink to &quot;更新日志&quot;">​</a></h1><hr><div class="timeline-dot"><span class="timeline-dot-title">1.8.4 (2024-08-21)</span><ul><li><code>before</code> 拦截器支持修改请求参数。<a href="./config/global.html#before">详情</a></li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.8.3 (2024-05-20)</span><ul><li>新增 <code>customData</code> 请求配置项。<a href="./config/request.html#customdata">详情</a></li><li>新增 <code>-1</code> 状态码。<a href="./errorCode.html">详情</a></li><li>优化 <code>请求失败拦截</code> 逻辑，以解决 <code>服务器拒绝请求</code> 时被拦截为网络连接异常的问题。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.8.2 (2024-04-15)</span><ul><li><p><code>before</code>, <code>after</code>, <code>errorHandleByCode</code>, <code>apiErrorInterception</code> 拦截器新增 <code>reject</code> 回调参数，方便自定义抛出异常。抛出的异常可以在请求的 <code>catch</code> 接收</p><p>这里以 <code>after</code> 拦截器为例进行演示，其他拦截器同理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// ...其他配置</span></span>
<span class="line"><span style="color:#A6ACCD;">after: (res: AfterRequestCallbackResult, reject: (arg0?: string) =&gt; void) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 其他自定义业务逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">    reject(&#39;手动抛出异常测试&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>优化请求拦截器不返回内容时异常问题。</p></li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.8.1 (2024-01-11)</span><ul><li>优化 <code>loading</code> 为 <code>false</code> 时微信开发者控制台报错问题。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.8.0 (2023-08-11)</span><ul><li>新增 <code>originalResponse</code> 请求配置项。<a href="/config/request.html#originalresponse">详情</a></li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.7.0 (2023-07-27)</span><ul><li>新增 <code>env</code> 运行环境配置项，支持 <code>原生h5</code> 运行环境和 <code>原生微信小程序</code> 运行环境。<a href="/config/global.html#env">详情</a></li><li><code>timeout</code> 配置项默认值调整为 <code>60 * 1000</code>。<a href="/config/global.html#timeout">详情</a></li><li>新增 <code>loadingStartTime</code> 配置项。<a href="/config/global.html#loadingstarttime">详情</a></li><li>优化 <code>after</code> 配置项。<a href="/config/global.html#after">详情</a></li><li>优化 <code>before</code> 配置项。<a href="/config/global.html#before">详情</a></li><li>优化其他一些已知问题。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.6.5 (2023-07-17)</span><ul><li>配置项 <code>xhrCode</code> 和 <code>tokenExpiredCode</code> 新增 <code>string</code> 类型，<a href="https://github.com/kviewui/lwu-request/issues/17" target="_blank" rel="noreferrer">详情</a></li><li>优化其他一些已知问题。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.6.4 (2023-07-05)</span><ul><li>修复 <code>header</code> 默认的 <code>Authorization</code> 自动携带参数为 <code>true</code> 的bug。</li><li>修复 <code>autoTakeToken</code> 对 <code>header</code> 参数方式无效的bug。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.6.3 (2023-07-04)</span><ul><li>请求配置增加 <code>autoTakeToken</code> 是否自动携带 <code>token</code> 配置项。<a href="/config/request.html#autotaketoken">详情</a></li><li>优化其他一些已知问题。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.6.2 (2023-06-28)</span><ul><li>修复 <code>xhrCode</code> 非0，<code>xhrCodeName</code> 等于0的情况下，非预期结果的bug。<a href="https://github.com/kviewui/lwu-request/pull/13" target="_blank" rel="noreferrer">详情</a></li><li>优化其他一些已知问题。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.6.1 (2023-06-21)</span><ul><li>修复 <code>refreshTokenHandle</code> 执行后没有自动发起请求的bug。</li><li>优化自动刷新token的实现，开发者不再需要手动处理token，示例如下：</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">refreshTokenHandle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">refreshToken</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 打印旧的Token</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">refreshToken</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">旧的token</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">// 模拟获取新的token</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FbLKVJLO6PLrPxzZeXOa67ftPmdvXywm8vU4y59HbWY=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>新增 <code>uri</code> API方法。<a href="/api/uri.html">详情</a>。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.5.11 (2023-06-07)</span><ul><li>新增 <code>taskIdValue</code> 自定义获取task_id处理程序配置项。<a href="https://github.com/kviewui/lwu-request/pull/11" target="_blank" rel="noreferrer">详情</a>，<a href="/config/global.html#taskidvalue">文档地址</a></li><li>新增 <code>tokenExpiredCodeType</code> token失效错误代码类型配置项。<a href="/config/global.html#tokenexpiredcodetype">文档地址</a></li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.5.1 (2023-06-06)</span><ul><li>删除header中的默认 <code>contentType</code> 字段默认值。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.5.0 (2023-06-05)</span><ul><li>请求前拦截 <code>before</code> 增加原始请求内容。</li><li>增加 <code>setHeader</code> API方法。<a href="/api/setHeader.html">详情</a>。</li><li>优化其他一些已知问题。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.4.13 (2023-05-29)</span><ul><li>优化自定义请求后拦截，增加原始响应内容。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.4.12 (2023-05-29)</span><ul><li>优化网络请求异常时的 <code>catch</code> 捕获逻辑。</li><li>优化 <code>upload</code> API的header公共继承问题。<a href="https://github.com/kviewui/lwu-request/issues/9" target="_blank" rel="noreferrer">详情</a></li><li>优化其他一些已知问题。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.4.11 (2023-05-26)</span><ul><li>修复 <code>put</code> 方法bug。<a href="https://github.com/kviewui/lwu-request/issues/6" target="_blank" rel="noreferrer">详情</a></li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.4.10 (2023-05-25)</span><ul><li>新增 <code>upload</code> 文件上传接口。<a href="/api/upload.html">详情</a></li><li>新增 <code>download</code> 文件下载接口。<a href="/api/download.html">详情</a></li><li>新增 <code>uploadAliyunOSS</code> 异步直传阿里云OSS接口。<a href="/api/aliyun.html#uploadaliyunoss">详情</a></li><li>新增 <code>uploadAliyunOSSSync</code> 同步直传阿里云OSS接口。<a href="/api/aliyun.html#uploadaliyunosssync">详情</a></li><li>修复一些已知问题。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.3.11 (2023-05-22)</span><ul><li>修复因新增 <code>config</code> 请求API方法引起的bug。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.3.0 (2023-05-22)</span><ul><li>优化 <code>apiErrorInterception</code> 拦截执行机制，当设置了 <code>xhrCode</code> 时API返回成功状态时拦截不再返回内容。</li><li>请求配置增加 <code>loading</code> 和 <code>loadingText</code>，方便对单个请求设置显示的loading。<a href="/config/request.html#loading">详情</a>。</li><li>增加 <code>config</code> 请求API方法。<a href="/api/config.html">详情</a>。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.2.0 (2023-05-19)</span><ul><li>增加 <code>xhrCode</code> API成功状态码配置项。<a href="/config/global.html#xhrcode">详情</a></li><li>增加 <code>xhrCodeName</code> 语义化接口响应状态码字段名称配置项。<a href="/config/global.html#xhrcodename">详情</a></li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.1.13 (2023-05-18)</span><ul><li>修复多个GET请求时请求冲突问题。<a href="https://github.com/kviewui/lwu-request/issues/3" target="_blank" rel="noreferrer">详情</a></li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.1.12 (2023-05-17)</span><ul><li>优化 <code>apiErrorInterception</code> 重复执行问题。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.1.1 (2023-05-16)</span><ul><li>修复 <code>GET</code> 请求时未设置 <code>header</code>导致的bug。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.1.0 (2023-05-12)</span><ul><li>新增 <code>apiErrorInterception</code> API错误拦截处理程序配置项，方便用户统一拦截处理API业务异常，示例如下：</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">msg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./prompt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#FFCB6B;">apiErrorInterception</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UniApp</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">RequestSuccessCallbackResult</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#82AAFF;">msg</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请求失败</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>调整 <code>errorHandleByCode</code> 配置项为非必填，简化初始化配置内容。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.0.61 (2023-04-14)</span><ul><li>更新README说明文档</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.0.6 (2023-04-14)</span><ul><li>修复已知问题</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.0.5 (2023-04-14)</span><ul><li>修复 <code>GET</code> 请求时因小程序环境不支持 <code>URLSearchParams</code> 导致构建参数失败的bug。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.0.4 (2023-04-02)</span><ul><li>修复自定义 <code>header</code> 不生效bug</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.0.31 (2023-04-02)</span><ul><li>新增请求参数类型 <code>RequestOptions</code> 导出</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.0.3 (2023-03-31)</span><ul><li>修复因增加 <code>tokenValue</code> 属性后没有 <code>token</code> 返回时程序中断的bug，并完善携带token的配置demo。</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.0.2 (2023-03-28)</span><ul><li>新增 <code>tokenValue</code> 属性，优化旧版本指定token存储key的非人性化方式，<code>tokenValue</code> 直接通过自己定义Promise返回最新token即可，示例如下：</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tokenVlaue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">_</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">// 获取最新token演示</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">token</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getToken</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">token</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">token</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li><p>新增 <code>buildQueryString</code> 属性，支持自定义构建URL参数的方式，默认使用 <code>NodeJS</code>内置对象 <code>URLSearchParams</code> 转化，可以选择 <code>qs</code> 插件方式，需要手动安装 <code>qs</code> 插件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// qs 插件转化示例</span></span>
<span class="line"><span style="color:#A6ACCD;">import qs from &#39;qs&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">return qs.stringify(obj);</span></span></code></pre></div></li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">1.0.1 (2023-03-26)</span><ul><li>优化已知问题</li></ul></div>`,35),t=[n];function p(c,i,r,d,y,F){return l(),e("div",null,t)}const m=s(o,[["render",p]]);export{u as __pageData,m as default};