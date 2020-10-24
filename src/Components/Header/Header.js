import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>
                {/* <button onClick={()=> setLoggedInUser({})}>Sign Out</button> */}
                {
              loggedInUser.email
              ?
              <>
              <Link><button  >{loggedInUser.name}</button></Link>
              <button onClick={()=> setLoggedInUser({})}  color="inherit">Sign Out</button>
              </>
              :
              <Link to="/login" ><button >Login</button></Link>
            }
           
            </nav>
        </div>
    );
};

export default Header;