import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const UsersList = () => {
  const DATE = new Date();
  const date = `${DATE.getDay()}.${DATE.getMonth()}.${DATE.getFullYear()}`;

  const custName = "Jonna Jimenez";
  const position = "Developer";

  const rows = [
    createData(
      "Vladimir Arsenyan",
      date,
      custName,
      "vladimir@gmail.com",
      position
    ),
    createData("Ara Matevosyan", date, custName, "ara@gmail.com", position),
    createData("David Karapetyan", date, custName, "david@gmail.com", position),
    createData(
      "Victorya Galstyan",
      date,
      custName,
      "victorya@gmail.com",
      position
    ),
    createData(
      "Levon Hambardzumyan",
      date,
      custName,
      "levon@gmail.com",
      position
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell align="right">Appointment Data</TableCell>
            <TableCell align="right">Customer Name </TableCell>
            <TableCell align="right">Customer Email</TableCell>
            <TableCell align="right">Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersList;
