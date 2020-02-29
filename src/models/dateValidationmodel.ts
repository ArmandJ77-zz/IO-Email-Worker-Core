import { ValidationTypes } from "../enums/validationTypes";

export default interface DateValidationModel {
  ValueRequired: boolean;
  Type: ValidationTypes;
  format: string;
}
