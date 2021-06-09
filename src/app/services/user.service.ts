import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }


  getUserById(id: string): Observable<any> {
    return this.httpClient.get<any>(this.url + '/' + id);
  }
}
