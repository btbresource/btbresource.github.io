webpackJsonp([4],{732:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=n.n(s),c=n(8),o=n(32),u=(n.n(o),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),d=(n(265),n(786)),p=(n(42),n(32)),m=p.shareResource,h=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),l={tags:"",price:"",fee:"",deadline:"",owner:"",id:""};return n.state={collapse:!0,resourceList:[],resource:l,rsId:""},n.state.shareMsg="",n.share=new d(n.state),n.userSec="",n.fee=1,n.deadline=5,n.price=1,n.tags="",n.resName="",n.resId="",n.infoInterval=null,n.torrentList=[],n}return l(t,e),u(t,[{key:"cancelShare",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"doShare",value:function(){var e=this;m(this.resId,this.userSec,this.fee,this.deadline,this.price,this.tags,this.resName,function(t){console.log("shareResource = "+t),t?e.setState({shareMsg:"success. \u4ea4\u6613\u63d0\u4ea4\u6210\u529f\uff0c\u7b49\u5f85\u8fdb\u5165\u533a\u5757\u94fe"}):e.setState({shareMsg:"err. \u51fa\u9519\u4e86"})})}},{key:"componentDidMount",value:function(){this.share.init(this.onTorrentDone.bind(this),this.onTorrentStart.bind(this))}},{key:"prettyBytes",value:function(e){var t,n,a=e<0,r=["B","kB","MB","GB","TB","PB","EB","ZB","YB"];return a&&(e=-e),e<1?(a?"-":"")+e+" B":(t=Math.min(Math.floor(Math.log(e)/Math.log(1e3)),r.length-1),e=Number((e/Math.pow(1e3,t)).toFixed(2)),n=r[t],(a?"-":"")+e+" "+n)}},{key:"updateTorrentStatus",value:function(){var e=this;this.torrentList.map(function(t){var n=document.querySelector("#pid"+t.infoHash),a=document.querySelector("#sid"+t.infoHash);n.innerHTML=t.numPeers,a.innerHTML=e.prettyBytes(t.uploadSpeed)+"/s"})}},{key:"onTorrentStart",value:function(){this.setState({shareMsg:"working...\u5904\u7406\u4e2d..."})}},{key:"onTorrentDone",value:function(e){if(e){e.infoHash,e.magnetURI,e.torrentFileBlobURL,e.name;this.resId=e.infoHash,this.resName=e.name;var t=this.state.resourceList;t.push({id:this.resId,name:this.resName}),this.setState({resourceList:t}),e.key=e.infoHash,this.torrentList.unshift(e)}this.infoInterval||(this.infoInterval=setInterval(this.updateTorrentStatus.bind(this),3e3)),this.setState({shareMsg:""})}},{key:"updateSecret",value:function(e){if(e&&e.target){this.userSec=e.target.value;var t=Object(o.calcAccountId)(this.userSec);this.setState({rsId:t})}}},{key:"updateFee",value:function(e){e&&e.target&&(this.fee=e.target.value)}},{key:"updatePrice",value:function(e){e&&e.target&&(this.price=e.target.value)}},{key:"updateTags",value:function(e){e&&e.target&&(this.tags=e.target.value)}},{key:"updateDeadline",value:function(e){e&&e.target&&(this.deadline=e.target.value)}},{key:"renderAddFile",value:function(){var e=this;return i.a.createElement(c.Q,null,i.a.createElement(c.k,{xs:"12"},i.a.createElement(c.r,null,i.a.createElement(c.g,null,i.a.createElement(c.j,null,i.a.createElement("i",{className:"icon-share",onClick:this.toggle.bind(this)},"Share Resource to earn BTB(\u5171\u4eab\u8d44\u6e90\u8d5a\u53d6BTB)"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement(c.e,{color:"link",className:"card-header-action btn-setting"},i.a.createElement("i",{className:"icon-settings"})),i.a.createElement(c.e,{color:"link",className:"card-header-action btn-minimize","data-target":"#collapseExample",onClick:this.toggle.bind(this)},i.a.createElement("i",{className:"icon-arrow-up"})),i.a.createElement(c.e,{color:"link",className:"card-header-action btn-close",onClick:this.toggleFade},i.a.createElement("i",{className:"icon-close"})))),i.a.createElement(c.l,{isOpen:this.state.collapse,id:"collapseExample"},i.a.createElement(c.h,null,i.a.createElement(c.s,null,i.a.createElement(c.x,{htmlFor:"appendedInputButtons"},"Account Secret(\u8d26\u6237\u5bc6\u7801):"),i.a.createElement("div",{className:"controls"},i.a.createElement(c.u,null,i.a.createElement(c.t,{id:"appendedInputButtons",size:"16",type:"text",value:this.secret,onChange:this.updateSecret.bind(this),placeholder:"account secret \u8f93\u5165\u8d26\u6237\u5bc6\u7801\u5171\u4eab\u8d44\u6e90"})))),i.a.createElement(c.s,null,i.a.createElement("div",{className:"controls"},i.a.createElement(c.u,{className:"input-prepend"},i.a.createElement(c.v,{addonType:"prepend"},i.a.createElement(c.w,null,"(\u53d1\u5e03\u8005) Owner:")),i.a.createElement(c.t,{id:"prependedInput",size:"16",type:"text",value:this.state.rsId})))),i.a.createElement(c.s,null,i.a.createElement("div",{className:"controls"},i.a.createElement(c.u,{className:"input-prepend"},i.a.createElement(c.v,{addonType:"prepend"},i.a.createElement(c.w,null,"Resource(\u8d44\u6e90):")),i.a.createElement("input",{name:"upload",type:"file"})))),i.a.createElement(c.s,null,i.a.createElement("div",{className:"controls"},i.a.createElement(c.u,{className:"input-prepend"},i.a.createElement(c.v,{addonType:"prepend"},i.a.createElement(c.w,null,"Resource(\u8d44\u6e90ID) ID:")),i.a.createElement(c.t,{id:"prependedInput1",size:"16",type:"text",value:this.resId})))),i.a.createElement(c.s,null,i.a.createElement("div",{className:"controls"},i.a.createElement(c.u,{className:"input-prepend"},i.a.createElement(c.v,{addonType:"prepend"},i.a.createElement(c.w,null,"Resource(\u8d44\u6e90\u6807\u7b7e) Tags:")),i.a.createElement(c.t,{id:"prependedInput2",size:"16",type:"text",onChange:this.updateTags.bind(this),placeholder:"resource tags \u8d44\u6e90\u63cf\u8ff0"})))),i.a.createElement(c.s,null,i.a.createElement("div",{className:"controls"},i.a.createElement(c.u,{className:"input-prepend"},i.a.createElement(c.v,{addonType:"prepend"},i.a.createElement(c.w,null,"Price(\u4ef7\u683c):")),i.a.createElement(c.t,{id:"appendedPrependedInput3",size:"16",type:"text",onChange:this.updatePrice.bind(this),placeholder:"resource price  \u8d44\u6e90\u4ef7\u683c,\u9ed8\u8ba4 1 \u4e2a BTB\u5e01"}),i.a.createElement(c.v,{addonType:"append"},i.a.createElement(c.w,null,"BTB"))))),i.a.createElement(c.s,null,i.a.createElement("div",{className:"controls"},i.a.createElement(c.u,{className:"input-prepend"},i.a.createElement(c.v,{addonType:"prepend"},i.a.createElement(c.w,null,"Fee(\u77ff\u5de5\u624b\u7eed\u8d39):")),i.a.createElement(c.t,{id:"appendedPrependedInput",size:"16",type:"text",onChange:this.updateFee.bind(this),placeholder:"\u77ff\u5de5\u624b\u7eed\u8d39\uff0c\u6700\u5c111\u4e2aBTB"}),i.a.createElement(c.v,{addonType:"append"},i.a.createElement(c.w,null,"BTB"))))),i.a.createElement(c.s,null,i.a.createElement("div",{className:"controls"},i.a.createElement(c.u,{className:"input-prepend"},i.a.createElement(c.v,{addonType:"prepend"},i.a.createElement(c.w,null,"Deadline(\u6709\u6548\u671f):")),i.a.createElement(c.t,{id:"appendedPrependedInput",size:"16",onChange:this.updateDeadline.bind(this),type:"text",placeholder:"\u4ea4\u6613\u6709\u6548\u671f\uff0c\u9ed8\u8ba45\u5206\u949f"}),i.a.createElement(c.v,{addonType:"append"},i.a.createElement(c.w,null,"minutes(\u5206\u949f)"))))),i.a.createElement("div",null,i.a.createElement("p",null,this.state.shareMsg)),i.a.createElement("div",{className:"form-actions"},i.a.createElement(c.e,{type:"submit",color:"primary",onClick:function(t){return e.doShare()}},"Share(\u5206\u4eab)"),i.a.createElement(c.e,{color:"secondary",onClick:function(t){return e.cancelShare()}},"Cancel(\u53d6\u6d88)"))))))))}},{key:"renderResourceItems",value:function(){return this.state.resourceList.map(function(e){var t="pid"+e.id,n="sid"+e.id;return i.a.createElement(c.z,{action:!0},i.a.createElement(c.A,null,e.id," : ",e.name),i.a.createElement(c.B,null,i.a.createElement("code",null," ",i.a.createElement("span",{id:t})," peers(\u8282\u70b9)"),". \u2197",i.a.createElement("code",null,i.a.createElement("span",{id:n}),"(\u4e0a\u4f20\u901f\u5ea6)")))})}},{key:"renderShareList",value:function(){return i.a.createElement(c.Q,null,i.a.createElement(c.k,{sm:"12",xl:"6"},i.a.createElement(c.g,null,i.a.createElement(c.j,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Share List(\u6211\u7684\u8d44\u6e90\u5217\u8868)"),i.a.createElement(c.a,{color:"danger"},i.a.createElement("small",null,"\u8bf7\u4e0d\u8981\u5237\u65b0\u6216\u5173\u95ed\u6b64\u9875\u9762\uff0c\u4fdd\u6301\u6b64\u9875\u9762\u6253\u5f00\u72b6\u6001\u4e0b\uff0c\u8d2d\u4e70\u8fc7\u8d44\u6e90\u7684\u7528\u6237\u624d\u53ef\u4ee5\u4e0b\u8f7d\u8d44\u6e90"))),i.a.createElement(c.h,null,i.a.createElement(c.y,null,this.renderResourceItems())))))}},{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},this.renderAddFile(),this.renderShareList())}}]),t}(s.Component);t.default=h},786:function(e,t,n){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(266),s=(n(265),function(){function e(t){a(this,e),this.state=t;var n={iceServers:[{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun.btbresource.com:3478"},{urls:"stun:global.stun.twilio.com:3478?transport=udp"}]};this.client=new l({tracker:{rtcConfig:n}}),this.torrentCallback=null,this.onStartCallback=null}return r(e,[{key:"init",value:function(e,t,n){this.torrentCallback=e,this.onStartCallback=t;var a=n;a||(a=document.querySelector("input[name=upload]")),a&&this.uploadElement(a,function(e,t){if(e)return e;t=t.map(function(e){return e.file}),this.onFiles(t)}.bind(this))}},{key:"isTorrentFile",value:function(e){return-1!==e.name.indexOf(".torrent")}},{key:"isNotTorrentFile",value:function(e){return!this.isTorrentFile(e)}},{key:"onSeedTorrent",value:function(e){e.on("warning",function(e){}),e.on("error",function(e){}),this.torrentCallback(e)}},{key:"seed",value:function(e){0!==e.length&&(this.onStartCallback(),this.client.seed(e,this.onSeedTorrent.bind(this)))}},{key:"onFiles",value:function(e){console.log("got files:"),e.forEach(function(e){}),this.seed(e)}},{key:"uploadElement",value:function(e,t,n){"function"===typeof t&&(n=t,t={}),"string"===typeof t&&(t={type:t}),e.addEventListener("change",function(a){function r(n){var a=e.files[n];"text"===t.type?l.readAsText(a):"url"===t.type?l.readAsDataURL(a):l.readAsArrayBuffer(a)}if(0===e.files.length)return n(null,[]);var l=new FileReader,s=0,i=[];l.addEventListener("load",function(t){i.push({file:e.files[s],target:t.target}),s++,s===e.files.length?n(null,i):r(s)}),r(s)})}}]),e}());e.exports=s}});
//# sourceMappingURL=4.9b956597.chunk.js.map