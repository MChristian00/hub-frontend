import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import {
  blogRemoveAct,
  retrieveAllUserBlogs,
} from "../../Redux/Blog/BlogActions";

function OwnBlogs(props) {
  const {
    retrieveAllUserBlogs,
    Blogs,
    Logs: {
      User: { _id },
      isAuth,
    },
  } = props;

  // useEffect(() => {
  //   retrieveAllUserBlogs(_id);
  // }, [Blogs]);

  const ownBlogs = Blogs.length ? (
    Blogs.map((blog) => {
      // USE user._id instead of author
      if (blog.AuthorID === _id) {
        return (
          <div className="blog-wrapper" key={blog._id}>
            <Link id="link" to={`/${blog._id}`}>
              {blog.Title}
            </Link>
            <span
              className="text-warning"
              style={{ float: "right" }}
              onClick={() => {
                props.blogRemoveAct(blog._id);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </span>
            {/* <span>{moment(blog.createdAt).toLocaleString()}</span> */}
          </div>
        );
      }
    })
  ) : (
    <div className="no-data_wrapper text-warning ">
      <h1>NO PERSONAL BLOGS ADDED YET :)</h1>
    </div>
  );

  return isAuth ? ownBlogs : <Redirect to="/login" />;
}

const mapStateToProps = (state) => {
  return {
    Blogs: state.Blogs.AllBlogs,
    Logs: state.Logs,
  };
};

export default connect(mapStateToProps, {
  retrieveAllUserBlogs,
  blogRemoveAct,
})(OwnBlogs);
