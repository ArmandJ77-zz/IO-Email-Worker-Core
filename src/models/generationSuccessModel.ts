export default class GenerationSuccessModel {
    private _htmlTemplate: string;
    public HtmlTemplate(): string {
        return this._htmlTemplate;
    }

    private _index: number;
    public Index(): number {
        return this._index;
    }

    private _to: string;
    public To(): string {
        return this._to;
    }

    constructor(htmlTemplate: string, index: number, to: string) {
        this._htmlTemplate = htmlTemplate;
        this._index = index;
        this._to = to;
    }
}
