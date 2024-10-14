import React, { useEffect, useState } from "react";
import OnlineUser from "../chats/OnlineUser";
import MessagesUsers from "../chats/MessagesUsers";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { LuMessagesSquare } from "react-icons/lu";
import io from "socket.io-client";

// Set up socket connection
const socket = io("https://chatapplication-1-mxxb.onrender.com");

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  console.log(loggedInUser?.id);

  useEffect(() => {
    // Listening for online users
    socket.on("online_users", (users) => {
      setOnlineUsers(users);
    });

    // Listening for messages
    socket.on("receive_message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Disconnect socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const sendMessage = () => {
    if (messageText.trim() && selectedUser) {
      const message = {
        senderId: localStorage.getItem(loggedInUser?.id),
        receiverId: selectedUser.id,
        text: messageText,
        timestamp: new Date().toISOString(),
      };

      // Emit the message through socket
      socket.emit("send_message", message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessageText("");
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
      <OnlineUser onlineUsers={onlineUsers} onSelectUser={handleUserSelect} />
    </Box>
  );

  return (
    <div className="h-[91vh] homebg flex">
      <div className="w-[40%] hidden md:block bg-[white] ">
        <OnlineUser onlineUsers={onlineUsers} onSelectUser={handleUserSelect} />
      </div>
      <div className="w-[100%]  relative">
        <Button
          style={{ position: "absolute", color: "white" }}
          onClick={toggleDrawer(true)}
        >
          <LuMessagesSquare />
        </Button>
        <MessagesUsers
          selectedUser={selectedUser}
          messages={messages}
          setMessageText={setMessageText}
          messageText={messageText}
          sendMessage={sendMessage}
        />
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Home;
