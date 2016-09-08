export interface INotifier {
    sendNotification(notificationName: string, notificationBody?: any): any;
}