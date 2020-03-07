const dataInjectionHandler = require("./domain/dataInjectionHandler");
const distributionHandler = require("./domain/distributionHandler");
const genAndSendHandler = require("./domain/genAndSendHandler");
const generationHandler = require("./domain/generationHandler");
const structureValidationHandler = require("./domain/structureValidationHandler");
const valueValidationHandler = require("./domain/valueValidationHandler");

module.exports = {
  injectDataIntoTemplate: dataInjectionHandler,
  send: distributionHandler,
  generateHtml: generationHandler,
  validateStructureAgainstTemplate: structureValidationHandler,
  validateValuesAgainstTypes: valueValidationHandler,
  generateAndSend: genAndSendHandler
};
