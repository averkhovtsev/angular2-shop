import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

export class DefaultHeadersInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedRequest = req.clone<any>({headers: req.headers.set('Content-Type', 'application/json')});

    return next.handle(clonedRequest);
  }
}