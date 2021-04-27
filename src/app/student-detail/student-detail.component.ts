import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
studentForm: FormGroup|any;
submitted = false;


  constructor(private formBuilder: FormBuilder) { 
    this.studentForm = this.formBuilder.group({
            Name: ['', Validators.required],
            gender: ['', Validators.required],
            address: ['', Validators.required]
        });
  }

  ngOnInit(): void {
  }
  get form() { return this.studentForm.controls; }

   Submit() {
        this.submitted = true;
       if (this.studentForm.invalid) {
            return;
        }
   }    

}
