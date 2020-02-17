// const ArrayUtils = require("../Utils/ArrayUtils");
// const moment = require("moment");

// const valueValidationHandler = (dataTemplate, rawData) => {
//   let validationTemplate = buildDictionaryFromArray(
//     "key",
//     "validation",
//     dataTemplate
//   );
//   let errors = [];

//   for (let index = 0; index < rawData.length; index++) {
//     let rawDataNodeKeys = ArrayUtils.getMappedKeysFromObject(rawData[index]);
//     rawDataNodeKeys.forEach(rawDataNodeKey => {
//       // console.log(validationTemplate[rawDataNodeKey]);

//       let valueRequired = validationTemplate[rawDataNodeKey]["valueRequired"];
//       let fieldType = validationTemplate[rawDataNodeKey]["type"];
//       let val = rawData[index][rawDataNodeKey];

//       if (valueRequired) {
//         if (isNotEmptyString(val))
//           errors.push(
//             ValidationMessage("valueRequired", index, rawDataNodeKey, val)
//           );

//         switch (fieldType) {
//           case "email":
//             if (isEmailNotValid(val))
//               errors.push(
//                 ValidationMessage(fieldType, index, rawDataNodeKey, val)
//               );
//             break;
//           case "number":
//             if (isNaN(val))
//               errors.push(
//                 ValidationMessage(fieldType, index, rawDataNodeKey, val)
//               );
//             break;
//           case "boolean":
//             if (!isValidBoolean(val))
//               errors.push(
//                 ValidationMessage(fieldType, index, rawDataNodeKey, val)
//               );
//             break;
//           case "date":
//             if (
//               !moment(
//                 val,
//                 validationTemplate[rawDataNodeKey]["format"]
//               ).isValid()
//             )
//               errors.push(
//                 ValidationMessage(fieldType, index, rawDataNodeKey, val)
//               );
//             break;
//         }
//       }
//     });
//   }
//   // console.log(errors.length);
//   return buildResponse(errors);
// };

// const isValidBoolean = val =>
//   val.toLowerCase() === "true"
//     ? true
//     : val.toLowerCase() === "false"
//     ? true
//     : false;

// const isEmailNotValid = val => val.split("@").length - 1 < 1;

// const ValidationMessage = (validationType, nodeIndex, onKey, withValueOf) =>
//   `${validationType} check failed on node ${nodeIndex}: ${onKey} value ${withValueOf}`;

// const isNotEmptyString = val => !val || /^\s*$/.test(val);

// function buildResponse(errors) {
//   return {
//     isSuccess: errors.length > 0 ? false : true,
//     errors: errors
//   };
// }

// function buildDictionaryFromArray(keyField, valueField, arr) {
//   let result = new Array();

//   arr.forEach(node => {
//     let keyNode = node[keyField];
//     let valueNode = node[valueField];

//     result[keyNode] = valueNode;
//   });

//   return result;
// }

// module.exports = valueValidationHandler;
