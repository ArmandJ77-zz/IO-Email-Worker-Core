import StructureValidationHandler from "./structureValidationHandler";
import ValueValidationHandler from "./valueValidationHandler";
import DataPropertiesModel from "./models/dataPropertiesModel";
import InputDataModel from "./models/inputDataModel";

export default class GenAndSendHandler {
  private _structureValidationHandler: StructureValidationHandler;
  private _valueValidationHandler: ValueValidationHandler;

  constructor() {
    this._structureValidationHandler = new StructureValidationHandler();
    this._valueValidationHandler = new ValueValidationHandler();
  }

  Handle(
    dataPropertiesModel: DataPropertiesModel,
    inputDataModel: InputDataModel
  ): void {
    const structureValidationResults = this._structureValidationHandler.Validate(
      dataPropertiesModel,
      inputDataModel
    );

    const valueValidationResults = this._valueValidationHandler.Validate(
      dataPropertiesModel,
      inputDataModel
    );
  }
}
