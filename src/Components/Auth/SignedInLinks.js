import React from "react";
import { Link } from "react-router-dom";

export default function SignedInLinks(props) {
  return (
    <div className="link-wrapper">
      <ul>
        <li>
          <Link id="link" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link id="link" to="/myblogs">
            MY BLOGS
          </Link>
        </li>
        <li>
          <Link id="link" to="/favspage">
            FAVS
          </Link>
        </li>
        <li>
          <Link id="link" to="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link id="link" to="logout">
            LOGOUT
          </Link>
        </li>
        <li>
          <span>{props.Credentials}</span>
        </li>
      </ul>
    </div>
  );
}
