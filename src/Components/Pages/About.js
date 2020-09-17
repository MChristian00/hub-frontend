import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function About(props) {
  return props.Logs.isAuth ? (
    <div className="about-wrapper">
      <h2 className='text-warning'>
        THIS IS THE WIKI APP VERSION V1.0.0.0
      </h2>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

const mapStateToProps = (state) => {
  return {
    Logs: state.Logs,
  };
};

export default connect(mapStateToProps)(About);
