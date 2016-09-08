import {IBrowser} from '../interfaces';

export class Device {
    public static IOS: string = 'iOS';
    public static ANDROID: string = 'android';
    public static UNKNOWN: string = 'unknown';

    public static get mobile(): boolean {
        return Device.mobileOS !== Device.UNKNOWN;
    }

    public static get mobileOS() {
        const userAgent = window.navigator.userAgent || window.navigator.vendor || window['opera'];
        if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
            return Device.IOS;
        } else if (userAgent.match(/Android/i)) {
            return Device.ANDROID;
        } else {
            return Device.UNKNOWN;
        }
    }

    public static get browser(): IBrowser {
        const ua: string = navigator.userAgent.toLowerCase();
        return {
            firefox: ua.indexOf('firefox') > -1,
            ie: ua.indexOf('ie') > -1,
            safari: ua.indexOf('safari') > -1,
            chrome: ua.indexOf('chrome') > -1,
        }
    }

    public static get pixelRatio() {
        return typeof window.devicePixelRatio !== undefined ? window.devicePixelRatio : 1;
    }

    public static get customPixelRatio() {
        return Device.pixelRatio >= 1.5 ? 2 : 1;
    }
}