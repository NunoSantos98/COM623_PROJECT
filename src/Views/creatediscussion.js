 //npm imports
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../hooks";
import { theme } from "../theme";
import { Burger, Menu } from "../components";
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
import usedscns from "../services/firebase/dscns";
import Discussionform from '../components/discussionform'


function CreateDiscussion() {
    

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const history = useHistory();
  const {createddscns} = usedscns();
  const handleSubmit = async (checkin) => {
    const ckin = {...checkin,};

    try {
      await createddscns(ckin);
      history.push("/discussions");
    } catch (e) {
      console.log(e);
      console.log(e);
    }
  };

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

      const StyledcreateP = styled.p`
  margin-top: 16px;
  text-align: right;
  margin-left: 130px;
  color: rgb(131, 188, 212);
  cursor: pointer;

`;



  return (
    <ThemeProvider theme={theme}>
<GlobalStyles></GlobalStyles>
       <div ref={node} style={{textAlign:'Center'}}>
        <FocusLock disabled={!open} >
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
      <h1 style={Title}>Create Discussion</h1>



      <Link to='/discussions'>
      <StyledcreateP>Go back</StyledcreateP>
      </Link>
    
      <Discussionform onSubmit={handleSubmit}/>



    </ThemeProvider>
  );
}

export default CreateDiscussion;
