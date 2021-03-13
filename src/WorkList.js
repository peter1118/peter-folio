import React from 'react'
import './WorkList.css'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core'

function createData(alias, year, title, at, tech, links) {
    return { alias, year, title, at, tech, links }
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontWeight: 800,
        borderBottom: 'none',
        borderRight: 'none',
    },
    body: {
        fontSize: 14,
        fontWeight: 300,
        borderBottom: 'none',
        borderRight: 'none',
    },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            //backgroundColor: theme.palette.action.hover,
            backgroundColor: theme.palette.common.black,
        },
        '&:nth-of-type(even)': {
            //backgroundColor: theme.palette.action.hover,
            backgroundColor: theme.palette.common.black,
        },
        color: theme.palette.common.white,
    },
}))(TableRow)

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const rows = [
    createData(
        'COM프로젝트',
        '2018 ~ 2019',
        'test',
        'Tmax Office',
        'c++ weboskcet lws js ...',
        'aaaaaa'
    ),
]

function WorkList() {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="work lists">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Year</StyledTableCell>
                        <StyledTableCell align="right">Title</StyledTableCell>
                        <StyledTableCell align="right">Made at</StyledTableCell>
                        <StyledTableCell align="center">
                            Built with
                        </StyledTableCell>
                        <StyledTableCell align="right">Links</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.alias}>
                            <StyledTableCell component="th" scope="row">
                                {row.year}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.title}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.at}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.tech}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.links}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WorkList
