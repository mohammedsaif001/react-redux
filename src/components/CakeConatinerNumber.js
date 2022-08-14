import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { buyCake } from "../redux";

const CakeConatinerNumber = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {numberOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cake
      </button>
    </div>
  );
};

export default CakeConatinerNumber;
