const CarDetails=[
    {
        "label": "Listing Title",
        "name": "listingTitle",
        "fieldType": "text",
        "required": true,
        "column": 2,
        "icon": "FaClipboardList"
    },
    {
        "label": "Tagline",
        "name": "tagline",
        "fieldType": "text",
        "column": 2,
        "icon": "FaClipboardList"
    },
    {
        "label": "Original Price",
        "name": "originalPrice",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaClipboardList"
    },
    {
        "label": "Selling Price",
        "name": "sellingPrice",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaClipboardList"
    },
    {
        "label": "Category",
        "name": "category",
        "fieldType": "dropdown",
        "options": [
            "Sedan",
            "SUV",
            "Truck",
            "Coupe",
            "Convertible"
        ],
        "required": true,
        "column": 1,
        "icon": "FaCar"
    },
    {
        "label": "Condition",
        "name": "condition",
        "fieldType": "dropdown",
        "options": [
            "New",
            "Used",
            "Certified Pre-Owned"
        ],
        "required": true,
        "column": 1,
        "icon": "FaCar"
    },
    {
        "label": "Type",
        "name": "type",
        "fieldType": "dropdown",
        "options": [
            "Electric",
            "Hybrid",
            "Petrol",
            "Diesel"
        ],
        "required": true,
        "column": 1,
        "icon": "FaChargingStation"
    },
    {
        "label": "Make",
        "name": "make",
        "fieldType": "dropdown",
        "options": [
            "Toyota",
            "Honda",
            "Ford",
            "Cheverlet",
            "Nissan",
            "Kia",
            "Volvo"
        ],
        "required": true,
        "column": 1,
        "icon": "FaChargingStation"
    },
    {
        "label": "Make",
        "name": "make",
        "fieldType": "dropdown",
        "options": [
            "Toyota",
            "Honda",
            "Ford",
            "Cheverlet",
            "Nissan",
            "Kia",
            "Volvo"
        ],
        "required": true,
        "column": 1,
        "icon": "FaChargingStation"
    },
    {
        "label": "Year",
        "name": "year",
        "fieldType": "number",
        "required": true,
        "column": 1,
        "icon": "FaChargingStation"
    },
    {
        "label": "Description",
        "name": "description",
        "fieldType": "textarea",
        "required": true,
        "column": 1,
        "icon": "FaChargingStation"
    }
]

const features = [
    {
        "label":"Air Conditioner",
        "name":"airConditioner",
        "fieldType":"checkbox",
    },
    {
        "label":"Radio",
        "name":"radio",
        "fieldType":"checkbox",
    },
    {
        "label":"Heater",
        "name":"heater",
        "fieldType":"checkbox",
    },
    {
        "label":"Leather Seats",
        "name":"leatherSeats",
        "fieldType":"checkbox",
    },
    {
        "label":"Touchdscreen Display",
        "name":"touchdscreenDisplay",
        "fieldType":"checkbox",
    },
    {
        "label":"Break Assist",
        "name":"breakAssist",
        "fieldType":"checkbox",
    },
];

export default { CarDetails,features }