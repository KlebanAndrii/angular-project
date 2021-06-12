import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/users'


  constructor(private httpClient: HttpClient) {

  }


  getUsersByName(name: string): Observable<any[]> {
    return this
      .httpClient
      .get<any[]>(this.baseUrl)
      .pipe(
        tap(x => console.log(x)),
        map(users => users.filter(user => user.name.includes(name)))
      );
  }

  getUsers(): Observable<any[]> {
    return this
      .httpClient
      .get<any[]>(this.baseUrl)

  }
}
