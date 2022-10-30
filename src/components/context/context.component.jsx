import { createContext } from "react"
import { useEffect } from "react"
import { useState,useReducer } from "react"
import { onAuthStateChangedListener } from "../../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { creatAction } from "../../utils/firebase/reducer.utils"

//the actuall value that we want to acces
export const UserContext  = createContext({

currentUser:null,
setCurrentUser: () => null


})
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'


}
const userReducer = (state,action)=>{
    console.log("dispatched");
    console.log(action);
    const {type,payload} = action
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
        return{
            ...state,
            currentUser:payload
        }
        default:
            throw new Error(`Unhandeled error ${type} in userReducer`)

    }


}
//the providor its the component
const INITIAL_STATE = {
    currentUser:null
}
export const UserPorvider = ({children}) =>{

const [{currentUser},dispatch] = useReducer(userReducer,INITIAL_STATE)
console.log(currentUser);
const setCurrentUser = (user)=>{

        dispatch(creatAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
} 
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


