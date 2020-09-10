import React from 'react';
import { Chip } from '@material-ui/core';

const Tag = ({ status }) => {
  const color = () => {
    if(status === 'Pending') {return 'default'}
    else if(status === 'Rejected') {return 'secondary'}
    else {return 'primary'}
  }
  return <Chip size="small" label={status} color={color()} />;
};

export default Tag;
