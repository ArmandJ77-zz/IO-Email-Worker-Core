import GenerationSuccessModel from "@models/generationSuccessModel";
import GenerationErrorModel from "@models/generationErrorModel";

export default class GenerationResponse {
    private _isSuccess: boolean;
    get IsSuccess(): boolean {
        return this._isSuccess;
    }

    private _successModels: GenerationSuccessModel[];
    get SuccessModels(): GenerationSuccessModel[] {
        return this._successModels;
    }

    private _errorModel: GenerationErrorModel[];
    get ErrorModels(): GenerationErrorModel[] {
        return this._errorModel;
    }

    constructor(isSuccess: boolean, successModels: GenerationSuccessModel[], errorModel: GenerationErrorModel[]) {
        this._isSuccess = isSuccess;
        this._successModels = successModels;
        this._errorModel = errorModel;
    }
}
