import React, { useState } from "react";
import PeopleIcon from "@material-ui/icons/People";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../PageWrapper/useStyles";

const AdminLinks = () => {
  const styles = useStyles();
  const [list] = useState([
    {
      title: "Send Invitation",
      link: "/send-invitation",
      icon: <PersonAddIcon />,
    },
    { title: "Employees", link: "/employees", icon: <PeopleIcon /> },
    { title: "Vacation Requests", link: "/vacation-requests", icon: <div>VR</div> },
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

export default AdminLinks;
