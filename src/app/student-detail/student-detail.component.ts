import { Component, OnInit,Input  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {StudentService} from '../student.service'
import { StudentModal } from '../student-modal'
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
studentForm: FormGroup|any;
submitted = false;
  constructor(public studentService: StudentService) { }

  ngOnInit(): void {}

  studentdetail = [''];

  addStudent = (stud:any) => this.studentdetail.push(stud);

    removeStudent = (stud:any) => {
    let index = this.studentdetail.indexOf(stud);
    if (index > -1) this.studentdetail.splice(index, 1);
  };

   onSubmit() {
    this.studentService.form.value.studentdetail = this.studentdetail;
    let data = this.studentService.form.value;
    console.log("data",data)
    this.studentService.form.reset()
  }


}
