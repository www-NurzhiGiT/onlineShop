import React from "react";
import "./Banner.scss";
import Carousel from "react-bootstrap/Carousel";

import bannerImage from "../../assets/image/banner.png";
// import bannerImage2 from "../../assets/gif/banner2.gif";
import bannerImage3 from "../../assets/image/banner3.webp";

function Banner() {
  return (
    <div className="banner container">
      <div className="banner-slider">
        <ul>
          <li>Woman’s Fashion</li>
          <li>Men’s Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className="banner-carousel">
        <Carousel>
          <Carousel.Item>
            <img src={bannerImage} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://www.hardsoftcomputers.co.uk/wp-content/uploads/2022/09/gallery-iphone-14-new-all-colours.gif"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://gifdb.com/images/high/iphone-14-pro-498-x-280-gif-r01j5sv508w26zs5.gif"
              alt=""
              className="gif1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://media.giphy.com/media/0nXIQ4wCT8NpRGufOY/giphy.gif"
              alt=""
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
