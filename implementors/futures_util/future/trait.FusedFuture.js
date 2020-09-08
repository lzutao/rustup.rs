(function() {var implementors = {};
implementors["futures_util"] = [{"text":"impl&lt;Fut:&nbsp;Future&gt; FusedFuture for Fuse&lt;Fut&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F&gt; FusedFuture for Flatten&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Flatten&lt;F, &lt;F as Future&gt;::Output&gt;: FusedFuture,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Future,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, F&gt; FusedFuture for Map&lt;Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;Fut, F&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, T&gt; FusedFuture for MapInto&lt;Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;Fut, IntoFn&lt;T&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut1, Fut2, F&gt; FusedFuture for Then&lt;Fut1, Fut2, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Flatten&lt;Map&lt;Fut1, F&gt;, Fut2&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, F&gt; FusedFuture for Inspect&lt;Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;Fut, InspectFn&lt;F&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut&gt; FusedFuture for NeverError&lt;Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;Fut, OkFn&lt;Never&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut&gt; FusedFuture for UnitError&lt;Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;Fut, OkFn&lt;()&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut&gt; FusedFuture for Shared&lt;Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Future,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut::Output: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut:&nbsp;TryFuture + FusedFuture&gt; FusedFuture for IntoFuture&lt;Fut&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut1, Fut2&gt; FusedFuture for TryFlatten&lt;Fut1, Fut2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TryFlatten&lt;Fut1, Fut2&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut1, Fut2, F&gt; FusedFuture for AndThen&lt;Fut1, Fut2, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TryFlatten&lt;MapOk&lt;Fut1, F&gt;, Fut2&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut1, Fut2, F&gt; FusedFuture for OrElse&lt;Fut1, Fut2, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TryFlattenErr&lt;MapErr&lt;Fut1, F&gt;, Fut2&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, E&gt; FusedFuture for ErrInto&lt;Fut, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MapErr&lt;Fut, IntoFn&lt;E&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, E&gt; FusedFuture for OkInto&lt;Fut, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MapOk&lt;Fut, IntoFn&lt;E&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, F&gt; FusedFuture for InspectOk&lt;Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inspect&lt;IntoFuture&lt;Fut&gt;, InspectOkFn&lt;F&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, F&gt; FusedFuture for InspectErr&lt;Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inspect&lt;IntoFuture&lt;Fut&gt;, InspectErrFn&lt;F&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, F&gt; FusedFuture for MapOk&lt;Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;IntoFuture&lt;Fut&gt;, MapOkFn&lt;F&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, F&gt; FusedFuture for MapErr&lt;Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;IntoFuture&lt;Fut&gt;, MapErrFn&lt;F&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, F, G&gt; FusedFuture for MapOkOrElse&lt;Fut, F, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;IntoFuture&lt;Fut&gt;, ChainFn&lt;MapOkFn&lt;F&gt;, ChainFn&lt;MapErrFn&lt;G&gt;, MergeResultFn&gt;&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut, F&gt; FusedFuture for UnwrapOrElse&lt;Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;IntoFuture&lt;Fut&gt;, UnwrapOrElseFn&lt;F&gt;&gt;: FusedFuture,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;F, R&gt; FusedFuture for Lazy&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnOnce(&amp;mut Context&lt;'_&gt;) -&gt; R,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; FusedFuture for Pending&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut:&nbsp;Future&gt; FusedFuture for MaybeDone&lt;Fut&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut:&nbsp;TryFuture&gt; FusedFuture for TryMaybeDone&lt;Fut&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;FusedFuture&gt; FusedFuture for OptionFuture&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; FusedFuture for Ready&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut1:&nbsp;FusedFuture, Fut2:&nbsp;FusedFuture&gt; FusedFuture for Join&lt;Fut1, Fut2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut1:&nbsp;FusedFuture, Fut2:&nbsp;FusedFuture, Fut3:&nbsp;FusedFuture&gt; FusedFuture for Join3&lt;Fut1, Fut2, Fut3&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut1:&nbsp;FusedFuture, Fut2:&nbsp;FusedFuture, Fut3:&nbsp;FusedFuture, Fut4:&nbsp;FusedFuture&gt; FusedFuture for Join4&lt;Fut1, Fut2, Fut3, Fut4&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut1:&nbsp;FusedFuture, Fut2:&nbsp;FusedFuture, Fut3:&nbsp;FusedFuture, Fut4:&nbsp;FusedFuture, Fut5:&nbsp;FusedFuture&gt; FusedFuture for Join5&lt;Fut1, Fut2, Fut3, Fut4, Fut5&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A, B&gt; FusedFuture for Select&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Future + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Future + Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A, B&gt; FusedFuture for Either&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: FusedFuture,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: FusedFuture&lt;Output = A::Output&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;St, C&gt; FusedFuture for Collect&lt;St, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: FusedStream,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Default + Extend&lt;St::Item&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;St&gt; FusedFuture for Concat&lt;St&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: FusedStream,<br>&nbsp;&nbsp;&nbsp;&nbsp;St::Item: Extend&lt;&lt;St::Item as IntoIterator&gt;::Item&gt; + IntoIterator + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;St, Fut, T, F&gt; FusedFuture for Fold&lt;St, Fut, T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: Stream,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(T, St::Item) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Future&lt;Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;St, Si&gt; FusedFuture for Forward&lt;St, Si&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Forward&lt;St, Si, St::Ok&gt;: FusedFuture,<br>&nbsp;&nbsp;&nbsp;&nbsp;St: TryStream,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;St, Fut, F&gt; FusedFuture for ForEach&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: FusedStream,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(St::Item) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Future&lt;Output = ()&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;St:&nbsp;Stream + Unpin&gt; FusedFuture for StreamFuture&lt;St&gt;","synthetic":false,"types":[]},{"text":"impl&lt;St:&nbsp;?Sized + FusedStream + Unpin, '_&gt; FusedFuture for Next&lt;'_, St&gt;","synthetic":false,"types":[]},{"text":"impl&lt;St:&nbsp;?Sized + FusedStream + Unpin, '_&gt; FusedFuture for SelectNextSome&lt;'_, St&gt;","synthetic":false,"types":[]},{"text":"impl&lt;St:&nbsp;Stream, '_&gt; FusedFuture for Peek&lt;'_, St&gt;","synthetic":false,"types":[]},{"text":"impl&lt;St, Fut, F&gt; FusedFuture for ForEachConcurrent&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: Stream,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(St::Item) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Future&lt;Output = ()&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;St:&nbsp;?Sized + TryStream + Unpin + FusedStream, '_&gt; FusedFuture for TryNext&lt;'_, St&gt;","synthetic":false,"types":[]},{"text":"impl&lt;St, C&gt; FusedFuture for TryCollect&lt;St, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: TryStream + FusedStream,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Default + Extend&lt;St::Ok&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;St, Fut, T, F&gt; FusedFuture for TryFold&lt;St, Fut, T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: TryStream,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(T, St::Ok) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: TryFuture&lt;Ok = T, Error = St::Error&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;St, Fut, F&gt; FusedFuture for TryForEachConcurrent&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: TryStream,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(St::Ok) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Future&lt;Output = Result&lt;(), St::Error&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized, '_&gt; FusedFuture for MutexLockFuture&lt;'_, T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()