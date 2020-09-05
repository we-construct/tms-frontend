import React from 'react';
import { Chip } from '@material-ui/core';

const Tag = ({ status }) => {
  return <Chip size="small" label={status} color={status === 'Pending' ? 'primary' : 'secondary'} />;
};

export default Tag;
