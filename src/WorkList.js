import React from 'react'
import './WorkList.css'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import rows from './WorkData.js'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core'

const StyledTableCell = withStyles((theme) => ({
    head: {
        fontWeight: 800,
        //color: theme.palette.warning.main,
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.white,
        fontSize: 17
    },
    body: {
        fontSize: 14,
        fontWeight: 300,
    },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            //backgroundColor: theme.palette.action.hover,
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        '&:nth-of-type(even)': {
            //backgroundColor: theme.palette.action.hover,
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
    },
    head: {
        color: theme.palette.common.white,
    },
}))(TableRow)

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

function WorkList() {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="work lists">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Year</StyledTableCell>
                        <StyledTableCell align="center">Title</StyledTableCell>
                        <StyledTableCell align="center">
                            Built with
                        </StyledTableCell>
                        <StyledTableCell align="center">Links</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.alias}>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {row.year}
                            </TableCell>
                            <TableCell
                                align="center"
                            >
                                {row.title}
                            </TableCell>
                            <TableCell align="center">{row.tech}</TableCell>
                            <TableCell align="center">{row.links}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WorkList
