import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import useAuth from '../../services/firebase/useAuth';
import firebaseConfig from '../../config/firebase';
import { initializeApp } from "firebase/app";
import {
  Link,
Switch,
Route,
BrowserRouter,
useLocation,
useHistory,
Redirect,
} from "react-router-dom";


const Menu = ({ open, ...props }) => {

  const app = initializeApp(firebaseConfig);
  const location = useLocation();
  const history = useHistory();
  const { user } = useAuth();

  const { isAuthenticated, createEmailUser, signInEmailUser, signUserOut } =
    useAuth();

  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;


  

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/deadlines" tabIndex={tabIndex}>Deadlines</a>
      <a href="/discussions" tabIndex={tabIndex}>Discussions</a>
      <a  href="/" onClick={() => signUserOut()}>Sign out</a>
    </StyledMenu>
    
  );
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
