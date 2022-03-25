import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";

const Listing = () => 
{
    const history               = useHistory();
    const [Book,setBook]        = useState([]);

    const bookdata_get = async () => 
    {
        var url = 'http://localhost:5000/api/v1/register/all_book';
        const bookdata = await axios.get(url);
        if(bookdata.data)
        {
            setBook(bookdata.data);
        }
    };

    useEffect(() => 
    {
        bookdata_get();
    }, []);

    function delete_data(e)
    {
        var id = e.target.id;
        var delete_url = `http://localhost:5000/api/v1/register/delete/${id}`;

        axios({
            method: "DELETE",
            url: delete_url,
            data: {'id': 'id'},
            })
        .then(res => 
        {
            console.log(res);
            if (res.status == 200) 
            {
                bookdata_get()
            }
            else {
            }
        })
        .catch(error => {
        })
    }

    return(
        <>
        <Header/>
        <div className="App App1">
            <h2>Book Data Listing</h2>
            
            <div class="table-responsive">          
                <table class="table">
                    <thead>
                    <tr>
                        <th>Id</th>
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
                                        <button id={`${book.id}`} onClick={delete_data} className="btn btn-danger">Delete</button>&nbsp;
                                        <Link to={`/edit/${book.id}`}>
                                            <button id={`${book.id}`} className="btn btn-primary">Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                            })
                            :
                            <tr>
                                <td colspan="5">Record Not Found !</td>
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