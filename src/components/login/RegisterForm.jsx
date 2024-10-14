import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {
  registerFaliure,
  registerStart,
  registerSuccess,
} from "../../app/reducers/authReducer";
import { useDispatch } from "react-redux";

const RegisterForm = ({ setUserLogin, userLogin }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form su8bmisssion
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerStart());
    try {
      console.log("formdata", formData);
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        formData
      );
      console.log("response", response);
      dispatch(registerSuccess(response.data.data));
    } catch (error) {
      console.log(error);
      dispatch(
        registerFaliure(error.response?.data?.message || "Registration Failed")
      );
    }
  };
  return (
    <div className="textbox flex justify-center items-center m-auto w-[70%] md:w-[31%] ">
      <form action="" className="w-[100%] md:w-[80%]" onSubmit={handleSubmit}>
        <div className="">
          <h2 className="text-2xl font-[600]">Mango Jelly Chat Register</h2>
          <div className="flex my-5 gap-2">
            <p>Already Have an Account?</p>
            <Link
              onClick={() => setUserLogin(!userLogin)}
              className="text-[green] font-[500]"
            >
              Login
            </Link>
          </div>
          <div className="flex flex-col gap-8 my-4">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
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
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
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
              Register
            </Button>
            <p className="mt-2 text-[12px]">
              By signing up, I agree to Terms & Conditions and Privacy Policy.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
