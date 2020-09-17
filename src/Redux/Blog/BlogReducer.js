const BlogsInitState = {
  AllBlogs: [],
  UserBlogs: [],
  UserFavs: [],
};

export const BlogReducer = (state = BlogsInitState, action) => {
  switch (action.type) {
    case "RETRIEVE_ALL_BLOGS":
      // console.log(action.payload); //CHECK THE INFINITE LOOPING ERR
      // state.AllBlogs = action.payload;
      return { ...state, AllBlogs: action.payload };
    // return {state};

    case "RETRIEVE_ALL_USER_BLOGS":
      // console.log(action.payload); //CHECK THE INFINITE LOOPING ERR
      state.UserBlogs = action.payload;
      return state;

    case "HANDLE_LIKE":
      // Remove the coloring of Like onClick
      var updatedstate = state.map((blog) => {
        // var likesInitCount = 1;
        // console.log(
        //   blog.ID === action.ID
        //     ? blog.LikedBy.filter((user) => user === action.UserID).length
        //     : "not in"
        // );
        // if (
        //   blog.ID === action.ID && blog.ID === action.ID
        //     ? !blog.LikedBy.filter((user) => user === action.UserID).length
        //     : 1
        // )
        // if (blog.ID === action.ID) {
        //   blog.Like = !blog.Like;
        //   blog.likesCount = blog.likesCount + 1;

        // console.log("likesInitCount = " + likesInitCount);
        if (blog.ID === action.ID) {
          if (
            blog.LikedBy.find((user) => user === action.UserID) ? false : true
          ) {
            blog.LikedBy.push(action.UserID);
          } else {
            if (blog.ID === action.ID) {
              blog.LikedBy = blog.LikedBy.filter((user) => {
                // Instead of filter --- Use index = indexOf(blog)
                // arr.splice(index,1)

                return user !== action.UserID;
              });
            }
          }
        }
        // }

        return blog;
      });
      return updatedstate;
    // case "HANDLE_COMMENT":
    //   const updatedStateByComment = state.map((blog) => {
    //     if (blog.ID == action.ID) {
    //       blog.Comments.push({
    //         UserID: action.UserID,
    //         Comment: action.Comment,
    //         Time: new Date(),
    //       });
    //     }
    //     return blog;
    //   });
    //   return updatedStateByComment;

    // case "HANDLE_FAV":
    //   const updatedStateByFav = state.map((blog) => {
    //     if (blog.ID === action.ID) {
    //       blog.FavBy.push(action.UserID);
    //     }
    //     return blog;
    //   });
    //   return updatedStateByFav;

    // return updatedFavState;
    // case "HANDLE_FAV_REMOVAL":
    //   var updatedFavState = state.map((blog) => {
    //     if (blog.ID === action.ID) {
    //       blog.FavBy = blog.FavBy.filter((user) => {
    //         // Instead of filter --- Use index = indexOf(blog)
    //         // arr.splice(index,1)

    //         return user !== action.UserID;
    //       });
    //     }
    //     return blog;
    //   });
    //   return updatedFavState;

    case "HANDLE_BLOG_REMOVAL":
      // Instead of filter --- Use index = indexOf(blog)
      // arr.splice(index,1)

      // var updatedBlogState = state.filter((blog) => {
      //   return blog.ID !== action.ID;
      // });
      return state;

    case "HANDLE_VIEW":
      var updatedstateViews = state.map((blog) => {
        if (blog.ID === action.ID) {
          blog.viewsCount += 1;
        }
        return blog;
      });
      return updatedstateViews;

    default:
      return state;
  }
};
