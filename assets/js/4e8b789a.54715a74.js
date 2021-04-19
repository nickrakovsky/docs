(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(r,".").concat(s)]||u[s]||d[s]||l;return n?i.a.createElement(m,b(b({ref:t},c),{},{components:n})):i.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var c=2;c<l;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),l=(n(0),n(111)),r={id:"appointments",title:"Appointments",slug:"/api/appointments"},b={unversionedId:"api/appointments",id:"api/appointments",isDocsHomePage:!1,title:"Appointments",description:"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.",source:"@site/docs/api/appointments.md",slug:"/api/appointments",permalink:"/api/appointments",version:"current",sidebar:"someSidebar",previous:{title:"Pagination",permalink:"/api/pagination"},next:{title:"Purchase Orders",permalink:"/api/purchase_orders"}},o=[{value:"Listing",id:"listing",children:[{value:"Filtering",id:"filtering",children:[]},{value:"Sample Payload",id:"sample-payload",children:[]}]},{value:"Fields",id:"fields",children:[{value:"id",id:"id",children:[]},{value:"appointment_number",id:"appointment_number",children:[]},{value:"state",id:"state",children:[]},{value:"duration",id:"duration",children:[]},{value:"shipping_number",id:"shipping_number",children:[]},{value:"trailer_number",id:"trailer_number",children:[]},{value:"bol_number",id:"bol_number",children:[]},{value:"carrier_name",id:"carrier_name",children:[]},{value:"carrier_email",id:"carrier_email",children:[]},{value:"driver_name",id:"driver_name",children:[]},{value:"created_by",id:"created_by",children:[]},{value:"outbound",id:"outbound",children:[]},{value:"drop_trailer",id:"drop_trailer",children:[]},{value:"queued",id:"queued",children:[]},{value:"dock_name",id:"dock_name",children:[]},{value:"yard_name",id:"yard_name",children:[]},{value:"free_until",id:"free_until",children:[]},{value:"scheduled_at",id:"scheduled_at",children:[]},{value:"approved_at",id:"approved_at",children:[]},{value:"arrived_at",id:"arrived_at",children:[]},{value:"started_at",id:"started_at",children:[]},{value:"completed_at",id:"completed_at",children:[]},{value:"left_at",id:"left_at",children:[]},{value:"cancelled_at",id:"cancelled_at",children:[]},{value:"custom_values",id:"custom_values",children:[]},{value:"packing_lists",id:"packing_lists",children:[]},{value:"notes",id:"notes",children:[]},{value:"documents",id:"documents",children:[]}]},{value:"Creating Appointments",id:"creating-appointments",children:[]},{value:"Updating Appointments",id:"updating-appointments",children:[]}],c={toc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below."),Object(l.b)("h2",{id:"listing"},"Listing"),Object(l.b)("p",null,"You can fetch the list of appointments using the following API call:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments\n')),Object(l.b)("p",null,"If your API token is ",Object(l.b)("inlineCode",{parentName:"p"},"12345"),", and your location subdomain is ",Object(l.b)("inlineCode",{parentName:"p"},"toronto-acme")," this would look like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -H "Authorization: Token 12345" https://toronto-acme.datadocks.com/api/v1/appointments\n')),Object(l.b)("p",null,"You can pass the following parameters to filter the list of appointments returned:"),Object(l.b)("h3",{id:"filtering"},"Filtering"),Object(l.b)("h4",{id:"po_number"},"po_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Description: The purchase order number to filter on. This is an exact match if provided.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments?po_number=12345\n')),Object(l.b)("h4",{id:"from"},"from"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String representation of a date / time."),Object(l.b)("li",{parentName:"ul"},"Description: Filter results scheduled on or after the passed date / time. The date / time passed will be localized to the location's timezone.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments?from=2020-01-01%2012:00%20PM\n')),Object(l.b)("h4",{id:"to"},"to"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String representation of a date / time."),Object(l.b)("li",{parentName:"ul"},"Description: Filter results scheduled before the passed date / time. The date / time passed will be localized to the location's timezone.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments?to=2020-01-02%2012:00%20PM\n')),Object(l.b)("h4",{id:"combining-filters"},"Combining Filters"),Object(l.b)("p",null,"You can combine parameters by separating them with an ampersand like so:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments?po_number=12345&from=2020-01-01%2012:00%20PM&to=2020-01-02%2012:00%20PM\n')),Object(l.b)("h3",{id:"sample-payload"},"Sample Payload"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'[\n  {\n    "id": 1,\n    "appointment_number": 1,\n    "state": "left",\n    "duration": 120,\n    "shipping_number": "57886",\n    "trailer_number": "2222222",\n    "bol_number": "922",\n    "carrier_name": "FastCo",\n    "driver_name": "Jason Smith",\n    "created_by": "Sysadmin",\n    "outbound": false,\n    "drop_trailer": false,\n    "queued": false,\n    "dock_name": "Dock 2",\n    "yard_name": null,\n    "free_until": null,\n    "scheduled_at": "2020-09-30T06:00:00-04:00",\n    "approved_at": "2020-09-22T13:35:00-04:00",\n    "arrived_at": null,\n    "started_at": "2020-09-24T13:35:00-04:00",\n    "completed_at": "2020-09-24T13:35:00-04:00",\n    "left_at": "2020-09-25T13:35:00-04:00",\n    "cancelled_at": null,\n    "custom_values": {\n      "expected_at": "2020-10-01",\n      "travel_type": "Truck",\n      "forklift_operator": "Sue",\n      "inspection_passed": "1"\n    },\n    "packing_lists": [\n      {\n        "id": 4,\n        "po_number": "A-2000",\n        "customer_name": "FishCo",\n        "product_name": "Trout",\n        "unit_name": "Skid",\n        "booked_quantity": 10,\n        "booked_weight": 152,\n        "actual_quantity": 12,\n        "actual_weight": 160,\n        "custom_values": {\n          "barcode": "11223344",\n          "dimensions": "S",\n          "temperature_celcius": "-5"\n        }\n      }\n    ],\n    "notes": [\n      {\n        "id": 3,\n        "body": "First note."\n      },\n      {\n        "id": 4,\n        "body": "Second note."\n      },\n      {\n        "id": 5,\n        "body": "Third note."\n      }\n    ],\n    "documents": []\n  },\n  {\n    "id": 2,\n    "appointment_number": 2,\n    "state": "left",\n    "duration": 180,\n    "shipping_number": "18234",\n    "trailer_number": "432233222",\n    "bol_number": "37014",\n    "carrier_name": "FastCo",\n    "driver_name": "Brad Jones",\n    "created_by": "Sysadmin",\n    "outbound": true,\n    "drop_trailer": false,\n    "queued": false,\n    "dock_name": null,\n    "yard_name": "Yard A",\n    "free_until": null,\n    "scheduled_at": "2020-09-22T13:00:00-04:00",\n    "approved_at": "2020-09-22T13:35:00-04:00",\n    "arrived_at": null,\n    "started_at": "2020-09-24T13:35:00-04:00",\n    "completed_at": "2020-09-24T13:35:00-04:00",\n    "left_at": "2020-09-25T13:35:00-04:00",\n    "cancelled_at": null,\n    "custom_values": {\n      "expected_at": "2020-09-22",\n      "travel_type": "Ship",\n      "forklift_operator": "Mary"\n    },\n    "packing_lists": [\n      {\n        "id": 5,\n        "po_number": "A-4000",\n        "customer_name": "FishCo",\n        "product_name": "Trout",\n        "unit_name": "Skid",\n        "booked_quantity": 13,\n        "booked_weight": 298,\n        "actual_quantity": 12,\n        "actual_weight": 290,\n        "custom_values": {\n          "barcode": "33222311",\n          "dimensions": "M",\n          "temperature_celcius": "-4"\n        }\n      },\n      {\n        "id": 6,\n        "po_number": "B-4000",\n        "customer_name": "FishCo",\n        "product_name": "Trout",\n        "unit_name": "Skid",\n        "booked_quantity": 16,\n        "booked_weight": 111,\n        "actual_quantity": 17,\n        "actual_weight": 120,\n        "custom_values": {\n          "barcode": "23302911",\n          "dimensions": "L",\n          "temperature_celcius": "-2"\n        }\n      }\n    ],\n    "notes": [\n      {\n        "id": 1,\n        "body": "This is a note."\n      },\n      {\n        "id": 2,\n        "body": "This is another note."\n      }\n    ],\n    "documents": []\n  }\n]\n')),Object(l.b)("h2",{id:"fields"},"Fields"),Object(l.b)("h3",{id:"id"},"id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(l.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(l.b)("h3",{id:"appointment_number"},"appointment_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: The automatically sequenced number for the appointment."),Object(l.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(l.b)("h3",{id:"state"},"state"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: The state / status of the appointments."),Object(l.b)("li",{parentName:"ul"},"Possible Values:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"needs_booking")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pending")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"booked")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arrived")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"started")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"completed")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"left")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cancelled"))))),Object(l.b)("h3",{id:"duration"},"duration"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: The duration of the appointment in minutes."),Object(l.b)("li",{parentName:"ul"},"Possible Values: Must be greater than 0.")),Object(l.b)("h3",{id:"shipping_number"},"shipping_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The shipping number.")),Object(l.b)("h3",{id:"trailer_number"},"trailer_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The trailer number.")),Object(l.b)("h3",{id:"bol_number"},"bol_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The BOL number.")),Object(l.b)("h3",{id:"carrier_name"},"carrier_name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The name of the carrier the appointment is assigned to.")),Object(l.b)("h3",{id:"carrier_email"},"carrier_email"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The email of the carrier the appointment is assigned to if not carrier was found / specified.")),Object(l.b)("h3",{id:"driver_name"},"driver_name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The driver.")),Object(l.b)("h3",{id:"created_by"},"created_by"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The name of the user who created the appointment.")),Object(l.b)("h3",{id:"outbound"},"outbound"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: True if it is an outbound appointment, False if it is an inbound appointment. Defaults to False.")),Object(l.b)("h3",{id:"drop_trailer"},"drop_trailer"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: Whether or not it's a drop trailer. Defaults to False.")),Object(l.b)("h3",{id:"queued"},"queued"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: Whether or not it's been queued for a specific date, but not yet scheduled. Defaults to False.")),Object(l.b)("h3",{id:"dock_name"},"dock_name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The name of the dock the appointment is assigned to."),Object(l.b)("li",{parentName:"ul"},"Possible Values: A valid dock at the appointment's location.")),Object(l.b)("h3",{id:"yard_name"},"yard_name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The name of the yard the appointment is assigned to."),Object(l.b)("li",{parentName:"ul"},"Possible Values: A valid yard at the appointment's location.")),Object(l.b)("h3",{id:"free_until"},"free_until"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: ?")),Object(l.b)("h3",{id:"scheduled_at"},"scheduled_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment is scheduled for.")),Object(l.b)("h3",{id:"approved_at"},"approved_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment was approved.")),Object(l.b)("h3",{id:"arrived_at"},"arrived_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment arrived.")),Object(l.b)("h3",{id:"started_at"},"started_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment started processing.")),Object(l.b)("h3",{id:"completed_at"},"completed_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment completed processing.")),Object(l.b)("h3",{id:"left_at"},"left_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment left the property.")),Object(l.b)("h3",{id:"cancelled_at"},"cancelled_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment was cancelled.")),Object(l.b)("h3",{id:"custom_values"},"custom_values"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Hash"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the appointment.")),Object(l.b)("h3",{id:"packing_lists"},"packing_lists"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Array"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The packing lists belonging to the appointment.")),Object(l.b)("h4",{id:"packing_lists--id"},"packing_lists > id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(l.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(l.b)("h4",{id:"packing_lists--po_number"},"packing_lists > po_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: Purchase order number the packing list is associated with.")),Object(l.b)("h4",{id:"packing_lists--customer_name"},"packing_lists > customer_name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The name of the customer the packing list is associated with. ")),Object(l.b)("h4",{id:"packing_lists--product_name"},"packing_lists > product_name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The name of the product the packing list is associated with.")),Object(l.b)("h4",{id:"packing_lists--unit_name"},"packing_lists > unit_name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The name of the unit the packing list is associated with.")),Object(l.b)("h4",{id:"packing_lists--booked_quantity"},"packing_lists > booked_quantity"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Decimal"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The booked quantity.")),Object(l.b)("h4",{id:"packing_lists--booked_weight"},"packing_lists > booked_weight"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Decimal"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The booked weight.")),Object(l.b)("h4",{id:"packing_lists--actual_quantity"},"packing_lists > actual_quantity"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Decimal"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The actual quantity.")),Object(l.b)("h4",{id:"packing_lists--actual_weight"},"packing_lists > actual_weight"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Decimal"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The actual weight.")),Object(l.b)("h4",{id:"packing_lists--custom_values"},"packing_lists > custom_values"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Hash"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the packing list.")),Object(l.b)("h3",{id:"notes"},"notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Array"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The notes attached to the appointment.")),Object(l.b)("h4",{id:"notes--id"},"notes > id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(l.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(l.b)("h4",{id:"notes--body"},"notes > body"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: The contents / body of the note.")),Object(l.b)("h3",{id:"documents"},"documents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Array"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The documents attached to the appointment.")),Object(l.b)("h2",{id:"creating-appointments"},"Creating Appointments"),Object(l.b)("p",null,"You can create an appointment using the following API call and providing the appointment data in JSON format."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -v \\\n  -H "Accept: application/json" \\\n  -H "Content-type: application/json" \\\n  -H "Authorization: Token [api_token]" \\\n  -X POST \\\n  -d \'{"appointment": {"carrier_name": "My Shipping Co.", "shipping_number": "AA11223344"}}\' \\\n  https://[location_subdomain].datadocks.com/api/v1/appointments\n')),Object(l.b)("p",null,"If your API token is ",Object(l.b)("inlineCode",{parentName:"p"},"12345"),", and your location subdomain is ",Object(l.b)("inlineCode",{parentName:"p"},"toronto-acme")," this would look like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -v \\\n  -H "Accept: application/json" \\\n  -H "Content-type: application/json" \\\n  -H "Authorization: Token 12345" \\\n  -X POST \\\n  -d \'{"appointment": {"carrier_name": "My Shipping Co.", "shipping_number": "AA11223344"}}\' \\\n  https://toronto-acme.datadocks.com/api/v1/appointments\n')),Object(l.b)("h2",{id:"updating-appointments"},"Updating Appointments"),Object(l.b)("p",null,"You can update an appointment using the following API call and providing the appointment data in JSON format. Note that the URL requires the appointment ID at the end (the DataDocks appointment ID)."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -v \\\n  -H "Accept: application/json" \\\n  -H "Content-type: application/json" \\\n  -H "Authorization: Token [api_token]" \\\n  -X PUT \\\n  -d \'{"appointment": {"shipping_number": "BB55667788"}}\' \\\n  https://[location_subdomain].datadocks.com/api/v1/appointments/[company_id]\n')),Object(l.b)("p",null,"If your API token is ",Object(l.b)("inlineCode",{parentName:"p"},"12345"),", your location subdomain is ",Object(l.b)("inlineCode",{parentName:"p"},"toronto-acme"),", and the appointment ID you want to update is ",Object(l.b)("inlineCode",{parentName:"p"},"1")," this would look like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -v \\\n  -H "Accept: application/json" \\\n  -H "Content-type: application/json" \\\n  -H "Authorization: Token 12345" \\\n  -X PUT \\\n  -d \'{"appointment": {"shipping_number": "BB55667788"}}\' \\\n  https://toronto-acme.datadocks.com/api/v1/appointments/1\n')))}p.isMDXComponent=!0}}]);