import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { provideAppCheck, initializeAppCheck, ReCaptchaEnterpriseProvider, } from '@angular/fire/app-check';
import { appCheckInterceptor } from './appcheck.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptors([appCheckInterceptor])),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAppCheck(() => initializeAppCheck(getApp(),
            {
                provider: new ReCaptchaEnterpriseProvider(environment.firebaseRecaptchaAPIKey),
                isTokenAutoRefreshEnabled: true
            }
        )),

    ]
};
