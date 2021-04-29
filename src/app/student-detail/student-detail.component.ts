import { Component, OnInit,Input  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {StudentService} from '../student.service'
import { StudentModal } from '../student-modal'
import { NgForm } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs'


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
studentForm: FormGroup|any;
submitted = false;
  constructor(public studentService: StudentService,public firestore: AngularFirestore) { }

  ngOnInit(): void {
     this.studentService.getstudent().subscribe((data:any) => {

      this.students = data.map((e:any) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data().name,
          Age: e.payload.doc.data().age ,
          Address: e.payload.doc.data().address,
        };
      })
      console.log(this.students);

    });
  }

  studentdetail = [''];
   students:any;
  exampleItems:any;
  id:any
   onSubmit() {
    this.studentService.form.value.studentdetail = this.studentdetail;
    let data = this.studentService.form.value;
    console.log("data",data)
    this.studentService.createstudent(data).then((res:any) => {
      alert("Student Successfully created...")
    });
  }

  //deletedetail(data:any){ this.studentService.deletestudent(data);}

deletedetail(rowID:any) {
    this.studentService.deletestudent(rowID);
  }
  openUpdaterecorde(student: any) {
  this.studentService.form.patchValue({
    name:student.name,
    age:student.age,
    address:student.address, 
   id: this.firestore.collection('students').snapshotChanges().forEach((changes:any)=>{
     changes.map((a:any)=>{
       this.id=a.payload.doc.id
       console.log(this.id)
     })
   }) 
  })
}
update1(){
  console.log("data updated")
} 
getdata(){
 
}



}
