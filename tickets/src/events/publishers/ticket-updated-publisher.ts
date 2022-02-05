import { Publisher, Subjects, TicketUpdatedEvent } from '@ptomertickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
