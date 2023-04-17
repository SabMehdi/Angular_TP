import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  public ticketForm: FormGroup;
  public majors = [
    { value: '', label: '--Please choose an option--' },
    { value: 'gb', label: 'gb' },
    { value: 'ge', label: 'ge' },
    { value: 'si', label: 'si' }
  ];

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService) {
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: ['']
    });
  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    ticketToCreate.student = 'Me';
    ticketToCreate.archived=false;
    this.ticketService.addTicket(ticketToCreate);
  }
 
  

}
