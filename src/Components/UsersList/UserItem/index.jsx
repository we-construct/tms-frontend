import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const UserItem = ({ row }) => {
  const [open, setOpen] = useState(false);

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
        <TableCell align="left">{row.id}</TableCell>
        <TableCell align="left">
          {row.firstName} {row.lastName}
        </TableCell>
        <TableCell align="left">{row.email}</TableCell>
        {row.role === 'Admin' ? (
          <TableCell align="left" style={{color: '#4caf50',}}>{row.role}</TableCell>
        ):
        (
          <TableCell align="left">{row.role}</TableCell>
        )}
        <TableCell align="left">{row.position}</TableCell>
        <TableCell align="left">{row.createdAt}</TableCell>
        <TableCell align="left">{row.createdBy}</TableCell>
        {row.status === 'Active' ? (
          <TableCell align="left" style={{color: '#4caf50',}}>{row.status}</TableCell>
        ): row.status === 'Vacation' ?
        (
          <TableCell align="left" style={{color: '#ffc107',}}>{row.status}</TableCell>
          ) : 
        (
          <TableCell align="left" style={{color: '#ff1744',}}>{row.status}</TableCell>
        )}      
        </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Actions
              </Typography>
              {row.status === 'Deactivated' ? (
                <Button variant="contained" size="small" color="primary" style={{marginRight: '8px',}}>Activate</Button>
              ):
              (
                <Button variant="outlined" size="small" color="secondary" style={{marginRight: '8px',}}>Deactivate</Button>
              )
              }
              <Button variant="outlined" size="small" color="secondary" style={{marginRight: '8px',}}>Delete</Button>
              <Button variant="outlined" size="small" color="primary" style={{marginRight: '8px',}}>Edit</Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default UserItem;
