(function() {var implementors = {};
implementors["buf_redux"] = [{"text":"impl&lt;R:&nbsp;Read, P:&nbsp;ReaderPolicy&gt; BufRead for BufReader&lt;R, P&gt;","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl&lt;B:&nbsp;Buf + Sized&gt; BufRead for Reader&lt;B&gt;","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; BufRead for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: BufRead,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: BufRead,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["flate2"] = [{"text":"impl&lt;R:&nbsp;BufRead&gt; BufRead for CrcReader&lt;R&gt;","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T&gt; BufRead for AllowStdIo&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BufRead,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["rustup"] = [{"text":"impl&lt;'_&gt; BufRead for TestStdinLock&lt;'_&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()