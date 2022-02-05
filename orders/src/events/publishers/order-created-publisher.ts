import { Publisher, OrderCreatedEvent, Subjects } from '@ptomertickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
