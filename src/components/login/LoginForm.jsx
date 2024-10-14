import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  loginFaliure,
  loginStart,
  loginSuccess,
} from "../../app/reducers/authReducer";
import toast from "react-hot-toast";

const LoginForm = ({ setUserLogin, userLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        formData
      );
      dispatch(
        loginSuccess({ user: response?.data?.user, token: response.data.token })
      );
      localStorage.setItem("user", JSON.stringify(response.data.user));

      console.log(response);
      setFormData({
        email: "",
        password: "",
      });
      toast.success(response?.data?.message);
      navigate("/");
    } catch (error) {
      console.log("login Error", error);
      dispatch(loginFaliure(error?.response?.data?.message || "Login Failed"));
    }
  };
  return (
    <div className="textbox flex justify-center items-center m-auto w-[70%] md:w-[31%] ">
      <form action="" className="w-[100%] md:w-[80%]" onSubmit={submitHandler}>
        <div className="">
          <h2 className="text-2xl font-[600]">Mango Jelly Chat Login</h2>
          <div className="flex my-5 gap-2">
            <p>New User?</p>
            <Link
              onClick={() => setUserLogin(!userLogin)}
              className="text-[green] font-[500]"
            >
              Sign Up
            </Link>
          </div>
          <div className="flex flex-col gap-8 my-4">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end mt-1">
            <Link className="text-[green] font-[500]">Forget Password?</Link>
          </div>
          <div className="mt-8">
            <Button
              style={{
                backgroundColor: "black",
                width: "100%",
                fontWeight: "semibold",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
