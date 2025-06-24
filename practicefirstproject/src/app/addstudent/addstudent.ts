import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-addstudent',
  standalone: false,
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css'
})
export class Addstudent implements OnInit {

  formGroup !: FormGroup;
  constructor(
    private service: Service,
    private formbuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.formGroup =this.formbuilder.group({

      name: [''],
      email: [''],
      fee: ['']

    });
  }

  addStudent(): void {

    const student: Student = {...this.formGroup.value};
    this.service.saveStudent(student).subscribe({


      next: (resp) => {

        console.log("Student Saved", resp);
        this.formGroup.reset();
        this.router.navigate(['/view-allstu']);


      },
      error: (error) => {

        console.log(error);



      }




})
  }


}
