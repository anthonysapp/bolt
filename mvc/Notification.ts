import {INotification} from '../interfaces';

export class Notification implements INotification {
    constructor(private _name: string, private _body: any = null) { }

    public getName(): string {
        return this._name;
    }

    public setBody(body: any): void {
        this._body = body;
    }

    public getBody(): any {
        return this._body;
    }

    public destroy() {
        this._body = null;
        this._name = null;
    }
}