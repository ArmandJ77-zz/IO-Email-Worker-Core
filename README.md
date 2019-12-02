# IO Email Worker Core

This is a core library used by the IO-Email-Worker and IO-Email-Worker-Utility for the parsing, conversion and sending of an mjml template as HTML to predefined smtp accounts using nodemailer.

## How to use

Install:

`npm i io-email-worker-core --save-dev`

Import

`import IO_EWC from 'io-email-worker-core'`

The interface:

```

IO_EWC.validateStructure(rawData, template); => returns a customResponseObject
IO_EWC.validateValues(rawData, template); => returns a customResponseObject
IO_EWC.injectData(rawData, template); => returns a customResponseObject
IO_EWC.generate(rawData, template); => returns a customResponseObject

IO_EWC.send(smtpAccount, emailOptionsCollection); => returns a promise
IO_EWC.generateAndSend(rawData, template); => returns a promise


```

If the modules section is TL;DR simply:

`let result = IO_EWC.generateAndSend(rawData, dataTemplate, emailTemplate);`

gg easy :D, but note this approach uses the DISTRIBUTION_EMAIL_ADDRESS & DISTRIBUTION_EMAIL_PASSWORD configured in the .env file. Later versions would be more generic and support different email providers other than gmail.

## Modules

### Structure Validation Handler

This module uses the raw data json structure and compares it to with the data template json. Validation will fail if nodes are missing.

Currently this does not support multi layered nodes, so keep it to a flat structure and you should be good.

To validate the json structure use:

usage:

`let result = IO_EWC.validateStructure(dataTemplate, rawData);`

result:

```

[
     {
        index: 0,
        isSuccess: true,
        errors: null
    }
]

```

Failed results have the same data structure as value validation.

### Value Validation Handler

This takes the content of the raw data json and verifies that it adheres to the content types and validation rules of the data template. Like type checks, null checks, required fields, data format ect. Note for date format use the momentjs documentation.

To validate the json structure use:

usage:

`let result = IO_EWC.validateValues(dataTemplate, rawData);`

Success result:

```

{
    isSuccess: true,
    errors: []
}

```

Example of failed result:

```

{
  isSuccess: false,
  errors: [
    'valueRequired check failed on node 0: Name value ',
    'number check failed on node 0: Age value sdfasdfasdf',
    'email check failed on node 0: Email value rocketman9000',
    'boolean check failed on node 0: HasCarInSpace value qwerty',
    'valueRequired check failed on node 1: HasCarInSpace value ',
    'boolean check failed on node 1: HasCarInSpace value '
  ]
}

```

### Data Injection Handler

Takes the raw data and injects it into the handlebars variables

usage:

`let result = IO_EWC.injectData(rawData, emailTemplate);`

result:

```

{
  isSuccess: true,
  data:
    [
        {
            rawDataIndex: 0,
            sendToEmail: 'rocketman9000@marsmail.com',
            data: '<mjml>Your email template with data injected</mjml>'
        }
    ]
}

```

### Generation Handler

Takes in a mjml formatted template and parses it to HTML.

Goes without saying that you might want to use the result of the data injection or you could roll your own.

usage:

`let result = IO_EWC.generate(dataInjectionResult.data);`

result:

```

{
  isSuccess: true,
  data: [
    {
      rawDataIndex: 0,
      sendToEmail: 'rocketman9000@marsmail.com',
      data: 'string of your generated html'
    }
  ]
}

```

### Distribution Handler

This handler uses the result of the generate function's data node and returns a promise as the email sending is async
usage:

```

IO_EWC.send(
  smtpAccount,
  generationResult.data // or an array of emailCollection
)
  .then(res => console.log(res))
  .catch(ex => console.log(ex));

```

## JSON Data Structure

```

AValidDataStructure:{
  data: {
    emailTemplate:
      '<mjml><mj-head><mj-attributes><mj-text font-family="Ubuntu, Helvetica, Arial, sans-serif" color="#000000"></mj-text><mj-class name="description"></mj-class><mj-class name="preheader" color="#000000" font-size="11px" padding-left="25px" padding-right="25px"></mj-class><mj-class name="button" background-color="#fcc245" color="#000000" font-size="18px" border-radius="3px" font-family="Ubuntu, Helvetica, Arial, sans-serif"></mj-class></mj-attributes><mj-style inline="inline">a { text-decoration: none!important; }</mj-style></mj-head><mj-body background-color="#ffffff"><mj-section padding-bottom="20px" padding-top="20px"><mj-group><mj-column><mj-text align="left" mj-class="preheader">NAG LAN</mj-text></mj-column></mj-group></mj-section><mj-section padding-bottom="0px" padding-top="0"><mj-column width="25%"><mj-image href="https://mjml.io" src="http://191n.mj.am/img/191n/3s/xm0.png" alt="" width="147px" padding="0px"></mj-image></mj-column><mj-column width="75%"><mj-text font-size="19px" padding="0 25px" font-weight="bold">Hi! {{Name}} {{Surname}}, Special pre sale information</mj-text><mj-text font-size="11px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Proin rutrum enim eget magna efficitur.</mj-text></mj-column></mj-section></mj-body></mjml>',
    dataTemplate: {
      properties: [
        {
          key: "Email",
          validation: {
            valueRequired: true,
            type: "email"
          }
        },
        {
          key: "Name",
          validation: {
            valueRequired: true,
            type: "string"
          }
        },
        {
          key: "Surname",
          validation: {
            valueRequired: true,
            type: "string"
          }
        },
        {
          key: "Age",
          validation: {
            valueRequired: true,
            type: "number"
          }
        },
        {
          key: "HasCarInSpace",
          validation: {
            valueRequired: true,
            type: "boolean"
          }
        },
        {
          key: "DOB",
          validation: {
            valueRequired: true,
            type: "date",
            format: "YYYY MM DD"
          }
        }
      ]
    },
    rawData: [
      {
        Name: "Elon",
        Surname: "Musk",
        Age: 48,
        Email: "rocketman9000@marsmail.com",
        HasCarInSpace: "true",
        DOB: "1971-06-28"
      },
      {
        Name: "Jeff",
        Surname: "Bezos",
        Age: 55,
        Email: "jungleking@amazon.com",
        HasCarInSpace: "false",
        DOB: "1964-01-12"
      }
    ]
  }

```

```

smtpAccount: {
    service: "gmail",
    auth: {
      user: DISTRIBUTION_EMAIL_ADDRESS,
      pass: DISTRIBUTION_EMAIL_PASSWORD
    }
  }

```

```

emailCollection: [
    {
      from: DISTRIBUTION_EMAIL_ADDRESS,
      to: recipient_of_the_mail,
      subject: email_subject,
      body: the_html_of_your_email
    }
}

```

```

customResponseObject:{
    isSuccess: bool,
    data: object, => if applicable
    error: string
}

```
