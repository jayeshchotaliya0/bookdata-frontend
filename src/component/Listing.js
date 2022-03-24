import React, { useState ,useEffect } from "react";
import Button from '../component/Button';
import CustomInput from '../component/CustomInput';
import { Link } from "react-router-dom";
import { uid} from 'rand-token';
import { useHistory } from "react-router-dom";

import axios from 'axios';

// import Header from "./Header";

const Listing = () => 
{
    const history = useHistory();
    // var token = uid(12);

    // console.log("jayesh ",token);

    const [Book,setBook]       = useState([]);


    const bookdata_get = async () => {
      
        var url = 'http://localhost:5000/api/v1/employee/all_book';
        const bookdata = await axios.get(url);
        console.log(bookdata.data.rows);
        if(bookdata.data.rows)
        {
            setBook(bookdata.data.rows);
        }
    
      };
      useEffect(() => {
        bookdata_get();
      }, []);

      function delete_data(e)
      {
        var id = e.target.id;

        var delete_url = `http://localhost:5000/api/v1/employee/delete/${id}`;

        axios({
            method: "DELETE",
            url: delete_url,
            data: {'id': 'id'},
            // headers:headers
          })
        .then(res => 
        {
            console.log(res);
            if (res.status == 200) 
            {
                // alert();
               window.location.reload(false);

              
            }
            else {
                // history.push("/register");
            }
        })
        .catch(error => {
        })

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
                    <a class="nav-link" href="/dashboard">Book Added</a>
            </li>
            
            </ul>
        </div>
        </nav>

        <div className="App">
            <h2>Book Data Listing</h2>
            
            <div class="table-responsive">          
                <table class="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            Book.length >0 ?
                            Book.map(function(book,index){
                                return <tr key={index}>
                                    <td>{book.id}</td>
                                    <td>{book.book_title}</td>
                                    <td>{book.book_author}</td>
                                    <td>{book.price}</td>
                                    <td>
                                        <button id={`${book.id}`} onClick={delete_data} className="btn btn-danger">Delete</button>
                                        <a href={`/edit/${book.id}`}>
                                         <button id={`${book.id}`} className="btn btn-primary">Edit</button>
                                        </a>
                                       
                                    </td>
                                </tr>
                            })
                            :
                            <tr>
                                <td>Record Not Found !</td>
                            </tr>
                        }
                   
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default Listing;