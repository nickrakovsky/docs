(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),i=(r(0),r(93)),l={id:"purchase_orders",title:"Purchase Orders"},o={unversionedId:"api/purchase_orders",id:"api/purchase_orders",isDocsHomePage:!1,title:"Purchase Orders",description:"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.",source:"@site/docs\\api\\purchase_orders.md",slug:"/api/purchase_orders",permalink:"/api/purchase_orders",version:"current",sidebar:"someSidebar",previous:{title:"Appointments",permalink:"/api/appointments"}},u=[{value:"Listing",id:"listing",children:[{value:"Sample Payload",id:"sample-payload",children:[]}]},{value:"Fields",id:"fields",children:[{value:"id",id:"id",children:[]},{value:"po_number",id:"po_number",children:[]},{value:"name",id:"name",children:[]},{value:"carrier_name",id:"carrier_name",children:[]},{value:"location_name",id:"location_name",children:[]},{value:"outbound",id:"outbound",children:[]},{value:"expected_starts_at",id:"expected_starts_at",children:[]},{value:"expected_ends_at",id:"expected_ends_at",children:[]},{value:"custom_values",id:"custom_values",children:[]},{value:"purchase_order_items",id:"purchase_order_items",children:[]}]}],c={rightToc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below."),Object(i.b)("h2",{id:"listing"},"Listing"),Object(i.b)("p",null,"You can fetch the list of purchase orders using the following API call:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/purchase_orders\n')),Object(i.b)("p",null,"If your API token is ",Object(i.b)("inlineCode",{parentName:"p"},"12345"),", and your location subdomain is ",Object(i.b)("inlineCode",{parentName:"p"},"toronto.acme")," this would look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -H "Authorization: Token 12345" https://toronto.acme.datadocks.com/api/v1/purchase_orders\n')),Object(i.b)("h3",{id:"sample-payload"},"Sample Payload"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'[\n  {\n    "id": 1,\n    "po_number": "A-1000",\n    "name": "A-1000-FastCo-Cereal",\n    "carrier_name": "FastCo",\n    "location_name": "Toronto",\n    "outbound": false,\n    "expected_starts_at": "2020-10-09T13:35:00-04:00",\n    "expected_ends_at": "2020-10-15T13:35:00-04:00",\n    "custom_values": {\n      "expected_at": "2020-10-09",\n      "travel_type": "Plane",\n      "forklift_operator": "Joe "\n    },\n    "purchase_order_items": [\n      {\n        "id": 2,\n        "customer_name": "FishCo",\n        "product_name": "Trout",\n        "unit_name": "Skid",\n        "quantity": 16,\n        "weight": 102,\n        "custom_values": {}\n      },\n      {\n        "id": 1,\n        "customer_name": "FishCo",\n        "product_name": "Cereal",\n        "unit_name": "Skid",\n        "quantity": 33,\n        "weight": 581,\n        "custom_values": {}\n      }\n    ]\n  },\n  {\n    "id": 2,\n    "po_number": "A-2000",\n    "name": "A-2000-FastCo-Laptops",\n    "carrier_name": "FastCo",\n    "location_name": "Vancouver",\n    "outbound": false,\n    "expected_starts_at": "2020-09-30T13:35:00-04:00",\n    "expected_ends_at": "2020-10-14T13:35:00-04:00",\n    "custom_values": {\n      "travel_type": "Bike",\n      "forklift_operator": "Frank"\n    },\n    "purchase_order_items": [\n      {\n        "id": 3,\n        "customer_name": "FishCo",\n        "product_name": "Laptops",\n        "unit_name": "Box",\n        "quantity": 40,\n        "weight": 795,\n        "custom_values": {\n          "travel_type": "Truck",\n          "forklift_operator": "Sam"\n        }\n      },\n      {\n        "id": 4,\n        "customer_name": "FishCo",\n        "product_name": "Trout",\n        "unit_name": "Skid",\n        "quantity": 10,\n        "weight": 152,\n        "custom_values": {\n          "travel_type": "Bike",\n          "forklift_operator": "Jenny"\n        }\n      }\n    ]\n  }\n]\n')),Object(i.b)("h2",{id:"fields"},"Fields"),Object(i.b)("h3",{id:"id"},"id"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: Integer"),Object(i.b)("li",{parentName:"ul"},"Required: True"),Object(i.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(i.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(i.b)("h3",{id:"po_number"},"po_number"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: String"),Object(i.b)("li",{parentName:"ul"},"Required: True"),Object(i.b)("li",{parentName:"ul"},"Description: Purchase order number.")),Object(i.b)("h3",{id:"name"},"name"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: String"),Object(i.b)("li",{parentName:"ul"},"Required: True"),Object(i.b)("li",{parentName:"ul"},"Description: Name that DataDocks assembled internally based on the values in fields and purchase order items."),Object(i.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(i.b)("h3",{id:"carrier_name"},"carrier_name"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: String"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: The name of the carrier the purchase order is assigned to.")),Object(i.b)("h3",{id:"location_name"},"location_name"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: String"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: Name of the location associated with the purchase order."),Object(i.b)("li",{parentName:"ul"},"Possible Values: Optional. Purchase order's don't have to be location specific.")),Object(i.b)("h3",{id:"outbound"},"outbound"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: Boolean"),Object(i.b)("li",{parentName:"ul"},"Required: True"),Object(i.b)("li",{parentName:"ul"},"Description: True if it is an outbound purchase order, False if it is an inbound purchase order. Defaults to False.")),Object(i.b)("h3",{id:"expected_starts_at"},"expected_starts_at"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: DateTime"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: When the purchase order is expected to start.")),Object(i.b)("h3",{id:"expected_ends_at"},"expected_ends_at"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: DateTime"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: When the purchase order is expected to end.")),Object(i.b)("h3",{id:"custom_values"},"custom_values"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: Hash"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the pourchase order.")),Object(i.b)("h3",{id:"purchase_order_items"},"purchase_order_items"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: Array"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: The items (packing lists) belonging to the purchase order.")),Object(i.b)("h4",{id:"purchase_order_items--id"},"purchase_order_items > id"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: Integer"),Object(i.b)("li",{parentName:"ul"},"Required: True"),Object(i.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(i.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(i.b)("h4",{id:"purchase_order_items--customer_name"},"purchase_order_items > customer_name"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: String"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: The name of the customer the item is associated with. ")),Object(i.b)("h4",{id:"purchase_order_items--product_name"},"purchase_order_items > product_name"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: String"),Object(i.b)("li",{parentName:"ul"},"Required: True"),Object(i.b)("li",{parentName:"ul"},"Description: Name of the product the item is associated with.")),Object(i.b)("h4",{id:"purchase_order_items--unit_name"},"purchase_order_items > unit_name"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: String"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: Name of the unit the item is associated with.")),Object(i.b)("h4",{id:"purchase_order_items--quantity"},"purchase_order_items > quantity"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: Decimal"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: The quantity.")),Object(i.b)("h4",{id:"purchase_order_items--weight"},"purchase_order_items > weight"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: Decimal"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: The weight.")),Object(i.b)("h4",{id:"purchase_order_items--custom_values"},"purchase_order_items > custom_values"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: Hash"),Object(i.b)("li",{parentName:"ul"},"Required: False"),Object(i.b)("li",{parentName:"ul"},"Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the item.")))}s.isMDXComponent=!0},93:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(m,o(o({ref:t},c),{},{components:r})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);