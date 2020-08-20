import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

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
