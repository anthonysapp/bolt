import {Application} from './Application';
import {IObserver,INotification} from '../interfaces';

export class Mediator implements IObserver {
    public static MEDIATOR_NAME: string = 'Mediator';

    protected mediatorName: string = null;
    protected app: Application;

    constructor(protected _viewComponent: any = null, autoReg: boolean = true, mediatorName: string = null) {
        this.app = Application.getInstance();
        this.mediatorName = mediatorName;

        if (autoReg) {
            this.register();
        }
    }

    // private methods
    protected register(): void {
        this.app.registerMediator(this);
    }

    protected remove(): void {
        this.app.removeMediator(this);
    }

    public onRegister(): void {
        // override me freely
    }

    public onRemoved(): void {

    }

    public destroy(): void {
        this.remove();
    }

    public listNotificationInterests(): string[] {
        return [];
    }

    public handleNotification(notification: INotification) {
        /**
         * default immplementation would look something like:
         * switch( notification: dijon.INotification ){
         * 		case Notifications.SOMETHING:
         * 			// do something
         * 			break;
         * 		case Notifications.SOMETHING_ELSE:
         * 			// do something else
         * 			break;
         * }
         */
    }

    public sendNotification(notificationName: string, notificationBody?: any) {
        this.app.sendNotification(notificationName, notificationBody);
    }

    // getter / setter
    public set viewComponent(viewComponent: any) {
        this._viewComponent = viewComponent;
    }

    public get viewComponent(): any {
        return this._viewComponent;
    }

    public get name(): string {
        return this.mediatorName || Mediator.MEDIATOR_NAME;
    }
}