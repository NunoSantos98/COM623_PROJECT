//npm imports
import React, { useState, useRef, useEffect} from "react";
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
import Daycomponent from "../components/daycomponent";
import { GlobalStyles } from "../global";
import useAuth from "../services/firebase/useAuth";
import usedeadlns from "../services/firebase/deadlns";
import PropTypes from "prop-types";

function Deadlines(props) {
    
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const history = useHistory();

  
  const [Deadlines, setDeadlines] = useState([]);
  const {getdeadlns} = usedeadlns();

 

  const getDeadlnsData = async () => {
    const deadlnsSnap = await getdeadlns();
    let Deadlines = [];
    if (deadlnsSnap.size) {
      deadlnsSnap.forEach((doc) => {
        Deadlines.push({ ...doc.data(), ...{ id: doc.id } });
      });
      setDeadlines(Deadlines.reverse());
    }
  };

  useEffect(() => {
    getDeadlnsData();
  }, []);

  const routeChange = () =>{ 
    let path = `/createdeadline`; 
    history.push(path);
  }

  useOnClickOutside(node, () => setOpen(false));

  const Title ={
    textAlign: "left",
    marginLeft:"-16%"
  }

  const createdeadline={
    marginTop:'16px',
    marginBottom:'-16px',
    textAlign:'right',

  }

  const StyledcreateP = styled.p`
  margin-top: 16px;
  margin-bottom: -10px;
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
      <h1 style={Title}>Deadlines</h1>

      <StyledcreateP onClick={() =>{routeChange()}}>Create Deadline</StyledcreateP>
    {" "}
      {Deadlines.map((d) => (
        <Daycomponent key={d.id} Deadlines={d} />
      ))}

    </ThemeProvider>
  );
}

export default Deadlines;
