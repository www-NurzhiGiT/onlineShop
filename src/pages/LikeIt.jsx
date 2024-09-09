import React from "react";
import "./style/LikeIt.scss";
import "../components/product/Product.scss";
import Del from "../assets/image/delete.png";
import Jsk from "../assets/image/jsk.png";
import Lap from "../assets/image/laptop.png";
import Eye from "../assets/image/eye.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeWish } from "../redux/wishList/wishSlice";

function LikeIt() {
  const { item } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="likeIt container">
      <div className="top-likeIt">
        <div className="wishList-likIt">
          <p>
            Wishlist <span>({item.length})</span>
          </p>
          <div className="btn-btn">
            <button>Move All to Bog</button>
          </div>
        </div>
        {item.map((x) => (
          <div className="product ">
            <div className="product-image ">
              <img src={x.images[0]} alt="" className="product-image-img1" />
              <div className="discount">-35%</div>
              <div className="icons">
                <div
                  className="icon"
                  onClick={() => dispatch(removeWish(x.id))}
                >
                  <img src={Del} alt="" className="heart" />
                </div>
              </div>
              <button className="product-btn">Add To Cart</button>
            </div>

            <div className="product-sart">
              <h4>Gucci duffle bog</h4>
              <div className="prices">
                <p className="red1">$999</p>
                <p className="gray1">$160</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-likeIt">
        <div className="justForYou-likeIt">
          {/* FIXME:  rgb(219, 68, 68)*/}
          <div className="div-all">
            <div className="div-red"></div>
            <p>Just For You</p>
          </div>
          <div className="btnBtn">
            <button>See All</button>
          </div>
        </div>

        <div className="product ">
          <div className="product-image ">
            <img src={Lap} alt="" className="product-image-img2" />
            <div className="discount">-35%</div>
            <div className="icons">
              <div className="icon">
                <img src={Eye} alt="" className="heart" />
              </div>
            </div>
            <button className="product-btn">Add To Cart</button>
          </div>

          <div className="product-sart">
            <h4>Gucci duffle bog</h4>
            <div className="prices">
              <p className="red1">$999</p>
              <p className="gray1">$160</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikeIt;
