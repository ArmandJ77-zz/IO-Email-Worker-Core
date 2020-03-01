import DataInjectionErrorModel from "../models/dataInjectionErrorModel";
import DataInjectionSuccessModel from "../models/dataInjectionSuccessModel";

export default class DataInjectionResponse {
  private _isSuccess: Boolean;
  public IsSuccess(): Boolean {
    return this._isSuccess;
  }

  private _errorModels: Array<DataInjectionErrorModel>;
  public ErrorModels(): Array<DataInjectionErrorModel> {
    return this._errorModels;
  }

  private _successModels: Array<DataInjectionSuccessModel>;
  public SuccessModels(): Array<DataInjectionSuccessModel> {
    return this._successModels;
  }

  constructor(
    isSuccess: boolean,
    errorModels: Array<DataInjectionErrorModel>,
    successModels: Array<DataInjectionSuccessModel>
  ) {
    this._isSuccess = isSuccess;
    this._errorModels = errorModels;
    this._successModels = successModels;
  }
}
