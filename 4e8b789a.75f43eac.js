(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),l=(n(0),n(72)),r={id:"appointments",title:"Appointments",slug:"/api/appointments"},b={unversionedId:"api/appointments",id:"api/appointments",isDocsHomePage:!1,title:"Appointments",description:"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.",source:"@site/docs/api/appointments.md",slug:"/api/appointments",permalink:"/api/appointments",editUrl:"https://github.com/nickrakovsky/docs/edit/master/website/docs/api/appointments.md",version:"current",sidebar:"someSidebar",previous:{title:"Pagination",permalink:"/api/pagination"},next:{title:"Purchase Orders",permalink:"/api/purchase_orders"}},u=[{value:"Retreiving a List of Appointments",id:"retreiving-a-list-of-appointments",children:[{value:"Sample Payload",id:"sample-payload",children:[]}]},{value:"Appointment Fields",id:"appointment-fields",children:[{value:"id",id:"id",children:[]},{value:"created_by_id",id:"created_by_id",children:[]},{value:"appointment_number",id:"appointment_number",children:[]},{value:"state",id:"state",children:[]},{value:"dock_id",id:"dock_id",children:[]},{value:"yard_id",id:"yard_id",children:[]},{value:"duration",id:"duration",children:[]},{value:"shipping_number",id:"shipping_number",children:[]},{value:"trailer_number",id:"trailer_number",children:[]},{value:"bol_number",id:"bol_number",children:[]},{value:"carrier_id",id:"carrier_id",children:[]},{value:"carrier_name",id:"carrier_name",children:[]},{value:"carrier_email",id:"carrier_email",children:[]},{value:"driver_name",id:"driver_name",children:[]},{value:"outbound",id:"outbound",children:[]},{value:"drop_trailer",id:"drop_trailer",children:[]},{value:"queued",id:"queued",children:[]},{value:"free_until",id:"free_until",children:[]},{value:"scheduled_at",id:"scheduled_at",children:[]},{value:"approved_at",id:"approved_at",children:[]},{value:"arrived_at",id:"arrived_at",children:[]},{value:"started_at",id:"started_at",children:[]},{value:"completed_at",id:"completed_at",children:[]},{value:"left_at",id:"left_at",children:[]},{value:"cancelled_at",id:"cancelled_at",children:[]},{value:"custom_values",id:"custom_values",children:[]},{value:"packing_lists",id:"packing_lists",children:[]},{value:"notes",id:"notes",children:[]},{value:"documents",id:"documents",children:[]}]}],c={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below."),Object(l.b)("h2",{id:"retreiving-a-list-of-appointments"},"Retreiving a List of Appointments"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),'curl -H "X_AUTH_TOKEN: [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments\n')),Object(l.b)("p",null,"If your API token is ",Object(l.b)("inlineCode",{parentName:"p"},"12345"),", and your location subdomain is ",Object(l.b)("inlineCode",{parentName:"p"},"toronto.acme")," this would look like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),'curl -H "X_AUTH_TOKEN: 12345" https://toronto.acme.datadocks.com/api/v1/appointments\n')),Object(l.b)("h3",{id:"sample-payload"},"Sample Payload"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),'[\n  {\n    "id": 1,\n    "created_by_id": 1,\n    "appointment_number": 1,\n    "state": "left",\n    "dock_id": 2,\n    "yard_id": null,\n    "duration": 120,\n    "shipping_number": "57886",\n    "trailer_number": "2222222",\n    "bol_number": "922",\n    "carrier_id": 7,\n    "carrier_name": "FastCo",\n    "carrier_email": null,\n    "driver_name": "Jason Smith",\n    "outbound": false,\n    "drop_trailer": false,\n    "queued": false,\n    "free_until": null,\n    "scheduled_at": "2020-09-30T06:00:00-04:00",\n    "approved_at": "2020-09-22T13:35:00-04:00",\n    "arrived_at": null,\n    "started_at": "2020-09-24T13:35:00-04:00",\n    "completed_at": "2020-09-24T13:35:00-04:00",\n    "left_at": "2020-09-25T13:35:00-04:00",\n    "cancelled_at": null,\n    "custom_values": {\n      "expected_at": "2020-10-01",\n      "travel_type": "Truck",\n      "forklift_operator": "Sue",\n      "inspection_passed": "1"\n    },\n    "packing_lists": [\n      {\n        "id": 4,\n        "po_number": "A-2000",\n        "product_id": 3,\n        "unit_id": 1,\n        "customer_name": "FishCo",\n        "booked_quantity": 10,\n        "booked_weight": 152,\n        "actual_quantity": 12,\n        "actual_weight": 160,\n        "custom_values": {\n          "barcode": "11223344",\n          "dimensions": "S",\n          "temperature_celcius": "-5"\n        }\n      }\n    ],\n    "notes": [\n      {\n        "id": 3,\n        "user_id": 1,\n        "body": "First note."\n      },\n      {\n        "id": 4,\n        "user_id": 1,\n        "body": "Second note."\n      },\n      {\n        "id": 5,\n        "user_id": 1,\n        "body": "Third note."\n      }\n    ],\n    "documents": []\n  },\n  {\n    "id": 2,\n    "created_by_id": 1,\n    "appointment_number": 2,\n    "state": "left",\n    "dock_id": null,\n    "yard_id": 1,\n    "duration": 180,\n    "shipping_number": "18234",\n    "trailer_number": "432233222",\n    "bol_number": "37014",\n    "carrier_id": 7,\n    "carrier_name": "FastCo",\n    "carrier_email": null,\n    "driver_name": "Brad Jones",\n    "outbound": true,\n    "drop_trailer": false,\n    "queued": false,\n    "free_until": null,\n    "scheduled_at": "2020-09-22T13:00:00-04:00",\n    "approved_at": "2020-09-22T13:35:00-04:00",\n    "arrived_at": null,\n    "started_at": "2020-09-24T13:35:00-04:00",\n    "completed_at": "2020-09-24T13:35:00-04:00",\n    "left_at": "2020-09-25T13:35:00-04:00",\n    "cancelled_at": null,\n    "custom_values": {\n      "expected_at": "2020-09-22",\n      "travel_type": "Ship",\n      "forklift_operator": "Mary"\n    },\n    "packing_lists": [\n      {\n        "id": 5,\n        "po_number": "A-4000",\n        "product_id": 3,\n        "unit_id": 1,\n        "customer_name": "FishCo",\n        "booked_quantity": 13,\n        "booked_weight": 298,\n        "actual_quantity": 12,\n        "actual_weight": 290,\n        "custom_values": {\n          "barcode": "33222311",\n          "dimensions": "M",\n          "temperature_celcius": "-4"\n        }\n      },\n      {\n        "id": 6,\n        "po_number": "B-4000",\n        "product_id": 3,\n        "unit_id": 1,\n        "customer_name": "FishCo",\n        "booked_quantity": 16,\n        "booked_weight": 111,\n        "actual_quantity": 17,\n        "actual_weight": 120,\n        "custom_values": {\n          "barcode": "23302911",\n          "dimensions": "L",\n          "temperature_celcius": "-2"\n        }\n      }\n    ],\n    "notes": [\n      {\n        "id": 1,\n        "user_id": 1,\n        "body": "This is a note."\n      },\n      {\n        "id": 2,\n        "user_id": 1,\n        "body": "This is another note."\n      }\n    ],\n    "documents": []\n  }\n]\n')),Object(l.b)("h2",{id:"appointment-fields"},"Appointment Fields"),Object(l.b)("h3",{id:"id"},"id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(l.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(l.b)("h3",{id:"created_by_id"},"created_by_id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: The internal DataDocks ID of the user who created the appointment."),Object(l.b)("li",{parentName:"ul"},"Possible Values: A valid user with access to the appointment's location.")),Object(l.b)("h3",{id:"appointment_number"},"appointment_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: The automatically sequenced number for the appointment."),Object(l.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(l.b)("h3",{id:"state"},"state"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: The state / status of the appointments."),Object(l.b)("li",{parentName:"ul"},"Possible Values:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"needs_booking")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pending")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"booked")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arrived")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"started")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"completed")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"left")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cancelled"))))),Object(l.b)("h3",{id:"dock_id"},"dock_id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The internal DataDocks ID of the dock the appointment is assigned to."),Object(l.b)("li",{parentName:"ul"},"Possible Values: A valid dock at the appointment's location.")),Object(l.b)("h3",{id:"yard_id"},"yard_id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The internal DataDocks ID of the yard the appointment is assigned to."),Object(l.b)("li",{parentName:"ul"},"Possible Values: A valid yard at the appointment's location.")),Object(l.b)("h3",{id:"duration"},"duration"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: The duration of the appointment in minutes."),Object(l.b)("li",{parentName:"ul"},"Possible Values: Must be greater than 0.")),Object(l.b)("h3",{id:"shipping_number"},"shipping_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The shipping number.")),Object(l.b)("h3",{id:"trailer_number"},"trailer_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The trailer number.")),Object(l.b)("h3",{id:"bol_number"},"bol_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The BOL number.")),Object(l.b)("h3",{id:"carrier_id"},"carrier_id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The internal DataDocks ID of the carrier the appointment is assigned to."),Object(l.b)("li",{parentName:"ul"},"Possible Values: A valid carrier in the appointment's organization.")),Object(l.b)("h3",{id:"carrier_name"},"carrier_name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The name of the carrier the appointment is assigned to.")),Object(l.b)("h3",{id:"carrier_email"},"carrier_email"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The email of the carrier the appointment is assigned to if not carrier was found / specified.")),Object(l.b)("h3",{id:"driver_name"},"driver_name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The driver.")),Object(l.b)("h3",{id:"outbound"},"outbound"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: True if it is an outbound appointment, False if it is an inbound appointment. Defaults to False.")),Object(l.b)("h3",{id:"drop_trailer"},"drop_trailer"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: Whether or not it's a drop trailer. Defaults to False.")),Object(l.b)("h3",{id:"queued"},"queued"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Boolean"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: Whether or not it's been queued for a specific date, but not yet scheduled. Defaults to False.")),Object(l.b)("h3",{id:"free_until"},"free_until"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: ?")),Object(l.b)("h3",{id:"scheduled_at"},"scheduled_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment is scheduled for.")),Object(l.b)("h3",{id:"approved_at"},"approved_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment was approved.")),Object(l.b)("h3",{id:"arrived_at"},"arrived_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment arrived.")),Object(l.b)("h3",{id:"started_at"},"started_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment started processing.")),Object(l.b)("h3",{id:"completed_at"},"completed_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment completed processing.")),Object(l.b)("h3",{id:"left_at"},"left_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment left the property.")),Object(l.b)("h3",{id:"cancelled_at"},"cancelled_at"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: DateTime"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: When the appointment was cancelled.")),Object(l.b)("h3",{id:"custom_values"},"custom_values"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Hash"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the appointment.")),Object(l.b)("h3",{id:"packing_lists"},"packing_lists"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Array"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The packing lists belonging to the appointment.")),Object(l.b)("h4",{id:"packing_lists--id"},"packing_lists > id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(l.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(l.b)("h4",{id:"packing_lists--po_number"},"packing_lists > po_number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: Purchase order number the packing list is associated with.")),Object(l.b)("h4",{id:"packing_lists--product_id"},"packing_lists > product_id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Int"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier for the product the packing list is associated with.")),Object(l.b)("h4",{id:"packing_lists--unit_id"},"packing_lists > unit_id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Int"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier for the unit the packing list is associated with.")),Object(l.b)("h4",{id:"packing_lists--customer_name"},"packing_lists > customer_name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The name of the customer the packing list is associated with. ")),Object(l.b)("h4",{id:"packing_lists--booked_quantity"},"packing_lists > booked_quantity"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Decimal"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The booked quantity.")),Object(l.b)("h4",{id:"packing_lists--booked_weight"},"packing_lists > booked_weight"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Decimal"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The booked weight.")),Object(l.b)("h4",{id:"packing_lists--actual_quantity"},"packing_lists > actual_quantity"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Decimal"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The actual quantity.")),Object(l.b)("h4",{id:"packing_lists--actual_weight"},"packing_lists > actual_weight"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Decimal"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The actual weight.")),Object(l.b)("h4",{id:"packing_lists--custom_values"},"packing_lists > custom_values"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Hash"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the packing list.")),Object(l.b)("h3",{id:"notes"},"notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Array"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The notes attached to the appointment.")),Object(l.b)("h4",{id:"notes--id"},"notes > id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier."),Object(l.b)("li",{parentName:"ul"},"Possible Values: Cannot be set externally.")),Object(l.b)("h4",{id:"notes--user_id"},"notes > user_id"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Integer"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: DataDocks internal unique identifier for the user that created the note.")),Object(l.b)("h4",{id:"notes--body"},"notes > body"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: String"),Object(l.b)("li",{parentName:"ul"},"Required: True"),Object(l.b)("li",{parentName:"ul"},"Description: The contents / body of the note.")),Object(l.b)("h3",{id:"documents"},"documents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: Array"),Object(l.b)("li",{parentName:"ul"},"Required: False"),Object(l.b)("li",{parentName:"ul"},"Description: The documents attached to the appointment.")))}p.isMDXComponent=!0},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),o=p(n),s=i,m=o["".concat(r,".").concat(s)]||o[s]||d[s]||l;return n?a.a.createElement(m,b(b({ref:t},c),{},{components:n})):a.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=s;var b={};for(var u in t)hasOwnProperty.call(t,u)&&(b[u]=t[u]);b.originalType=e,b.mdxType="string"==typeof e?e:i,r[1]=b;for(var c=2;c<l;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);