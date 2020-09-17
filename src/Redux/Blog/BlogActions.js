import axios from "axios";

const URI = "http://localhost:8080/api/blogs/";

export const retrieveAllBlogs = () => {
  return (dispatch) => {
    axios
      .get(URI, { withCredentials: true })
      .then((res) => {
        dispatch({ type: "RETRIEVE_ALL_BLOGS", payload: res.data.payload });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const retrieveAllUserBlogs = (AuthorID) => {
  return (dispatch) => {
    axios
      .get(`${URI}user/${AuthorID}`)
      .then((res) => {
        dispatch({
          type: "RETRIEVE_ALL_USER_BLOGS",
          payload: res.data.payload,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addBlogAct = (Blog, props) => {
  return (dispatch) => {
    axios
      .post(URI + "add", Blog)
      .then((res) => {
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addCommentAct = (UserID, ID, Comment) => {
  return () => {
    axios
      .put(URI + "comment", { UserID, ID, Comment })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const likeAct = (UserID, ID) => {
  return () => {
    axios
      .put(URI + "like", { UserID, ID })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const viewAct = (ID) => {
  return (dispatch) => {
    axios
      .put(URI + "view/" + ID)
      .then((res) => {
        console.log("Blog viewed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const favAct = (UserID, ID) => {
  return () => {
    axios
      .put(URI + "fav", { UserID, ID })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const blogRemoveAct = (ID) => {
  return (dispatch) => {
    axios
      .delete(URI + ID)
      .then((res) => {
        dispatch({
          type: "HANDLE_BLOG_REMOVAL",
        });
        console.log("Blog deleted", res.data);
      })
      .catch((err) => {
        console.log("Error in deletion", err);
      });
  };
};
