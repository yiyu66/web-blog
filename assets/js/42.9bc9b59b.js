(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{444:function(v,a,t){"use strict";t.r(a);var r=t(2),_=Object(r.a)({},(function(){var v=this,a=v._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"进程、线程、协程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程、线程、协程"}},[v._v("#")]),v._v(" 进程、线程、协程")]),v._v(" "),a("h2",{attrs:{id:"什么是进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是进程"}},[v._v("#")]),v._v(" 什么是进程？")]),v._v(" "),a("p",[v._v("进程"),a("strong",[v._v("是cpu分配资源的最小单位")]),v._v("；\n"),a("strong",[v._v("一个进程就是一个程序的运行实例")]),v._v("。详细解释就是，启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫进程。")]),v._v(" "),a("h2",{attrs:{id:"什么是线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是线程"}},[v._v("#")]),v._v(" 什么是线程？")]),v._v(" "),a("p",[v._v("线程 "),a("strong",[v._v("是cpu调度的最小单位")]),v._v("；（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）")]),v._v(" "),a("ol",[a("li",[v._v("进程中的任意一线程执行出错，都会导致整个进程的崩溃。")]),v._v(" "),a("li",[v._v("线程之间共享进程中的数据。")]),v._v(" "),a("li",[v._v("当一个进程关闭之后，操作系统会回收进程所占用的内存。")]),v._v(" "),a("li",[v._v("进程之间的内容相互隔离。")])]),v._v(" "),a("h2",{attrs:{id:"什么是协程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是协程"}},[v._v("#")]),v._v(" 什么是协程？")]),v._v(" "),a("p",[v._v("是一种比线程更加轻量级的存在，一个线程也可以拥有多个协程。协程的调度完全由用户控制。协程拥有自己的寄存器上下文和栈。\n最重要的是，协程不是被操作系统内核所管理，而完全是由程序所控制（也就是在用户态执行）。\nJavaScript 中协程是由一个生成器函数实现的。yield和next()方法就能不断的交出和恢复函数的执行权")]),v._v(" "),a("h2",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[v._v("#")]),v._v(" 扩展")]),v._v(" "),a("blockquote",[a("p",[v._v("引申到浏览器多进程，JS单线程事件循环，web worker")])]),v._v(" "),a("h3",{attrs:{id:"浏览器是多进程的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是多进程的"}},[v._v("#")]),v._v(" 浏览器是多进程的")]),v._v(" "),a("p",[v._v("2007年以前浏览器都是单进程的\n放在浏览器中，每打开一个tab页面，其实就是新开了一个进程，在这个进程中，还有ui渲染线程，js引擎线程，http请求线程等。 所以，浏览器是一个多进程的。")]),v._v(" "),a("p",[v._v("最新的 Chrome 浏览器包括：1 个浏览器（Browser）主进程、1 个 GPU 进程、1 个网络（NetWork）进程、多个渲染进程和多个插件进程。\n"),a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/b6/fc/b61cab529fa31301bde290813b4587fc.png",alt:"image"}})]),v._v(" "),a("p",[v._v("如果打开了两个网站，通常情况下会是五个进程，但是有很多其他情况：\n1:如果页面里有iframe的话，iframe也会运行在单独的进程中！\n2:如果页面里有插件，同样插件也需要开启一个单独的进程！\n3:如果你装了扩展的话，扩展也会占用进程\n4:如果2个页面属于同一站点的话，并且从a页面中打开的b页面，那么他们会公用一个渲染进程")]),v._v(" "),a("h3",{attrs:{id:"大家都在说js是单线程的-但是为什么要设计成单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大家都在说js是单线程的-但是为什么要设计成单线程"}},[v._v("#")]),v._v(" 大家都在说js是单线程的，但是为什么要设计成单线程？")]),v._v(" "),a("p",[v._v("这主要和js的用途有关，js是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作dom；这决定了它只能是单线程，否则会带来很复杂的同步问题。")]),v._v(" "),a("p",[v._v("举个例子："),a("strong",[v._v("如果js被设计了多线程，如果有一个线程要修改一个dom元素，另一个线程要删除这个dom元素，此时浏览器就会一脸茫然，不知所措")]),v._v("。")]),v._v(" "),a("p",[v._v("所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。")]),v._v(" "),a("blockquote",[a("p",[v._v("为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。")])]),v._v(" "),a("h2",{attrs:{id:"进程的通信方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程的通信方式"}},[v._v("#")]),v._v(" 进程的通信方式")]),v._v(" "),a("p",[v._v("匿名管道（Pipe）和命名管道（FIFO）、消息队列、共享内存、信号量、信号、套接字\n"),a("a",{attrs:{href:"https://notebook.grayson.top/project-26/doc-324/",target:"_blank",rel:"noopener noreferrer"}},[v._v("参考文章"),a("OutboundLink")],1)]),v._v(" "),a("ol",[a("li",[v._v("匿名管道（Pipe）,管道传输数据是单向的，只能在具有亲缘关系的进程间使用")]),v._v(" "),a("li",[v._v("命名管道（FIFO），是一种文件类型；可以实现任意关系的进程间的通信。")]),v._v(" "),a("li",[v._v("消息队列，是消息的链接表，存放在内核中；可以实现任意进程间的通信。通过系统调用函数来实现消息发送和接收之间的同步，无需考虑同步问题。缺点：信息的复制需要额外消耗 CPU 的时间，不适宜信息量大或操作频繁的场合。")]),v._v(" "),a("li",[v._v("共享内存。优点节约空间操作方便，缺点就是多个进程同时使用的时候会拥挤")]),v._v(" "),a("li",[v._v("信号量，是一个计数器；信号量其实是一个整型的计数器，主要用于实现进程间的互斥与同步，而不是用于缓存进程间通信的数据。")]),v._v(" "),a("li",[v._v("信号\n信号是一种比较复杂的通信方式，用于通知接收进程某个事件已经发生。\n在操作系统中，不同信号用不同的值表示，每个信号设置相应的函数，一旦进程发送某个信号给另一个进程，另一个进程将执行相应的函数进行处理。")]),v._v(" "),a("li",[v._v("Socket,前面提到的管道、消息队列、共享内存、信号量和信号都是在同一台主机上进行进程间通信，那要想跨网络与不同主机上的进程之间通信，就需要 Socket 通信了。")])]),v._v(" "),a("h2",{attrs:{id:"cpu进程调度算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu进程调度算法"}},[v._v("#")]),v._v(" CPU进程调度算法")]),v._v(" "),a("blockquote",[a("p",[v._v("一、先到先服务调度：\n二、最短作业优先调度：\n三、优先级调度：\n四、轮转调度：\n五、多级队列调度：\n六、多级反馈队列调度：")])]),v._v(" "),a("p",[v._v("一、先到先服务调度：\nFirst Come，First Served(FCFS)")]),v._v(" "),a("p",[v._v("定义：先请求CPU的进程首先分配到CPU。FCFS策略可以通过FIFO队列轻松实现。")]),v._v(" "),a("p",[v._v("护航效果：其他所有进程会等待一个大进程释放CPU")]),v._v(" "),a("p",[v._v("非抢占式：一旦CPU分配给了一个进程，该进程就会使用CPU知道释放CPU为止。")]),v._v(" "),a("p",[v._v("二、最短作业优先调度：\nShort Job First （SJF）")]),v._v(" "),a("p",[v._v("定义：调度取决于进程的下次CPU执行长度，选择更短的作业优先执行。可以证明最短作业优先调度是最优的。")]),v._v(" "),a("p",[v._v("问题：SJF算法最难的是如何知道下次CPU执行的长度。可以将用户提交作业时指定的进程时限作为长度。但是在这种情况下用户会精确估计进程时间，来使得任务尽早执行。过小的值会引起时限超出错误，进而重新提交。所以SJF调度经常用于长期调度。\nSJF算法也可能导致饥饿：长作业无限等待CPU。")]),v._v(" "),a("p",[v._v("抢占？：SJF算法可以是抢占的或者非抢占的，当一个新进程达到就绪队列而以前的进程正在执行时，如果新进程的下次CPU执行比当前运行进程的尚未完成的CPU执行还小，那么抢占SJF算法会抢占当前进程，非抢占SJF算法会允许当前运行进程完成执行。抢占SJF调度又称为最短剩余时间优先。")]),v._v(" "),a("p",[v._v("三、优先级调度：\npriority scheduling")]),v._v(" "),a("p",[v._v("定义：每个进程都有一个优先级与其关联，具有最高优先级的进程先分配CPU，具有相同优先级的进程按FCFS调度。")]),v._v(" "),a("p",[v._v("（SJF调度可以看做是以作业长度的大小为优先级的优先级调度）")]),v._v(" "),a("p",[v._v("抢占？：优先级调度可以是抢占的或者非抢占的。")]),v._v(" "),a("p",[v._v("问题：低优先级的进程可能会无限等待CPU，称之为无穷阻塞或饥饿。解决的办法是老化：逐渐增加等待很长时间的进程的优先级。")]),v._v(" "),a("p",[v._v("四、轮转调度：\nRound Robin （RR算法）")]),v._v(" "),a("p",[v._v("定义：轮转调度算法是专门为分时系统设计的。在FCFS的基础上增加了时间片以抢占切换进程。")]),v._v(" "),a("p",[v._v("RR策略的平均等待时间比较长。")]),v._v(" "),a("p",[v._v("RR调度算法是抢占式的。")]),v._v(" "),a("p",[v._v("问题：RR算法的性能很大程度取决于时间片的大小。时间片过大，RR算法和FCFS算法一样；过小，则导致大量的上下文切换。\n上下文切换时间一般少于10ms，时间片一般设置为10~100ms。\n根据经验，80%的CPU执行应该小于时间片。")]),v._v(" "),a("p",[v._v("五、多级队列调度：\n多级队列算法允许多个不同算法用于不同类型的进程。定义不同优先级的队列，但是一个进程会被永久分配到一个队列。")]),v._v(" "),a("p",[v._v("例如：前台的任务更关心响应时间，因为前台任务是与用户直接进行交互的，需要快速响应用户的请求，所以前台队列使用RR算法；后台任务更关心周转时间，需要快速的结束任务的，可以使用FCFS或者SJF算法。")]),v._v(" "),a("p",[v._v("队列之间应有调度，通常采用固定的优先级抢占调度。如图，只有前台任务没有时才调度后台任务。\n也可以在队列间划分时间片，如前台队列有80%的CPU时间，队列中进行RR调度；后台队列有20%的CPU时间，用FCFS或者SJF调度。")]),v._v(" "),a("p",[v._v("六、多级反馈队列调度：\n允许进程在队列间切换。")]),v._v(" "),a("p",[v._v("如果一个进程消耗过多的CPU时间，将会被移动到更低的优先级队列，如果一个进程等待时间过久，会被移到更高优先级队列。")]),v._v(" "),a("h2",{attrs:{id:"浏览器内核是多线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核是多线程"}},[v._v("#")]),v._v(" 浏览器内核是多线程")]),v._v(" "),a("p",[v._v("浏览器内核是多线程，在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成：")]),v._v(" "),a("p",[v._v("GUI 渲染线程\nJavaScript 引擎线程\n定时触发器线程\n事件触发线程\n异步 http 请求线程")]),v._v(" "),a("h2",{attrs:{id:"gui-渲染线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gui-渲染线程"}},[v._v("#")]),v._v(" GUI 渲染线程")]),v._v(" "),a("p",[v._v("GUI 渲染线程负责渲染浏览器界面 HTML 元素，当界面需要重绘(Repaint)或由于某种操作引发回流（reflow）时,该线程就会执行。在 JavaScript 引擎运行脚本期间，GUI 渲染线程都是处于挂起状态的，也就是说被”冻结“了。")]),v._v(" "),a("h2",{attrs:{id:"javascript-引擎线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-引擎线程"}},[v._v("#")]),v._v(" JavaScript 引擎线程")]),v._v(" "),a("p",[v._v("JavaScript 引擎，也可以称为 JS 内核，主要负责处理 JavaScript 脚本程序，例如 V8 JavaScript 引擎线程理所当然是负责解析 JavaScript 脚本，运行代码。")]),v._v(" "),a("p",[v._v("JavaScript 是单线程的#\nJavaScript 是单线程的, 那么为什么 JavaScript 要是单线程的？")]),v._v(" "),a("p",[v._v("这是因为 JavaScript 这门脚本语言诞生的使命所致：JavaScript 为处理页面中用户的交互，以及操作 DOM 树、CSS 样式树来给用户呈现一份动态而丰富的交互体验和服务器逻辑的交互处理。如果 JavaScript 是多线程的方式来操作这些 UI DOM，则可能出现 UI 操作的冲突；")]),v._v(" "),a("p",[v._v("如果 JavaScript 是多线程的话，在多线程的交互下，处于 UI 中的 DOM 节点就可能成为一个临界资源，假设存在两个线程同时操作一个 DOM，一个负责修改一个负责删除，那么这个时候就需要浏览器来裁决如何生效哪个线程的执行结果。当然我们可以通过锁来解决上面的问题。但为了避免因为引入了锁而带来更大的复杂性，JavaScript 在最初就选择了单线程执行。")]),v._v(" "),a("h2",{attrs:{id:"gui-渲染线程-与-javascript-引擎线程互斥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gui-渲染线程-与-javascript-引擎线程互斥"}},[v._v("#")]),v._v(" GUI 渲染线程 与 JavaScript 引擎线程互斥")]),v._v(" "),a("p",[v._v("由于 JavaScript 是可操纵 DOM 的，如果在修改这些元素属性同时渲染界面（即 JavaScript 线程和 UI 线程同时运行），那么渲染线程前后获得的元素数据就可能不一致了。因此为了防止渲染出现不可预期的结果，浏览器设置 GUI 渲染线程与 JavaScript 引擎为互斥的关系，当 JavaScript 引擎执行时 GUI 线程会被挂起，GUI 更新会被保存在一个队列中等到引擎线程空闲时立即被执行。")]),v._v(" "),a("p",[v._v("JS 阻塞页面加载#\n从上面我们可以推理出，由于 GUI 渲染线程与 JavaScript 执行线程是互斥的关系，当浏览器在执行 JavaScript 程序的时候，GUI 渲染线程会被保存在一个队列中，直到 JS 程序执行完成，才会接着执行。因此如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。")]),v._v(" "),a("h2",{attrs:{id:"定时触发器线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时触发器线程"}},[v._v("#")]),v._v(" 定时触发器线程")]),v._v(" "),a("p",[v._v("浏览器定时计数器（setTimeout 和 setInterval）并不是由 JavaScript 引擎计数的, 因为 JavaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确, 因此通过单独线程来计时并触发定时是更为合理的方案。")]),v._v(" "),a("h2",{attrs:{id:"事件触发线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件触发线程"}},[v._v("#")]),v._v(" 事件触发线程")]),v._v(" "),a("p",[v._v("当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理。这些事件可以是当前执行的代码块如定时任务、也可来自浏览器内核的其他线程如鼠标点击、AJAX 异步请求等，但由于 JS 的单线程关系所有这些事件都得排队等待 JS 引擎处理。")]),v._v(" "),a("h2",{attrs:{id:"异步-http-请求线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步-http-请求线程"}},[v._v("#")]),v._v(" 异步 http 请求线程")]),v._v(" "),a("p",[v._v("在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求， 将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件放到 JavaScript 引擎的处理队列中等待处理。")]),v._v(" "),a("h2",{attrs:{id:"browser-进程和-renderer-进程的通信过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser-进程和-renderer-进程的通信过程"}},[v._v("#")]),v._v(" Browser 进程和 Renderer 进程的通信过程")]),v._v(" "),a("p",[v._v("打开浏览器的一个 tab 页时，我们看下其中的大致过程：")]),v._v(" "),a("p",[v._v("Browser 进程收到用户请求，通过网络下载获取页面内容，然后将该任务通过 RendererHost 接口传递给 Renderer 进程；\nRenderer 进程的 Renderer 接口收到消息，简单解释后，交给 GUI 渲染线程开始渲染；\nGUI 渲染线程接收请求，加载网页并渲染网页，这个过程中可能需要 Browser 进程获取资源和 GPU 进程来帮助渲染，也可能会有 JS 引擎线程操作 DOM（可能造成回流并重绘）；\n最后 Renderer 进程将结果传递给 Browser 进程；\nBrowser 进程接收到结果，并将结果绘制出来。")])])}),[],!1,null,null,null);a.default=_.exports}}]);