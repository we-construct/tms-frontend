import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../Redux/APanel/actions";
import { useSnackbar } from "notistack";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import UserItem from "./UserItem";
import UserItemSkelet from "./UserItemSkelet";

const skelet = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

const UsersList = ({ error, success, getAllUsers, allUsers }) => {
  const [page, setPage] = useState(1);
  const { enqueueSnackbar } = useSnackbar();

  // token will be taken from  cookies
  useEffect(() => {
    getAllUsers({
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4Iiwicm9sZSI6MSwic3RhdHVzIjoxLCJlbWFpbCI6InZhYXJzZW55YW5AZ21haWwuY29tIiwiaWF0IjoxNTk4Mzg0MjI2fQ.TBIUwWxx2N3vQsS3Rb96mxh1xGSyBYribxd2qjAqbu8",
      page,
    });
    enqueueSnackbar(`Show results from page ${page}!`, {
      variant: "success",
    });
    // need rerender only on page change
    // eslint-disable-next-line
  }, [page]);
  useEffect(() => {
    if (error !== null) {
      enqueueSnackbar(`${error}!`, {
        variant: "error",
      });
    }
    // eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (success !== null) {
      enqueueSnackbar(`${success.message}!`, {
        variant: "success",
      });
    }
    // eslint-disable-next-line
  }, [success]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                ID
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Username
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Role
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Position
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Created At
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Created By
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers === null
              ? skelet.map((s) => <UserItemSkelet key={s.id} />)
              : allUsers.users.map((user) => (
                  <UserItem key={user.id} user={user} page={page}/>
                ))}
          </TableBody>
        </Table>
        {allUsers === null ? (
          <Pagination count={0} page={page} onChange={handleChange} />
        ) : (
          <Pagination
            count={allUsers.pages}
            page={page}
            onChange={handleChange}
          />
        )}
      </TableContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  error: state.adminData.error,
  success: state.adminData.success,
  allUsers: state.adminData.allUsers,
});

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: (data) => dispatch(getAllUsers(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
