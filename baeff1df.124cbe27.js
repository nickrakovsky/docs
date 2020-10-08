(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(72)),i={id:"authentication",title:"Authentication"},c={unversionedId:"api/authentication",id:"api/authentication",isDocsHomePage:!1,title:"Authentication",description:"Before you can start making API calls inot DataDocks you will need to ask us for a token you can use to authenticate each of your API calls.",source:"@site/docs/api/authentication.md",slug:"/api/authentication",permalink:"/api/authentication",editUrl:"https://github.com/nickrakovsky/docs/edit/master/website/docs/api/authentication.md",version:"current",sidebar:"someSidebar",previous:{title:"Docks",permalink:"/features/docks"},next:{title:"Appointments",permalink:"/api/appointments"}},u=[{value:"Example",id:"example",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Before you can start making API calls inot DataDocks you will need to ask us for a token you can use to authenticate each of your API calls."),Object(a.b)("p",null,"This token will need to be placed in the header of all requests as ",Object(a.b)("inlineCode",{parentName:"p"},"X_AUTH_TOKEN"),"."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Assuming an API token of ",Object(a.b)("inlineCode",{parentName:"p"},"1234567890")," and a location subdomain of ",Object(a.b)("inlineCode",{parentName:"p"},"toronto.acme"),"."),Object(a.b)("p",null,"A call to our API to retrieve appointments would look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'curl -H "X_AUTH_TOKEN: 1234567890" http://toronto.acme.datadocks.com/api/v1/appointments\n')),Object(a.b)("p",null,"Simply substitute your your token and your location subdomain."))}p.isMDXComponent=!0},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);