import inputDataModel from "./models/inputDataModel";
import dataPropertiesModel from "./models/dataPropertiesModel";

export default class StructureValidationHandler {
  constructor() {}

  ValidateStructure(
    dataPropertiesModel: dataPropertiesModel,
    inputDataModel: inputDataModel
  ) {
    let dataPropertyKeys = dataPropertiesModel.Properties.map(x => x.Name);
    // let inputDataKeys = inputDataModel.InputData.map(x => x.keys);
    console.log(inputDataModel);

    // console.log(
    //   `Data Property: ${JSON.stringify(dataProperties.properties[0])}`
    // );
    // console.log(`Data Property: ${dataProperties.properties[0].Name}`);
    // console.log(`Data Property: ${dataProperties.properties[0].Validation}`);
    // console.log(``);
    // console.log(
    //   `data properties ${JSON.stringify(dataProperties.properties.length)}`
    // );
    // console.log(`data properties ${JSON.stringify(dataPropertyKeys.length)}`);
    // console.log(`data properties ${JSON.stringify(dataPropertyKeys)}`);
    // let inputDataKeys = inputData.data.keys();
    // console.log(`inputDataKeys: ${inputData}`);
  }
}
