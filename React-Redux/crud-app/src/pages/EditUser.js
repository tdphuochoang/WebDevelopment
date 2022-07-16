import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { getSingleUser, updateUser } from '../redux/action';

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [error, setError] = useState(""); 
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let {id} = useParams();
  const {user} = useSelector((state) => state.data)
  const {name, email, phone, address} = state;

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [])

  useEffect(() => {
    if(user){
        setState({...user})
    }
  }, [user])

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !address || !email || !phone){
        setError("Please input all the input fields")
    }else{
        dispatch(updateUser(state, id));
        navigate("/");
        setError("");
    }

  }
  return (
    
    <div>
        <Button style = {{width: "100px", marginTop: "20px"}} variant = "contained" color = "secondary" onClick = {() => navigate("/") }>Go back</Button>
        <h2>Edit User</h2>
        {error && <h3 style = {{color: "red"}}>{error}</h3>}
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
      style = {{marginTop: "100px"}}
      onSubmit = {handleSubmit}
        >
        <TextField id="standard-basic" label="Name" name = "name" variant="standard" value = {name || ""} type = "text" onChange = {handleInputChange}/>
        <br/>
        <TextField id="standard-basic" label="Email" name = "email" variant="standard" value = {email || ""} type = "text" onChange = {handleInputChange}/>
        <br/>
        <TextField id="standard-basic" label="Phone" name = "phone" variant="standard" value = {phone || ""} type = "text" onChange = {handleInputChange} />
        <br/>
        <TextField id="standard-basic" label="Address" name = "address" variant="standard" value = {address || ""} type = "text" onChange = {handleInputChange} />
        <br/>
        <Button style = {{width: "100px"}} variant = "contained" color = "primary" type = "submit">Submit</Button>
        </Box>
    </div>
  )
}

export default EditUser