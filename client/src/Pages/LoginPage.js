import React from "react";
import Linebreak from "../Components/Linebreak";
import LoginForm from "../Components/LoginForm/LoginForm";
import SignupButton from "../Components/SignupButton";
import SignupForm from "../Components/SignupForm/SignupForm";

const LoginPage = ({ onLogin }) => {
  return (
    <>
      <h1 className="account-login-header">Account Login</h1>
      <LoginForm onLogin={onLogin} />
      <Linebreak />
      <SignupButton onLogin={onLogin} />
      <SignupForm onLogin={onLogin} />
    </>
  );
};

export default LoginPage;
