import DataInjectionErrorModel from "../models/dataInjectionErrorModel";
import DataInjectionSuccessModel from "../models/dataInjectionSuccessModel";

export default class DataInjectionResponse {
  IsSuccess: Boolean;
  ErrorModels: Array<DataInjectionErrorModel> = [];
  SuccessModels: Array<DataInjectionSuccessModel> = [];

  constructor() {}
}
