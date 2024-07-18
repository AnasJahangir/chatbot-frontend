import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import api from "../api/axios";

const GoogleAuth = () => {
  const onSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;

    try {
      const data = await api.post("/users/auth/google", { credential });
      console.log(data);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const onFailure = (response) => {
    console.error("Login failed:", response);
  };

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      logo_alignment="left" // Set logo alignment if needed
      text="Sign inkdkdk Google" // Customize button text
    />
  );
};

export default GoogleAuth;
