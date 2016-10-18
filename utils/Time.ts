export class Time {
    static wait(seconds: number): Promise<{}> {
        return new Promise(function(resolve, reject) {
            TweenMax.delayedCall(seconds, () => {
                resolve();
            });
        });
    }

    static count(seconds: number, updateCallback: Function, updateContext: any): Promise<{}> {
        let obj = { seconds: seconds },
            currentSeconds: number = seconds;
        return new Promise(function(resolve, reject) {
            var interval = setInterval(() => {
                obj.seconds--;
                if (obj.seconds === 0) {
                    clearInterval(interval);
                    return resolve();
                }
                if (obj.seconds !== currentSeconds) {
                    currentSeconds = obj.seconds;
                    if (updateCallback) {
                        updateCallback.apply(updateContext, [obj.seconds]);
                    }
                }
            }, 1000);
        });
    }
}