import { createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme";

import {
  Switch,
  Route,
  BrowserRouter,
  useLocation,
  useHistory,
  useNavigate,
  Redirect,
  Link
} from "react-router-dom";
import Discussion from "../Views/discussions";



function ChatviewComponent(props){

  let history = useHistory();

  const {Discussions}=props;
  
  const routeChange = event => {
    history.push({
        pathname: '/discussionchat',
        state: {id: Discussions.id}
    });
 };
 

    const profname = {
        fontWeight: "bold",
        paddingTop: "5px",
        
      };

    const unitname = {
        marginTop: "-16px",
      };
      const messagedate = {
        verticalAlign: "middle",
      };
      const hr={
        height:'0.5px solid', 
        Color:'#3C3C43',
        width:'100%'
      }

      const StyledDivSelected = styled.div`
      
      
      &:hover .my__unique__button__class-asdf123 {
        background-color: black;
      }
      
      `;
    
return(
  <ThemeProvider theme={theme}>

    <StyledDivSelected style={{cursor:"pointer"}}>
        <table>
          <tr onClick={() =>{routeChange()}}>
            <td >
              <p style={profname}>{Discussions.lname}</p>
              <p style={unitname}>{Discussions.unitname}</p>
            </td>
            <td style={messagedate}>{" "}{Discussions.datevalue}</td>
          </tr>
          <tr>
            <td colSpan="2" >Conversation topic: ({Discussions.topicname})</td>
           
          </tr>
        </table>
        <hr style={hr}></hr>
      </StyledDivSelected>
      
</ThemeProvider>
)}


export default ChatviewComponent;