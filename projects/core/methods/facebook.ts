/// <reference types="facebook-js-sdk" />
import loginEnvs from 'credentials/login-credentials.json';

export function facebookInit(document: Document): void {
    const elementId = 'facebook-jssdk';
    const tagName = 'script';

    const fjs = document.getElementsByTagName(tagName)[0];
    if (document.getElementById(elementId)) {
        return;
    }
    const js = document.createElement(tagName);
    js.id = elementId;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode?.insertBefore(js, fjs);

    (window as any).fbAsyncInit = () => {
        FB.init({
            appId: loginEnvs.facebook_client_id,
            cookie: true,
            xfbml: true,
            version: 'v10.0',
        });

        FB.AppEvents.logPageView();
    };
}

export function facebookLogin(): Promise<fb.StatusResponse> {
    return new Promise((resolve) => {
        FB.login(resolve, { scope: 'email' });
    });
}
