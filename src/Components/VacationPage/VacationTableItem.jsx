import React, { useState } from 'react'
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Box, Collapse, IconButton, TableCell, TableRow } from '@material-ui/core';
import Tag from '../common/Tag';
import TableItemDescription from './TableItemDescription';

const VacationTableItem = ({row}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow key={row.id}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="center">{row.startDate}</TableCell>
                <TableCell align="center">{row.returnDate}</TableCell>
                <TableCell align="center">{row.daysNumber}</TableCell>
                <TableCell align="center">
                    <Tag status={row.status} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <TableItemDescription description={row.description}/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default VacationTableItem
