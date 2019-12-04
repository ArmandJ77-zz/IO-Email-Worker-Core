const greeterHandler = require("./lib/test");

module.exports = {
  sayHi: greeterHandler
};

// import dataInjectionHandler from "./lib/dataInjectionHandler";
// import distributionHandler from "./lib/distributionHandler";
// import genAndSendHandler from "./lib/genAndSendHandler";
// import generationHandler from "./lib/generationHandler";
// import structureValidationHandler from "./lib/structureValidationHandler";
// import valueValidationHandler from "./lib/valueValidationHandler";

// const IO_EWC = new (class IO_EWC {
//   send = async (smtpAccount, subject, emailOptionsCollection) =>
//     distributionHandler(smtpAccount, subject, emailOptionsCollection);

//   generateAndSend = async (
//     smtpAccount,
//     subject,
//     rawData,
//     properties,
//     emailTemplate
//   ) =>
//     genAndSendHandler(smtpAccount, subject, rawData, properties, emailTemplate);

//   generate = enrighedTemplates => generationHandler(enrighedTemplates);

//   injectData = (rawData, template) => dataInjectionHandler(rawData, template);

//   validateStructure = (dataTemplate, rawData) =>
//     structureValidationHandler(dataTemplate, rawData);

//   validateValues = (dataTemplate, rawData) =>
//     valueValidationHandler(dataTemplate, rawData);
// })();

// Object.freeze(IO_EWC);

// export default IO_EWC;
