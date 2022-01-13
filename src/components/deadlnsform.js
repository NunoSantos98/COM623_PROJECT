//npm imports
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
import { GlobalStyles } from "../global";
import Button from "../components/Button/Button";
import ErrorLabel from "../components/Errorlabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import * as yup from "yup";

function Deadlnsform(props) {
    
  const { onSubmit } = props;
  

  const checkinFormSchema = yup.object().shape({
    newunitname: yup.string().required("unit code required"),
    newessaydate: yup.string().required("essay date required"),
    lecturername: yup.string().required("lecturer name required"),
  });
  
  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(checkinFormSchema) });



  const errorBorder = (error) => error && { borderColor: "red" };
  


  const container = {
    position: "fixed",
    width: "100%",
    height: "100%",
    left: "0",
    top: "20",
    background: "#fff",
    zIndex: "-1",
  };
 

  const StyledInput = styled.input`
  width: 330px;
  height: 44px;
  top: 217px;
  background: #eff0f2;
  border-radius: 8px;
  border: 1px solid #ccc;

`;
  const styledForm = {
    width: "330px",
    height: "243px",
    left: "24px",
    top: "183px",
  };
  const styleCenterdiv ={
    marginTop:'22px',
    fontSize:'18px'
  }

  const onFormSubmit = (data) => {
    onSubmit({...data});
  };


  return(

      <form style={styledForm} onSubmit={handleSubmit(onFormSubmit)}>

      <label> Assessment Name </label>
      <p>
        <StyledInput type="text" name="newessayname" style={errorBorder(errors.newessaynames)} {...register('newessayname')} />
      </p>
      <label> Unit Name </label>
      <p>
        <StyledInput type="text" name="newunitname" style={errorBorder(errors.newunitname)} {...register('newunitname')}/>
      <ErrorLabel>{errors.newunitname && errors.newunitname.message} </ErrorLabel>
      </p>
      <label> Hand-in Date </label>
      <p>
        <StyledInput type="date" name="newessaydate" style={errorBorder(errors.newessaydate)} {...register('newessaydate')} />
        <ErrorLabel>{errors.newessaydate && errors.newessaydate.message} </ErrorLabel>
      </p>
      <label> Lecturer Name </label>
      <p>
       
      <StyledInput type="text" name="lecturername" style={errorBorder(errors.lecturername)} {...register('lecturername')}/>
      <ErrorLabel>{errors.lecturername && errors.lecturername.message} </ErrorLabel>
      </p>
      
      <Button text='Create' />
      
    </form>
  );
};


export default Deadlnsform;
