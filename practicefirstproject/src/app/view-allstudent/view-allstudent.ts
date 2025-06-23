import { Component, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-view-allstudent',
  standalone: false,
  templateUrl: './view-allstudent.html',
  styleUrl: './view-allstudent.css'
})

export class ViewAllstudent implements OnInit{
students: any;

  constructor(private service : Service){}

  ngOnInit(): void {
    this.loadAllStudent();
  }

  loadAllStudent(){
    this.students = this.service.getAllStudent();
  }

}
