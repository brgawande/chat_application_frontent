import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import {
  getUsersFaliure,
  getUsersStart,
  getUsersSuccess,
} from "../../app/reducers/authReducer";
import axios from "axios";

const OnlineUser = () => {
  const dispatch = useDispatch();
  const [allusers, setAllUsers] = useState([]);

  const fetchAllUsers = async () => {
    dispatch(getUsersStart());
    try {
      const response = await axios.get(
        "https://chatapplication-1-mxxb.onrender.com/api/admin/getallusers"
      );

      const users = response?.data?.allUser;
      dispatch(getUsersSuccess(users));

      setAllUsers(users);
    } catch (error) {
      dispatch(getUsersFaliure(response?.data?.message));
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  //   console.log(allusers);

  return (
    <div className=" h-full">
      <div className=" w-[90%] m-auto pt-10">
        <h1 className="text-3xl font-bold">Messages</h1>
        <div className="my-6">
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Search Users"
            variant="outlined"
          />
        </div>
        <h2 className="text-xl font-bold">Online Users</h2>
        <div className="pt-3 h-[60vh] overflow-hidden overflow-y-scroll scrollbar-thin">
          {allusers.length > 0 ? (
            allusers.map((user) => (
              <div key={user?._id} className="flex my-4 pb-2 gap-4">
                <div className="imagecard h-[50px] w-[50px] rounded-full overflow-hidden border-2 border-[#8b8b8b]">
                  <img
                    className="h-[100%] w-[100%] object-cover"
                    src="https://imgcdn.stablediffusionweb.com/2024/4/9/dbe93a28-1dce-48a8-a2c9-2d486d3da01b.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-[17px] font-semibold">{user?.name}</h2>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            ))
          ) : (
            <h2>No User Found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnlineUser;
