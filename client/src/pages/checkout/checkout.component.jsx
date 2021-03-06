import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../redux/cart/cart.selectors';
import {
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutPageContainer,
  CheckoutTestWarning,
  CheckoutTotal,
} from './checkout.styles';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotalPrice);

  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutTotal>
        <span>{`TOTAL $${total}`}</span>
      </CheckoutTotal>
      <CheckoutTestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp. 01/2022 - CVV: 123
      </CheckoutTestWarning>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
