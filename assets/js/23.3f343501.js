(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{424:function(a,e,t){"use strict";t.r(e);var s=t(2),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"强缓存、协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存、协商缓存"}},[a._v("#")]),a._v(" 强缓存、协商缓存")]),a._v(" "),e("p",[a._v("这个文章讲的很详细，链接："),e("a",{attrs:{href:"https://www.jianshu.com/p/fb59c770160c",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.jianshu.com/p/fb59c770160c"),e("OutboundLink")],1)]),a._v(" "),e("ul",[e("li",[a._v("强缓存：直接从本地副本比对读取，不去请求服务器，返回的状态码是 200。")]),a._v(" "),e("li",[a._v("协商缓存：会去服务器比对，若没改变才直接读取本地缓存，返回的状态码是 304。\n"),e("img",{attrs:{src:"https://qianduan.shop/static/images/24_1.webp",alt:"image"}})])]),a._v(" "),e("h2",{attrs:{id:"怎么设置强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么设置强缓存"}},[a._v("#")]),a._v(" 怎么设置强缓存？")]),a._v(" "),e("h3",{attrs:{id:"_1-expires-http1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-expires-http1-0"}},[a._v("#")]),a._v(" 1.expires(http1.0)")]),a._v(" "),e("p",[a._v("当我们请求一个资源，服务器返回时，可以在 Response Headers 中增加 expires 字段表示资源的过期时间。")]),a._v(" "),e("p",[e("code",[a._v("expires: Thu, 03 Jan 2019 11:43:04 GMT")])]),a._v(" "),e("h3",{attrs:{id:"_2-cache-control-http1-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-cache-control-http1-1"}},[a._v("#")]),a._v(" 2.cache-control(http1.1)")]),a._v(" "),e("p",[a._v("cache-control 主要有 max-age 和 s-maxage、public 和 private、no-cache 和 no-store 等值。\n设置强缓存：\n"),e("code",[a._v("cache-control: public, max-age=3600, s-maxage=3600")])]),a._v(" "),e("ol",[e("li",[e("p",[a._v("max-age 和 s-maxage\n两者是 cache-control 的主要字段，它们是一个数字，表示资源过了多少秒之后变为无效。在浏览器中，max-age 和 s-maxage 都起作用，而且 s-maxage 的优先级高于 max-age。在代理服务器中，只有 s-maxage 起作用。 可以通过设置 max-age 为 0 表示立马过期来向服务器请求资源。")])]),a._v(" "),e("li",[e("p",[a._v("public 和 private\npublic 表示该资源可以被所有客户端和代理服务器缓存，而 private 表示该资源仅能客户端缓存。默认值是 private，当设置了 s-maxage 的时候表示允许代理服务器缓存，相当于 public。")])]),a._v(" "),e("li",[e("p",[a._v("no-cache 和 no-store\nno-cache 表示的是不直接询问浏览器缓存情况，而是去向服务器验证当前资源是否更新（即协商缓存）。no-store 则更狠，完全不使用缓存策略，不缓存请求或响应的任何内容，直接向服务器请求最新。由于两者都不考虑缓存情况而是直接与服务器交互，所以当 no-cache 和 no-store 存在时会直接忽略 max-age 等。")])])]),a._v(" "),e("h3",{attrs:{id:"_3-pragma"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-pragma"}},[a._v("#")]),a._v(" 3.pragma")]),a._v(" "),e("p",[a._v("既然讲到了 no-cache 和 no-store，就顺便把 pragma 也讲了。他的值有 no-cache 和 no-store，表示意思同 cache-control，优先级高于 cache-control 和 expires，即三者同时出现时，先看 pragma -> cache-control -> expires。")]),a._v(" "),e("h2",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),e("p",[a._v("上面的 expires 和 cache-control 都会访问本地缓存直接验证看是否过期，如果没过期直接使用本地缓存，并返回 200。但如果设置了 no-cache 和 no-store 则本地缓存会被忽略，会去请求服务器验证资源是否更新，如果没更新才继续使用本地缓存，此时返回的是 304，这就是协商缓存。协商缓存主要包括 "),e("code",[a._v("last-modified")]),a._v(" 和 "),e("code",[a._v("etag")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"_1、last-modified"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、last-modified"}},[a._v("#")]),a._v(" 1、last-modified")]),a._v(" "),e("p",[e("code",[a._v("last-modified")]),a._v(" 记录资源最后修改的时间。启用后，请求资源之后的响应头会增加一个 "),e("code",[a._v("last-modified")]),a._v(" 字段，如下：")]),a._v(" "),e("p",[e("code",[a._v("last-modified: Thu, 20 Dec 2018 11:36:00 GMT")])]),a._v(" "),e("p",[a._v("当再次请求该资源时，请求头中会带有 if-modified-since 字段，值是之前返回的 "),e("code",[a._v("last-modified")]),a._v(" 的值，如：if-modified-since:Thu, 20 Dec 2018 11:36:00 GMT。服务端会对比该字段和资源的最后修改时间，若一致则证明没有被修改，告知浏览器可直接使用缓存并返回 304；若不一致则直接返回修改后的资源，并修改 "),e("code",[a._v("last-modified")]),a._v(" 为新的值。")]),a._v(" "),e("p",[a._v("但 "),e("code",[a._v("last-modified")]),a._v(" 有以下两个缺点：")]),a._v(" "),e("p",[a._v("只要编辑了，不管内容是否真的有改变，都会以这最后修改的时间作为判断依据，当成新资源返回，从而导致了没必要的请求响应，而这正是缓存本来的作用即避免没必要的请求。\n时间的精确度只能到秒，如果在一秒内的修改是检测不到更新的，仍会告知浏览器使用旧的缓存。")]),a._v(" "),e("h3",{attrs:{id:"_2、etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、etag"}},[a._v("#")]),a._v(" 2、etag")]),a._v(" "),e("p",[a._v("为了解决 "),e("code",[a._v("last-modified")]),a._v(" 上述问题，有了 "),e("code",[a._v("etag")]),a._v("。 "),e("code",[a._v("etag")]),a._v(" 会基于资源的内容编码生成一串唯一的标识字符串，只要内容不同，就会生成不同的 "),e("code",[a._v("etag")]),a._v("。启用 "),e("code",[a._v("etag")]),a._v(" 之后，请求资源后的响应返回会增加一个 "),e("code",[a._v("etag")]),a._v(" 字段，如下：")]),a._v(" "),e("p",[e("code",[a._v('etag: "FllOiaIvA1f-ftHGziLgMIMVkVw_"')]),a._v("\n当再次请求该资源时，请求头会带有 if-none-match 字段，值是之前返回的 "),e("code",[a._v("etag")]),a._v(' 值，如：if-none-match:"FllOiaIvA1f-ftHGziLgMIMVkVw_"。服务端会根据该资源当前的内容生成对应的标识字符串和该字段进行对比，若一致则代表未改变可直接使用本地缓存并返回 304；若不一致则返回新的资源（状态码200）并修改返回的 '),e("code",[a._v("etag")]),a._v(" 字段为新的值。")]),a._v(" "),e("p",[a._v("可以看出 "),e("code",[a._v("etag")]),a._v(" 比 "),e("code",[a._v("last-modified")]),a._v(" 更加精准地感知了变化，所以 "),e("code",[a._v("etag")]),a._v(" 优先级也更高。不过从上面也可以看出 "),e("code",[a._v("etag")]),a._v(" 存在的问题，就是每次生成标识字符串会增加服务器的开销。所以要如何使用 "),e("code",[a._v("last-modified")]),a._v(" 和 "),e("code",[a._v("etag")]),a._v(" 还需要根据具体需求进行权衡。")]),a._v(" "),e("p",[a._v('Nginx官方默认的ETag计算方式是为"文件最后修改时间16进制-文件长度16进制"。例：ETag： “59e72c84-2404”')]),a._v(" "),e("h3",{attrs:{id:"访问刷新分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问刷新分析"}},[a._v("#")]),a._v(" 访问刷新分析")]),a._v(" "),e("p",[a._v("我们将访问和刷新分为以下三种情况：")]),a._v(" "),e("ul",[e("li",[a._v("标签进入、输入url回车进入")]),a._v(" "),e("li",[a._v("按刷新按钮、F5 刷新、网页右键“重新加载”")]),a._v(" "),e("li",[a._v("ctrl + F5 强制刷新\n假设当前有这么一个 index 页面，返回的响应信息如下：")])]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("cache"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("control"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" max"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("age"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("72000")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("expires")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Tue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(" Nov "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2018")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("41")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("GMT")]),a._v("\nlast"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("modified"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Tue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(" Nov "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2018")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("00")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("41")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("GMT")]),a._v("\n")])])]),e("p",[a._v("1、标签进入、输入url回车进入\n这种情况下会根据实际设计的缓存策略去判断。")]),a._v(" "),e("p",[a._v("由于该例没有设置 no-cache 和 no-store，所以默认先走强缓存路线。根据 cache-control （expires 优先级低）判断缓存是否过期，若没有过期则此时返回 200(from cache)。\n若本地缓存已经过期再走协商缓存路线，根据之前的 "),e("code",[a._v("last-modified")]),a._v(" 值去与服务器比对，若这个时间之后没有改过则去读取本地缓存，返回 304(not modified)。\n否则返回新的资源，状态码 200(ok)，并更新返回响应的 "),e("code",[a._v("last-modified")]),a._v(" 值。")]),a._v(" "),e("p",[a._v("2、按刷新按钮、F5 刷新、网页右键“重新加载”\n这种情况下，实际是浏览器将 cache-control 的 max-age 直接设置成了 0，让缓存立即过期，直接走协商缓存路线。发送的请求头如下：")]),a._v(" "),e("p",[a._v("cache-control: max-age=0\nif-modified-since: Tue, 20 Nov 2018 00:41:14 GMT\n3、ctrl + F5 强制刷新\n强制刷新的情况下，浏览器会强行设置 no-cache，强制获取最新的资源，就连 if-modified-since 等其他缓存协议字段都会被吃掉。此时发送的请求头如下：")]),a._v(" "),e("p",[a._v("cache-control: no-cache\npragma: no-cache")])])}),[],!1,null,null,null);e.default=r.exports}}]);