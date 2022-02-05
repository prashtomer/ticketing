import { Publisher, Subjects, TicketCreatedEvent } from '@ptomertickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
