import React, { useState } from "react";
import Button from '../component/Button';
import CustomInput from '../component/CustomInput';
import { Link } from "react-router-dom";
import { uid} from 'rand-token';
import { useHistory } from "react-router-dom";

import axios from 'axios';

// import Header from "./Header";

const Dashboard = () => 
{
    const history = useHistory();
    // var token = uid(12);

    // console.log("jayesh ",token);

    const [Title,setTitle]       = useState('');
    const [Author,setAuthor]     = useState('');
    const [Price,setPrice]       = useState('');

    function book_added() 
    {
        
        var Title      = document.getElementById('Title').value;
        var Author     = document.getElementById('Author').value;
        var Price     = document.getElementById('Price').value;
        var error = false;
    
        if(Title)
        { 
            setTitle(''); 
        }
        else 
        {
            setTitle("Please Enter Book Title");
            error = true;
        }
    
        if(Author)
        { 
            setAuthor(''); 
        }
        else 
        {
            setAuthor("Please Enter Author Name");
            error = true;
        }

        if(Price)
        { 
            setPrice(''); 
        }
        else 
        {
            setPrice("Please Enter Book Price");
            error = true;
        }

        var url = 'http://localhost:5000/api/v1/employee/booksave';
       
        if (error==false)
        {
        
            axios({
                method: "POST",
                url: url,
                data: {Title:Title,Author:Author,Price:Price},
                // headers:headers
              })
            .then(res => {
                if (res.status == 200) 
                {
                    // alert();
                    history.push("/listing");
                  
                }
                else {
                    // history.push("/register");
                }
            })
            .catch(error => {
            })
        }
    }
   
    return(
        <>
         <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="/dashboard">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/listing">Book Listing</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/dashboard">Book Added</a>
                </li>

                
               
                </ul>
            </div>
        </nav>

            <div className="App">
                <h2>Book Added</h2>
                <form className="form">
                <CustomInput
                    labelText="Title"
                    id="Title"
                    formControlProps={{
                    fullWidth: true
                    }}
                    
                    type="text"
                />
                 <span style={{'color' : 'red'}}>{Title}</span>
                <CustomInput
                    labelText="Author"
                    id="Author"
                    formControlProps={{
                    fullWidth: true
                    }}
                    type="text"
                />
                 <span style={{'color' : 'red'}}>{Author}</span>
                <CustomInput
                    labelText="Price"
                    id="Price"
                    formControlProps={{
                    fullWidth: true
                    }}
                    type="number"
                />

                 <span style={{'color' : 'red'}}>{Price}</span>

                <Button type="button" onClick={book_added} color="primary" className="form__custom-button">
                    save
                </Button>
                </form>
            </div>
        </>
    )
}

export default Dashboard;