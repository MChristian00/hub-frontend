import React from "react";
import { Link } from "react-router-dom";

export default function SignedOutLinks() {
  return (
    <div className="link-wrapper">
      <ul>
        <li>
          <Link id="link" to="/signup">
            SIGN UP
          </Link>
        </li>
        <li>
          <Link id="link" to="/login">
            LOGIN
          </Link>
        </li>
      </ul>
    </div>
  );
}
