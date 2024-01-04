import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { data } from '.';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: '#FFFFFF', // Set the desired background color for all rows
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': { // Add this section to define the hover effect
    backgroundColor: theme.palette.action.hover, // Change the color as desired
  },
}));

function createData(device,availability) {
  return { device, availability};
}
console.log(createData(data[0]))
const rows = [

  createData('device2',['❌', '✅', '❌', '✅']),
  createData('Gingerbread', [356, 16.0, 49, 3.9]),
];
console.log("data:",data)
console.log("row:",rows)

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} className='' aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Devices</StyledTableCell>
            <StyledTableCell align="center">Aug 11</StyledTableCell>
            <StyledTableCell align="center">Aug 12</StyledTableCell>
            <StyledTableCell align="center">Aug 13</StyledTableCell>
            <StyledTableCell align="center">Aug 14</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.device}
              </StyledTableCell>
              {row.availability.map((item) => (<StyledTableCell align="center">{item}</StyledTableCell>))
                
              }
              
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}