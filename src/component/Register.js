import React, { useState } from "react";
import Button from '../component/Button';
import CustomInput from '../component/CustomInput';
import { Link } from "react-router-dom";
import axios from 'axios';

// import Header from "./Header";

const Register = () => 
{
    const [vFirstname_er,setFirstname_er]   = useState('');
    const [vLastname_er,setLastname_er]     = useState('');
    const [vEmail_er,setEmail_er]           = useState('');
    const [vPassword_er,setPassword_er]     = useState('');

    function register() 
    {
        var vFirstname  = document.getElementById('Firstname').value;
        var vLastname   = document.getElementById('vLastname').value;
        var vEmail      = document.getElementById('vEmail').value;
        var vPassword   = document.getElementById('vPassword').value;
        
        var error = false;
        if (vFirstname){ 
            setFirstname_er(''); 
        }
        else 
        {
            setFirstname_er("Please Enter Firstname");
            error = true;
        }

        if (vLastname)
        { 
            setLastname_er(''); 
        }
        else 
        {
            setLastname_er("Please Enter Lastname");
            error = true;
        }

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

        var url = 'http://localhost:5000/api/v1/employee';
       
        if (error==false)
        {
            // const form_data = new FormData();
            // form_data.append('vFirstname', vFirstname);
            // form_data.append('vLastname', vLastname);
            // form_data.append('vEmail', vEmail);
            // form_data.append('vPassword', vPassword);

            // console.log("save data 00",form_data);

            // let headers = new Headers();

            // headers.append('Content-Type', 'application/json');
            // headers.append('Accept', 'application/json');
            // // headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
            // headers.append('Access-Control-Allow-Credentials', 'true');
            // headers.append('GET', 'POST', 'OPTIONS');

            axios({
                method: "POST",
                url: url,
                data: {vFirstname:vFirstname,vLastname:vLastname,vEmail:vEmail,vPassword:vPassword},
                // headers:headers
              })
            .then(res => {
                alert('ok');
                // if (res.data.Status == '0') {
                //     setGif(false);
                //     toast.success(res.data.message, {
                //         position: "top-center",
                //         autoClose: 5000,
                //         hideProgressBar: false,
                //         closeOnClick: true,
                //         pauseOnHover: true,
                //         draggable: true,
                //         progress: undefined,
                //     });

                //     setTimeout(function () {
                //         history.push("/admin/banner");
                //     }, 2000);
                // }
                // else {
                //     setGif(false);
                //     toast.error(res.data.message, {
                //         position: "top-center",
                //         autoClose: 5000,
                //         hideProgressBar: false,
                //         closeOnClick: true,
                //         pauseOnHover: true,
                //         draggable: true,
                //         progress: undefined,
                //     });
                // }
            })
            .catch(error => {
            })
        }
    }

    return(
        <>
        {/* <Header/> */}
            <div className="App">
                <form className="forms">
                <CustomInput
                    labelText="Firstname"
                    id="Firstname"
                    formControlProps={{
                    fullWidth: true
                    }}
                    type="text"
                    
                />
                <span style={{'color' : 'red'}}>{vFirstname_er}</span>
                <CustomInput
                    labelText="Lastname"
                    id="vLastname"
                    formControlProps={{
                    fullWidth: true
                    }}
                    
                    type="text"
                />
                <span style={{'color' : 'red'}}>{vLastname_er}</span>
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

                <Button type="button" color="primary" onClick={register} className="form__custom-button">
                    Register
                </Button>
                <Link to='/'>
                    <a>
                        Login
                    </a>
                </Link>
                </form>
            </div>
        </>
    )
}

export default Register;