import React from "react";
import SubmitButton from "./SubmitButton";
import AllMessages from "./AllMessages";

const MessagesUsers = ({
  selectedUser,
  messages,
  messageText,
  setMessageText,
  sendMessage,
}) => {
  return (
    <div className="h-full w-[94%] m-auto">
      <div>
        <div className=" h-[82vh] ">
          <AllMessages messages={messages} selectedUser={selectedUser} />
        </div>
        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </div>
    </div>
  );
};

export default MessagesUsers;
