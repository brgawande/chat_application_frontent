import React, { useState } from "react";
import loginbg from "../../assets/the-mango-jelly-hero.min.svg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <div className="h-[100vh] bg-[#ffffff] ">
      <div className="flex ">
        <div className="imagebox flex justify-center items-center w-[0%] md:w-[69%] h-[100vh] bg-gradient-to-tr from-white to-[rgb(249,253,251)]">
          <img className="hidden md:block" src={loginbg} alt="" />
        </div>
        {userLogin ? (
          <LoginForm setUserLogin={setUserLogin} userLogin={userLogin} />
        ) : (
          <RegisterForm setUserLogin={setUserLogin} userLogin={userLogin} />
        )}
      </div>
    </div>
  );
};

export default Login;
