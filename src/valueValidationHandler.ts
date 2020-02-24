import DataProperty from "./models/dataPropertyModel";
import ValidationModel from "./models/validationModel";
import ValidationResponse from "./responses/validationResponse";
import {ValidationTypes} from "./enums/validationTypes";
export default class ValueValidation {
  constructor() {}

  ValidateValues(
    dataTemplateProps: Array<DataProperty>,
    inputDataProps: Array<any>
  ): Array<ValidationResponse> {
    let result = new Array<ValidationResponse>();

    for (let idp = 0; idp < inputDataProps.length; idp++) {
      for (let dtpi = 0; dtpi < dataTemplateProps.length; dtpi++) {
        const inputDataValue =
          inputDataProps[idp][dataTemplateProps[dtpi].Name];
        const inputDataValidator = dataTemplateProps[dtpi].Validation;

        let response = this.Validate(idp, inputDataValue, inputDataValidator);
      }
    }

    // console.log("dataTemplateProperties: " + dataTemplateProperties);

    // console.log(dataPropertiesModel);
    // console.log(inputDataModel);

    return result;
  }

  Validate(
    inputDataIndex: number,
    value: any,
    validationRule: ValidationModel
  ): ValidationResponse {
    const isEmptyString = val => !val || /^\s*$/.test(val);

    if (validationRule.ValueRequired) {
      const isNotEmptyStringResult = isEmptyString(value);
      return new ValidationResponse(inputDataIndex, false, this.buildValidationMessage());
      console.log(value + " is empty " + isNotEmptyStringResult);
    }

    return 
  }

  private buildValidationMessage = (validationType:, nodeIndex, onKey, withValueOf) =>
  `${validationType} check failed on node ${nodeIndex}: ${onKey} value ${withValueOf}`;

}
