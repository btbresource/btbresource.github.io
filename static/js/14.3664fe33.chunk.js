webpackJsonp([14],{734:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),c=n.n(a),l=n(32),u=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=window.location.hash;if(console.log(e),e){var t=e.indexOf("#",1);if(t>0){var n=e.substr(t+1),r=Object(l.hexStringToString)(n),o=r.split("#");if(o.length>0){var i=o[0],a=o[1],c=o[2],u=i.split(";"),f=a.split(";");window.localStorage.setItem("ctracker",u[0]),window.localStorage.setItem("cminer",f[0]),c&&window.localStorage.setItem("iServers",c)}}}}},{key:"render",value:function(){return c.a.createElement("div",{style:{height:"680px"}},c.a.createElement("iframe",{width:"100%",height:"100%",frameborder:"0",name:"_blank",src:"/guide/index.html"}))}}]),t}(a.Component);t.default=f}});
//# sourceMappingURL=14.3664fe33.chunk.js.map