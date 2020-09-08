(function() {var implementors = {};
implementors["anyhow"] = [{"text":"impl AsRef&lt;dyn Error + 'static + Sync + Send&gt; for Error","synthetic":false,"types":[]},{"text":"impl AsRef&lt;dyn Error + 'static&gt; for Error","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl AsRef&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]}];
implementors["clear_on_drop"] = [{"text":"impl&lt;P, T:&nbsp;?Sized&gt; AsRef&lt;T&gt; for ClearOnDrop&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: DerefMut + AsRef&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::Target: Clear,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["darling_core"] = [{"text":"impl AsRef&lt;Ident&gt; for IdentString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for IdentString","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;T&gt; for SpannedValue&lt;T&gt;","synthetic":false,"types":[]}];
implementors["ed25519"] = [{"text":"impl AsRef&lt;[u8]&gt; for Signature","synthetic":false,"types":[]}];
implementors["ed25519_dalek"] = [{"text":"impl AsRef&lt;[u8]&gt; for PublicKey","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for SecretKey","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; AsRef&lt;Target&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;str&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;str&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;Path&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;Path&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;Path&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;OsStr&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;OsStr&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;OsStr&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;CStr&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;CStr&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;CStr&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R, Target&gt; AsRef&lt;[Target]&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;[Target]&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;[Target]&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Window&lt;T&gt;","synthetic":false,"types":[]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; AsRef&lt;[T]&gt; for GenericArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl AsRef&lt;str&gt; for HeaderName","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for HeaderName","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Method","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Authority","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;str&gt; for Port&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Scheme","synthetic":false,"types":[]}];
implementors["mime"] = [{"text":"impl AsRef&lt;str&gt; for Mime","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for Name&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl AsRef&lt;Asn1GeneralizedTimeRef&gt; for Asn1GeneralizedTime","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1TimeRef&gt; for Asn1Time","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1StringRef&gt; for Asn1String","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1IntegerRef&gt; for Asn1Integer","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1BitStringRef&gt; for Asn1BitString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1ObjectRef&gt; for Asn1Object","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BigNumContextRef&gt; for BigNumContext","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BigNumRef&gt; for BigNum","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CmsContentInfoRef&gt; for CmsContentInfo","synthetic":false,"types":[]},{"text":"impl AsRef&lt;ConfRef&gt; for Conf","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;DhRef&lt;T&gt;&gt; for Dh&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;DsaRef&lt;T&gt;&gt; for Dsa&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;EcGroupRef&gt; for EcGroup","synthetic":false,"types":[]},{"text":"impl AsRef&lt;EcPointRef&gt; for EcPoint","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;EcKeyRef&lt;T&gt;&gt; for EcKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;EcdsaSigRef&gt; for EcdsaSig","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for DigestBytes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspBasicResponseRef&gt; for OcspBasicResponse","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspCertIdRef&gt; for OcspCertId","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspResponseRef&gt; for OcspResponse","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspRequestRef&gt; for OcspRequest","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspOneReqRef&gt; for OcspOneReq","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Pkcs12Ref&gt; for Pkcs12","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Pkcs7Ref&gt; for Pkcs7","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;PKeyRef&lt;T&gt;&gt; for PKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;RsaRef&lt;T&gt;&gt; for Rsa&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SrtpProtectionProfileRef&gt; for SrtpProtectionProfile","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SslContextRef&gt; for SslContext","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SslSessionRef&gt; for SslSession","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SslRef&gt; for Ssl","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Stackable&gt; AsRef&lt;StackRef&lt;T&gt;&gt; for Stack&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OpensslStringRef&gt; for OpensslString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for OpensslString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for OpensslString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for OpensslStringRef","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for OpensslStringRef","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509VerifyParamRef&gt; for X509VerifyParam","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509StoreBuilderRef&gt; for X509StoreBuilder","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509StoreRef&gt; for X509Store","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509StoreContextRef&gt; for X509StoreContext","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509Ref&gt; for X509","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509Ref&gt; for X509Ref","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509ExtensionRef&gt; for X509Extension","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509NameRef&gt; for X509Name","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509NameEntryRef&gt; for X509NameEntry","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509ReqRef&gt; for X509Req","synthetic":false,"types":[]},{"text":"impl AsRef&lt;GeneralNameRef&gt; for GeneralName","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509AlgorithmRef&gt; for X509Algorithm","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509ObjectRef&gt; for X509Object","synthetic":false,"types":[]}];
implementors["pgp"] = [{"text":"impl AsRef&lt;[u8]&gt; for LineBreak","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for KeyId","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Mpi","synthetic":false,"types":[]}];
implementors["pulldown_cmark"] = [{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for InlineStr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for CowStr&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl AsRef&lt;[u8]&gt; for Literal","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["tempfile"] = [{"text":"impl AsRef&lt;Path&gt; for TempDir","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Path&gt; for TempPath","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OsStr&gt; for TempPath","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Path&gt; for NamedTempFile","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for TinyVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl&lt;'_&gt; AsRef&lt;TcpStream&gt; for ReadHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; AsRef&lt;TcpStream&gt; for WriteHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TcpStream&gt; for OwnedReadHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TcpStream&gt; for OwnedWriteHalf","synthetic":false,"types":[]}];
implementors["tracing_core"] = [{"text":"impl AsRef&lt;str&gt; for Field","synthetic":false,"types":[]}];
implementors["unicase"] = [{"text":"impl&lt;S:&nbsp;AsRef&lt;str&gt;&gt; AsRef&lt;str&gt; for Ascii&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;AsRef&lt;str&gt;&gt; AsRef&lt;str&gt; for UniCase&lt;S&gt;","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl AsRef&lt;str&gt; for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()