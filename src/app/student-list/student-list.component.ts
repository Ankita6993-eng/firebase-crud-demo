import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service'
import { StudentModal } from '../student-modal'
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.getstudentlist();
  }

  studentsdetail:any;

   getstudentlist = () =>
    this.studentService
      .getstudent()
      .subscribe((res:any) => (this.studentsdetail = res));

  deleteOrder = (data:any) => this.studentService.deletestudent(data);

  markCompleted = (data:any) => this.studentService.updatestudent(data);

}
