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
import PropTypes from "prop-types"
//images
//Views
import Login from "./Login";

import Content from "./Content";
import Form from "../components/LoginForm/LoginForm";
import { GlobalStyles } from "../global";
import Button from "../components/Button/Button";
import Popup from "../components/popup/popup";
import usedscns from "../services/firebase/dscns"
import useAuth from "../services/firebase/useAuth";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Discussionchatcomp from "../components/discussionchatcomp";
import { serverTimestamp } from "firebase/firestore";

dayjs.extend(relativeTime);

function DiscussionChat(props) {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { createDiscussionComment, getdscns } = usedscns();
  const {user}= useAuth();


  const location = useLocation();
  
  
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  
  const handleComment = async (id, message) => {
    try {
      await createDiscussionComment(id, {
        ...{ message },
        ...{
          name: user.displayName || user.email,
          time: serverTimestamp(),
        },
      });
    } catch (e) {
      console.log(e);
      console.log("could not add a comment");
  }
  };



  useOnClickOutside(node, () => setOpen(false));

  const Title = {
    textAlign: "left",
    marginLeft:'36px'
  };

  const pi = {
    paddingLeft: "16px",
  };

  const Lecturer = {
    textAlign: "center",
   marginLeft:"140px",
    marginTop: "8px",
    marginBottom: "8px",
    marginRight: "140px",
    backgroundColor: "#496A78",
    color: "#fff",
    borderRadius: "8px",
  };
  const Student = {
    textAlign: "right",
    marginLeft: "140px",
    marginTop: "16px",
    marginBottom: "8px",
    marginRight: "16px",
    backgroundColor: "#83BCD4",
    color: "#fff",
    borderRadius: "8px",
  };

  const messageinput={
    width:'250px',
    marginLeft:'500px',
    marginTop:'10px',
    height:'30px',
    borderRadius:'8px',
    border:'none'
  }
  const buttonsend={
backgroundColor:'#83BCD4',
border: 'none',
marginLeft:'20px',
borderRadius:'8px',
color:'#fff',
height:'30px'
  }
  const chat = {
    position:'fixed',
    left:'0px',
    bottom:'0px',
    height:'50px',
    width:'100%',
    background:'#EEEEEE',
  
  };

  console.log(location.state.id);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <div ref={node} style={{ textAlign: "Center" }}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
      <h2 style={Title}></h2>
  
  <Discussionchatcomp onComment={handleComment}/>
  
  


    </ThemeProvider>
  );
}

export default DiscussionChat;
