import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logOutAct } from "../../Redux/Logs/LogsActions";

function Logout(props) {
  props.dispatchLogs();
  return (
    <div>
      <Redirect to="/login" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogs: () => dispatch(logOutAct()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
