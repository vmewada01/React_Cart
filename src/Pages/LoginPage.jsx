// LoginPage.js

import React, { useContext, useState } from "react";
import "../App.css";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const userLogin = ({ username, password }) => {
  return axios({
    url: "https://reqres.in/api/login",
    method: "POST",
    data: {
      username,
      password,
    },
  });
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here

    userLogin({ username, password }).then((res) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: res.data.token,
        },
      });
      setAlert(true);
      // alert()
      alert("login Successfull");
      navigate("/mens");
    });
  };
  if (state.isAuth) {
    return <Navigate to="/LoginPage" />;
  }

  const isError = username === "";
  const isPassword = password === "";

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div> */}
        <FormControl isInvalid={isError}>
          <FormLabel>User Details</FormLabel>
          <Input
            type="username"
            value={username}
            onChange={handleUsernameChange}
          />
          {!isError ? (
            <FormHelperText>
              Enter the email you'd register at the time of Signup
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {!isPassword ? (
            <FormHelperText>
             Password should match with the signup details.
            </FormHelperText>
          ) : (
            <FormErrorMessage>password is required.</FormErrorMessage>
          )}
        </FormControl>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
