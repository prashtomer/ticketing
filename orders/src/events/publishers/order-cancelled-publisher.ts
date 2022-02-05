import { Subjects, Publisher, OrderCancelledEvent } from '@ptomertickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
