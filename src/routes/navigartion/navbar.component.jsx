import React from "react";
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss'
// import {ReactComponent as imageLogo} from './assets/image2v.svg'

const NavigationBar = ()=>{
    return(
        <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
           <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP

            </Link>
        </div>
        </div>
          <Outlet/>
  
      
      </Fragment>
    )
  
  }
  export default NavigationBar