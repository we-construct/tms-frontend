import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

const SecondaryListItems = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
    </div>
  );
};

export default SecondaryListItems;
