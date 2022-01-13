//npm imports
import React, { useState, useRef} from "react";
import styled, { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../hooks";
import { theme } from "../theme";
import { Burger, Menu } from "../components";
import calendar from "../calendar.png"
import {
  Switch,
  Link,
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
import Login from "../App";
import MainPage_content from "../Views/MainPage_Content"
import useAuth from "./services/firebase/useAuth"



function MainMenu() {
    
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const {user} = useAuth();

  useOnClickOutside(node, () => setOpen(false));

  
  const CenterText ={
    textAlign: "center",
    marginBottom:"20px",
    marginTop:"25px",
  }
  const colortext={
    color:"#83BCD4",
    textAlign: "center",
    marginBottom:"20px",
    marginTop:"25px"
  }

  const optionbox ={
    backgroundColor:"#83BCD4",
    height:"160px",
    width:"200px",
    borderRadius:"16px",
    textAlign:"center",
  margin:"0 auto",
    marginBottom:"20px",
  }

  return (
  
    <ThemeProvider theme={theme}>
<GlobalStyles></GlobalStyles>
       <div ref={node} style={{textAlign:'Center'}}>
        <FocusLock disabled={!open} >
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>

  <MainPage_content/>
  
    </ThemeProvider>
  );
}


export default MainMenu;
