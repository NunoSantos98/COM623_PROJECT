import React, {useState} from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { SocialIcon } from "react-social-icons";
import styled, { ThemeProvider } from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Link
} from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorLabel from "../Errorlabel";

import * as yup from "yup";

function RegisterForm(props) {

  const StyledSocialIconArea = styled.div`
  margin-top:30px;
  justify-content: space-around;
  z-index:-34;
  height:10px;
`;

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


  const { buttonText, onEmailSubmit, serverErrorMessage } = props;
  const [displayEmail, setDisplayEmail] = useState(false);

  const RegisterFormSchema = yup.object().shape({
    email: yup
      .string()
      .email("please enter a valid email")
      .required("please enter a email"),
    password: yup
      .string()
      .required("please enter a password")
      .min(5, "password must be 5 characters long"),
  });

  const errorBorder = (error) => error && { borderColor: "red" };


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(RegisterFormSchema) });


  return (
    <form onSubmit={handleSubmit(onEmailSubmit)} style={styledForm}>

      <label> Username </label>
      <p>
        <StyledInput 
        type="text" 
        name="email" 
        style={errorBorder(errors.email)}
        {...register("email")}
        />
        <ErrorLabel>{errors.email && errors.email.message}</ErrorLabel>
      </p>
      <label> Password</label>
      <p>
        <StyledInput
         type="password" 
         name="password"
         style={errorBorder(errors.password)}
        {...register("password")}
        />
        <ErrorLabel>{errors.password && errors.password.message} </ErrorLabel>
      </p>
      <Button text='Register' />
     
      <div style={{textAlign: "center" }}>
        <p style={{marginLeft: "50px",textAlign: "center" }}>or</p>
        <Link to="/login" style={{ color: "#83BCD4" }}>
          Login with your account
       </Link>
      </div>

    </form>
  );
}


export default RegisterForm;
