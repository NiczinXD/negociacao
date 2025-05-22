export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: Number,
        public readonly valor: Number
    ) {}

    // get volume(): Number {
    //     return this._quantidade * this._valor;
    // }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return this._data;
    }
}