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

import { GlobalStyles } from "../global";
import Button from "../components/Button/Button";


function EditDealine() {
    
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

  const styledinput = {
    width: "330px",
    height: "44px",
    top: "217px",
    background: "#EFF0F2",
    borderRadius: "8px",
    border: '1px solid #ccc'
  };

  const styledForm = {
    width: "330px",
    height: "243px",
    left: "24px",
    top: "183px",
  };
  const styleCenterdiv ={
    marginTop:'22px',
    fontSize:'18px'
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
      <h1 style={Title}>Edit Deadline</h1>
    

      <form style={styledForm}>
      <label> Assessment Name </label>
      <p>
        <input type="text" name="essayname" style={styledinput} />
      </p>
      <label> Unit Name </label>
      <p>
        <input type="text" name="unitname" style={styledinput} />
      </p>
      <label> Hand-in Date </label>
      <p>
        <input type="date" name="essaydate" style={styledinput} />
      </p>
      <label> Lecture Name </label>
      <p>
        <input type="text" name="unitname" style={styledinput} />
      </p>
      
      <Button text='Edit' />
      
    </form>




    </ThemeProvider>
  );
}

export default EditDealine;
