import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const UserItem = ({ user }) => {
  const [open, setOpen] = useState(false);
  const date = new Date(user.created_at);
  const createdAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{user.id}</TableCell>
        <TableCell align="left">
          {user.first_name} {user.last_name}
        </TableCell>
        <TableCell align="left">{user.email}</TableCell>
        {user.role === 'Admin' ? (
          <TableCell align="left" style={{color: '#4caf50',}}>{user.role}</TableCell>
        ):
        (
          <TableCell align="left">{user.role}</TableCell>
        )}
        <TableCell align="left">{user.position}</TableCell>
        <TableCell align="left">{createdAt}</TableCell>
        <TableCell align="left">{user.created_by_id}</TableCell>
        {user.status === 'Active' ? (
          <TableCell align="left" style={{color: '#4caf50',}}>{user.status}</TableCell>
        ): user.status === 'Vacation' ?
        (
          <TableCell align="left" style={{color: '#ffc107',}}>{user.status}</TableCell>
          ) : 
        (
          <TableCell align="left" style={{color: '#ff1744',}}>{user.status}</TableCell>
        )}      
        </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {user.status === 'Deactivated' ? (
                <Button variant="contained" size="small" color="primary" style={{marginRight: '8px',}}>Activate {user.first_name}</Button>
              ):
              (
                <Button variant="outlined" size="small" color="secondary" style={{marginRight: '8px',}}>Deactivate {user.first_name}</Button>
              )
              }
              <Button variant="outlined" size="small" color="secondary" style={{marginRight: '8px',}}>Delete {user.first_name}</Button>
              <Button variant="outlined" size="small" color="primary" style={{marginRight: '8px',}}>Edit {user.first_name}</Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default UserItem;
