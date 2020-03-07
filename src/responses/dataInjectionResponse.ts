import DataInjectionErrorModel from "@models/dataInjectionErrorModel";
import DataInjectionSuccessModel from "@models/dataInjectionSuccessModel";

export default class DataInjectionResponse {
    IsSuccess: boolean;
    ErrorModels: DataInjectionErrorModel[] = [];
    SuccessModels: DataInjectionSuccessModel[] = [];
}
