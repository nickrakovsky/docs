(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{56:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(2),n=(r(0),r(72));const i={id:"purchase_orders",title:"Purchase Orders"},o={unversionedId:"api/purchase_orders",id:"api/purchase_orders",isDocsHomePage:!1,title:"Purchase Orders",description:"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.",source:"@site/docs/api/purchase_orders.md",slug:"/api/purchase_orders",permalink:"/api/purchase_orders",editUrl:"https://github.com/nickrakovsky/docs/edit/master/website/docs/api/purchase_orders.md",version:"current",sidebar:"someSidebar",previous:{title:"Appointments",permalink:"/api/appointments"}},l=[{value:"Retreiving a List of Purchase Orders",id:"retreiving-a-list-of-purchase-orders",children:[{value:"Sample Payload",id:"sample-payload",children:[]}]},{value:"Purchase Order Fields",id:"purchase-order-fields",children:[{value:"id",id:"id",children:[]},{value:"po_number",id:"po_number",children:[]},{value:"name",id:"name",children:[]},{value:"carrier_name",id:"carrier_name",children:[]},{value:"location",id:"location",children:[]},{value:"outbound",id:"outbound",children:[]},{value:"expected_starts_at",id:"expected_starts_at",children:[]},{value:"expected_ends_at",id:"expected_ends_at",children:[]},{value:"custom_values",id:"custom_values",children:[]},{value:"purchase_order_items",id:"purchase_order_items",children:[]}]}],c={rightToc:l};function u({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below."),Object(n.b)("h2",{id:"retreiving-a-list-of-purchase-orders"},"Retreiving a List of Purchase Orders"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/purchase_orders\n')),Object(n.b)("p",null,"If your API token is ",Object(n.b)("inlineCode",{parentName:"p"},"12345"),", and your location subdomain is ",Object(n.b)("inlineCode",{parentName:"p"},"toronto.acme")," this would look like:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -H "Authorization: Token 12345" https://toronto.acme.datadocks.com/api/v1/purchase_orders\n')),Object(n.b)("h3",{id:"sample-payload"},"Sample Payload"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),'[\n  {\n    "id": 1,\n    "po_number": "A-1000",\n    "name": "A-1000-FastCo-Cereal",\n    "carrier_name": "FastCo",\n    "location": "Toronto",\n    "outbound": false,\n    "expected_starts_at": "2020-10-09T13:35:00-04:00",\n    "expected_ends_at": "2020-10-15T13:35:00-04:00",\n    "custom_values": {\n      "expected_at": "2020-10-09",\n      "travel_type": "Plane",\n      "forklift_operator": "Joe "\n    },\n    "purchase_order_items": [\n      {\n        "id": 2,\n        "customer_name": "FishCo",\n        "product": "Trout",\n        "unit": "Skid",\n        "quantity": 16,\n        "weight": 102,\n        "custom_values": {}\n      },\n      {\n        "id": 1,\n        "customer_name": "FishCo",\n        "product": "Cereal",\n        "unit": "Skid",\n        "quantity": 33,\n        "weight": 581,\n        "custom_values": {}\n      }\n    ]\n  },\n  {\n    "id": 2,\n    "po_number": "A-2000",\n    "name": "A-2000-FastCo-Laptops",\n    "carrier_name": "FastCo",\n    "location": "Vancouver",\n    "outbound": false,\n    "expected_starts_at": "2020-09-30T13:35:00-04:00",\n    "expected_ends_at": "2020-10-14T13:35:00-04:00",\n    "custom_values": {\n      "travel_type": "Bike",\n      "forklift_operator": "Frank"\n    },\n    "purchase_order_items": [\n      {\n        "id": 3,\n        "customer_name": "FishCo",\n        "product": "Laptops",\n        "unit": "Box",\n        "quantity": 40,\n        "weight": 795,\n        "custom_values": {\n          "travel_type": "Truck",\n          "forklift_operator": "Sam"\n        }\n      },\n      {\n        "id": 4,\n        "customer_name": "FishCo",\n        "product": "Trout",\n        "unit": "Skid",\n        "quantity": 10,\n        "weight": 152,\n        "custom_values": {\n          "travel_type": "Bike",\n          "forklift_operator": "Jenny"\n        }\n      }\n    ]\n  }\n]\n')),Object(n.b)("h2",{id:"purchase-order-fields"},"Purchase Order Fields"),Object(n.b)("h3",{id:"id"},"id"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: Integer"),Object(n.b)("li",{parentName:"ul"},"Required: True"),Object(n.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(n.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(n.b)("h3",{id:"po_number"},"po_number"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: String"),Object(n.b)("li",{parentName:"ul"},"Required: True"),Object(n.b)("li",{parentName:"ul"},"Description: Purchase order number.")),Object(n.b)("h3",{id:"name"},"name"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: String"),Object(n.b)("li",{parentName:"ul"},"Required: True"),Object(n.b)("li",{parentName:"ul"},"Description: Name that DataDocks assembled internally based on the values in fields and purchase order items."),Object(n.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(n.b)("h3",{id:"carrier_name"},"carrier_name"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: String"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: The name of the carrier the purchase order is assigned to.")),Object(n.b)("h3",{id:"location"},"location"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: String"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: Name of the location associated with the purchase order."),Object(n.b)("li",{parentName:"ul"},"Possible Values: Optional. Purchase order's don't have to be location specific.")),Object(n.b)("h3",{id:"outbound"},"outbound"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: Boolean"),Object(n.b)("li",{parentName:"ul"},"Required: True"),Object(n.b)("li",{parentName:"ul"},"Description: True if it is an outbound purchase order, False if it is an inbound purchase order. Defaults to False.")),Object(n.b)("h3",{id:"expected_starts_at"},"expected_starts_at"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: DateTime"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: When the purchase order is expected to start.")),Object(n.b)("h3",{id:"expected_ends_at"},"expected_ends_at"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: DateTime"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: When the purchase order is expected to end.")),Object(n.b)("h3",{id:"custom_values"},"custom_values"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: Hash"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the pourchase order.")),Object(n.b)("h3",{id:"purchase_order_items"},"purchase_order_items"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: Array"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: The items (packing lists) belonging to the purchase order.")),Object(n.b)("h4",{id:"purchase_order_items--id"},"purchase_order_items > id"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: Integer"),Object(n.b)("li",{parentName:"ul"},"Required: True"),Object(n.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(n.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(n.b)("h4",{id:"purchase_order_items--customer_name"},"purchase_order_items > customer_name"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: String"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: The name of the customer the item is associated with. ")),Object(n.b)("h4",{id:"purchase_order_items--product"},"purchase_order_items > product"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: Int"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: Name of the product the item is associated with.")),Object(n.b)("h4",{id:"purchase_order_items--unit"},"purchase_order_items > unit"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: Int"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: Name of the unit the item is associated with.")),Object(n.b)("h4",{id:"purchase_order_items--quantity"},"purchase_order_items > quantity"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: Decimal"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: The quantity.")),Object(n.b)("h4",{id:"purchase_order_items--weight"},"purchase_order_items > weight"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: Decimal"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: The weight.")),Object(n.b)("h4",{id:"purchase_order_items--custom_values"},"purchase_order_items > custom_values"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Type: Hash"),Object(n.b)("li",{parentName:"ul"},"Required: False"),Object(n.b)("li",{parentName:"ul"},"Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the item.")))}u.isMDXComponent=!0},72:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(r),d=a,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return r?n.a.createElement(m,l(l({ref:t},u),{},{components:r})):n.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);