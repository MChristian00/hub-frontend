import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import uuid from "uuid";
import moment from "moment";
import { addCommentAct, retrieveAllBlogs } from "../../Redux/Blog/BlogActions";
import { connect } from "react-redux";

function Blog(props) {
  const [Comment, setComment] = useState("");
  const {
    Blogs,
    Logs: {
      User: { _id },
      isAuth,
    },
  } = props;

  const ID = props.match.params.blog_id;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addCommentAct(_id, ID, Comment);
    setComment("");
  };

  var CommentsList = Blogs.find((blog) => {
    return blog._id === ID;
  }).Comments.map((comment) => {
    return (
      <div className="comment-wrapper" key={uuid()}>
        <h6>{comment.Username}</h6>
        <h5>{comment.Comment}</h5>
        <h6>{moment(comment.Time).fromNow()}</h6>
      </div>
    );
  });

  const Blog = Blogs.find((blog) => blog._id === ID);

  return isAuth ? (
    <div>
      <div className="uni-blog-wrapper">
        <span style={{ fontSize: "2rem", textTransform: "uppercase" }}>
          {Blog.Title}
        </span>
        <hr />
        <h2 style={{ color: "rgba(0,0,0,0.8)" }}>{Blog.Content}</h2>
        <h4 style={{ color: "rgba(0,0,0,0.3)" }}>created by {Blog.Author}</h4>
        <h4 style={{ color: "rgba(0,0,0,0.3)" }}>
          created {moment(Blog.createdAt.toLocaleString()).calendar()}
        </h4>
      </div>
      <div className="com-form">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Comment"
            value={Comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <input type="submit" value="Comment" className="form-control" />
        </form>
      </div>
      <div className="comments-wrapper">
        <span>COMMENTS</span>
        {CommentsList}
      </div>
    </div>
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

export default connect(mapStateToProps, { retrieveAllBlogs, addCommentAct })(
  Blog
);
