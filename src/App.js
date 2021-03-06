import React from 'react';
import './App.css';
import TopBar from './Componentes/TopBar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import SinglePost from './Componentes/singlePost/SinglePost';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from './Componentes/posts/Posts';


function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
        { user ? <Home/> : <Login />}
        </Route>

        <Route path="/register">
         { user ? <Home/> :<Register />}
        </Route>

        <Route path="/write">
        { user ? <Write/> : <Register />}
        </Route>

        <Route path="/sigle">
          <Single />
        </Route>

        <Route path="/settings">
        { user ? <Settings /> : <Register/> }
        </Route>

        <Route path="/post/:postId">
          <Single />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
