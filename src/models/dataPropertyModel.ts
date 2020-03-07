import ValidationModel from "@models/validationModel";
import DateValidationModel from "@models/dateValidationmodel";
import PropertyBuilderModel from "@models/propertyBuilderModel";

export default interface DataPropertyModel {
    Name: string;
    Validation: ValidationModel | DateValidationModel;
    PropertyBuilder: PropertyBuilderModel[];
}
