//NOT SURE IF IM GOING TO KEEP THIS AS THE LIB IS ALL ABOUT CHOICE AND THIS
//CAN BE EASILY BUILD UP WITH THE SUPPORTING FUNCITONS
// REMNANT OF THE v0.1

// import StructureValidationHandler from "./structureValidationHandler";
// import ValueValidationHandler from "./valueValidationHandler";
// import DataPropertiesModel from "./models/dataPropertiesModel";
// import InputDataModel from "./models/inputDataModel";
// import GenerationResponse from "./responses/generationResponse";

// export default class GenAndSendHandler {
//   private _structureValidationHandler: StructureValidationHandler;
//   private _valueValidationHandler: ValueValidationHandler;

//   constructor() {
//     this._structureValidationHandler = new StructureValidationHandler();
//     this._valueValidationHandler = new ValueValidationHandler();
//   }

//   Handle(
//     dataPropertiesModel: DataPropertiesModel,
//     inputDataModel: InputDataModel
//   ): GenerationResponse {
//     if (dataPropertiesModel === null)
//       return `dataPropertiesModel can not be null`;

//     if (inputDataModel == null) return `inputDataModel can not be null`;

//     if (dataPropertiesModel?.Properties.length == 0)
//       return `Warning: dataPropertiesModel.Properties is null`;

//     if (inputDataModel?.Data.length == 0)
//       return `Warning: inputDataModel.Data is null`;

//     const structureValidationHandler = this._structureValidationHandler.Validate(
//       dataPropertiesModel,
//       inputDataModel
//     );

//     if (structureValidationHandler.filter(x => x.IsValid === false).length > 0)
//       return ``;

//     const valueValidationResults = this._valueValidationHandler.Validate(
//       dataPropertiesModel,
//       inputDataModel
//     );

//     return "success";
//   }
// }
