webpackJsonp([11],{737:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(1),o=n.n(c),i=n(8),u=n(43),s=(n.n(u),n(109)),h=n(32),m=(n.n(h),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),f=function(t){function n(e){a(this,n);var t=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={},t}return r(n,t),m(n,[{key:"prePage",value:function(){this.state.page--,this.loadAll()}},{key:"nextPage",value:function(){this.state.page++,this.loadAll()}},{key:"setFilter",value:function(e){this.setState({channel:e,channelName:this.filterOptions[e]})}},{key:"toggleActionDialog",value:function(){this.setState({action:!this.state.action,dialogMsg:""})}},{key:"renderdialogMsg",value:function(){return this.state.dialogMsg?o.a.createElement(i.x,null,this.state.dialogMsg):null}},{key:"updateFee",value:function(e){if(e&&e.target){var t=e.target.value;t&&t.length>0&&(this.fee=t)}}},{key:"updateDeadline",value:function(e){if(e&&e.target){var t=e.target.value;this.deadline=t}}},{key:"renderExchangelist",value:function(){var e=this,t=this.state.list;return t?t.map(function(t){var n=new Date;n.setTime(t.time);var a=n.toLocaleString();n.setTime(t.update);var l=n.toLocaleString();return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(s.a,{rsId:t.id})),o.a.createElement("td",null,t.amount," BTB"),o.a.createElement("td",null,t.random," \u5143"),o.a.createElement("td",null,t.channel),o.a.createElement("td",null,t.ip),o.a.createElement("td",null,a),o.a.createElement("td",null,l),o.a.createElement("td",null,Object(u.getExchangeStatus)(t.status)),o.a.createElement("td",null,t.note),o.a.createElement("td",null,o.a.createElement(i.e,{size:"sm",onClick:function(n){e.setState({exchange:t}),e.toggleActionDialog()}.bind(e)},"\u64cd\u4f5c")))}):null}},{key:"updateHost",value:function(){}},{key:"updatePort",value:function(){}},{key:"startForger",value:function(){var t={action:"getpk"};Object(u.bshopCall)(t,function(t,n){if(t&&n){var a=n.pk,l="www.bsh0pping.cc"+(new Date).toDateString(),r=(new Date).getTime(),c=Object(u.shareEncrypt)(l,a,r,"this is a user sec."),o=Object(h.getPublicKey)(l);o=new e(o).toString("hex"),c=new e(c,"base64").toString("hex");var i={action:"forge",key:c,pk:o,nonce:r+""};Object(u.bshopCall)(i,function(e,t){})}}.bind(this))}},{key:"render",value:function(){var e=this;return o.a.createElement(i.g,null,o.a.createElement(i.h,null,o.a.createElement(i.e,{color:"primary",onClick:function(t){return e.loadAll()}},o.a.createElement("i",{className:"fa fa-search"}),"\u663e\u793a\u5168\u90e8"),o.a.createElement(i.u,null,o.a.createElement(i.f,{isOpen:this.state.dropdownOpen,toggle:function(){e.toggle()}},o.a.createElement(i.q,{caret:!0},this.state.channelName),o.a.createElement(i.p,null)),o.a.createElement(i.t,{placeholder:"host",onChange:this.updateHost.bind(this)}),o.a.createElement(i.t,{placeholder:"port",onChange:this.updatePort.bind(this)}),o.a.createElement(i.e,{color:"primary",onClick:function(t){return e.startForger()}},o.a.createElement("i",{className:"fa fa-search"}),"\xa0")),o.a.createElement(i.T,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"Amount(\u91d1\u989d)"),o.a.createElement("th",null,"\u968f\u673a\u91d1\u989d(\u91d1\u989d)"),o.a.createElement("th",null,"Channel(\u6e20\u9053)"),o.a.createElement("th",null,"Ip\u5730\u5740"),o.a.createElement("th",null,"Time(\u7533\u8bf7\u65f6\u95f4)"),o.a.createElement("th",null,"Update(\u66f4\u65b0\u65f6\u95f4)"),o.a.createElement("th",null,"Status(\u6700\u65b0\u72b6\u6001)"),o.a.createElement("th",null,"Note(\u5907\u6ce8)"),o.a.createElement("th",null,"Action(\u64cd\u4f5c)"))),o.a.createElement("tbody",null,this.renderExchangelist())),o.a.createElement("nav",null,o.a.createElement(i.J,null,o.a.createElement(i.K,null,o.a.createElement(i.L,{previous:!0,tag:"button",onClick:function(t){e.prePage()}},"Prev(\u4e0a\u4e00\u9875)")),o.a.createElement(i.K,{active:!0},o.a.createElement(i.L,{tag:"button"},this.state.page)),o.a.createElement(i.K,null,o.a.createElement(i.L,{next:!0,tag:"button",onClick:function(t){e.nextPage()}},"Next(\u4e0b\u4e00\u9875)"))))))}}]),n}(c.Component);t.default=f}.call(t,n(2).Buffer)}});
//# sourceMappingURL=11.bc71db9a.chunk.js.map