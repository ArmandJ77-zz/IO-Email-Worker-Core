const ArrayUtils = require("../Utils/ArrayUtils");

const structureValidationHandler = (dataTemplateProperties, rawData) => {
  let response = [];
  let listOfPropertyKeys = ArrayUtils.getMappedValuesFromArray(
    dataTemplateProperties,
    "key"
  );

  for (let index = 0; index < rawData.length; index++) {
    let rawDataEntryProps = ArrayUtils.getMappedKeysFromObject(rawData[index]);
    let propDiff = ArrayUtils.getDiffirenceBetweenTwoArrays(
      listOfPropertyKeys,
      rawDataEntryProps
    );

    if (propDiff.length == 0) {
      response.push(buildResponse(index, true, null));
      continue;
    }

    response.push(
      buildResponse(
        index,
        false,
        `Diff found on: ${JSON.stringify(
          rawData[index]
        )} \n missing properties: ${propDiff}`
      )
    );
  }

  return response;
};

function buildResponse(index, isSuccess, error) {
  return {
    index: index,
    isSuccess: isSuccess,
    errors: error
  };
}

module.exports = structureValidationHandler;
