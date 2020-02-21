import InputDataModel from "./models/inputDataModel";
import DataPropertiesModel from "./models/dataPropertiesModel";
import { sortBy, isEqual, difference } from "lodash";
import ValidationResponse from "./responses/validationResponse";

export default class StructureValidationHandler {
  constructor() {}

  ValidateStructure(
    dataPropertiesModel: DataPropertiesModel,
    inputDataModel: InputDataModel
  ): Array<ValidationResponse> {
    let results = new Array<ValidationResponse>();
    let dataPropertiesList = dataPropertiesModel.Properties.map(x => x.Name);

    for (let i = 0; i < inputDataModel.Data.length; i++) {
      let rawDataEntryProps = Object.keys(inputDataModel.Data[i]);

      let isEqualResult = isEqual(
        sortBy(dataPropertiesList),
        sortBy(rawDataEntryProps)
      );

      if (isEqualResult) {
        results.push(new ValidationResponse(i, isEqualResult, null));
        continue;
      }

      let differenceResult = difference(dataPropertiesList, rawDataEntryProps);

      results.push(
        new ValidationResponse(
          i,
          isEqualResult,
          `Input data mismatched with Data Template properties on: ${differenceResult}`
        )
      );
    }

    return results;
  }
}
