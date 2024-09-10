import React from "react";
import "./style/Cart.scss";
import Jsk from "../assets/image/Jsk.png";
import Down from "../assets/image/down.png";
import Up from "../assets/image/up.png";
import { useSelector, useDispatch } from "react-redux";
import { incQuantity } from "../redux/cart/cartSlice";
import { decQuantity } from "../redux/cart/cartSlice";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const { items } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  // let = a
  const subTotal = items.reduce(
    (sub, item) => sub + item.price * item.quantity,
    0
  );

  const deliveryTotal = 500;
  const total = subTotal + deliveryTotal;

  const handleButtonClick = () => {
    if (items.length === 0) {
      toast.error("Корзина пуста!");
    } else {
      toast.success("Оформление была успешно завершена:  Спасибо за покупку!");
    }
  };
  return (
    <>
      <div className="pp">
        <p className="p1">
          <NavLink to="/" className="home-text">
            Home
          </NavLink>
        </p>
        <p className="p2"> / Cart</p>
      </div>

      <div className="cart-wrapper container">
        {/* TODO: 1 */}
        <div className="title">
          <div className="text">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>
        {/* TODO: 2 */}
        {items.map((x) => (
          <div className="product-cart">
            <div className="img-title">
              {console.log(x)}
              <img src={x.images[0]} alt="" />
              <p>{x.title.slice(0, 18)}</p>
            </div>
            <p>${x.price}</p>
            <div className="textBox">
              <input type="num" value={x.quantity} min="1" max="10" />
              <div>
                <img
                  onClick={() => dispatch(incQuantity(x.id))}
                  src={Up}
                  alt="up"
                  className="up"
                />
              </div>
              <div>
                <img
                  onClick={() => dispatch(decQuantity(x.id))}
                  src={Down}
                  alt="down"
                  className="down"
                />
              </div>
            </div>
            <p>${x.price * x.quantity}</p>
          </div>
        ))}
      </div>
      <div className="buttons container">
        <button className="btnThree">Return to Shop</button>
        <button className="btnFour">Update Cart</button>
      </div>
      {/* TODO: 3 */}
      <div className="total-amount container">
        <div className="in-btn">
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>
        <div className="Cart-total">
          <p className="cart-total-p">Cart Total</p>
          <div className="total-div-3">
            <p>Sabtotal:</p>
            <p>${subTotal}</p>
          </div>
          <hr />
          <div className="total-div-3">
            <p>Shipping:</p>
            <p>${deliveryTotal}</p>
          </div>
          <hr />
          <div className="total-div-3">
            <p>Total:</p>
            <p>${total}</p>
          </div>
          <button onClick={handleButtonClick}>Procees to checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
