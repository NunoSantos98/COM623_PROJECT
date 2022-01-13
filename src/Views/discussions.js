//npm imports
import React, { useState, useRef,useEffect} from "react";
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
import usedscns from "../services/firebase/dscns"
import useAuth from "../services/firebase/useAuth";
import ChatviewComponent from "../components/chatviewcomponent";
import PropTypes from "prop-types"

function Discussion(props) {
  const Discussion=props;
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/creatediscussion`; 
    history.push(path);
  }

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  const creatediscussion={
    marginTop:'16px',
  
    textAlign:'right',
    marginLeft:"129px",
    color:'#83BCD4',
    cursor:'pointer'
  }

  const Title = {
    textAlign: "left",
  };
  
 
  
  const [Discussions, setDiscussions] = useState([]);
  const {getdscns} = usedscns();
  


  const getDiscussionData = async () => {
    const discussionSnap = await getdscns();
    let Discussions = [];
    if (discussionSnap.size) {
      discussionSnap.forEach((doc) => {
        Discussions.push({ ...doc.data(), ...{ id: doc.id } });
      });
      setDiscussions(Discussions.reverse());
    }
  };

  useEffect(() => {
    getDiscussionData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <div ref={node} style={{ textAlign: "Center" }}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
      <h1 style={Title}>Discussions</h1>
      <p style={creatediscussion} onClick={() =>{routeChange()}}>Create Discussion</p>

      {Discussions.map((di) => (
        <ChatviewComponent key={di.id} Discussions={di} />
      ))}
      
    </ThemeProvider>
  );
}

export default Discussion;
