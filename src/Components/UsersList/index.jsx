import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import UserItem from "./UserItem";

const users = [
  {
    id: 1,
    firstName: "Vladimir",
    lastName: "Arsenyan",
    email: "vaarsenyan@gmail.com",
    role: "Admin",
    position: "Full Stack Developer",
    status: "Active",
    createdBy: "Vladimir",
    createdAt: "2020/25/08",
  },
  {
    id: 2,
    firstName: "Test",
    lastName: "Deactivateyan",
    email: "test@gmail.com",
    role: "User",
    position: "HR",
    status: "Deactivated",
    createdBy: "Vladimir",
    createdAt: "2020/25/08",
  },
  {
    id: 3,
    firstName: "Test",
    lastName: "Vacation",
    email: "test2@gmail.com",
    role: "User",
    position: "PM",
    status: "Vacation",
    createdBy: "Vladimir",
    createdAt: "2020/25/08",
  },
];

const UsersList = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  // placeholder for redux
  useEffect(() => {
    axios
      .post("http://localhost:5000/get/users", {
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4Iiwicm9sZSI6MSwic3RhdHVzIjoxLCJlbWFpbCI6InZhYXJzZW55YW5AZ21haWwuY29tIiwiaWF0IjoxNTk4Mzg0MjI2fQ.TBIUwWxx2N3vQsS3Rb96mxh1xGSyBYribxd2qjAqbu8",
      })
      .then((res) => setData(res.data));
  }, []);

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
            {data === undefined
              ? null
              : data.users.map((user) => (
                  <UserItem key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
        <Pagination count={users.length} page={page} onChange={handleChange} />
      </TableContainer>
    </>
  );
};

export default UsersList;
