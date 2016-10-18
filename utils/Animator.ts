/** Animator
 * a wrapper for TWeenMax that returns promises
 */
// assumes: 
// TweenMax is loaded somewhere globally
// There is a Promise library loaded (Babel, Bluebird, etc)
export class Animator {
    static set(target: any, vars: any): Promise<{}> {
        return new Promise(function (resolve, reject) {
            vars.onComplete = resolve;
            TweenMax.set(target, vars);
        });
    }

    static to(target: any, duration: number, vars: any): Promise<{}> {
        return new Promise(function (resolve, reject) {
            vars.onComplete = resolve;
            TweenMax.to(target, duration, vars);
        });
    }

    static from(target: any, duration: number, vars: any): Promise<{}> {
        return new Promise(function (resolve, reject) {
            vars.onComplete = () => resolve(vars.onCompleteParams);
            TweenMax.from(target, duration, vars);
        });
    }

    static fromTo(target: any, duration: number, fromVars: any, toVars: any): Promise<{}> {
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