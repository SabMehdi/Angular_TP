import { Major, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Morocco',
    description: '',
    date: dateToday,
    student: 'Paul',
    major:Major.si
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major:Major.ge
  },
];
