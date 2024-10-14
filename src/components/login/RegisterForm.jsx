import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const RegisterForm = ({ setUserLogin, userLogin }) => {
  return (
    <div className="textbox flex justify-center items-center m-auto w-[70%] md:w-[31%] ">
      <form action="" className="w-[100%] md:w-[80%]">
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
            />
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
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              type="number"
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
