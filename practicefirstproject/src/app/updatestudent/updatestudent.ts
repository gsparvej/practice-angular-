import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { Service } from '../service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  standalone: false,
  templateUrl: './updatestudent.html',
  styleUrl: './updatestudent.css'
})
export class Updatestudent  implements OnInit{

id: string= '';
student: Student= new Student();

constructor( 

  private service: Service,
  private router: Router,
  private route: ActivatedRoute,
  private cdr: ChangeDetectorRef,


){}

  ngOnInit(): void {
    this.loadStudentById;
  }


loadStudentById(){

  this.id = this.route.snapshot.params['id'];

  this.service.getStudentById(this.id).subscribe({

    next: (resp) => {

      this.student = resp;
      this.cdr.markForCheck();

    },
    error: (err) => {

      console.log('fetching student ', err);


    }

  });


}

updateStu(): void {

  this.service.updateStudent(this.id, this.student).subscribe({

    next: (res) => {

      this.router.navigate(['/view-allstu']);
    },
    error: (err) => {
      console.log(err);

    }



  });





}


}
