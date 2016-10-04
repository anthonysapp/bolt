import {INotification} from '../interfaces';

export class Notification implements INotification {
    constructor(private name: string, private body: any = null) { }

    public getName(): string {
        return this.name;
    }

    public setBody(body: any): void {
        this.body = body;
    }

    public getBody(): any {
        return this.body;
    }

    public destroy() {
        this.body = null;
        this.name = null;
    }
}
