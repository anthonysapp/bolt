export interface INotification {
    getName(): string;
    getBody(): any;
    setBody(body: any): void;
}