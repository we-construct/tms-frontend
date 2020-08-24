import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../../Containers/MainPage/useStyles";

const MainListItems = () => {
  const styles = useStyles()
  return (
    <div>
      <NavLink to="/" className={styles.link}>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Admin" />
        </ListItem>
      </NavLink>

      <NavLink to="/invitation" className={styles.link}>
        <ListItem button>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Invitation" />
        </ListItem>
      </NavLink>

      <NavLink to="/employee" className={styles.link}>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employese" />
        </ListItem>
      </NavLink>

      <NavLink to="/inbox" className={styles.link}>
        <ListItem button>
          <ListItemIcon>
            <MoveToInboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
      </NavLink>
    </div>
  );
};

export default MainListItems;
