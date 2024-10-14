import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginForm = ({ setUserLogin, userLogin }) => {
  return (
    <div className="textbox flex justify-center items-center m-auto w-[70%] md:w-[31%] ">
      <form action="" className="w-[100%] md:w-[80%]">
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
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
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
