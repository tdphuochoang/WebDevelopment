import React, {useEffect}from 'react'
import { styled} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/action';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";

//Import table from MUI
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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 700,
  }
})

const Home = () => {
  const classes = useStyles();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const {users} = useSelector(state => state.data);
  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you wanted to delete this user?")){
      dispatch(deleteUser(id));
      
    }
  }
  return (
    <div>
      <div style = {{paddingTop: "10px"}}>
      <Button variant = "contained" color = "primary" onClick = {() => navigate("/addUser")}>Add User</Button>
      </div>
      
      <TableContainer component={Paper}>
      <Table className = {classes.table} sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{(user.phone.split(" "))[0]}</StyledTableCell>
              <StyledTableCell align="center">{user.address.city}</StyledTableCell>
              <StyledTableCell align="center">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button style = {{marginRight: "5px"}} color = "secondary" onClick = {() => handleDelete(user.id)}>Delete</Button>
                  <Button color = "primary">Edit</Button>              
                </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home