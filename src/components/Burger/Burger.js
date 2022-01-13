import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import logo from "../../logo.png";

const Burger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <>
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
      
    </StyledBurger>  
    <img src={logo} alt="logo"/>

</>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
