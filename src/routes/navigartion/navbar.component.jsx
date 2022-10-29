import React from "react";
import { Outlet } from 'react-router-dom';
import { Fragment,useContext } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../components/context/context.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { DropDownBoxContext } from "../../components/context/dropdownContext";
import CartShopping from "../../components/cartShopping/cartShopping.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { NavigationContainer,LogoContainer,NavLinks,NavLink } from "./navigation.styles";
// import {ReactComponent as imageLogo} from './assets/image2v.svg'

const NavigationBar = ()=>{
  const {currentUser} =  useContext(UserContext)
  const {isCartOpen} = useContext(DropDownBoxContext)
  // console.log(currentUser);
 
  console.log(currentUser);
    return(
        <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
           <CrwnLogo className="logo"/>
           </LogoContainer>
        <NavLinks>
            <NavLink to="/shop">
                Shop

            </NavLink>
            {currentUser ? <><NavLink as='span' onClick={signOutUser}>Sign Out</NavLink></> 
              :
              <>
              <NavLink to="/Auth">
                Sign In 

            </NavLink>

              </>
              

            }
            <CartShopping/>

            </NavLinks>
        {isCartOpen && <CartDropdown />}
        </NavigationContainer>
          <Outlet/>
  
      
      </Fragment>
    )
  
  }
  export default NavigationBar