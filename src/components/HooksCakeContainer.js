import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { buyCake } from "../redux";

export const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

// import React from "react";
// import { useSelector, useDispatch } from "react-redux/es/exports";
// import { buyCake } from "../redux";
// import { connect } from "react-redux";

// const HooksCakeContainer = (props) => {
//   const { buyCake } = props;
//   const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
//   const dispatch = useDispatch();
//   const CLick = () => {
//     dispatch(buyCake(2));
//   };
//   return (
//     <div>
//       <h2>Number of Cakes - {numberOfCakes}</h2>
//       <button onClick={CLick}>Buy Cake</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   const { numberOfCakes } = state.numberOfCakes;
//   return {
//     numberOfCakes,
//   };
// };

// const mapDispatchToProps = () => {
//   return {
//     buyCake,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HooksCakeContainer);
