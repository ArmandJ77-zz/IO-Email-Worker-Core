const GivenAValidDataSet = {
  data: {
    MetaData: {
      EmailAccount: {
        Provider: "gmail",
        FromAddress: "",
        FromAddressPassword: ""
      },
      Subject: "TESTING IO"
    },
    emailTemplate:
      '<mjml><mj-head><mj-attributes><mj-text font-family="Ubuntu, Helvetica, Arial, sans-serif" color="#000000"></mj-text><mj-class name="description"></mj-class><mj-class name="preheader" color="#000000" font-size="11px" padding-left="25px" padding-right="25px"></mj-class><mj-class name="button" background-color="#fcc245" color="#000000" font-size="18px" border-radius="3px" font-family="Ubuntu, Helvetica, Arial, sans-serif"></mj-class></mj-attributes><mj-style inline="inline">a { text-decoration: none!important; }</mj-style></mj-head><mj-body background-color="#ffffff"><mj-section padding-bottom="20px" padding-top="20px"><mj-group><mj-column><mj-text align="left" mj-class="preheader">NAG LAN</mj-text></mj-column></mj-group></mj-section><mj-section padding-bottom="0px" padding-top="0"><mj-column width="25%"><mj-image href="https://mjml.io" src="http://191n.mj.am/img/191n/3s/xm0.png" alt="" width="147px" padding="0px"></mj-image></mj-column><mj-column width="75%"><mj-text font-size="19px" padding="0 25px" font-weight="bold">Hi! {{Name}} {{Surname}}, Special pre sale information</mj-text><mj-text font-size="11px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Proin rutrum enim eget magna efficitur.</mj-text></mj-column></mj-section></mj-body></mjml>',
    DataTemplate: {
      Properties: [
        {
          Name: "Email",
          Validation: {
            ValueRequired: true,
            Type: "email"
          }
        },
        {
          Name: "Name",
          Validation: {
            ValueRequired: true,
            Type: "string"
          }
        },
        {
          Name: "Surname",
          Validation: {
            ValueRequired: true,
            Type: "string"
          }
        },
        {
          Name: "Age",
          Validation: {
            ValueRequired: true,
            Type: "number"
          }
        },
        {
          Name: "HasCarInSpace",
          Validation: {
            ValueRequired: true,
            Type: "boolean"
          }
        },
        {
          Name: "DOB",
          Validation: {
            ValueRequired: true,
            Type: "date",
            format: "YYYY MM DD"
          }
        }
      ]
    },
    InputData: [
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
};

const GivenAnInValidDataSetWithBadValues = {
  data: {
    emailTemplate:
      '<mjml><mj-head><mj-attributes><mj-text font-family="Ubuntu, Helvetica, Arial, sans-serif" color="#000000"></mj-text><mj-class name="description"></mj-class><mj-class name="preheader" color="#000000" font-size="11px" padding-left="25px" padding-right="25px"></mj-class><mj-class name="button" background-color="#fcc245" color="#000000" font-size="18px" border-radius="3px" font-family="Ubuntu, Helvetica, Arial, sans-serif"></mj-class></mj-attributes><mj-style inline="inline">a { text-decoration: none!important; }</mj-style></mj-head><mj-body background-color="#ffffff"><mj-section padding-bottom="20px" padding-top="20px"><mj-group><mj-column><mj-text align="left" mj-class="preheader">NAG LAN</mj-text></mj-column></mj-group></mj-section><mj-section padding-bottom="0px" padding-top="0"><mj-column width="25%"><mj-image href="https://mjml.io" src="http://191n.mj.am/img/191n/3s/xm0.png" alt="" width="147px" padding="0px"></mj-image></mj-column><mj-column width="75%"><mj-text font-size="19px" padding="0 25px" font-weight="bold">Hi! {{Name}} {{Surname}}, Special pre sale information</mj-text><mj-text font-size="11px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Proin rutrum enim eget magna efficitur.</mj-text></mj-column></mj-section></mj-body></mjml>',
    dataTemplate: {
      properties: [
        {
          key: "Email",
          validation: {
            valueRequired: true,
            Type: "email"
          }
        },
        {
          key: "Name",
          validation: {
            valueRequired: true,
            Type: "string"
          }
        },
        {
          key: "Surname",
          validation: {
            valueRequired: true,
            Type: "string"
          }
        },
        {
          key: "Age",
          validation: {
            valueRequired: true,
            Type: "number"
          }
        },
        {
          key: "HasCarInSpace",
          validation: {
            valueRequired: true,
            Type: "boolean"
          }
        },
        {
          key: "DOB",
          validation: {
            valueRequired: true,
            Type: "date",
            format: "YYYY MM DD"
          }
        }
      ]
    },
    rawData: [
      {
        Name: "",
        Surname: "M",
        Age: "sdfasdfasdf",
        Email: "rocketman9000",
        HasCarInSpace: "qwerty",
        DOB: "19710628"
      },
      {
        Name: "Jeff",
        Surname: "Bezos",
        Age: 55,
        Email: "jungleking@amazon.com",
        HasCarInSpace: "",
        DOB: "1964-01-12"
      },
      {
        Name: "SomeOtherDude",
        Surname: "Bruh",
        Age: 55,
        Email: "asdf@qwerty.co.za",
        HasCarInSpace: "false",
        DOB: "2001-01-01"
      }
    ]
  }
};

const GivenAnInValidDataSetWithMissingProperties = {
  data: {
    emailTemplate:
      '<mjml><mj-head><mj-attributes><mj-text font-family="Ubuntu, Helvetica, Arial, sans-serif" color="#000000"></mj-text><mj-class name="description"></mj-class><mj-class name="preheader" color="#000000" font-size="11px" padding-left="25px" padding-right="25px"></mj-class><mj-class name="button" background-color="#fcc245" color="#000000" font-size="18px" border-radius="3px" font-family="Ubuntu, Helvetica, Arial, sans-serif"></mj-class></mj-attributes><mj-style inline="inline">a { text-decoration: none!important; }</mj-style></mj-head><mj-body background-color="#ffffff"><mj-section padding-bottom="20px" padding-top="20px"><mj-group><mj-column><mj-text align="left" mj-class="preheader">NAG LAN</mj-text></mj-column></mj-group></mj-section><mj-section padding-bottom="0px" padding-top="0"><mj-column width="25%"><mj-image href="https://mjml.io" src="http://191n.mj.am/img/191n/3s/xm0.png" alt="" width="147px" padding="0px"></mj-image></mj-column><mj-column width="75%"><mj-text font-size="19px" padding="0 25px" font-weight="bold">Hi! {{Name}} {{Surname}}, Special pre sale information</mj-text><mj-text font-size="11px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Proin rutrum enim eget magna efficitur.</mj-text></mj-column></mj-section></mj-body></mjml>',
    dataTemplate: {
      properties: [
        {
          key: "Email",
          validation: {
            valueRequired: true,
            Type: "email"
          }
        },
        {
          key: "Name",
          validation: {
            valueRequired: true,
            Type: "string"
          }
        },
        {
          key: "Surname",
          validation: {
            valueRequired: true,
            Type: "string"
          }
        },
        {
          key: "Age",
          validation: {
            valueRequired: true,
            Type: "number"
          }
        },
        {
          key: "HasCarInSpace",
          validation: {
            valueRequired: true,
            Type: "boolean"
          }
        },
        {
          key: "DOB",
          validation: {
            valueRequired: true,
            Type: "date",
            format: "YYYY MM DD"
          }
        }
      ]
    },
    rawData: [
      {
        Name: "Elon",
        Age: 48,
        Email: "rocketman9000@marsmail.com",
        DOB: "1971-06-28"
      },
      {
        Surname: "Bezos",
        Email: "jungleking@amazon.com",
        DOB: "1964-01-12"
      }
    ]
  }
};

const GivenAnInValidDataSetWithIncorrectlyNamedProperties = {
  data: {
    metaData: {
      emailAccount: {
        provider: "gmail",
        fromAddress: "",
        fromAddressPassword: ""
      },
      subject: "TESTING IO"
    },
    emailTemplate:
      '<mjml><mj-head><mj-attributes><mj-text font-family="Ubuntu, Helvetica, Arial, sans-serif" color="#000000"></mj-text><mj-class name="description"></mj-class><mj-class name="preheader" color="#000000" font-size="11px" padding-left="25px" padding-right="25px"></mj-class><mj-class name="button" background-color="#fcc245" color="#000000" font-size="18px" border-radius="3px" font-family="Ubuntu, Helvetica, Arial, sans-serif"></mj-class></mj-attributes><mj-style inline="inline">a { text-decoration: none!important; }</mj-style></mj-head><mj-body background-color="#ffffff"><mj-section padding-bottom="20px" padding-top="20px"><mj-group><mj-column><mj-text align="left" mj-class="preheader">NAG LAN</mj-text></mj-column></mj-group></mj-section><mj-section padding-bottom="0px" padding-top="0"><mj-column width="25%"><mj-image href="https://mjml.io" src="http://191n.mj.am/img/191n/3s/xm0.png" alt="" width="147px" padding="0px"></mj-image></mj-column><mj-column width="75%"><mj-text font-size="19px" padding="0 25px" font-weight="bold">Hi! {{Name}} {{Surname}}, Special pre sale information</mj-text><mj-text font-size="11px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Proin rutrum enim eget magna efficitur.</mj-text></mj-column></mj-section></mj-body></mjml>',
    dataTemplate: {
      properties: [
        {
          key: "Email",
          validation: {
            valueRequired: true,
            Type: "email"
          }
        },
        {
          key: "Name",
          validation: {
            valueRequired: true,
            Type: "string"
          }
        },
        {
          key: "Surname",
          validation: {
            valueRequired: true,
            Type: "string"
          }
        },
        {
          key: "Age",
          validation: {
            valueRequired: true,
            Type: "number"
          }
        },
        {
          key: "HasCarInSpace",
          validation: {
            valueRequired: true,
            Type: "boolean"
          }
        },
        {
          key: "DOB",
          validation: {
            valueRequired: true,
            Type: "date",
            format: "YYYY MM DD"
          }
        }
      ]
    },
    rawData: [
      {
        Name: "Elon",
        lastname: "Musk",
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
        hcis: "false",
        DOB: "1964-01-12"
      }
    ]
  }
};

module.exports = {
  GivenAValidDataSet,
  GivenAnInValidDataSetWithBadValues,
  GivenAnInValidDataSetWithMissingProperties,
  GivenAnInValidDataSetWithIncorrectlyNamedProperties
};
