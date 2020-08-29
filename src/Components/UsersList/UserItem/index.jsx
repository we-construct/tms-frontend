import React, { useState } from "react";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import { setUserStatus, deleteUser } from "../../../Redux/APanel/actions";
import { Box, Collapse, IconButton, TableCell, TableRow, Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import EditUser from "./EditUser";

const UserItem = ({ user, page, loading, setUserStatus, deleteUser }) => {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const date = new Date(user.created_at);
  const createdAt = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const changeUserStatusHandler = () => {
    setUserStatus({
      id: user.id,
      statusId: user.statusid,
      page,
    });
    enqueueSnackbar(`Status of ${user.first_name} changed`, {variant: 'info'});
  };
  const deleteUserHandler = () => {
    deleteUser({
      id: user.id,
      page,
    });
    enqueueSnackbar(`User ${user.first_name} deleted`, {variant: 'info'});
  };
  
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
        <TableCell align="left">{user.first_name} {user.last_name}</TableCell>
        <TableCell align="left">{user.email}</TableCell>
        <TableCell align="left">{user.phone_number}</TableCell>
        {user.role === "Admin" ? (
          <TableCell align="left" style={{ color: "#4caf50" }}>{user.role}</TableCell>
        ) : (
          <TableCell align="left">{user.role}</TableCell>
        )}
        <TableCell align="left">{user.position}</TableCell>
        <TableCell align="left">{createdAt}</TableCell>
        <TableCell align="left">{user.created_by_id}</TableCell>
        {
            user.status === "Active" ? (
              <TableCell align="left" style={{ color: "#4caf50" }}>{user.status}</TableCell>
            ) : user.status === "Vacation" ? (
              <TableCell align="left" style={{ color: "#ffc107" }}>{user.status}</TableCell>
            ) : (
              <TableCell align="left" style={{ color: "#ff1744" }}>{user.status}</TableCell>
            )
        }
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {user.status === "Deactivated" ? (
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  style={{ marginRight: "8px" }}
                  onClick={changeUserStatusHandler}
                >
                  Activate {user.first_name}
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  style={{ marginRight: "8px" }}
                  onClick={changeUserStatusHandler}
                >
                  Deactivate {user.first_name}
                </Button>
              )}
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                style={{ marginRight: "8px" }}
                onClick={deleteUserHandler}
              >
                Delete {user.first_name}
              </Button>
              <EditUser user={user} page={page}/>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setUserStatus: (data) => dispatch(setUserStatus(data)),
    deleteUser: (data) => dispatch(deleteUser(data)),
  };
}

export default connect(null, mapDispatchToProps)(UserItem);
