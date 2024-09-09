import { useState, useEffect } from "react";
import React from "react";
import Banner from "../components/banner/Banner";
import Product from "../components/product/Product";
import apiClient from "../axios/apiClient";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsStart,
  fetchProductsSaccess,
  fetchProductsFail,
} from "../redux/products/productSlice";

function Home() {
  // const [products, setProducts] = useState([]);
  // FIXME:
  const { list, error, loading } = useSelector((stete) => stete.products);
  const dispatch = useDispatch();

  async function getProducts() {
    dispatch(fetchProductsStart());
    try {
      const response = await apiClient.get("/products");
      // setProducts(response.data);
      // FIXME:
      dispatch(fetchProductsSaccess(response.data));
      console.log(response);
    } catch (error) {
      console.error(error);
      // FIXME:
      dispatch(fetchProductsFail(error.message));
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div> loading...</div>;
  }

  return (
    <div>
      <Banner />
      <div className="products-map">
        {list.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
