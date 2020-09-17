const axios = require("axios");

const URI = "http://localhost:8080/api/user/";

export const signUpAct = (User, props) => {
  return (dispatch) => {
    axios
      .post(URI + "signup", User)
      .then((res) => {
        if (res.data.type === "success" && res.data.payload) {
          props.history.push("/login");
        }
        // else props.history.push("/400Error");
      })
      .catch((err) => {
        if (err.status === "500") {
          console.log(err);
          // props.history.push("/500Error");
        }
      });
  };
};
export const logInAct = (Creds, props) => {
  return (dispatch) => {
    axios
      .post(URI + "signin", Creds, { withCredentials: true })
      .then((res) => {
        dispatch({
          type: "HANDLE_LOGIN",
          payload: res.data.payload,
        });
        res.data.payload
          ? props.history.push("/")
          : props.history.push("/signup");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logOutAct = () => {
  // setToken(false);
  axios.get(`${URI}/logout`, { withCredentials: true });
  return {
    type: "HANDLE_LOGOUT",
  };
};
