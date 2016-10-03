import Promise from "bluebird";

export class Time {
    static wait(seconds: number): Promise<{}> {
        return new Promise(function (resolve, reject) {
            TweenMax.delayedCall(seconds, () => {
                resolve();
            });
        });
    }

    static count(seconds: number, updateCallback: Function, updateContext: any): Promise<{}> {
        let obj = { seconds: seconds },
            currentSeconds: number = seconds;
        return new Promise(function (resolve, reject) {
            let timer = setInterval(() => {
                currentSeconds--;
                if (obj.seconds !== currentSeconds) {
                    currentSeconds = obj.seconds;
                    if (updateCallback) {
                        updateCallback.apply(updateContext, [obj.seconds]);
                    }
                }
                if (currentSeconds === 0){
                    clearInterval(timer);
                    resolve();
                }
            }, 1000);
        });
    }
}