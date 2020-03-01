export default class DataInjectionErrorModel {
  private _inputDataIndex: number;
  get InputDataIndex(): number {
    return this._inputDataIndex;
  }

  private _inputData: any;
  get InputData(): any {
    return this._inputData;
  }

  private _template: string;
  get Template(): string {
    return this._template;
  }

  private _error: string;
  get Error(): string {
    return this._error;
  }

  constructor(
    inputDataIndex: number,
    inputData: any,
    template: string,
    error: string
  ) {}
}
