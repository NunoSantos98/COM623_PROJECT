//npm imports
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../hooks";
import { GlobalStyles } from "../global";
import { theme } from "../theme";
//images
import backimg from "../backgroundimg.png";
//views
import header from "./Content"
import logo from "../logo.png";

import {
  Link
} from "react-router-dom";

 
  

function Content() {

  const StyledH1 = styled.h1`

  color: #83BCD4;
  `;
 
    const StyleDIV = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 320px) {

    }
    `;
    const P1 = styled.p`
    font-size:20px;
    line-weight:36px;

     @media only screen and (max-width: 320px) {
      
    }
    `;
    const ButtonP= styled.button`

    width: 100px;
    height: 40px;
    left: 25px;
    top: 386px;
    background: #83BCD4;
    border-radius: 8px;
    border: none;
    margin-top: 20px;
    color: #fff;

    @media only screen and (max-width: 320px) {
      
    }

    `;
    const ButtonS= styled.button`

    width: 100px;
    height: 40px;
    left: 25px;
    top: 386px;
    background: ##DCDCDC;
    border-radius: 8px;
    border: none;
    margin-top: 20px;
    margin-left: 20px;
    color: #000;

    @media only screen and (max-width: 320px) {
      
    }

    `;
    const Logoimg = styled.img`   
    
    display: block;
    margin-left: auto;
    margin-right: auto;
    
    @media only screen and (max-width: 320px) {
      
    }
    `;
  
  
  return (
    <ThemeProvider theme={theme}>
      <Logoimg src={logo} alt="logo"/>
      <GlobalStyles />
   
      <StyleDIV>
      <img src={backimg} style={{ width: "50%" }}></img>
      
      <styledcontainer>
        <StyledH1>Who we are?</StyledH1>
        <P1>
          A team with the objective of making students live easier by reminding
          them of their deadlines.
        </P1>

        <Link to="/login">
        <ButtonP>Login</ButtonP>
        </Link>
        <Link to="/register">
        <ButtonS>Register</ButtonS>
        </Link>
      </styledcontainer>
      </StyleDIV>

    </ThemeProvider>
  );
}

export default Content;
