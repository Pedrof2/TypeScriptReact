import { get } from "http";
import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";


interface IAppContext {
    user: String,
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void //arrow function
  }
  
  export const AppContext = createContext({} as IAppContext); //a partir desse context, em qualquer lugar é possível acessar
  
  export const AppContextProvider = ({ children }: any) => { //estado global
    const [isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
    
    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const {login} = JSON.parse(storage)
        console.log(login)
        setIsLoggedIn(login)
    
       }
   }, [])
    
    

    const user = 'Pedrinho'
  
    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }} > 
  
        {children} 
  
      </AppContext.Provider>
    )
  }