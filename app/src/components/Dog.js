import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchDog } from "../actions";
import { Button } from "reactstrap";

function Dog(props) {
  console.log(props, "dog props");
  return (
    <div className="dogDiv">
      <div className="btnDiv">
        <Button color="success" onClick={() => props.fetchDog()}>
          Get New Dog
        </Button>
        {!props.dog && !props.isLoading && <h2>Click to see a new dog!</h2>}
      </div>
      {props.isLoading && (
        <Loader
          type="Puff"
          color="white"
          height={100}
          width={100}
          timeout={3000}
        />
      )}

      {props.dog && !props.isLoading && (
        <img alt="our new dog" src={props.dog.message}></img>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    dog: state.dog,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchDog })(Dog);
