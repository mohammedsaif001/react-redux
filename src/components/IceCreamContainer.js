import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer() {
  const iceCream = useSelector((state) => state.iceCream.numberOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Creams - {iceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCreams</button>
    </div>
  );
}

export default IceCreamContainer;
