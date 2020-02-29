import ValidationModel from "./validationModel";
import DateValidationModel from "./dateValidationmodel";

export default interface DataPropertyModel {
  Name: string;
  Validation: ValidationModel | DateValidationModel;
}
