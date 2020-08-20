import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import PeopleIcon from "@material-ui/icons/People";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Admin" />
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
      <ListItemText primary="Employee" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MoveToInboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <EventAvailableIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
  </div>
);
