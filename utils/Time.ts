import Promise from "bluebird";

export class Time {
    static wait(seconds: number): Promise<{}> {
        return new Promise(function (resolve, reject) {
            TweenMax.delayedCall(seconds, () => {
                resolve();
            });
        });
    }
}