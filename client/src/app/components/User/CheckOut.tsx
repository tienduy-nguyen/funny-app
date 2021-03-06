import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem } from 'src/app/features/user/user.types';
import { AppState } from 'src/store/reducers';
import { Product } from '../Book/Product';

export const Checkout = () => {
  const { cart } = useSelector((state: AppState) => state.user);
  const [totalCheckout, setTotalCheckout] = useState(0);

  const getTotal = (cart: CartItem[]) => {
    let total = 0;
    if (cart?.length > 0) {
      total = cart.reduce(
        (sum, current) =>
          sum + current.total * (current.price ? current.price * 1000 : 0),
        0,
      );
    }
    return total;
  };

  useEffect(() => {
    setTotalCheckout(getTotal(cart));
  }, [cart, totalCheckout, setTotalCheckout]);

  return (
    <div className="checkout">
      <h1 className="checkout__title">Cart</h1>
      {cart && cart?.length
        ? cart.map(product => (
            <Product
              _id={product._id}
              key={product._id}
              total={product.total}
              title={product.title}
              price={product.price}
              old_price={product.old_price}
              imgURL={product.imgURL}
            />
          ))
        : null}
      {cart?.length ? (
        <div className="checkout__pay">
          <div className="checkout__pay--total">
            <p>Total:</p>
            <div>
              {totalCheckout.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND',
              })}
            </div>
          </div>

          <Link to="/checkout/payment" className="checkout__pay--button">
            Check out
          </Link>
        </div>
      ) : (
        <div className="checkout__empty">
          <p className="checkout__empty--text">No products in the cart</p>
          <Link to="/" className="checkout__empty--link">
            Back to shopping
          </Link>
        </div>
      )}
    </div>
  );
};
