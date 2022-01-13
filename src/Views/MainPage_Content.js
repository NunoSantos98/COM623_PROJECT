//npm imports
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../hooks";
import { theme } from "../theme";
import { Burger, Menu } from "../components";
import calendar from "../deadline.png"
import chat from "../chat.png";
import {
    Link,
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
import useAuth from "../services/firebase/useAuth";
import firebaseConfig from "../config/firebase";
import { initializeApp } from "firebase/app";

function MainPage_Content(props) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";


  useOnClickOutside(node, () => setOpen(false));



  const { onClick, signOut } = props;
  const location = useLocation();

  const app = initializeApp(firebaseConfig);

  const {signUserOut}= useAuth();
  const {user} = useAuth();
    
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
    marginRight:'50px',
    marginTop:'50px',
    marginLeft:'50px',
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

<div style={CenterText}>
        <h3>Welcome back</h3>
        
        <h1 style={{marginTop:"-16px"}} >{user.email}</h1>
        <h6>
            {" "}
          </h6>
</div>

<div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

}}> 

<Link to='/Deadlines'>
<div style={optionbox}>
<img src={calendar} style={{color:"#fff",height:"100px",width:"100px"}}></img>
</div>
</Link>



<Link to='/discussions'>
<div style={optionbox}>
<img src={chat} style={{color:"#fff",height:"100px",width:"100px"}}></img>
</div>
</Link>
</div>

</ThemeProvider>
  );
}

MainPage_Content.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export default MainPage_Content;
