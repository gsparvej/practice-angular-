import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class Service {

   baseUrl: string="http://localhost:3000/students";

  constructor(private http:HttpClient) { }

  getAllStudent():Observable<any>{

    return this.http.get(this.baseUrl);
  }

  saveStudent(stu: Student):Observable<any>{

    return this.http.post(this.baseUrl,stu)
  }
  
}
