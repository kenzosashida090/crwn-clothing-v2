
import React from "react";
import Button from "../button/button.component"
import {useState} from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormComponent from "../forms-components/form.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../routes/auth/sign-in.style.scss"
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import Button from '@mui/material/Button';
import "./signup-form.style.scss"

const SignUpForm = () => {
    const defaultFormatiFields ={
        displayName:'',
        email:"",
        password: "",
        confirmPassword: ""

    }
    //const {setCurrentUser} = useContext(UserContext)
    const [formFields,setFormFields] = useState(defaultFormatiFields)
    const {displayName,email,password,confirmPassword} = formFields
    const resetFormFields = ()=>{

        setFormFields(defaultFormatiFields)
    }
    const handleChange = (event) =>{
        const {name,value} = event.target
            
        setFormFields({...formFields, [name]: value})
    }
    const handleSubmit = async  (event) =>{
        event.preventDefault();
        
        if (password === confirmPassword){
            try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
                await createUserDocumentFromAuth(user,{displayName})
              //  setCurrentUser(user)

                resetFormFields()
            }catch(error){
            console.log(error.message);
            resetFormFields()
            }
        }

    }
    console.log(formFields);
    return ( 
        <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
        <FormComponent label="Display Name" type ="text" onChange={handleChange} name="displayName" value={displayName} required/>
   
        <FormComponent label="Email" type ="email" name="email" onChange={handleChange} value={email} required/>
   
        <FormComponent label="Password" type ="password" name="password" onChange={handleChange} value={password} required/>
       
        <FormComponent label="Confirm Password" type ="password" name="confirmPassword" onChange={handleChange} value={confirmPassword} required/>

       <Button type="submit" buttonType='inverted' color="secondary"  > <FontAwesomeIcon icon={solid("envelope")} size='2x' id="IconAwesomeMail" />  Sign Up  </Button> 
   
    </form>
    </div>
)
}

export default SignUpForm