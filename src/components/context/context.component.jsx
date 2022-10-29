import { createContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { onAuthStateChangedListener } from "../../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

//the actuall value that we want to acces
export const UserContext  = createContext({

currentUser:null,
setCurrentUser: () => null


})
//the providor its the component
export const UserPorvider = ({children}) =>{
    
const [currentUser, setCurrentUser] = useState(null)
const value = {currentUser,setCurrentUser}

useEffect(()=>{
    const unsuscribe = onAuthStateChangedListener((user)=>{
        if (user){ //if a user comes trough it will set the if else statement

            createUserDocumentFromAuth(user)
        }
             setCurrentUser(user)

 
    })
    return unsuscribe
 }

 ,[])   
return <UserContext.Provider value={value}>{children}</UserContext.Provider>
    
    
}


