import React from "react";
import { createUserDocumentFromAuth, SignWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { createUserFacebookFromAuth,createUserGitHubFromAuth } from "../../utils/firebase/firebase.utils";
import { SignWithFacebookPopup,SignWithGitHubPopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormComponent from "../forms-components/form.component";
import { useState } from "react";
import "../signUpForm/signup-form.style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button/button.component";
import "../../routes/auth/sign-in.style.scss"
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import Button from '@mui/material/Button';
import "./singIn.style.scss"
const SignInEmail = ()=>{
    const defaultFormatFields = {
        Email :'',
        Password: ''
    }
    const[formFields,setFormFields] = useState(defaultFormatFields)
    const {Email,Password} = formFields
    const resetForm= ()=>{
        setFormFields(defaultFormatFields)
    }
    const logGoogleUser = async ()=>{
        const {user} = await SignWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    const logFacebookUser = async ()=>{
        const {user} = await SignWithFacebookPopup();
        const userDocRef = await createUserFacebookFromAuth(user)
    }
    const logGitHubUser = async()=>{
        const {user} = await SignWithGitHubPopup()
        const userDocRef = await createUserGitHubFromAuth(user)

    }
    const handleChange = (event)=>{
        const {name,value} = event.target

        setFormFields({...formFields,[name]:value})
           
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(Email,Password)
            console.log(response);
            resetForm()
        }catch (error){
            console.log(error.message);

        }

    }
    return(
        <div className="sign-up-container">
        <h2>I already have an account</h2>
        <span> Sign In with your Email and Password</span>
        <form onSubmit={handleSubmit} >
            <FormComponent label="Email" type ="email" onChange={handleChange} name="Email" value={Email} required/>
            <FormComponent label="Password" type ="password" onChange={handleChange} name="Password" value={Password} required/>
            
            <div className="buttons-container">
            <Button  type="submit" buttonType="inverted" id="button-size">Sign In</Button>
            <Button type="button"  onClick={logGoogleUser} buttonType='google' id="button-size" ><FontAwesomeIcon id="IconAwesome" icon={brands('google')} size='2x'/> Sign In with google  </Button>
                
            <Button type="button" onClick={logFacebookUser} buttonType='facebook' id="button-size">
            <FontAwesomeIcon icon={brands('facebook')} size='2x' id="IconAwesome" />
                
                     Sign In with Facebook
             
            </Button>

            <Button type="button" onClick={logGitHubUser} buttonType='inverted' id="button-size">
            <FontAwesomeIcon icon={brands('github')} size='2x' id="IconAwesome" />
                
                     Sign In with GitHub
             
            </Button>
            </div>
        </form>
        </div>
    )

}
export default SignInEmail