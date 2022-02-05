import {PaymentCreatedEvent, Publisher, Subjects} from '@ptomertickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
