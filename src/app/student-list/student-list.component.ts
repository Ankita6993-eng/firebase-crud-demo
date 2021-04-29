import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service'
import { StudentModal } from '../student-modal'
import { NgForm } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs'


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentsdetail:any;
  exampleItems:any;
  id:any
  constructor(public studentService: StudentService,public firestore: AngularFirestore) { }
  ngOnInit(): void {
    this.getstudentdetail()
    
  }
   getstudentdetail () {
    this.studentService
      .getstudent()
      .subscribe((res:any) =>{ (this.studentsdetail = res)
      });
    }

  deletedetail(data:any){ this.studentService.deletestudent(data);}
 racesCollection: AngularFirestoreCollection<any>;

  openUpdaterecorde(student: any) {
  this.studentService.form.patchValue({
    name:student.name,
    age:student.age,
    address:student.address  
  })


   this.firestore.collection('students').snapshotChanges().forEach((changes:any)=>{
     changes.map((a:any)=>{
       let id=a.payload.doc.id
       console.log(id)
     })
   })

  // const index = this.firestore
  //     .collection("students")
  //     .doc(student.payload.doc.id)
  // console.log("id",index)

//   console.log("data",student)
//   let index=this.firestore
//       .collection("students")
//       .doc(student.payload.doc.id)

// console.log("id",index)
}
update1(){
  console.log("data updated")
} 
getdata(){
 
}



}
