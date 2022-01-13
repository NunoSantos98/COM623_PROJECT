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
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";


import * as yup from "yup";

function Discussionform(props) {
const setdate="";
const {onSubmit} = props;
const dateTime = require('get-date');



const checkinFormSchema = yup.object().shape({
    topicname: yup.string().required("topic name required"),
    unitname: yup.string().required("unit name required"),
  });
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(checkinFormSchema) });

  const errorBorder = (error) => error && { borderColor: "red" };


  const styledinput = {
    width: "330px",
    height: "44px",
    top: "217px",
    background: "#EFF0F2",
    borderRadius: "8px",
    border: '1px solid #ccc'
  };

  const styledForm = {
    width: "330px",
    height: "243px",
    left: "24px",
    top: "183px",
  };

  const StyledInput = styled.input`
  width: 330px;
  height: 44px;
  top: 217px;
  background: #eff0f2;
  border-radius: 8px;
  border: 1px solid #ccc;

`;
  

  let newDate = new Date();

  var formattedDate = format(newDate, "dd MMMM, yyyy");

  const onFormSubmit = (data) => {
    onSubmit({...data});
  };


  return (
    
    <form style={styledForm} onSubmit={handleSubmit(onFormSubmit)}>
    
    <label> Question topic </label>
    <p>
      <StyledInput type="text" name="topicname" style={errorBorder(errors.topicname)}{...register('topicname')} />
      <ErrorLabel>{errors.topicname && errors.topicname.message} </ErrorLabel>
    </p>
    <label> Unit Name </label>
    <p>
      <StyledInput type="text" name="unitname" style={errorBorder(errors.unitname)}{...register('unitname')}/>
      <ErrorLabel>{errors.unitname && errors.unitname.message} </ErrorLabel>
    </p>
    <label> Lecture name </label>
    <p>
      <StyledInput type="text"  name="lname" style={errorBorder(errors.lecturername)}  {...register('lname')}/>
    </p>
    <label> Date</label>
    <p>
      <StyledInput type="text"  value={formattedDate} name="datevalue" style={errorBorder(errors.date)}  {...register('datevalue')}/>
      <ErrorLabel>{errors.date && errors.date.message} </ErrorLabel>
    </p>
    
    
    
    <Button text='Create' />
    
  </form>







  )

}

export default Discussionform;