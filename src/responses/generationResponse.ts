import ValidationResponse from "./validationResponse";

export default class GenerationResponse {
  private _isSuccess: boolean;
  get IsSuccess(): boolean {
    return this._isSuccess;
  }

  private _errorMessage: string | null;
  get ErrorMessage(): string | null {
    return this._errorMessage;
  }

  private _validationResponses: Array<ValidationResponse>;
  get ValidationResponses(): Array<ValidationResponse> {
    return this._validationResponses;
  }

  constructor(
    isSuccess: boolean,
    errorMessage: string | null,
    validationResponses: Array<ValidationResponse>
  ) {
    this._isSuccess = isSuccess;
    this._errorMessage = errorMessage;
    this._validationResponses = validationResponses;
  }
}
