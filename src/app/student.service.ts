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
   form = new FormGroup({
    name: new FormControl(""),
    age: new FormControl(""),
    address: new FormControl("")
  });
 createstudent(data:any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("students")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }
  updatestudent(data:any) {
    return this.firestore
      .collection("students")
      .doc(data.payload.doc.id)
      .set({ merge: true });
  }
  getstudent() {
    return this.firestore.collection("students").snapshotChanges();
  }
  deletestudent(data:any) {
    return this.firestore
      .collection("students")
      .doc(data.payload.doc.id)
      .delete();
  }
}
