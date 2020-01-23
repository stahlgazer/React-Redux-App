import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchDog } from '../actions';
import { Button } from 'reactstrap';

function Dog (props) {
    console.log(props, "dog props")
    return (
    <div>
      {!props.dog && !props.isLoading && (
        <h2>Let's see a new dog!</h2>
      )}
      <Button onClick={() => props.fetchDog()}>Get New Dog</Button>
      {props.isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {props.dog && !props.isLoading && <img alt="our new dog" src={props.dog.message}></img>}
    </div>
    )}

    const mapStateToProps = state => {
        return {
          isLoading: state.isLoading,
          dog: state.dog,
          error: state.error
        };
      };
      
      export default connect(
        mapStateToProps,
        { fetchDog }
      )(Dog);