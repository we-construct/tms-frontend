import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useStyles } from "../useStyles";
import { StyledBadge } from "./useStyles";


export default function BadgeAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
      >
        <Avatar
          alt="Remy Sharp"
          src="./avatar.png"
        />
      </StyledBadge>
    </div>
  );
}
