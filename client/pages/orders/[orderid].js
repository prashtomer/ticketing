import {useEffect, useState} from "react";
import StripeCheckout from 'react-stripe-checkout';
import userRequest from '../../hooks/use-request';
import Router from "next/router";

const OrderShow = ({order, currentUser}) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const {doRequest, errors} = userRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push('/orders')
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    }

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    }
  }, [order]);

  if(timeLeft < 0) {
    return <div>Order Expired</div>
  }

  return (
    <div>
      Time left to pay: {timeLeft} seconds
      <StripeCheckout
        token={({id}) => doRequest({token: id})}
        stripeKey="pk_test_51KPKZaBfoJY2OYYVS14OhrXoVGvUmMCcXxeY1aURjyt5oSuIfgEksmB8e6uIGm5W6SeATPv5UdqLbLOjHaVpJaGe006tFHT9lo"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      {errors}
    </div>
  )
};

OrderShow.getInitialProps = async (context, client) => {
  const {orderid} = context.query;
  const {data} = await client.get(`/api/orders/${orderid}`);

  return {
    order: data,
  }
}

export default OrderShow;