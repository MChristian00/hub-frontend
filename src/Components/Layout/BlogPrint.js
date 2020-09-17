import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import {
  viewAct,
  favAct,
  likeAct,
  retrieveAllBlogs,
} from "../../Redux/Blog/BlogActions";
import {
  faHeart,
  faEye,
  faComment,
  faStarOfDavid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BlogPrint(props) {
  const { Blogs, Logs, dispatchRetrieval, dispatchUBRetrieval } = props;

  useEffect(() => {
    dispatchRetrieval();
  }, [Blogs]);

  console.log(Blogs);

  var BlogsList = Blogs.length ? (
    Blogs.map((blog) => {
      return (
        <div className="blog-wrapper" key={blog._id}>
          <Link
            id="link"
            to={"/" + blog._id}
            onClick={() => {
              props.dispatchBlogView(blog._id);
            }}
          >
            {blog.Title}
          </Link>
          <h6>created by {blog.Author}</h6>
          <h6>created {moment(blog.createdAt.toLocaleString()).fromNow()}</h6>
          <div className="favbar-wrapper">
            <h6>
              <div className=" text-dark">
                <FontAwesomeIcon icon={faEye} size="1x" />
              </div>
            </h6>
            <h6>{blog.viewsCount}</h6>
            <h6
              style={{
                color: blog.LikedBy.find((user) => user === Logs.User._id)
                  ? "#f00"
                  : "rgba(0, 0, 0, 0.7)",
              }}
              onClick={() => {
                props.dispatchBlogLike(Logs.User._id, blog._id);
              }}
            >
              <div
                className={
                  blog.LikedBy.find((user) => user === Logs.User._id)
                    ? " text-warning"
                    : " text-dark"
                }
              >
                <FontAwesomeIcon icon={faHeart} size="1x" />
              </div>
            </h6>
            <h6>{blog.LikedBy.length}</h6>
            <h6>
              <Link className="text-dark" to={"/" + blog._id}>
                <FontAwesomeIcon icon={faComment} size="1x" />
              </Link>
            </h6>
            <h6>{blog.Comments.length}</h6>
            <h6
              onClick={() => {
                props.dispatchBlogFav(Logs.User._id, blog._id);
              }}
            >
              <div
                className={
                  blog.FavBy.find((user) => user === Logs.User._id)
                    ? "text-warning"
                    : "text-dark"
                }
              >
                <FontAwesomeIcon icon={faStarOfDavid} size="1x" />
              </div>
            </h6>
          </div>
        </div>
      );
    })
  ) : (
    <div className="no-data_wrapper text-warning">
      <h1>NO BLOGS ADDED YET :)</h1>
    </div>
  );

  return <div>{Logs.isAuth ? BlogsList : <Redirect to="/login" />}</div>;
}

const mapStateToProps = (state) => {
  return {
    Blogs: state.Blogs.AllBlogs,
    Logs: state.Logs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRetrieval: () => {
      dispatch(retrieveAllBlogs());
    },
    dispatchBlogView: (ID) => dispatch(viewAct(ID)),
    dispatchBlogLike: (UserID, ID) => dispatch(likeAct(UserID, ID)),
    dispatchBlogFav: (UserID, ID) => dispatch(favAct(UserID, ID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPrint);
