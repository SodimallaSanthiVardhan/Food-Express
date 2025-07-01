import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { food_list, cartItems, addToCart, removeFromCart, getToatlCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const totalAmount = getToatlCartAmount();
  const deliveryFee = totalAmount ? 20 : 0;

  return (
    <section className="cart">
      <h2>Your Cart</h2>

      {Object.values(cartItems).every(q => q === 0) ? (
        <p className="empty-cart">Your cart is empty. Add some items!</p>
      ) : (
        <>
          <div className="cart-table-header">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Actions</p>
          </div>
          <hr />
          {food_list.map((item, index) => (
            cartItems[item._id] > 0 && (
              <div key={index} className="cart-item">
                <img className="food-img" src={`${url}/image/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
                <p>₹ {item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹ {item.price * cartItems[item._id]}</p>
                <div className="add-rem">
                  <img src={assets.remove_icon_red} alt="remove" onClick={() => removeFromCart(item._id)} />
                  <img src={assets.add_icon_green} alt="add" onClick={() => addToCart(item._id)} />
                </div>
              </div>
            )
          ))}
          <hr />

          <div className="cart-summary">
            <div className="summary-box">
              <h3>Cart Summary</h3>
              <div className="summary-line">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="summary-line">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="summary-line total">
                <span>Total</span>
                <span>₹{totalAmount + deliveryFee}</span>
              </div>
              <button className="checkout-btn" onClick={() => navigate('/PlaceOrder')}>Proceed to Checkout</button>
            </div>

            <div className="promo-box">
              <h4>Have a Promo Code?</h4>
              <div className="promo-input">
                <input type="text" placeholder="Enter code" />
                <button>Apply</button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
