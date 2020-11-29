import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import BlogPrint from "./Components/Layout/BlogPrint";
import AddBlog from "./Components/Layout/AddBlog";
import NavBar from "./Components/Layout/NavBar";
import About from "./Components/Pages/About";
import FavsPage from "./Components/Pages/FavsPage";
import OwnBlogs from "./Components/Pages/OwnBlogs";
import Blog from "./Components/Pages/Blog";
import Login from "./Components/Auth/Login";
import Logout from "./Components/Auth/Logout";
import SignUp from "./Components/Auth/SignUp";
import Footer from "./Components/Layout/Footer";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="app-wrapper">
          <Router>
            <NavBar />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <div className="blogs-wrapper">
                    <BlogPrint />
                    <AddBlog />
                  </div>
                )}
              />
              <Route
                path="/favspage"
                render={(props) => (
                  <React.Fragment>
                    <FavsPage />
                  </React.Fragment>
                )}
              />
              <Route path="/myblogs" component={OwnBlogs} />
              <Route path="/about" component={About} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/:blog_id" component={Blog} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
