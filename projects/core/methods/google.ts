/// <reference types="gapi" />
/// <reference types="gapi.auth2" />
import loginEnvs from 'credentials/login-credentials.json';

export function googleInit(document: Document): void {
    const elementId = 'google-jssdk';
    const tagName = 'script';

    const fjs = document.getElementsByTagName(tagName)[0];
    if (document.getElementById(elementId)) {
        return;
    }
    const js: any = document.createElement(tagName);
    js.id = elementId;
    js.src = 'https://apis.google.com/js/platform.js';
    fjs.parentNode?.insertBefore(js, fjs);
    js.onload = () => {
        gapi.load('auth2', {
            callback: () => {
                gapi.auth2.init({
                    client_id: loginEnvs.google_client_id,
                    cookie_policy: 'single_host_origin',
                });
            },
        });
    };
}

export function googleLogin(): Promise<gapi.auth2.GoogleUser> {
    return gapi.auth2.getAuthInstance().signIn();
}
