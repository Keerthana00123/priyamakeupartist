import Paper from '@mui/material/Paper';
import { Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import '../pages/Service.css';
import  '../pages/Login.css';

const Register = () => {
    const[user,setUser]=useState({"username":"","email":"","password":""});
    console.log(user);
    const handleChange=(event)=>{
        if(event.target.name==='username'){
            setUser({...user,name:event.target.value});
        }
        if(event.target.name==='email'){
            setUser({...user,email:event.target.value});
        }
        if(event.target.name==='password'){
            setUser({...user,password:event.target.value});
        }
        }

    return(
        <div className="login">
        <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'center',alignItems:'center',justifyContent:'center'}}>
        <Paper sx={{width:'500px',height:'500px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px',padding:'50px'}} elevation={3}>
        <Typography variant='h5'><FaUserCircle/> Create Your Account</Typography>
          <TextField id="outlined-basic" label="Username" variant="outlined" name='username' onChange={(event)=>handleChange(event)} fullWidth sx={{height:'50px',width:'300px'}} />
          <TextField id="outlined-basic" label="Email" variant="outlined"  name='email' onChange={(event)=>handleChange(event)} fullWidth sx={{height:'50px',width:'300px'}} />
          <TextField id="outlined-basic" label="Password" variant="outlined"  name='password' onChange={(event)=>handleChange(event)} fullWidth sx={{height:'50px',width:'300px'}} />
          <Button variant="contained">Create</Button>
          <Button variant="contained"> Sign in with Google</Button>
            <a href='/' style={{textDecoration:'none'}}>Already  hava an Account? Login </a>
         </Paper>
        </div> 
        </div>  
    );
}

export default Register;