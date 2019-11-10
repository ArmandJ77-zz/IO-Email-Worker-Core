import dataInjectionHandler from "./lib/dataInjectionHandler";
import distributionHandler from "./lib/distributionHandler";
import genAndSendHandler from "./lib/genAndSendHandler";
import generationHandler from "./lib/generationHandler";
import structureValidationHandler from "./lib/structureValidationHandler";
import valueValidationHandler from "./lib/valueValidationHandler";

const IO_EWC = new (class {
  send = async (smtpAccount, emailOptionsCollection) =>
    distributionHandler(smtpAccount, emailOptionsCollection);

  injectData = (rawData, template) => dataInjectionHandler(rawData, template);

  generateAndSend = (rawData, properties, emailTemplate) =>
    genAndSendHandler(rawData, properties, emailTemplate);

  generate = enrighedTemplates => generationHandler(enrighedTemplates);

  validateStructure = (dataTemplate, rawData) =>
    structureValidationHandler(dataTemplate, rawData);

  validateValues = (dataTemplate, rawData) =>
    valueValidationHandler(dataTemplate, rawData);
})();

Object.freeze(IO_EWC);

export default IO_EWC;
