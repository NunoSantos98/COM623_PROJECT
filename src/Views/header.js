//npm imports
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../hooks";
import { GlobalStyles } from "../global";
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
import Content from "../Views/Content"

function Header() {
    
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div ref={node} style={{textAlign:'Center'}}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
     <Content/>
    </ThemeProvider>
  );
}

export default Header;
