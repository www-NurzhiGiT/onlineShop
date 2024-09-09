import React, { useEffect } from "react";
import "./style/Contact.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getCocktailStart,
  getCocktailSuccess,
  getCocktailError,
} from "../redux/contact/contactSlice";
import axios from "axios";

const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

function Contact() {
  const dispatch = useDispatch();
  const { list, error, loading } = useSelector((state) => state.cocktail);

  async function getCocktail() {
    dispatch(getCocktailStart());
    try {
      const res = await axios.get(API);
      dispatch(getCocktailSuccess(res.data.drinks));
      console.log(res);
    } catch (error) {
      console.log(error);
      dispatch(getCocktailError("error not"));
    }
  }

  useEffect(() => {
    getCocktail();
  }, []);
  return (
    <div>
      <div className="contact-wrapper container">
        {list.map((item) => (
          <div className="contact-products">
            <img src={item.strDrinkThumb} alt="" />
            <h4>{item.strDrink}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
