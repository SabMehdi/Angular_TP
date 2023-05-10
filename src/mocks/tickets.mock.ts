import { Major, Ticket } from '../models/ticket';
import { students } from './students.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Morocco',
    description: '',
    date: dateToday,
    student: students[0],
    major:Major.si,
    archived:true
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: students[1],
    major:Major.ge,
    archived:false
  },
];
