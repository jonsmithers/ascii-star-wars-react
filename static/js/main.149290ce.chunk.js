(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(7),a=n.n(r),c=(n(14),n(1)),s=n(2),l=n(4),u=n(3),d=n(5),f=(n(16),function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={frameIndex:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this,n=this.props,i=n.txt,o=n.startingFrameIndex;if(i!==e.txt){console.time("split txt");var r=i.split("\n");console.timeEnd("split txt"),this.setState({frameWait:parseInt(r[14*o])-1,frameIndex:14*o,lines:r}),this.ticker=setInterval(function(){t.setState(function(e){var n=e.lines,i=e.frameIndex,o=e.frameWait,r=t.props.loop;if(o)return{frameWait:Math.max(o-1,0)};var a=i+1;if(14*a>=n.length){if(!r)return void clearTimeout(t.ticker);a=0}return{frameIndex:a,frameWait:parseInt(n[14*a])-1}})},67),window.stop=function(){return clearTimeout(t.ticker)}}}},{key:"render",value:function(){var e=this.state,t=e.lines,n=e.frameIndex;if(null==n)return o.a.createElement("div",null," nothing ");var i=t.slice(14*n+1,14*(1+n));return o.a.createElement("pre",{className:"movie-screen",style:{textAlign:"left"}},o.a.createElement("div",{style:{height:"0",visibility:"hidden"}},"..................................................................."),i.map(function(e,t){return o.a.createElement("span",{key:t,style:{minHeight:"1.25em",lineHeight:"1.25"}},e,o.a.createElement("br",null))}))}}]),t}(i.PureComponent));f.defaultProps={startingFrameIndex:0,loop:!1,txt:null};var p=f,h=(n(17),function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.time("fetch sw1.txt"),fetch("./sw1.txt").then(function(e){return e.text()}).then(function(t){console.timeEnd("fetch sw1.txt"),e.setState({txt:t})})}},{key:"render",value:function(){this.props.style;var e=this.state.txt;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{style:{padding:"10px",margin:"10px",background:"#262626",border:"1px dotted grey",display:"inline-block"}},o.a.createElement(p,{txt:e,startingFrameIndex:243,loop:!0,style:{border:"1px solid white",padding:"10px"}})))}}]),t}(i.Component)),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(o.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");m?(function(e,t){fetch(e).then(function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):v(t,e)})}}()},8:function(e,t,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.149290ce.chunk.js.map