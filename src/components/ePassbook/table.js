/** @format */

import React from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Divider,
  Button,
} from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function TablePassbook() {
  return (
    <div>
      <div>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "0px 2px 4px rgba(0.2, 0.1, 0.1, 0.1)" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align='right'>Calories</TableCell>
                <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                <TableCell align='right'>Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='right'>{row.carbs}</TableCell>
                  <TableCell align='right'>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default TablePassbook;
