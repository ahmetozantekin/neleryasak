_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{FJ9v:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r("nKUr");function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?i(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=r("rePB"),p=r("q1tI"),f=r("NLnR");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(l,e);var t,r,u,c=d(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),t=c.call(this,e),Object(s.a)(i(t),"cityWrapper",(function(){return t.getCities().map((function(e){return t.props.cityWrapper?t.props.cityWrapper(e.element,e.cityType):e.element}))})),Object(s.a)(i(t),"onHover",(function(e){t.props.onHover&&t.handleMouseEvent(e,t.props.onHover)})),Object(s.a)(i(t),"onClick",(function(e){t.props.onClick&&t.handleMouseEvent(e,t.props.onClick)})),Object(s.a)(i(t),"onMouseEnter",(function(e){e.target.style.fill="black"})),Object(s.a)(i(t),"onMouseLeave",(function(e){var t=e.target.parentNode.getAttribute("id")+"",r=f.default.find((function(e){return e.id===t}));console.log(r);var n=r.riskValue?5===r.riskValue?"red":4===r.riskValue?"orange":3===r.riskValue?"yellow":"blue":"yellow";e.target.style.fill=n})),Object(s.a)(i(t),"handleMouseEvent",(function(e,t){var r=e.target;if("path"===r.tagName){var n=r.parentNode,o=n.getAttribute("id")+"",i=r.getAttribute("d")+"",a=n.getAttribute("data-plakakodu")+"",u=parseInt(""!==a?a:"0"),c=n.getAttribute("data-iladi")+"",l=f.default.find((function(e){return e.id===o})).riskValue;t({id:o,name:c,plateNumber:u,path:i,riskValue:l})}})),Object(s.a)(i(t),"getCities",(function(){return t.props.data.map((function(e){return{element:Object(n.jsx)("g",{id:e.id,"data-plakakodu":e.plateNumber,"data-iladi":e.name,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,onMouseOver:function(e){return t.props.hoverable&&t.onHover?t.onHover(e):void 0},onClick:t.onClick,children:Object(n.jsx)("path",{style:{cursor:"pointer",fill:e.riskValue?5===e.riskValue?"red":4===e.riskValue?"orange":3===e.riskValue?"yellow":"blue":"yellow"},d:e.path})}),cityType:{id:e.id,name:e.name,path:e.path,plateNumber:e.plateNumber,riskValue:e.riskValue}}}))})),t}return t=l,(r=[{key:"render",value:function(){return Object(n.jsx)("div",{id:"svg-turkiye-haritasi-container",style:{maxWidth:1140,margin:"0 auto",textAlign:"center",width:"100vw"},hidden:!this.props.visible,children:Object(n.jsx)("svg",{version:"1.1",id:"svg-turkiye-haritasi",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:this.props.viewBox.top+" "+this.props.viewBox.left+" "+this.props.viewBox.width+" "+this.props.viewBox.height,xmlSpace:"preserve",style:{width:"100%",height:"auto"},children:Object(n.jsx)("g",{id:"turkiye",children:this.cityWrapper()},"turkiye")})})}}])&&o(t.prototype,r),u&&o(t,u),l}(p.Component);Object(s.a)(b,"defaultProps",{viewBox:{top:0,left:80,width:1050,height:585},visible:!0,hoverable:!0,data:f.default,customStyle:{idleColor:"green",hoverColor:"black"}})},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},ezEQ:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return r("FJ9v")}])}},[["ezEQ",0,1,2]]]);