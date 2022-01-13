import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Button(props) {

  const {onClick, text} = props;
    
  const StyledButton = styled.button`
  width: 329px;
  height: 40px;
  left: 25px;
  top: 386px;
  background: #83BCD4;
border-radius: 8px;
border: none;
margin-top:20px;
color:#fff;
  `;


  return(  
    <StyledButton onClick={onClick}> {text} </StyledButton>
  )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    onClick: () => {}
}

export default Button;