const dataInjectionHandler = require("./lib/dataInjectionHandler");
const distributionHandler = require("./lib/distributionHandler");
const genAndSendHandler = require("./lib/genAndSendHandler");
const generationHandler = require("./lib/generationHandler");
const structureValidationHandler = require("./lib/structureValidationHandler");
const valueValidationHandler = require("./lib/valueValidationHandler");
const helloWorld = require("./lib/helloWorld.js");

module.exports = {
  greeter: helloWorld,
  injectDataIntoTemplate: dataInjectionHandler,
  send: distributionHandler,
  generateHtml: generationHandler,
  validateStructureAgainstTemplate: structureValidationHandler,
  validateValuesAgainstTypes: valueValidationHandler,
  generateAndSend: genAndSendHandler
};
