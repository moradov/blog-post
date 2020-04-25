import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AddBlog from "./components/UI/AddBlog/AddBlog";
import Footer from "./components/UI/Footer/Footer";
import SignUp from "./components/Auth/SignUp/SignUp";
import Login from "./components/Auth/Login/Login";
import UserState from "./context/UserContext/UserState";
import PostsState from "./context/posts/PostsState";
import Post from "./pages/Post/Post";
import Categorie from "./pages/Categories/Categorie";
import Profile from "./pages/Profile/Profile";
import AddPost from "./pages/addPost/AddPost";
import setAuthToken from "./utils/setAuthToken";
import Global from "./components/HOC/Global";
import AlertState from "./context/alert/AlertState";
//chek if  the token is stored on localstorage => user is authenticated
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = (props) => {
  return (
    <Fragment>
      <UserState>
        <PostsState>
          <AlertState>
            <BrowserRouter>
              <Global {...props}>
                <Header />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/signup' component={SignUp} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/post/:id' component={Post} />
                  <Route exact path='/categorie/:id' component={Categorie} />
                  <Route exact path='/profile/:id' component={Profile} />
                  <Route exact path='/add' component={AddPost} />
                </Switch>
              </Global>
              <AddBlog />
            </BrowserRouter>
          </AlertState>
        </PostsState>
        {/* <Footer /> */}
      </UserState>
    </Fragment>
  );
};

export default App;
