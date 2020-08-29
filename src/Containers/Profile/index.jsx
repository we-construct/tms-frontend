import React from "react";
import { connect } from 'react-redux';
import PageWrapper from "../../Components/PageWrapper";
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Profile = ({ user }) => {
  const today = new Date();
  const regDate =new Date(user.createdAt);
  const oneDay=1000*60*60*24;
  const workingOnCompany = Math.ceil((today.getTime() - regDate.getTime())/(oneDay));
  return (
    <PageWrapper>
      <Typography variant="h6" gutterBottom>
        Hello {user.firstName}, this is your profile page with some info.
      </Typography>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>{user.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>{user.firstName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>{user.lastName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone Number</TableCell>
            <TableCell>{user.phoneNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Role Id</TableCell>
            <TableCell>{user.roleId}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Position Id</TableCell>
            <TableCell>{user.positionId}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Status Id</TableCell>
            <TableCell>{user.statusId}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Worked on company</TableCell>
            <TableCell>{workingOnCompany} days</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </PageWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.userData.user,
});

export default connect(mapStateToProps, null)(Profile);
