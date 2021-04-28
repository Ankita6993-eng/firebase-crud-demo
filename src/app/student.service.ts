import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { StudentModal } from './student-modal'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private dbPath = '/student';

 tutorialsRef: AngularFirestoreCollection<StudentModal> ;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
   }

   getAll(): AngularFirestoreCollection<StudentModal> {
    return this.tutorialsRef;
  }
  create(StudentModal: StudentModal): any {
    return this.tutorialsRef.add({ ...StudentModal });
  }

  updatestudent(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  deletestudent(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}
