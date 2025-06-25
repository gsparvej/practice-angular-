import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-allstudent',
  standalone: false,
  templateUrl: './view-allstudent.html',
  styleUrl: './view-allstudent.css'
})

export class ViewAllstudent implements OnInit {
  students: any;

  constructor(
    private service: Service,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadAllStudent();
  }

  loadAllStudent() {
    this.students = this.service.getAllStudent();
  }


  deleteStu(id: string): void {
    this.service.deleteStudent(id).subscribe({

      next: (resp) => {

        console.log("Student Deleted", resp);
        this.cdr.reattach();
        this.loadAllStudent();

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getStuById(id: string): void {

    this.service.getStudentById(id).subscribe({

      next: (res) => {

        console.log("id get succesfully",res);
        this.router.navigate(['/']);

      },
      error: (err) => {


        console.log(err);
      }



    });



  }

}
