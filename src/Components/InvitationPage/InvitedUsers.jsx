import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
import Tag from '../common/Tag';
import { useStyles } from './styles';
import { connect } from 'react-redux';

const InvitedUsers = ({ users }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Position</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length ? (
            users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.email}>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.role}</TableCell>
                  <TableCell align="center">{row.position}</TableCell>
                  <TableCell align="center">
                    <Tag />
                  </TableCell>
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell className={classes.empty}>Table is empty...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        rowsPerPageOptions={[]}
        onChangePage={handleChangePage}
        className={classes.pagination}
      />
    </TableContainer>
  );
};
const mapStateToProps = (state) => ({
  users: state.adminData.invitedUsers,
});
export default connect(mapStateToProps)(InvitedUsers);
