// import structureValidationHandler from "./structureValidationHandler";
// import valueValidationHandler from "./valueValidationHandler";
// import dataInjectionHandler from "./dataInjectionHandler";
// import generationHandler from "./generationHandler";
// import distributionHandler from "./distributionHandler";

// const genAndSendHandler = (rawData, properties, emailTemplate) => {
//   // // require("dotenv").config({ path: ".env" });
//   // // let emailTemplateData =
//   // //   data.emailtemplate.data.emailTemplateByCampaignId.template.templateData;
//   // // let dataTemplate =
//   // //   data.generationDataStructure.data.dataflowTemplateByCampaignId.template;
//   // // let rawData = data.generationData;
//   // //FOR TESTING ONLY
//   // let rawData = rawData;
//   // let dataTemplate = properties;
//   // let template = emailTemplate;
//   // // console.log(JSON.stringify(rawData));
//   // // console.log(JSON.stringify(dataTemplate));
//   // // console.log(JSON.stringify(emailTemplateData));
//   // //FOR TESTING ONLY
//   // //Validate raw data with template
//   // if (rawData == null) throw new Exception("raw data is null");
//   // // STEP 1: STRUCTURE VALIDATION
//   // let structureValidationResult = structureValidationHandler(
//   //   dataTemplate,
//   //   rawData
//   // );
//   // structureValidationResult.forEach(result => {
//   //   if (!result.isSuccess) {
//   //     throw Error(result.errors);
//   //   }
//   // });
//   // console.log("Structure Validation DONE!");
//   // // STEP 2: VALUE VALIDATION
//   // let valueValidationResult = valueValidationHandler(dataTemplate, rawData);
//   // if (!valueValidationResult.isSuccess)
//   //   throw Error(valueValidationResult.error);
//   // console.log("Value Validation DONE!");
//   // // STEP 3: DATA INJECTION
//   // let enrichedTemplates = dataInjectionHandler(rawData, template);
//   // if (!enrichedTemplates.isSuccess) throw Error(enrichedTemplates.errors);
//   // console.log("Data injection DONE!");
//   // // // // STEP 4: GENERATION
//   // let parsedEmailObjects = generationHandler(enrichedTemplates.data);
//   // if (!parsedEmailObjects.isSuccess) throw Error(parsedEmailObjects.error);
//   // console.log("Email Parsing DONE!");
//   // // STEP 5: DISTRIBUTION
//   // let distributionHandlerResult = distributionHandler(parsedEmailObjects.data);
//   // console.log("Email distribution DONE!");
//   // // // TEMPLATE PARSING
//   // // DISTROBUTION
//   // //Return all keys matched in obj
//   // console.log("done!");

//   throw Error("Not supported yet in core comming soon");
// };

// export default genAndSendHandler;
