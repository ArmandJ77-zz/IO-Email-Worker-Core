import DataProperty from "./models/dataPropertyModel";
import ValidationModel from "./models/validationModel";
import DateValidationModel from "./models/dateValidationmodel";
import ValidationResponse from "./responses/validationResponse";
import { ValidationTypes } from "./enums/validationTypes";
import moment from "moment";

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

        let response = this.Validate(
          dtpi,
          inputDataValue,
          dataTemplateProps[dtpi].Name,
          inputDataValidator
        );
        // console.log(response);
        result.push(response);
        // console.log(response);
      }
    }

    // console.log("dataTemplateProperties: " + dataTemplateProperties);

    // console.log(dataPropertiesModel);
    // console.log(inputDataModel);
    console.log("iteration done: " + result.length);
    return result;
  }

  Validate(
    inputDataIndex: number,
    value: any,
    key: string,
    validationRule: ValidationModel | DateValidationModel
  ): ValidationResponse {
    if (validationRule.ValueRequired) {
      const isEmptyStringResult = this.isEmptyString(value);
      if (isEmptyStringResult) {
        return new ValidationResponse(
          inputDataIndex,
          false,
          this.buildValidationMessage(
            ValidationTypes.valueRequired,
            inputDataIndex,
            key,
            value
          )
        );
      }
    }

    switch (validationRule.Type) {
      case "email":
        if (this.isEmailValid(value) === false)
          return new ValidationResponse(
            inputDataIndex,
            false,
            this.buildValidationMessage(
              ValidationTypes.email,
              inputDataIndex,
              key,
              value
            )
          );
        break;
      case "string":
        if (this.isInvalidString(value))
          return new ValidationResponse(
            inputDataIndex,
            false,
            this.buildValidationMessage(
              ValidationTypes.string,
              inputDataIndex,
              key,
              value
            )
          );
        break;
      case "number":
        if (!this.isValidNumber(value))
          return new ValidationResponse(
            inputDataIndex,
            false,
            this.buildValidationMessage(
              ValidationTypes.number,
              inputDataIndex,
              key,
              value
            )
          );
        break;
      case "boolean":
        if (!this.isBooleanValid(value))
          return new ValidationResponse(
            inputDataIndex,
            false,
            this.buildValidationMessage(
              ValidationTypes.bool,
              inputDataIndex,
              key,
              value
            )
          );
        break;
      case "date":
        if (
          !this.isDateValid(
            value,
            (validationRule as DateValidationModel).format
          )
        )
          return new ValidationResponse(
            inputDataIndex,
            false,
            this.buildValidationMessage(
              ValidationTypes.date,
              inputDataIndex,
              key,
              value
            )
          );
        break;
    }

    return new ValidationResponse(inputDataIndex, true, "");
  }

  private buildValidationMessage = (
    validationType: ValidationTypes,
    nodeIndex: number,
    onKey: string,
    withValueOf: any
  ) =>
    `${validationType} check failed on node ${nodeIndex}: ${onKey} value ${withValueOf}`;

  private isInvalidString = val => /^\s*$|null|NULL/.test(val);
  private isEmptyString = val => /^\s*$/.test(val);

  private isValidNumber = val =>
    /^(?!-0(\.0+)?$)-?(0|[1-9]\d*)(\.\d+)?$/.test(val);
  private isBooleanValid = val => /^(true|false|1|0)$/.test(val);
  private isDateValid = (val, format) => moment(val, format).isValid();
  private isEmailValid = val =>
    !val ||
    /^((([a-z]|d|[!#$%&'*+-/=?^_`{|}~]|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])+(.([a-z]|d|[!#$%&'*+-/=?^_`{|}~]|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])+)*)|((x22)((((x20|x09)*(x0dx0a))?(x20|x09)+)?(([x01-x08x0bx0cx0e-x1fx7f]|x21|[x23-x5b]|[x5d-x7e]|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])|(([x01-x09x0bx0cx0d-x7f]|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF]))))*(((x20|x09)*(x0dx0a))?(x20|x09)+)?(x22)))@((([a-z]|d|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])|(([a-z]|d|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])([a-z]|d|-||_|~|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])*([a-z]|d|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF]))).)+(([a-z]|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])+|(([a-z]|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])+([a-z]+|d|-|.{0,1}|_|~|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])?([a-z]|[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])))$/.test(
      val
    );
}
