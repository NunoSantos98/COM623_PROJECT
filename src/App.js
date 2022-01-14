//npm imports
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import firebaseConfig from "./config/firebase";
import { initializeApp } from "firebase/app";

import {
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import logo from "../src/logo.png";

import FocusLock from "react-focus-lock";
//images
//Views
import Login from "./Views/Login";
import Register from "./Views/Register";
import Header from "./Views/Content";
import Content from "./Views/Content";
import MainPage from "./Views/MainPage";
import DeadLine from "./Views/Deadlines"
import EditDeadLine from './Views/EditDeadline'
import CreateDeadline from './Views/createdeadline'
import Discussions from "./Views/discussions";
import CreateDiscussion from "./Views/creatediscussion";
import DiscussionChat from "./Views/DiscussionChat";
import useAuth from "./services/firebase/useAuth"

function Protected({ authenticated, children, ...rest }) {
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
function App() {

  const location = useLocation();
  const history = useHistory();
  const app = initializeApp(firebaseConfig);
  const { user } = useAuth();

 

  const { isAuthenticated, signInEmailUser} =
    useAuth();

  

  useEffect(() => {
    if (isAuthenticated === true) {
      history.push('/MainPage');
    }
    return;
  }, [isAuthenticated]);

     
  return (

    
    <ThemeProvider theme={theme}>


        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
          <Route exact path="/">
          <Header/>          
            </Route>
            <Route exact path="/login">
              <Login signInEmailUser={signInEmailUser} />
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>

            <Route exact path="/MainPage">
              <MainPage/>
            </Route>

            <Route exact path="/Deadlines">
              <DeadLine/>
            </Route>

            <Route exact path="/EditDeadline">
              <EditDeadLine/>
            </Route>

            <Route exact path="/createdeadline">
              <CreateDeadline/>
            </Route>

            <Route exact path="/discussions">
              <Discussions/>
            </Route>

            <Route exact path="/creatediscussion">
              <CreateDiscussion/>
            </Route>

            <Route exact path="/discussionchat">
              <DiscussionChat/>
            </Route>
            
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
