import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme";


function Daycomponent(props) {
  const {Deadlines} = props;

      const Title2 = {
        textAlign: "left",
        marginLeft:"-16%"
      }
      const day={
        fontSize:"35px",
        fontWeight:"bold",
       
      }
      const unit={
        fontSize:"18px",
        fontWeight:"700",
        marginLeft:"16px",
        padding:"16px"
    
      }
      const essayname={
        fontSize:"14px",
        marginLeft:"16px",
        padding:"8px"
    
      }
      const row={
      backgroundColor: '#83BCD4',
      color:'#fff',
      borderRadius:'8px',
      display:"flex",
      justifyContent: 'center',
      width:'140%',
      marginLeft:'-20%',
      marginBottom:'16px'
      }
   

return (
    <ThemeProvider theme={theme}>
    <p></p>
      <div style={row}>
    <table>
    <tr>
    <td style={day}>{Deadlines.newunitname}</td>
    <td style={unit}>{Deadlines.newessaydate}</td>
    <td style={essayname}>{Deadlines.lecturername}</td>
    </tr>
</table>
</div>
</ThemeProvider>
)
}

export default Daycomponent;