export default class StructureValidationResponse {
  private _inputDataIndex: number;
  public get InputDataIndex(): number {
    return this._inputDataIndex;
  }

  private _isValid: boolean;
  public get IsValid(): boolean {
    return this._isValid;
  }

  private _error: string | null;
  public get Error(): string | null {
    return this._error;
  }

  constructor(inputDataIndex: number, isValid: boolean, error: string | null) {
    this._error = error;
    this._inputDataIndex = inputDataIndex;
    this._isValid = isValid;
  }
}
