import React from "react";
import Button from '../component/Button';
import CustomInput from '../component/CustomInput';

import { Link } from "react-router-dom";
// import Header from "./Header";

const Login = () => {
    return(
        <>
        {/* <Header/> */}
            <div className="App">
                <form className="form">
                <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                    fullWidth: true
                    }}
                    
                    type="text"
                />
                <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                    fullWidth: true
                    }}
                    type="password"
                />

                <Button type="button" color="primary" className="form__custom-button">
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