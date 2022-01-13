//npm imports
import React, { useState, useRef} from "react";
import styled, { ThemeProvider } from "styled-components";
import FocusLock from "react-focus-lock";
import Deadlnsform from "../components/deadlnsform";
import useAuth from "../services/firebase/useAuth";
import usedeadlns from "../services/firebase/deadlns";
import { useHistory,Link } from "react-router-dom";
import { GlobalStyles } from "../global";
import { useOnClickOutside } from "../hooks";
import { theme } from "../theme";
import { Burger, Menu } from "../components";

function Createdealine(props){
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const history = useHistory();
  const { createdeadlns} = usedeadlns();
  const handleSubmit = async (checkin) => {
    const ckin = {...checkin,};

    try {
      await createdeadlns(ckin);
      history.push("/Deadlines");
    } catch (e) {
      console.log(e);
      console.log(e);
    }
  };
 const StyledcreateP = styled.p`
  margin-top: 16px;
  text-align: right;
  margin-left: -180px;
  color: rgb(131, 188, 212);
  cursor: pointer;

`;
const Title ={
  textAlign: "left",
}



  useOnClickOutside(node, () => setOpen(false));
  
  return (
<ThemeProvider theme={theme}>
<GlobalStyles></GlobalStyles>
       <div ref={node} style={{textAlign:'Center'}}>
        <FocusLock disabled={!open} >
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>

      <h1 style={Title}>Create Deadlines</h1>
     
      <Link to='/deadlines'>
      <StyledcreateP>Go back</StyledcreateP>
      </Link>
    
  <Deadlnsform onSubmit={handleSubmit}/>

    </ThemeProvider>
  )}

export default Createdealine;