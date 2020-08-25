import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { StyledBadge } from './useStyles';
import { useStyles } from '../../PageWrapper/useStyles';

const BadgeAvatars = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="./avatar.png" />
      </StyledBadge>
    </div>
  );
};

export default BadgeAvatars;
