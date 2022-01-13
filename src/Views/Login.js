//npm imports
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../hooks";
import { theme } from "../theme";
import { Burger, Menu } from "../components";
import useAuth from "../services/firebase/useAuth";
import logo from "../logo.png";
import {
  Switch,
  Route,
  BrowserRouter,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import FocusLock from "react-focus-lock";
//images
//Views
import { GlobalStyles } from "../global";
import Form from "../components/LoginForm/LoginForm.js";
import header from "../Views/header";
function LoginForm() {
  
  const [serverErrorMessage, setServerErrorMessage] = useState();
  const {signInEmailUser, signInFacebookUser, signInGoogleUser} = useAuth();

  const handleEmailSubmit = async (data) => {
    try {
      const { email, password } = data;
      await signInEmailUser(email, password);
    } catch (e) {
      setServerErrorMessage(e.message);
    }
  };

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const location = useLocation();
  
  useOnClickOutside(node, () => setOpen(false));

  const container = {
    position: "fixed",
    width: "100%",
    height: "100%",
    left: "0",
    top: "20",
    background: "#fff",
    zIndex: "-1",
  };
  const Title ={
    textAlign: "left",
  }

  const Logoimg = styled.img`   
    
  display: block;
  margin-left: auto;
  margin-right: auto;`;



  return (
    <ThemeProvider theme={theme}>
<GlobalStyles></GlobalStyles> 

<Logoimg src={logo} alt="logo"/>

      <h1 style={Title}>Login</h1> 
   <Form
          serverErrorMessage={serverErrorMessage}
          onEmailSubmit={handleEmailSubmit}
        />
       
    </ThemeProvider>
  );
}

export default LoginForm;
