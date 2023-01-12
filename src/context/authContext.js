import { createContext } from "react";

export const authContext = createContext();

export function authProvider ({children}){

    return (
        <authContext.Provider value={{}}>
            {children}
        </authContext.Provider>
    )
}