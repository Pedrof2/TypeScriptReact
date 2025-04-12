import { createContext, useState } from "react";


interface IAppContext {
    user: String,
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void //arrow function
  }
  
  export const AppContext = createContext({} as IAppContext); //a partir desse context, em qualquer lugar é possível acessar
  
  export const AppContextProvider = ({ children }: any) => { //estado global
    const [isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
    
    
    const user = 'Pedrinho'
    
  
  
    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }} > 
  
        {children} 
  
      </AppContext.Provider>
    )
  }