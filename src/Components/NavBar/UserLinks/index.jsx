import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../PageWrapper/useStyles";
import CardTravelIcon from '@material-ui/icons/CardTravel';

const UserLinks = () => {
  const styles = useStyles();
  const [list] = useState([
    { title: "Profile", link: "/", icon: <AccountCircleIcon /> },
    { title: "Goals", link: "/goals", icon: <AssignmentTurnedInIcon /> },
    { title: 'Vacations', link: '/vacations', icon: <CardTravelIcon /> },
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

export default UserLinks;
