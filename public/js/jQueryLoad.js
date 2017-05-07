getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js',function(){
  let source = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
  let scriptTag = document.createElement('script');
  scriptTag.type = "text/javascript"
  scriptTag.src = source;
  document.getElementsByTagName("head")[0].appendChild(scriptTag);
  });
});

function getScript(url,success){
  let script=document.createElement('script');
  script.src=url;
  let head=document.getElementsByTagName('head')[0],
    done=false;
  script.onload=script.onreadystatechange = function(){
    if ( !done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') ) {
      done=true;
      success();
      script.onload = script.onreadystatechange = null;
      head.removeChild(script);
    }
  };
  head.appendChild(script);
}
