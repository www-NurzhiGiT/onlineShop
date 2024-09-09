import React from "react";
import "./style/Cart.scss";
import Jsk from "../assets/image/Jsk.png";
import Down from "../assets/image/down.png";
import Up from "../assets/image/up.png";
import { useSelector, useDispatch } from "react-redux";
import { incQuantity } from "../redux/cart/cartSlice";
import { decQuantity } from "../redux/cart/cartSlice";

function Cart() {
  const { items } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  // let = a
  const subTotal = items.reduce(
    (sub, item) => sub + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className="pp">
        <p className="p1">Home </p> <p className="p2"> / Cart</p>
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
      <div></div>
      <div className="total-amount">
        <div>
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>
        <div>
          <p>Cart Total</p>
          <div>
            <p>Sabtotal:</p>
            <p>${subTotal}</p>
          </div>
          <hr />
          <div>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div>
            <p>Total:</p>
            <p>$1750</p>
          </div>
          <button>Procees to checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
