export default [
    {
        "type": "input",
        "label": "Username",
        "inputType": "text",
        "name": "name",
        "validations": [
            {
                "name": "required"
            }
        ]
    },
    {
        "type": "input",
        "label": "Email Address",
        "inputType": "email",
        "name": "email",
        "validations": [
            {
                "name": "required"
            }
        ]
    },
    {
        "type": "input",
        "label": "Password",
        "inputType": "password",
        "name": "password",
        "validations": [
            {
                "name": "required"
            }
        ]
    },
    {
        "type": "radiobutton",
        "label": "Gender",
        "name": "gender",
        "options": [
            "Male",
            "Female"
        ],
        "value": "Male"
    },
    {
        "type": "date",
        "label": "DOB",
        "name": "dob",
        "validations": [
            {
                "name": "required"
            }
        ]
    },
    {
        "type": "select",
        "label": "Country",
        "name": "country",
        "value": "UK",
        "options": [
            "India",
            "UAE",
            "UK",
            "US"
        ]
    },
    {
        "type": "checkbox",
        "label": "Accept Terms",
        "name": "term",
        "value": true
    },
    {
        "type": "button",
        "label": "Save"
    }
]