import { Injectable } from '@angular/core';
import { Student } from "src/models/student";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList: Student[] = [];

  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor() {
  }

  addStudent(student: Student): void {
    this.studentList.push(student);
    this.students$.next(this.studentList);
  }

  deleteStudent(student: Student): void {
    const index = this.studentList.findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.studentList.splice(index, 1);
      this.students$.next(this.studentList);
    }
  }
}
