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
studentdetail = [''];
   students:any;
 studentName: string|any;
  studentAge: number|any;
  studentAddress: string|any;
  constructor(public studentService: StudentService,public firestore: AngularFirestore) { }

  ngOnInit(): void {
     this.studentService.getstudent().subscribe((data:any) => {

      this.students = data.map((e:any) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data().Name,
          Age: e.payload.doc.data().Age ,
          Address: e.payload.doc.data().Address,
        };
        
      })
      console.log(this.students);
    });
  }

  
  CreateRecord() {
    let record:any = {};
    record['Name'] = this.studentName;
    record['Age'] = this.studentAge;
    record['Address'] = this.studentAddress;
    this.studentService.createstudent(record).then(resp => {
      this.studentName = "";
      this.studentAge = undefined;
      this.studentAddress = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

deletedetail(rowID:any) {
    this.studentService.deletestudent(rowID);
  }

  EditRecord(record:any) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow:any) {
    let record:any = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.studentService.updatestudent(recordRow.id, record);
    recordRow.isEdit = false;
  }
 
}
