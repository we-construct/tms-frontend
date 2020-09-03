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
import { connect } from 'react-redux';
import s from '../../Containers/Vacations/index.module.css'

const VacationTable = ({ vacations }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} className={s.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Start date</TableCell>
            <TableCell align="center">Return date</TableCell>
            <TableCell align="center">Number of days</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vacations.length ? (
            vacations
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort((a, b) => (a.id < b.id ? 1 : -1))
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.startDate}</TableCell>
                  <TableCell align="center">{row.returnDate}</TableCell>
                  <TableCell align="center">{row.daysNumber}</TableCell>
                  <TableCell align="center">
                    <Tag status={row.status}/>
                  </TableCell>
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell className={s.empty}>Table is empty...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={vacations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        rowsPerPageOptions={[]}
        onChangePage={handleChangePage}
      />
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  vacations: state.vacationData.vacations,
});

export default connect(mapStateToProps, null)(VacationTable);
