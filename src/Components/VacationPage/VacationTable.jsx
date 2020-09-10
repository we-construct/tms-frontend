import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import '../../Containers/Vacations/index.scss'
import VacationTableItem from './VacationTableItem';
import Pagination from '@material-ui/lab/Pagination';

const VacationTable = ({ vacations, page, handleChangePage, totalPages }) => {

  return (
    <TableContainer component={Paper} className='table' >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Start date</TableCell>
            <TableCell align="center">Return date</TableCell>
            <TableCell align="center">Number of days</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        {vacations.length ?
          <TableBody>
            {vacations
              .map(row => <VacationTableItem key={row.id} row={row} />)
            }
          </TableBody>
          : (
            <TableBody className='empty'>
              <TableRow>
                <TableCell>Table is empty...</TableCell>
              </TableRow>
            </TableBody>
          )}
      </Table>
      {vacations.length > 0 &&
        <div className='footer'>
          <Pagination
            className='pagination'
            count={totalPages}
            page={page}
            onChange={handleChangePage}
          />
        </div>
      }
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  vacations: state.vacationData.vacations,
  totalPages: state.vacationData.totalPages,
  page: state.vacationData.page,
});

export default connect(mapStateToProps, {})(VacationTable);
