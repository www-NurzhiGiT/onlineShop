import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/count/countSlice";

function About() {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default About;
