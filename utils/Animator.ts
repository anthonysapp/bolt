import Promise from "bluebird";
export class Animator {
    static to(target: any, duration: number, vars: { onComplete?: Function }): Promise<{}> {
        return new Promise(function (resolve, reject) {
            vars.onComplete = resolve;
            TweenMax.to(target, duration, vars);
        });
    }

    static from(target: any, duration: number, vars: { onComplete?: Function, onCompleteParams?: any[] }): Promise<{}> {
        return new Promise(function (resolve, reject) {
            vars.onComplete = () => resolve(vars.onCompleteParams);
            TweenMax.from(target, duration, vars);
        });
    }

    static fromTo(target: any, duration: number, fromVars: any, toVars: { onComplete?: Function, onCompleteParams?: any[] }): Promise<{}> {
        return new Promise(function (resolve, reject) {
            toVars.onComplete = () => resolve(toVars.onCompleteParams);
            TweenMax.fromTo(target, duration, fromVars, toVars);
        });
    }

    static staggerTo(targets: any, duration: number, vars: any, stagger: number, onCompleteParams: any[] = null): Promise<{}> {
        return new Promise(function (resolve, reject) {
            TweenMax.staggerTo(targets, duration, vars, stagger, () => { resolve(onCompleteParams) });
        });
    }

    static staggerFrom(targets: any, duration: number, vars: any, stagger: number, onCompleteParams: any[] = null): Promise<{}> {
        return new Promise(function (resolve, reject) {
            TweenMax.staggerFrom(targets, duration, vars, stagger, () => { resolve(onCompleteParams) });
        });
    }

    static staggerFromTo(targets: any, duration: number, fromVars: any, toVars: any, stagger: number, onCompleteParams: any[]): Promise<{}> {
        return new Promise(function (resolve, reject) {
            TweenMax.staggerFromTo(targets, duration, fromVars, toVars, stagger, () => { resolve(onCompleteParams) });
        });
    }
}