import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Observable<any[]>> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<any[]>> | Promise<Observable<any[]>> | Observable<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments');
  }


}
