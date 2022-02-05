import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ptomertickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}
