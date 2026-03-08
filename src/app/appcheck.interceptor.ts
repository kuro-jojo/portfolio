import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AppCheck, getToken } from '@angular/fire/app-check';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '../environments/environment';

export const appCheckInterceptor: HttpInterceptorFn = (req, next) => {
    const appCheck = inject(AppCheck);

    if (!req.url.startsWith(environment.githubStatsApi)) {
        return next(req);
    }

    return from(getToken(appCheck, false)).pipe(
        switchMap((tokenResponse) => {
            const appCheckToken = tokenResponse.token;

            const authReq = req.clone({
                setHeaders: { 'X-Firebase-AppCheck': appCheckToken }
            });

            return next(authReq);
        })
    );
};