import InputDataModel from "./models/inputDataModel";
import DataPropertiesModel from "./models/dataPropertiesModel";
import { sortBy, isEqual, difference } from "lodash";
import structureValidationResponse from "./responses/structureValidationResponse";

export default class StructureValidationHandler {
  constructor() {}

  ValidateStructure(
    dataPropertiesModel: DataPropertiesModel,
    inputDataModel: InputDataModel
  ): Array<structureValidationResponse> {
    let results = new Array<structureValidationResponse>();
    let dataPropertiesList = dataPropertiesModel.Properties.map(x => x.Name);

    for (let i = 0; i < inputDataModel.Data.length; i++) {
      let rawDataEntryProps = Object.keys(inputDataModel.Data[i]);

      let isEqualResult = isEqual(
        sortBy(dataPropertiesList),
        sortBy(rawDataEntryProps)
      );

      if (isEqualResult) {
        results.push(new structureValidationResponse(i, isEqualResult, null));
        continue;
      }

      let differenceResult = difference(dataPropertiesList, rawDataEntryProps);

      results.push(
        new structureValidationResponse(
          i,
          isEqualResult,
          `Input data mismatched with Data Template properties on: ${differenceResult}`
        )
      );
    }

    return results;
  }
}
