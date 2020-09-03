import React, { useState } from "react";
import PeopleIcon from "@material-ui/icons/People";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../PageWrapper/useStyles";

const MainListItems = () => {
  const styles = useStyles();
  const [list] = useState([
    { title: "Profile", link: "/", icon: <AccountCircleIcon /> },
    {
      title: "Send Invitation",
      link: "/send-invitation",
      icon: <PersonAddIcon />,
    },
    { title: "Employees", link: "/employees", icon: <PeopleIcon /> },
    { title: "Goals", link: "/goals", icon: <AssignmentTurnedInIcon /> },
    { title: "Inbox", link: "/inbox", icon: <MoveToInboxIcon /> },
  ]);

  return (
    <div>
      {list.map((item) => (
        <NavLink key={item.link} to={item.link} className={styles.link}>
          <ListItem button>
            <ListItemIcon className={styles.icon}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        </NavLink>
      ))}
    </div>
  );
};

export default MainListItems;
