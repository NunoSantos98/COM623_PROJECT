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
import usedscns from "../services/firebase/dscns"
import useAuth from "../services/firebase/useAuth";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function Discussionchatcomp(props) {

  const {onMessage} = props;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const {getDiscussionCommentsSnap} = usedscns();


  const location = useLocation();
  
  
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
 
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.currentTarget.value) {
      e.preventDefault();
      onMessage(location.state.id, message);
      setMessage("");
      e.currentTarget.blur();
    }
  };

  const messageListener = () => {
    getDiscussionCommentsSnap(location.state.id, (messageRef) => {
      let messageHolder = [];
      if (messageRef.metadata.hasPendingWrites) {
        return;
      }
      messageRef.forEach((m) =>
      messageHolder.push({ ...m.data(), ...{ id: m.id } })
      );
      setMessages(messageHolder);
    
    });
  };

  useEffect(() => {
    messageListener();
  }, []);



  useOnClickOutside(node, () => setOpen(false));

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
 
  return (
    <ThemeProvider theme={theme}>
  
  
  
  {messages.map((m) => (
     <div key={m.id}> 
        <div style={Lecturer}>
          <p style={pi}><b>{m.name}</b></p>
          <p style={{marginTop:'-20px',marginLeft:'17px',fontSize:'13px'}}>{dayjs().to(m.time.toDate())}</p>
          
         

          <p style={pi}>{m.msg}</p>
        </div>
        <div style={Student}>
          <p></p>
          <p style={pi}>{m.usermsg}</p>
        </div>
        </div>

        ))}

 <div style={chat}>
        <input style={messageinput} onChange={(e) => setMessage(e.target.value)} onKeyPress={handleKeyPress} value={message} />
        <button style={buttonsend}>SEND</button>
      </div>
     
    
    </ThemeProvider>
  );
}

export default Discussionchatcomp;
