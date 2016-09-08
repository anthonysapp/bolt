export class Logger {
    public static enabled: boolean = true;
    public static log(instance:any, ...args:any[]) {
        if (!Logger.enabled) { 
            return;
        }
        if (instance && instance.constructor) {
            args.unshift(instance.constructor.toString().match(/\w+/g)[1] + ' ::');
        }
        return console.log.apply(console, args); 
    }
}