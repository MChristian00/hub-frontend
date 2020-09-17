import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpAct } from "../../Redux/Logs/LogsActions";

function SignUp(props) {
  const [FirstName, setFName] = useState("");
  const [LastName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props)
    props.signUpAct({ FirstName, LastName, Email, Password }, props);
    // setFName("");
    // setLName("");
    // setEmail("");
    // setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={FirstName}
          placeholder="First Name"
          onChange={(e) => {
            setFName(e.target.value);
          }}
          required
        />
        <input
          className="form-control"
          type="text"
          value={LastName}
          placeholder="Last Name"
          onChange={(e) => {
            setLName(e.target.value);
          }}
          required
        />
        <input
          className="form-control"
          type="email"
          value={Email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          className="form-control"
          type="password"
          value={Password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <input className='form-control' type="submit" value="SIGNUP"/>
      </form>
    </div>
  );
}

export default connect(null, { signUpAct })(SignUp);
