export default class DataInjectionSuccessModel {
    private _inputDataIndex: number;
    public InputDataIndex(): number {
        return this._inputDataIndex;
    }

    private _to: string;
    public To(): string {
        return this._to;
    }

    private _email: string;
    public Email(): string {
        return this._email;
    }

    constructor(inputDataIndex: number, to: string, email: string) {
        this._inputDataIndex = inputDataIndex;
        this._to = to;
        this._email = email;
    }
}
