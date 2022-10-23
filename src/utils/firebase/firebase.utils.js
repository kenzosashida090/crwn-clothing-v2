import { initializeApp } from "firebase/app";
import { FacebookAuthProvider } from "firebase/auth";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
    } from "firebase/auth"

import {
    getFirestore,
    doc, //retrieve doc isnide our database 
    getDoc, 
    setDoc
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDInFFyoaeq5cAovEpLx789B53gM_k2KWY",
    authDomain: "clothes-db-f1228.firebaseapp.com",
    projectId: "clothes-db-f1228",
    storageBucket: "clothes-db-f1228.appspot.com",
    messagingSenderId: "404439792812",
    appId: "1:404439792812:web:aa1549b993c3cb8203b309"
  };
 


  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  provider.setCustomParameters({
        prompt:"select_account"
  });

  export const auth = getAuth();
  export const SignWithGooglePopup = () => signInWithPopup(auth,provider)
  export const SignWithFacebookPopup = () => signInWithPopup(auth,facebookProvider)



  export const db = getFirestore() // allows us to tell firebase when we want to set a doc o get a doc

  export const createUserDocumentFromAuth = async (userAuth) =>{
        const userDocRef = doc(db,'users',userAuth.uid)

        const userResponse = await getDoc(userDocRef)
        
        if(!userResponse.exists()){
            const {displayName, email} = userAuth
            const createdAt =new Date();
            try{
                await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt
                })
            }catch(error){
                console.log('error creating the user',error.message);

            }
        }
    return userDocRef
  }
 
  export const createUserFacebookFromAuth = async (userAuth) =>{
    const userDocRef = doc(db,'user',userAuth.uid)

    const userResponse = await getDoc(userDocRef)
  }
  //for our auth theres only one way to auth but with signin wit pop up 
  //we need to provide the auth and the provider that in this case is a google auth provider
  // So this is a class that we can set if we want a facebook auth or a github auth 