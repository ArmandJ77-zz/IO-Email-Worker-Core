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
    let response = new DataInjectionResponse();

    for (let i = 0; i < inputDataModel.Data.length; i++) {
      try {
        const hbsTemplate = handlebars.compile(emailTemplate);
        const enrichedTemplate = hbsTemplate(inputDataModel.Data[i]);

        const successModel = new DataInjectionSuccessModel(
          i,
          inputDataModel.Data[i]["Email"],
          enrichedTemplate
        );

        response.SuccessModels.push(successModel);
      } catch (ex) {
        const errorModel = new DataInjectionErrorModel(
          i,
          inputDataModel.Data[i],
          emailTemplate,
          ex
        );

        response.ErrorModels.push(errorModel);
      }
    }

    response.IsSuccess = !(response.ErrorModels.length > 0);
    return response;
  }
}
