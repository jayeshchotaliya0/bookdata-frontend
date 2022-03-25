import * as React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Header = () => 
{
  const history                           = useHistory();
  const Logout = ()=>
  {
    sessionStorage.clear();
    history.push("/");
  } 
  return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
              <ul className="navbar-nav">
             
              <Link to="/dashboard">
                  <li className="nav-item">
                      <a className="nav-link active">Dashboard</a>
                  </li>
              </Link>
              <Link to="/">
                  <li className="nav-item ">
                      <a className="nav-link">Login</a>
                  </li>
              </Link>
              <Link to="/register">
                  <li className="nav-item">
                      <a className="nav-link">Register</a>
                  </li>
              </Link>
              
              <Link to="/listing">
              <li className="nav-item">
                  <a className="nav-link">Book Listing</a>
              </li>
              </Link>

              <Link to="/dashboard">
              <li className="nav-item">
                  <a className="nav-link">Book Added</a>
              </li>
              </Link>
              </ul>
              <button type="button" class="btn btn-primary btn-sm" onClick={Logout} style={{"float":"right"}}>Logout</button>
          </div>
        </nav>
  )
};
export default Header;
