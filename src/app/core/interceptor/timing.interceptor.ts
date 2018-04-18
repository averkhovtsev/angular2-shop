import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";

export class TimingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/products')) {
      return next.handle(req);
    }

    const timestamp:number = Date.now();
    return next.handle(req)
        .pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                console.log(`[${req.method}: ${req.url}] took: ${Date.now() - timestamp} ms to execute`);
                return event;
              }
            })
        );

  }
}