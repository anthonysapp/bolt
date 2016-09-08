import {INotification} from './INotification';
export interface IObserver {
    onRegister(): any;
    onRemoved(): any;
    destroy(): any;
    listNotificationInterests(): string[];
    handleNotification(notification: INotification): any;
}