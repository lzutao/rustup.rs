(function() {var implementors = {};
implementors["hyper"] = [{"text":"impl AsyncRead for AddrStream","synthetic":false,"types":[]},{"text":"impl AsyncRead for Upgraded","synthetic":false,"types":[]}];
implementors["hyper_tls"] = [{"text":"impl&lt;T:&nbsp;AsyncRead + AsyncWrite + Unpin&gt; AsyncRead for MaybeHttpsStream&lt;T&gt;","synthetic":false,"types":[]}];
implementors["tokio_socks"] = [{"text":"impl AsyncRead for Socks5Stream","synthetic":false,"types":[]}];
implementors["tokio_tls"] = [{"text":"impl&lt;S&gt; AsyncRead for TlsStream&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: AsyncRead + AsyncWrite + Unpin,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()