export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?:Major;
}

export enum Major{
  si='si',
  gb='gb',
  ge='ge',
}