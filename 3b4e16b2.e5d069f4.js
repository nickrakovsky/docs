(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(93)),i={id:"pagination",title:"Pagination"},p={unversionedId:"api/pagination",id:"api/pagination",isDocsHomePage:!1,title:"Pagination",description:"Pagination is specified using the page query parameter. For example, to retrieve the second page of appointments results you would pass page=2 like this:",source:"@site/docs\\api\\pagination.md",slug:"/api/pagination",permalink:"/api/pagination",editUrl:"https://github.com/nickrakovsky/docs/edit/master/website/docs/api/pagination.md",version:"current",sidebar:"someSidebar",previous:{title:"Authentication",permalink:"/api/authentication"},next:{title:"Appointments",permalink:"/api/appointments"}},c=[{value:"Responder Headers",id:"responder-headers",children:[]}],s={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Pagination is specified using the ",Object(o.b)("inlineCode",{parentName:"p"},"page")," query parameter. For example, to retrieve the second page of appointments results you would pass ",Object(o.b)("inlineCode",{parentName:"p"},"page=2")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments?page=2\n')),Object(o.b)("h3",{id:"responder-headers"},"Responder Headers"),Object(o.b)("p",null,"The following pagination headers are present in the response:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Current-Page: What page you're on."),Object(o.b)("li",{parentName:"ul"},"Page-Items: How many records return for the current page."),Object(o.b)("li",{parentName:"ul"},"Total-Pages: How many pages there are in total."),Object(o.b)("li",{parentName:"ul"},"Total-Count: How many records there are in total."),Object(o.b)("li",{parentName:"ul"},"Link: Provides the URLs to the current, previous, next, first, and last pages.")),Object(o.b)("h4",{id:"for-example"},"For example:"),Object(o.b)("p",null,"Assuming a location subdomain of toronto.acme and querying appointments, you will see reponse headers like this."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'Current-Page: 1\nPage-Items: 20\nTotal-Pages: 2\nTotal-Count: 40\nLink: <https://toronto.acme.datadocks.com/api/v1/appointments?page=1>; rel="first", <https://toronto.acme.datadocks.com/api/v1/appointments?page=2>; rel="next", <https://toronto.acme.datadocks.com/api/v1/appointments?page=4>; rel="last"\n')))}l.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(b,p(p({ref:t},s),{},{components:n})):a.a.createElement(b,p({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);