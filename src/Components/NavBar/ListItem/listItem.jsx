import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import PeopleIcon from "@material-ui/icons/People";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import { NavLink } from "react-router-dom";

import style  from "./listItem.module.scss";

export const mainListItems = (
  <div>
    <NavLink to="/" className={style.link}>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItem>
    </NavLink>

    <NavLink to="/invitation" className={style.link}>
      <ListItem button>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Invitation" />
      </ListItem>
    </NavLink>

    <NavLink to="/employee" className={style.link}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Employee" />
      </ListItem>
    </NavLink>

    <NavLink to="/inbox" className={style.link}>
      <ListItem button>
        <ListItemIcon>
          <MoveToInboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </NavLink>
  </div>
);

export const secondaryListItems = (
  <div>
    <NavLink to="/month" className={style.link}>
      <ListItem button>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
    </NavLink>
  </div>
);
