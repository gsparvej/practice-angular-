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
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes

  saveStudent(stu: Student):Observable<any>{

    return this.http.post(this.baseUrl,stu)
  }
<<<<<<< Updated upstream
=======

  deleteStudent(id: string): Observable<any>{

return this.http.delete(this.baseUrl+"/"+id)

      }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  
}
