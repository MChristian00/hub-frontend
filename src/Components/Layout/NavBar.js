import React from "react";
import { connect } from "react-redux";
import SignedInLinks from "../Auth/SignedInLinks";
import SignedOutLinks from "../Auth/SignedOutLinks";

function NavBar({ Logs }) {
  //   navStyle = {
  //     textDecoration: "None"
  //     // color: '#fff'
  //   };
  return Logs.isAuth ? (
    <SignedInLinks />
  ) : (
    <SignedOutLinks Credentials={Logs} />
  );
}

const mapStateToProps = (state) => {
  return {
    Logs: state.Logs,
  };
};
export default connect(mapStateToProps)(NavBar);
