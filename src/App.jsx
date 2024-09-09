import React from "react";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./Router";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={myRouter}></RouterProvider>
    </>
  );
}

export default App;
