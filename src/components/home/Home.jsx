import React from "react";
import OnlineUser from "../chats/OnlineUser";
import MessagesUsers from "../chats/MessagesUsers";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { LuMessagesSquare } from "react-icons/lu";

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
      <OnlineUser />
      <Divider />
    </Box>
  );

  return (
    <div className="h-[91vh] homebg flex">
      <div className="w-[40%] hidden md:block bg-[white] ">
        <OnlineUser />
      </div>
      <div className="w-[100%]  relative">
        <Button
          style={{ position: "absolute", color: "white" }}
          onClick={toggleDrawer(true)}
        >
          <LuMessagesSquare />
        </Button>
        <MessagesUsers />
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Home;
