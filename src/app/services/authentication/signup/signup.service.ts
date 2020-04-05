import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, IUser } from 'src/app/models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url:string = 'http://127.0.0.1:8000/api/v1/auth/register'

  // dependency injection
  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<IUser>{
    return this.http.post<IUser>(`${this.url}`,user)
  }
}
