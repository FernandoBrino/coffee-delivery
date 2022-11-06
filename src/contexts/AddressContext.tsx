import { createContext, ReactNode } from "react";

interface AddressContextData {

}

interface AddressContextProviderProps {
    children: ReactNode;
}

export const AddressContext = createContext({} as AddressContextData)

export const AddressContextProvider = ({ children }: AddressContextProviderProps) => {
    return( 
        <AddressContext.Provider value={{}}>
            {children}
        </AddressContext.Provider>
    )
}