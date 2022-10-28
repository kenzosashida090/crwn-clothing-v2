import React from "react";
import { Outlet } from 'react-router-dom';
import { Fragment,useContext } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss'
import { UserContext } from "../../components/context/context.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { DropDownBoxContext } from "../../components/context/dropdownContext";
import CartShopping from "../../components/cartShopping/cartShopping.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
// import {ReactComponent as imageLogo} from './assets/image2v.svg'

const NavigationBar = ()=>{
  const {currentUser} =  useContext(UserContext)
  const {isCartOpen} = useContext(DropDownBoxContext)
  // console.log(currentUser);
 
  console.log(currentUser);
    return(
        <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
           <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                Shop

            </Link>
            {currentUser ? <><span className="nav-link" onClick={signOutUser}>Sign Out</span></> 
              :
              <>
              <Link className="nav-link " to="/Auth">
                Sign In 

            </Link>

              </>
              

            }
            <CartShopping/>

        </div>
        {isCartOpen && <CartDropdown />}
        </div>
          <Outlet/>
  
      
      </Fragment>
    )
  
  }
  export default NavigationBar