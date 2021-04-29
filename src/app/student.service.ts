import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { StudentModal } from './student-modal'
import { FormControl, FormGroup } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentForm: FormGroup|any;
submitted = false;
  constructor(private firestore: AngularFirestore) {}
   
 createstudent(data:any) {
    return this.firestore.collection('students').add(data);
  }
  updatestudent(recordID:any,record:any) {
   this.firestore.doc('students/' + recordID).update(record);
  }
  getstudent() {
    return this.firestore.collection("students").snapshotChanges();
  }
  deletestudent( record_id:any) {
    this.firestore.doc('students/' + record_id).delete();
  }
}
