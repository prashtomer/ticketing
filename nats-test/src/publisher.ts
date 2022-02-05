import nats from 'node-nats-streaming';
import {TicketCreatedPublisher} from "./events/ticket-created-publisher";

console.clear();

// For testing purpose temporarily use port forwarding instead of creating a Node Port Service
// or via ingress controller to connect with nats pod inside the kubernetes cluser
// using command k port forward <nats pod> <port>:<target port>

// abs is the client id as there can be more than one client listening or publishing
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222'
});

stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(stan);

  try {
    await publisher.publish({
      id: '123',
      title: 'concert',
      price: 20,
    });
  } catch (err) {
    console.log(err);
  }

  // const data = JSON.stringify({
  //   id: '123',
  //   title: 'concert',
  //   price: 20,
  // });
  // stan.publish('ticket:created', data, () => {
  //   console.log('event published');
  // });
});