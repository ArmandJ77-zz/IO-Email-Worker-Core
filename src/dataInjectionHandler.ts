import handlebars from "handlebars";
import InputDataModel from "./models/inputDataModel";
import DataInjectionErrorModel from "./models/DataInjectionErrorModel";
import DataInjectionSuccessModel from "./models/dataInjectionSuccessModel";
import DataInjectionResponse from "./responses/dataInjectionResponse";

export default class DataInjectionHandler {
  constructor() {}

  InjectValues(
    emailTemplate: any,
    inputDataModel: InputDataModel
  ): DataInjectionResponse {
    let successModels: Array<DataInjectionSuccessModel> = [];
    let errorModels: Array<DataInjectionErrorModel> = [];

    for (let i = 0; i < inputDataModel.Data.length; i++) {
      try {
        const hbsTemplate = handlebars.compile(emailTemplate);
        const enrichedTemplate = hbsTemplate(inputDataModel.Data[i]);

        const successModel = new DataInjectionSuccessModel(
          i,
          inputDataModel.Data[i]["Email"],
          enrichedTemplate
        );

        successModels.push(successModel);
      } catch (ex) {
        let errorModel = new DataInjectionErrorModel(
          i,
          inputDataModel.Data[i],
          emailTemplate,
          ex
        );

        errorModels.push(errorModel);
      }
    }

    const response = new DataInjectionResponse(
      errorModels.length > 0,
      errorModels,
      successModels
    );

    return response;
  }
}
