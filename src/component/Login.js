import React, { useState, useEffect } from "react";
import Button from '../component/Button';
import CustomInput from '../component/CustomInput';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => 
{
    const history                           = useHistory();
    const [vEmail_er,setEmail_er]           = useState('');
    const [vPassword_er,setPassword_er]     = useState('');

    function login() 
    {
        var vEmail      = document.getElementById('vEmail').value;
        var vPassword   = document.getElementById('vPassword').value;
        var error = false;
    
        if(vEmail)
        { 
            setEmail_er(''); 
        }
        else 
        {
            setEmail_er("Please Enter Email Address");
            error = true;
        }
    
        if(vPassword)
        { 
            setPassword_er(''); 
        }
        else 
        {
            setPassword_er("Please Enter Password");
            error = true;
        }

        var url = 'http://localhost:5000/api/v1/register/login';
       
        if (error==false)
        {
            axios({
                method: "POST",
                url: url,
                data: {vEmail:vEmail,vPassword:vPassword},
              })
            .then(res => {
                if (res.data.Token) 
                {
                    Swal.fire(
                        'Login!',
                        'Login Successfully',
                        'success'
                    )
                    window.sessionStorage.setItem("Token", res.data.Token);
                    history.push("/dashboard");
                }
                else 
                {
                    alert('*Incorrect Email Address or Password')
                }
            })
            .catch(error => {
            })
        }
    }
   
    return(
        <>
            <div className="App">
                <form className="form">
                <CustomInput
                    labelText="Email"
                    id="vEmail"
                    formControlProps={{
                    fullWidth: true
                    }}
                    type="text"
                />
                 <span style={{'color' : 'red'}}>{vEmail_er}</span>
                <CustomInput
                    labelText="Password"
                    id="vPassword"
                    formControlProps={{
                    fullWidth: true
                    }}
                    type="password"
                />
                 <span style={{'color' : 'red'}}>{vPassword_er}</span>

                <Button type="button" onClick={login} color="primary" className="form__custom-button">Log in </Button>
                <Link to='/register'><a>Register</a></Link>
                </form>
            </div>
        </>
    )
}

export default Login;