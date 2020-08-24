import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const MainListItems = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Admin Panel" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Invitation" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Employees" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MoveToInboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </div>
  );
};

export default MainListItems;
