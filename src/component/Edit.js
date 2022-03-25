import React, { useState ,useEffect } from "react";
import Button from '../component/Button';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import Header from "./Header";

const Edit = () => 
{
    const history                   = useHistory();
    const params                    = useParams();
    const [Book,setBook]            = useState([]);
    const [Title,setTitle]          = useState('');
    const [Author,setAuthor]        = useState('');
    const [Price,setPrice]          = useState('');
    const [Title_e,setTitle_e]      = useState('');
    const [Author_e,setAuthor_e]    = useState('');
    const [Price_e,setPrice_e]      = useState('');

    const editdata = async () => 
    {
        var id = params.id;
        var url = `http://localhost:5000/api/v1/register/edit/${id}`;
        const bookdata = await axios.get(url);
        if(bookdata.data.rows)
        {
            setTitle_e(bookdata.data.rows[0].book_title);
            setAuthor_e(bookdata.data.rows[0].book_author);
            setPrice_e(bookdata.data.rows[0].price);
           
        }
      };
      useEffect(() => {
        editdata();
      }, []);

    function book_edit() 
    {  
        var Title      = document.getElementById('Title').value;
        var Author     = document.getElementById('Author').value;
        var Price     = document.getElementById('Price').value;
        var id = params.id;
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
       
        if (error==false)
        {
            var url = `http://localhost:5000/api/v1/register/edit/${id}`;
            axios({
                method: "PUT",
                url: url,
                data: {Title:Title_e,Author:Author_e,Price:Price_e},
              })
            .then(res => {
                if (res.status == 200) 
                {
                    Swal.fire(
                        'Book Update!',
                        'Book Update Successfully',
                        'success'
                    )
                    history.push("/listing");
                }
                else {
                    Swal.fire(
                        'Error!',
                        'Server Error ',
                        'error'
                    )
                }
            })
            .catch(error => {
            })
        }
    }
    
    return(
        <>
          <Header />
            <div className="App">
                <h2>Book Added</h2>
                <form className="form">
                <label>Book Title</label>
                <input type="text" className="form-control" onChange={(e)=>setTitle_e(e.target.value)} id="Title" value={Title_e}/>
                <span style={{'color' : 'red'}}>{Title}</span>

                <label>Book Author</label>
                <input type="text" className="form-control" onChange={(e)=>setAuthor_e(e.target.value)} id="Author" value={Author_e}/>

                <span style={{'color' : 'red'}}>{Author}</span>
                <label>Price</label>
                <input type="number" className="form-control" onChange={(e)=>setPrice_e(e.target.value)} id="Price" value={Price_e}/>

                 <span style={{'color' : 'red'}}>{Price}</span>

                <Button type="button" onClick={book_edit} color="primary" className="form__custom-button">
                    save
                </Button>
                </form>
            </div>
        </>
    )
}

export default Edit;