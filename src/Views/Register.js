//npm imports
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../hooks";
import { theme } from "../theme";
import { Burger, Menu } from "../components";
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
import Login from "./Login";
import Register from "./Register";
import Content from "./Content";
import Form from '../components/RegisterForm/RegisterForm'
import { GlobalStyles } from "../global";
import logo from "../logo.png";
import useAuth from "../services/firebase/useAuth";



function Registerf() {
const history = useHistory();
const [serverErrorMessage,setServerErrorMessage] = useState();
const {createEmailUser} = useAuth();

const handleEmailSubmit = async (data) => {
  try {
    const { email, password } = data;
    await createEmailUser(email, password);
  } catch (e) {
    setServerErrorMessage(e.message);
  }
};


  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

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
      <h1 style={Title}>Register</h1>

    <Form
        serverErrorMessage={serverErrorMessage}
          onEmailSubmit={handleEmailSubmit}/>
    </ThemeProvider>
  );
}

export default Registerf;
