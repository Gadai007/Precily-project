import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidenav, setSidenav] = useState(false);
 
  const checkStatus=() =>{
    
   setSidenav(!sidenav)
  }
  return (
    <React.Fragment>
        <nav>
          <div className="nav-wrapper">
            <Link className="brand-logo">PRECILY</Link>
            <Link className="sidenav-trigger">
              <i className="material-icons chekc" onClick={checkStatus}>menu</i>
            </Link>
            <ul id="nav-mobile" className="box right hide-on-med-and-down" >
              <li>
                <Link to='/'>Signup</Link>
              </li>
              <li>
                <Link to='/signin'>Signin</Link>
              </li>
            </ul>
          </div>
        </nav>
      <div className='opa' onClick={checkStatus} style={ !sidenav ? { display: 'none', opacity: 0}: { display: 'block', opacity: 1}}>

      </div>
      <ul className='sidenav' style={ !sidenav ? { transform: 'translateX(-100%)'}: { transform: 'translateX(0%)'}} onClick={checkStatus}>
        <li>
          <Link to='/'>Signup</Link>
        </li>
        <li>
          <Link to='/signin'>Signin</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;