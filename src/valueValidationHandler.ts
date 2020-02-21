import DataPropertiesModel from "./models/dataPropertiesModel";
import ValidationResponse from "./responses/validationResponse";
import InputDataModel from "./models/inputDataModel";

export default class ValueValidation {
  constructor() {}

  ValidateValues(
    dataPropertiesModel: DataPropertiesModel,
    inputDataModel: InputDataModel
  ): Array<ValidationResponse> {
    let result = new Array<ValidationResponse>();

    console.log(dataPropertiesModel);
    console.log(inputDataModel);

    return result;
  }
}
