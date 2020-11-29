import React, { useState } from "react";
import { connect } from "react-redux";
import { logInAct } from "../../Redux/Logs/LogsActions";

function Login(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.logInAct({ username: Email, password: Password }, props);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="LOGIN" className="form-control" />
      </form>
    </div>
  );
}

export default connect(null, { logInAct })(Login);
