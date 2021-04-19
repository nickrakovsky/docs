(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(97)),r={id:"companies",title:"Companies"},c={unversionedId:"api/companies",id:"api/companies",isDocsHomePage:!1,title:"Companies",description:"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.",source:"@site/docs/api/companies.md",slug:"/api/companies",permalink:"/api/companies",version:"current",sidebar:"someSidebar",previous:{title:"Products",permalink:"/api/products"}},l=[{value:"Listing",id:"listing",children:[{value:"Filtering",id:"filtering",children:[]},{value:"Sample Payload",id:"sample-payload",children:[]}]},{value:"Fields",id:"fields",children:[{value:"id",id:"id",children:[]},{value:"parent_id",id:"parent_id",children:[]},{value:"company_type",id:"company_type-1",children:[]},{value:"name",id:"name-1",children:[]},{value:"company_number",id:"company_number-1",children:[]},{value:"email",id:"email",children:[]},{value:"phone",id:"phone",children:[]},{value:"street",id:"street",children:[]},{value:"unit",id:"unit",children:[]},{value:"city",id:"city",children:[]},{value:"province",id:"province",children:[]},{value:"country",id:"country",children:[]},{value:"postal",id:"postal",children:[]},{value:"category",id:"category",children:[]},{value:"auto_approve_appointments",id:"auto_approve_appointments",children:[]},{value:"can_create_carriers",id:"can_create_carriers",children:[]},{value:"notifications",id:"notifications",children:[]},{value:"custom_values",id:"custom_values",children:[]}]},{value:"Creating Companies",id:"creating-companies",children:[]},{value:"Updating Companies",id:"updating-companies",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below."),Object(o.b)("h2",{id:"listing"},"Listing"),Object(o.b)("p",null,"You can fetch the list of companies using the following API call:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/companies\n')),Object(o.b)("p",null,"If your API token is ",Object(o.b)("inlineCode",{parentName:"p"},"12345"),", and your location subdomain is ",Object(o.b)("inlineCode",{parentName:"p"},"toronto-acme")," this would look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -H "Authorization: Token 12345" https://toronto-acme.datadocks.com/api/v1/companies\n')),Object(o.b)("p",null,"You can pass the following parameters to filter the list of companies returned:"),Object(o.b)("h3",{id:"filtering"},"Filtering"),Object(o.b)("h4",{id:"company_type"},"company_type"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Description: The type of companies to filter on. This is an exact match if provided."),Object(o.b)("li",{parentName:"ul"},'Possible Values: Can be "carrier" or "customer"')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/companies?company_type=customer\n')),Object(o.b)("h4",{id:"name"},"name"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Description: The name of the company to filter on. This is a fuzzy match if provided.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/companies?name=s\n')),Object(o.b)("h4",{id:"company_number"},"company_number"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Description: The company_number to filter on. This is an exact match if provided.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/companies?company_number=B83582616848\n')),Object(o.b)("h4",{id:"combining-filters"},"Combining Filters"),Object(o.b)("p",null,"You can combine parameters by separating them with an ampersand like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/companies?company_type=customer&name=s\n')),Object(o.b)("h3",{id:"sample-payload"},"Sample Payload"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'[\n  {\n    "id": 1,\n    "parent_id": null,\n    "company_type": "carrier",\n    "name": "Joe\'s Shipping",\n    "company_number": "A17727959343",\n    "email": "ingo@joesshipping.com",\n    "phone": "+14161231234",\n    "street": "1 Yonge St.",\n    "unit": null,\n    "city": "Toronto",\n    "province": "ON",\n    "country": "CA",\n    "postal": "M8H 1G1",\n    "category": null,\n    "auto_approve_appointments": true,\n    "can_create_carriers": false,\n    "notifications": true,\n    "custom_values": {\n      "ap_contact": "Sue Brown",\n      "sales_contact": "Tim Jones",\n      "facility_contact": "John Green"\n    }\n  },\n  {\n    "id": 2,\n    "parent_id": null,\n    "company_type": "customer",\n    "name": "Spatula City",\n    "company_number": "B83582616848",\n    "email": "info@spatulacity.com",\n    "phone": "+14161231234",\n    "street": "1 Yonge St.",\n    "unit": "4",\n    "city": "Toronto",\n    "province": "ON",\n    "country": "CA",\n    "postal": "M8H 1G1",\n    "category": null,\n    "auto_approve_appointments": false,\n    "can_create_carriers": true,\n    "notifications": false,\n    "custom_values": {\n      "ap_contact": "",\n      "sales_contact": "Al Yankovic",\n      "facility_contact": ""\n    }\n  }\n]\n')),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"id"},"id"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: Integer"),Object(o.b)("li",{parentName:"ul"},"Required: True"),Object(o.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(o.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(o.b)("h3",{id:"parent_id"},"parent_id"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: Integer"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier that points to the company that created it."),Object(o.b)("li",{parentName:"ul"},"Possible Values: Must match another company identifier.")),Object(o.b)("h3",{id:"company_type-1"},"company_type"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: True"),Object(o.b)("li",{parentName:"ul"},"Description: The type of the company."),Object(o.b)("li",{parentName:"ul"},"Possible Values: carrier or customer")),Object(o.b)("h3",{id:"name-1"},"name"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: True"),Object(o.b)("li",{parentName:"ul"},"Description: Name of the company.")),Object(o.b)("h3",{id:"company_number-1"},"company_number"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: True"),Object(o.b)("li",{parentName:"ul"},"Description: Unique external identifier assigned to the company.")),Object(o.b)("h3",{id:"email"},"email"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: Primary email address.")),Object(o.b)("h3",{id:"phone"},"phone"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: Primary phone number.")),Object(o.b)("h3",{id:"street"},"street"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: Street address.")),Object(o.b)("h3",{id:"unit"},"unit"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: Building unit or suite.")),Object(o.b)("h3",{id:"city"},"city"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: City")),Object(o.b)("h3",{id:"province"},"province"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: Province or State.")),Object(o.b)("h3",{id:"country"},"country"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: Country")),Object(o.b)("h3",{id:"postal"},"postal"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: Postal or Zip Code.")),Object(o.b)("h3",{id:"category"},"category"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: String"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: ?")),Object(o.b)("h3",{id:"auto_approve_appointments"},"auto_approve_appointments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: Boolean"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: Are appointments created by this company's users are automatically approved (booked)?")),Object(o.b)("h3",{id:"can_create_carriers"},"can_create_carriers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: Boolean"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: Can this company's users create other carriers themselves?")),Object(o.b)("h3",{id:"notifications"},"notifications"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: Boolean"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: Should this company's users be subscribed to appointment notifications.")),Object(o.b)("h3",{id:"custom_values"},"custom_values"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: Hash"),Object(o.b)("li",{parentName:"ul"},"Required: False"),Object(o.b)("li",{parentName:"ul"},"Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the company.")),Object(o.b)("h2",{id:"creating-companies"},"Creating Companies"),Object(o.b)("p",null,"You can create a company using the following API call and providing the company data in JSON format."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -v \\\n  -H "Accept: application/json" \\\n  -H "Content-type: application/json" \\\n  -H "Authorization: Token [api_token]" \\\n  -X POST \\\n  -d \'{"company": {"name": "My Shipping Co.", "company_type": "carrier", "company_number": "MSC1234"}}\' \\\n  https://[location_subdomain].datadocks.com/api/v1/companies\n')),Object(o.b)("p",null,"If your API token is ",Object(o.b)("inlineCode",{parentName:"p"},"12345"),", and your location subdomain is ",Object(o.b)("inlineCode",{parentName:"p"},"toronto-acme")," this would look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -v \\\n  -H "Accept: application/json" \\\n  -H "Content-type: application/json" \\\n  -H "Authorization: Token 12345" \\\n  -X POST \\\n  -d \'{"company": {"name": "My Shipping Co.", "company_type": "carrier", "company_number": "MSC1234"}}\' \\\n  https://toronto-acme.datadocks.com/api/v1/companies\n')),Object(o.b)("h2",{id:"updating-companies"},"Updating Companies"),Object(o.b)("p",null,"You can update a company using the following API call and providing the company data in JSON format. Note that the URL requires the company ID at the end (the DataDocks company ID)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -v \\\n  -H "Accept: application/json" \\\n  -H "Content-type: application/json" \\\n  -H "Authorization: Token [api_token]" \\\n  -X PUT \\\n  -d \'{"company": {"name": "Name Changed"}}\' \\\n  https://[location_subdomain].datadocks.com/api/v1/companies/[company_id]\n')),Object(o.b)("p",null,"If your API token is ",Object(o.b)("inlineCode",{parentName:"p"},"12345"),", your location subdomain is ",Object(o.b)("inlineCode",{parentName:"p"},"toronto-acme"),", and the company ID you want to update is ",Object(o.b)("inlineCode",{parentName:"p"},"1")," this would look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -v \\\n  -H "Accept: application/json" \\\n  -H "Content-type: application/json" \\\n  -H "Authorization: Token 12345" \\\n  -X PUT \\\n  -d \'{"company": {"name": "Name Changed"}}\' \\\n  https://toronto-acme.datadocks.com/api/v1/companies/1\n')))}b.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(r,".").concat(m)]||u[m]||s[m]||o;return n?i.a.createElement(d,c(c({ref:t},p),{},{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);