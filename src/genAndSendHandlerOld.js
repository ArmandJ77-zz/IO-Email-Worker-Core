// const structureValidationHandler = require("./structureValidationHandler");
// const valueValidationHandler = require("./valueValidationHandler");
// const dataInjectionHandler = require("./dataInjectionHandler");
// const generationHandler = require("./generationHandler");
// const distributionHandler = require("./distributionHandler");

// const genAndSendHandler = async (
//   smtpAccount,
//   subject,
//   rawData,
//   properties,
//   emailTemplate
// ) => {
//   return new Promise(function(resolve, reject) {
//     if (rawData == null) reject(Error("raw data must not be null"));

//     if (properties == null) reject(Error("data Template must not be null"));

//     if (emailTemplate == null) reject(Error("email Template must not be null"));

//     if (smtpAccount == null) reject(Error("smtp Account must not be null"));

//     // STEP 1: STRUCTURE VALIDATION
//     let structureValidationResult = structureValidationHandler(
//       properties,
//       rawData
//     );

//     structureValidationResult.forEach(result => {
//       if (!result.isSuccess) {
//         reject(Error(result.errors));
//       }
//     });

//     // STEP 2: VALUE VALIDATION
//     let valueValidationResult = valueValidationHandler(properties, rawData);
//     if (!valueValidationResult.isSuccess)
//       reject(Error(valueValidationResult.error));

//     // STEP 3: DATA INJECTION
//     let enrichedTemplates = dataInjectionHandler(rawData, emailTemplate);
//     if (!enrichedTemplates.isSuccess) reject(Error(enrichedTemplates.errors));

//     // STEP 4: GENERATION
//     let parsedEmailObjects = generationHandler(enrichedTemplates.data);
//     if (!parsedEmailObjects.isSuccess) reject(Error(parsedEmailObjects.error));

//     // STEP 5: DISTRIBUTION
//     distributionHandler(smtpAccount, subject, parsedEmailObjects.data)
//       .then(function(result) {
//         resolve(result);
//       })
//       .catch(ex => {
//         reject(ex);
//       });
//   });
// };

// module.exports = genAndSendHandler;
