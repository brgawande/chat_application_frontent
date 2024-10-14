import React from "react";
import SubmitButton from "./SubmitButton";
import AllMessages from "./AllMessages";

const MessagesUsers = () => {
  return (
    <div className="h-full w-[94%] m-auto">
      <div>
        <div className=" h-[82vh] ">
          <AllMessages />
        </div>
        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </div>
    </div>
  );
};

export default MessagesUsers;
