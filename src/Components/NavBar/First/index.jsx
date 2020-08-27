import React, { useState } from "react";
import PeopleIcon from "@material-ui/icons/People";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../PageWrapper/useStyles";

const MainListItems = () => {
  const styles = useStyles();
  const [list] = useState([
    { title: "Admin Panel", link: "/admin-panel", icon: <AccountCircleIcon /> },
    { title: "Send Invitation", link: "/send-invitation", icon: <PersonAddIcon /> },
    { title: "Employees", link: "/employees", icon: <PeopleIcon /> },
    { title: "Inbox", link: "/inbox", icon: <MoveToInboxIcon /> },
  ]);

  return (
    <div>
      {list.map((item) => (
        <NavLink key={item.link} to={item.link} className={styles.link}>
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
