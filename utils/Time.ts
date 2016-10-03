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
            TweenMax.to(obj, seconds, {
                ease: Linear.easeNone,
                seconds: 0, roundProps: "seconds", onUpdate: () => {
                    if (obj.seconds !== currentSeconds) {
                        currentSeconds = obj.seconds;
                        if (updateCallback) {
                            updateCallback.apply(updateContext, [obj.seconds]);
                        }
                    }
                }, onComplete: resolve
            });
        });
    }
}