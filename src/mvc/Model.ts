import {INotification, IObserver} from '../interfaces';
import {Application} from '../Application';

export class Model {
    public app: Application;
    protected _data: any;

    public static MODEL_NAME: string = 'Model';

    constructor(dataKey: string = null, private modelName: string = null) {
        this.app = Application.getInstance();

        if (dataKey) {
            this.setData(dataKey);
        }

        this.app.registerModel(this);
    }

    public onRegister(): void {

    }

    public onRemoved(): void {

    }

    public setData(data: any): any {
        this._data = data;
        return this._data;
    }

    public getData(): any {
        return this._data;
    }

    public destroy(): void {
        this.app.removeModel(this);
    }

    public get name(): string {
        return this.modelName || Model.MODEL_NAME;
    }
}