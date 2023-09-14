import React from "react";
import {
  incrementBasket,
  decrementBasket,
  removeItem,
} from "../redux/app/features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Product = ({ name, amount, price, image }) => {
  const dispatch = useDispatch();
    
  return (
    <div className="flex items-center justify-between border px-6 mt-2 shadow-md rounded-lg   ">
      <div className="flex items-center gap-48 justify-between">
        <img src={image} alt="" width={250} />
        <div className="cursor-pointer text-white">
          <p className=" text-black text-2xl font-mono  rounded  ">{name}</p>
          <p className="text-slate-500  rounded mx-2 my-2">{price}</p>
          <p
            onClick={() => dispatch(removeItem(name))}
            className="text-red-500 rounded mx-2  "
          >
            Remove
          </p>
        </div>
      </div>
      <div className="text-2xl flex gap-4 px-6 py-2 bg-slate-200 rounded">
        <button onClick={() => dispatch(decrementBasket(name))}>-</button>
        <p>{amount}</p>
        <button onClick={() => dispatch(incrementBasket(name))}>+</button>
      </div>
    </div>
  );
};

export default Product;
