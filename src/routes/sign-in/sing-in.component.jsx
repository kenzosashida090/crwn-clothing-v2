import { createUserDocumentFromAuth, SignWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { SignWithFacebookPopup } from "../../utils/firebase/firebase.utils";
const SignIn = ()=>{
    const logGoogleUser = async ()=>{
        const {user} = await SignWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>HELLO WORLD !</h1>
                <buttton onClick={logGoogleUser}>
                    SignIn with google

                </buttton>
        </div>
    )


}
const SignInFacebook =() =>{
    const logFacebookUser = async ()=>{
        const {user} = await SignWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
 
    return(
        <div>
            <buttton onClick={logFacebookUser}>
                    SignIn with Facebook

                </buttton>

            


        </div>
      
          
   

    )

} 
export default SignIn
export {SignInFacebook}