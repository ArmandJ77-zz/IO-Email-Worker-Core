export default class GenerationErrorModel {
    private _index: number;
    public Index(): number {
        return this._index;
    }

    private _to: string;
    public To(): string {
        return this._to;
    }

    private _template: string;
    public Template(): string {
        return this._template;
    }

    private _error: string;
    public Error(): string {
        return this._error;
    }

    constructor(index: number, to: string, template: string, error: string) {
        this._index = index;
        this._to = to;
        this._template = template;
        this._error = error;
    }
}
