import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import UserItem from './UserItem';

const rows = [
  {
    id: 1,
    firstName: 'Vladimir',
    lastName: 'Arsenyan',
    email: 'vaarsenyan@gmail.com',
    role: 'Admin',
    position: 'Full Stack Developer',
    status: 'Active',
    createdBy: 'Vladimir',
    createdAt: '2020/25/08',
  },
  {
    id: 2,
    firstName: 'Test',
    lastName: 'Deactivateyan',
    email: 'test@gmail.com',
    role: 'User',
    position: 'HR',
    status: 'Deactivated',
    createdBy: 'Vladimir',
    createdAt: '2020/25/08',
  },
  {
    id: 3,
    firstName: 'Test',
    lastName: 'Vacation',
    email: 'test2@gmail.com',
    role: 'User',
    position: 'PM',
    status: 'Vacation',
    createdBy: 'Vladimir',
    createdAt: '2020/25/08',
  },
];

const UsersList = () => {
  // const [page, setPage] = React.useState(0);
  const page = 0;

  return (
    <>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Position</TableCell>
            <TableCell align="left">Created At</TableCell>
            <TableCell align="left">Created By</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <UserItem key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={rows.length}
          rowsPerPage={5}
          page={page}
          onChangePage={() => console.log('Need to fix')}
        />
    </TableContainer>
    </>
  );
}

export default UsersList;
