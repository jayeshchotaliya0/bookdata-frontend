import React, { useState, useEffect } from "react";
import Button from '../component/Button';
import CustomInput from '../component/CustomInput';
import { Link } from "react-router-dom";
import { uid} from 'rand-token';
import { useHistory } from "react-router-dom";
import axios from 'axios';

// import Header from "./Header";

const Login = () => 
{
    const history = useHistory();

    // console.log("jayesh ",token);

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

        var url = 'http://localhost:5000/api/v1/employee/login_process';
       
        if (error==false)
        {
        
            axios({
                method: "POST",
                url: url,
                data: {vEmail:vEmail,vPassword:vPassword},
                // headers:headers
              })
            .then(res => {
                console.log("login last data 01",res.data.Token);
                if (res.data.Token) 
                {
                    window.sessionStorage.setItem("Token", res.data.Token);

                    history.push("/dashboard");
                  
                }
                else 
                {
                    alert('Email And Password incorect Please Try!')
                    // history.push("/register");
                }
            })
            .catch(error => {
            })
        }


    }
   


    return(
        <>
        {/* <Header/> */}
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

                <Button type="button" onClick={login} color="primary" className="form__custom-button">
                    Log in
                </Button>
                
                <Link to='/register'>
                    <a>
                        Register
                    </a>
                </Link>
                


                </form>
            </div>
        </>
    )
}

export default Login;