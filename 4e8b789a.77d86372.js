(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),i=(n(0),n(72)),a={id:"appointments",title:"Appointments",slug:"/api/appointments"},p={unversionedId:"api/appointments",id:"api/appointments",isDocsHomePage:!1,title:"Appointments",description:"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.",source:"@site/docs/api/appointments.md",slug:"/api/appointments",permalink:"/api/appointments",editUrl:"https://github.com/nickrakovsky/docs/edit/master/website/docs/api/appointments.md",version:"current",sidebar:"someSidebar",previous:{title:"Authentication",permalink:"/api/authentication"},next:{title:"Purchase Orders",permalink:"/api/purchase_orders"}},c=[{value:"Retreiving a List of Appointments",id:"retreiving-a-list-of-appointments",children:[]},{value:"Retreiving a specific Appointment",id:"retreiving-a-specific-appointment",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below."),Object(i.b)("h2",{id:"retreiving-a-list-of-appointments"},"Retreiving a List of Appointments"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'curl -H "X_AUTH_TOKEN: [api_token]" http://[location_subdomain].datadocks.com/api/v1/appointments\n')),Object(i.b)("p",null,"If your API token is ",Object(i.b)("inlineCode",{parentName:"p"},"12345"),", and your location subdomain is ",Object(i.b)("inlineCode",{parentName:"p"},"toronto.acme")," this would look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'curl -H "X_AUTH_TOKEN: 12345" http://toronto.acme.datadocks.com/api/v1/appointments\n')),Object(i.b)("h2",{id:"retreiving-a-specific-appointment"},"Retreiving a specific Appointment"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'curl -H "X_AUTH_TOKEN: [api_token]" http://[location_subdomain].datadocks.com/api/v1/appointments/[id]\n')),Object(i.b)("p",null,"If your API token is ",Object(i.b)("inlineCode",{parentName:"p"},"12345"),", your location subdomain is ",Object(i.b)("inlineCode",{parentName:"p"},"toronto.acme"),", and the appointment ID you want to retrieve is ",Object(i.b)("inlineCode",{parentName:"p"},"20"),", then this would look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'curl -H "X_AUTH_TOKEN: 12345" http://toronto.acme.datadocks.com/api/v1/appointments/20\n')))}s.isMDXComponent=!0},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,m=l["".concat(a,".").concat(d)]||l[d]||b[d]||i;return n?o.a.createElement(m,p(p({ref:t},u),{},{components:n})):o.a.createElement(m,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);