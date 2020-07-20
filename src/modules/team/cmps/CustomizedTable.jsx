import React from 'react';
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center"
  },
  body: {
    fontSize: 14,
    textAlign: "center",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomizedTables(props) {
  // data - holds array items can be players or teams
  // type - indicate data type players or teams
  const { data, type } = props;
  const TEAMS_TABLE = 'teams';
  const classes = useStyles();
  const history = useHistory();
  function handleClick(id) {
    history.push(`/teams/${id}`);
  }

  return (
    <TableContainer component={Paper}>
      { //Rendering a table with data according to the src type from props
        (type === TEAMS_TABLE) ? // Rendering Teams table
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Team Name</StyledTableCell>
                <StyledTableCell>Founded Year</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((team) => (
                <StyledTableRow key={team.id} onClick={() => handleClick(team.id)} style={{ cursor: "pointer" }}>
                  <StyledTableCell component="th" scope="row">
                    {team.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{team.founded}</StyledTableCell>
                  <StyledTableCell align="right">{team.address}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          : //Rendering players table
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Player Name</StyledTableCell>
                <StyledTableCell>Shirt Number</StyledTableCell>
                <StyledTableCell>Position</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((player) => (
                <StyledTableRow key={player.id}>
                  <StyledTableCell component="th" scope="row">
                    {player.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {(player.shirtNumber) ? player.shirtNumber : '-'}
                  </StyledTableCell>
                  <StyledTableCell align="right">{(player.position) ? player.position : '-'}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
      }
    </TableContainer>
  );
}
