import React from "react";
import BasketProducts from "./components/BasketProducts";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateTotal } from "./redux/app/features/basketSlice";
const App = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.basket);

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);

  return (
    <div className="w-[90%] text-center mt-8 mx-auto   ">
      <h1 className="text-white text-3xl bg-slate-500 p-2 rounded  ">
        Redux Store
      </h1>
      <Navbar />
      <hr />
      <BasketProducts />
    </div>
  );
};

export default App;
