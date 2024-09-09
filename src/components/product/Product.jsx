import React from "react";
import "./Product.scss";
import Star from "../../assets/svg/sart.jsx";
import Jsk from "../../assets/image/jsk.png";
import Like2 from "../../assets/image/likeProduct.png";
import Eye from "../../assets/image/eye.png";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/wishList/wishSlice.js";
import { addToCart } from "../../redux/cart/cartSlice.js";

function Product({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="products container">
      {/* <div className="product-timer ">
        <div className="timer-div">
          <div className="title">
            <div className="red-div"></div>
            <p>Today’s</p>
          </div>
          <h1>Flash Sales</h1>
          <div></div>
        </div>
        <div className="right left"></div>
      </div> */}

      <section className="sectionOne">
        <div className="product ">
          <div className="product-image ">
            <img
              src={data.images[0]}
              alt="images"
              className="product-image-img1"
            />
            <div className="discount">-40%</div>
            <div className="icons">
              <div className="icon">
                <img
                  onClick={() => dispatch(addItem(data))}
                  src={Like2}
                  alt="like"
                  className="heart"
                />
              </div>
              <div className="icon">
                <img src={Eye} alt="" className="eye" />
              </div>
            </div>
            <button onClick={() => dispatch(addToCart(data))} className="product-btn">Add To Cart</button>
          </div>

          <div className="product-sart">
            <h4>{data.title}</h4>
            <div className="prices">
              <p className="red1">${data.price}</p>
              <p className="gray1">$160</p>
            </div>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Star key={index} fill={item <= 4 ? "#FFAD33" : "gray"} />
              ))}
              <Star />
              <span>(88)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
// fill={item <= 4 ? "#FFAD33" : "gray"}
