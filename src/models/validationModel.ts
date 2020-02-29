import { ValidationTypes } from "../enums/validationTypes";

export default interface ValidationModel {
  ValueRequired: boolean;
  Type: ValidationTypes;
}
