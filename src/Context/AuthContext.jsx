import { createContext, useReducer, useState } from "react"



export const AuthContext = createContext()

const authReducer=(state, action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":{
            return {
                ...state,
                isAuth: true,
                token: action.payload.token
            }
        }
        case "LOGOUT_SUCCESS":{
            return {
                ...state,
                isAuth: false,
                token: null
            }
        }

        default :{
            return state
        }
    }
}
    





function AuthContextWrapper({children}){

 const [state, dispatch] = useReducer(authReducer, {isAuth: false, token: null})


    return (
  
        <AuthContext.Provider value={[state,dispatch]}>
            {children}
        </AuthContext.Provider>


    )
}


export default AuthContextWrapper
