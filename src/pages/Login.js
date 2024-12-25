import Paper from '@mui/material/Paper';
import { Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from'axios';
import { useNavigate } from 'react-router';
import Alert from '@mui/material/Alert';
import '../pages/Service.css';
import '../pages/Login.css';

const Login =()=>{

    const[user,setUser]=useState({"email":"","password":""});
    const[message,setMessage]=useState('');
    const  navigate = useNavigate();
    console.log(user); 
    
    const handleChange=(event)=>{
  
    if(event.target.name==='email'){
      setUser({...user, email:event.target.value}); 
    }
    if(event.target.name==='password'){
      setUser({...user, password:event.target.value}); 
    }
  }

  const handleLogin=()=>{
      axios.post('http://localhost:3001/login',JSON.stringify(user),{headers:{"Content-Type":"application/json"}})

       .then((res) => {
        if (res.data.message==='Login successful') {
          setMessage(res.data.message)
          setTimeout(()=>{
              setMessage('');
              navigate('/Home');
          },3000)
          
        } else {
          console.error('Unexpected response:', res.data); 
          alert('Login failed. Please check your credentials.'); 
        }
      }) 
    }
    
    return(
      <div className="login">
        <div style={{width:'100%',height:'90vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:"#f876d33"}}>
          { (message!='') ? <Alert severity="success">{message}</Alert>:null}
        <Paper sx={{width:'400px',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'50px'}} elevation={3}>
          <Typography variant='h5'> LogIn </Typography>
          {/* <TextField id="outlined-basic" label="Email" variant="outlined" name='email' onChange={(event)=>handleChange(event)} fullWidth sx={{height:'50px',width:'300px'}} /> */}
          {/* <TextField id="outlined-basic" label="Password" variant="outlined"  name='password' onChange={(event)=>handleChange(event)} fullWidth sx={{height:'50px',width:'300px'}} /> */}
        
          <TextField 
          id="filled-basic" 
          label="Email" 
          variant="filled" 
          name='email'
          onChange={(event)=>handleChange(event)}
          fullwidth sx={{height:'30px',width:'250px'}}
        />
          <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          name='password'
          onChange={(event)=>handleChange(event)}
          fullwidth sx={{height:'30px',width:'250px'}}
        />
          <Button onClick={handleLogin} variant="contained">Login</Button>
        <a href='/register' style={{textDecoration:'none',backgroundColor:'#f876d33'}}  >Don't hava an Account? SignIn</a>
        </Paper>
    </div>
     </div>
    );
  }

export default Login;