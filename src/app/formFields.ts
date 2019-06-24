export default [
    {
        "fieldId": "form.name",
        "type": "input",
        "label": "Username",
        "index": "1",
        "inputType": "text",
        "name": "name",
        "ruleApplicable": true,
        "validations": [
            {
                "name": "required"
            }
        ],
        "additionalButton": {
            "text": "Add Explanation"
        }
    },
    {
        "fieldId": "form.name",
        "type": "input",
        "label": "Email Address",
        "index": "2",
        "inputType": "email",
        "name": "email",
        "ruleApplicable": true,
        "validations": [
            {
                "name": "required"
            }
        ],
        "additionalButton": {
            "text": "Add Comments"
        }
    },
    {
        "fieldId": "form.name",
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
        "fieldId": "form.name",
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
        "fieldId": "form.name",
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
        "fieldId": "form.name",
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
        "fieldId": "form.name",
        "type": "checkbox",
        "label": "Accept Terms",
        "name": "term",
        "value": true
    },
    {
        "fieldId": "form.name",
        "type": "button",
        "buttonType": "Previos",
        "label": "Previos"
    },
    {
        "fieldId": "form.name",
        "type": "button",
        "buttonType": "Next",
        "label": "Next"
    }
]