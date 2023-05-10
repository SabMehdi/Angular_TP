import { Student } from "./student";

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?:Major;
  archived?:boolean
}

export enum Major{
  si='si',
  gb='gb',
  ge='ge',
}