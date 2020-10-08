(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(72)),i={id:"authentication",title:"Authentication"},c={unversionedId:"api/authentication",id:"api/authentication",isDocsHomePage:!1,title:"Authentication",description:"Before you can start making API calls inot DataDocks you will need to ask us for a token you can use to authenticate each of your API calls.",source:"@site/docs/api/authentication.md",slug:"/api/authentication",permalink:"/api/authentication",editUrl:"https://github.com/nickrakovsky/docs/edit/master/website/docs/api/authentication.md",version:"current",sidebar:"someSidebar",previous:{title:"Docks",permalink:"/features/docks"},next:{title:"Appointments",permalink:"/api/appointments"}},u=[{value:"Example",id:"example",children:[]},{value:"Testing",id:"testing",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before you can start making API calls inot DataDocks you will need to ask us for a token you can use to authenticate each of your API calls."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Assuming an API token of ",Object(o.b)("inlineCode",{parentName:"p"},"1234567890"),"."),Object(o.b)("p",null,"In order to call our API you will need to attach this token as a parameter to each of your calls like so:\n",Object(o.b)("inlineCode",{parentName:"p"},"http://api.datadocs.com/api/v1/appointments?tk=1234567890")),Object(o.b)("h2",{id:"testing"},"Testing"),Object(o.b)("p",null,"You can test your token to make sure it works by running the following bash command from a unix / linux / osx terminal. Replacing the value following ",Object(o.b)("inlineCode",{parentName:"p"},"tk=")," with the unique token we provided for you."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"curl -I http://api.datadocs.com/api/v1/appointments?tk=1234567890\n")))}p.isMDXComponent=!0},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);