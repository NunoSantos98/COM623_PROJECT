import React, { useState } from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { SocialIcon } from "react-social-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import ErrorLabel from "../Errorlabel";

import {
  Link
} from "react-router-dom";

import * as yup from "yup";

function LoginForm(props) {
  const StyledInput = styled.input`
    width: 330px;
    height: 44px;
    top: 217px;
    background: #eff0f2;
    border-radius: 8px;
    border: 1px solid #ccc;

    @media only screen and (max-width: 320px) {
width:296px;
margin-left:16px;
    }
  `;
  const Label = styled.label`

    @media only screen and (max-width: 320px) {
  
    margin-left:16px;
        }
  `;

  const { buttonText, onEmailSubmit, serverErrorMessage } = props;
  const [displayEmail, setDisplayEmail] = useState(false);

  const loginFormSchema = yup.object().shape({
    email: yup
      .string()
      .email("please enter a valid email")
      .required("please enter a email"),
    password: yup
      .string()
      .required("please enter a password")
      .min(5, "password must be 5 characters long"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(loginFormSchema) });

  const errorBorder = (error) => error && { borderColor: "red" };

  return (
    <form onSubmit={handleSubmit(onEmailSubmit)}>
      <p>
        <Label> Email </Label>
      </p>
      <p>
        <StyledInput
          type="text"
          name="email"
          style={errorBorder(errors.email)}
          {...register("email")}
        />
        <ErrorLabel> {errors.email && errors.email.message} </ErrorLabel>
      </p>

      <Label> Password </Label>

      <p>
        <StyledInput
          type="password"
          name="password"
          {...register("password")}
          style={errorBorder(errors.password)}
        />
        <ErrorLabel>{errors.password && errors.password.message} </ErrorLabel>
      </p>
      <Button text={buttonText} />

    

      <div style={{textAlign: "center" }}>
        <p style={{marginLeft: "50px",textAlign: "center" }}>or</p>
        <Link to="/register" style={{ color: "#83BCD4" }}>
          Create an account
       </Link>
      </div>
    </form>
  );
}
LoginForm.propTypes = {
  buttonText: PropTypes.string,
};

LoginForm.defaultProps = {
  buttonText: "Login",
};

export default LoginForm;
