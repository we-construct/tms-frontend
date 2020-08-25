import React, { useState } from "react";
import PeopleIcon from "@material-ui/icons/People";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../../Containers/MainPage/useStyles";

const MainListItems = () => {
  const styles = useStyles();
  const [list] = useState([
    { title: "Admin", link: "/admin", icon: <AccountCircleIcon /> },
    { title: "Invitation", link: "/invitation", icon: <PersonAddIcon /> },
    { title: "Employee", link: "/employee", icon: <PeopleIcon /> },
    { title: "Inbox", link: "/inbox", icon: <MoveToInboxIcon /> },
  ]);

  return (
    <div>
      {list.map((item) => (
        <NavLink to={item.link} className={styles.link}>
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        </NavLink>
      ))}
    </div>
  );
};

export default MainListItems;
