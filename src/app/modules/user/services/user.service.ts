import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';


  constructor(private httpClient: HttpClient) {
  }


  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }
}
