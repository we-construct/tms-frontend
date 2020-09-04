import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Skeleton from "@material-ui/lab/Skeleton";

const UserItemSkelet = () => {
  return (
    <>
      <TableRow>
        <TableCell>
          <Skeleton variant="text" />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" />
        </TableCell>
        <TableCell align="left">
          <Skeleton variant="text" />
        </TableCell>
      </TableRow>
    </>
  );
};

export default UserItemSkelet;
