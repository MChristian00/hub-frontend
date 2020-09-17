import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import uuid from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { favAct, retrieveAllBlogs } from "../../Redux/Blog/BlogActions";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function FavsPage(props) {
  const { Blogs, Logs:{User, isAuth} } = props;

  // useEffect(() => {
  //   props.retrieveAllBlogs();
  // });

  var FavBy = Blogs.filter((arr) => {
    return arr.FavBy;
  });

  // Instead of filter --- Use index = indexOf(blog)
  // arr.splice(index,1)

  var UserInFavs = isAuth
    ? FavBy.filter((blog) => {
        if (blog.FavBy.find((user) => user === User._id)) {
          return blog
        }
      })
    : [];
    
  return isAuth ? (
    UserInFavs.length ? (
      UserInFavs.map((fav) => {
        // if (fav !== undefined) {
        return (
          <div className="blog-wrapper" key={uuid()}>
            <Link id="link" to={"/" + fav._id}>
              {fav.Title}
            </Link>
            <span
              className="text-warning"
              style={{ float: "right" }}
              onClick={() => {
                props.favAct(User._id, fav._id);
              }}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </div>
        );
        // }
        // return fav
      })
    ) : (
      <div className="text-warning no-data_wrapper">
        <h1>NO FAVORITE BLOGS ADDED YET :)</h1>
      </div>
    )
  ) : (
    <Redirect to="/login" />
  );
}

const mapStateToProps = (state) => {
  return {
    Blogs: state.Blogs.AllBlogs,
    Logs: state.Logs,
  };
};

export default connect(mapStateToProps, { favAct, retrieveAllBlogs })(FavsPage);
