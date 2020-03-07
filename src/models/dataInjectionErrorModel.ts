export default class DataInjectionErrorModel {
    private _inputDataIndex: number;
    get InputDataIndex(): number {
        return this._inputDataIndex;
    }

    private _inputData: any;
    get InputData(): any {
        return this._inputData;
    }

    private _template: any;
    get Template(): any {
        return this._template;
    }

    private _error: string;
    get Error(): string {
        return this._error;
    }

    constructor(inputDataIndex: number, inputData: any, template: any, error: string) {
        this._error = error;
        this._inputData = inputData;
        this._inputDataIndex = inputDataIndex;
        this._template = template;
    }
}
