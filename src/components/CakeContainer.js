import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  const { buyCake, numberOfCakes } = props;
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
